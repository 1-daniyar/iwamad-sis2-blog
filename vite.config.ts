import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/iwamad-sis2-blog/',
  build: { outDir: 'docs' },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
