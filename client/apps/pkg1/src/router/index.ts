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
          path: "/login",
          name: "login",
          component: () => import("../views/LoginView.vue"),
        },
        {
          path: "/User",
          name: "user",
          component: () => import("../views/UserView.vue"),
        },
      ],
    },
  ],
});

export default router;
