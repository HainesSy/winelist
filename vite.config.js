import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api/cellartracker': {
        target: 'https://www.cellartracker.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cellartracker/, '')
      }
    }
  }
})
