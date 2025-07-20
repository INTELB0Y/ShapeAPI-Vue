import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../components/HomeView.vue";
import MemeView from "../components/MemeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/meme-api", component: MemeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
