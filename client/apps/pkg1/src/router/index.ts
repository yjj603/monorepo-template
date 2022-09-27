import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/proxy",
          name: "proxy",
          component: () => import("../views/ProxyView.vue"),
        },
        {
          path: "/test",
          name: "test",
          component: () => import("../views/TestView.vue"),
        },
      ],
    },
    /*  {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },*/
  ],
});

export default router;
