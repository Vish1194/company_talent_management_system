import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,

    proxy: {
      '/api': { // Matches requests starting with '/api'
        target: 'http://localhost:5099', // Replace with your API URL
        changeOrigin: true, // Preserves the host header
        rewrite: (path) => path.replace(/^\/api/,''), // Removes '/api' from request path
      },
    },
  }
})
