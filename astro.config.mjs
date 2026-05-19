import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When deploying to GitHub Pages preview, SITE is set to the GH Pages URL.
// The base path is derived from the URL path component (e.g. /factional-blog).
// On norskluftvern.com there is no sub-path so base stays '/'.
const site = process.env.SITE ?? 'https://norskluftvern.no';
const base = new URL(site).pathname.replace(/\/$/, '') || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
