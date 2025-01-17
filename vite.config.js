var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import typescript from '@rollup/plugin-typescript';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
var packageJson = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }));
var globals = __assign({}, ((packageJson === null || packageJson === void 0 ? void 0 : packageJson.dependencies) || {}));
function resolve(str) {
    return path.resolve(__dirname, str);
}
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd(), '');
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
                external: __spreadArray(['react', 'react-dom'], Object.keys(globals), true),
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
