# CampusCrew 배포 가이드

## 1. 이 문서의 목적

이 문서는 CampusCrew를 어떤 구조로 배포하고, 누가 어디까지 책임지며, 비용을 어떻게 통제할지 명확히 고정하기 위한 문서다.
이 문서는 배포 담당인 `BE-A`가 우선으로 읽고, 최종 점검 단계에서 팀이 함께 확인한다.

## 2. 배포 담당자

- 백엔드 배포와 같은 인스턴스 내 AI 서버 연동은 `BE-A`가 1차 책임자로 맡는다.
- 이유:
  - BE-A는 인증, 공통 응답, 팀 도메인, 환경 변수, 서버 실행 흐름과 가장 가깝다.
  - AI 기능은 외부 공개 API는 백엔드가 받고 내부적으로 같은 인스턴스의 AI 서버 프로세스를 호출하는 구조이므로, 경계 지점을 BE-A가 관리하는 편이 자연스럽다.
  - BE-B는 공지, 일정, 할 일, 회의록, 대시보드 집계 구현 범위가 더 넓어 리소스 CRUD 쪽에 집중하는 편이 자연스럽다.
  - AI 담당은 프롬프트, RAG, 모델 호출 품질과 AI 서버 내부 동작 검수에 집중한다.
- 단, 최종 점검은 전원이 함께 한다.

## 3. GCP 무료 체험판 기준

이 문서는 `2026년 3월 31일` 기준으로 작성한다.

### GCP 무료 체험판 기준

- 신규 Google Cloud 계정은 `USD 300 크레딧`을 `90일` 동안 사용할 수 있는 무료 체험판을 기준으로 잡는다.
- 이 크레딧은 Compute Engine을 포함한 여러 제품에 사용할 수 있다.
- 무료 체험판이 끝나거나 크레딧을 모두 사용하면 해당 프로젝트 리소스가 중지될 수 있으므로, 데모 일정 전에 상태를 확인한다.
- 이번 프로젝트는 이 크레딧으로 Spring 백엔드와 AI 서버 프로세스를 함께 올리는 단일 인스턴스를 운영한다.

### 단일 인스턴스 기준

- 애플리케이션 서버와 AI 서버 프로세스는 Compute Engine `e2-standard-2`를 기본 사양으로 사용한다.
- `e2-standard-2`는 `2 vCPU`, `8GB 메모리` 기준으로 문서화한다.
- 배포는 Docker 기반으로 진행한다.
- 디스크는 최소 필요 용량으로 시작하고, 로그와 인덱스 크기를 보며 늘린다.
- 비용 점검은 Google Cloud Billing 대시보드와 예산 경보를 기준으로 한다.

## 4. 이 프로젝트의 권장 배포 구조

- GCP Compute Engine `e2-standard-2` 인스턴스 1대
  - Spring Boot 백엔드 컨테이너
  - 일반 서비스 API
  - 외부 공개용 `/api/ai/*` 엔드포인트
  - AI 서버 컨테이너
  - 프롬프트 처리
  - 외부 LLM API `gemini-2.5-flash-lite` 호출
  - 팀 문서 Q&A용 RAG 처리
  - pgvector 기반 검색 인덱스 운영
- PostgreSQL + pgvector
  - PostgreSQL 컨테이너로 같은 VM 안에서 함께 운영하는 것을 기본 기준으로 한다.
- 컨테이너 간 내부 통신은 Docker 네트워크를 사용한다.
- NGINX, 별도 로드밸런서, HTTPS 종료 구성은 이번 프로젝트 범위에 포함하지 않는다.
- 자동 배포 파이프라인은 사용하지 않고, 서버 반영은 `git push`와 서버 측 `git pull` 기반 수동 반영으로 진행한다.

## 5. 왜 이 구조를 쓰는가

- 현재 메인 애플리케이션과 AI 기능 책임을 코드와 프로세스 레벨에서 분리하되, 인프라는 단일 VM으로 유지해야 비용과 운영 복잡도를 함께 잡을 수 있다.
- AI 기능은 CRUD보다 CPU, 메모리, 외부 API 대기시간 영향을 더 크게 받으므로 같은 인스턴스 안에서도 별도 프로세스로 분리하는 편이 안정적이다.
- 프론트와 기존 백엔드 계약은 유지하면서 내부 처리만 분리할 수 있다.
- GCP 무료 체험판 `USD 300` 크레딧을 활용하면 `e2-standard-2` 단일 인스턴스로 데모 기간 운영이 가능하다.
- 팀 규모와 프로젝트 성격상 CI/CD를 따로 구축하기보다 STEP 2에서 초기 서버 셋팅을 하고 이후 수동 반영하는 편이 더 단순하다.

## 6. 서버 운영 원칙

### 6.1 단일 인스턴스 운영

- Spring Boot 백엔드와 AI 서버 프로세스는 같은 `e2-standard-2` 인스턴스 안에서 함께 운영한다.
- Spring Boot 백엔드, AI 서버, PostgreSQL은 Docker 컨테이너로 띄운다.
- 외부 공개 API는 계속 백엔드가 받는다.
- AI 요청은 같은 Docker 네트워크 안에서 AI 서버 컨테이너로 전달한다.
- 백엔드 프로세스에는 AI 추론 로직이나 임베딩 처리 로직을 직접 넣지 않는다.
- AI 프로세스는 프롬프트, LLM 호출, RAG 검색을 담당한다.
- 포트는 최소한으로만 연다.
  - `22` SSH
  - 백엔드 공개 포트 1개만 연다.
  - AI 프로세스 포트와 PostgreSQL 포트는 외부에 노출하지 않는다.
- NGINX 리버스 프록시, 로드밸런싱, HTTPS 인증서 설정은 이번 프로젝트에서 다루지 않는다.
- 테스트용 인스턴스를 여러 대 장기간 띄우지 않는다.
- 더 이상 쓰지 않으면 중지하거나 삭제한다.

## 7. 데이터베이스 운영 원칙

- 기본 데이터베이스는 PostgreSQL을 사용한다.
- 팀 문서 Q&A의 벡터 저장과 유사도 검색은 pgvector를 사용한다.
- 로컬 개발용 H2는 배포 환경 기준이 아니다.
- RAG 인덱스와 검색 책임은 같은 인스턴스 안의 AI 서버 프로세스 쪽에 둔다.
- 데이터베이스 포트는 외부에 직접 열지 않고, Docker 네트워크 안의 필요한 컨테이너만 접근하게 한다.

## 8. AI 배포 원칙

- 프론트엔드는 계속 백엔드의 `/api/ai/*`를 호출한다.
- 백엔드는 인증, 팀 권한 검증, 공통 응답 형식을 담당한다.
- AI 서버 프로세스는 프롬프트 조합, LLM 호출, 응답 검증, RAG 검색을 담당한다.
- 외부 LLM 모델은 `gemini-2.5-flash-lite`로 고정한다.
- 백엔드와 AI 서버 프로세스 간 내부 통신은 Docker 네트워크 기준으로 한다.
- 질문 검색은 같은 팀의 문서만 대상으로 한다.
- 검색 결과는 상위 최대 3개만 LLM 입력에 사용한다.
- AI 실패가 일반 CRUD 기능을 막으면 안 된다.
- NGINX, 로드밸런싱, HTTPS는 도입하지 않는다.

## 9. BE-A가 해야 할 일

### STEP 2에서 먼저 할 일

- GCP 인스턴스 기본 생성
- Docker 및 Docker Compose 실행 환경 준비
- 기본 컨테이너 구조와 Docker 네트워크 확인
- 서버에서 `git pull`로 최신 코드를 받을 수 있는 상태 준비

### 배포 전

- Google Cloud 프로젝트와 무료 체험판 크레딧 상태 확인
- Billing 예산 경보와 잔액 확인
- GCP Compute Engine `e2-standard-2` 인스턴스 생성
- 디스크 크기 확인
- 방화벽 규칙 설정
- Docker 및 Docker Compose 실행 환경 준비
- PostgreSQL 및 pgvector 컨테이너 준비
- 백엔드 실행 환경 변수 정리
- AI 서버 프로세스 실행 환경 변수 정리
- Gemini API 키 같은 민감 정보는 환경 변수로만 설정
- Docker 네트워크 이름과 서비스명 기준 내부 호출 주소 정리
- 서버 반영은 별도 파이프라인 없이 `git pull`로 진행한다는 운영 방식 확인

### 배포 중

- Docker Compose 기준으로 컨테이너 실행
- Spring Boot 컨테이너 실행 확인
- AI 서버 컨테이너 실행 확인
- PostgreSQL 연결 확인
- pgvector 확장 활성화 확인
- 백엔드에서 AI 서버 프로세스 내부 호출 확인
- `/api/auth/login` 정상 동작 확인
- `/api/teams` 정상 동작 확인
- `/api/ai/teams/qna` 정상 동작 확인

### 배포 후

- GCP 크레딧 잔액 확인
- VM, 디스크, 네트워크 사용량 확인
- 데모에 필요한 핵심 시나리오 점검
- 팀원에게 접속 주소 공유

## 10. 꼭 확인할 체크리스트

- [ ] GCP 무료 체험판 `USD 300` 크레딧 상태를 확인했다.
- [ ] 단일 인스턴스는 Compute Engine `e2-standard-2`로 준비했다.
- [ ] 같은 인스턴스 안에서 백엔드와 AI 서버 프로세스 역할을 분리했다.
- [ ] Docker 기반 배포 구성을 준비했다.
- [ ] 백엔드, AI 서버, PostgreSQL이 같은 Docker 네트워크로 연결된다.
- [ ] STEP 2에서 서버 초기 셋팅을 시작했다.
- [ ] PostgreSQL + pgvector가 정상 설치되었다.
- [ ] Gemini API 키는 환경 변수로만 관리한다.
- [ ] 데이터베이스 포트는 외부 공개하지 않는다.
- [ ] 백엔드에서 AI 서버 프로세스 내부 호출이 정상 동작한다.
- [ ] 로그인, 팀 조회, AI Q&A까지 최소 시나리오를 점검했다.
- [ ] NGINX, 로드밸런싱, HTTPS를 이번 범위에 넣지 않았다.
- [ ] 자동 배포 파이프라인 없이 `git push`/`git pull` 기반으로 운영한다.

## 11. 참고 링크

- Google Cloud 무료 체험판:
  [Free cloud features and trial offer](https://cloud.google.com/free/docs/gcp-free-tier)
- Google Cloud Free Trial FAQ:
  [Google Cloud Free Trial FAQs](https://cloud.google.com/signup-faqs)
- Compute Engine 머신 타입:
  [General-purpose machine family for Compute Engine](https://cloud.google.com/compute/docs/general-purpose-machines)
- Compute Engine 가격:
  [Compute Engine pricing](https://cloud.google.com/compute/all-pricing)
