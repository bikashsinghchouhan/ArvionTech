import React from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, getSeoForPath } from '../configurations/SeoConfig';

// Renders <title>, meta, canonical and JSON-LD for the current route.
// React 19 hoists <title>, <meta> and <link> into <head> automatically.
const Seo = () => {
  const { pathname } = useLocation();
  const seo = getSeoForPath(pathname);
  const url = SITE_URL + seo.path;
  const image = SITE_URL + (seo.image || DEFAULT_OG_IMAGE);

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      {!seo.noindex && <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={image} />

      {seo.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }}
        />
      )}
    </>
  );
};

export default Seo;
