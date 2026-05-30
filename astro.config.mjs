import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { remarkBudoux } from './src/utils/budoux.mjs';

export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [remarkBudoux],
    }),
  ],
  site: 'https://biurumi.ug4v.com',
  output: 'static',
});
