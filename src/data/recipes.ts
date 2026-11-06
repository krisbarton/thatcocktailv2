export interface Recipe {
  title: string;
  href: string;
  /** Leave out to show the neon placeholder. */
  img?: string;
  /** Optional 300px variant for srcset on square cards. */
  img300?: string;
  width: number;
  height: number;
  alt: string;
  meta: string;
  ingredients?: string;
}

/**
 * The "Most popular" recipes on the homepage and /popular-cocktail-recipes/, most popular first.
 * Each is a file name in src/content/cocktails/ (without .md); the cards come from the recipe itself.
 */
export const popularSlugs = [
  'pornstar-spritz',
  'pornstar-martini',
  'fluffy-duck',
  'passoa-mojito',
  'rhett-butler-cocktail',
  'ocean-drive',
  'kentucky-sunrise',
  'blue-dolphin-martini',
  'cheeky-vimto',
];

/**
 * The spirit hubs, in the order they appear on the homepage and /cocktails-by-spirit/.
 * `match` is tested against each recipe's ingredient names (lowercase, garnishes excluded)
 * to list its recipes on /cocktails-by-spirit/, so new recipes appear there automatically.
 */
export const spirits = [
  { name: 'Vodka', href: '/vodka-cocktails/', eg: 'Espresso Martini, French Martini, Red Russian', match: /vodka/ },
  // Sloe gin is a liqueur, so a Sloe Gin Fizz isn't a gin cocktail.
  { name: 'Gin', href: '/gin-cocktails/', eg: 'Negroni, French 75, Tom Collins', match: /(?<!sloe )\bgin\b/ },
  { name: 'Rum', href: '/rum-cocktails/', eg: 'Daiquiri, Strawberry Mojito, Blue Hawaii', match: /\brum\b|malibu/ },
  { name: 'Tequila', href: '/tequila-cocktails/', eg: 'Margarita, Paloma, Tequila Sunrise', match: /tequila/ },
  { name: 'Champagne', href: '/champagne-cocktails/', eg: 'Bellini, Kir Royale, Bucks Fizz', match: /champagne|prosecco|sparkling wine/, noun: 'champagne or prosecco' },
  { name: 'Amaretto', href: '/amaretto-cocktails/', eg: 'Amaretto Sour, Godfather, Alabama Slammer', match: /amaretto|disaronno/ },
  { name: 'Peach schnapps', href: '/peach-schnapps-cocktails/', eg: 'Sex on the Beach, Woo Woo, Fuzzy Navel', match: /peach schnapps|peach liqueur/ },
  { name: 'Passoa', href: '/passoa-cocktails/', eg: 'Pornstar Martini, Passoa Mojito, Passoa Margarita', match: /passoa/, noun: 'Passoa' },
];

export const ingredientGuides = [
  { title: 'What is gold rum?', href: '/what-is-gold-rum/', img: '/wp-content/uploads/2023/09/what-is-Aged-Gold-Rum.png.webp', width: 500, height: 500, alt: 'Bottle of Bacardi 8 aged gold rum', desc: 'Aged rum with a smoother, richer flavour than white rum.' },
  { title: 'What is peach schnapps?', href: '/what-is-peach-schnapps/', img: '/wp-content/uploads/2021/02/What-is-Peach-Schnapps_-Heres-everything-you-need-to-know-in-our-ultimate-guide.png.webp', width: 500, height: 300, alt: 'Bottle of peach schnapps', desc: 'A sweet peach liqueur and the key to a Sex on the Beach.' },
  { title: 'What is sloe gin?', href: '/what-is-sloe-gin/', img: '/wp-content/uploads/2020/02/what-is-sloe-gin-1.png.webp', width: 500, height: 300, alt: 'Bottle of sloe gin', desc: 'A ruby-red liqueur made by steeping sloe berries in gin.' },
  { title: 'What is blue curacao?', href: '/what-is-blue-curacao/', img: '/wp-content/uploads/2020/01/what-is-blue-curacao-1.png.webp', width: 500, height: 300, alt: 'Blue curacao cocktail garnished with lime and mint', desc: 'An orange liqueur coloured bright blue, as used in a Blue Lagoon.' },
  { title: 'What is triple sec?', href: '/what-is-triple-sec/', img: '/wp-content/uploads/2019/09/cointreau.jpg.webp', width: 500, height: 333, alt: 'Bottle of Cointreau, a premium triple sec', desc: 'A clear orange liqueur used in Margaritas and Cosmopolitans.' },
  { title: 'What is Campari?', href: '/what-is-campari/', img: '/wp-content/uploads/2019/11/campari-1.jpg.webp', width: 500, height: 300, alt: 'Campari cocktail over ice with an orange slice', desc: 'A bitter Italian aperitif best known for the Negroni.' },
];

// The reviews and comparisons on /cocktail-ingredients/alcohol-reviews/.
export const alcoholReviews = [
  { title: 'Best white rum for cocktails', href: '/best-white-rum/', img: '/wp-content/uploads/2022/02/Whats-the-best-white-rum-for-cocktails-1.png.webp', width: 500, height: 300, alt: 'What’s the best white rum for cocktails?', desc: 'White rum mixes with pretty much anything, but which bottle should you buy?' },
  { title: 'Is Smirnoff good vodka?', href: '/is-smirnoff-good-vodka/', img: '/wp-content/uploads/2021/07/is-smirnoff-good-vodka.png.webp', width: 500, height: 300, alt: 'Is Smirnoff good vodka?', desc: 'It’s in every shop and it’s cheap, but is it any good? Our honest review.' },
  { title: 'The best vodka for cocktails', href: '/best-vodka-for-cocktails/', img: '/wp-content/uploads/2020/03/the-best-vodka-for-cocktails.png.webp', width: 500, height: 300, alt: 'The best vodka for cocktails', desc: 'Vodka is a fantastic base for cocktails, but which brand is best?' },
];

// /sours/ duplicates /sour-cocktail-recipes/, and /mule/ duplicates /mule-cocktails/. Only one of each is linked.
export const cocktailTypes = [
  { title: 'Classic cocktails', href: '/classic-cocktails/', img: '/wp-content/uploads/2024/09/Classic-Cocktails.png.webp', alt: 'Bartender measuring spirits with a jigger into cocktail glasses' },
  { title: 'Modern cocktails', href: '/modern-cocktails/', img: '/wp-content/uploads/2024/09/Modern-Cocktails.png.webp', alt: 'Colourful modern cocktails garnished with fresh fruit' },
  { title: 'Seasonal cocktails', href: '/seasonal-cocktails/', img: '/wp-content/uploads/2024/09/Seasonal-Cocktails.png.webp', alt: 'Festive table with a Christmas cake, candles and a decorated tree' },
  { title: 'Non-alcoholic cocktails', href: '/non-alcoholic-cocktails/', img: '/wp-content/uploads/2024/09/Non-Alcoholic-Cocktails.png.webp', alt: 'Friends toasting with non-alcoholic drinks' },
];

export const browseGroups = [
  {
    label: 'By flavour',
    links: [
      { label: 'Sweet cocktails', href: '/sweet-cocktail-recipes/' },
      { label: 'Sour cocktails', href: '/sour-cocktail-recipes/' },
      { label: 'Bitter cocktails', href: '/bitter-cocktail-recipes/' },
      { label: 'Savoury cocktails', href: '/savoury-cocktail-recipes/' },
    ],
  },
  {
    label: 'By season',
    links: [
      { label: 'Winter cocktails', href: '/winter-cocktail-recipes/' },
      { label: 'Summer cocktails', href: '/summer-cocktail-recipes/' },
    ],
  },
  {
    label: 'Cocktail families',
    links: [
      { label: 'Martinis', href: '/martinis/' },
      { label: 'Margaritas', href: '/margarita/' },
      { label: 'Mojitos', href: '/mojitos/' },
      { label: 'Daiquiris', href: '/daiquiris/' },
      { label: 'Mules', href: '/mule-cocktails/' },
    ],
  },
];
