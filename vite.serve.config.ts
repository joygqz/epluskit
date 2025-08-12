import vue from '@vitejs/plugin-vue'
import { EpluskitResolver } from 'epluskit'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'example',
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
