# CampusCrew AI 명세서

## 1. 문서 목적

이 문서는 CampusCrew의 AI 기능 요구사항, 화면 연결 규칙, API 계약, 검색 범위, 실패 처리 규칙을 고정한다.

## 2. 적용 범위

- AI 기능은 아래 4개로 고정한다.
  - 회의록에서 액션 아이템 추출
  - 문서 톤 변환
  - 진행 상황 요약
  - 팀 문서 Q&A

## 3. 공통 규칙

- AI 기능은 사용자가 직접 실행할 때만 동작한다.
- AI 결과는 자동 저장하지 않는다.
- AI 응답은 항상 고정된 JSON 구조를 사용한다.
- 팀 문서 Q&A 응답에는 반드시 출처 문서를 포함한다.
- 외부 LLM 모델은 `gemini-2.5-flash-lite`로 고정한다.

## 4. AI 구조 기준

- 프론트는 계속 `/api/ai/*`만 호출한다.
- Spring Boot 백엔드는 인증과 팀 권한 검증을 한 뒤 같은 인스턴스 안의 AI 서버로 내부 요청을 보낸다.
- AI 서버는 프롬프트 구성, 응답 검증, 외부 LLM `gemini-2.5-flash-lite` 호출, RAG 검색을 담당한다.
- 애플리케이션 서버와 AI 서버는 GCP `e2-standard-2` 인스턴스 1대에서 함께 운영한다.
- 배포는 Docker 기반으로 하고, 백엔드와 AI 서버 간 내부 통신은 Docker 네트워크를 사용한다.
- NGINX, 로드밸런싱, HTTPS는 이번 범위에 포함하지 않는다.
- AI 기능 실패는 일반 CRUD 기능에 영향을 주지 않는다.

## 5. 기능 상세

### 5.1 회의록에서 액션 아이템 추출

- 연결 화면: 회의록 작성 화면
- 입력: 회의록 본문
- 출력:
  - `title`
  - `assigneeHint`
  - `dueDateHint`
- 동작:
  - 회의록 본문에서 실행 가능한 할 일 후보를 추출한다.
  - 결과는 할 일 생성 폼에 복사할 수 있는 형태로 보여준다.
- 출력 규칙:
  - `title`은 필수다.
  - `assigneeHint`는 없으면 `null`을 허용한다.
  - `dueDateHint`는 `YYYY-MM-DD` 또는 `null`을 사용한다.

### 5.2 문서 톤 변환

- 연결 화면: 공지 작성 화면
- 입력:
  - 문서 본문
  - 톤 값
- 문서 타입:
  - `NOTICE`
- 허용 톤:
  - `SHORT`
  - `FORMAL`
  - `PLAIN`
- 출력:
  - `content`
- 동작:
  - 같은 내용을 더 짧게, 더 정중하게, 더 평이하게 바꾼다.

### 5.3 진행 상황 요약

- 연결 화면: 팀 대시보드
- 입력:
  - `teamId`
- 출력:
  - `summary`
- 동작:
  - 공지, 일정, 할 일, 회의록 데이터를 바탕으로 팀 진행 상황 요약을 생성한다.
  - 요약은 대시보드에 텍스트 블록으로 보여준다.

### 5.4 팀 문서 Q&A

- 연결 화면: 팀 대시보드
- 입력:
  - `teamId`
  - `question`
- 출력:
  - `answer`
  - `sources`
- 검색 대상:
  - 공지
  - 일정
  - 할 일 설명
  - 회의록
- 동작:
  - 질문과 관련된 팀 문서를 검색한 뒤 답변을 생성한다.
  - 답변에는 출처 문서 목록을 함께 반환한다.
- 출처 규칙:
  - `sources`는 최대 3개까지 반환한다.
  - `type` 허용값은 `NOTICE`, `SCHEDULE`, `TASK`, `MEETING_NOTE`다.
  - 각 출처는 `type`, `id`, `title`을 반드시 포함한다.

## 6. RAG 규칙

- RAG는 팀 문서 Q&A에만 적용한다.
- 임베딩 대상은 공지, 일정, 할 일 설명, 회의록 본문이다.
- 문서는 팀 단위로만 검색한다.
- 문서는 청크 단위로 분리해 관리한다.
- 벡터 저장과 유사도 검색은 PostgreSQL + pgvector 기준으로 구현한다.
- 검색 결과는 최대 3개까지만 사용한다.
- 응답에는 사용한 출처 문서의 `type`, `id`, `title`을 포함한다.
- 질문과 관련된 문서가 없으면 없다고 답하고 추측하지 않는다.
- 원본 문서가 수정되거나 삭제되면 RAG 데이터도 함께 갱신한다.

## 7. UI 연결 규칙

- 회의록 작성 화면에는 `액션 아이템 추출` 버튼을 둔다.
- 공지 작성 화면에는 `톤 변환` 버튼을 둔다.
- 팀 대시보드에는 `진행 상황 요약` 버튼을 둔다.
- 팀 대시보드에는 `팀 문서 Q&A` 입력창과 실행 버튼을 둔다.
- AI 실행 중에는 중복 요청을 막는다.
- AI 실패 시 오류 메시지를 보여주고 기존 입력값은 유지한다.

## 8. API 계약

### 8.1 회의록 액션 아이템 추출
`POST /api/ai/meeting-notes/action-items`

Request

```json
{
  "teamId": 3,
  "content": "회의 원문 텍스트"
}
```

Response

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "title": "로그인 API 검증",
        "assigneeHint": "백엔드 A",
        "dueDateHint": "2026-04-10"
      }
    ]
  },
  "message": null
}
```

### 8.2 문서 톤 변환
`POST /api/ai/documents/tone`

Request

```json
{
  "teamId": 3,
  "type": "NOTICE",
  "content": "원본 문서 본문",
  "tone": "SHORT"
}
```

Response

```json
{
  "success": true,
  "data": {
    "content": "톤이 변환된 문서 본문"
  },
  "message": null
}
```

### 8.3 진행 상황 요약
`POST /api/ai/teams/progress-summary`

Request

```json
{
  "teamId": 3
}
```

Response

```json
{
  "success": true,
  "data": {
    "summary": "이번 주 진행 상황 요약"
  },
  "message": null
}
```

### 8.4 팀 문서 Q&A
`POST /api/ai/teams/qna`

Request

```json
{
  "teamId": 3,
  "question": "지난 회의에서 결정한 마감일이 뭐야?"
}
```

Response

```json
{
  "success": true,
  "data": {
    "answer": "다음 중간 점검 마감일은 2026-04-10이다.",
    "sources": [
      {
        "type": "MEETING_NOTE",
        "id": 12,
        "title": "4월 1주차 회의록"
      },
      {
        "type": "NOTICE",
        "id": 8,
        "title": "중간 점검 공지"
      }
    ]
  },
  "message": null
}
```

## 9. 실패 처리 규칙

- 모델 응답이 비어 있으면 실패로 처리한다.
- JSON 형식이 깨지면 실패로 처리한다.
- 팀 문서 Q&A에 출처가 없으면 실패로 처리한다.
- 회의록 액션 아이템 추출에서 `title`이 비어 있으면 실패로 처리한다.
- 실패 시 프론트엔드는 오류 문구를 보여주고 사용자가 직접 다시 시도하게 한다.

## 10. 구현 기준

- 프롬프트와 응답 형식은 코드와 문서에 동시에 고정한다.
- AI 기능은 STEP 5까지 1차 연동을 완료한다.
- 팀 문서 Q&A는 벡터 검색 기반으로 구현한다.
- RAG는 같은 `e2-standard-2` 인스턴스 안의 AI 서버 프로세스에서 처리한다.
- 벡터 저장소는 PostgreSQL의 pgvector로 고정한다.
- 외부 LLM 호출 모델은 `gemini-2.5-flash-lite`를 사용한다.
- 임베딩 모델은 pgvector에 저장 가능한 고정 차원 벡터를 반환하는 모델을 사용한다.
