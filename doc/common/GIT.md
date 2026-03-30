# CampusCrew Git 규칙

## 1. 문서 목적

이 문서는 CampusCrew 팀의 Git 운영 규칙을 고정한다.  
브랜치 전략, 커밋 메시지, Pull Request, 리뷰, 병합 방식은 이 문서를 기준으로 통일한다.

## 2. 운영 방식

### 명칭
- 이 프로젝트는 `Trunk-Based Development with Short-Lived Feature Branches` 방식을 사용한다.

### 적용 이유
- 팀 규모가 작다.
- 프론트 1명, 백엔드 2명, AI 1명 구조에서는 긴 브랜치 유지 비용이 크다.
- 기능 단위로 짧게 만들고 빠르게 병합하는 방식이 충돌과 문맥 손실을 줄인다.

## 3. 브랜치 구조

| 브랜치 | 용도 | 규칙 |
| --- | --- | --- |
| `main` | 배포 또는 최종 제출 기준 브랜치 | 직접 push 금지 |
| `feat/*` | 새 기능 개발 | 기능 1개 단위로 생성 |
| `fix/*` | 버그 수정 | 버그 1개 단위로 생성 |
| `docs/*` | 문서 수정 | 문서 수정만 포함 |
| `refactor/*` | 리팩터링 | 동작 변경 없이 구조 개선만 포함 |

## 4. 브랜치 이름 규칙

| 작업 유형 | 형식 | 예시 |
| --- | --- | --- |
| 기능 개발 | `feat/<scope>-<name>` | `feat/auth-login`, `feat/team-dashboard` |
| 버그 수정 | `fix/<scope>-<name>` | `fix/task-status-update` |
| 문서 수정 | `docs/<name>` | `docs/api-spec-update` |
| 리팩터링 | `refactor/<scope>-<name>` | `refactor/team-service` |

규칙:
- 브랜치 이름은 소문자와 하이픈만 사용한다.
- 한 브랜치에는 한 가지 목적만 담는다.
- `frontend`, `backend`, `ai`, `docs` 같은 범위를 브랜치 이름에 포함한다.

## 5. 커밋 메시지 규칙

### 형식
```text
type(scope): subject
```

### 사용 가능한 type
- `feat`
- `fix`
- `docs`
- `refactor`
- `test`
- `chore`

### 규칙
- 커밋 메시지는 영어로 작성한다.
- `subject`는 현재형 동사로 시작한다.
- 마침표를 붙이지 않는다.
- 한 커밋에는 하나의 목적만 담는다.

### 예시
- `feat(auth): add login page`
- `feat(team): implement team join api`
- `fix(task): prevent invalid status update`
- `docs(api): update task response schema`

## 6. 커밋 단위 규칙

- 화면 마크업과 API 연동은 가능하면 분리한다.
- 리팩터링과 기능 추가를 한 커밋에 섞지 않는다.
- 포맷팅만 한 경우 별도 커밋으로 분리한다.
- 문서 수정은 코드 변경과 분리한다.

## 7. Pull Request 규칙

### 생성 기준
- 기능 1개가 끝나면 PR을 생성한다.
- 브랜치 작업이 하루를 넘기기 전에 Draft PR을 열어 상태를 공유한다.

### 제목 형식
```text
[TYPE] short summary
```

### 예시
- `[FEAT] add team dashboard`
- `[FIX] correct schedule validation`
- `[DOCS] update onboarding`

### 본문 템플릿
- [pull_request_template.md](../../.github/pull_request_template.md)

## 8. 리뷰 규칙

- `main` 브랜치에는 PR로만 병합한다.
- 자기 PR을 스스로 merge하지 않는다.
- 최소 1명의 팀 리뷰 후 병합한다.
- 백엔드 API 변경은 프론트 담당자가 필드명을 확인한다.
- 프론트 화면 변경은 백엔드 담당자 중 1명이 흐름을 확인한다.
- AI 기능 변경은 입력/출력 형식 문서와 함께 리뷰한다.

## 9. 병합 규칙

- 병합 방식은 `Squash and Merge`로 고정한다.
- 병합 전 브랜치는 `main` 기준으로 최신 상태를 반영한다.
- 충돌이 있으면 브랜치 작성자가 해결한다.
- 병합 후 원격 브랜치는 바로 삭제한다.

## 10. 금지 사항

- `main` 직접 push 금지
- 여러 기능을 한 PR에 묶는 것 금지
- API 스키마 변경 후 문서 미수정 금지
- 실패하는 코드 상태로 병합 금지
- 의미 없는 커밋 메시지 사용 금지
  - 예: `fix`, `update`, `final`, `test`

## 11. 팀 규모 기준 운영 원칙

- 프론트 1명은 화면 기능별로 브랜치를 나눈다.
- 백엔드 2명은 도메인 기준으로 브랜치를 나눈다.
- AI 담당은 별도 브랜치에서만 실험하고, 검증된 결과만 PR로 올린다.
- 문서 수정은 코드 변경과 분리 가능한 경우 `docs/*` 브랜치로 분리한다.

## 12. 시작 체크리스트

- [ ] `main` 보호 규칙 확인
- [ ] 브랜치 이름 규칙 확인
- [ ] 커밋 메시지 형식 확인
- [ ] PR 템플릿 확인
- [ ] 병합 방식 `Squash and Merge` 확인

## 13. 템플릿 파일

- 버그 이슈 템플릿: [bug_report.md](../../.github/ISSUE_TEMPLATE/bug_report.md)
- 작업 이슈 템플릿: [task.md](../../.github/ISSUE_TEMPLATE/task.md)
- PR 템플릿: [pull_request_template.md](../../.github/pull_request_template.md)
