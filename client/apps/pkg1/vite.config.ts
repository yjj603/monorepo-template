import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { mergeConfig } from "vite";
import viteConfigCommon from "../../config/vite.config,common";

export default mergeConfig(
  defineConfig({
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  }),
  viteConfigCommon
);
