# CampusCrew 시작 안내

## 1. 이 문서를 먼저 읽는 이유

이 프로젝트는 문서가 많은 편이다.  
문서를 처음부터 끝까지 한 번에 읽으려고 하면 오히려 시작이 늦어진다.

그래서 이 문서는 설명회처럼 이렇게 안내한다.

- 지금 당장 무엇을 해야 하는가
- 내 포지션은 어떤 문서를 먼저 봐야 하는가
- STEP이 바뀔 때 무엇을 다시 확인해야 하는가
- 막히면 어느 문서로 돌아가야 하는가

처음 문서를 펼쳤을 때는 이 문서 하나만 읽고 움직이면 된다.

## 2. 처음 시작할 때 가장 먼저 할 일

### 처음 봤을 때 바로 할 것

1. [PRD](./PRD.md)를 읽고 무엇을 만드는 프로젝트인지 이해한다.
2. [PLAN](./PLAN.md)을 보고 지금이 몇 STEP인지 확인한다.
3. 내 포지션에 맞는 가이드 문서 1개를 연다.
4. 내 포지션의 `doc/learning` 폴더에서 현재 STEP 파일을 연다.
5. 팀원과 오늘 맞춰야 할 문서가 무엇인지 확인한다.

### 절대 하지 말아야 할 것

- 모든 문서를 한 번에 읽으려고 하지 않는다.
- 구현을 시작하기 전에 모든 세부 명세를 외우려고 하지 않는다.
- 포지션과 상관없는 가이드를 처음부터 끝까지 읽지 않는다.

## 3. 문서는 이렇게 보면 된다

### 공통으로 먼저 보는 문서

| 문서 | 언제 보는가 | 왜 보는가 |
| --- | --- | --- |
| [ONBOARDING](./ONBOARDING.md) | 맨 처음 | 시작 순서와 문서 사용법을 잡기 위해 |
| [PRD](./PRD.md) | 맨 처음 | 무엇을 만들고 무엇을 만들지 않는지 알기 위해 |
| [PLAN](./PLAN.md) | STEP 시작 전 | 현재 STEP 목표와 각 포지션 산출물을 확인하기 위해 |
| [GIT](./GIT.md) | 브랜치 만들기 전 | 브랜치, 커밋, PR 규칙을 맞추기 위해 |
| [DEPLOYMENT](./DEPLOYMENT.md) | EC2 배포 전 | BE-A가 배포 기준과 AWS Free Tier 최신 기준을 확인하기 위해 |

### 프론트엔드가 바로 보는 문서

1. [FRONTEND_GUIDE](../frontend/FRONTEND_GUIDE.md)
2. [UI_SPEC](../frontend/UI_SPEC.md)
3. [SCREEN_FLOW](../frontend/SCREEN_FLOW.md)
4. [API_SPEC](../backend/API_SPEC.md)
5. [doc/learning/frontend](../learning/frontend/)

### BE-A가 바로 보는 문서

1. [BE_A_GUIDE](../backend/BE_A_GUIDE.md)
2. [API_SPEC](../backend/API_SPEC.md)
3. [ERD](../backend/ERD.md)
4. [DEPLOYMENT](./DEPLOYMENT.md)
5. [doc/learning/be-a](../learning/be-a/)

### BE-B가 바로 보는 문서

1. [BE_B_GUIDE](../backend/BE_B_GUIDE.md)
2. [API_SPEC](../backend/API_SPEC.md)
3. [ERD](../backend/ERD.md)
4. [doc/learning/be-b](../learning/be-b/)

### AI가 바로 보는 문서

1. [AI_GUIDE](../ai/AI_GUIDE.md)
2. [AI_SPEC](../ai/AI_SPEC.md)
3. [API_SPEC](../backend/API_SPEC.md)
4. [doc/learning/ai](../learning/ai/)

## 4. STEP이 시작되면 이렇게 움직인다

### STEP 시작 전

1. [PLAN](./PLAN.md)에서 이번 STEP 목표를 본다.
2. 내 포지션 가이드에서 해당 STEP 섹션만 읽는다.
3. `doc/learning/<포지션>/STEPn.md`를 열어 이번 STEP에 필요한 이론과 체크 포인트를 적는다.
4. 전원이 API 필드명, 상태값, 날짜 포맷, 권한 규칙을 먼저 맞춘다.

### STEP 진행 중

- 막히면 먼저 내 포지션 가이드로 돌아간다.
- 화면이나 UX가 헷갈리면 `UI_SPEC.md`를 본다.
- API 요청/응답이 헷갈리면 `API_SPEC.md`를 본다.
- 데이터 구조가 헷갈리면 `ERD.md`를 본다.
- 범위가 커지고 있는지 의심되면 `PRD.md`와 `PLAN.md`를 다시 본다.

### STEP 끝날 때

- 이번 STEP 산출물이 실제로 끝났는지 `PLAN.md` 체크리스트로 확인한다.
- 구현 내용과 문서 내용이 다르면 문서를 먼저 업데이트한다.
- 다음 STEP에 들어가기 전에 각 포지션의 `STEP` 학습 문서를 한 번 채운다.

## 5. 포지션별로 지금 알아야 할 것

### 프론트엔드

- 화면을 예쁘게 만드는 것보다 라우트, 폼, API 연결 순서가 더 중요하다.
- `UI_SPEC.md`와 `API_SPEC.md`를 같이 봐야 화면과 데이터가 맞는다.
- 매 STEP마다 `로딩`, `빈 상태`, `에러 상태`를 빼먹지 않는다.

### BE-A

- 인증과 팀 도메인이 프로젝트의 기준축이다.
- 로그인, `me`, 팀 생성, 팀 참여 흐름을 먼저 단단히 잡는다.
- 권한 검증은 나중에 붙이는 옵션이 아니라 처음부터 구조에 들어가야 한다.

### BE-B

- 자원 CRUD를 빨리 만드는 것보다 응답 구조와 검증 규칙을 먼저 맞추는 게 중요하다.
- 화면이 원하는 데이터와 엔터티 구조가 다를 수 있으니 DTO를 분리해서 본다.
- 대시보드는 상세 API의 복사본이 아니라 요약 응답이라는 점을 항상 기억한다.

### AI

- 모델 호출 자체보다 입력과 출력 형식을 먼저 고정하는 게 중요하다.
- AI 기능은 실패했을 때 어떻게 보일지도 같이 설계해야 한다.
- 구조화 출력과 fallback 규칙이 없으면 연동 단계에서 가장 많이 흔들린다.

## 6. 처음 시작할 때 체크리스트

- [ ] PRD를 읽고 프로젝트 범위를 이해했다.
- [ ] PLAN에서 현재 STEP을 확인했다.
- [ ] 내 포지션 가이드를 열었다.
- [ ] 내 포지션 `doc/learning`의 현재 STEP 문서를 열었다.
- [ ] 오늘 같이 맞춰야 할 API 필드명이나 상태값을 확인했다.
- [ ] Git 규칙을 보고 브랜치 전략을 이해했다.

## 7. 자주 막히는 지점과 돌아갈 문서

| 막히는 지점 | 다시 볼 문서 |
| --- | --- |
| 지금 뭘 만들고 있는지 모르겠다 | [PRD](./PRD.md) |
| 이번 STEP에서 어디까지 해야 하는지 모르겠다 | [PLAN](./PLAN.md) |
| 화면 흐름이 헷갈린다 | [UI_SPEC](../frontend/UI_SPEC.md) |
| 화면 이동 순서가 헷갈린다 | [SCREEN_FLOW](../frontend/SCREEN_FLOW.md) |
| 요청/응답 형식이 헷갈린다 | [API_SPEC](../backend/API_SPEC.md) |
| 테이블 구조나 관계가 헷갈린다 | [ERD](../backend/ERD.md) |
| EC2 배포와 Free Tier 기준이 헷갈린다 | [DEPLOYMENT](./DEPLOYMENT.md) |
| 브랜치나 PR 규칙이 헷갈린다 | [GIT](./GIT.md) |
| 지금 무엇부터 다시 읽어야 할지 모르겠다 | [ONBOARDING](./ONBOARDING.md) |

## 8. 참고 자료

### 공통

- GitHub Docs: [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests?lang=en)
- GitHub Docs: [About branches](https://docs.github.com/en/branches-and-merges/working-with-branches/about-branches)
- MDN: [HTTP response status codes](https://developer.mozilla.org/docs/Web/HTTP/Reference/Status)

### 프론트엔드

- React: [Quick Start](https://react.dev/learn)
- React Router: [Official Documentation](https://reactrouter.com/)
- TanStack Query: [React Query Documentation](https://tanstack.com/query/latest/docs/react/)

### 백엔드

- Spring Boot: [Documentation Overview](https://docs.spring.io/spring-boot/documentation.html)
- Spring REST Guide: [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
- Spring Security: [Reference](https://docs.spring.io/spring-security/reference/index.html)
- Spring Data JPA: [Reference](https://docs.spring.io/spring-data/jpa/reference/)

### AI

- OpenAI: [Prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering)
- OpenAI: [Structured outputs guide](https://platform.openai.com/docs/guides/structured-outputs)
