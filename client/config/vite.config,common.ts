import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import * as path from "path";

const cwd = process.cwd();
export default function (dir) {
  return defineConfig({
    resolve: {
      alias: {
        "@": path.join(dir, "./src"),
        "~": path.join(cwd, "./components"),
        $: path.join(cwd, "./common"),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
        imports: ["vue", "vue-router"],
        dirs: ["./apps", "./libs"],
        eslintrc: {
          enabled: true,
          filepath: "./config/.eslintrc-auto-import.json",
        },
        dts: "./auto-import.d.ts",
      }),
    ],
  });
}
