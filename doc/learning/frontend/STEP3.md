# Frontend STEP 3

## 이 STEP에서 왜 이걸 배우는가

이 단계부터 사용자는 로그인만 하는 것이 아니라 실제로 팀을 만들고, 참여하고, 팀 공간 안으로 들어간다.  
프론트 입장에서는 "페이지를 만드는 것"보다 "팀 단위 라우트와 요약 화면을 연결하는 것"이 더 중요해진다.

## 이번 프로젝트에서 어디에 쓰는가

- 팀 목록 화면
- 팀 생성 화면
- 팀 참여 흐름
- 팀 대시보드 1차 화면
- `teamId` 기반 팀 내부 라우트

## 먼저 이해할 핵심 개념

- 리스트 렌더링과 카드형 목록 구성
- URL 파라미터와 팀 단위 라우팅
- 생성 후 화면 전환 흐름
- 요약 화면과 상세 화면의 차이
- 로딩, 빈 상태, 에러 상태를 팀 화면에도 같은 방식으로 적용하는 방법

## 꼭 알아야 할 용어

- `route param`: URL 안에서 `teamId`처럼 리소스를 구분하는 값
- `dashboard`: 상세 데이터 전체가 아니라 핵심 정보만 먼저 보여 주는 요약 화면
- `refetch`: 생성이나 참여 후 최신 데이터를 다시 불러오는 것
- `nested route`: 팀 내부처럼 부모 화면 아래에 하위 화면이 붙는 라우트 구조
- `summary card`: 최근 공지, 다가오는 일정처럼 핵심 정보만 보여 주는 카드

## 추천 학습 순서

1. [SCREEN_FLOW](../../frontend/SCREEN_FLOW.md)의 `2. 전체 화면 흐름`과 `4. 팀 내부 네비게이션 흐름`을 읽는다.
2. [UI_SPEC](../../frontend/UI_SPEC.md)의 `8.3 TEAM-03 팀 대시보드`까지 읽고 팀 관련 화면 목적을 정리한다.
3. [API_SPEC](../../backend/API_SPEC.md)의 `5. 팀 API`와 `6. 대시보드 API`를 읽는다.
4. `teamId`가 붙는 URL과 붙지 않는 URL을 직접 적어 본다.
5. "목록 -> 생성 -> 상세 진입" 흐름을 한 줄로 설명해 본다.

## 먼저 읽을 문서

1. [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)의 `STEP 3`
2. [SCREEN_FLOW](../../frontend/SCREEN_FLOW.md)
3. [UI_SPEC](../../frontend/UI_SPEC.md)
4. [API_SPEC](../../backend/API_SPEC.md)

## 외부 자료 링크

- React: [Rendering Lists](https://react.dev/learn/rendering-lists)
- React Router: [Route Params](https://reactrouter.com/start/library/routing#dynamic-segments)
- React Router: [Nested Routes](https://reactrouter.com/start/library/routing#nested-routes)
- TanStack Query: [Queries](https://tanstack.com/query/latest/docs/react/guides/queries)
- TkDodo: [Practical React Query](https://tkdodo.eu/blog/practical-react-query)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [UI_SPEC](../../frontend/UI_SPEC.md)의 `8.3 TEAM-03 팀 대시보드`에서 어떤 카드가 먼저 필요한지 본다.
- [API_SPEC](../../backend/API_SPEC.md)의 팀 목록 응답과 대시보드 응답 필드를 비교해 본다.
- [SCREEN_FLOW](../../frontend/SCREEN_FLOW.md)에서 팀 생성 후 어디로 이동하는지 확인한다.
- [PLAN](../../common/PLAN.md)의 `STEP 3` 종료 조건과 프론트 산출물을 다시 본다.

## 자주 막히는 지점

- 팀 목록 화면과 팀 내부 화면 레이아웃을 같은 수준으로 두어서 구조가 헷갈린다.
- 대시보드에 상세 목록 전체를 넣으려고 해서 화면과 API가 함께 무거워진다.
- `teamId`를 페이지마다 개별 관리하다가 링크 구조가 흔들린다.
- 생성 성공 후 화면 전환과 목록 갱신을 동시에 챙기지 못한다.

## 가볍게 해볼 것

- `/teams`, `/teams/new`, `/teams/:teamId` 세 URL이 어떤 목적을 가지는지 한 줄씩 적어 본다.
- 팀 카드에 꼭 필요한 필드 3개만 적어 본다.
- 대시보드 카드에 "지금 꼭 보여 줄 정보"와 "나중에 상세에서 볼 정보"를 나눠 적어 본다.

## 핵심 질문

1. 팀 목록 화면과 팀 내부 화면의 차이를 설명할 수 있는가
2. 대시보드를 왜 상세 목록 화면처럼 만들면 안 되는가
3. 팀 생성 후 어떤 화면으로 이동해야 자연스러운지 설명할 수 있는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 팀 관련 URL 구조:
> - 대시보드 카드에 먼저 보여 줄 정보:
> - 생성 후 재조회가 필요한 이유:

## 체크리스트

- [ ] 팀 관련 URL 구조를 설명할 수 있다.
- [ ] 팀 목록, 생성, 참여, 대시보드가 어떤 순서로 이어지는지 알고 있다.
- [ ] 대시보드는 요약 화면이라는 점을 이해했다.
- [ ] 팀 화면에서도 로딩, 빈 상태, 에러 상태를 빠뜨리지 않아야 한다는 점을 이해했다.
