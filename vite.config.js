import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MyClass/',
  // proxy:'http://localhost:8000',
  plugins: [react()],
 server:{
  host:true
 }
 
})
