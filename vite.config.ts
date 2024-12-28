import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/attendance-Tracker2",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
