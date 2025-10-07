import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/my-project/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),}
  }
})