# BE-B STEP 5

## 이 STEP에서 왜 이걸 배우는가

할 일과 회의록은 협업 서비스의 실제 작업 흐름과 가장 가깝다.  
상태값, 작성자, 긴 본문, AI 연계 데이터를 함께 다뤄야 해서 CRUD 이상의 도메인 이해가 필요하다.

## 이번 프로젝트에서 어디에 쓰는가

- 할 일 CRUD
- 할 일 상태 변경
- 회의록 CRUD
- 회의록 본문 기반 AI 연계
- 대시보드 집계 마무리

## 먼저 이해할 핵심 개념

- 상태값 설계
- 작성자/담당자 정보의 차이
- 긴 본문 데이터 저장과 응답
- AI에 넘길 수 있는 문서 데이터 구조
- 집계 응답과 상세 응답의 재사용 경계

## 꼭 알아야 할 용어

- `assignee`: 할 일을 맡은 사용자
- `author`: 회의록을 작성한 사용자
- `status`: 할 일의 현재 진행 상태
- `transition`: 상태가 바뀌는 흐름
- `document body`: AI 추출과 요약의 원본이 되는 긴 텍스트

## 추천 학습 순서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)의 `STEP 5`를 읽는다.
2. [API_SPEC](../../backend/API_SPEC.md)의 `9. 할 일 API`와 `10. 회의록 API`를 읽는다.
3. [ERD](../../backend/ERD.md)의 `tasks`, `meeting_notes`를 읽는다.
4. 상태 변경과 일반 수정이 어떻게 다른지 적어 본다.
5. 회의록 본문 중 AI가 읽어야 할 핵심 필드를 생각해 본다.

## 먼저 읽을 문서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)
2. [API_SPEC](../../backend/API_SPEC.md)
3. [ERD](../../backend/ERD.md)
4. [AI_SPEC](../../ai/AI_SPEC.md)

## 외부 자료 링크

- Spring Data JPA: [Auditing](https://docs.spring.io/spring-data/jpa/reference/auditing.html)
- Baeldung: [JPA Enum Persist](https://www.baeldung.com/jpa-persisting-enums-in-jpa)
- Baeldung: [Lob String Mapping](https://www.baeldung.com/jpa-annotation-postgresql-text-type)
- Baeldung: [Spring Data Partial Update](https://www.baeldung.com/spring-data-partial-update)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [API_SPEC](../../backend/API_SPEC.md)의 상태값 정의와 할 일 상태 변경 요청 구조를 다시 본다.
- [UI_SPEC](../../frontend/UI_SPEC.md)의 할 일/회의록 화면 명세와 비교한다.
- [AI_SPEC](../../ai/AI_SPEC.md)의 액션 아이템 추출 입력 구조와 Q&A 문서 범위를 확인한다.
- [PLAN](../../common/PLAN.md)의 `STEP 5` 산출물과 종료 조건을 다시 본다.

## 자주 막히는 지점

- 할 일 상태 변경을 일반 수정 API와 똑같이 다룬다.
- 회의록 작성자와 할 일 담당자를 같은 개념처럼 생각한다.
- 긴 본문 응답을 화면용과 AI용으로 나누지 않고 한 번에 처리한다.
- AI가 읽어야 할 문서 데이터에서 제목이나 본문 일부가 빠진다.

## 가볍게 해볼 것

- 할 일의 `TODO`, `IN_PROGRESS`, `DONE`이 각각 어떤 의미인지 적어 본다.
- 회의록 작성자와 할 일 담당자가 왜 다른지 한 줄로 적어 본다.
- 액션 아이템 추출에 최소한 필요한 회의록 필드를 적어 본다.

## 핵심 질문

1. 상태 변경 API와 일반 수정 API의 차이를 설명할 수 있는가
2. 회의록 작성자와 할 일 담당자는 왜 다른 개념인가
3. AI가 읽는 회의록 데이터에서 무엇이 가장 중요한가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 상태 변경 규칙:
> - 작성자와 담당자 차이:
> - AI 연계에 필요한 회의록 필드:

## 체크리스트

- [ ] 상태 변경 API와 일반 수정 API의 차이를 이해했다.
- [ ] 작성자와 담당자를 구분해서 설명할 수 있다.
- [ ] 회의록 본문이 AI 연계의 핵심 데이터라는 점을 이해했다.
- [ ] 할 일/회의록 응답이 프론트와 AI에서 어떻게 쓰이는지 알고 있다.
