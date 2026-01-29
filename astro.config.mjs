import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://studioambar.com',
  output: 'static',
  integrations: [
    tailwind(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
