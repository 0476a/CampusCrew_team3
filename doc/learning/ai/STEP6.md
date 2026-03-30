# AI STEP 6

## 이 STEP에서 왜 이걸 배우는가

마지막 단계에서는 AI 기능이 "동작한다"는 것만으로는 부족하다.  
배포 환경에서 응답 길이, 의미 왜곡, 검색 품질, 내부 통신, 실패 처리까지 함께 봐야 실제 서비스 품질이 나온다.

## 이번 프로젝트에서 어디에 쓰는가

- 배포 환경 AI 품질 점검
- Docker 네트워크 내부 통신 점검
- Spring 백엔드와 AI 서버 연결 확인
- 출처 정확도 확인
- 최종 데모 시나리오 점검

## 먼저 이해할 핵심 개념

- 품질 점검 항목 정의
- 운영 환경과 개발 환경 차이
- 검색 품질과 답변 품질 구분
- 응답 길이와 UX 균형
- 장애 상황에서의 fallback

## 꼭 알아야 할 용어

- `quality check`: 응답 품질을 평가하는 점검
- `citation accuracy`: 출처가 실제 답변 근거와 맞는 정도
- `timeout`: 일정 시간 안에 응답하지 못하는 상태
- `network hop`: 서비스 간 호출이 한 단계를 거치는 것
- `smoke test`: 배포 후 핵심 기능만 빠르게 확인하는 테스트

## 추천 학습 순서

1. [AI_GUIDE](../../ai/AI_GUIDE.md)의 `STEP 6`을 읽는다.
2. [AI_SPEC](../../ai/AI_SPEC.md)의 `4. AI 구조 기준`, `6. RAG 규칙`, `9. 실패 처리 규칙`을 다시 읽는다.
3. [DEPLOYMENT](../../common/DEPLOYMENT.md)의 배포 구조를 읽는다.
4. 기능별 품질 체크 포인트를 적어 본다.
5. 실제 점검 순서를 "톤 변환 -> 액션 아이템 -> 요약 -> Q&A"처럼 적어 본다.

## 먼저 읽을 문서

1. [AI_GUIDE](../../ai/AI_GUIDE.md)
2. [AI_SPEC](../../ai/AI_SPEC.md)
3. [DEPLOYMENT](../../common/DEPLOYMENT.md)
4. [PLAN](../../common/PLAN.md)
5. [API_SPEC](../../backend/API_SPEC.md)

## 외부 자료 링크

- Google AI for Developers: [Gemini API docs](https://ai.google.dev/gemini-api/docs)
- Google AI for Developers: [Gemini models](https://ai.google.dev/gemini-api/docs/models)
- Docker Docs: [Networking Overview](https://docs.docker.com/engine/network/)
- pgvector: [Indexing](https://github.com/pgvector/pgvector#indexing)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [DEPLOYMENT](../../common/DEPLOYMENT.md)에서 단일 인스턴스와 Docker 네트워크 기준을 다시 본다.
- [AI_SPEC](../../ai/AI_SPEC.md)에서 실패 처리와 출처 반환 규칙을 다시 확인한다.
- [PLAN](../../common/PLAN.md)의 `STEP 6` 완료 기준과 AI 최종 점검 항목을 확인한다.
- [GIT](../../common/GIT.md)에서 수동 반영 운영 방식을 다시 본다.

## 자주 막히는 지점

- 로컬에서만 응답을 보고 배포 환경 품질은 따로 확인하지 않는다.
- 검색 결과가 맞는지 보지 않고 답변 문장만 읽는다.
- 출처는 붙지만 실제 근거와 맞는지는 점검하지 않는다.
- AI 서버와 백엔드의 내부 호출 실패를 UX와 연결해서 보지 않는다.

## 가볍게 해볼 것

- 기능별로 "좋은 응답" 기준을 한 줄씩 적어 본다.
- Q&A에서 답변과 출처가 동시에 맞아야 하는 이유를 적어 본다.
- 배포 환경에서 가장 먼저 확인할 AI 기능 2개를 적어 본다.

## 핵심 질문

1. 배포 환경에서 AI 품질을 왜 따로 점검해야 하는가
2. 검색 품질과 답변 품질이 다를 수 있다는 말의 뜻은 무엇인가
3. Docker 네트워크 내부 통신 문제는 사용자 경험에 어떻게 드러날 수 있는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 기능별 품질 점검 기준:
> - 출처 정확도 확인 방식:
> - 배포 환경에서 먼저 볼 AI 기능:

## 체크리스트

- [ ] 배포 환경에서 AI 품질을 어떻게 점검할지 알고 있다.
- [ ] 검색 품질과 답변 품질은 다를 수 있다는 점을 이해했다.
- [ ] Docker 네트워크 기반 내부 통신 구조를 이해했다.
- [ ] 출처 정확도와 실패 처리도 최종 품질 점검 항목이라는 점을 안다.
