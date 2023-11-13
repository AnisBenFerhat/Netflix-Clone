import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/netflix-clone/',
  publicDir: 'custom-public-folder',
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
      components: path.resolve(process.cwd(), 'src/components'),
      assets: path.resolve(process.cwd(), 'src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
});
