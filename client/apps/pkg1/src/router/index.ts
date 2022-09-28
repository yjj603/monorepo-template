import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
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
  ],
});

export default router;
