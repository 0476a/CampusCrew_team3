# BE-B STEP 2

## 이 STEP에서 왜 이걸 배우는가

기능을 빨리 만드는 것보다, 잘못된 요청이 들어왔을 때 같은 방식으로 막아 주는 구조를 만드는 것이 더 중요하다.  
성공 응답만 먼저 보게 되지만, 실제 협업에서는 DTO 설계, 검증, 예외 응답이 먼저 안정되어야 프론트와 같이 일하기 편해진다.

## 이번 프로젝트에서 어디에 쓰는가

- 요청 DTO
- 응답 DTO
- 입력값 검증
- 공통 에러 응답

## 먼저 이해할 핵심 개념

- 요청 DTO와 응답 DTO는 역할이 다르다.
- 검증은 Service 전에 요청 단계에서 한 번 걸러 주는 것이 좋다.
- 날짜, 상태값, 필수 문자열은 자주 검증 대상이 된다.
- 없는 리소스와 잘못된 입력은 다른 에러다.
- 프론트가 이해할 수 있는 메시지 구조가 중요하다.

## 꼭 알아야 할 용어

| 용어 | 쉬운 설명 |
| --- | --- |
| 요청 DTO | 프론트가 서버에 보낼 데이터 모양 |
| 응답 DTO | 서버가 프론트에 내려줄 데이터 모양 |
| 검증(Validation) | 입력값이 규칙에 맞는지 확인하는 것 |
| 예외 처리 | 잘못된 상황에 대해 일정한 방식으로 응답하는 것 |
| 상태값(Enum) | 미리 정해 둔 선택지 문자열 |
| 필드 에러 | 어떤 입력 칸이 왜 잘못됐는지 알려 주는 정보 |

## 추천 학습 순서

1. `API_SPEC`에서 공통 응답 구조와 예외 처리 규칙을 본다.
2. DTO와 엔터티를 왜 분리하는지 다시 읽는다.
3. Spring/Bean Validation 기본 개념을 이해한다.
4. 날짜, 상태값, 필수 문자열 검증 예시를 본다.
5. `BE_B_GUIDE` STEP 2와 연결한다.

## 먼저 읽을 문서

1. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)
2. [API_SPEC](../../backend/API_SPEC.md)
3. [ERD](../../backend/ERD.md)

## 외부 자료 링크

- Spring Boot Validation 문서: [https://docs.spring.io/spring-boot/reference/io/validation.html](https://docs.spring.io/spring-boot/reference/io/validation.html)
- Hibernate Validator 문서: [https://hibernate.org/validator/documentation/](https://hibernate.org/validator/documentation/)
- Spring Boot Bean Validation 입문: [https://www.baeldung.com/spring-boot-bean-validation](https://www.baeldung.com/spring-boot-bean-validation)
- Bean Validation 기본: [https://www.baeldung.com/javax-validation](https://www.baeldung.com/javax-validation)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

| 항목 | 지금 확인할 것 |
| --- | --- |
| 필수 입력값 | 제목, 날짜, 상태값, 설명 필드가 어떤 규칙을 가지는지 본다. |
| 에러 응답 | 성공 응답과 실패 응답의 모양이 어떻게 다른지 본다. |
| DTO 분리 | 생성 요청 DTO와 목록 응답 DTO가 왜 달라지는지 생각해 본다. |
| 프론트 연결 | 프론트가 바로 읽기 쉬운 메시지 구조가 무엇인지 본다. |

## 자주 막히는 지점

- 엔터티를 그대로 요청/응답 모델로 쓰려고 한다.
- 검증은 프론트만 하면 된다고 생각한다.
- 모든 실패를 `500`으로 처리해 버린다.
- 날짜 오류, enum 오류, 빈 문자열 오류를 다 같은 것으로 본다.

## 가볍게 해볼 것

- 공지 생성 요청 DTO와 공지 목록 응답 DTO에 들어갈 필드를 나눠 적어 본다.
- 잘못된 날짜와 잘못된 상태값의 예외를 하나씩 적어 본다.
- 프론트가 이해하기 쉬운 에러 메시지 예시를 적어 본다.

## 핵심 질문

1. 생성 요청 DTO와 목록 응답 DTO는 왜 분리해야 하는가
2. 성공 응답보다 검증과 예외 형식을 먼저 잡아야 하는 이유는 무엇인가
3. 프론트가 바로 쓸 필드만 응답에 넣는다는 말의 뜻을 설명할 수 있는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 요청 DTO와 응답 DTO 차이:
> - 검증 규칙이 필요한 필드:
> - 프론트와 먼저 맞출 응답 필드:

## 체크리스트

- [ ] 요청 DTO와 응답 DTO의 차이를 설명할 수 있다.
- [ ] 입력 검증이 왜 필요한지 이해했다.
- [ ] 공통 예외 응답 구조를 읽고 따라갈 수 있다.
- [ ] 날짜/상태값/필수 입력 검증 예시를 떠올릴 수 있다.
- [ ] STEP 2에서 DTO와 검증 규칙을 만들 준비가 되었다.
