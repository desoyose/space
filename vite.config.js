import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
 
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        destination: 'destination.html',
        crew: 'crew.html',
        tech: 'technology.html'
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  
});
