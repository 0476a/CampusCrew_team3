# Frontend STEP 6

## 이 STEP에서 왜 이걸 배우는가

마지막 단계에서는 "기능이 있다"보다 "실제로 끊기지 않고 시연된다"가 더 중요하다.  
프론트는 배포 환경에서 경로, API 주소, 오류 처리, AI 응답 대기 시간을 다시 점검해야 한다.

## 이번 프로젝트에서 어디에 쓰는가

- 최종 데모 시나리오 점검
- 배포 환경 API 주소 확인
- 인증 만료 처리 점검
- AI 실패 응답 화면 점검
- 모바일 폭과 좁은 화면 점검

## 먼저 이해할 핵심 개념

- 개발 환경과 배포 환경 차이
- 절대 경로와 상대 경로 문제
- 데모 시나리오 중심 점검
- 실패 상태가 있는 화면과 없는 화면 구분
- 느린 응답을 견디는 UI

## 꼭 알아야 할 용어

- `production build`: 실제 배포 기준으로 빌드된 결과물
- `environment variable`: 환경마다 달라지는 API 주소 같은 값
- `fallback UI`: 정상 응답이 아닐 때 보여 주는 대체 화면
- `demo flow`: 발표 때 실제로 따라갈 화면 순서
- `responsive`: 화면 너비에 따라 레이아웃이 자연스럽게 바뀌는 것

## 추천 학습 순서

1. [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)의 `STEP 6`을 읽는다.
2. [DEPLOYMENT](../../common/DEPLOYMENT.md)의 배포 구조와 운영 원칙을 읽는다.
3. [UI_SPEC](../../frontend/UI_SPEC.md)의 공통 화면 원칙과 반응형 규칙을 다시 본다.
4. 인증, 팀 진입, 공지, 일정, 할 일, 회의록, AI 기능 순으로 데모 흐름을 적어 본다.
5. 각 화면의 로딩, 빈 상태, 에러 상태가 빠지지 않았는지 확인한다.

## 먼저 읽을 문서

1. [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)의 `STEP 6`
2. [DEPLOYMENT](../../common/DEPLOYMENT.md)
3. [UI_SPEC](../../frontend/UI_SPEC.md)
4. [PLAN](../../common/PLAN.md)의 `STEP 6`

## 외부 자료 링크

- React: [Build a React App for Production](https://react.dev/learn/start-a-new-react-project)
- MDN: [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- web.dev: [Responsive Web Design Basics](https://web.dev/articles/responsive-web-design-basics)
- MDN: [HTTP response status codes](https://developer.mozilla.org/docs/Web/HTTP/Reference/Status)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [DEPLOYMENT](../../common/DEPLOYMENT.md)에서 수동 `git push` / `git pull` 운영 방식을 다시 본다.
- [API_SPEC](../../backend/API_SPEC.md)의 공통 에러 응답 형식을 다시 확인한다.
- [AI_SPEC](../../ai/AI_SPEC.md)의 실패 처리 규칙과 출처 반환 규칙을 다시 본다.
- [PLAN](../../common/PLAN.md)의 `STEP 6` 완료 기준과 체크리스트를 점검한다.

## 자주 막히는 지점

- 로컬에서는 되던 경로가 배포본에서는 깨지는 문제를 늦게 확인한다.
- 인증 만료와 401 응답 처리를 마지막까지 미룬다.
- AI 요청이 느릴 때 로딩 상태 없이 멈춘 것처럼 보이게 둔다.
- 데모 흐름을 정리하지 않아 발표 때 화면 이동이 꼬인다.

## 가볍게 해볼 것

- "로그인 -> 팀 진입 -> 공지 -> 일정 -> 할 일 -> 회의록 -> AI 기능" 순서를 적어 본다.
- 가장 느릴 것 같은 화면 2개를 적고, 로딩 UI가 있는지 점검해 본다.
- 401, 404, 500 중 어떤 오류가 어디서 보일지 한 줄씩 적어 본다.

## 핵심 질문

1. 로컬에서는 되는데 배포본에서 깨질 수 있는 대표 원인을 설명할 수 있는가
2. 데모 시나리오를 왜 미리 정리해야 하는가
3. AI 응답이 느릴 때 프론트가 어떤 상태를 보여줘야 하는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 내가 점검할 데모 흐름:
> - 배포 환경에서 가장 먼저 확인할 오류 처리:
> - 가장 걱정되는 화면 1개와 이유:

## 체크리스트

- [ ] 배포 환경에서 점검해야 할 화면 흐름을 알고 있다.
- [ ] 인증 만료와 AI 실패 응답을 어디서 처리할지 이해했다.
- [ ] 반응형과 좁은 화면에서 깨질 수 있는 지점을 떠올릴 수 있다.
- [ ] 데모 시나리오를 따라가며 점검해야 한다는 점을 이해했다.
