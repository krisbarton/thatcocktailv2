/**
 * Matching for the RecipeFilter search box. Runs in the browser; kept apart from the page
 * so it can be tested on its own. Recipe text comes from searchText() in ./cocktails.ts.
 */

/** Same clean-up as searchText(): no accents or punctuation, so "creme" finds "crème". */
export const normalise = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ');

/**
 * Build a matcher over every recipe's search text. The returned function takes what's been
 * typed and returns a test for one recipe's text.
 *
 * - The word still being typed matches the start of any word ("el" finds El Presidente and
 *   Electric Iced Tea), so each extra letter can only narrow the list.
 * - Once a word is finished (a space or another word follows) and it's a whole word somewhere
 *   ("gin"), it has to match that word, so "gin lime" doesn't also find ginger.
 * - Plurals find singulars: "limes" finds lime.
 */
export function createSearch(texts: string[]) {
  const vocab = new Set(texts.flatMap((t) => t.split(' ')));

  const singulars = (w: string) => [w.replace(/s$/, ''), w.replace(/es$/, '')].filter((f) => f !== w && vocab.has(f));
  const isForm = (t: string, f: string) => t === f || t === `${f}s` || t === `${f}es`;

  const typingMatcher = (w: string) => {
    const forms = singulars(w);
    return (t: string) => t.startsWith(w) || forms.some((f) => isForm(t, f));
  };
  const wordMatcher = (w: string) => {
    const forms = [w, ...singulars(w)].filter((f) => vocab.has(f));
    return forms.length ? (t: string) => forms.some((f) => isForm(t, f)) : typingMatcher(w);
  };

  return (typed: string) => {
    const query = normalise(typed);
    const words = query.split(' ').filter(Boolean);
    const typing = !query.endsWith(' ');
    const matchers = words.map((w, i) => (typing && i === words.length - 1 ? typingMatcher(w) : wordMatcher(w)));
    return (text: string) => {
      const tokens = text.split(' ');
      return matchers.every((m) => tokens.some(m));
    };
  };
}
