// Server entry used only at build time by scripts/prerender.js.
// Renders a route to static HTML so crawlers and link previews get real content.
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export { seoRoutes, notFoundSeo, SITE_URL } from './configurations/SeoConfig';

export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );

  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
