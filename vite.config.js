import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/build/',

  build: {
    outDir: path.resolve(__dirname, '../backend/public/build'),
    emptyOutDir: true,
  },
})