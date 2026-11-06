export const SITE = {
  name: 'ThatCocktail',
  alternateName: 'That Cocktail',
  url: 'https://www.thatcocktail.com',
  tagline: 'Quick & easy cocktails you can make at home, since 2019.',
  email: 'kris@thatcocktail.com',
  phone: '0333 090 2052',
  phoneHref: 'tel:+443330902052',
  phoneIntl: '+44 333 090 2052',
  address: {
    street: 'St James Business Centre',
    locality: 'Warrington',
    postcode: 'WA4 6PS',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  social: {
    facebook: 'https://www.facebook.com/thatcocktail',
    x: 'https://x.com/thatcocktail',
    instagram: 'https://instagram.com/that.cocktail',
    youtube: 'https://www.youtube.com/channel/UCjw1Bq2q6ceYTzBvR3C-54A',
  },
  twitterHandle: '@thatcocktail',
  gaId: 'G-MWDNX3YWR8',
  // The subscribe form posts here, exactly as the WordPress theme's public.js does.
  subscribeEndpoint: 'https://tentacle.krisbarton.com/api/v1/projects/thatcocktail/subscribers',
  logo: '/images/tc-pwa-logo.png',
  founded: '2019',
} as const;

/**
 * Recipe photos still live in the WordPress uploads folder. Every image path goes through
 * this helper, so once /wp-content/uploads/ is copied into public/ (or a CDN), change
 * MEDIA_BASE to '' and every page picks it up.
 */
export const MEDIA_BASE = 'https://www.thatcocktail.com';
export const media = (path: string) => `${MEDIA_BASE}${path}`;

/**
 * Google AdSense, on recipe pages only (see AdSlot). Both boxes use the WordPress theme's
 * in-article unit; give the rail its own display unit in AdSense and change `rail` to that slot.
 * public/ads.txt must list the same publisher ID.
 */
export const adsense = {
  client: 'ca-pub-3993142678243410',
  slots: { rail: '8107379716', recipe: '8107379716' },
} as const;

/** The free guide offered in the signup section and the homepage popup. */
export const freeGuide = {
  cover: '/wp-content/uploads/2026/09/make-perfect-cocktails-at-home-cover.png.webp',
  coverAlt: 'Cover of the free guide Make Perfect Cocktails at Home',
  title: 'Learn how to make perfect cocktails at home',
  text: 'Download our FREE guide to making perfect cocktails in the comfort of your own home. You’ll never want to pay for expensive cocktails at a bar again!',
};

// Kept short with no dropdowns, per "Trim the sitewide mega-nav" in reverse-silo-seo-plan.md.
export const mainNav = [
  { label: 'Cocktail Recipes', href: '/cocktails/' },
  { label: 'Cocktails by Spirit', href: '/cocktails-by-spirit/' },
  { label: 'Types of Cocktails', href: '/types-of-cocktails/' },
  { label: 'Flavour Profiles', href: '/flavour-profiles/' },
  { label: 'Ingredients', href: '/cocktail-ingredients/' },
  // Equipment (/cocktail-equipment/) goes back in once that section is migrated.
];

export const footerNav = [
  {
    title: 'Recipes',
    links: [
      { label: 'Latest cocktail recipes', href: '/cocktails/' },
      { label: 'Popular cocktail recipes', href: '/popular-cocktail-recipes/' },
      { label: 'Cocktail recipes by spirit', href: '/cocktails-by-spirit/' },
      { label: 'Cocktail recipe collections', href: '/cocktail-recipe-collections/' },
      { label: 'Cocktail recipe search', href: '/search/' },
    ],
  },
  {
    title: 'Ingredients',
    links: [
      { label: 'Cocktail ingredients', href: '/cocktail-ingredients/' },
      { label: 'Alcohol information', href: '/cocktail-ingredients/alcohol-information/' },
      { label: 'Alcohol reviews', href: '/cocktail-ingredients/alcohol-reviews/' },
    ],
  },
  {
    title: 'Recommendations',
    links: [
      { label: 'Alcohol', href: '/alcohol-recommendations/' },
      { label: 'Cocktail equipment', href: '/cocktail-equipment/' },
      { label: 'Cocktail glassware', href: '/cocktail-glassware/' },
      { label: 'Cocktail gifts', href: '/cocktail-gifts/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about/' },
      { label: 'Articles', href: '/articles/' },
      { label: 'Contact us', href: '/contact-us/' },
      { label: 'Privacy policy', href: '/privacy-policy/' },
      { label: 'Cookie policy', href: '/cookie-policy/' },
      { label: 'Terms of service', href: '/terms-of-service/' },
    ],
  },
];

// Figures from the live site. the old /cocktail-recipes/ page claimed "100+", so make the two agree.
export const stats = [
  { icon: 'glass', value: '1K+', label: 'cocktail recipes' },
  { icon: 'mail', value: '10K+', label: 'email subscribers' },
  { icon: 'people', value: '32K+', label: 'monthly visitors' },
  { icon: 'globe', value: '161', label: 'countries served' },
] as const;

export const kris = {
  name: 'Kris Barton',
  role: 'Founder',
  url: '/author/kris/',
  photo: '/wp-content/uploads/2020/11/kris-cocktail-300x300.jpg',
  photoLarge: '/wp-content/uploads/2020/11/kris-cocktail.jpg',
  favourite: { name: 'Moscow Mule', href: '/cocktails/moscow-mule/' },
  runnerUp: { name: 'French Martini', href: '/cocktails/french-martini/' },
  facts: ['20+ years making cocktails', 'Founded in 2019', 'Based in Warrington, UK', 'Favourite cocktail: Moscow Mule'],
};
