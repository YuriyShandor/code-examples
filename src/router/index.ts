import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

import Page404View from '@/views/Page404View.vue';

import VueExamplesRouterHelper from '@/router/helpers/vueExamplesRouter.helper';
import JavaScriptExamplesRouterHelper from '@/router/helpers/javaScriptExamplesRouter.helper';
import ExternalLibrariesRouterHelper from '@/router/helpers/externalLibrariesRouter.helper';
import UIElementsRouterHelper from '@/router/helpers/UIElementsRouter.helper';
import CodeWarsJavaScriptRouterHelper from '@/router/helpers/codeWarsJavaScriptRouter.helper';
import TypeScriptRouterHelper from '@/router/helpers/typeScriptRouter.helper';
import OtherExamplesRouterHelper from '@/router/helpers/otherExamplesRouter.helper';
import InterviewQuestionsRouterHelper from '@/router/helpers/interviewQuestionsRouter.helper';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home Page',
    component: HomeView,
  },
  VueExamplesRouterHelper.routes(),
  JavaScriptExamplesRouterHelper.routes(),
  ExternalLibrariesRouterHelper.routes(),
  UIElementsRouterHelper.routes(),
  CodeWarsJavaScriptRouterHelper.routes(),
  TypeScriptRouterHelper.routes(),
  OtherExamplesRouterHelper.routes(),
  InterviewQuestionsRouterHelper.routes(),
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
