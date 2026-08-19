<script setup>
// 导航链接
const nav = [
  { label: '主页', to: '/' },
  { label: '下载', to: '/download' },
]
</script>

<template>
  <!-- 顶部导航 -->
  <header class="nav">
    <div class="container nav-inner">
      <router-link to="/" class="brand">
        <span class="brand-mark">♞</span>
        <span class="brand-name">Weqi</span>
      </router-link>
      <nav class="nav-links">
        <router-link v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</router-link>
      </nav>
    </div>
  </header>

  <!-- 页面内容 -->
  <main>
    <router-view />
  </main>

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

.nav-links a.router-link-active {
  color: var(--ink);
}

/* ===== 页脚 ===== */
.footer {
  padding: 56px 0;
  border-top: 1px solid var(--line);
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
@media (max-width: 600px) {
  .nav-links {
    gap: 20px;
  }
}
</style>
