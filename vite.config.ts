import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path';

const pathSrc = path.resolve(__dirname, "./src");
export default defineConfig({
  base: '/woof-landing/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/styles/main.scss";` },
    },
  },
})
