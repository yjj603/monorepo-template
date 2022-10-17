import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import * as path from "path";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { visualizer } from "rollup-plugin-visualizer";

const cwd = process.cwd();
export default defineConfig({
  build: {
    target: ["esnext"],
  },
  resolve: {
    alias: {
      "~": path.join(cwd, "./components"),
      $: path.join(cwd, "./common"),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ["vue", "vue-router", "pinia"],
      dirs: [path.join(cwd, "./common/utils"), path.join(cwd, "./api")],
      eslintrc: {
        enabled: true,
        filepath: "./config/.eslintrc-auto-import.json",
      },
      dts: path.join(cwd, "./config/auto-import.d.ts"),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: [path.join(cwd, "./components")],
      dts: path.join(cwd, "./config/components.d.ts"),
    }),
    chunkSplitPlugin({
      customSplitting: {
        "vue-vendor": ["vue", "vue-router", "pinia"],
      },
    }),
    visualizer({
      open: false,
      emitFile: false,
    }),
  ],
});
