export default {
  nav: {
    home: '主页',
    download: '下载',
  },
  hero: {
    kicker: 'MODERN · OPEN SOURCE · DESKTOP',
    title1: '现代、简洁的',
    title2: '开源桌面国际象棋',
    sub: '所有棋规均在本地 C++ 引擎中实现。支持真人对战、人机对战、AI 对战与复盘，7 种界面语言，运行时即可切换。',
    download: '立即下载',
    repo: '项目仓库 ↗',
  },
  modes: {
    label: '四种游戏模式',
    items: [
      { glyph: '♞', title: '真人对战', desc: '同一设备上双人对弈，本地引擎实时校验每一步走法。' },
      { glyph: '♛', title: '人机对战', desc: '接入你选择的 AI 提供商，与任意模型对弈。' },
      { glyph: '♜', title: 'AI 对战', desc: '两个 AI 自动对弈，可开始 / 暂停 / 继续 / 停止，不计入战绩。' },
      { glyph: '♝', title: '复盘', desc: '回顾历史对局，重温每一步的落子与胜负。' },
    ],
  },
  features: {
    label: '核心特性',
    title: '不止是下棋',
    sub: '从完整的棋规引擎，到资料、战绩与对局历史，Weqi 把桌面国际象棋体验做到干净利落。',
    items: [
      { title: '完整棋规', desc: '合法走法校验、将军、将死、逼和、王车易位、吃过路兵、升变……全部在本地 C++ 引擎中实现。' },
      { title: '玩家资料与 Rating', desc: '追踪你的 Rating 与最佳 Rating，随时编辑玩家名称。' },
      { title: '战绩统计', desc: '对局数、胜率、胜、和、负、最高连胜、当前连胜、最佳 Rating，一目了然。' },
      { title: '对局历史', desc: '浏览过往对局，包含日期、模式、对手、结果与 Rating 变化。' },
      { title: '继续未完成对局', desc: '随时恢复进行中的对局，落子不中断。' },
      { title: 'AI 聊天', desc: 'AI 会对其走法做简短点评，消息语言跟随界面语言。' },
    ],
  },
  stack: {
    label: '技术栈',
    title: '扎实的底层',
    items: [
      { name: 'C++17', role: '核心引擎与棋规' },
      { name: 'Qt 6', role: '桌面界面（Widgets）' },
      { name: 'CMake', role: '构建系统' },
      { name: 'Python 3', role: 'AI 适配器' },
    ],
  },
  build: {
    label: '构建',
    title: '三步运行',
    sub: '依赖：CMake ≥ 3.16、Qt 6（≥ 6.2，含 Widgets）、支持 C++17 的编译器、Python 3。',
    steps: [
      { cmd: 'cmake -S . -B build', note: '配置' },
      { cmd: 'cmake --build build -j', note: '编译' },
      { cmd: './build/Weqi', note: '运行' },
    ],
  },
  data: {
    label: '数据存储',
    title: '隐私优先',
    sub: '设置、资料与对局历史均存储在系统用户数据目录，AI 提供商配置独立存放，API Key 永不写入项目。',
    items: [
      { label: '设置与资料', path: '~/.local/share/Weqi/' },
      { label: 'AI 提供商配置', path: '用户数据目录（独立存储）' },
      { label: '对局历史与存档', path: '用户数据目录' },
    ],
  },
  i18n: {
    label: '国际化',
    title: '7 种语言，运行时切换',
    languages: ['简体中文', '繁體中文', 'English', '日本語', 'Español', 'Українська', '한국어'],
  },
  download: {
    label: '下载',
    title: '选择你的系统',
    sub: 'Weqi v1.0.0 · 支持 Linux 与 Windows，选择适合你的安装包。',
    button: '下载',
    items: [
      { os: 'Linux', format: 'AppImage', note: '所有 Linux 发行版通用' },
      { os: 'Debian / Ubuntu / Mint', format: '.deb', note: 'Debian 系发行版安装包' },
      { os: 'Fedora / RHEL / Rocky', format: '.rpm', note: 'Red Hat 系发行版安装包' },
      { os: 'Windows', format: '便携版', note: '免安装，解压即用' },
      { os: 'Windows', format: '安装包', note: '标准安装程序' },
    ],
  },
  footer: {
    note: '开源 · 现代 · 简洁的桌面国际象棋',
    license: 'Open Source',
  },
}
