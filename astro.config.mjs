import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://studioambar.com',
  output: 'static',
  integrations: [
    sitemap(),
    tailwind(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
