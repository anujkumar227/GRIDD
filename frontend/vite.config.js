import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allows any Cloudflare tunnel subdomain or all external hosts
    allowedHosts: ['.trycloudflare.com']
  }
})