import { createApp } from "vue";
import App from './App.vue';
import { setupStore } from '@store/index';
import { setupRouter } from '@router/index'
import { setupLocale } from "@locale/index";
import 'virtual:windi.css';
import 'element-plus/es/components/message/style/css';
// element暗黑模式 
import 'element-plus/theme-chalk/dark/css-vars.css';

const app = createApp(App);
setupStore(app);
setupLocale(app)
setupRouter(app)

app.mount('#app');
