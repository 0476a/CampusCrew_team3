# BE-A STEP 4

## 이 STEP에서 왜 이걸 배우는가

이 단계부터 BE-A는 직접 공지와 일정을 만들지는 않지만, 팀 내부 자원에 대한 접근 경계를 책임져야 한다.  
즉 "로그인했다"와 "이 팀에 접근할 수 있다"를 구분해서 검증하는 감각이 필요하다.

## 이번 프로젝트에서 어디에 쓰는가

- 팀 하위 자원 공통 권한 검증
- 팀 존재 여부 검증
- 공통 예외 처리
- BE-B 도메인이 재사용할 인증/권한 기반 제공

## 먼저 이해할 핵심 개념

- 인증과 인가의 차이
- 사용자 검증과 팀 소속 검증의 차이
- 서비스 계층 권한 검증
- 공통 예외 응답의 중요성
- 도메인 간 검증 로직 공유 방식

## 꼭 알아야 할 용어

- `authentication`: 누가 요청했는지 확인하는 것
- `authorization`: 이 요청자가 이 기능을 써도 되는지 확인하는 것
- `forbidden`: 로그인은 되었지만 권한이 없는 상태
- `not found`: 요청한 팀이나 리소스가 존재하지 않는 상태
- `cross-cutting concern`: 여러 도메인에서 공통으로 필요한 처리

## 추천 학습 순서

1. [BE_A_GUIDE](../../backend/BE_A_GUIDE.md)의 `STEP 4`를 읽는다.
2. [API_SPEC](../../backend/API_SPEC.md)의 `11. 예외 처리 규칙`을 읽는다.
3. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)의 `STEP 4`를 읽어 BE-B가 기대하는 검증 지점을 본다.
4. 401, 403, 404가 각각 언제 나와야 하는지 구분해 본다.
5. 팀 소속 검증이 어느 계층에 있어야 할지 스스로 설명해 본다.

## 먼저 읽을 문서

1. [BE_A_GUIDE](../../backend/BE_A_GUIDE.md)
2. [API_SPEC](../../backend/API_SPEC.md)
3. [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)
4. [PLAN](../../common/PLAN.md)

## 외부 자료 링크

- Spring Security: [Authorization Architecture](https://docs.spring.io/spring-security/reference/servlet/authorization/index.html)
- Spring Security: [Method Security](https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html)
- MDN: [401 Unauthorized](https://developer.mozilla.org/docs/Web/HTTP/Status/401)
- MDN: [403 Forbidden](https://developer.mozilla.org/docs/Web/HTTP/Status/403)
- MDN: [404 Not Found](https://developer.mozilla.org/docs/Web/HTTP/Status/404)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [API_SPEC](../../backend/API_SPEC.md)에서 공통 에러 응답 형식을 다시 본다.
- [PLAN](../../common/PLAN.md)의 `STEP 4`에서 팀 권한 검증이 종료 조건에 포함된 것을 본다.
- [BE_B_GUIDE](../../backend/BE_B_GUIDE.md)에서 공지/일정 도메인이 어떤 보호를 기대하는지 확인한다.
- [ONBOARDING](../../common/ONBOARDING.md)의 막히는 지점 표에서 언제 ERD와 API 문서를 다시 보는지 확인한다.

## 자주 막히는 지점

- 로그인만 되어 있으면 모든 팀 자원에 접근 가능하다고 착각한다.
- 팀 소속 검증을 Controller에서만 하고 Service에서는 놓친다.
- 403과 404를 섞어서 응답해 프론트가 처리하기 어려워진다.
- 도메인마다 에러 메시지 형식이 달라진다.

## 가볍게 해볼 것

- 401, 403, 404가 각각 언제 발생하는지 한 줄씩 적어 본다.
- "로그인한 사용자"와 "이 팀에 속한 사용자"의 차이를 적어 본다.
- 팀 소속 검증 메서드가 어디서 재사용될지 2곳만 적어 본다.

## 핵심 질문

1. 인증과 인가의 차이를 설명할 수 있는가
2. 왜 팀 소속 검증은 Service 계층에서도 보장되어야 하는가
3. 401, 403, 404를 어떻게 구분해야 하는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 인증과 인가 차이:
> - 팀 소속 검증이 필요한 위치:
> - 상태 코드 구분 기준:

## 체크리스트

- [ ] 인증과 인가를 구분해서 설명할 수 있다.
- [ ] 팀 내부 자원 접근 전에 어떤 검증이 필요한지 알고 있다.
- [ ] 공통 에러 응답 형식이 왜 중요한지 이해했다.
- [ ] 401, 403, 404를 구분해서 사용할 수 있다.
