// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * `astro dev` answers /about with its own "trailingSlash" 404 page, which doesn't use our layout,
 * so the redirect script there never runs. Redirect to /about/ in the dev server instead, like the
 * host should in production. Files (/favicon.ico) and Vite's and Astro's own paths (/@vite/...,
 * /_image, /node_modules/...) are left alone.
 *
 * Astro puts its trailing-slash check at the front of the dev server's middleware once the server
 * is set up, so this runs last (`enforce: 'post'`) and puts the redirect in front of that.
 */
const trailingSlashInDev = {
  name: 'trailing-slash-in-dev',
  hooks: {
    'astro:config:setup': ({ command, updateConfig }) => {
      if (command !== 'dev') return;
      updateConfig({
        vite: {
          plugins: [{
            name: 'trailing-slash-in-dev',
            enforce: 'post',
            configureServer: (server) => () => {
              server.middlewares.stack.unshift({
                route: '',
                handle: (req, res, next) => {
                  const url = new URL(req.url ?? '/', 'http://localhost');
                  const path = url.pathname;
                  const skip = path.endsWith('/') || /\.[a-z0-9]+$/i.test(path) || /^\/(@|_|node_modules\/|src\/)/.test(path);
                  if ((req.method === 'GET' || req.method === 'HEAD') && !skip) {
                    res.writeHead(301, { Location: `${path}/${url.search}` });
                    res.end();
                    return;
                  }
                  next();
                },
              });
            },
          }],
        },
      });
    },
  },
};

// URLs match the WordPress site (trailing slash, /about/ not /about.html).
export default defineConfig({
  site: 'https://www.thatcocktail.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // On a static host each redirect is a meta-refresh page, so add matching 301s in the
  // host's redirect rules (e.g. _redirects / vercel.json) at launch.
  redirects: {
    // /cocktails/ replaces the old recipe listing.
    '/cocktail-recipes/': '/cocktails/',
    // WordPress had these recipes twice; the copies were removed.
    '/cocktails/bellini-2/': '/cocktails/bellini/',
    '/cocktails/miami-spice-2/': '/cocktails/miami-spice/',
    '/cocktails/bermuda-cocktail/': '/cocktails/bermuda/',
    // WordPress misspelt these as "Cubre Libre".
    '/cocktails/cubre-libre/': '/cocktails/cuba-libre/',
    '/cocktails/white-cubre-libre/': '/cocktails/white-cuba-libre/',
    // ...and this as "Mockail".
    '/cocktails/pornstar-martini-mockail/': '/cocktails/pornstar-martini-mocktail/',
  },
  integrations: [
    trailingSlashInDev,
    sitemap({
      // Subscribe confirmation pages are noindex, so keep them out of the sitemap too.
      filter: (page) => !/\/(almost-done|thank-you)\/$/.test(page),
    }),
  ],
});
