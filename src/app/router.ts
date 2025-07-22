import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MemeView from "../views/MemeView.vue";
import AuthMeme from "../views/AuthMeme.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/meme-api", component: MemeView },
  { path: "/auth-api", component: AuthMeme },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
