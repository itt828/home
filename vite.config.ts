import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { processExpression } from "@vue/compiler-core";
import { resolveComponent } from "vue";

export default defineConfig({
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/@/styles/common.scss";`,
        charset: false,
      },
    },
  },
  plugins: [vue()],
});
