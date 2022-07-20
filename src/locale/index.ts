
import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { en } from './lang/en';
import { zhCn } from './lang/zh-CN'
// 这里语言的命名需要与element-plus语言包的名字一样！
const messages = {
  en,
  zhCn
}

const i18n = createI18n({
  locale: 'zhCn',
  fallbackLocale: 'en',
  messages
})

export function setupLocale(app: App) {
  app.use(i18n)
}

export function setI18nLang(lang: string) {
  i18n.global.locale = lang
}

export default i18n;
