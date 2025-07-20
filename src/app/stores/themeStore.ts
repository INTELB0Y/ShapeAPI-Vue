import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => {
    return { dark: false };
  },
  actions: {
    toggleTheme() {
      this.dark = !this.dark;
      // localStorage.setItem("theme", "dark")
    },
    // initializeTheme() {
    //     const preferredTheme = localStorage.getItem("theme")
    //     if (preferredTheme === "dark") {
    //         return this.dark = true
    //     }
    //     this.dark = false
    // }
  },
});
