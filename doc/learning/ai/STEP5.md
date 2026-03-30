# AI STEP 5

## 이 STEP에서 왜 이걸 배우는가

이 단계에서는 AI 기능이 드디어 실제 서비스 흐름 안으로 들어간다.  
연동 단계에서는 모델 품질만 보는 것이 아니라, 로딩, 실패 처리, 출처 표시, 입력 검증까지 함께 봐야 한다.

## 이번 프로젝트에서 어디에 쓰는가

- 회의록 화면 액션 아이템 추출 연결
- 공지 화면 톤 변환 연결
- 대시보드 진행 상황 요약 연결
- 대시보드 팀 문서 Q&A 연결
- 백엔드와 AI 서버 내부 요청 스키마 점검

## 먼저 이해할 핵심 개념

- 기능별 요청/응답 계약 유지
- 화면과 AI 기능의 역할 분리
- 실패 응답 처리
- 중복 요청 방지
- 출처가 있는 답변 UI와 API 연결

## 꼭 알아야 할 용어

- `integration`: 기능이 실제 서비스 흐름과 연결되는 단계
- `fallback`: 실패했을 때 보여 줄 대체 메시지나 동작
- `request schema`: 백엔드가 AI 서버에 보내는 내부 요청 구조
- `response validation`: AI 응답이 문서에 맞는지 확인하는 과정
- `idempotency awareness`: 같은 요청을 여러 번 눌렀을 때 생길 수 있는 문제를 의식하는 것

## 추천 학습 순서

1. [AI_GUIDE](../../ai/AI_GUIDE.md)의 `STEP 5`를 읽는다.
2. [AI_SPEC](../../ai/AI_SPEC.md)의 `7. UI 연결 규칙`, `8. API 계약`, `9. 실패 처리 규칙`을 읽는다.
3. [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)의 `STEP 5`를 읽는다.
4. [API_SPEC](../../backend/API_SPEC.md)의 AI API 예시를 다시 본다.
5. 기능별 성공/실패 흐름을 한 줄씩 적어 본다.

## 먼저 읽을 문서

1. [AI_GUIDE](../../ai/AI_GUIDE.md)
2. [AI_SPEC](../../ai/AI_SPEC.md)
3. [API_SPEC](../../backend/API_SPEC.md)
4. [FRONTEND_GUIDE](../../frontend/FRONTEND_GUIDE.md)
5. [PLAN](../../common/PLAN.md)

## 외부 자료 링크

- Google AI for Developers: [Gemini API docs](https://ai.google.dev/gemini-api/docs)
- Google AI for Developers: [Gemini models](https://ai.google.dev/gemini-api/docs/models)
- MDN: [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- web.dev: [Network resilience](https://web.dev/articles/fetch-api-error-handling)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [AI_SPEC](../../ai/AI_SPEC.md)의 UI 연결 규칙을 보고 버튼 위치와 실패 처리 규칙을 다시 확인한다.
- [API_SPEC](../../backend/API_SPEC.md)의 AI 응답 필드가 프론트에서 그대로 보일 수 있는지 본다.
- [PLAN](../../common/PLAN.md)의 `STEP 5` 종료 조건에서 AI 기능 1차 연동이 포함되는 것을 본다.
- [UI_SPEC](../../frontend/UI_SPEC.md)에서 AI 기능이 들어가는 화면 위치를 다시 확인한다.

## 자주 막히는 지점

- 기능이 붙기만 하면 됐다고 생각하고 실패 응답은 나중으로 미룬다.
- 액션 아이템 추출 결과를 할 일 생성과 어떻게 연결할지 정하지 않는다.
- Q&A 답변은 보여 주지만 출처는 UI에 붙이지 않는다.
- 백엔드와 AI 서버 내부 요청 스키마를 문서 없이 바꾼다.

## 가볍게 해볼 것

- 기능별 성공 시 보일 값과 실패 시 보일 메시지를 한 줄씩 적어 본다.
- 사용자가 AI 버튼을 두 번 눌렀을 때 어떤 문제가 생길지 적어 본다.
- Q&A 응답에서 답변과 출처를 어떻게 나눌지 적어 본다.

## 핵심 질문

1. AI 기능이 실제 화면에 붙을 때 성공/실패 흐름을 왜 같이 봐야 하는가
2. 내부 요청 스키마를 문서 없이 바꾸면 어떤 문제가 생기는가
3. 팀 문서 Q&A에서 답변과 출처를 왜 함께 검증해야 하는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 기능별 성공 흐름:
> - 기능별 실패 흐름:
> - 출처를 UI와 API에서 유지하는 방식:

## 체크리스트

- [ ] 기능별 성공/실패 흐름을 설명할 수 있다.
- [ ] 응답 검증과 실패 처리도 구현 범위라는 점을 이해했다.
- [ ] 출처가 있는 답변을 UI와 API 모두에서 유지해야 한다는 점을 안다.
- [ ] 내부 요청 스키마를 문서와 함께 관리해야 한다는 점을 이해했다.
