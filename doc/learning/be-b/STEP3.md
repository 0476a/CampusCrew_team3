# BE-B STEP 3

## 이 STEP에서 왜 이걸 배우는가

대시보드는 여러 도메인의 데이터를 한 번에 보여 주지만, 그 목적은 "모든 걸 다 보여 주는 것"이 아니라 "핵심만 빠르게 보여 주는 것"이다.  
이 단계에서는 집계용 읽기 API와 상세 CRUD API를 분리해서 생각하는 감각이 중요하다.

## 이번 프로젝트에서 어디에 쓰는가

- 팀 대시보드 조회 API
- 최근 공지 요약
- 다가오는 일정 요약
- 내 할 일 요약
- 최근 회의록 요약

## 먼저 이해할 핵심 개념

- 집계 응답과 상세 응답의 차이
- 읽기 전용 API 설계
- 정렬 기준과 개수 제한
- 카드형 UI에 맞는 응답 구조
- "프론트가 합치는 방식"과 "백엔드가 묶어 주는 방식"의 차이

## 꼭 알아야 할 용어

- `aggregation`: 여러 데이터를 모아 요약 형태로 만드는 것
- `read model`: 화면에 보여 주기 좋은 전용 응답 구조
- `sorting`: 최신순, 마감 임박순처럼 보여 주는 순서
- `projection`: 필요한 필드만 골라 가져오는 방식
- `summary endpoint`: 요약 데이터만 제공하는 전용 API

## 추천 학습 순서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)의 `STEP 3`을 읽는다.
2. [API_SPEC](../../backend/API_SPEC.md)의 `6. 대시보드 API`를 읽는다.
3. [UI_SPEC](../../frontend/UI_SPEC.md)의 `8.5 TEAM-03 팀 대시보드`를 읽는다.
4. 카드별로 어떤 값이 꼭 필요한지 적어 본다.
5. 상세 목록 API를 그대로 재사용하면 왜 불편한지 생각해 본다.

## 먼저 읽을 문서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)
2. [API_SPEC](../../backend/API_SPEC.md)
3. [UI_SPEC](../../frontend/UI_SPEC.md)
4. [PLAN](../../common/PLAN.md)

## 외부 자료 링크

- Spring Data JPA: [Projections](https://docs.spring.io/spring-data/jpa/reference/repositories/projections.html)
- Spring Data JPA: [Query Methods](https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html)
- Baeldung: [JPA Pagination and Sorting](https://www.baeldung.com/spring-data-jpa-pagination-sorting)
- Baeldung: [DTO Projection](https://www.baeldung.com/jpa-queries-custom-result-with-aggregation-functions)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [UI_SPEC](../../frontend/UI_SPEC.md)에서 대시보드 카드 구성을 다시 본다.
- [API_SPEC](../../backend/API_SPEC.md)의 대시보드 응답과 팀 API 응답을 비교한다.
- [PLAN](../../common/PLAN.md)의 `STEP 3` 종료 조건과 대시보드 보조 조회 범위를 다시 본다.
- [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)의 `STEP 3`에서 프론트가 기대하는 카드 구조를 확인한다.

## 자주 막히는 지점

- 대시보드에 상세 API 전체를 그대로 넣으려 한다.
- 카드별 최대 개수와 정렬 기준을 문서 없이 구현한다.
- 응답이 너무 커져서 프론트가 다시 가공해야 한다.
- 대시보드 응답에 각 카드의 목적이 반영되지 않는다.

## 가볍게 해볼 것

- 대시보드 카드 4개에 각각 꼭 필요한 필드 2~3개만 적어 본다.
- 최근 공지와 다가오는 일정의 정렬 기준을 한 줄씩 적어 본다.
- "요약 응답"이 상세 응답과 왜 다른지 한 문장으로 적어 본다.

## 핵심 질문

1. 집계 응답과 상세 응답의 차이를 설명할 수 있는가
2. 대시보드 API를 별도로 두는 이유는 무엇인가
3. 카드별 정렬 기준과 개수 제한을 왜 먼저 정해야 하는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 대시보드 카드별 핵심 필드:
> - 정렬 기준:
> - 대시보드 응답에서 뺄 수 있는 정보:

## 체크리스트

- [ ] 집계 응답과 상세 응답의 차이를 설명할 수 있다.
- [ ] 카드별 정렬 기준과 개수 제한이 왜 필요한지 이해했다.
- [ ] 대시보드 전용 읽기 API가 필요한 이유를 알고 있다.
- [ ] 프론트에 바로 붙일 수 있는 응답 구조를 생각할 수 있다.
