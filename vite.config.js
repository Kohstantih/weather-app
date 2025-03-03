import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/weather-app/' : '/',
  resolve: {
    alias: {
      icons: 'public/icons',
      images: 'public/images',
      fonts: 'public/fonts',
    },
  },
});
