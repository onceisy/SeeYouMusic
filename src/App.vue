<template>
  <el-config-provider :locale="locale">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
import { computed } from 'vue';
import { useLocaleStore } from '@store/module/locale';
import NavBar from '@/components/NavBar/NavBar.vue';
import { useLocale } from '@hooks/use-locale';

useLocale();
const langs: any  = {
  zhCn,
  en
};
const localeStore = useLocaleStore();
const locale = computed(() => {
  return langs[localeStore.getLang];
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
