/**
 * Bar kit recommended across the articles, for ProductPick. Brands of alcohol are in alcohol.ts.
 * The links are the ones the WordPress articles used.
 */
import type { Product } from './alcohol';

export const kit = {
  shakerSet: { label: 'Cocktail shaker set', name: 'Autumndeer Cocktail Shaker Set', img: '/wp-content/uploads/2020/11/cocktail-set-autumndeer.png', href: 'https://amzn.to/2U5A3Sl', us: { href: 'https://amzn.to/3bhOsn0', name: 'Esmula Bartender Kit', img: '/wp-content/uploads/2021/10/cocktail-shaker-set.jpg' } },
  highballGlasses: { label: 'Highball glasses', name: 'Highball Glasses', img: '/wp-content/uploads/2019/09/highball-glasses.jpg', href: 'https://amzn.to/32y7eQl' },
  cocktailGlasses: { label: 'Cocktail glasses', name: 'Cocktail Glasses', img: '/wp-content/uploads/2019/09/cocktail-glasses-1.jpg', href: 'https://amzn.to/2ZS7cG6' },
  oldFashionedGlasses: { label: 'Old fashioned glasses', name: 'Old Fashioned Glasses', img: '/wp-content/uploads/2019/09/old-fashioned-1.jpeg', href: 'https://amzn.to/2ZU6VT7' },
  jigger: { label: 'Jigger', name: 'All in 1 Jigger', img: '/wp-content/uploads/2021/11/cocktail-jigger.jpg', href: 'https://amzn.to/319XO2e', us: { href: 'https://amzn.to/3rn8vtq' } },
  hawthorneStrainer: { label: 'Hawthorne strainer', name: 'Hawthorne Strainer', img: '/wp-content/uploads/2021/11/hawathorne-strainer.jpg', href: 'https://amzn.to/3oTMvU9' },
  mixingGlass: { label: 'Mixing glass', name: 'Flow Mixing Glass', img: '/wp-content/uploads/2023/09/mixing-glass-e1694438834766.jpg', href: 'https://amzn.to/3r7FB2z' },
  barSpoon: { label: 'Bar spoon', name: 'Bar Spoons', img: '/wp-content/uploads/2022/01/bar-spoon.jpg', href: 'https://amzn.to/3IFwtW5', us: { href: 'https://shrsl.com/3cxdy' } },
  lemonSqueezer: { label: 'Lemon squeezer', name: 'Hometech Lemon Squeezer', img: '/wp-content/uploads/2020/09/lemon-squeezer.jpg', href: 'https://amzn.to/33TrONo' },
  blender: { label: 'Blender', name: 'Makoloce Blender', img: '/wp-content/uploads/2021/10/blender_uk.jpg', href: 'https://amzn.to/3avTgoe', us: { href: 'https://amzn.to/2YLOxfG', name: 'Easepot Blender', img: '/wp-content/uploads/2021/10/blender.jpg' } },
  copperMugs: { label: 'Copper mugs', name: 'Moscow Mule Copper Mug', img: '/wp-content/uploads/2019/08/copper-mugs.jpg', href: 'https://amzn.to/2KyStFE' },
} satisfies Record<string, Product>;

/**
 * The glasses on /cocktail-glassware/, with that page's links. They differ from the glasses in `kit`,
 * which the older articles used, and add a US version where WordPress had one.
 */
export const glassware = {
  champagneFlutes: { name: 'Champagne Flutes', img: '/wp-content/uploads/2019/09/chamoagne-flutes-1.jpg', href: 'https://amzn.to/2NfGxN5' },
  copperMug: { name: 'Moscow Mule Copper Mug', img: '/wp-content/uploads/2022/02/copper-mug.jpg', href: 'https://amzn.to/3omMFEC', us: { href: 'https://amzn.to/3mToBqL' } },
  oldFashionedGlasses: { name: 'Symphony Old Fashioned Glasses (6)', img: '/wp-content/uploads/2019/06/old_fashioned_glasses.jpg', href: 'https://amzn.to/35TaCqt', us: { href: 'https://shareasale.com/r.cfm?b=1834334&u=2986536&m=114381&urllink=lollygag%2Eco%2Fcollections%2Fbar%2Dwine%2Fproducts%2Fgatsby%2Drocks%2Dglass%2Dset&afftrack=lollygag%2Dold%2Dfashioned%2Dglasses', name: 'Gatsby Rock Glass Duo', img: '/wp-content/uploads/2021/10/old-fashioned-glasses.jpg' } },
  hurricaneGlasses: { name: 'Hurricane Cocktail Glasses (6)', img: '/wp-content/uploads/2019/10/hurricane-glass-1.jpg', href: 'https://amzn.to/2PuJ5Hk', us: { href: 'https://amzn.to/3BLxZD1', name: 'Hurricane Cocktail Glasses (4)', img: '/wp-content/uploads/2021/10/hurricane-glass.jpg' } },
  highballGlasses: { name: 'Highball Glasses', img: '/wp-content/uploads/2019/09/highball-glasses.jpg', href: 'https://amzn.to/3nx7z22', us: { href: 'https://amzn.to/3vdwnPO', img: '/wp-content/uploads/2021/10/highball-glasses.jpg' } },
  cocktailGlasses: { name: 'Martini Glasses', img: '/wp-content/uploads/2019/09/cocktail-glasses-1.jpg', href: 'https://amzn.to/2ZS7cG6', us: { href: 'https://amzn.to/3oYhxfb', img: '/wp-content/uploads/2021/10/cocktail-glasses.jpg' } },
  margaritaGlasses: { name: 'Ravenhead Margarita Glasses', img: '/wp-content/uploads/2020/01/margarita-glass-1.jpg.webp', href: 'https://amzn.to/2FEmjGF', us: { href: 'https://amzn.to/3FKWBhI', name: 'Margarita Glasses', img: '/wp-content/uploads/2021/10/margarita-glasses.jpg' } },
} satisfies Record<string, Product>;
