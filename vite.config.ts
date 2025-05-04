import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/',
  server: {
    host: true, // 👈 This makes the server accessible externally
    port: 3000,},
    // allowedHosts: ['nrc-frontend.onrender.com']
})
