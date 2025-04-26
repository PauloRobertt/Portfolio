import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open: true,
  },
  base: process.env.VITE_BASE_PATH || "/Portfolio"
})
