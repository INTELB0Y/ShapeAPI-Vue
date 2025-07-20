import { defineStore } from "pinia";

export const useLangStore = defineStore("langStore", {
  state: () => {
    return { lang: "en" };
  },
  actions: {
    setLang(lang: string) {
      this.lang = lang;
    },
  },
});
