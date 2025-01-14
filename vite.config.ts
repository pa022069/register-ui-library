/// <reference types="vitest" />
import { defineConfig, splitVendorChunkPlugin, loadEnv } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      // splitVendorChunkPlugin(),
      // 視覺化 chunk 分析
      // visualizer({
      //   template: 'treemap',
      //   open: true,
      //   gzipSize: true,
      //   brotliSize: true,
      //   filename: 'analyse.html',
      // }),
    ],
    base: '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@core': resolve(__dirname, 'src/core'),
        '@components': resolve(__dirname, 'src/components'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@constants': resolve(__dirname, 'src/constants'),
        '@helpers': resolve(__dirname, 'src/helpers'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@lang': resolve(__dirname, 'src/lang'),
      },
    },
    build: {
      outDir: './build',
      target: ['safari13'],
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      // port: 5174,
    },
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY),
    },
    optimizeDeps: {
      include: [resolve(__dirname, 'tailwind.config.js')],
    },
    test: {
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  };
});
