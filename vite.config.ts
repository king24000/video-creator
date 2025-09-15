import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'src/ui',
  build: {
    outDir: path.resolve(__dirname, 'dist/ui'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/ui/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/ui'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'video-creator-cpmy.vercel.app',
        changeOrigin: true,
      },
      '/mcp': {
        target: 'video-creator-cpmy.vercel.app',
        changeOrigin: true,
      },
    },
  },
}); 
