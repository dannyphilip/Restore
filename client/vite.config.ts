import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  server: { 
    port: 3000,
    https: {
      cert: "localhost+2.pem",
      key: "localhost+2-key.pem"
    },
  },
  plugins: [react(),mkcert()],
})
