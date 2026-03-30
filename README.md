# CampusCrew

CampusCrew는 대학생 팀 프로젝트를 위한 협업 워크스페이스다.  

## 1. 프로젝트 요약

| 항목 | 내용 |
| --- | --- |
| 주제 | 대학생 팀 프로젝트 협업 서비스 |
| 서비스명 | CampusCrew |
| 프론트엔드 | React, React Router, TanStack Query, CSS Modules |
| 백엔드 | Spring Boot, Spring Web, Spring Data JPA, Spring Security, JWT |
| AI | 단일 `e2-standard-2` 인스턴스 내 분리된 AI 서버 프로세스, 외부 LLM `gemini-2.5-flash-lite` 호출, 경량 RAG 기반 팀 문서 Q&A |
| 인원 구성 | 프론트 1명, 백엔드 2명, AI 1명 |
| 데이터베이스 | PostgreSQL, pgvector, H2 |
| 기간 | 6주 |
| 핵심 기능 | 인증, 팀, 공지, 일정, 할 일, 회의록, 대시보드 |

## 1.1 디자인 링크

- [Figma Make UI 시안](https://www.figma.com/make/22ywy6HuSpF6N6cJC56eQ1/CampusCrew-UI-Design?fullscreen=1&t=n6QahEAS9SYPyqsq-1&preview-route=%2Fteam%2F1)

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

## 3. 빠른 시작

문서 양이 많기 때문에 처음부터 전부 읽지 않는다. 아래 범위까지만 읽으면 바로 시작할 수 있다.

### 공통으로 먼저 읽을 범위

1. [ONBOARDING](./doc/common/ONBOARDING.md) 전체
2. [PRD](./doc/common/PRD.md)의 `1. 문서 개요`부터 `3. 서비스 구조`까지
3. [PLAN](./doc/common/PLAN.md)의 `2. STEP 진행표`와 `3. STEP별 체크리스트`
4. [GIT](./doc/common/GIT.md)의 `2. 운영 방식`부터 `7. Pull Request 규칙`까지

### 포지션별로 먼저 볼 문서

| 포지션 | 범위 |
| --- | --- |
| 프론트엔드 | [FRONTEND_GUIDE](./doc/frontend/FRONTEND_GUIDE.md)의 `1`부터 `STEP 2`까지, [UI_SPEC](./doc/frontend/UI_SPEC.md)의 `2. 공통 화면 원칙`부터 `8.5 TEAM-03 팀 대시보드`까지, [SCREEN_FLOW](./doc/frontend/SCREEN_FLOW.md)의 `2`부터 `5`까지, [API_SPEC](./doc/backend/API_SPEC.md)의 `2. 공통 규칙`부터 `6. 대시보드 API`까지 |
| BE-A | [BE_A_GUIDE](./doc/backend/BE_A_GUIDE.md)의 `1`부터 `STEP 2`까지, [API_SPEC](./doc/backend/API_SPEC.md)의 `2. 공통 규칙`부터 `5. 팀 API`까지, [ERD](./doc/backend/ERD.md)의 `2. ERD`부터 `5. 상태값 규칙`까지, [DEPLOYMENT](./doc/common/DEPLOYMENT.md)의 `3. GCP 무료 체험판 기준`부터 `9. BE-A가 해야 할 일`까지 |
| BE-B | [BE_B_GUIDE](./doc/backend/BE_B_GUIDE.md)의 `1`부터 `STEP 2`까지, [API_SPEC](./doc/backend/API_SPEC.md)의 `2. 공통 규칙`, `6. 대시보드 API`, `7. 공지 API`부터 `10. 회의록 API`까지, [ERD](./doc/backend/ERD.md)의 `2. ERD`부터 `7. 구현 규칙`까지 |
| AI | [AI_GUIDE](./doc/ai/AI_GUIDE.md)의 `1`부터 `STEP 2`까지, [AI_SPEC](./doc/ai/AI_SPEC.md)의 `3. 공통 규칙`부터 `9. 실패 처리 규칙`까지, [API_SPEC](./doc/backend/API_SPEC.md)의 `2. 공통 규칙`과 `10. AI API`, [UI_SPEC](./doc/frontend/UI_SPEC.md)의 `5.1 AI 적용 규칙`, `8.7`, `8.13` |

### STEP이 바뀔 때 다시 볼 문서

- STEP 시작 전: [PLAN](./doc/common/PLAN.md)의 `2. STEP 진행표`와 현재 STEP 체크리스트
- 구현 중 막힐 때: [ONBOARDING](./doc/common/ONBOARDING.md)의 `7. 자주 막히는 지점과 돌아갈 문서`
- 배포 준비 시점: [DEPLOYMENT](./doc/common/DEPLOYMENT.md)와 [GIT](./doc/common/GIT.md)의 운영 방식

## 4. 폴더 구조

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
