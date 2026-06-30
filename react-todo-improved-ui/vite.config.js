import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // 1. Import the native path utility

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Maps the '@' symbol directly to your local 'src' directory folder
      '@': path.resolve(__dirname, './src'),
    },
  },
});
