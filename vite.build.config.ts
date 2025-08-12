import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import dts from 'unplugin-dts/vite'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  if (mode === 'dist') {
    return {
      build: {
        lib: {
          formats: ['iife'],
          entry: resolve(__dirname, 'packages/index.ts'),
          name: 'Epluskit',
          fileName: 'index',
        },
        target: 'es2015',
        rollupOptions: {
          external: ['vue', 'element-plus'],
          output: {
            exports: 'named',
            globals: {
              'vue': 'Vue',
              'element-plus': 'ElementPlus',
            },
          },
        },
      },
      plugins: [
        vue(),
      ],
    }
  }
  return {
    build: {
      cssCodeSplit: true,
      lib: {
        entry: resolve(__dirname, 'packages/index.ts'),
      },
      target: 'es2015',
      rollupOptions: {
        external: ['vue', 'element-plus'],
        output: [
          {
            exports: 'named',
            format: 'es',
            entryFileNames: '[name].js',
            preserveModules: true,
            dir: 'es',
            preserveModulesRoot: 'packages',
          },
          {
            exports: 'named',
            format: 'cjs',
            entryFileNames: '[name].js',
            preserveModules: true,
            dir: 'lib',
            preserveModulesRoot: 'packages',
          },
        ],
      },
    },
    plugins: [
      vue(),
      dts({
        processor: 'vue',
        include: ['./packages/**/*.{ts,tsx,vue}'],
        tsconfigPath: './tsconfig.app.json',
        copyDtsFiles: true,
        outDirs: ['es'],
      }),
    ],
  }
})
