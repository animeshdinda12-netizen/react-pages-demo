import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this project from /<repo>/, Cloudflare Pages serves it
// from the domain root. Override with the BASE_PATH env var when building for a
// host that serves from the root, e.g. `BASE_PATH=/ npm run build`.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/react-pages-demo/',
  plugins: [react()],
})
