import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./shared/styles/_variables.scss";
import "./shared/styles/main.scss";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
