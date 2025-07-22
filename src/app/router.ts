import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MemeView from "../views/MemeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/meme-api", component: MemeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
