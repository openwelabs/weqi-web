import { createI18n } from 'vue-i18n'
import zhHans from './locales/zh-Hans.js'
import zhHant from './locales/zh-Hant.js'
import en from './locales/en.js'
import ja from './locales/ja.js'
import es from './locales/es.js'
import uk from './locales/uk.js'
import ko from './locales/ko.js'

// 读取浏览器语言，映射到支持的语言；默认简体中文
function detectLocale() {
  const lang = (navigator.language || 'zh-CN').toLowerCase()
  if (lang.startsWith('zh')) return lang.startsWith('zh-tw') || lang.startsWith('zh-hk') ? 'zh-Hant' : 'zh-Hans'
  if (lang.startsWith('en')) return 'en'
  if (lang.startsWith('ja')) return 'ja'
  if (lang.startsWith('es')) return 'es'
  if (lang.startsWith('uk')) return 'uk'
  if (lang.startsWith('ko')) return 'ko'
  return 'zh-Hans'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'zh-Hans',
  messages: {
    'zh-Hans': zhHans,
    'zh-Hant': zhHant,
    en,
    ja,
    es,
    uk,
    ko,
  },
})

export default i18n
