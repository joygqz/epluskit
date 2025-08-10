import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import dts from 'unplugin-dts/vite'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      root: 'example',
      plugins: [
        vue(),
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
          'epluskit': resolve(__dirname, 'src'),
        },
      },
    }
  }

  if (mode === 'example') {
    return {
      root: 'example',
      plugins: [
        vue(),
      ],
      base: '/epluskit/',
      build: {
        outDir: '../docs',
        emptyOutDir: true,
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
          'epluskit': resolve(__dirname, 'src'),
        },
      },
    }
  }

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'index',
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
      dts({
        processor: 'vue',
        tsconfigPath: './tsconfig.app.json',
        include: ['env.d.ts', 'src/**/*.{ts,tsx,vue}'],
        bundleTypes: true,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        'epluskit': resolve(__dirname, 'src'),
      },
    },
  }
})
