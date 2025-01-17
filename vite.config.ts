/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import typescript from '@rollup/plugin-typescript';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }));
const globals = {
  ...(packageJson?.dependencies || {}),
};

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      typescript({
        target: 'es5',
        rootDir: resolve('src/components'),
        declaration: true,
        declarationDir: resolve('dist'),
        exclude: resolve('node_modules/**'),
        allowSyntheticDefaultImports: true,
      }),
    ],
    base: '/',
    resolve: {
      alias: {
        '@': resolve('src'),
        '@core': resolve('src/core'),
        '@components': resolve('src/components'),
        '@pages': resolve('src/pages'),
        '@constants': resolve('src/constants'),
        '@helpers': resolve('src/helpers'),
        '@hooks': resolve('src/hooks'),
        '@lang': resolve('src/lang'),
      },
    },
    externals: {
      tslib: false,
    },
    // build: {
    //   outDir: './build',
    //   target: ['safari13'],
    // },
    build: {
      outDir: 'dist',
      cssCodeSplit: true,
      lib: {
        entry: {
          app: resolve('src/components/index.tsx'),
        },
        name: 'index',
        fileName: 'index',
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: ['react', 'react-dom', ...Object.keys(globals)],
      },
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
    // optimizeDeps: {
    //   include: [resolve('tailwind.config.js')],
    // },
    test: {
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  };
});
