import { createRouter, createWebHashHistory } from "vue-router";
import HomePageVue from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePageVue,
    name: "home",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
