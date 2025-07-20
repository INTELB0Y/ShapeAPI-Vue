import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => {
    return { dark: false };
  },
  actions: {
    toggleTheme() {
      this.dark = !this.dark;
      localStorage.setItem("theme", JSON.stringify(this.dark));
    },
    initializeTheme() {
      const preferredTheme = localStorage.getItem("theme");
      this.dark = preferredTheme ? JSON.parse(preferredTheme) : false;
    },
  },
});
