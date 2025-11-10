import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/anat3004-tool/',
  build: { outDir: 'docs' }
})
