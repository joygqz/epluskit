import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { EpluskitResolver } from 'epluskit'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: 'example',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'packages'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [EpluskitResolver()],
    }),
    Components({
      resolvers: [EpluskitResolver()],
    }),
  ],
})
