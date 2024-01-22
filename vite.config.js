import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'assets',
    watch: {},
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        typo: resolve(__dirname, 'typo.html'),
      },
      output: {
        entryFileNames: `js/scripts.js`,
        chunkFileNames: `js/scripts.js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  plugins: [vue()],
});
