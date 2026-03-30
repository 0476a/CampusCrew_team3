# BE-B STEP 1

## 이 STEP에서 왜 이걸 배우는가

BE-B는 공지, 일정, 할 일, 회의록처럼 팀이 실제로 매일 쓰는 데이터를 담당한다.  
초반에는 코드를 빨리 쓰기보다 어떤 자원이 있고, 어떤 필드가 필요하고, 어떤 관계를 가지는지 먼저 이해해야 이후 CRUD 구현이 흔들리지 않는다.

## 이번 프로젝트에서 어디에 쓰는가

- 공지
- 일정
- 할 일
- 회의록
- 대시보드 집계의 기반 데이터

## 먼저 이해할 핵심 개념

- CRUD는 자원을 기준으로 생각하면 이해하기 쉽다.
- 엔터티 구조와 화면 응답 구조는 다를 수 있다.
- 팀 하위 리소스는 항상 팀과 연결되어 있다.
- 작성자, 날짜, 상태값은 자주 반복되는 핵심 필드다.
- ERD는 구현 전에 데이터를 읽는 지도 역할을 한다.

## 꼭 알아야 할 용어

| 용어 | 쉬운 설명 |
| --- | --- |
| 자원(Resource) | API에서 독립적으로 다루는 데이터 단위 |
| CRUD | 생성, 조회, 수정, 삭제 |
| 엔터티(Entity) | DB 테이블과 연결되는 객체 |
| DTO | 요청/응답용 데이터 모양 |
| 연관관계 | 어떤 데이터가 어떤 데이터에 속하는지 연결하는 것 |
| 집계 | 여러 자원에서 필요한 값만 모아 요약해서 보여 주는 것 |

## 추천 학습 순서

1. `PRD`와 `ERD`를 보고 어떤 데이터가 있는지 먼저 파악한다.
2. `API_SPEC`에서 공지/일정/할 일/회의록 응답 구조를 본다.
3. CRUD와 리소스 설계 기본을 이해한다.
4. 엔터티와 DTO를 왜 나누는지 본다.
5. `BE_B_GUIDE` STEP 1을 읽으며 프로젝트 구조에 연결한다.

## 먼저 읽을 문서

1. [PRD](../../common/PRD.md)
2. [ERD](../../backend/ERD.md)
3. [API_SPEC](../../backend/API_SPEC.md)
4. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)

## 외부 자료 링크

- Spring Data JPA 공식 문서: [https://docs.spring.io/spring-data/jpa/docs/current/reference/html/](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
- Spring Data JPA 소개: [https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa](https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa)
- Spring Boot Validation 문서: [https://docs.spring.io/spring-boot/reference/io/validation.html](https://docs.spring.io/spring-boot/reference/io/validation.html)
- Entity와 DTO를 나누는 이유: [https://jpa-buddy.com/blog/entity-to-dto-how-to/](https://jpa-buddy.com/blog/entity-to-dto-how-to/)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

| 항목 | 지금 확인할 것 |
| --- | --- |
| 자원 목록 | 공지, 일정, 할 일, 회의록이 각각 독립 자원인지 본다. |
| 팀 연결 | 모든 팀 하위 데이터가 어떤 식으로 팀과 연결되는지 본다. |
| 필수 필드 | 제목, 설명, 날짜, 상태, 작성자 같은 기본 필드를 찾는다. |
| 대시보드 기반 | 어떤 데이터가 대시보드 집계에 재사용될지 생각해 본다. |

## 자주 막히는 지점

- DB 테이블 구조와 화면 응답이 항상 같아야 한다고 생각한다.
- 모든 도메인을 한 엔터티처럼 섞어서 본다.
- 일정 날짜와 할 일 마감일 같은 규칙을 따로 보지 않는다.
- 목록/상세/생성/수정 응답이 다를 수 있다는 점을 놓친다.

## 가볍게 해볼 것

- 공지, 일정, 할 일, 회의록의 필수 필드를 각각 적어 본다.
- "이 필드는 엔터티용인지, 화면 응답용인지"를 구분해 본다.
- 대시보드에서 재사용될 수 있는 필드를 표시해 본다.

## 핵심 질문

1. 엔터티와 DTO의 차이를 설명할 수 있는가
2. 왜 ERD를 먼저 읽고 도메인 구조를 이해해야 하는가
3. 공지, 일정, 할 일, 회의록이 왜 별도 도메인으로 나뉘는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 도메인별 책임 구분:
> - ERD에서 먼저 볼 관계:
> - 내가 아직 헷갈리는 데이터 구조:

## 체크리스트

- [ ] CRUD를 자원 단위로 이해했다.
- [ ] 엔터티와 DTO가 왜 다른지 설명할 수 있다.
- [ ] 팀과 하위 자원의 연결 구조를 이해했다.
- [ ] 각 자원의 필수 필드를 읽고 따라갈 수 있다.
- [ ] STEP 2에서 요청/응답 DTO를 만들 준비가 되었다.
