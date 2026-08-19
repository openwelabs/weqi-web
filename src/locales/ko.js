export default {
  nav: {
    home: '홈',
    download: '다운로드',
  },
  hero: {
    kicker: 'MODERN · OPEN SOURCE · DESKTOP',
    title1: '모던하고 깔끔한',
    title2: '오픈소스 데스크톱 체스',
    sub: '모든 체스 규칙은 로컬 C++ 엔진에 구현되어 있습니다. 인간 대 인간, 인간 대 AI, AI 대 AI, 복기 모드를 지원하며, 7개 언어의 인터페이스를 실행 중에 전환할 수 있습니다.',
    download: '지금 다운로드',
    repo: '저장소 ↗',
  },
  modes: {
    label: '네 가지 게임 모드',
    items: [
      { glyph: '♞', title: '인간 대 인간', desc: '같은 기기에서 두 명이 대국하며, 로컬 엔진이 매 수를 실시간으로 검증합니다.' },
      { glyph: '♛', title: '인간 대 AI', desc: '선택한 AI 제공업체에 연결하여 어떤 모델과도 대국할 수 있습니다.' },
      { glyph: '♜', title: 'AI 대 AI', desc: '두 AI가 자동으로 대국합니다 — 시작 / 일시정지 / 재개 / 중지, 전적에는 포함되지 않습니다.' },
      { glyph: '♝', title: '복기', desc: '지난 대국을 되돌아보며 매 수와 승패를 다시 확인할 수 있습니다.' },
    ],
  },
  features: {
    label: '핵심 기능',
    title: '체스 그 이상',
    sub: '완전한 규칙 엔진부터 프로필, 전적, 대국 기록까지, Weqi는 데스크톱 체스 경험을 깔끔하게 완성합니다.',
    items: [
      { title: '완전한 규칙', desc: '합법 수 검증, 체크, 체크메이트, 스테일메이트, 캐슬링, 앙파상, 프로모션… 모두 로컬 C++ 엔진에 구현되어 있습니다.' },
      { title: '플레이어 프로필과 레이팅', desc: '레이팅과 최고 레이팅을 추적하고, 플레이어 이름을 언제든지 편집할 수 있습니다.' },
      { title: '대국 통계', desc: '대국 수, 승률, 승, 무, 패, 최고 연승, 현재 연승, 최고 레이팅을 한눈에 확인할 수 있습니다.' },
      { title: '대국 기록', desc: '날짜, 모드, 상대, 결과, 레이팅 변동이 포함된 지난 대국을 탐색할 수 있습니다.' },
      { title: '미완료 대국 재개', desc: '진행 중인 대국을 언제든지 재개할 수 있으며, 수가 끊기지 않습니다.' },
      { title: 'AI 채팅', desc: 'AI가 자신의 수에 대해 짧은 코멘트를 남깁니다. 메시지는 인터페이스 언어를 따릅니다.' },
    ],
  },
  stack: {
    label: '기술 스택',
    title: '탄탄한 기반',
    items: [
      { name: 'C++17', role: '핵심 엔진과 규칙' },
      { name: 'Qt 6', role: '데스크톱 UI (Widgets)' },
      { name: 'CMake', role: '빌드 시스템' },
      { name: 'Python 3', role: 'AI 어댑터' },
    ],
  },
  build: {
    label: '빌드',
    title: '세 단계로 실행',
    sub: '의존성: CMake ≥ 3.16, Qt 6 (≥ 6.2, Widgets 포함), C++17 지원 컴파일러, Python 3.',
    steps: [
      { cmd: 'cmake -S . -B build', note: '설정' },
      { cmd: 'cmake --build build -j', note: '컴파일' },
      { cmd: './build/Weqi', note: '실행' },
    ],
  },
  data: {
    label: '데이터 저장',
    title: '프라이버시 우선',
    sub: '설정, 프로필, 대국 기록은 시스템 사용자 데이터 디렉터리에 저장됩니다. AI 제공업체 설정은 별도로 저장되며, API 키는 프로젝트에 절대 기록되지 않습니다.',
    items: [
      { label: '설정과 프로필', path: '~/.local/share/Weqi/' },
      { label: 'AI 제공업체 설정', path: '사용자 데이터 디렉터리 (별도)' },
      { label: '대국 기록과 저장', path: '사용자 데이터 디렉터리' },
    ],
  },
  i18n: {
    label: '국제화',
    title: '7개 언어, 실행 중 전환',
    languages: ['简体中文', '繁體中文', 'English', '日本語', 'Español', 'Українська', '한국어'],
  },
  download: {
    label: '다운로드',
    title: '시스템 선택',
    sub: 'Weqi v1.0.0 · Linux와 Windows를 지원합니다. 자신에게 맞는 패키지를 선택하세요.',
    button: '다운로드',
    items: [
      { os: 'Linux', format: 'AppImage', note: '모든 Linux 배포판에서 작동' },
      { os: 'Debian / Ubuntu / Mint', format: '.deb', note: 'Debian 계열 배포판' },
      { os: 'Fedora / RHEL / Rocky', format: '.rpm', note: 'Red Hat 계열 배포판' },
      { os: 'Windows', format: '휴대용', note: '설치 불필요, 압축 풀고 실행' },
      { os: 'Windows', format: '설치 프로그램', note: '표준 설치 프로그램' },
    ],
  },
  footer: {
    note: '오픈소스 · 모던 · 깔끔한 데스크톱 체스',
    license: 'Open Source',
  },
}
