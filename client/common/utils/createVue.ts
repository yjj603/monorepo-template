import "nprogress/nprogress.css";
import "../css/common.css";
import type { ComponentOptions, Plugin } from "vue";
import type { Router } from "vue-router";
import "element-plus/es/components/message/style/css";
export function createVue(
  App: ComponentOptions,
  router: Router,
  ...plugins: Plugin[]
) {
  const app = createApp(App);
  app.use(createPinia());
  app.use(router);
  for (const plugin of plugins) {
    app.use(plugin);
  }
  app.mount("#app");
}
