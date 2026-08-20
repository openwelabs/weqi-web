<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 导航链接
const nav = [
  { label: () => t('nav.home'), to: '/' },
  { label: () => t('nav.download'), to: '/download' },
  { label: () => t('nav.addModel'), to: '/add-model' },
]

// 支持的语言
const languages = [
  { code: 'zh-Hans', label: '简体中文' },
  { code: 'zh-Hant', label: '繁體中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'es', label: 'Español' },
  { code: 'uk', label: 'Українська' },
  { code: 'ko', label: '한국어' },
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
      <div class="nav-right">
        <nav class="nav-links">
          <router-link v-for="item in nav" :key="item.to" :to="item.to">{{ item.label() }}</router-link>
        </nav>
        <div class="lang-switch">
          <select v-model="locale" class="lang-select" aria-label="Language">
            <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.label }}</option>
          </select>
        </div>
      </div>
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
      <p class="footer-note">{{ t('footer.note') }}</p>
      <p class="footer-license">{{ t('footer.license') }}</p>
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

.nav-right {
  display: flex;
  align-items: center;
  gap: 28px;
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

/* ===== 语言切换 ===== */
.lang-switch {
  position: relative;
}

.lang-select {
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: 1px solid var(--line);
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  padding: 6px 30px 6px 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.lang-select:hover {
  border-color: var(--felt);
}

.lang-select:focus {
  outline: none;
  border-color: var(--felt);
}

.lang-switch::after {
  content: '▾';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: var(--muted);
  pointer-events: none;
}

.lang-select option {
  background: var(--paper);
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

  .nav-right {
    gap: 16px;
  }
}
</style>
