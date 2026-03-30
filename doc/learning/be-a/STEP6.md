# BE-A STEP 6

## 이 STEP에서 왜 이걸 배우는가

마지막 단계에서 BE-A는 인증과 팀 권한 흐름이 배포 환경에서도 끝까지 유지되는지 확인해야 한다.  
로컬에서는 되던 것이 서버에서는 깨질 수 있기 때문에, 환경 변수와 운영 방식까지 함께 이해해야 한다.

## 이번 프로젝트에서 어디에 쓰는가

- GCP 인스턴스 운영
- Docker 기반 백엔드/AI 서버 연결
- 수동 `git push` / `git pull` 운영
- 배포 환경 인증 점검
- 최종 데모 전 통합 검수

## 먼저 이해할 핵심 개념

- 로컬 환경과 배포 환경 차이
- 환경 변수 관리
- Docker 네트워크 기반 내부 호출
- 수동 배포 흐름
- 실제 운영 환경에서의 보안 점검

## 꼭 알아야 할 용어

- `environment variable`: 환경마다 달라지는 설정값
- `container network`: 컨테이너끼리 내부적으로 통신하는 네트워크
- `manual deploy`: 자동 파이프라인 없이 직접 반영하는 배포 방식
- `health check`: 서비스가 살아 있는지 확인하는 점검
- `rollback awareness`: 문제가 생겼을 때 이전 정상 상태를 의식하는 운영 감각

## 추천 학습 순서

1. [DEPLOYMENT](../../common/DEPLOYMENT.md)를 읽는다.
2. [GIT](../../common/GIT.md)의 운영 방식과 PR 규칙을 다시 읽는다.
3. [BE_A_GUIDE](../../backend/BE_A_GUIDE.md)의 `STEP 6`을 읽는다.
4. [AI_SPEC](../../ai/AI_SPEC.md)의 배포 구조와 내부 호출 흐름을 다시 본다.
5. 로그인부터 팀 진입까지 실제 점검 순서를 적어 본다.

## 먼저 읽을 문서

1. [DEPLOYMENT](../../common/DEPLOYMENT.md)
2. [GIT](../../common/GIT.md)
3. [BE_A_GUIDE](../../backend/BE_A_GUIDE.md)
4. [AI_SPEC](../../ai/AI_SPEC.md)
5. [PLAN](../../common/PLAN.md)

## 외부 자료 링크

- Docker Docs: [Docker Networking Overview](https://docs.docker.com/engine/network/)
- Docker Docs: [Compose Overview](https://docs.docker.com/compose/)
- Spring Boot: [Externalized Configuration](https://docs.spring.io/spring-boot/reference/features/external-config.html)
- Google Cloud: [Compute Engine Overview](https://cloud.google.com/compute/docs/overview)

## 이번 STEP에서 바로 확인할 프로젝트 연결 포인트

- [DEPLOYMENT](../../common/DEPLOYMENT.md)에서 `STEP 2에서 먼저 할 일`과 최종 체크리스트를 다시 본다.
- [GIT](../../common/GIT.md)에서 자동 파이프라인 없이 수동으로 운영한다는 점을 확인한다.
- [AI_SPEC](../../ai/AI_SPEC.md)에서 외부 공개 API와 내부 AI 서버 호출 구조를 다시 본다.
- [PLAN](../../common/PLAN.md)의 `STEP 6` 완료 기준을 확인한다.

## 자주 막히는 지점

- 로컬 설정값을 그대로 서버에 두려고 한다.
- 서버 반영 방식이 수동이라는 점을 문서와 실제 운영에서 다르게 이해한다.
- AI 서버와 백엔드의 내부 주소를 외부 주소처럼 다룬다.
- 인증은 로컬에서만 점검하고 배포 환경에서는 간단히 넘어간다.

## 가볍게 해볼 것

- 배포 환경에서 꼭 필요한 환경 변수 3개만 적어 본다.
- 로그인 -> 팀 진입 -> AI 호출 순서에서 어디를 점검해야 하는지 적어 본다.
- `git push` 뒤 서버에서 어떤 확인을 해야 하는지 한 줄로 적어 본다.

## 핵심 질문

1. 배포 환경에서 인증 흐름이 왜 다시 깨질 수 있는가
2. Docker 네트워크 내부 호출 구조를 설명할 수 있는가
3. 자동 파이프라인 없이 수동 반영할 때 무엇을 꼭 확인해야 하는가

## 이번 주 정리 메모

> [!NOTE]
> 아래 내용을 직접 적으면서 이번 주 이해도를 점검한다.
> - 배포 환경 핵심 점검 순서:
> - 꼭 필요한 환경 변수:
> - `git push` 후 서버에서 확인할 것:

## 체크리스트

- [ ] 배포 환경에서 점검해야 할 인증 흐름을 알고 있다.
- [ ] Docker 네트워크 기반 내부 호출 구조를 이해했다.
- [ ] 자동 파이프라인 없이 수동 반영한다는 점을 알고 있다.
- [ ] 환경 변수와 실제 서버 점검이 왜 중요한지 이해했다.
