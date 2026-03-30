# BE-B STEP 6

## 이 STEP에서 왜 이걸 배우는가

마지막 단계에서는 "API가 있다"보다 "배포 환경에서도 응답 구조와 성능이 안정적이다"가 더 중요하다.  
BE-B는 리소스 API와 집계 API, 그리고 AI가 읽는 데이터 구조를 함께 최종 점검해야 한다.

## 이번 프로젝트에서 어디에 쓰는가

- 배포 환경 CRUD 점검
- 대시보드 집계 응답 최종 검수
- AI 입력 문서 데이터 점검
- 조회 성능과 응답 크기 확인
- 데모 시나리오 안정화

## 먼저 이해할 핵심 개념

- 로컬 데이터와 실제 운영 데이터 차이
- 응답 구조 고정의 중요성
- 집계 API 성능 점검
- AI 입력 데이터 품질 검수
- 시연 기준 점검 순서

## 꼭 알아야 할 용어

- `payload size`: 한 번의 응답으로 보내는 데이터 크기
- `query cost`: 조회가 데이터베이스에 주는 부담
- `hot path`: 자주 호출되는 핵심 API 흐름
- `smoke test`: 배포 후 빠르게 핵심 기능만 확인하는 점검
- `contract check`: 문서와 실제 응답이 맞는지 확인하는 점검

## 추천 학습 순서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)의 `STEP 6`을 읽는다.
2. [DEPLOYMENT](../../common/DEPLOYMENT.md)의 운영 구조를 읽는다.
3. [API_SPEC](../../backend/API_SPEC.md)의 공지, 일정, 할 일, 회의록, 대시보드 응답 구조를 다시 본다.
4. [AI_SPEC](../../ai/AI_SPEC.md)의 문서 범위와 출처 구조를 다시 확인한다.
5. 실제 점검 순서를 "목록 -> 상세 -> 생성/수정 -> 대시보드 -> AI"로 적어 본다.

## 먼저 읽을 문서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)
2. [DEPLOYMENT](../../common/DEPLOYMENT.md)
3. [API_SPEC](../../backend/API_SPEC.md)
4. [AI_SPEC](../../ai/AI_SPEC.md)
5. [PLAN](../../common/PLAN.md)

## 외부 자료 링크

- Spring Boot: [Actuator](https://docs.spring.io/spring-boot/reference/actuator/index.html)
- PostgreSQL: [Using EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html)
- Baeldung: [Spring Boot Testing REST](https://www.baeldung.com/integration-testing-in-spring)
- MDN: [HTTP Status](https://developer.mozilla.org/docs/Web/HTTP/Reference/Status)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [API_SPEC](../../backend/API_SPEC.md)에서 프론트와 AI가 실제로 읽는 필드를 다시 본다.
- [DEPLOYMENT](../../common/DEPLOYMENT.md)에서 단일 인스턴스와 Docker 네트워크 구조를 확인한다.
- [PLAN](../../common/PLAN.md)의 `STEP 6` 완료 기준을 다시 본다.
- [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)의 `STEP 6`을 읽고 어떤 데모 흐름을 기대하는지 확인한다.

## 자주 막히는 지점

- 로컬에서는 충분히 빠르다고 생각하고 운영 기준 점검을 생략한다.
- 대시보드 응답에 불필요한 데이터가 많이 들어간다.
- AI가 읽는 문서 데이터에서 제목, 본문, 타입 같은 핵심 정보가 빠진다.
- 문서와 실제 응답 필드가 달라졌는데 마지막까지 못 잡는다.

## 가볍게 해볼 것

- 가장 자주 호출될 것 같은 API 3개를 적어 본다.
- 대시보드 응답에서 줄일 수 있는 필드가 있는지 생각해 본다.
- AI가 꼭 읽어야 하는 문서 필드 3개만 적어 본다.

## 핵심 질문

1. 배포 환경에서 리소스 API와 집계 API를 왜 다시 확인해야 하는가
2. 대시보드 응답이 너무 무거우면 어떤 문제가 생기는가
3. 문서와 실제 응답 구조가 끝까지 같아야 하는 이유를 설명할 수 있는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 가장 먼저 점검할 API:
> - 대시보드 응답에서 줄일 수 있는 부분:
> - AI가 실제로 읽는 문서 필드:

## 체크리스트

- [ ] 배포 환경에서 리소스 API와 집계 API를 어떻게 점검할지 알고 있다.
- [ ] 대시보드 응답은 가볍고 목적이 분명해야 한다는 점을 이해했다.
- [ ] AI가 읽는 문서 데이터의 핵심 필드를 설명할 수 있다.
- [ ] 문서와 실제 응답 구조를 끝까지 맞춰야 한다는 점을 이해했다.
