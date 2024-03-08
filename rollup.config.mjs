// eslint-disable-next-line import/named
import { defineConfig } from 'rollup'

export default defineConfig({
  plugins: [],
  input: 'dist/esm/index.js',
  output: [
    {
      file: 'dist/plugin.js',
      format: 'iife',
      name: 'capacitorIosSilentNotifications',
      globals: {
        '@capacitor/core': 'capacitorExports',
        tslib: 'tslib',
      },
      sourcemap: !!process.env.SOURCE_MAP,
      inlineDynamicImports: true,
    },
    {
      file: 'dist/plugin.cjs.js',
      format: 'cjs',
      sourcemap: !!process.env.SOURCE_MAP,
      inlineDynamicImports: true,
    },
  ],
  external: ['@capacitor/core', 'tslib'],
})
