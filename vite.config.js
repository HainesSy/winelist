import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api/service-state': {
        target: 'http://localhost:3001',
        changeOrigin: true
      },
      '/api/consume': {
        target: 'http://localhost:3001',
        changeOrigin: true
      },
      '/api/cellartracker': {
        target: 'https://www.cellartracker.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cellartracker/, '')
      }
    }
  }
})
