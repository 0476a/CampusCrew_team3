# AI STEP 4

## 이 STEP에서 왜 이걸 배우는가

진행 상황 요약과 팀 문서 Q&A는 앞 단계보다 입력 범위가 넓고, RAG 설계까지 같이 생각해야 한다.  
즉 모델 호출 자체보다 "어떤 문서를 어디까지 읽히고, 어떤 근거를 돌려줄지"가 핵심이 된다.

## 이번 프로젝트에서 어디에 쓰는가

- 진행 상황 요약
- 팀 문서 Q&A
- RAG 대상 문서 범위
- 문서 청크 기준
- 출처 반환 구조

## 먼저 이해할 핵심 개념

- 요약과 질의응답의 차이
- RAG 기본 흐름
- 팀 범위 제한
- 검색 결과 수 제한
- 출처가 있는 답변 설계

## 꼭 알아야 할 용어

- `RAG`: 검색 결과를 바탕으로 답변을 만드는 방식
- `chunk`: 긴 문서를 검색하기 좋게 나눈 조각
- `embedding`: 텍스트를 검색 가능한 벡터로 바꾼 값
- `retrieval`: 질문과 관련 있는 문서를 찾는 단계
- `grounding`: 답변이 실제 문서 근거 위에 서 있게 만드는 것

## 추천 학습 순서

1. [AI_GUIDE](../../ai/AI_GUIDE.md)의 `STEP 4`를 읽는다.
2. [AI_SPEC](../../ai/AI_SPEC.md)의 `4.3 RAG 구조`, `5.3`, `5.4`, `6. RAG 규칙`을 읽는다.
3. [API_SPEC](../../backend/API_SPEC.md)의 AI API 구조를 다시 읽는다.
4. 질문 하나가 들어왔을 때 검색 -> 컨텍스트 구성 -> 답변 -> 출처 반환 순서를 적어 본다.
5. 팀 범위를 넘지 않게 해야 하는 이유를 설명해 본다.

## 먼저 읽을 문서

1. [AI_GUIDE](../../ai/AI_GUIDE.md)
2. [AI_SPEC](../../ai/AI_SPEC.md)
3. [API_SPEC](../../backend/API_SPEC.md)
4. [ERD](../../backend/ERD.md)

## 외부 자료 링크

- Google AI for Developers: [Embeddings](https://ai.google.dev/gemini-api/docs/embeddings)
- pgvector: [Documentation](https://github.com/pgvector/pgvector)
- Pinecone Learn: [What is RAG?](https://www.pinecone.io/learn/retrieval-augmented-generation/)
- Prompting Guide: [RAG](https://www.promptingguide.ai/research/rag)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [AI_SPEC](../../ai/AI_SPEC.md)의 검색 대상 문서와 출처 반환 필드를 다시 본다.
- [ERD](../../backend/ERD.md)의 `rag_documents`, `rag_chunks`를 확인한다.
- [PLAN](../../common/PLAN.md)의 `STEP 4` 산출물에 요약/Q&A 초안이 들어 있는지 확인한다.
- [UI_SPEC](../../frontend/UI_SPEC.md)의 대시보드에서 요약과 Q&A가 어떻게 배치되는지 확인한다.

## 자주 막히는 지점

- 진행 상황 요약도 RAG가 꼭 필요하다고 생각한다.
- 검색 범위를 팀 전체가 아니라 서비스 전체처럼 넓혀 버린다.
- 출처를 반환하지 않고 답변 텍스트만 돌려준다.
- 검색 결과를 너무 많이 넣어 응답이 오히려 흔들린다.

## 가볍게 해볼 것

- 진행 상황 요약이 읽을 데이터와 Q&A가 검색할 데이터를 나눠 적어 본다.
- 출처에 꼭 들어가야 할 필드 3개를 적어 본다.
- 질문 1개에 대해 검색 결과를 최대 몇 개까지 쓸지 적어 본다.

## 핵심 질문

1. 진행 상황 요약과 팀 문서 Q&A의 차이를 설명할 수 있는가
2. RAG에서 팀 범위를 넘지 않게 검색해야 하는 이유는 무엇인가
3. 답변에 출처를 같이 반환해야 하는 이유를 설명할 수 있는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - RAG 흐름 요약:
> - 검색 범위 제한 기준:
> - 출처에 꼭 필요한 필드:

## 체크리스트

- [ ] 진행 상황 요약과 팀 문서 Q&A의 차이를 이해했다.
- [ ] RAG 기본 흐름을 설명할 수 있다.
- [ ] 팀 범위를 넘지 않게 검색해야 한다는 점을 이해했다.
- [ ] 답변에는 출처를 함께 반환해야 한다는 점을 알고 있다.
