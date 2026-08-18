<script setup>
// 导航链接
const nav = [
  { label: '特性', href: '#features' },
  { label: '技术栈', href: '#stack' },
  { label: '构建', href: '#build' },
  { label: '数据', href: '#data' },
]

// 四种游戏模式
const modes = [
  {
    glyph: '♞',
    title: '真人对战',
    desc: '同一设备上双人对弈，本地引擎实时校验每一步走法。',
  },
  {
    glyph: '♛',
    title: '人机对战',
    desc: '接入你选择的 AI 提供商，与任意模型对弈。',
  },
  {
    glyph: '♜',
    title: 'AI 对战',
    desc: '两个 AI 自动对弈，可开始 / 暂停 / 继续 / 停止，不计入战绩。',
  },
  {
    glyph: '♝',
    title: '复盘',
    desc: '回顾历史对局，重温每一步的落子与胜负。',
  },
]

// 核心特性
const features = [
  {
    title: '完整棋规',
    desc: '合法走法校验、将军、将死、逼和、王车易位、吃过路兵、升变……全部在本地 C++ 引擎中实现。',
  },
  {
    title: '玩家资料与 Rating',
    desc: '追踪你的 Rating 与最佳 Rating，随时编辑玩家名称。',
  },
  {
    title: '战绩统计',
    desc: '对局数、胜率、胜、和、负、最高连胜、当前连胜、最佳 Rating，一目了然。',
  },
  {
    title: '对局历史',
    desc: '浏览过往对局，包含日期、模式、对手、结果与 Rating 变化。',
  },
  {
    title: '继续未完成对局',
    desc: '随时恢复进行中的对局，落子不中断。',
  },
  {
    title: 'AI 聊天',
    desc: 'AI 会对其走法做简短点评，消息语言跟随界面语言。',
  },
]

// 技术栈
const stack = [
  { name: 'C++17', role: '核心引擎与棋规' },
  { name: 'Qt 6', role: '桌面界面（Widgets）' },
  { name: 'CMake', role: '构建系统' },
  { name: 'Python 3', role: 'AI 适配器' },
]

// 构建步骤
const buildSteps = [
  { cmd: 'cmake -S . -B build', note: '配置' },
  { cmd: 'cmake --build build -j', note: '编译' },
  { cmd: './build/Weqi', note: '运行' },
]

// 数据存储
const dataItems = [
  { label: '设置与资料', path: '~/.local/share/Weqi/' },
  { label: 'AI 提供商配置', path: '用户数据目录（独立存储）' },
  { label: '对局历史与存档', path: '用户数据目录' },
]

// 国际化语言
const languages = ['简体中文', '繁體中文', 'English', '日本語', 'Español', 'Українська', '한국어']
</script>

<template>
  <!-- 顶部导航 -->
  <header class="nav">
    <div class="container nav-inner">
      <a href="#top" class="brand">
        <span class="brand-mark">♞</span>
        <span class="brand-name">Weqi</span>
      </a>
      <nav class="nav-links">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="top" class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <p class="hero-kicker">MODERN · OPEN SOURCE · DESKTOP</p>
        <h1 class="hero-title">
          现代、简洁的<br />
          开源桌面国际象棋
        </h1>
        <p class="hero-sub">
          所有棋规均在本地 C++ 引擎中实现。支持真人对战、人机对战、AI 对战与复盘，
          7 种界面语言，运行时即可切换。
        </p>
        <div class="hero-actions">
          <a href="#build" class="btn btn-solid">开始构建</a>
          <a href="#features" class="btn btn-ghost">了解特性</a>
          <a href="https://github.com/openwelabs/weqi" target="_blank" rel="noopener" class="btn btn-ghost">项目仓库 ↗</a>
        </div>
      </div>

      <!-- 棋盘装饰：纯 CSS 渲染的棋盘格 -->
      <div class="hero-board" aria-hidden="true">
        <div class="board-grid">
          <div v-for="i in 64" :key="i" class="cell" :class="{ dark: (Math.floor((i - 1) / 8) + (i - 1)) % 2 === 0 }"></div>
        </div>
        <div class="board-piece">♞</div>
        <div class="board-coord">a1</div>
      </div>
    </div>
  </section>

  <!-- 游戏模式 -->
  <section class="modes">
    <div class="container">
      <p class="section-label">四种游戏模式</p>
      <div class="modes-grid">
        <div v-for="m in modes" :key="m.title" class="mode-card">
          <span class="mode-glyph">{{ m.glyph }}</span>
          <h3 class="mode-title">{{ m.title }}</h3>
          <p class="mode-desc">{{ m.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 特性 -->
  <section id="features" class="features">
    <div class="container">
      <p class="section-label">核心特性</p>
      <h2 class="section-title">不止是下棋</h2>
      <p class="section-sub">从完整的棋规引擎，到资料、战绩与对局历史，Weqi 把桌面国际象棋体验做到干净利落。</p>

      <div class="features-grid">
        <div v-for="(f, i) in features" :key="f.title" class="feature-item">
          <span class="feature-index">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="feature-title">{{ f.title }}</h3>
          <p class="feature-desc">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 技术栈 -->
  <section id="stack" class="stack">
    <div class="container">
      <p class="section-label">技术栈</p>
      <h2 class="section-title">扎实的底层</h2>
      <div class="stack-list">
        <div v-for="s in stack" :key="s.name" class="stack-row">
          <span class="stack-name">{{ s.name }}</span>
          <span class="stack-role">{{ s.role }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 构建 -->
  <section id="build" class="build">
    <div class="container">
      <p class="section-label">构建</p>
      <h2 class="section-title">三步运行</h2>
      <p class="section-sub">依赖：CMake ≥ 3.16、Qt 6（≥ 6.2，含 Widgets）、支持 C++17 的编译器、Python 3。</p>

      <div class="build-steps">
        <div v-for="(b, i) in buildSteps" :key="b.cmd" class="build-step">
          <span class="build-num">{{ i + 1 }}</span>
          <code class="build-cmd">{{ b.cmd }}</code>
          <span class="build-note">{{ b.note }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 数据存储 -->
  <section id="data" class="data">
    <div class="container">
      <p class="section-label">数据存储</p>
      <h2 class="section-title">隐私优先</h2>
      <p class="section-sub">设置、资料与对局历史均存储在系统用户数据目录，AI 提供商配置独立存放，API Key 永不写入项目。</p>

      <div class="data-list">
        <div v-for="d in dataItems" :key="d.label" class="data-row">
          <span class="data-label">{{ d.label }}</span>
          <code class="data-path">{{ d.path }}</code>
        </div>
      </div>
    </div>
  </section>

  <!-- 国际化 -->
  <section class="i18n">
    <div class="container">
      <p class="section-label">国际化</p>
      <h2 class="section-title">7 种语言，运行时切换</h2>
      <div class="lang-chips">
        <span v-for="lang in languages" :key="lang" class="lang-chip">{{ lang }}</span>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="brand-mark">♞</span>
        <span>Weqi</span>
      </div>
      <p class="footer-note">开源 · 现代 · 简洁的桌面国际象棋</p>
      <p class="footer-license">Open Source</p>
    </div>
  </footer>
</template>

<style scoped>
/* ===== 导航 ===== */
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(17, 17, 17, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 650;
  letter-spacing: -0.01em;
}

.brand-mark {
  font-size: 1.3rem;
  color: var(--felt);
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  font-size: 0.92rem;
  color: var(--muted);
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--ink);
}

/* ===== Hero ===== */
.hero {
  padding: 96px 0 88px;
  border-bottom: 1px solid var(--line);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 64px;
  align-items: center;
}

.hero-kicker {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  color: var(--felt);
  margin-bottom: 1.4rem;
}

.hero-title {
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.12;
  margin-bottom: 1.4rem;
}

.hero-sub {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 46ch;
  margin-bottom: 2.2rem;
}

.hero-actions {
  display: flex;
  gap: 14px;
}

.btn {
  display: inline-block;
  padding: 12px 26px;
  font-size: 0.95rem;
  font-weight: 550;
  border-radius: 2px;
  transition: all 0.2s;
}

.btn-solid {
  background: var(--ink);
  color: var(--paper);
}

.btn-solid:hover {
  background: var(--felt);
  color: var(--paper);
}

.btn-ghost {
  border: 1px solid var(--ink);
  color: var(--ink);
}

.btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
}

/* 棋盘装饰 */
.hero-board {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1;
  margin: 0 auto;
  border: 1px solid var(--ink);
  box-shadow: 12px 12px 0 0 var(--felt-soft);
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 100%;
  height: 100%;
}

.cell {
  background: var(--ink);
}

.cell.dark {
  background: var(--paper);
}

.board-piece {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: var(--felt);
  line-height: 1;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.4);
}

.board-coord {
  position: absolute;
  bottom: -30px;
  right: 0;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--muted);
}

/* ===== 游戏模式 ===== */
.modes {
  padding: 88px 0;
  border-bottom: 1px solid var(--line);
}

.modes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
}

.mode-card {
  border: 1px solid var(--line);
  padding: 28px 24px;
  transition: border-color 0.2s, transform 0.2s;
}

.mode-card:hover {
  border-color: var(--ink);
  transform: translateY(-4px);
}

.mode-glyph {
  display: block;
  font-size: 2.2rem;
  color: var(--felt);
  margin-bottom: 1rem;
}

.mode-title {
  font-size: 1.1rem;
  font-weight: 650;
  margin-bottom: 0.5rem;
}

.mode-desc {
  font-size: 0.92rem;
  color: var(--muted);
}

/* ===== 特性 ===== */
.features {
  padding: 88px 0;
  border-bottom: 1px solid var(--line);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 32px;
  margin-top: 48px;
}

.feature-item {
  border-top: 1px solid var(--line);
  padding-top: 20px;
}

.feature-index {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--felt);
}

.feature-title {
  font-size: 1.08rem;
  font-weight: 650;
  margin: 0.6rem 0 0.4rem;
}

.feature-desc {
  font-size: 0.92rem;
  color: var(--muted);
}

/* ===== 技术栈 ===== */
.stack {
  padding: 88px 0;
  border-bottom: 1px solid var(--line);
}

.stack-list {
  margin-top: 40px;
  border-top: 1px solid var(--line);
}

.stack-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
}

.stack-name {
  font-family: var(--font-mono);
  font-size: 1.15rem;
  font-weight: 600;
}

.stack-role {
  color: var(--muted);
  font-size: 0.95rem;
}

/* ===== 构建 ===== */
.build {
  padding: 88px 0;
  border-bottom: 1px solid var(--line);
}

.build-steps {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.build-step {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #1a1a19;
  color: var(--ink);
  border: 1px solid var(--line);
  padding: 18px 24px;
  border-radius: 2px;
}

.build-num {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--felt);
  border: 1px solid var(--felt);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.build-cmd {
  font-family: var(--font-mono);
  font-size: 1rem;
  flex: 1;
}

.build-note {
  font-size: 0.85rem;
  color: var(--muted);
}

/* ===== 数据存储 ===== */
.data {
  padding: 88px 0;
  border-bottom: 1px solid var(--line);
}

.data-list {
  margin-top: 40px;
  border-top: 1px solid var(--line);
}

.data-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
}

.data-label {
  font-weight: 600;
}

.data-path {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--felt);
}

/* ===== 国际化 ===== */
.i18n {
  padding: 88px 0;
  border-bottom: 1px solid var(--line);
}

.lang-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.lang-chip {
  border: 1px solid var(--line);
  padding: 8px 18px;
  font-size: 0.92rem;
  border-radius: 999px;
  transition: border-color 0.2s, color 0.2s;
}

.lang-chip:hover {
  border-color: var(--felt);
  color: var(--felt);
}

/* ===== 页脚 ===== */
.footer {
  padding: 56px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 650;
}

.footer-brand .brand-mark {
  font-size: 1.2rem;
}

.footer-note {
  color: var(--muted);
  font-size: 0.9rem;
}

.footer-license {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--felt);
  letter-spacing: 0.1em;
}

/* ===== 响应式 ===== */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero-board {
    max-width: 300px;
  }

  .modes-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  .modes-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .stack-row,
  .data-row {
    flex-direction: column;
    gap: 6px;
  }

  .build-step {
    flex-wrap: wrap;
  }
}
</style>
