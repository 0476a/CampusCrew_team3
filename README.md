# CampusCrew

CampusCrew는 대학생 팀 프로젝트를 위한 협업 워크스페이스다.  

## 1. 프로젝트 요약

| 항목 | 내용 |
| --- | --- |
| 주제 | 대학생 팀 프로젝트 협업 서비스 |
| 서비스명 | CampusCrew |
| 프론트엔드 | React, React Router, TanStack Query, CSS Modules |
| 백엔드 | Spring Boot, Spring Web, Spring Data JPA, Spring Security, JWT |
| AI | 백엔드 내부 AI API, 외부 LLM 호출, 경량 RAG 기반 팀 문서 Q&A |
| 인원 구성 | 프론트 1명, 백엔드 2명, AI 1명 |
| 데이터베이스 | PostgreSQL, pgvector, H2 |
| 기간 | 6주 |
| 핵심 기능 | 인증, 팀, 공지, 일정, 할 일, 회의록, 대시보드 |

## 2. 문서 목록

### 시작은 여기서

- [ONBOARDING](./doc/common/ONBOARDING.md)
  가장 먼저 읽는 문서다. 무엇부터 읽고, 어떤 순서로 움직이고, 지금 당장 무엇을 하면 되는지 한눈에 정리되어 있다.

### 기획과 공통 기준

- [PRD](./doc/common/PRD.md)
- [GIT](./doc/common/GIT.md)
- [PLAN](./doc/common/PLAN.md)
- [DEPLOYMENT](./doc/common/DEPLOYMENT.md)

### 상세 명세

- [UI_SPEC](./doc/frontend/UI_SPEC.md)
- [SCREEN_FLOW](./doc/frontend/SCREEN_FLOW.md)
- [API_SPEC](./doc/backend/API_SPEC.md)
- [ERD](./doc/backend/ERD.md)
- [AI_SPEC](./doc/ai/AI_SPEC.md)

### 포지션별 가이드

- [FRONTEND_GUIDE](./doc/frontend/FRONTEND_GUIDE.md)
- [BE_A_GUIDE](./doc/backend/BE_A_GUIDE.md)
- [BE_B_GUIDE](./doc/backend/BE_B_GUIDE.md)
- [AI_GUIDE](./doc/ai/AI_GUIDE.md)

## 3. 폴더 구조

```text
frontend/
backend/
doc/
  common/
  frontend/
  backend/
  ai/
  learning/
```
