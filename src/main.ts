import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import './registerServiceWorker';
import store from './store/index';

createApp(App)
  .use(ElementPlus)
  .use(createPinia())
  .use(router)
  .use(store)
  .mount('#app');
