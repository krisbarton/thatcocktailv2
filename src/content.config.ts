import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), href: z.string() });

/**
 * One Markdown file per cocktail in src/content/cocktails/. The filename is the URL slug,
 * so americano.md becomes /cocktails/americano/. Recipe data lives in the frontmatter;
 * anything in the body (ingredient notes, product picks) appears above the recipe card.
 */
const cocktails = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cocktails' }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences for the hero and the meta description. */
    summary: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    /** Leave out when there's no real photo yet; the page shows a neon placeholder instead. */
    image: z
      .object({
        /** Path under /wp-content/uploads/, without the extension, e.g. /wp-content/uploads/2024/07/Ringo */
        base: z.string(),
        alt: z.string(),
        ext: z.enum(['png', 'jpg']).default('png'),
        /** Whether WordPress made a 300×300 crop of this upload. */
        crop300: z.boolean().default(true),
      })
      .optional(),
    glass: z.string(),
    prepMins: z.number().default(1),
    makeMins: z.number().default(1),
    serves: z.number().default(1),
    calories: z.number().optional(),
    /** Collection pages the recipe belongs to. The first one is used for the breadcrumb and "more like this" link. */
    collections: z.array(link).default([]),
    ingredients: z.array(
      z.object({
        /** What the ingredient is. HTML is allowed, e.g. an affiliate link. */
        item: z.string(),
        ml: z.number().optional(),
        oz: z.number().optional(),
        /** Upper end when the measure is a range, e.g. 90–120ml. */
        mlMax: z.number().optional(),
        ozMax: z.number().optional(),
        /** A countable amount that scales with the number of drinks, e.g. 2 teaspoons. */
        count: z.number().optional(),
        one: z.string().optional(),
        many: z.string().optional(),
        /** A fixed amount that doesn't scale, e.g. "Splash of". */
        amount: z.string().optional(),
        note: z.string().optional(),
        /** Garnishes are left out of the short ingredient list on recipe cards. */
        garnish: z.boolean().default(false),
      }),
    ),
    method: z.array(z.string()),
    /** Optional second method for people without a cocktail shaker. */
    methodNoShaker: z.array(z.string()).optional(),
    /** How-to tips, shown at the foot of the recipe card. HTML is allowed. */
    tips: z.array(z.string()).optional(),
    /**
     * The recipe's own questions for the FAQs under the recipe card, written from its article. They
     * come before the ones worked out from the recipe, and replace any on the same topic (see
     * src/lib/cocktail-faqs.ts). HTML is allowed in `a`.
     */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    video: z
      .object({ id: z.string(), title: z.string(), thumbnail: z.string() })
      .optional(),
  }),
});

export const collections = { cocktails };
