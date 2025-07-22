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
        memes: {
          h1: "Мемы",
          apiNotAvailable: "API недоступно",
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
        this.text.memes.h1 = "Memes";
        this.text.memes.apiNotAvailable = "API is not available";
      } else {
        this.text.main.h1 = "Бесплатный учебный REST API для работы с JSON";
        this.text.main.p = "Практика работы с JSON для вашего frontend’а";
        this.text.memes.h1 = "Мемы";
        this.text.memes.apiNotAvailable = "API недоступно";
      }
    },
  },
});
