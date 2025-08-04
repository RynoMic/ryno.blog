// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:4321',
	integrations: [mdx(), sitemap()],
	output: 'server',
  	adapter: netlify(),
});