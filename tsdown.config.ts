import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: ['./packages/index.ts'],
    fromVite: true,
    dts: {
      vue: true,
    },
  },
])
