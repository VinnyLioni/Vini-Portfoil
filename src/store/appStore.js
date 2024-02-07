import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    isExpanded: false,
  }),
  actions: {
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
    },
  },
});
