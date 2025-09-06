import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Frontend-only config (no backend proxy)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173 // frontend dev server
  },
  build: {
    outDir: 'dist', // Netlify/Vercel expects frontend build here
    sourcemap: true
  }
})
