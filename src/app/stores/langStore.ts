import { defineStore } from "pinia";

export const useLangStore = defineStore("langStore", {
  state: () => {
    return {
      useEn: false,
      text: {
        main: {
          h1: "Бесплатный учебный REST API для работы с JSON",
          p: "Практика работы с JSON для вашего frontend’а",
        },
      },
    };
  },
  actions: {
    changeLang() {
      this.useEn = !this.useEn;
      if (this.useEn) {
        this.text.main.h1 = "Free educational REST API for working with JSON";
        this.text.main.p = "Practice working with JSON for your frontend";
      } else {
        this.text.main.h1 = "Бесплатный учебный REST API для работы с JSON";
        this.text.main.p = "Практика работы с JSON для вашего frontend’а";
      }
    },
  },
});
