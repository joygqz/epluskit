import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import dts from 'unplugin-dts/vite'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  if (mode === 'dist') {
    return {
      resolve: {
        alias: {
          '@': resolve(__dirname, 'packages'),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'packages/index.ts'),
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
      ],
    }
  }

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'packages'),
      },
    },
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
