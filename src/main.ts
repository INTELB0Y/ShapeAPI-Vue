import { createApp } from "vue";
import "./style.css";
import App from "./app/App.vue";
import "./shared/styles/_variables.scss";
import "./shared/styles/main.scss";
import { createPinia } from "pinia";
import { createConfig } from "shape-rq";

const env = import.meta.env;

createConfig({
  APIs: {
    PrivateAPI: {
      baseUrl: env.VITE__BASE_URL,
    },
    MemeAPI: {
      baseUrl: env.VITE__MEME_URL,
    },
  },
  lang: "ru",
  debug: true,
});

import router from "./app/router.ts";

createApp(App).use(router).use(createPinia()).mount("#app");
