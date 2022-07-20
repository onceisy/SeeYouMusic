import { defineStore } from 'pinia';


interface Language {
  readonly lang: string,
  readonly label: string
}

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locales: [
      {
        lang: 'en',
        label: 'English'
      },
      {
        lang: 'zhCn',
        label: '中文简体'
      }
    ],
    lang: 'zhCn',
  }),
  getters: {
    getLang(): string {
      return this.lang
    },
    getLocales(): Array<Language> {
      return this.locales
    },
    getLangLabel(): string {
      let lang = '';
      const curr = this.locales.find(locale => locale.lang === this.lang);
      if (curr) {
        lang = curr.label;
      }
      return lang;
    }
  },
  actions: {
    /**
     * @description: 设置系统语言
     * @param {string} lang
     * @return {*}
     */
    setSystemLanguage(lang: string) {
      this.lang = lang;
    }
  },
  // pinia持久化
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
        // paths: ["token", "menus"]
      }
    ]
  }
})