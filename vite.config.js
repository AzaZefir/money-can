import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/money-can/",
  server: {
    watch: {
      usePolling: true,
    },
  },
  // resolve: {
  //   preserveSymlinks: true
  // }
})
