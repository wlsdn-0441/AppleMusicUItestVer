# Apple Music 스타일 UI

Apple Music의 홈 화면을 모방한 React 웹 애플리케이션입니다.

## 기술 스택

- React 18
- Vite
- JavaScript
- Vanilla CSS (Tailwind 미사용)

## 주요 기능

- **헤더**: 홈 타이틀과 프로필 아이콘
- **추천곡 섹션**: 최신 발매 / 나만을 위한 추천 탭 전환
- **최근 재생 섹션**: 가로 스크롤 카드 레이아웃
- **플레이어 바**: 현재 재생 중인 음악 정보와 컨트롤
- **네비게이션**: 하단 5개 메뉴 탭

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프리뷰
npm run preview
```

## 프로젝트 구조

```
MusicApp/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── MusicCard.jsx
│   │   ├── MusicCard.css
│   │   ├── RecommendedSection.jsx
│   │   ├── RecommendedSection.css
│   │   ├── RecentlyPlayed.jsx
│   │   ├── RecentlyPlayed.css
│   │   ├── Player.jsx
│   │   ├── Player.css
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Git 브랜치

- 메인 브랜치: `main`

## 스타일링

- 다크 테마 기반
- Apple Music 디자인 시스템 참고
- 애니메이션 및 트랜지션 효과
- 모바일 최적화
- 가로 스크롤 지원
