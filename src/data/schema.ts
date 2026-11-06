import { SITE, kris, media } from './site';

const u = (path = '/') => new URL(path, SITE.url).href;

export const ids = {
  org: u('/#organization'),
  logo: u('/#logo'),
  website: u('/#website'),
  kris: u('/#kris-barton'),
};

export const organization = {
  '@type': 'Organization',
  '@id': ids.org,
  name: SITE.name,
  alternateName: SITE.alternateName,
  url: u('/'),
  logo: {
    '@type': 'ImageObject',
    '@id': ids.logo,
    url: u(SITE.logo),
    width: 192,
    height: 192,
    caption: SITE.name,
  },
  image: { '@id': ids.logo },
  description: 'Quick and easy cocktail recipes you can make at home.',
  foundingDate: SITE.founded,
  founder: { '@id': ids.kris },
  email: SITE.email,
  telephone: SITE.phoneIntl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    postalCode: SITE.address.postcode,
    addressCountry: SITE.address.countryCode,
  },
  sameAs: [SITE.social.facebook, SITE.social.x, SITE.social.instagram, SITE.social.youtube],
};

export const website = {
  '@type': 'WebSite',
  '@id': ids.website,
  url: u('/'),
  name: SITE.name,
  alternateName: SITE.alternateName,
  description: 'Quick and easy cocktail recipes you can make at home.',
  inLanguage: 'en-GB',
  publisher: { '@id': ids.org },
};

export const krisPerson = {
  '@type': 'Person',
  '@id': ids.kris,
  name: kris.name,
  jobTitle: kris.role,
  description: 'Has been making cocktails for more than 20 years and founded ThatCocktail in 2019.',
  image: media(kris.photo),
  url: u(kris.url),
  worksFor: { '@id': ids.org },
};

/** A WebPage node for any page. */
export const webPage = (opts: { path: string; name: string; description: string; type?: string; extra?: Record<string, unknown> }) => ({
  '@type': opts.type ?? 'WebPage',
  '@id': u(`${opts.path}#webpage`),
  url: u(opts.path),
  name: opts.name,
  description: opts.description,
  inLanguage: 'en-GB',
  isPartOf: { '@id': ids.website },
  ...opts.extra,
});

export const breadcrumbs = (path: string, items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  '@id': u(`${path}#breadcrumb`),
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: u(item.path),
  })),
});

/** A YouTube video on a page, with its chapters as key moments. */
export interface Video {
  /** The YouTube video id. */
  id: string;
  title: string;
  description: string;
  /** When it went up on YouTube, as an ISO date, e.g. 2026-11-02T15:21:28Z. */
  uploaded: string;
  /** Length in seconds. */
  seconds: number;
  /** Chapters from the YouTube description, with the recipe each one makes. */
  chapters?: { at: number; name: string; href?: string }[];
}

export const videoObject = (path: string, v: Video) => {
  const watch = (t?: number) => `https://www.youtube.com/watch?v=${v.id}${t ? `&t=${t}s` : ''}`;
  const chapters = v.chapters ?? [];
  return {
    '@type': 'VideoObject',
    '@id': u(`${path}#video`),
    name: v.title,
    description: v.description,
    thumbnailUrl: ['maxresdefault', 'sddefault', 'hqdefault'].map((q) => `https://i.ytimg.com/vi/${v.id}/${q}.jpg`),
    uploadDate: v.uploaded,
    duration: `PT${Math.floor(v.seconds / 60)}M${v.seconds % 60}S`,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    url: watch(),
    publisher: { '@id': ids.org },
    ...(chapters.length && {
      hasPart: chapters.map((c, i) => ({
        '@type': 'Clip',
        name: c.name,
        startOffset: c.at,
        endOffset: chapters[i + 1]?.at ?? v.seconds,
        url: watch(c.at),
      })),
    }),
  };
};
