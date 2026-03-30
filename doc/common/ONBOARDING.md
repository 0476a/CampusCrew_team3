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

## 1.1 처음 30분은 이렇게 보면 된다

처음에는 아래 범위까지만 읽고 바로 움직이면 된다.

1. [PRD](./PRD.md)의 `1. 문서 개요`부터 `3. 서비스 구조`까지
2. [PLAN](./PLAN.md)의 `2. STEP 진행표`와 지금 STEP의 체크리스트
3. 내 포지션 가이드의 `1`부터 현재 STEP 섹션까지
4. 내 포지션 학습 문서의 현재 STEP 파일 1개

지금 당장 배포를 맡지 않는다면 [DEPLOYMENT](./DEPLOYMENT.md)는 나중에 읽어도 된다.  
지금 당장 브랜치를 만들지 않는다면 [GIT](./GIT.md)는 `2. 운영 방식`부터 `7. Pull Request 규칙`까지만 먼저 보면 된다.

## 2. 처음 시작할 때 가장 먼저 할 일

### 처음 봤을 때 바로 할 것

1. [PRD](./PRD.md)를 읽고 무엇을 만드는 프로젝트인지 이해한다.
2. [PLAN](./PLAN.md)을 보고 지금이 몇 STEP인지 확인한다.
3. 내 포지션에 맞는 가이드 문서 1개를 연다.
4. 내 포지션의 `doc/learning` 폴더에서 현재 STEP 파일을 연다.
5. 팀원과 오늘 맞춰야 할 문서가 무엇인지 확인한다.
6. 화면 감을 잡아야 하면 [Figma Make UI 시안](https://www.figma.com/make/22ywy6HuSpF6N6cJC56eQ1/CampusCrew-UI-Design?fullscreen=1&t=n6QahEAS9SYPyqsq-1&preview-route=%2Fteam%2F1)을 같이 연다.

### 절대 하지 말아야 할 것

- 모든 문서를 한 번에 읽으려고 하지 않는다.
- 구현을 시작하기 전에 모든 세부 명세를 외우려고 하지 않는다.
- 포지션과 상관없는 가이드를 처음부터 끝까지 읽지 않는다.

## 3. 문서는 이렇게 보면 된다

### 공통으로 먼저 보는 문서

| 문서 | 먼저 볼 범위 | 언제 보는가 | 왜 보는가 |
| --- | --- | --- | --- |
| [ONBOARDING](./ONBOARDING.md) | 전체 | 맨 처음 | 시작 순서와 문서 사용법을 잡기 위해 |
| [PRD](./PRD.md) | `1. 문서 개요`부터 `3. 서비스 구조`까지 | 맨 처음 | 무엇을 만들고 무엇을 만들지 않는지 알기 위해 |
| [PLAN](./PLAN.md) | `2. STEP 진행표`와 현재 STEP 체크리스트 | STEP 시작 전 | 현재 STEP 목표와 각 포지션 산출물을 확인하기 위해 |
| [GIT](./GIT.md) | `2. 운영 방식`부터 `7. Pull Request 규칙`까지 | 브랜치 만들기 전 | 브랜치, 커밋, PR 규칙을 맞추기 위해 |
| [DEPLOYMENT](./DEPLOYMENT.md) | `3. GCP 무료 체험판 기준`부터 `9. BE-A가 해야 할 일`까지 | GCP AI 서버와 최종 배포 전 | BE-A가 배포 기준과 GCP 무료 체험판 기준, AI 서버 분리 구조를 확인하기 위해 |

### 프론트엔드가 바로 보는 문서

1. [FRONTEND_GUIDE](../frontend/FRONTEND_GUIDE.md)의 `1`부터 현재 STEP까지 읽는다.
2. [UI_SPEC](../frontend/UI_SPEC.md)의 `2. 공통 화면 원칙`부터 지금 만드는 화면의 상세 명세까지 읽는다.
3. [SCREEN_FLOW](../frontend/SCREEN_FLOW.md)의 `2. 전체 화면 흐름`부터 `5. 작성 화면 공통 흐름`까지 읽는다.
4. [API_SPEC](../backend/API_SPEC.md)의 `2. 공통 규칙`과 지금 붙일 API 섹션만 읽는다.
5. [Figma Make UI 시안](https://www.figma.com/make/22ywy6HuSpF6N6cJC56eQ1/CampusCrew-UI-Design?fullscreen=1&t=n6QahEAS9SYPyqsq-1&preview-route=%2Fteam%2F1)을 같이 열어 실제 화면 감을 잡는다.
6. [frontend STEP 학습 문서](../learning/frontend/)에서 현재 STEP 파일 1개만 읽는다.

### BE-A가 바로 보는 문서

1. [BE_A_GUIDE](../backend/BE_A_GUIDE.md)의 `1`부터 현재 STEP까지 읽는다.
2. [API_SPEC](../backend/API_SPEC.md)의 `2. 공통 규칙`부터 현재 맡은 API 범위까지 읽는다.
3. [ERD](../backend/ERD.md)의 `2. ERD`부터 `5. 상태값 규칙`까지 읽는다.
4. [DEPLOYMENT](./DEPLOYMENT.md)의 `3. GCP 무료 체험판 기준`부터 `9. BE-A가 해야 할 일`까지 읽는다.
5. [be-a STEP 학습 문서](../learning/be-a/)에서 현재 STEP 파일 1개만 읽는다.

### BE-B가 바로 보는 문서

1. [BE_B_GUIDE](../backend/BE_B_GUIDE.md)의 `1`부터 현재 STEP까지 읽는다.
2. [API_SPEC](../backend/API_SPEC.md)의 `2. 공통 규칙`, `6. 대시보드 API`, 그리고 지금 구현할 도메인 API 섹션만 읽는다.
3. [ERD](../backend/ERD.md)의 `2. ERD`부터 `7. 구현 규칙`까지 읽는다.
4. [be-b STEP 학습 문서](../learning/be-b/)에서 현재 STEP 파일 1개만 읽는다.

### AI가 바로 보는 문서

1. [AI_GUIDE](../ai/AI_GUIDE.md)의 `1`부터 현재 STEP까지 읽는다.
2. [AI_SPEC](../ai/AI_SPEC.md)의 `3. 공통 규칙`부터 `9. 실패 처리 규칙`까지 읽는다.
3. [API_SPEC](../backend/API_SPEC.md)의 `2. 공통 규칙`과 `10. AI API`를 읽는다.
4. [ai STEP 학습 문서](../learning/ai/)에서 현재 STEP 파일 1개만 읽는다.

## 4. STEP이 시작되면 이렇게 움직인다

### STEP 시작 전

1. [PLAN](./PLAN.md)에서 이번 STEP 목표를 본다.
2. 내 포지션 가이드에서 해당 STEP 섹션만 읽는다.
3. `doc/learning/<포지션>/STEPn.md`를 열어 이번 STEP에 필요한 이론과 체크 포인트를 적는다.
4. 전원이 API 필드명, 상태값, 날짜 포맷, 권한 규칙을 먼저 맞춘다.

### STEP 진행 중

- 막히면 먼저 내 포지션 가이드로 돌아간다.
- 화면이나 UX가 헷갈리면 [UI_SPEC](../frontend/UI_SPEC.md)를 본다.
- 화면 이동 순서가 헷갈리면 [SCREEN_FLOW](../frontend/SCREEN_FLOW.md)를 본다.
- API 요청/응답이 헷갈리면 [API_SPEC](../backend/API_SPEC.md)를 본다.
- 데이터 구조가 헷갈리면 [ERD](../backend/ERD.md)를 본다.
- AI 출력 형식이 헷갈리면 [AI_SPEC](../ai/AI_SPEC.md)를 본다.
- 범위가 커지고 있는지 의심되면 [PRD](./PRD.md)와 [PLAN](./PLAN.md)을 다시 본다.

### STEP 2에서 특히 기억할 것

- STEP 2는 인증 구현뿐 아니라 서버 초기 셋팅을 시작하는 단계다.
- 프론트는 STEP 2 초반에 로컬 통신 기준으로 먼저 구현해도 된다.
- 백엔드 인증 API가 준비되면 프론트는 실제 서버 통신으로 전환한다.
- 서버 반영은 자동 파이프라인 없이 `git push`와 서버 측 `git pull`로 진행한다.

### STEP 끝날 때

- 이번 STEP 산출물이 실제로 끝났는지 [PLAN](./PLAN.md) 체크리스트로 확인한다.
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
| GCP AI 서버와 무료 체험판 기준이 헷갈린다 | [DEPLOYMENT](./DEPLOYMENT.md) |
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

- Google AI for Developers: [Gemini API docs](https://ai.google.dev/gemini-api/docs)
- Google AI for Developers: [Gemini models](https://ai.google.dev/gemini-api/docs/models)
- Google AI for Developers: [Structured output](https://ai.google.dev/gemini-api/docs/structured-output)
