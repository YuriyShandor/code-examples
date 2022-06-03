import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SuperheroView from '@/views/SuperheroView.vue';
import Page404View from '@/views/Page404View.vue';

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
  {
    path: '/:pathMatch(.*)*',
    component: Page404View,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
