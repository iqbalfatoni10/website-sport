import { createWebHashHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ListView from '../views/ListView.vue';
import TestIdealView from '../views/TestIdealView.vue';
import SportView from '../views/SportView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/list', component: ListView },
  { path: '/testideal', component: TestIdealView },
  { path: '/sport', component: SportView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
