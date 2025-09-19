import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for GitHub Pages (project site) + React
export default defineConfig({
  // Use relative URLs so assets work at https://<user>.github.io/website1
  // and also work if you later add a custom domain.
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',   // default, but explicit is fine
    sourcemap: true,  // optional: helps debugging if something breaks
  },
});
