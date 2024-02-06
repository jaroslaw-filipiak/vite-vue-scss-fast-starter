import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        websites: resolve(__dirname, 'websites.html'),
        contact: resolve(__dirname, 'kontakt.html'),
      },
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  // plugins: [vue()],
});
