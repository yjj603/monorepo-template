import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "nprogress/nprogress.css";
import type { ComponentOptions } from "vue";
import type { Router } from "vue-router";

export function createVue(
  App: ComponentOptions,
  router: Router,
  ...use: any[]
) {
  const app = createApp(App);
  app.use(ElementPlus);
  app.use(createPinia());
  app.use(router);
  for (const useElement of use) {
    app.use(useElement);
  }
  app.mount("#app");
}
