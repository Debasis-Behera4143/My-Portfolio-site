import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio-site/', // ✅ Static base path for GitHub Pages
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined // Optional: can help reduce large chunk warnings
      }
    }
  }
})