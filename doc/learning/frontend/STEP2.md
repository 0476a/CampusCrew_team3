# Frontend STEP 2

## 이 STEP에서 왜 이걸 배우는가

이제 화면 구조를 이해했다면, 사용자가 실제로 로그인하고 이동하는 흐름을 다뤄야 한다.  
프론트엔드를 처음 맡으면 로그인 폼만 만들면 끝이라고 생각하기 쉽지만, 실제로는 보호 라우트, 토큰 저장, 에러 메시지, 새로고침 후 사용자 확인까지 같이 봐야 한다.

## 이번 프로젝트에서 어디에 쓰는가

- 로그인 폼
- 회원가입 폼
- 보호 라우트
- 로그인 후 `/teams` 이동
- 인증 상태 확인

## 먼저 이해할 핵심 개념

- 폼 입력값은 로컬 상태로 다루는 경우가 많다.
- 로그인 성공과 실패는 화면에서 다르게 보여야 한다.
- 인증이 필요한 페이지는 보호 라우트가 필요하다.
- 서버에서 받아오는 사용자 정보는 서버 상태로 다루는 편이 자연스럽다.
- 인증 만료나 실패는 UI에서 예측 가능하게 보여야 한다.

## 꼭 알아야 할 용어

| 용어 | 쉬운 설명 |
| --- | --- |
| 폼 검증 | 제출 전에 입력값이 비어 있거나 형식이 틀렸는지 확인하는 것 |
| 인증 상태 | 지금 사용자가 로그인된 상태인지 아닌지 |
| 보호 라우트 | 로그인 안 했으면 접근하면 안 되는 라우트 |
| Access Token | 로그인 후 받은 인증용 문자열 |
| 서버 상태 | API를 다시 불러오거나 갱신해야 하는 데이터 |
| 에러 상태 | 요청 실패 시 사용자에게 보여 주는 화면 상태 |

## 추천 학습 순서

1. `API_SPEC`에서 로그인/회원가입/`me` 응답 구조를 읽는다.
2. React에서 폼 상태를 어떻게 다루는지 본다.
3. React Router에서 보호 라우트를 어떻게 구성하는지 본다.
4. TanStack Query가 왜 서버 상태 관리에 유리한지 본다.
5. `FRONTEND_GUIDE`의 STEP 2와 연결해 로그인 흐름을 다시 본다.

## 먼저 읽을 문서

1. [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)
2. [API_SPEC](../../backend/API_SPEC.md)
3. [UI_SPEC](../../frontend/UI_SPEC.md)

## 외부 자료 링크

- React 공식 - State: A Component's Memory: [https://react.dev/learn/state-a-components-memory](https://react.dev/learn/state-a-components-memory)
- React 공식 - Conditional Rendering: [https://react.dev/learn/conditional-rendering](https://react.dev/learn/conditional-rendering)
- React Router 공식 문서: [https://reactrouter.com/](https://reactrouter.com/)
- TanStack Query React Overview: [https://tanstack.com/query/latest/docs/react/overview](https://tanstack.com/query/latest/docs/react/overview)
- TanStack Query를 왜 쓰는지에 대한 입문 글: [https://tkdodo.eu/blog/practical-react-query](https://tkdodo.eu/blog/practical-react-query)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

| 항목 | 지금 확인할 것 |
| --- | --- |
| 로그인 성공 흐름 | 로그인 후 팀 목록 화면으로 이동하는지 본다. |
| 실패 메시지 | 필수값 누락과 인증 실패 메시지가 어떻게 달라질지 생각해 본다. |
| 토큰 처리 | 토큰을 어디에 저장하고 언제 꺼내 쓸지 정리한다. |
| 현재 사용자 확인 | 새로고침 후 `me` 조회 같은 흐름이 왜 필요한지 이해한다. |

## 자주 막히는 지점

- 입력 오류와 서버 인증 실패를 같은 것으로 취급한다.
- 토큰만 저장하면 인증 처리가 끝난다고 생각한다.
- 보호 라우트 없이 버튼만 숨기면 된다고 생각한다.
- 로그인 후 사용자 정보를 언제 다시 불러와야 하는지 감이 안 온다.

## 가볍게 해볼 것

- 로그인 API 응답에서 프론트가 꼭 필요한 필드를 적어 본다.
- 보호 라우트가 필요한 페이지 목록을 적어 본다.
- 로그인 실패 문구와 입력 오류 문구를 분리해서 적어 본다.

## 핵심 질문

1. 로그인, 회원가입, `me` 조회가 각각 어떤 역할을 하는지 설명할 수 있는가
2. STEP 2 초반에 왜 로컬 통신 기준으로 먼저 구현할 수 있는가
3. 보호 라우트가 없으면 어떤 문제가 생기는지 설명할 수 있는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 로그인 성공 후 화면 흐름:
> - 보호 라우트가 필요한 위치:
> - 백엔드 API 연결 전까지 내가 먼저 구현할 수 있는 것:

## 체크리스트

- [ ] 로그인 폼 상태와 인증 상태가 다르다는 것을 이해했다.
- [ ] 보호 라우트가 왜 필요한지 설명할 수 있다.
- [ ] 토큰 저장과 현재 사용자 조회 흐름을 읽고 따라갈 수 있다.
- [ ] TanStack Query가 서버 상태 관리에 왜 유용한지 설명할 수 있다.
- [ ] 로그인 성공/실패/만료 상황을 화면 기준으로 구분할 수 있다.
