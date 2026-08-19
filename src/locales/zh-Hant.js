export default {
  nav: {
    home: '主頁',
    download: '下載',
  },
  hero: {
    kicker: 'MODERN · OPEN SOURCE · DESKTOP',
    title1: '現代、簡潔的',
    title2: '開源桌面西洋棋',
    sub: '所有棋規均在本地 C++ 引擎中實現。支援真人對戰、人機對戰、AI 對戰與覆盤，7 種介面語言，執行時即可切換。',
    download: '立即下載',
    repo: '專案倉庫 ↗',
  },
  modes: {
    label: '四種遊戲模式',
    items: [
      { glyph: '♞', title: '真人對戰', desc: '同一裝置上雙人對弈，本地引擎即時校驗每一步走法。' },
      { glyph: '♛', title: '人機對戰', desc: '接入你選擇的 AI 供應商，與任意模型對弈。' },
      { glyph: '♜', title: 'AI 對戰', desc: '兩個 AI 自動對弈，可開始 / 暫停 / 繼續 / 停止，不計入戰績。' },
      { glyph: '♝', title: '覆盤', desc: '回顧歷史對局，重溫每一步的落子與勝負。' },
    ],
  },
  features: {
    label: '核心特性',
    title: '不止是下棋',
    sub: '從完整的棋規引擎，到資料、戰績與對局歷史，Weqi 把桌面西洋棋體驗做到乾淨俐落。',
    items: [
      { title: '完整棋規', desc: '合法走法校驗、將軍、將死、逼和、王車易位、吃過路兵、升變……全部在本地 C++ 引擎中實現。' },
      { title: '玩家資料與 Rating', desc: '追蹤你的 Rating 與最佳 Rating，隨時編輯玩家名稱。' },
      { title: '戰績統計', desc: '對局數、勝率、勝、和、負、最高連勝、當前連勝、最佳 Rating，一目了然。' },
      { title: '對局歷史', desc: '瀏覽過往對局，包含日期、模式、對手、結果與 Rating 變化。' },
      { title: '繼續未完成對局', desc: '隨時恢復進行中的對局，落子不中斷。' },
      { title: 'AI 聊天', desc: 'AI 會對其走法做簡短點評，訊息語言跟隨介面語言。' },
    ],
  },
  stack: {
    label: '技術棧',
    title: '紮實的底層',
    items: [
      { name: 'C++17', role: '核心引擎與棋規' },
      { name: 'Qt 6', role: '桌面介面（Widgets）' },
      { name: 'CMake', role: '建置系統' },
      { name: 'Python 3', role: 'AI 介面卡' },
    ],
  },
  build: {
    label: '建置',
    title: '三步執行',
    sub: '依賴：CMake ≥ 3.16、Qt 6（≥ 6.2，含 Widgets）、支援 C++17 的編譯器、Python 3。',
    steps: [
      { cmd: 'cmake -S . -B build', note: '設定' },
      { cmd: 'cmake --build build -j', note: '編譯' },
      { cmd: './build/Weqi', note: '執行' },
    ],
  },
  data: {
    label: '資料儲存',
    title: '隱私優先',
    sub: '設定、資料與對局歷史均儲存在系統使用者資料目錄，AI 供應商設定獨立存放，API Key 永不寫入專案。',
    items: [
      { label: '設定與資料', path: '~/.local/share/Weqi/' },
      { label: 'AI 供應商設定', path: '使用者資料目錄（獨立儲存）' },
      { label: '對局歷史與存檔', path: '使用者資料目錄' },
    ],
  },
  i18n: {
    label: '國際化',
    title: '7 種語言，執行時切換',
    languages: ['简体中文', '繁體中文', 'English', '日本語', 'Español', 'Українська', '한국어'],
  },
  download: {
    label: '下載',
    title: '選擇你的系統',
    sub: 'Weqi v1.0.0 · 支援 Linux 與 Windows，選擇適合你的安裝包。',
    button: '下載',
    items: [
      { os: 'Linux', format: 'AppImage', note: '所有 Linux 發行版通用' },
      { os: 'Debian / Ubuntu / Mint', format: '.deb', note: 'Debian 系發行版安裝包' },
      { os: 'Fedora / RHEL / Rocky', format: '.rpm', note: 'Red Hat 系發行版安裝包' },
      { os: 'Windows', format: '可攜版', note: '免安裝，解壓即用' },
      { os: 'Windows', format: '安裝包', note: '標準安裝程式' },
    ],
  },
  footer: {
    note: '開源 · 現代 · 簡潔的桌面西洋棋',
    license: 'Open Source',
  },
}
