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

### 날짜/시간 형식
- 날짜는 `YYYY-MM-DD` 형식을 사용한다.
- 날짜+시간은 `YYYY-MM-DDTHH:mm:ss` 형식을 사용한다.
- 이번 프로젝트에서는 타임존 표기를 별도로 다루지 않는다.

### 삭제 응답 형식

```json
{
  "success": true,
  "data": null,
  "message": "삭제되었습니다."
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
- 외부 공개 경로는 Spring Boot 백엔드의 `/api/ai/*`를 유지하고, 내부적으로는 같은 인스턴스 안의 AI 서버 프로세스를 호출한다.
- 백엔드와 AI 서버 간 내부 통신은 Docker 네트워크를 사용한다.
- NGINX, 로드밸런싱, HTTPS는 이 프로젝트 API 범위에 포함하지 않는다.

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

### Response

```json
{
  "success": true,
  "data": {
    "id": 10,
    "title": "1차 회의 공지",
    "content": "금요일 6시 ZOOM 회의",
    "authorId": 1,
    "authorName": "김민수",
    "createdAt": "2026-03-16T19:00:00",
    "updatedAt": "2026-03-16T19:00:00"
  },
  "message": "공지가 생성되었습니다."
}
```

## 7.3 공지 상세 조회
`GET /api/teams/{teamId}/notices/{noticeId}`

### Response

```json
{
  "success": true,
  "data": {
    "id": 10,
    "title": "1차 회의 공지",
    "content": "금요일 6시 ZOOM 회의",
    "authorId": 1,
    "authorName": "김민수",
    "createdAt": "2026-03-16T19:00:00",
    "updatedAt": "2026-03-16T19:00:00"
  },
  "message": null
}
```

## 7.4 공지 수정
`PUT /api/teams/{teamId}/notices/{noticeId}`

### Request

```json
{
  "title": "수정된 회의 공지",
  "content": "금요일 7시로 변경"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "id": 10,
    "title": "수정된 회의 공지",
    "content": "금요일 7시로 변경",
    "authorId": 1,
    "authorName": "김민수",
    "createdAt": "2026-03-16T19:00:00",
    "updatedAt": "2026-03-16T20:00:00"
  },
  "message": "공지가 수정되었습니다."
}
```

## 7.5 공지 삭제
`DELETE /api/teams/{teamId}/notices/{noticeId}`

### Response

```json
{
  "success": true,
  "data": null,
  "message": "공지가 삭제되었습니다."
}
```

## 8. 일정 API

## 8.1 일정 목록 조회
`GET /api/teams/{teamId}/schedules`

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": 21,
      "title": "중간 점검 회의",
      "description": "발표 초안 공유",
      "startDateTime": "2026-03-20T18:00:00",
      "endDateTime": "2026-03-20T19:00:00",
      "location": "공학관 301호",
      "authorId": 1,
      "authorName": "김민수",
      "createdAt": "2026-03-16T19:00:00",
      "updatedAt": "2026-03-16T19:00:00"
    }
  ],
  "message": null
}
```

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

### Response

```json
{
  "success": true,
  "data": {
    "id": 21,
    "title": "중간 점검 회의",
    "description": "발표 초안 공유",
    "startDateTime": "2026-03-20T18:00:00",
    "endDateTime": "2026-03-20T19:00:00",
    "location": "공학관 301호",
    "authorId": 1,
    "authorName": "김민수",
    "createdAt": "2026-03-16T19:00:00",
    "updatedAt": "2026-03-16T19:00:00"
  },
  "message": "일정이 생성되었습니다."
}
```

## 8.3 일정 상세 조회
`GET /api/teams/{teamId}/schedules/{scheduleId}`

### Response
- 일정 단건 조회 응답은 `8.2 일정 생성`의 `data` 구조와 동일하다.

## 8.4 일정 수정
`PUT /api/teams/{teamId}/schedules/{scheduleId}`

### Request

```json
{
  "title": "수정된 중간 점검 회의",
  "description": "발표 초안 최종 공유",
  "startDateTime": "2026-03-20T19:00:00",
  "endDateTime": "2026-03-20T20:00:00",
  "location": "공학관 301호"
}
```

### Response
- 일정 수정 응답은 `8.2 일정 생성`의 `data` 구조와 동일하다.

## 8.5 일정 삭제
`DELETE /api/teams/{teamId}/schedules/{scheduleId}`

### Response

```json
{
  "success": true,
  "data": null,
  "message": "일정이 삭제되었습니다."
}
```

## 9. 할 일 API

## 9.1 할 일 목록 조회
`GET /api/teams/{teamId}/tasks`

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": 31,
      "title": "발표 자료 초안 만들기",
      "description": "발표 자료 1차 초안 작성",
      "assigneeId": 12,
      "assigneeName": "이서연",
      "authorId": 1,
      "authorName": "김민수",
      "dueDate": "2026-03-20",
      "status": "TODO",
      "createdAt": "2026-03-16T19:00:00",
      "updatedAt": "2026-03-16T19:00:00"
    }
  ],
  "message": null
}
```

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

### Response
- 할 일 단건 조회 응답은 `9.1 할 일 목록 조회`의 항목 구조와 동일하다.

## 9.4 할 일 수정
`PUT /api/teams/{teamId}/tasks/{taskId}`

### Request

```json
{
  "title": "발표 자료 최종본 만들기",
  "description": "발표 자료 최종본 작성",
  "assigneeId": 12,
  "dueDate": "2026-03-21",
  "status": "IN_PROGRESS"
}
```

### Response
- 할 일 수정 응답은 `9.2 할 일 생성`의 `data` 구조에 `authorId`, `authorName`, `createdAt`, `updatedAt`가 포함된 형태를 사용한다.

## 9.5 할 일 상태 변경
`PATCH /api/teams/{teamId}/tasks/{taskId}/status`

### Request

```json
{
  "status": "DONE"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "id": 31,
    "status": "DONE"
  },
  "message": "할 일 상태가 변경되었습니다."
}
```

## 9.6 할 일 삭제
`DELETE /api/teams/{teamId}/tasks/{taskId}`

### Response

```json
{
  "success": true,
  "data": null,
  "message": "할 일이 삭제되었습니다."
}
```

## 10. 회의록 API

## 10.1 회의록 목록 조회
`GET /api/teams/{teamId}/notes`

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": 44,
      "title": "1차 회의록",
      "content": "역할 분담과 일정 확정",
      "meetingDate": "2026-03-16",
      "authorId": 1,
      "authorName": "김민수",
      "createdAt": "2026-03-16T19:00:00",
      "updatedAt": "2026-03-16T19:00:00"
    }
  ],
  "message": null
}
```

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

### Response

```json
{
  "success": true,
  "data": {
    "id": 44,
    "title": "1차 회의록",
    "content": "역할 분담과 일정 확정",
    "meetingDate": "2026-03-16",
    "authorId": 1,
    "authorName": "김민수",
    "createdAt": "2026-03-16T19:00:00",
    "updatedAt": "2026-03-16T19:00:00"
  },
  "message": "회의록이 생성되었습니다."
}
```

## 10.3 회의록 상세 조회
`GET /api/teams/{teamId}/notes/{noteId}`

### Response
- 회의록 단건 조회 응답은 `10.2 회의록 생성`의 `data` 구조와 동일하다.

## 10.4 회의록 수정
`PUT /api/teams/{teamId}/notes/{noteId}`

### Request

```json
{
  "title": "수정된 1차 회의록",
  "meetingDate": "2026-03-16",
  "content": "역할 분담, 일정 확정, 중간 점검 준비"
}
```

### Response
- 회의록 수정 응답은 `10.2 회의록 생성`의 `data` 구조와 동일하다.

## 10.5 회의록 삭제
`DELETE /api/teams/{teamId}/notes/{noteId}`

### Response

```json
{
  "success": true,
  "data": null,
  "message": "회의록이 삭제되었습니다."
}
```

## 11. AI API

- `POST /api/ai/meeting-notes/action-items`
- `POST /api/ai/documents/tone`
- `POST /api/ai/teams/progress-summary`
- `POST /api/ai/teams/qna`
- 요청/응답 예시와 RAG 규칙은 `AI_SPEC.md`를 기준으로 한다.

## 12. 예외 처리 규칙

| 상황 | 상태 코드 | 메시지 |
| --- | --- | --- |
| 인증 실패 | 401 | 로그인 정보가 올바르지 않습니다. |
| 권한 없음 | 403 | 해당 팀에 접근할 권한이 없습니다. |
| 리소스 없음 | 404 | 존재하지 않는 데이터입니다. |
| 검증 실패 | 400 | 필수 입력값이 누락되었습니다. |
| 서버 오류 | 500 | 서버 오류가 발생했습니다. |
