<template>
  <div class="isy-nav-bar">
    <el-row :gutter="20">
      <!-- 左侧功能 -->
      <el-col :span="6">
        <div class="isy-nav-bar__left flex">
          <!-- GitHub -->
          <el-tooltip
            content="GitHub"
            placement="bottom">
            <i-akar-icons-github-fill />
          </el-tooltip>
          <!-- 暗黑主题切换 -->
          <el-tooltip
            :content="isDark ? $t('nav.changeLight') : $t('nav.changeDark')"
            placement="bottom">
            <div class="isy-nav-bar__left--theme flex mx-4">
              <el-switch
                v-model="isDark"
                inline-prompt />
              <i-ph-cloud-moon-bold
                v-if="isDark"
                class="icon-theme ml-2" />
              <i-ph-sun-horizon-bold
                v-else
                class="icon-theme ml-2" />
            </div>
          </el-tooltip>
          <!-- 切换语言 -->
          <el-tooltip
            :content="$t('nav.changLang')"
            placement="bottom">
            <el-dropdown
              trigger="click"
              @command="handleCommand">
              <span class="el-dropdown-link">
                {{ localeStore.getLangLabel }}
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="(locale, index) in locales"
                    :key="index"
                    :command="locale.lang">
                    {{ locale.label }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-tooltip>
        </div>
      </el-col>
      <!-- 中间主体 -->
      <el-col :span="12">
        <div class="isy-nav-bar__middle">
          <el-menu
            router
            :default-active="active"
            class="el-menu-demo"
            mode="horizontal">
            <el-menu-item
              v-for="(menu, index) in menus"
              :key="index"
              :index="menu.route">
              {{ $t(menu.label) }}
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="isy-nav-bar__search flex">
          <el-input
            v-model="keywords"
            size="large"
            class="mr-6"
            :placeholder="$t('nav.search')"
            :prefix-icon="Search" />
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { isDark } from '@/utils/dark';
import { Search, ArrowDown } from '@element-plus/icons-vue';
import { useLocaleStore } from '@store/module/locale';
import { ElMessage } from 'element-plus';

const keywords = ref('');
const isDarkMode = ref(false);

isDarkMode.value = Boolean(isDark);

const toggleLang = (lang: string) => {
  localeStore.setSystemLanguage(lang);
};

const localeStore = useLocaleStore();
const locales = computed(() => localeStore.getLocales);
const handleCommand = (command: string) => {
  toggleLang(command);
  ElMessage.success(`${localeStore.getLangLabel}`);
};

const menus = reactive([
  {
    label: 'nav.home',
    route: '/home'
  },
  {
    label: 'nav.explore',
    route: '/explore'
  },
  {
    label: 'nav.library',
    route: '/library'
  },
]);
const route = useRoute();
const active = computed(() => route.path);
</script>

<style lang="scss" scoped>
@include b(nav-bar) {
  height: 60px;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
  @include e(search) {
    height: 100%;
    align-items: center;
    .el-input {
      width: 240px;
    }
    .el-avatar {
      cursor: pointer;
    }
  }
  @include e(left) {
    height: 60px;
    align-items: center;
    @include m(theme) {
      // width: 72px;
      align-items: center;
    }
  }
  @include e(middle) {
    .el-menu {
      justify-content: center;
    }
  }
}
</style>
