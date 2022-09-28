import { defineConfig } from "vite";
import { mergeConfig } from "vite";
import viteConfigCommon from "../../config/vite.config,common";

export default mergeConfig(defineConfig({}), viteConfigCommon);
