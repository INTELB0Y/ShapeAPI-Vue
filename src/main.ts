import { createApp } from "vue";
import "./style.css";
import App from "./app/App.vue";
import "./shared/styles/_variables.scss";
import "./shared/styles/main.scss";
import { createPinia } from "pinia";
import router from "./app/router.ts";

createApp(App).use(router).use(createPinia()).mount("#app");
