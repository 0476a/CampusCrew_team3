# CampusCrew 화면 흐름도

## 1. 문서 목적

이 문서는 CampusCrew의 화면 이동 흐름을 한눈에 이해하기 위한 시각 자료다.  
상세 입력값과 UI 규칙은 `UI_SPEC.md`를 기준으로 하고, 이 문서는 "어떤 화면에서 어떤 화면으로 이동하는가"를 빠르게 파악하는 용도로 사용한다.

## 2. 전체 화면 흐름

```mermaid
flowchart LR
    A["로그인 /login"] -->|"회원가입 이동"| B["회원가입 /signup"]
    B -->|"가입 완료"| A
    A -->|"로그인 성공"| C["내 팀 목록 /teams"]

    C -->|"팀 생성"| D["팀 생성 /teams/new"]
    D -->|"생성 성공"| E["팀 대시보드 /teams/:teamId"]

    C -->|"팀 카드 선택"| E
    C -->|"참여 코드 입력 후 참여 성공"| E

    E -->|"공지 메뉴"| F["공지 목록 /teams/:teamId/notices"]
    E -->|"일정 메뉴"| G["일정 목록 /teams/:teamId/schedules"]
    E -->|"할 일 메뉴"| H["할 일 목록 /teams/:teamId/tasks"]
    E -->|"회의록 메뉴"| I["회의록 목록 /teams/:teamId/notes"]
    E -->|"팀 정보 메뉴"| J["팀 정보 /teams/:teamId/settings"]

    F -->|"새로 만들기"| K["공지 작성/수정 /teams/:teamId/notices/new"]
    G -->|"새로 만들기"| L["일정 작성/수정 /teams/:teamId/schedules/new"]
    H -->|"새로 만들기"| M["할 일 작성/수정 /teams/:teamId/tasks/new"]
    I -->|"새로 만들기"| N["회의록 작성/수정 /teams/:teamId/notes/new"]

    K -->|"저장 성공"| F
    L -->|"저장 성공"| G
    M -->|"저장 성공"| H
    N -->|"저장 성공"| I

    F -->|"사이드바"| E
    G -->|"사이드바"| E
    H -->|"사이드바"| E
    I -->|"사이드바"| E
    J -->|"사이드바"| E
```

## 3. 인증 흐름

```mermaid
flowchart TD
    A["로그인 화면"] -->|"회원가입 필요"| B["회원가입 화면"]
    B -->|"가입 완료"| A
    A -->|"로그인 성공"| C["Access Token 저장"]
    C --> D["내 팀 목록"]

    D -->|"보호 라우트 접근"| E["팀 내부 화면"]
    E -->|"토큰 없음/만료"| A
```

## 4. 팀 내부 네비게이션 흐름

```mermaid
flowchart TB
    A["팀 대시보드"] --> B["공지 목록"]
    A --> C["일정 목록"]
    A --> D["할 일 목록"]
    A --> E["회의록 목록"]
    A --> F["팀 정보"]

    B --> A
    C --> A
    D --> A
    E --> A
    F --> A
```

## 5. 작성 화면 공통 흐름

```mermaid
flowchart LR
    A["목록 화면"] -->|"새로 만들기"| B["작성 화면"]
    B -->|"유효성 검사 실패"| B
    B -->|"저장 성공"| A
    B -->|"저장 실패"| C["에러 메시지 표시"]
    C --> B
```

## 6. AI 기능이 붙는 화면

```mermaid
flowchart LR
    A["공지 작성/수정"] -->|"톤 변환"| B["AI 문서 톤 변환"]
    C["팀 대시보드"] -->|"진행 상황 요약"| D["AI 진행 상황 요약"]
    C -->|"팀 문서 Q&A"| E["AI 팀 문서 Q&A"]
    F["회의록 작성/수정"] -->|"액션 아이템 추출"| G["AI 액션 아이템 추출"]
```