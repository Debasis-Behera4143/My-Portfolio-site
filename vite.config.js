import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio-site/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: ['chrome100', 'esnext'], // ✅ ensures full top-level await support
    modulePreload: { polyfill: true }, // ✅ helps with preload + dynamic imports
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true, // ✅ explicitly enable top-level await
    },
  },
})
