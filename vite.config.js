import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base './' => works on Vercel/Netlify root AND GitHub Pages sub-paths (e.g. /portfolio/)
export default defineConfig({
  base: './',
  plugins: [react()],
})
