/**
 * The brands on /alcohol-recommendations/, grouped by kind of drink.
 *
 * `href` is the UK link (mostly Amazon UK). `us` is the alternative shown to visitors in the US,
 * as the WordPress theme did by looking up the visitor's country; a different product or picture
 * for the US goes in `us` too. Products without `href` show without a Buy button: their WordPress
 * links were missing or pointed at /affiliates/ pages that were never finished.
 *
 * `html` is trusted copy, written here, rendered with set:html.
 */
export interface Product {
  name: string;
  /** Path in the WordPress uploads, through media(). */
  img: string;
  href?: string;
  /** Replaces "Our top pick", e.g. "Vanilla" in a list of flavoured vodkas. */
  label?: string;
  us?: { href: string; name?: string; img?: string };
}

export interface DrinkType {
  id: string;
  name: string;
  html?: string[];
  /** An "Editor's note" box under the copy. */
  note?: string;
  products: Product[];
  /** Copy that comes after the products. */
  after?: string[];
}

export interface DrinkGroup {
  id: string;
  name: string;
  lede: string;
  types: DrinkType[];
}

const U = '/wp-content/uploads';

export const alcoholGroups: DrinkGroup[] = [
  {
    id: 'spirits',
    name: 'Spirits',
    lede: 'The base of almost every cocktail: vodka, rum, gin, whiskey, tequila and brandy.',
    types: [
      {
        id: 'vodka',
        name: 'Vodka',
        html: ['For vodka, we recommend Smirnoff.'],
        products: [
          { name: 'Smirnoff Vodka', img: `${U}/2019/06/smirnoff.jpg`, href: 'https://amzn.to/3buMXzt', us: { href: 'https://shrsl.com/3imos' } },
        ],
        after: [
          'FYI: we took a deep-dive into comparing different brands of vodka and Smirnoff came out on top. <a href="/best-vodka-for-cocktails/">You can read our vodka comparison here</a>.',
          'We also took a deep-dive into Smirnoff as a brand to answer the question: <a href="/is-smirnoff-good-vodka/">is Smirnoff good vodka?</a>',
        ],
      },
      {
        id: 'flavoured-vodka',
        name: 'Flavoured vodka',
        html: [
          'But of course, it doesn’t just end there with vodka! There are many different flavours of vodka you can try. Here are our recommendations.',
          'First up is vanilla vodka, a key ingredient in one of the most popular cocktails right now: <a href="/cocktails/pornstar-martini/">the Pornstar Martini</a>. If you haven’t tried one of these bad boys yet, then I recommend you do. Like, now.',
        ],
        products: [
          { label: 'Vanilla', name: 'Absolut Vanilla', img: `${U}/2019/06/absolut_vanilla.jpg`, href: 'https://amzn.to/2nbHlXQ' },
          { label: 'Cherry', name: 'Absolut Cherry', img: `${U}/2020/06/cherry-vodka.jpg`, href: 'https://amzn.to/2UjjJxt' },
          { label: 'Mango', name: 'Absolut Mango', img: `${U}/2020/05/mango-vodka-1.jpg`, href: 'https://amzn.to/2TiISbl' },
          { label: 'Mandarin', name: 'Absolut Mandarin', img: `${U}/2020/05/mandarin-vodka-1.jpg`, href: 'https://www.awin1.com/cread.php?awinmid=400&awinaffid=682197&clickref=absolutmandarin-thewhiskeyexchange&ued=https%3A%2F%2Fwww.thewhiskyexchange.com%2Fp%2F5064%2Fabsolut-mandarin-vodka' },
          { label: 'Lime', name: 'Absolut Lime', img: `${U}/2020/05/absolut-lime.jpg`, href: 'https://amzn.to/2XjXl8e' },
          { label: 'Green apple', name: 'Smirnoff Green Apple', img: `${U}/2019/06/apple_smirnoff.jpg`, href: 'https://amzn.to/2INn5CG' },
          { label: 'Lemon', name: 'Absolut Citron', img: `${U}/2019/06/absolut_citron.jpg`, href: 'https://amzn.to/2X5YB0s' },
          { label: 'Raspberry', name: 'Smirnoff Raspberry', img: `${U}/2019/06/smirnoff_raspberry.jpg`, href: 'https://amzn.to/2F9ZCKF' },
        ],
      },
      {
        id: 'rum',
        name: 'Rum',
        html: ['For rum, we currently have recommendations for dark rum, spiced rum, white rum and coconut rum.'],
        note: 'We have a fantastic <a href="/rum-cocktails/">rum cocktails collection</a>, where we list ALL of our rum-based cocktails.',
        products: [
          { label: 'Dark rum', name: 'Captain Morgan Original', img: `${U}/2020/05/captain-morgans-dark-rum.jpg`, href: 'https://amzn.to/3VyIcwN' },
          { label: 'Spiced rum', name: 'Red Leg Spiced Rum', img: `${U}/2020/05/redleg.jpg`, href: 'https://amzn.to/2LMY4t4' },
          { label: 'White rum', name: 'Bacardi Carta Blanca', img: `${U}/2019/07/bacardi.jpg`, href: 'https://amzn.to/2FKPSH2', us: { href: 'https://shrsl.com/3impq' } },
          { label: 'Coconut rum', name: 'Malibu', img: `${U}/2020/05/malibu.jpg` },
        ],
      },
      {
        id: 'gin',
        name: 'Gin',
        products: [
          { name: 'Hendrick’s Gin', img: `${U}/2019/06/hendricks-gin.jpg`, href: 'https://amzn.to/2EjgvlS', us: { href: 'https://shrsl.com/3imp8' } },
        ],
      },
      {
        id: 'sloe-gin',
        name: 'Sloe gin',
        note: 'If you’re reading this thinking “what the f@*k is sloe gin?”, <a href="/what-is-sloe-gin/">see our detailed What is Sloe Gin? article to get the lowdown</a>.',
        products: [
          { name: 'Gordon’s Sloe Gin', img: `${U}/2020/02/gordons-sloe-gin-1.jpg.webp`, href: 'https://amzn.to/3bMASqr', us: { href: 'https://shrsl.com/36wc0', name: 'DeKuyper Sloe Gin', img: `${U}/2021/10/sloe-gin.png` } },
        ],
      },
      {
        id: 'whiskey',
        name: 'Whiskey',
        products: [
          { name: 'Bushmills Whiskey', img: `${U}/2020/06/bushmills.jpg`, href: 'https://amzn.to/3h586nD' },
        ],
      },
      {
        id: 'rye-whiskey',
        name: 'Rye whiskey',
        products: [
          { name: 'Jim Beam Rye', img: `${U}/2020/04/jim-beam-rye.jpg`, href: 'https://amzn.to/2UzORJR' },
        ],
      },
      {
        id: 'bourbon',
        name: 'Bourbon',
        products: [
          { name: 'Buffalo Trace', img: `${U}/2020/01/buffalo-trace.jpg.webp`, href: 'https://amzn.to/2Ll57ZX', us: { href: 'https://shrsl.com/3imp3' } },
        ],
      },
      {
        id: 'tequila',
        name: 'Tequila',
        note: 'Tequila is a key ingredient in the <a href="/cocktails/margarita/">Margarita</a>.',
        products: [
          { name: 'Jose Cuervo Especial Gold', img: `${U}/2019/07/tequila.jpg`, href: 'https://amzn.to/2xJhGXO', us: { href: 'https://shareasale.com/r.cfm?b=1597301&u=2986536&m=100288&urllink=liquorama%2Enet%2Fjose%2Dcuervo%2Despecial%2Dgold%2Dtequila%2D750ml%2Ehtml&afftrack=' } },
        ],
      },
      {
        id: 'brandy',
        name: 'Brandy',
        products: [
          { name: 'Courvoisier', img: `${U}/2020/05/courvoisier-1.jpg`, href: 'https://amzn.to/2TqXo0z' },
          { label: 'Apricot brandy', name: 'De Kuyper Apricot Brandy', img: `${U}/2020/06/apricot-brandy.jpg`, href: 'https://www.awin1.com/cread.php?awinmid=61&awinaffid=682197&clickref=drinkshop-apricot-brandy&ued=https%3A%2F%2Fwww.thedrinkshop.com%2Fitem%2F2210%2Fde-kuyper-apricot-brandy', us: { href: 'https://shrsl.com/36wpb' } },
          { label: 'Cherry brandy', name: 'De Kuyper Cherry Brandy', img: `${U}/2020/06/cherry-brandy.jpg`, href: 'https://amzn.to/4iD8IDx' },
        ],
      },
      {
        id: 'absinthe',
        name: 'Absinthe',
        products: [
          { name: 'La Fée NV Absinthe', img: `${U}/2020/06/envy-absinthe.jpg`, href: 'https://amzn.to/2yYfd08' },
        ],
      },
    ],
  },
  {
    id: 'liqueurs',
    name: 'Liqueurs',
    lede: 'The sweet, fruity and herbal bottles that give cocktails their character.',
    types: [
      {
        id: 'southern-comfort',
        name: 'Southern Comfort',
        note: 'Check out our <a href="/cocktails-with-southern-comfort/">best cocktails with Southern Comfort</a> for Southern Comfort cocktail inspiration.',
        products: [
          { name: 'Southern Comfort', img: `${U}/2020/05/southern-comfort-small.jpg`, href: 'https://amzn.to/2zi5XDX', us: { href: 'https://shrsl.com/36ush' } },
        ],
      },
      {
        id: 'blue-curacao',
        name: 'Blue curaçao',
        html: [
          'Blue curaçao is one of the most popular <a href="/cocktail-ingredients/">cocktail ingredients</a> ever. It’s used to create exotic-looking cocktails such as <a href="/cocktails/blue-hawaii/">the Blue Hawaii</a>, amongst <a href="/cocktails-with-blue-curacao/">many others</a>.',
          'You can read more about blue curaçao <a href="/what-is-blue-curacao/">in our dedicated article</a>.',
        ],
        products: [
          { name: 'Bols Blue Curaçao', img: `${U}/2019/06/bols_blue_curacao.jpg`, href: 'https://amzn.to/2V9ZN1j', us: { href: 'https://shrsl.com/36wz0' } },
        ],
      },
      {
        id: 'orange-curacao',
        name: 'Orange curaçao',
        products: [
          { name: 'Bols Orange Curaçao', img: `${U}/2020/06/orange-curacao.jpg`, href: 'https://amzn.to/3dLrV1i', us: { href: 'https://shrsl.com/36wou' } },
        ],
      },
      {
        id: 'triple-sec',
        name: 'Triple sec',
        note: 'See our detailed <a href="/what-is-triple-sec/">What is Triple Sec? article</a> and <a href="/cocktails-with-triple-sec/">our list of triple sec cocktail recipes</a>.',
        products: [
          { name: 'Cointreau', img: `${U}/2019/06/cointreau.jpg.webp`, href: 'https://amzn.to/2yDpZsl', us: { href: 'https://shrsl.com/36wck' } },
        ],
      },
      {
        id: 'peach-schnapps',
        name: 'Peach schnapps',
        note: 'You can find out more about peach schnapps in <a href="/what-is-peach-schnapps/">our detailed What is Peach Schnapps? article</a>, or browse our <a href="/peach-schnapps-cocktails/">peach schnapps cocktails</a>.',
        products: [
          { name: 'Archers Peach Schnapps', img: `${U}/2020/05/peach-schnapps.jpg`, href: 'https://amzn.to/3dlJtnp', us: { href: 'https://shrsl.com/37ppc', img: `${U}/2021/10/peach-schnapps.jpg` } },
        ],
      },
      {
        id: 'apple-schnapps',
        name: 'Apple schnapps',
        products: [
          { name: 'Teichenné Red Apple Schnapps', img: `${U}/2019/06/apple_schanpps.jpg`, href: 'https://amzn.to/2WEZKrq' },
        ],
      },
      {
        id: 'coffee-liqueur',
        name: 'Coffee liqueur',
        html: ['One of our favourite alcohol recommendations is <a href="https://www.kahlua.com/en-us/" rel="noopener">Kahlúa</a>. It’s bitter, delicious and luxurious, and it’s one of the key ingredients in one of the greatest, and most calorific, cocktails of all time: <a href="/cocktails/white-russian/">the White Russian</a>.'],
        products: [
          { name: 'Kahlúa', img: `${U}/2019/06/kahlua.jpg`, href: 'https://amzn.to/37MRaPN', us: { href: 'https://shrsl.com/3imp9' } },
        ],
      },
      {
        id: 'campari',
        name: 'Campari',
        note: 'Find out more about Campari in <a href="/what-is-campari/">our detailed What is Campari? article</a>.',
        products: [
          { name: 'Campari', img: `${U}/2019/06/campari.jpg`, href: 'https://amzn.to/3cpXBIh' },
        ],
      },
      {
        id: 'passoa',
        name: 'Passoa',
        note: 'Passoa is a passion fruit liqueur and a key ingredient in <a href="/cocktails/pornstar-martini/">the Pornstar Martini</a>. See all our <a href="/passoa-cocktails/">Passoa cocktails</a>.',
        products: [
          { name: 'Passoa', img: `${U}/2019/06/passoa.jpg`, href: 'https://amzn.to/2oKtXKq', us: { href: 'https://shareasale.com/r.cfm?b=1597301&u=2986536&m=100288&urllink=liquorama%2Enet%2Fpassoa%2Dpassion%2Dfruit%2Dliqueur%2D750ml%2Ehtml&afftrack=liquorama%2Dpassoa' } },
        ],
      },
      {
        id: 'amaretto',
        name: 'Amaretto',
        products: [
          { name: 'Disaronno', img: `${U}/2019/07/disoranno-amaretto.jpg`, href: 'https://amzn.to/3uhzcRM', us: { href: 'https://shrsl.com/3impf' } },
        ],
      },
      {
        id: 'galliano',
        name: 'Galliano',
        note: 'Galliano is a key ingredient in the <a href="/cocktails/harvey-wallbanger/">Harvey Wallbanger</a>.',
        products: [
          { name: 'Galliano', img: `${U}/2019/06/galliano.jpg` },
        ],
      },
      {
        id: 'limoncello',
        name: 'Limoncello',
        products: [
          { name: 'Luxardo Limoncello', img: `${U}/2019/06/lemoncello.jpg`, href: 'https://amzn.to/3fJzV4k', us: { href: 'https://shrsl.com/36wpj', name: 'Lazzaroni Limoncello', img: `${U}/2021/10/limoncello.jpg` } },
        ],
      },
      {
        id: 'advocaat',
        name: 'Advocaat',
        products: [
          { name: 'Warninks Advocaat', img: `${U}/2020/06/advocaat.jpg`, href: 'https://amzn.to/30Jkq7C', us: { href: 'https://shrsl.com/3bxzs', name: 'Verpoorten Advocaat', img: `${U}/2022/01/verpoorten-advocaat-egg-liqueur__43278.1575266909.jpg` } },
        ],
      },
      {
        id: 'blackcurrant-liqueur',
        name: 'Blackcurrant liqueur',
        products: [
          { name: 'Giffard Crème de Cassis', img: `${U}/2020/06/creme-de-cassis.jpg`, href: 'https://amzn.to/2XsSqTJ' },
        ],
      },
      {
        id: 'benedictine',
        name: 'Bénédictine',
        products: [
          { name: 'Bénédictine D.O.M.', img: `${U}/2020/07/benedictine.jpg`, href: 'https://www.awin1.com/cread.php?awinmid=61&awinaffid=682197&clickref=benedictine-thedrinkshop&ued=https%3A%2F%2Fwww.thedrinkshop.com%2Fitem%2F327%2Fbenedictine-d-o-m' },
        ],
      },
      {
        id: 'pernod',
        name: 'Pernod',
        products: [
          { name: 'Pernod', img: `${U}/2020/05/pernod.jpg.webp`, href: 'https://amzn.to/3b8CycB', us: { href: 'https://shrsl.com/36uxh' } },
        ],
      },
    ],
  },
  {
    id: 'wine-and-cider',
    name: 'Wine, fizz & cider',
    lede: 'Bubbles for topping up, vermouth for stirring and the odd bottle of port or cider.',
    types: [
      {
        id: 'champagne',
        name: 'Champagne',
        note: 'See all our <a href="/champagne-cocktails/">champagne cocktails</a>.',
        products: [
          { name: 'Bollinger Champagne', img: `${U}/2020/03/bollinger-champagne-1.jpg`, href: 'https://amzn.to/39CJ8I4', us: { href: 'https://shrsl.com/38j60' } },
        ],
      },
      {
        id: 'prosecco',
        name: 'Prosecco',
        products: [
          { name: 'Martini Prosecco', img: `${U}/2022/01/prosecco-e1641811323107.jpg`, href: 'https://amzn.to/3GcHpK9', us: { href: 'https://shrsl.com/3c4fh' } },
        ],
      },
      {
        id: 'vermouth',
        name: 'Vermouth',
        products: [
          { name: 'Carpano Antica Formula', img: `${U}/2019/06/vermouth_.jpg`, href: 'https://amzn.to/2YJUy74', us: { href: 'https://shrsl.com/36wo8' } },
        ],
      },
      {
        id: 'port',
        name: 'Port',
        products: [
          { name: 'Taylor’s Port', img: `${U}/2019/06/taylors_port.jpg`, href: 'https://amzn.to/2IQr6G9' },
        ],
      },
      {
        id: 'apple-cider',
        name: 'Apple cider',
        products: [
          { name: 'Westons Cider (pack of 12)', img: `${U}/2020/06/apple-cider.jpg`, href: 'https://amzn.to/2BL0yGH' },
        ],
      },
    ],
  },
  {
    id: 'bitters',
    name: 'Bitters',
    lede: 'A dash or two is all you need, so one bottle lasts for ages.',
    types: [
      {
        id: 'angostura-bitters',
        name: 'Angostura bitters',
        html: ['Angostura bitters are in a number of our cocktails, most notably <a href="/cocktails/old-fashioned-recipe/">the Old Fashioned</a>. <a href="https://en.wikipedia.org/wiki/Angostura_bitters" rel="noopener">Angostura bitters</a> are an alcoholic mixer made from herbs and spices by the House of Angostura in Trinidad and Tobago.'],
        products: [
          { name: 'Angostura Aromatic Bitters', img: `${U}/2020/05/angostura-aromatic-bitters-1.jpg`, href: 'https://amzn.to/2xCEn3N', us: { href: 'https://shrsl.com/36uw0' } },
        ],
      },
      {
        id: 'orange-bitters',
        name: 'Orange bitters',
        products: [
          { name: 'Angostura Orange Bitters', img: `${U}/2020/01/angosturra-orange-bitters.jpg`, href: 'https://amzn.to/37fG7wm', us: { href: 'https://shrsl.com/36x00' } },
        ],
      },
    ],
  },
];

/** The first product in a section, by its id, e.g. alcoholPick('triple-sec') for an article. */
export function alcoholPick(id: string): Product {
  const type = alcoholGroups.flatMap((g) => g.types).find((t) => t.id === id);
  if (!type) throw new Error(`alcohol.ts has no section called ${id}`);
  return type.products[0];
}

/** A product by its name, e.g. alcoholProduct('Bacardi Carta Blanca'), for sections with several products. */
export function alcoholProduct(name: string): Product {
  const product = alcoholGroups.flatMap((g) => g.types.flatMap((t) => t.products)).find((p) => p.name === name);
  if (!product) throw new Error(`alcohol.ts has no product called ${name}`);
  return product;
}
