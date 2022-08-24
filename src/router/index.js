import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/Homepage/index.vue")
    }
  ]
});

export default router;
