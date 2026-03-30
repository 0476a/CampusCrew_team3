# BE-A STEP 5

## 이 STEP에서 왜 이걸 배우는가

뒤 단계에서는 단순 로그인 검증만으로는 부족하고, "누가 수정할 수 있는가", "누가 상태를 바꿀 수 있는가" 같은 더 세밀한 규칙이 필요해진다.  
이 단계는 권한 규칙을 서비스 규칙으로 다루는 연습에 가깝다.

## 이번 프로젝트에서 어디에 쓰는가

- 할 일 상태 변경 권한 검증
- 회의록 작성자 관련 규칙 지원
- 팀 하위 자원의 사용자 식별 일관성
- 통합 테스트 시 인증/권한 흐름 점검

## 먼저 이해할 핵심 개념

- 리소스 작성자와 팀 멤버의 차이
- 상태 변경처럼 좁은 동작의 권한 규칙
- 사용자 ID 전달과 보안 컨텍스트 활용
- 서비스 규칙과 UI 규칙의 차이
- 권한 규칙을 문서와 코드에서 함께 유지하는 방법

## 꼭 알아야 할 용어

- `principal`: 현재 인증된 사용자 정보
- `ownership`: 특정 리소스의 작성자 또는 소유자 관계
- `state transition`: 상태가 한 값에서 다른 값으로 바뀌는 흐름
- `business rule`: 도메인에서 반드시 지켜야 하는 규칙
- `integration test`: 여러 계층을 함께 검증하는 테스트

## 추천 학습 순서

1. [BE_A_GUIDE](../../backend/BE_A_GUIDE.md)의 `STEP 5`를 읽는다.
2. [API_SPEC](../../backend/API_SPEC.md)의 `9.5 할 일 상태 변경`과 회의록 관련 API를 다시 본다.
3. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)의 `STEP 5`를 읽고 어떤 데이터를 BE-B가 만들고 있는지 본다.
4. 작성자 규칙과 팀 멤버 규칙이 어떻게 다른지 적어 본다.
5. 테스트에서 어떤 사용자 시나리오를 만들어야 할지 생각해 본다.

## 먼저 읽을 문서

1. [BE_A_GUIDE](../../backend/BE_A_GUIDE.md)
2. [API_SPEC](../../backend/API_SPEC.md)
3. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)
4. [PLAN](../../common/PLAN.md)

## 외부 자료 링크

- Spring Security: [Testing](https://docs.spring.io/spring-security/reference/servlet/test/index.html)
- Spring Boot: [Testing](https://docs.spring.io/spring-boot/reference/testing/index.html)
- Baeldung: [Spring Security @WithMockUser](https://www.baeldung.com/spring-security-integration-tests)
- Baeldung: [Testing the Spring Security Context](https://www.baeldung.com/manually-set-user-authentication-spring-security)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [API_SPEC](../../backend/API_SPEC.md)에서 할 일 상태값과 회의록 API의 기본 규칙을 다시 본다.
- [PLAN](../../common/PLAN.md)의 `STEP 5` 체크리스트에서 상태 변경과 작성자 검증을 확인한다.
- [UI_SPEC](../../frontend/UI_SPEC.md)의 할 일/회의록 화면이 어떤 동작을 기대하는지 다시 본다.
- [AI_SPEC](../../ai/AI_SPEC.md)의 액션 아이템 추출이 회의록과 연결되는 점을 확인한다.

## 자주 막히는 지점

- 팀에 속해 있으면 모든 수정 권한이 있다고 생각한다.
- 작성자 규칙과 상태 변경 규칙을 문서 없이 감으로 정한다.
- 프론트가 버튼을 숨겼으니 서버 검증은 약해도 된다고 생각한다.
- 사용자 ID를 요청 바디에서 받으려다가 보안 흐름이 흔들린다.

## 가볍게 해볼 것

- "팀 멤버", "작성자", "팀장"이 각각 할 수 있는 행동을 한 줄씩 적어 본다.
- 상태 변경 API에서 서버가 직접 알아야 하는 정보가 무엇인지 적어 본다.
- 테스트해야 할 사용자 케이스를 2개만 적어 본다.

## 핵심 질문

1. 팀 멤버 권한과 작성자 권한의 차이를 설명할 수 있는가
2. 프론트에서 버튼을 숨겨도 서버 검증이 왜 필요한가
3. 상태 변경 API 테스트에서 어떤 사용자 시나리오를 봐야 하는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 역할별 권한 차이:
> - 서버가 직접 확인해야 하는 정보:
> - 내가 추가로 테스트할 사용자 케이스:

## 체크리스트

- [ ] 작성자 규칙과 팀 소속 규칙의 차이를 이해했다.
- [ ] 상태 변경 권한을 어디서 검증해야 하는지 알고 있다.
- [ ] 프론트 제어와 서버 권한 검증은 별개라는 점을 이해했다.
- [ ] 통합 테스트에서 어떤 사용자 시나리오를 볼지 감이 있다.
