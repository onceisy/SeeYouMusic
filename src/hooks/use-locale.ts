import { useLocaleStore } from '@store/module/locale';
import { computed, watch } from 'vue';
import { setI18nLang } from '@locale/index';

export function useLocale() {
  const mainStore = useLocaleStore();
  const storeLang = computed(() => {
    return mainStore.getLang;
  });

  watch(storeLang, (lang) => {
    setI18nLang(lang);
  }, {
    immediate: true
  });
}
