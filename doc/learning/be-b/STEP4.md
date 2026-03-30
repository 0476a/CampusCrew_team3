# BE-B STEP 4

## 이 STEP에서 왜 이걸 배우는가

공지와 일정은 팀 협업 서비스의 기본 문서 역할을 한다.  
이 단계에서는 CRUD 자체보다도 날짜 검증, 응답 일관성, AI가 다시 읽을 수 있는 데이터 구조를 함께 고려하는 습관이 중요하다.

## 이번 프로젝트에서 어디에 쓰는가

- 공지 CRUD
- 일정 CRUD
- 날짜 검증 규칙
- 진행 상황 요약용 문서 데이터
- 팀 문서 Q&A의 일부 문서 소스

## 먼저 이해할 핵심 개념

- CRUD 패턴의 일관성
- 생성 DTO와 목록 DTO의 차이
- 날짜/시간 검증
- 문서형 데이터의 응답 구조
- AI 재사용을 고려한 필드 설계

## 꼭 알아야 할 용어

- `resource`: API가 다루는 자원 단위
- `validation`: 잘못된 입력을 미리 막는 규칙
- `createdAt`: 최신순 정렬에 자주 쓰는 생성 시각
- `date range`: 시작 시각과 종료 시각의 논리 관계
- `document source`: AI가 참고할 수 있는 문서 데이터 원본

## 추천 학습 순서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)의 `STEP 4`를 읽는다.
2. [API_SPEC](../../backend/API_SPEC.md)의 `7. 공지 API`와 `8. 일정 API`를 읽는다.
3. [ERD](../../backend/ERD.md)의 `notices`, `schedules`를 읽는다.
4. 공지와 일정의 공통 필드와 다른 필드를 구분해 적어 본다.
5. 일정 시작/종료 검증 규칙을 문장으로 적어 본다.

## 먼저 읽을 문서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)
2. [API_SPEC](../../backend/API_SPEC.md)
3. [ERD](../../backend/ERD.md)
4. [AI_SPEC](../../ai/AI_SPEC.md)

## 외부 자료 링크

- Spring Boot: [Validation](https://docs.spring.io/spring-boot/reference/io/validation.html)
- Hibernate Validator: [Reference Guide](https://hibernate.org/validator/documentation/)
- Baeldung: [Validating RequestBody](https://www.baeldung.com/spring-boot-bean-validation)
- MDN: [Date and time formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Date_and_time_formats)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [API_SPEC](../../backend/API_SPEC.md)에서 공지/일정 생성 요청과 목록 응답 구조를 다시 본다.
- [UI_SPEC](../../frontend/UI_SPEC.md)의 공지/일정 화면 명세를 읽고 프론트가 어떤 필드를 쓰는지 본다.
- [AI_SPEC](../../ai/AI_SPEC.md)의 진행 상황 요약과 Q&A 입력 범위에 공지/일정이 포함되는 점을 확인한다.
- [PLAN](../../common/PLAN.md)의 `STEP 4` 종료 조건을 다시 본다.

## 자주 막히는 지점

- 공지와 일정의 CRUD 패턴을 각각 다르게 만들어 유지보수가 어려워진다.
- 날짜가 들어가기만 하면 된다고 생각하고 논리 순서를 검증하지 않는다.
- 목록 응답에 너무 많은 필드를 넣어 프론트가 오히려 복잡해진다.
- AI가 쓸 문서 데이터의 핵심 텍스트가 응답에서 빠진다.

## 가볍게 해볼 것

- 공지 생성과 일정 생성에 공통으로 들어가는 필드를 적어 본다.
- 일정 시작 시각과 종료 시각의 검증 규칙을 한 줄로 적어 본다.
- AI가 공지/일정에서 읽어야 할 핵심 텍스트가 무엇인지 적어 본다.

## 핵심 질문

1. 공지와 일정의 CRUD 패턴을 왜 최대한 일관되게 가져가야 하는가
2. 날짜 검증에서 단순 필수값 체크만으로 부족한 이유는 무엇인가
3. AI가 다시 읽을 문서 데이터는 어떤 필드를 꼭 포함해야 하는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 공지/일정 공통 필드:
> - 날짜 검증 규칙:
> - AI가 읽을 핵심 문서 필드:

## 체크리스트

- [ ] 공지와 일정 CRUD 패턴을 일관되게 설계해야 한다는 점을 이해했다.
- [ ] 날짜 검증이 왜 필요한지 설명할 수 있다.
- [ ] 프론트와 AI가 쓰는 필드를 구분해서 생각할 수 있다.
- [ ] 문서형 데이터의 핵심 텍스트를 응답에 포함해야 한다는 점을 이해했다.
