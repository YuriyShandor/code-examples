import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SuperheroView from '@/views/SuperheroView.vue';
import Page404View from '@/views/Page404View.vue';

import VueExamplesRouterHelper from '@/helpers/router/vueExamplesRouter.helper';
import JavaScriptExamplesRouterHelper from '@/helpers/router/javaScriptExamplesRouter.helper';
import ExternalLibrariesRouterHelper from '@/helpers/router/externalLibrariesRouter.helper';
import UIElementsRouterHelper from '@/helpers/router/UIElementsRouter.helper';
import CodeWarsJavaScriptRouterHelper from '@/helpers/router/codeWarsJavaScriptRouter.helper';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home Page',
    component: HomeView,
  },
  {
    path: '/superhero',
    name: 'Superhero Page',
    component: SuperheroView,
  },
  VueExamplesRouterHelper.routes(),
  JavaScriptExamplesRouterHelper.routes(),
  ExternalLibrariesRouterHelper.routes(),
  UIElementsRouterHelper.routes(),
  CodeWarsJavaScriptRouterHelper.routes(),
  {
    path: '/:pathMatch(.*)*',
    component: Page404View,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
