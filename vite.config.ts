import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { EpluskitResolver } from 'epluskit'
import dts from 'unplugin-dts/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ command, mode }) => {
  const defaultConfig = {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'packages'),
      },
    },
    plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver(), EpluskitResolver()],
      }),
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

  // dist 打包
  if (mode === 'dist') {
    return {
      ...defaultConfig,
      build: {
        lib: {
          formats: ['es'],
          entry: resolve(__dirname, 'packages/index.ts'),
          name: 'index',
          fileName: 'index',
        },
        target: 'es2015',
        rollupOptions: {
          external: ['vue', 'element-plus'],
          output: {
            exports: 'named',
          },
        },
      },
      plugins: [
        vue(),
      ],
    }
  }

  return {
    ...defaultConfig,
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
        ],
      },
    },
    plugins: [
      vue(),
      dts({
        processor: 'vue',
        include: ['./packages/**/*.{ts,tsx,vue}'],
        exclude: ['**/*.css'],
        tsconfigPath: './tsconfig.app.json',
        copyDtsFiles: true,
        outDirs: ['es'],
      }),
    ],
  }
})
