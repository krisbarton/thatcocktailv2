# ThatCocktail (Astro)

The Astro rebuild of thatcocktail.com, using the design from `../homepage-redesign` and `../404-page`.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview
```

## Pages so far

| URL | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/about/` | `src/pages/about.astro` |
| `/contact-us/` | `src/pages/contact-us.astro` |
| `/privacy-policy/` | `src/pages/privacy-policy.md` |
| `/cookie-policy/` | `src/pages/cookie-policy.md` |
| `/terms-of-service/` | `src/pages/terms-of-service.md` |
| `/almost-done/` | `src/pages/almost-done.astro` (noindex) |
| `/thank-you/` | `src/pages/thank-you.astro` (noindex) |
| `/author/kris/` | `src/pages/author/kris.astro` |
| `/cocktails/` | `src/pages/cocktails/index.astro` (every recipe, with search and collection filters from `src/components/RecipeFilter.astro`; the collection and spirit pages use the same component for lists of 20 or more, set by `FILTER_MIN` in `src/lib/cocktails.ts`; add `filter` to a spirit page, as on `/tequila-cocktails/`, to show it on a shorter list) |
| `/cocktails/<slug>/` | `src/pages/cocktails/[slug].astro`, one per file in `src/content/cocktails/` |
| `/types-of-cocktails/`, `/seasonal-cocktails/`, `/flavour-profiles/` | Hub pages: one file each in `src/pages/`, using `src/components/HubSections.astro` (also used by `/cocktails-by-spirit/`) |
| `/classic-cocktails/`, `/modern-cocktails/`, `/non-alcoholic-cocktails/`, `/winter-cocktail-recipes/`, `/spring-cocktail-recipes/`, `/summer-cocktail-recipes/`, `/autumn-cocktail-recipes/`, `/sweet-cocktail-recipes/`, `/bitter-cocktail-recipes/`, `/savoury-cocktail-recipes/`, `/sour-cocktail-recipes/` | One file each in `src/pages/`, built on `src/layouts/CollectionLayout.astro` (lists every recipe with that tag in its `collections`; reuse it for the other collection pages) |
| `/search/` | `src/pages/search.astro`. The newest 9 recipes, then results as you type (`RecipeFilter` with `limit`). The homepage hero search sends people here with `?q=` |
| `/popular-cocktail-recipes/` | `src/pages/popular-cocktail-recipes.astro`. The same nine recipes as the homepage's "Most popular" section: edit `popularSlugs` in `src/data/recipes.ts` to change both |
| `/alcohol-recommendations/` | `src/pages/alcohol-recommendations.astro`. The brands, links and copy are in `src/data/alcohol.ts`, grouped into spirits, liqueurs, wine & cider, and bitters. Each product box is `ProductPick`, which swaps to the `us` link for visitors in a US time zone, as WordPress did with its country lookup. The spirit pages' hand-written `.pick` boxes still link to the UK only |
| `/cocktail-equipment/` | `src/pages/cocktail-equipment.astro`, on `ArticleLayout` (no related articles yet: `related` is optional). The kit is in `kit` in `src/data/products.ts`, shared with the articles. Not in the main nav yet: `/cocktail-glassware/`, `/cocktail-gifts/` and `/cocktail-sets/` aren't migrated |
| `/cocktail-ingredients/`, `/cocktail-ingredients/alcohol-information/`, `/cocktail-ingredients/alcohol-reviews/` | `src/pages/cocktail-ingredients/` (`index.astro` is the hub). The article cards (`ArticleCards`) come from `ingredientGuides` and `alcoholReviews` in `src/data/recipes.ts`; the hub shows both lists, and `ingredientGuides` also feeds the homepage's "Cocktail ingredients explained". Every guide and review they link to is migrated |
| Articles, e.g. `/what-is-triple-sec/` | One `.astro` file each in `src/pages/`, at the same root URL as WordPress, built on `src/layouts/ArticleLayout.astro` (hero, sticky contents rail, author box, related articles). Pass the sections as `toc`. Blocks for the body (In short box, `ProductPick` grids, `RecipeCard`s, a mini recipe, the closing call to action) are styled in `src/styles/article.css`. Feature recipes as cards rather than copying their ingredients, and end on a link to the topic's cocktails, not /cocktails/ (Changes #1 and #4 in `reverse-silo-seo-plan.md`). Bar kit for product boxes is `kit` in `src/data/products.ts`; brands of alcohol come from `alcoholPick()` in `src/data/alcohol.ts`, so they match /alcohol-recommendations/. Migrated so far: `/what-is-triple-sec/`, `/what-is-blue-curacao/`, `/what-is-campari/`, `/what-is-peach-schnapps/`, `/what-is-sloe-gin/`, `/what-is-gold-rum/` (all six alcohol information guides), and the three reviews: `/best-white-rum/`, `/is-smirnoff-good-vodka/`, `/best-vodka-for-cocktails/`. Reviews put their comparison figures in `.table-wrap` tables with a caption saying when they were taken; the vodka review adds up its final scores from the four test tables, so they can't drift |
| `/cocktails-by-spirit/` | `src/pages/cocktails-by-spirit.astro` (sections built from each recipe's ingredients; the spirits and their matching rules are in `src/data/recipes.ts`) |
| `/vodka-cocktails/`, `/gin-cocktails/`, `/rum-cocktails/`, `/tequila-cocktails/`, `/champagne-cocktails/`, `/amaretto-cocktails/`, `/peach-schnapps-cocktails/`, `/passoa-cocktails/` | One file each in `src/pages/`, built on `src/layouts/SpiritLayout.astro`: the recipe list fills itself and the page only holds its own write-up. `groups` splits the list by type with an "On this page" rail (rum: white, dark, spiced, other). |

URLs match WordPress (`trailingSlash: 'always'`, directory output). The few that changed (`/cocktail-recipes/`, removed duplicate recipes and misspelt slugs) are listed under `redirects` in `astro.config.mjs`. Each needs a matching 301 on the host at launch.

## Where things live

- `src/styles/global.css`: brand tokens (colours, fonts, radii) and shared components (header, footer, buttons, cards, chips, proof bar, prose).
- `src/data/site.ts`: contact details, socials, nav, footer links, stats, Kris's details, the subscribe endpoint and the GA4 ID.
- `src/content/cocktails/`: one Markdown file per cocktail (filename = URL slug; all 253 from WordPress, with 3 duplicates removed, and `MIGRATION-NOTES.md` lists photos still needed and measures to confirm). Add a file to publish a recipe: it gets its own page at `/cocktails/<slug>/`, appears on `/cocktails/`, and the newest 8 feed the "Latest" grids on the homepage, almost-done, thank-you and author pages.
- `src/data/recipes.ts`: the popular, spirit, ingredient and type lists used on the homepage (the popular list is also used on `/popular-cocktail-recipes/`).
- `src/data/schema.ts`: JSON-LD (Organization, WebSite, Person, breadcrumbs).
- Legal pages are plain Markdown. Edit the text; the layout builds the "On this page" contents from the `##` headings.

## Before switching DNS

- **Images.** Recipe photos still load from `https://www.thatcocktail.com/wp-content/uploads/…`. Copy that folder into `public/wp-content/uploads/` (or a CDN) and set `MEDIA_BASE` in `src/data/site.ts` to `''`.
- **Search.** `/search/` searches recipes only (names, ingredients and glasses), in the browser. To search articles and guides too once they're migrated, swap in a full-site index such as Pagefind. WordPress search URLs (`/?s=…`) aren't redirected.
- **Linked pages.** Recipes, hubs and articles linked from these pages aren't built in Astro yet.
- **Subscribe form.** `SubscribeForm` posts to `tentacle.krisbarton.com` and redirects to `/almost-done/`, the same as the WordPress theme. It's used by the signup section (`GuideSignup`) and the homepage popup (`GuideDialog`, opened by any link marked `data-guide-dialog`); the guide's cover and copy are `freeGuide` in `src/data/site.ts`. The API only accepts requests from `https://www.thatcocktail.com` (checked 2026-10-23): signing up fails on localhost and on the bare `thatcocktail.com`, so serve the site on www, or ask for any other origin (e.g. a staging URL) to be allowed.
