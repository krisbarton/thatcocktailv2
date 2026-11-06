import { getCollection, type CollectionEntry } from 'astro:content';
import { popularSlugs, type Recipe } from '../data/recipes';
import { media } from '../data/site';

export type Cocktail = CollectionEntry<'cocktails'>;
export type Ingredient = Cocktail['data']['ingredients'][number];

/** Every cocktail, newest first. */
export async function getCocktails() {
  const all = await getCollection('cocktails');
  return all.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

export const cocktailUrl = (c: Cocktail) => `/cocktails/${c.id}/`;

/** Paths (under /wp-content/uploads/) of a cocktail's photo. WordPress keeps a .webp beside every upload. */
const imagePaths = (c: Cocktail) => {
  const i = c.data.image;
  if (!i) return null;
  const main = `${i.base}.${i.ext}.webp`;
  return { main, thumb: i.crop300 ? `${i.base}-300x300.${i.ext}.webp` : main, original: `${i.base}.${i.ext}`, alt: i.alt };
};

/** Full URLs of a cocktail's photo, or null when it doesn't have one yet. */
export const cocktailImage = (c: Cocktail) => {
  const p = imagePaths(c);
  return p ? { src: media(p.main), src300: media(p.thumb), png: media(p.original), alt: p.alt } : null;
};

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');
const fmt = (n: number) => String(Math.round(n * 100) / 100);

/** The measure shown before an ingredient, e.g. "30ml / 1oz", "90–120ml / 3–4oz", "2 teaspoons". */
export function measure(i: Ingredient): string | null {
  if (i.ml != null && i.oz != null) {
    return i.mlMax != null && i.ozMax != null
      ? `${fmt(i.ml)}–${fmt(i.mlMax)}ml / ${fmt(i.oz)}–${fmt(i.ozMax)}oz`
      : `${fmt(i.ml)}ml / ${fmt(i.oz)}oz`;
  }
  if (i.count != null) return `${i.count} ${i.count === 1 ? i.one ?? '' : i.many ?? ''}`.trim();
  return i.amount ?? null;
}

/** Plain-text ingredient line for schema.org, e.g. "30ml / 1oz Campari". */
export const ingredientText = (i: Ingredient) =>
  [measure(i), stripTags(i.item), i.note ? `(${i.note})` : ''].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();

/** Whether any of a cocktail's ingredients (garnishes aside) matches, e.g. a spirit's `match` pattern. */
export const usesIngredient = (c: Cocktail, pattern: RegExp) =>
  c.data.ingredients.some((i) => !i.garnish && pattern.test(stripTags(i.item).toLowerCase()));

/**
 * Choose up to `n` cocktails for a hub section: newest first, photographed ones ahead of
 * placeholders. Anything already in `shown` is skipped while there are others to choose,
 * and the picks are added to `shown`, so sections on the same page don't repeat each other.
 */
export function pickFresh(list: Cocktail[], shown: Set<Cocktail>, n: number) {
  const ranked = [...list.filter((c) => c.data.image), ...list.filter((c) => !c.data.image)];
  const picks = [...ranked.filter((c) => !shown.has(c)), ...ranked.filter((c) => shown.has(c))].slice(0, n);
  picks.forEach((c) => shown.add(c));
  return picks;
}

// Spellings the recipes mix; each one also finds the other.
const spellings = [['whisky', 'whiskey']];

// Brands that are a kind of something else, so searching for the kind finds them too
// ("triple sec" finds the Cointreau recipes). One way only: "cointreau" doesn't find every triple sec.
const kinds = [['cointreau', 'triple sec']];

/**
 * Text for the RecipeFilter search box: the name, every ingredient and the glass, lowercased,
 * without accents or punctuation. The page's script normalises what's typed the same way.
 */
export function searchText(c: Cocktail) {
  const text = [c.data.title, ...c.data.ingredients.map((i) => [stripTags(i.item), i.one, i.many].filter(Boolean).join(' ')), c.data.glass]
    .join(' ')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
  const words = new Set(text.split(' '));
  const extra = spellings.flatMap((forms) => (forms.some((w) => words.has(w)) ? forms.filter((w) => !words.has(w)) : []));
  for (const [brand, kind] of kinds) if (words.has(brand) && !text.includes(kind)) extra.push(kind);
  return [text, ...extra].join(' ');
}

/** Shape a cocktail for the shared recipe cards (homepage, author page, /cocktails/). */
export function toCard(c: Cocktail): Recipe {
  const img = imagePaths(c);
  const main = c.data.ingredients.filter((i) => !i.garnish);
  const names = main.map((i) => stripTags(i.item) || i.one || '').filter(Boolean);
  const list = names.join(', ');
  return {
    title: c.data.title,
    href: cocktailUrl(c),
    img: img?.main,
    img300: img && img.thumb !== img.main ? img.thumb : undefined,
    width: 500,
    height: 500,
    alt: img?.alt ?? '',
    meta: `${c.data.ingredients.length} ingredients · ${c.data.prepMins + c.data.makeMins} mins`,
    ingredients: list.charAt(0).toUpperCase() + list.slice(1),
  };
}

/** The most popular recipes (popularSlugs in src/data/recipes.ts), in that order. */
export async function getPopular() {
  const cocktails = await getCocktails();
  return popularSlugs.map((slug) => {
    const c = cocktails.find((c) => c.id === slug);
    if (!c) throw new Error(`popularSlugs: there's no src/content/cocktails/${slug}.md`);
    return c;
  });
}

/** Lists shorter than this skip the search box and filter buttons. */
export const FILTER_MIN = 20;

/** Props for a RecipeCard inside a RecipeFilter list: the filter-button keys and the search text. */
export const filterProps = (c: Cocktail) => ({
  filters: c.data.collections.map((t) => t.label.toLowerCase()).join(' '),
  search: searchText(c),
});
