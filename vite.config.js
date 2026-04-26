import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  // Base path for GitHub Pages project site at /eryudmaowo.github.io/.
  // Override via VITE_BASE env (e.g. set to "/" if using a custom domain).
  base: process.env.VITE_BASE ?? (mode === 'production' ? '/eryudmaowo.github.io/' : '/'),
}))
