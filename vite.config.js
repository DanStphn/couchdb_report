// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: '.',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: '/src/main.jsx',
    },
  },
})
