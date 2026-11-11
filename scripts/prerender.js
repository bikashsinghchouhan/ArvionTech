// Build step: turn every route into a static HTML file so search engines and
// social previews (WhatsApp, LinkedIn, Facebook) see real content and meta tags.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
//
// Output (served by public/.htaccess on Hostinger):
//   /                      -> dist/index.html
//   /about                 -> dist/about.html
//   /services/payroll      -> dist/services/payroll.html
//   unknown URLs           -> dist/404.html (HTTP 404)
// It also writes dist/sitemap.xml from the routes in SeoConfig.js.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, seoRoutes, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--seo-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--seo--> or <!--app-html--> placeholder');
}

const APP_START = '<div class="app-container"';

async function renderPage(url) {
  const html = await render(url);
  const split = html.indexOf(APP_START);
  if (split === -1) throw new Error(`Rendered HTML for ${url} has no app container`);

  // React 19 emits <title>, <meta>, <link> and image preloads before the app markup.
  const head = html.slice(0, split);
  const body = html.slice(split);
  if (!head.includes('<title>')) throw new Error(`No <title> rendered for ${url}`);

  return template
    .replace('<!--seo-->', () => head)
    .replace('<!--app-html-->', () => body);
}

function outFile(route) {
  if (route === '/') return path.join(dist, 'index.html');
  return path.join(dist, `${route.slice(1)}.html`);
}

for (const { path: route } of seoRoutes) {
  const file = outFile(route);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, await renderPage(route));
  console.log(`prerendered ${route.padEnd(36)} -> ${path.relative(root, file)}`);
}

// 404 page (any unmatched path renders NotFoundPage with noindex)
fs.writeFileSync(path.join(dist, '404.html'), await renderPage('/__not-found__'));
console.log(`prerendered ${'(404)'.padEnd(36)} -> dist/404.html`);

// Sitemap
const today = new Date().toISOString().slice(0, 10);
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  seoRoutes
    .filter((r) => !r.noindex)
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n    <priority>${r.priority || '0.5'}</priority>\n  </url>`
    )
    .join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log(`wrote dist/sitemap.xml (${seoRoutes.length} URLs)`);

fs.rmSync(ssrDir, { recursive: true, force: true });
