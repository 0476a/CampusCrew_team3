# CampusCrew 배포 가이드

## 1. 이 문서의 목적

이 문서는 CampusCrew를 AWS EC2에 배포할 때 누가 책임지고, 어떤 기준으로 구성하고, 비용과 구조를 어떻게 통제할지 명확히 고정하기 위한 문서다.
이 문서는 배포 담당인 `BE-A`가 우선으로 읽고, 최종 점검 단계에서 팀이 함께 확인한다.

## 2. 배포 담당자

- EC2와 배포는 `BE-A`가 1차 책임자로 맡는다.
- 이유:
  - BE-A는 인증, 공통 응답, 팀 도메인, 환경 변수, 서버 실행 흐름과 더 가깝다.
  - 배포 이슈가 생기면 로그인, 권한, API 공통 설정, 환경 변수 확인이 먼저 필요한 경우가 많다.
  - BE-B는 공지, 일정, 할 일, 회의록, 대시보드 집계 구현 범위가 더 넓어 리소스 CRUD 쪽에 집중하는 편이 자연스럽다.
- 단, 최종 점검은 전원이 함께 한다.

## 3. AWS Free Tier 기준

이 문서는 `2026년 3월 30일` 기준으로 작성한다.

### 새 AWS 계정 기준

- `2025년 7월 15일` 이후 생성한 AWS 계정은 기존 12개월 무료 방식이 아니라 새 Free Tier 플랜 기준을 따른다.
- 새 Free Tier는 기본 `USD 100 크레딧`을 제공하고, 활동 완료에 따라 `최대 USD 100 추가 크레딧`을 더 받을 수 있다.
- Free plan은 계정 생성일로부터 `6개월`이 지나거나 크레딧을 모두 쓰면 종료된다.

### EC2 / 스토리지 관련 기준

- EC2는 Free Tier eligible 인스턴스 중 하나를 선택한다.
- Amazon EBS는 `30GB 스토리지`, `2백만 I/O`, `1GB 스냅샷` 범위를 넘기지 않도록 한다.
- 공인 IPv4는 Free Tier 대상 사용량을 넘기지 않도록 1개 인스턴스만 사용한다.
- 사용량과 크레딧 잔액은 AWS Billing 콘솔에서 수시로 확인한다.

## 4. 이 프로젝트의 권장 배포 구조

- EC2 1대
- Spring Boot 백엔드 1개
- PostgreSQL 1개
- pgvector 사용
- AI 기능은 백엔드 내부 AI API 계층에서 처리
- 실제 생성은 외부 LLM API 호출

## 5. 왜 이 구조를 쓰는가

- 이 프로젝트는 저트래픽, 데모용, 검증용이다.
- 기능이 정상 동작하는지 확인하는 것이 목적이지 상용 운영이 목적이 아니다.
- 서버를 여러 대로 나누면 배포와 디버깅이 더 어려워진다.
- EC2 프리티어 1대로도 현재 범위는 감당 가능하다.

## 6. EC2 인스턴스 운영 원칙

- Free Tier eligible 인스턴스 1대만 사용한다.
- 리전은 팀이 가장 익숙한 리전 하나로 고정한다.
- 보안 그룹은 최소 포트만 연다.
  - `22` SSH
  - `80` HTTP
  - `443` HTTPS를 쓸 경우에만 열기
  - 데이터베이스 포트는 외부에 직접 열지 않는다.
- 같은 계정에 테스트용 인스턴스를 여러 개 띄우지 않는다.
- 인스턴스를 더 이상 쓰지 않으면 중지 또는 삭제한다.

## 7. 데이터베이스 운영 원칙

- 기본 데이터베이스는 PostgreSQL을 사용한다.
- 팀 문서 Q&A의 벡터 저장과 유사도 검색은 pgvector를 사용한다.
- 로컬 개발용 H2는 배포 환경 기준이 아니다.
- PostgreSQL은 애플리케이션과 같은 인스턴스에 함께 두는 단일 서버 구조로 시작한다.

## 8. AI 배포 원칙

- AI는 백엔드 내부 `/api/ai/*` 엔드포인트에서 처리한다.
- RAG는 PostgreSQL와pgvector로 구현한다.
- 질문 검색은 같은 팀의 문서만 대상으로 한다.
- 검색 결과는 상위 최대 3개만 LLM 입력에 사용한다.
- AI 실패가 일반 CRUD 기능을 막으면 안 된다.

## 9. BE-A가 해야 할 일

### 배포 전

- AWS 계정 생성일과 Free Tier 플랜 상태 확인
- Billing 대시보드와 비용 경보 확인
- EC2 인스턴스 생성
- EBS 크기 확인
- 보안 그룹 설정
- PostgreSQL 및 pgvector 설치
- 백엔드 실행 환경 변수 정리
- OpenAI API 키 환경 변수 설정

### 배포 중

- Spring Boot 빌드 파일 업로드
- 애플리케이션 실행
- PostgreSQL 연결 확인
- pgvector 확장 활성화 확인
- `/api/auth/login` 정상 동작 확인
- `/api/teams` 정상 동작 확인
- `/api/ai/teams/qna` 정상 동작 확인

### 배포 후

- 크레딧 잔액 확인
- EC2, EBS, IPv4 사용량 확인
- 데모에 필요한 핵심 시나리오 점검
- 팀원에게 접속 주소 공유

## 10. 꼭 확인할 체크리스트

- [ ] AWS 계정 생성일이 `2025년 7월 15일` 이전인지 이후인지 확인했다.
- [ ] Free Tier 플랜 또는 크레딧 상태를 확인했다.
- [ ] EC2 인스턴스는 1대만 사용한다.
- [ ] EBS 용량은 30GB 이하로 유지한다.
- [ ] PostgreSQL + pgvector가 정상 설치되었다.
- [ ] OpenAI API 키는 환경 변수로만 관리한다.
- [ ] 데이터베이스 포트는 외부 공개하지 않는다.
- [ ] 로그인, 팀 조회, AI Q&A까지 최소 시나리오를 점검했다.

## 11. 참고 링크

- AWS Free Tier 변경 공지:
  [AWS Free Tier now offers $200 in credits and 6-month free plan](https://aws.amazon.com/about-aws/whats-new/2025/07/aws-free-tier-credits-month-free-plan)
- AWS Free Tier FAQ:
  [AWS Free Tier FAQs](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-FAQ.html)
- EC2 Free Tier 사용 추적:
  [Track your Free Tier usage for Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-free-tier-usage.html)
- 추가 크레딧 활동:
  [Earning additional credits](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans-activities.html)
- EBS 가격:
  [Amazon EBS pricing](https://aws.amazon.com/ebs/pricing/)
- 공인 IPv4 Free Tier 공지:
  [AWS Free Tier now includes 750 hours of free Public IPv4 addresses](https://aws.amazon.com/about-aws/whats-new/2024/02/aws-free-tier-750-hours-free-public-ipv4-addresses/)
