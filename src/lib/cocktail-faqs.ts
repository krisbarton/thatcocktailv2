import { type Cocktail, type Ingredient, measure } from './cocktails';
import { type RecipeNeeds, type Snippet, recipeNeeds, snippetName } from './recipe-snippets';

/**
 * The FAQs under each recipe card, worked out from the recipe itself (ingredients, method,
 * glass, garnish), so they stay right when a recipe changes. A recipe adds its own, written from
 * its article, with `faqs` in the frontmatter; they come first.
 *
 * `html` is what the page shows; the FAQPage schema gets the same answer with the tags
 * stripped, so the two always match word for word, as Google asks.
 */
export interface Faq {
  q: string;
  html: string;
  text: string;
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');
const plain = (html: string) => stripTags(html).replace(/\s+/g, ' ').trim();
const list = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`);
const vowel = (s: string) => /^[aeiou]/i.test(s) || /^MVP\b/.test(s);

/** "a Mojito", "an Old Fashioned", "the Madras", "a Day at the Beach", for use mid-sentence. */
export const withArticle = (title: string) =>
  /^(a|an|the)\s/i.test(title) ? title.charAt(0).toLowerCase() + title.slice(1) : `${vowel(title) ? 'an' : 'a'} ${title}`;

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** "What Ingredients do you need to make an Americano?": the heading and the FAQ ask the same. */
export const needQuestion = (what: 'Ingredients' | 'Equipment', title: string) =>
  `What ${what} do you need to make ${withArticle(title)}?`;

const needLink = (s: Snippet) => `<a href="#need-${s.id}">${snippetName(s)}</a>`;

// The glassware page's sections, for the glasses it covers.
const glassSections: [RegExp, string][] = [
  [/highball/i, 'highball-glasses'],
  [/cocktail glass|martini glass|coupe/i, 'cocktail-glasses'],
  [/old fashioned|whiskey glass/i, 'old-fashioned-glasses'],
  [/copper mug/i, 'copper-mugs'],
  [/champagne/i, 'champagne-flutes'],
  [/hurricane/i, 'hurricane-glasses'],
  [/margarita/i, 'margarita-glasses'],
];

/** "highball glass", "Old Fashioned glass", "Collins glass": lowercase unless it's named after something. */
const glassName = (glass: string) => (/^(old fashioned|irish|collins)/i.test(glass) ? glass : glass.charAt(0).toLowerCase() + glass.slice(1));

const glassLink = (glass: string) => {
  const name = glassName(glass);
  const section = glassSections.find(([re]) => re.test(glass))?.[1];
  const html = section ? `<a href="/cocktail-glassware/#${section}">${name}</a>` : name;
  return `${vowel(name) ? 'an' : 'a'} ${html}`;
};

const shakerLink = '<a href="/cocktail-equipment/#cocktail-shaker">cocktail shaker</a>';

// Ingredients with alcohol in them. Bitters are left out: a dash or two doesn't make a drink alcoholic.
const alcoholic =
  /vodka|\bgin\b|\brum\b|tequila|whisk(e)?y|scotch|bourbon|brandy|cognac|cachaça|champagne|prosecco|wine|vermouth|liqueur|schnapps|triple sec|cointreau|curaçao|amaretto|kahlúa|campari|aperol|galliano|chambord|crème de (banana|cacao|cassis|violette)|passoa|malibu|southern comfort|chartreuse|\bport\b|cider|absinthe|pernod|limoncello|advocaat|benedictine|blue wkd|drambuie|grand marnier|jack daniel|lillet|midori|pimm|falernum/;

const nameOf = (i: Ingredient) => plain(i.item) || i.one || '';

/** "50ml / 1.7oz vodka", "2 dashes of Angostura bitters", "a splash of soda water", "soda water to top up". */
const withMeasure = (i: Ingredient) => {
  const m = measure(i)?.trim();
  const item = plain(i.item);
  // Fixed amounts read as a list item: "Splash of" needs its "a", and "Top up with" goes after.
  if (m && /^top up with$/i.test(m)) return `${item} to top up`;
  // No measure, but "shot of espresso" still needs its "a".
  if (!m && /^(shot|slice|wedge|sprig|splash|dash) of /i.test(item)) return `a ${item}`;
  const amount = m && (/^(splash|dash|pinch) of$/i.test(m) ? `a ${m.toLowerCase()}` : m.charAt(0).toLowerCase() + m.slice(1));
  return [amount, item].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
};

/** The method as one lowercase string, without links. */
const methodText = (steps: string[]) => steps.map(plain).join(' ').toLowerCase();

/** The garnish, from the method's "Garnish with …" where there is one, else the garnish ingredients. */
function garnish(c: Cocktail): string | null {
  for (const step of c.data.method) {
    const m = plain(step).match(/garnish(?:ed)?(?: it)? with (.+?)\.?$/i);
    if (m) return m[1].replace(/,\s*and /g, ' and ');
  }
  const items = c.data.ingredients.filter((i) => i.garnish).map((i) => {
    const m = measure(i);
    const name = plain(i.item);
    if (m) return `${m} ${name}`.trim();
    // No "a" before plurals and things you don't count ("mint", "lemon zest").
    return /^(\d|a |an |the )/i.test(name) || /[^s]s$/i.test(name) || /zest$|peel$|^mint$|^salt$|^sugar$/i.test(name) ? name : `${vowel(name) ? 'an' : 'a'} ${name}`;
  });
  return items.length ? list(items) : null;
}

type Technique = 'shaken' | 'stirred' | 'blended' | 'built';

function technique(method: string): Technique {
  if (/\bshak/.test(method)) return 'shaken';
  // "Blend." or a blender, not "mix until well blended".
  if (/\bblender\b|(^|\.\s)blend\b/.test(method)) return 'blended';
  if (/\bstir/.test(method)) return 'stirred';
  return 'built';
}

function techniqueAnswer(c: Cocktail, how: Technique, method: string) {
  const name = withArticle(c.data.title);
  const glass = glassLink(c.data.glass);
  const strained = /\bstrain/.test(method);
  const topped = /\btop(ped)?\b|top (it )?up/.test(method);
  const iced = /\bice\b/.test(method);
  switch (how) {
    case 'shaken':
      return `${cap(name)} is shaken. Shake it with ice in a ${shakerLink}, then ${strained ? 'strain' : 'pour'} it into ${glass}${topped ? ' and top it up' : ''}.`;
    case 'stirred':
      return strained || /mixing glass/.test(method)
        ? `${cap(name)} is stirred, not shaken. Stir it with ice in a <a href="/cocktail-equipment/#mixing-glass">mixing glass</a>, then strain it into ${glass}.`
        : `${cap(name)} is stirred, not shaken. It’s made straight in ${glass}: add the ingredients${iced ? ' over ice' : ''} and stir.`;
    case 'blended':
      return `Neither. ${cap(name)} is blended, so you’ll need a <a href="/cocktail-equipment/#blender">blender</a>.`;
    case 'built':
      return `Neither. ${cap(name)} is built straight in ${glass}: pour the ingredients${iced ? ' over ice' : ''} and serve. No shaker needed.`;
  }
}

function shakerAnswer(c: Cocktail, method: string) {
  const name = withArticle(c.data.title);
  if (c.data.methodNoShaker?.length) {
    const steps = c.data.methodNoShaker.map((s) => stripTags(s).trim().replace(/\.?$/, '.')).join(' ');
    return `No. Without a ${shakerLink}, you can make ${name} like this: ${steps}`;
  }
  const finish = /\bstrain/.test(method) ? 'then strain it into your glass through a small sieve' : 'then pour it into your glass';
  return `A ${shakerLink} is best, but a clean jam jar with a tight lid works too. Add ice and the ingredients, screw the lid on and shake hard for 10 to 15 seconds, ${finish}.`;
}

function batchAnswer(c: Cocktail, how: Technique) {
  const d = c.data;
  const main = d.ingredients.filter((i) => !i.garnish);
  // Only for real measures: "4 parts" isn't a quantity, and a splash doesn't scale.
  if (!main.length || !main.every((i) => i.ml != null || (i.count != null && !/\bparts?\b/i.test(`${i.one} ${i.many}`)))) return null;
  const n = 4;
  const scaled = main.map((i) => {
    if (i.ml != null) {
      const ml = (v: number) => Math.round(v * n * 10) / 10;
      const amount = i.mlMax != null ? `${ml(i.ml)}–${ml(i.mlMax)}ml` : `${ml(i.ml)}ml`;
      return `${amount} ${plain(i.item)}`;
    }
    const count = i.count! * n;
    return `${count} ${(count === 1 ? i.one : i.many) ?? ''} ${plain(i.item)}`.replace(/\s+/g, ' ').trim();
  });
  const makes = d.serves === 1 ? 'one drink' : `${d.serves} drinks`;
  const tip =
    how === 'shaken' ? ' Shake one or two drinks at a time, so there’s room in the shaker for the ice.'
    : how === 'built' ? ' Build each drink in its own glass.'
    : '';
  return `The recipe makes ${makes}. Multiply every measure by the number of drinks you want: for ${n}, you’d need ${list(scaled)}.${tip}`;
}

// What each generated question is about, so one of the recipe's own FAQs on the same thing replaces it.
const topics = {
  ingredients: /ingredient|what.?s in/i,
  alcohol: /alcohol|strong/i,
  technique: /shak|stir/i,
  shaker: /shaker|equipment/i,
  glass: /\bglass\b|\bcup\b|\bmug\b|served in/i,
  garnish: /garnish/i,
  batch: /batch|group|crowd|jug|in advance/i,
};

/**
 * The FAQs for a cocktail: the recipe's own first (`faqs` in its frontmatter, written from its
 * article), then the ones worked out from the recipe. An own FAQ on the same topic as a worked-out
 * one replaces it, so its answer should cover the basic question too.
 *
 * `needs` is what recipeNeeds() found for the page, so the answers link to what's on it.
 */
export function cocktailFaqs(c: Cocktail, needs: RecipeNeeds = recipeNeeds(c)): Faq[] {
  const d = c.data;
  const name = withArticle(d.title);
  const method = methodText(d.method);
  const how = technique(method);
  const covered = (re: RegExp) => (d.faqs ?? []).some((f) => re.test(f.q));
  const faqs: { topic: keyof typeof topics; q: string; html: string | null }[] = [];

  const main = d.ingredients.filter((i) => !i.garnish);
  faqs.push({ topic: 'ingredients', q: `What’s in ${name}?`, html: `${cap(name)} is made with ${list(main.map(withMeasure))}.` });

  const booze = main.filter((i) => alcoholic.test(nameOf(i).toLowerCase()));
  const alcoholFree = d.collections.some((t) => /non-alcoholic/i.test(t.label));
  faqs.push({
    topic: 'alcohol',
    q: `What alcohol is in ${name}?`,
    html: booze.length
      ? booze.length === 1
        ? `The only alcohol in ${name} is ${nameOf(booze[0])}: ${measure(booze[0]) ?? 'see the recipe card for how much'}.`
        : `${cap(name)} contains ${list(booze.map(withMeasure))}.`
      : alcoholFree ? `None. ${cap(name)} is alcohol-free.` : null,
  });

  faqs.push({ topic: 'technique', q: `Is ${name} shaken or stirred?`, html: techniqueAnswer(c, how, method) });
  if (how === 'shaken') faqs.push({ topic: 'shaker', q: `Can I make ${name} without a cocktail shaker?`, html: shakerAnswer(c, method) });

  faqs.push({ topic: 'glass', q: `What glass is ${name} served in?`, html: `Serve ${name} in ${glassLink(d.glass)}.` });

  const g = garnish(c);
  faqs.push({ topic: 'garnish', q: `How do you garnish ${name}?`, html: g ? `Garnish ${name} with ${g}.` : null });

  faqs.push({ topic: 'batch', q: `How do I make ${name} for a group?`, html: batchAnswer(c, how) });

  // The questions the ingredients and equipment sections ask, unless the article's FAQs already ask
  // them. The answers link to the snippets, or to the article's own section where it has one.
  const needFaqs: { q: string; html: string }[] = [];
  const { article } = needs;
  if (needs.ingredients.length && !covered(/ingredients do (you|i) need/i)) {
    const garnishes = d.ingredients.filter((i) => i.garnish).map(withMeasure);
    const more = article.ingredients
      ? `There’s more about <a href="#${article.ingredients}">the ingredients</a> above.`
      : `There’s more about ${list(needs.ingredients.map(needLink))} above.`;
    needFaqs.push({
      q: needQuestion('Ingredients', d.title),
      html: `To make ${name}, you need ${list(main.map(withMeasure))}${garnishes.length ? `, plus ${list(garnishes)} to garnish` : ''}. ${more}`,
    });
  }
  if (needs.equipment.length && !covered(/equipment do (you|i) need|need any equipment/i)) {
    const link = (s: Snippet) => (article.equipment ? snippetName(s) : needLink(s));
    const kit = needs.equipment.filter((s) => s.id !== 'dry-shake');
    const dryShake = kit.length < needs.equipment.length;
    const items = kit.map((s) => `${vowel(snippetName(s)) ? 'an' : 'a'} ${link(s)}`);
    needFaqs.push({
      q: needQuestion('Equipment', d.title),
      html: [
        items.length ? `You’ll need ${list(items)}.` : '',
        dryShake ? `The method starts with a ${article.equipment ? 'dry shake' : '<a href="#need-dry-shake">dry shake</a>'}: shaking without ice.` : '',
        article.equipment ? `There’s more about <a href="#${article.equipment}">the equipment</a> above.` : '',
      ].filter(Boolean).join(' '),
    });
  }

  // The ingredients question answers "What's in…?" too, so that one's left out.
  const askedIngredients = needFaqs.some((f) => f.q.startsWith('What Ingredients'));
  const generated = faqs
    .filter((f): f is typeof f & { html: string } => f.html != null && !covered(topics[f.topic]))
    .filter((f) => !(f.topic === 'ingredients' && askedIngredients))
    .map(({ q, html }) => ({ q, html, text: plain(html) }));
  const own = (d.faqs ?? []).map(({ q, a }) => ({ q, html: a, text: plain(a) }));
  return [...own, ...needFaqs.map(({ q, html }) => ({ q, html, text: plain(html) })), ...generated];
}
