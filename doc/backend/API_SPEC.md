# CampusCrew API 명세서

## 1. 문서 목적
이 문서는 프론트엔드와 백엔드가 병렬 개발하기 위해 먼저 고정해야 할 API 계약을 정리한 문서다.  
모든 응답 구조와 필드명은 이 문서 기준으로 통일한다.

## 2. 공통 규칙

### Base URL
```text
/api
```

### Content-Type
```text
application/json
```

### 인증 방식
- 로그인 성공 후 Access Token 기반 인증을 사용한다.
- 모든 보호 API는 아래 헤더를 사용한다.

```text
Authorization: Bearer {accessToken}
```

### 공통 응답 형식

```json
{
  "success": true,
  "data": {},
  "message": null
}
```

### 공통 에러 응답 형식

```json
{
  "success": false,
  "data": null,
  "message": "필수 입력값이 누락되었습니다."
}
```

## 3. 상태값 정의

### TaskStatus
- `TODO`
- `IN_PROGRESS`
- `DONE`

### TeamRole
- `OWNER`
- `MEMBER`

### AI API 기준
- AI API 상세 요구사항은 `AI_SPEC.md`를 기준으로 한다.
- 일반 CRUD API와 AI API는 분리한다.
- AI API 실패 시 일반 CRUD API는 영향받지 않는다.

## 4. 인증 API

## 4.1 회원가입
`POST /api/auth/signup`

### Request

```json
{
  "name": "김민수",
  "studentId": "20251234",
  "email": "minsu@example.com",
  "password": "test1234"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "김민수",
    "email": "minsu@example.com"
  },
  "message": "회원가입이 완료되었습니다."
}
```

## 4.2 로그인
`POST /api/auth/login`

### Request

```json
{
  "email": "minsu@example.com",
  "password": "test1234"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "accessToken": "jwt-token-sample",
    "user": {
      "id": 1,
      "name": "김민수",
      "email": "minsu@example.com"
    }
  },
  "message": "로그인에 성공했습니다."
}
```

## 4.3 내 정보 조회
`GET /api/auth/me`

### Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "김민수",
    "email": "minsu@example.com",
    "studentId": "20251234"
  },
  "message": null
}
```

## 5. 팀 API

## 5.1 내 팀 목록 조회
`GET /api/teams`

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": 3,
      "name": "캡스톤 1팀",
      "courseName": "웹프로그래밍",
      "description": "팀플 관리용 공간",
      "memberCount": 4
    }
  ],
  "message": null
}
```

## 10. AI API

- `POST /api/ai/meeting-notes/action-items`
- `POST /api/ai/documents/tone`
- `POST /api/ai/teams/progress-summary`
- `POST /api/ai/teams/qna`
- 요청/응답 예시와 RAG 규칙은 `AI_SPEC.md`를 기준으로 한다.

## 5.2 팀 생성
`POST /api/teams`

### Request

```json
{
  "name": "캡스톤 1팀",
  "courseName": "웹프로그래밍",
  "description": "팀플 관리용 공간"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "id": 3,
    "name": "캡스톤 1팀",
    "courseName": "웹프로그래밍",
    "description": "팀플 관리용 공간",
    "joinCode": "ABCD12"
  },
  "message": "팀이 생성되었습니다."
}
```

## 5.3 팀 상세 조회
`GET /api/teams/{teamId}`

### Response

```json
{
  "success": true,
  "data": {
    "id": 3,
    "name": "캡스톤 1팀",
    "courseName": "웹프로그래밍",
    "description": "팀플 관리용 공간",
    "joinCode": "ABCD12",
    "ownerId": 1,
    "memberCount": 4
  },
  "message": null
}
```

## 5.4 팀 참여
`POST /api/teams/join`

### Request

```json
{
  "joinCode": "ABCD12"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "teamId": 3,
    "teamName": "캡스톤 1팀"
  },
  "message": "팀에 참여했습니다."
}
```

## 6. 대시보드 API

## 6.1 팀 대시보드 조회
`GET /api/teams/{teamId}/dashboard`

### Response

```json
{
  "success": true,
  "data": {
    "team": {
      "id": 3,
      "name": "캡스톤 1팀",
      "courseName": "웹프로그래밍"
    },
    "recentNotices": [
      {
        "id": 10,
        "title": "1차 회의 공지",
        "createdAt": "2026-03-16T19:00:00"
      }
    ],
    "upcomingSchedules": [
      {
        "id": 21,
        "title": "중간 점검 회의",
        "startDateTime": "2026-03-20T18:00:00"
      }
    ],
    "myTasks": [
      {
        "id": 31,
        "title": "발표 자료 초안 만들기",
        "status": "TODO",
        "dueDate": "2026-03-20"
      }
    ],
    "recentNotes": [
      {
        "id": 44,
        "title": "1차 회의록",
        "meetingDate": "2026-03-16"
      }
    ]
  },
  "message": null
}
```

## 7. 공지 API

## 7.1 공지 목록 조회
`GET /api/teams/{teamId}/notices`

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": 10,
      "title": "1차 회의 공지",
      "content": "금요일 6시 ZOOM 회의",
      "authorId": 1,
      "authorName": "김민수",
      "createdAt": "2026-03-16T19:00:00"
    }
  ],
  "message": null
}
```

## 7.2 공지 생성
`POST /api/teams/{teamId}/notices`

### Request

```json
{
  "title": "1차 회의 공지",
  "content": "금요일 6시 ZOOM 회의"
}
```

## 7.3 공지 상세 조회
`GET /api/teams/{teamId}/notices/{noticeId}`

## 7.4 공지 수정
`PUT /api/teams/{teamId}/notices/{noticeId}`

### Request

```json
{
  "title": "수정된 회의 공지",
  "content": "금요일 7시로 변경"
}
```

## 7.5 공지 삭제
`DELETE /api/teams/{teamId}/notices/{noticeId}`

## 8. 일정 API

## 8.1 일정 목록 조회
`GET /api/teams/{teamId}/schedules`

### Response 필드
- `id`
- `title`
- `description`
- `startDateTime`
- `endDateTime`
- `location`
- `authorId`
- `authorName`

## 8.2 일정 생성
`POST /api/teams/{teamId}/schedules`

### Request

```json
{
  "title": "중간 점검 회의",
  "description": "발표 초안 공유",
  "startDateTime": "2026-03-20T18:00:00",
  "endDateTime": "2026-03-20T19:00:00",
  "location": "공학관 301호"
}
```

## 8.3 일정 상세 조회
`GET /api/teams/{teamId}/schedules/{scheduleId}`

## 8.4 일정 수정
`PUT /api/teams/{teamId}/schedules/{scheduleId}`

## 8.5 일정 삭제
`DELETE /api/teams/{teamId}/schedules/{scheduleId}`

## 9. 할 일 API

## 9.1 할 일 목록 조회
`GET /api/teams/{teamId}/tasks`

### Response 필드
- `id`
- `title`
- `description`
- `assigneeId`
- `assigneeName`
- `authorId`
- `authorName`
- `dueDate`
- `status`

## 9.2 할 일 생성
`POST /api/teams/{teamId}/tasks`

### Request

```json
{
  "title": "발표 자료 초안 만들기",
  "description": "발표 자료 1차 초안 작성",
  "assigneeId": 12,
  "dueDate": "2026-03-20",
  "status": "TODO"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "id": 31,
    "title": "발표 자료 초안 만들기",
    "description": "발표 자료 1차 초안 작성",
    "assigneeId": 12,
    "assigneeName": "이서연",
    "dueDate": "2026-03-20",
    "status": "TODO"
  },
  "message": "할 일이 생성되었습니다."
}
```

## 9.3 할 일 상세 조회
`GET /api/teams/{teamId}/tasks/{taskId}`

## 9.4 할 일 수정
`PUT /api/teams/{teamId}/tasks/{taskId}`

## 9.5 할 일 상태 변경
`PATCH /api/teams/{teamId}/tasks/{taskId}/status`

### Request

```json
{
  "status": "DONE"
}
```

## 9.6 할 일 삭제
`DELETE /api/teams/{teamId}/tasks/{taskId}`

## 10. 회의록 API

## 10.1 회의록 목록 조회
`GET /api/teams/{teamId}/notes`

### Response 필드
- `id`
- `title`
- `content`
- `meetingDate`
- `authorId`
- `authorName`
- `createdAt`

## 10.2 회의록 생성
`POST /api/teams/{teamId}/notes`

### Request

```json
{
  "title": "1차 회의록",
  "meetingDate": "2026-03-16",
  "content": "역할 분담과 일정 확정"
}
```

## 10.3 회의록 상세 조회
`GET /api/teams/{teamId}/notes/{noteId}`

## 10.4 회의록 수정
`PUT /api/teams/{teamId}/notes/{noteId}`

## 10.5 회의록 삭제
`DELETE /api/teams/{teamId}/notes/{noteId}`

## 11. 예외 처리 규칙

| 상황 | 상태 코드 | 메시지 |
| --- | --- | --- |
| 인증 실패 | 401 | 로그인 정보가 올바르지 않습니다. |
| 권한 없음 | 403 | 해당 팀에 접근할 권한이 없습니다. |
| 리소스 없음 | 404 | 존재하지 않는 데이터입니다. |
| 검증 실패 | 400 | 필수 입력값이 누락되었습니다. |
| 서버 오류 | 500 | 서버 오류가 발생했습니다. |

## 12. 백엔드 구현 체크리스트
- 인증 필터 구성
- 공통 응답 객체 정의
- 공통 예외 처리기 정의
- TeamMember 기반 팀 소속 검증
- DTO 검증 어노테이션 적용
- 날짜/시간 직렬화 형식 프론트와 합의

## 13. 프론트 연동 체크리스트
- 로그인 성공 시 토큰 저장 위치 합의
- `teamId` 라우트 파라미터를 모든 팀 하위 요청에서 동일하게 사용
- 생성/수정/삭제 후 목록 재조회 수행
- 에러 메시지는 서버 원문보다 사용자 친화 문구 우선 표시
