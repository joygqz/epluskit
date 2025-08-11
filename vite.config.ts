import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import dts from 'unplugin-dts/vite'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ command, mode }) => {
  const defaultConfig = {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'packages'),
        // 'epluskit': resolve(__dirname, 'packages'),
      },
    },
    plugins: [
      vue(),
    ],
  }

  if (command === 'serve') {
    return {
      ...defaultConfig,
      root: 'example',
    }
  }

  if (mode === 'example') {
    return {
      ...defaultConfig,
      root: 'example',
      base: '/epluskit/',
      build: {
        outDir: '../docs',
        emptyOutDir: true,
      },
    }
  }

  return {
    ...defaultConfig,
    build: {
      lib: {
        entry: resolve(__dirname, 'packages/index.ts'),
        name: 'index',
        fileName: 'index',
      },
      target: 'es2015',
      rollupOptions: {
        external: ['vue', 'element-plus'],
        input: ['packages/index.ts'],
        output: [
          {
            entryFileNames: '[name].js',
            preserveModules: true,
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
      }),
    ],
  }
})
