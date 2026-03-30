# Frontend STEP 4

## 이 STEP에서 왜 이걸 배우는가

공지와 일정은 "폼 입력"과 "목록 표시"가 본격적으로 반복되는 첫 도메인이다.  
이 단계에서 공통 폼 패턴과 재조회 흐름을 제대로 잡아 두면 뒤의 할 일과 회의록 화면도 훨씬 안정적으로 만든다.

## 이번 프로젝트에서 어디에 쓰는가

- 공지 목록 화면
- 공지 작성/수정 화면
- 일정 목록 화면
- 일정 작성/수정 화면
- 저장 후 목록 복귀 흐름
- 공지 톤 변환 UI 연결

## 먼저 이해할 핵심 개념

- 리스트 화면과 작성 화면 분리
- 폼 입력 상태와 서버 상태 분리
- 저장 성공 후 이동 규칙
- 재조회 기반 화면 동기화
- AI 버튼이 주기능 버튼을 방해하지 않게 배치하는 방법

## 꼭 알아야 할 용어

- `mutation`: 생성, 수정, 삭제처럼 서버 데이터를 바꾸는 요청
- `invalidate`: 변경 뒤 관련 목록을 다시 조회하게 만드는 것
- `textarea`: 긴 문장을 입력하는 다중 행 입력창
- `draft`: 저장 전 사용자가 작성 중인 임시 입력 상태
- `tone transform`: 공지 의미는 유지하고 표현 방식만 바꾸는 AI 기능

## 추천 학습 순서

1. [UI_SPEC](../../frontend/UI_SPEC.md)의 `8.6`부터 `8.9`까지 읽는다.
2. [API_SPEC](../../backend/API_SPEC.md)의 `7. 공지 API`와 `8. 일정 API`를 읽는다.
3. 폼에 들어가는 필드와 리스트에 보여 줄 필드를 구분해 적어 본다.
4. 저장 성공 후 어떤 화면으로 이동하는지 먼저 정리한다.
5. 공지 작성 화면에서 톤 변환 버튼이 어디에 들어갈지 생각해 본다.

## 먼저 읽을 문서

1. [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)의 `STEP 4`
2. [UI_SPEC](../../frontend/UI_SPEC.md)
3. [API_SPEC](../../backend/API_SPEC.md)
4. [AI_SPEC](../../ai/AI_SPEC.md)의 `5.2 문서 톤 변환`

## 외부 자료 링크

- React: [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
- React: [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- TanStack Query: [Mutations](https://tanstack.com/query/latest/docs/react/guides/mutations)
- TanStack Query: [Invalidation from Mutations](https://tanstack.com/query/latest/docs/react/guides/invalidations-from-mutations)
- MDN: [HTML textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [UI_SPEC](../../frontend/UI_SPEC.md)의 공지/일정 입력 항목을 보고 공통 필드와 도메인 전용 필드를 나눈다.
- [API_SPEC](../../backend/API_SPEC.md)의 공지/일정 생성 요청 구조와 목록 응답 구조를 비교한다.
- [AI_SPEC](../../ai/AI_SPEC.md)에서 톤 변환 입력과 출력이 공지 작성 화면에 어떻게 들어가는지 본다.
- [PLAN](../../common/PLAN.md)의 `STEP 4` 산출물과 종료 조건을 다시 본다.

## 자주 막히는 지점

- 작성 화면을 모달로 넣으려다가 흐름이 복잡해진다.
- 저장 후 목록을 다시 불러오지 않고 로컬 상태만 억지로 바꾸려다 꼬인다.
- 날짜 입력 검증과 에러 메시지 위치를 화면마다 다르게 만든다.
- AI 결과를 본문에 바로 덮어쓸지 미리보기로 보여 줄지 기준 없이 붙인다.

## 가볍게 해볼 것

- 공지와 일정에 공통으로 들어가는 입력 필드를 적어 본다.
- 저장 성공 후 이동 규칙을 "작성 -> 저장 -> 목록" 한 줄로 적어 본다.
- 톤 변환 결과를 어디에 보여 줄지 간단한 메모를 남겨 본다.

## 핵심 질문

1. 목록 화면과 작성 화면을 왜 분리해야 하는가
2. 저장 후 재조회가 필요한 이유를 설명할 수 있는가
3. 톤 변환 버튼은 왜 주 기능 버튼과 구분되어야 하는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 공지/일정 공통 폼 규칙:
> - 저장 성공 후 이동 흐름:
> - 톤 변환 결과를 보여 줄 위치:

## 체크리스트

- [ ] 공지와 일정의 목록/작성 화면 역할을 구분할 수 있다.
- [ ] 폼 상태와 서버 상태를 분리해서 생각할 수 있다.
- [ ] 저장 후 재조회 흐름이 왜 필요한지 이해했다.
- [ ] 공지 작성 화면에 톤 변환을 어떻게 붙일지 감이 있다.
