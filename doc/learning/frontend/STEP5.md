# Frontend STEP 5

## 이 STEP에서 왜 이걸 배우는가

할 일과 회의록 화면은 단순 CRUD보다 상호작용이 더 많다.  
상태 변경, 긴 텍스트 입력, AI 추출 결과 표시까지 함께 다뤄야 해서, 화면 설계 감각이 한 단계 더 필요해진다.

## 이번 프로젝트에서 어디에 쓰는가

- 할 일 목록, 작성, 수정 화면
- 할 일 상태 변경 UI
- 회의록 목록, 작성, 수정 화면
- 액션 아이템 추출 UI
- 진행 상황 요약 UI
- 팀 문서 Q&A UI

## 먼저 이해할 핵심 개념

- 상태 변경 UI와 일반 수정 폼의 차이
- 긴 텍스트 입력 화면의 안정성
- AI 실행 중 중복 요청 방지
- 읽기형 AI 결과와 대화형 AI 결과의 차이
- 대시보드 안에서 독립 블록으로 AI 기능을 배치하는 방법

## 꼭 알아야 할 용어

- `status update`: 할 일 상태처럼 빠르게 바뀌는 단일 필드 변경
- `optimistic UI`: 서버 응답 전에 먼저 바뀐 것처럼 보여 주는 방식
- `disabled state`: 중복 클릭이나 잘못된 실행을 막기 위해 버튼을 잠그는 상태
- `source`: 팀 문서 Q&A 답변의 근거 문서
- `action item`: 회의에서 실제 할 일로 옮길 수 있는 실행 항목

## 추천 학습 순서

1. [UI_SPEC](../../frontend/UI_SPEC.md)의 `8.10`부터 `8.13`까지 읽는다.
2. [API_SPEC](../../backend/API_SPEC.md)의 `9. 할 일 API`, `10. 회의록 API`, `10. AI API`를 읽는다.
3. AI 기능 3개가 어느 화면에 붙는지 [AI_SPEC](../../ai/AI_SPEC.md)에서 다시 확인한다.
4. 상태 변경 버튼과 저장 버튼의 역할 차이를 정리한다.
5. 긴 텍스트 입력 화면에서 어떤 에러와 로딩 상태가 필요한지 적어 본다.

## 먼저 읽을 문서

1. [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)의 `STEP 5`
2. [UI_SPEC](../../frontend/UI_SPEC.md)
3. [API_SPEC](../../backend/API_SPEC.md)
4. [AI_SPEC](../../ai/AI_SPEC.md)

## 외부 자료 링크

- React: [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- TanStack Query: [Optimistic Updates](https://tanstack.com/query/latest/docs/react/guides/optimistic-updates)
- TanStack Query: [Disabling Queries](https://tanstack.com/query/latest/docs/react/guides/disabling-queries)
- React: [Forms](https://react.dev/reference/react-dom/components/input)
- MDN: [aria-busy](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [UI_SPEC](../../frontend/UI_SPEC.md)에서 할 일 상태 표시 방식과 회의록 입력 항목을 다시 본다.
- [API_SPEC](../../backend/API_SPEC.md)에서 할 일 상태값과 AI 응답 구조를 확인한다.
- [AI_SPEC](../../ai/AI_SPEC.md)의 `5.1`, `5.3`, `5.4`를 읽고 화면별 입출력을 연결해 본다.
- [PLAN](../../common/PLAN.md)의 `STEP 5` 산출물과 종료 조건을 다시 본다.

## 자주 막히는 지점

- 상태 변경도 일반 수정 폼처럼 무겁게 만들어서 UX가 느려진다.
- 회의록 입력 중 AI 버튼을 눌렀을 때 저장과 실행 흐름이 섞인다.
- Q&A 응답에 출처를 안 붙이거나, 어디서 온 문장인지 UI에서 숨겨 버린다.
- 진행 상황 요약과 Q&A를 같은 종류의 AI 카드로 다뤄서 화면 의도가 흐려진다.

## 가볍게 해볼 것

- `TODO`, `IN_PROGRESS`, `DONE`을 사용자에게 어떤 텍스트로 보여 줄지 적어 본다.
- 회의록 작성 화면에서 저장 버튼과 액션 아이템 추출 버튼의 역할 차이를 한 줄로 적어 본다.
- Q&A 카드에 꼭 필요한 요소를 질문 입력, 답변, 출처로 나눠 적어 본다.

## 핵심 질문

1. 할 일 상태 변경과 일반 수정의 차이를 설명할 수 있는가
2. 회의록 화면에서 저장과 AI 실행 흐름이 왜 섞이면 안 되는가
3. 팀 문서 Q&A에서 출처를 같이 보여줘야 하는 이유를 설명할 수 있는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 상태 변경 UI에서 꼭 보여 줄 정보:
> - 회의록 화면에서 버튼 역할 분리 방식:
> - Q&A 카드에 꼭 들어가야 할 요소:

## 체크리스트

- [ ] 할 일 상태 변경 UI와 일반 수정 화면의 차이를 이해했다.
- [ ] 긴 입력 폼에서 필요한 로딩, 저장, 실패 상태를 생각할 수 있다.
- [ ] 액션 아이템 추출, 진행 상황 요약, 팀 문서 Q&A가 어디에 붙는지 알고 있다.
- [ ] Q&A 답변에는 출처를 함께 보여줘야 한다는 점을 이해했다.
