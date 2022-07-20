// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import i18n  from '@locale/index';
const { t } = i18n.global;
const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: t('route.home'),
      icon: ''
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/explore',
    name: 'Explore',
    meta: {
      title: t('route.explore'),
      icon: ''
    },
    component: () => import('@/views/explore/index.vue')
  },
  {
    path: '/library',
    name: 'Library',
    meta: {
      title: t('route.library'),
      icon: ''
    },
    component: () => import('@/views/library/index.vue')
  },
];

export default commonRoutes;
