import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { processExpression } from '@vue/compiler-core';
import { resolveComponent } from 'vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/home/' : './',
  resolve: {
    alias: {
      '@': path.resolve('__dirname', '/src')
    }
  },
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
});
