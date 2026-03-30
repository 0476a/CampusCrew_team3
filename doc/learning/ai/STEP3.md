# AI STEP 3

## 이 STEP에서 왜 이걸 배우는가

이 단계부터 AI 기능이 문서 안의 아이디어가 아니라 실제 버튼과 API로 보이기 시작한다.  
특히 액션 아이템 추출과 톤 변환은 "무슨 입력을 받고 어떤 구조로 돌려줄지"를 구체적으로 정해야 연동이 쉬워진다.

## 이번 프로젝트에서 어디에 쓰는가

- 회의록 액션 아이템 추출
- 공지 톤 변환
- AI API 요청/응답 예시
- 첫 번째 프롬프트 초안 구체화

## 먼저 이해할 핵심 개념

- 정보 추출과 생성의 차이
- 의미 보존과 표현 변환의 차이
- 예시 기반 프롬프트 설계
- 구조화 응답 필드 설계
- 연동하기 쉬운 JSON 응답 만들기

## 꼭 알아야 할 용어

- `extraction`: 긴 입력에서 필요한 정보만 뽑는 것
- `transformation`: 내용은 유지하고 표현만 바꾸는 것
- `schema`: 응답 필드 구조를 미리 정한 틀
- `few-shot`: 예시를 함께 보여 주는 프롬프트 방식
- `hallucination`: 입력에 없는 내용을 모델이 지어내는 현상

## 추천 학습 순서

1. [AI_GUIDE](../../ai/AI_GUIDE.md)의 `STEP 3`을 읽는다.
2. [AI_SPEC](../../ai/AI_SPEC.md)의 `5.1`과 `5.2`를 읽는다.
3. [API_SPEC](../../backend/API_SPEC.md)의 `10. AI API`를 읽는다.
4. 회의록 본문에서 어떤 항목을 추출할지 먼저 표로 적어 본다.
5. 톤 변환은 어떤 톤 값만 허용할지 다시 확인한다.

## 먼저 읽을 문서

1. [AI_GUIDE](../../ai/AI_GUIDE.md)
2. [AI_SPEC](../../ai/AI_SPEC.md)
3. [API_SPEC](../../backend/API_SPEC.md)
4. [UI_SPEC](../../frontend/UI_SPEC.md)

## 외부 자료 링크

- Google AI for Developers: [Text generation](https://ai.google.dev/gemini-api/docs/text-generation)
- Google AI for Developers: [Structured output](https://ai.google.dev/gemini-api/docs/structured-output)
- JSON Schema: [What is JSON Schema?](https://json-schema.org/learn/getting-started-step-by-step)
- Prompting Guide: [Information Extraction](https://www.promptingguide.ai/applications/information-extraction)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [AI_SPEC](../../ai/AI_SPEC.md)의 액션 아이템 추출 출력 필드와 톤 변환 출력 필드를 다시 본다.
- [UI_SPEC](../../frontend/UI_SPEC.md)에서 회의록 작성 화면과 공지 작성 화면이 어떻게 연결되는지 본다.
- [API_SPEC](../../backend/API_SPEC.md)에서 `/api/ai/*` 응답 구조를 확인한다.
- [PLAN](../../common/PLAN.md)의 `STEP 3` 산출물에 액션 아이템/톤 변환 초안이 들어 있는지 본다.

## 자주 막히는 지점

- 액션 아이템 추출과 회의록 전체 요약을 같은 작업처럼 생각한다.
- 톤 변환이 원문 의미까지 바꾸는 것처럼 설계한다.
- 응답 필드를 너무 자유롭게 두어 프론트와 백엔드가 처리하기 어려워진다.
- 예시 입력 없이 막연한 프롬프트만 적는다.

## 가볍게 해볼 것

- 액션 아이템 추출 결과에 꼭 필요한 필드 3개를 적어 본다.
- 톤 변환에서 바뀌어도 되는 것과 바뀌면 안 되는 것을 나눠 적어 본다.
- 입력 예시 1개와 기대 출력 예시 1개를 짧게 적어 본다.

## 핵심 질문

1. 액션 아이템 추출과 회의록 요약은 왜 다른 작업인가
2. 톤 변환에서 바뀌면 안 되는 것은 무엇인가
3. 예시 기반 프롬프트가 왜 품질에 큰 영향을 주는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 액션 아이템 추출 필드:
> - 톤 변환에서 유지해야 할 것:
> - 입력/출력 예시 초안:

## 체크리스트

- [ ] 액션 아이템 추출과 톤 변환의 차이를 설명할 수 있다.
- [ ] 구조화 응답 필드가 왜 중요한지 이해했다.
- [ ] 예시 기반 프롬프트가 품질에 영향을 준다는 점을 이해했다.
- [ ] 원문에 없는 내용을 추가하지 않도록 제한해야 한다는 점을 알고 있다.
