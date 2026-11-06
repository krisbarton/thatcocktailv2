/**
 * The snippets from WordPress (one component each in src/components/snippets/) and which recipes
 * they belong on. A snippet is an explainer, usually with a product pick, for an ingredient
 * ("Vermouth") or a bit of kit ("Jigger").
 *
 * A recipe page shows two sections before the recipe card, "What Ingredients do you need to make…?"
 * and "What Equipment do you need to make…?", with every snippet its recipe mentions: ingredients in
 * the order the recipe lists them, equipment in the order the method uses it. Where the recipe's
 * article already has its own ingredients or equipment section, that one stays and ours is left
 * out. The FAQs ask and answer the same questions (cocktail-faqs.ts). `kind: null` snippets are
 * never added automatically.
 */
import type { Cocktail } from './cocktails';
import Amaretto from '../components/snippets/Amaretto.astro';
import AngosturaBitters from '../components/snippets/AngosturaBitters.astro';
import Aperol from '../components/snippets/Aperol.astro';
import Aquafaba from '../components/snippets/Aquafaba.astro';
import BarSpoon from '../components/snippets/BarSpoon.astro';
import BlueCuracao from '../components/snippets/BlueCuracao.astro';
import Bourbon from '../components/snippets/Bourbon.astro';
import Chambord from '../components/snippets/Chambord.astro';
import ChampagneFlute from '../components/snippets/ChampagneFlute.astro';
import CherryBrandy from '../components/snippets/CherryBrandy.astro';
import CocktailGlass from '../components/snippets/CocktailGlass.astro';
import CocktailShaker from '../components/snippets/CocktailShaker.astro';
import CoffeeLiqueur from '../components/snippets/CoffeeLiqueur.astro';
import Cognac from '../components/snippets/Cognac.astro';
import Cointreau from '../components/snippets/Cointreau.astro';
import CranberryJuice from '../components/snippets/CranberryJuice.astro';
import CremeDeCassis from '../components/snippets/CremeDeCassis.astro';
import DarkRum from '../components/snippets/DarkRum.astro';
import DemeraraRum from '../components/snippets/DemeraraRum.astro';
import DryShake from '../components/snippets/DryShake.astro';
import Falernum from '../components/snippets/Falernum.astro';
import Gin from '../components/snippets/Gin.astro';
import GingerAleVGingerBeer from '../components/snippets/GingerAleVGingerBeer.astro';
import GoldenRum from '../components/snippets/GoldenRum.astro';
import Grenadine from '../components/snippets/Grenadine.astro';
import HighballGlass from '../components/snippets/HighballGlass.astro';
import Jigger from '../components/snippets/Jigger.astro';
import JulepCup from '../components/snippets/JulepCup.astro';
import LemonSqueezer from '../components/snippets/LemonSqueezer.astro';
import LilletBlanc from '../components/snippets/LilletBlanc.astro';
import Malibu from '../components/snippets/Malibu.astro';
import MaraschinoCherries from '../components/snippets/MaraschinoCherries.astro';
import MixingGlass from '../components/snippets/MixingGlass.astro';
import OldFashionedGlass from '../components/snippets/OldFashionedGlass.astro';
import OrangeBitters from '../components/snippets/OrangeBitters.astro';
import OrangeCuracao from '../components/snippets/OrangeCuracao.astro';
import OrangeJuice from '../components/snippets/OrangeJuice.astro';
import OrgeatSyrup from '../components/snippets/OrgeatSyrup.astro';
import PassionFruitJuice from '../components/snippets/PassionFruitJuice.astro';
import Passoa from '../components/snippets/Passoa.astro';
import PeachSchnapps from '../components/snippets/PeachSchnapps.astro';
import Pernod from '../components/snippets/Pernod.astro';
import PineappleJuice from '../components/snippets/PineappleJuice.astro';
import Prosecco from '../components/snippets/Prosecco.astro';
import ScotchWhisky from '../components/snippets/ScotchWhisky.astro';
import ShortDrinks from '../components/snippets/ShortDrinks.astro';
import ShotGlasses from '../components/snippets/ShotGlasses.astro';
import SignOff from '../components/snippets/SignOff.astro';
import SimpleSyrup from '../components/snippets/SimpleSyrup.astro';
import SodaWater from '../components/snippets/SodaWater.astro';
import SouthernComfort from '../components/snippets/SouthernComfort.astro';
import SpicedRum from '../components/snippets/SpicedRum.astro';
import Strainer from '../components/snippets/Strainer.astro';
import Tequila from '../components/snippets/Tequila.astro';
import TripleSec from '../components/snippets/TripleSec.astro';
import VanillaSyrup from '../components/snippets/VanillaSyrup.astro';
import Vermouth from '../components/snippets/Vermouth.astro';
import Vodka from '../components/snippets/Vodka.astro';
import WhiteRum from '../components/snippets/WhiteRum.astro';
import WineGlasses from '../components/snippets/WineGlasses.astro';
import YellowChartreuseLiqueur from '../components/snippets/YellowChartreuseLiqueur.astro';

export interface Snippet {
  id: string;
  /** Shown as the snippet's heading. */
  title: string;
  /** Mid-sentence, singular, in the FAQ answers. Defaults to the title in lowercase. */
  name?: string;
  /** What the recipe has to mention: an ingredient, or equipment in the method. */
  kind: 'ingredient' | 'equipment' | null;
  match?: RegExp;
  Component: typeof Vermouth;
}

export const snippets: Snippet[] = [
  { id: 'amaretto', title: 'Amaretto', kind: 'ingredient', match: /amaretto/i, Component: Amaretto },
  { id: 'angostura-bitters', title: 'Angostura Bitters', name: 'Angostura bitters', kind: 'ingredient', match: /angostura/i, Component: AngosturaBitters },
  { id: 'aperol', title: 'Aperol', name: 'Aperol', kind: 'ingredient', match: /aperol/i, Component: Aperol },
  { id: 'aquafaba', title: 'Aquafaba', kind: 'ingredient', match: /aquafaba/i, Component: Aquafaba },
  { id: 'bar-spoon', title: 'Bar Spoon', kind: 'equipment', match: /bar ?spoon/i, Component: BarSpoon },
  { id: 'blue-curacao', title: 'Blue Curaçao', name: 'blue curaçao', kind: 'ingredient', match: /blue cura[cç]ao/i, Component: BlueCuracao },
  { id: 'bourbon', title: 'Bourbon', kind: 'ingredient', match: /bourbon/i, Component: Bourbon },
  { id: 'chambord', title: 'Chambord', name: 'Chambord', kind: 'ingredient', match: /chambord/i, Component: Chambord },
  { id: 'champagne-flute', title: 'Champagne Flute', kind: 'equipment', match: /champagne flute/i, Component: ChampagneFlute },
  { id: 'cherry-brandy', title: 'Cherry Brandy', kind: 'ingredient', match: /cherry brandy/i, Component: CherryBrandy },
  { id: 'cocktail-glass', title: 'Cocktail Glass', kind: 'equipment', match: /cocktail glass|martini glass/i, Component: CocktailGlass },
  { id: 'cocktail-shaker', title: 'Cocktail Shaker', kind: 'equipment', match: /shaker/i, Component: CocktailShaker },
  { id: 'coffee-liqueur', title: 'Coffee Liqueur', kind: 'ingredient', match: /coffee liqueur|kahl[uú]a/i, Component: CoffeeLiqueur },
  { id: 'cognac', title: 'Cognac', kind: 'ingredient', match: /cognac/i, Component: Cognac },
  { id: 'cointreau', title: 'Cointreau', name: 'Cointreau', kind: 'ingredient', match: /cointreau/i, Component: Cointreau },
  { id: 'cranberry-juice', title: 'Cranberry Juice', kind: 'ingredient', match: /cranberry juice/i, Component: CranberryJuice },
  { id: 'creme-de-cassis', title: 'Crème de Cassis', name: 'crème de cassis', kind: 'ingredient', match: /cr[eè]me de cassis/i, Component: CremeDeCassis },
  { id: 'dark-rum', title: 'Dark Rum', kind: 'ingredient', match: /dark rum/i, Component: DarkRum },
  { id: 'demerara-rum', title: 'Demerara Rum', kind: 'ingredient', match: /demerara rum/i, Component: DemeraraRum },
  { id: 'dry-shake', title: 'Dry Shake', kind: 'equipment', match: /dry shake|dry-shake/i, Component: DryShake },
  { id: 'falernum', title: 'Falernum', kind: 'ingredient', match: /falernum/i, Component: Falernum },
  { id: 'gin', title: 'Gin', kind: 'ingredient', match: /(?<!sloe )\bgin\b/i, Component: Gin },
  { id: 'ginger-ale-v-ginger-beer', title: 'Ginger Ale vs Ginger Beer', name: 'ginger ale and ginger beer', kind: 'ingredient', match: /ginger (ale|beer)/i, Component: GingerAleVGingerBeer },
  { id: 'golden-rum', title: 'Golden Rum', kind: 'ingredient', match: /gold(en)? rum/i, Component: GoldenRum },
  { id: 'grenadine', title: 'Grenadine', kind: 'ingredient', match: /grenadine/i, Component: Grenadine },
  { id: 'highball-glass', title: 'Highball Glass', kind: 'equipment', match: /highball/i, Component: HighballGlass },
  { id: 'jigger', title: 'Jigger', kind: 'equipment', match: /jigger/i, Component: Jigger },
  { id: 'julep-cup', title: 'Julep Cup', kind: 'equipment', match: /julep cup/i, Component: JulepCup },
  { id: 'lemon-squeezer', title: 'Lemon Squeezer', kind: 'equipment', match: /(lemon|lime|citrus) squeezer|juicer/i, Component: LemonSqueezer },
  { id: 'lillet-blanc', title: 'Lillet Blanc', name: 'Lillet Blanc', kind: 'ingredient', match: /lillet/i, Component: LilletBlanc },
  { id: 'malibu', title: 'Malibu', name: 'Malibu', kind: 'ingredient', match: /malibu|coconut rum/i, Component: Malibu },
  { id: 'maraschino-cherries', title: 'Maraschino Cherries', kind: 'ingredient', match: /maraschino cherr/i, Component: MaraschinoCherries },
  { id: 'mixing-glass', title: 'Mixing Glass', kind: 'equipment', match: /mixing glass/i, Component: MixingGlass },
  { id: 'old-fashioned-glass', title: 'Old Fashioned Glass', name: 'Old Fashioned glass', kind: 'equipment', match: /old fashioned glass|rocks glass/i, Component: OldFashionedGlass },
  { id: 'orange-bitters', title: 'Orange Bitters', kind: 'ingredient', match: /orange bitters/i, Component: OrangeBitters },
  { id: 'orange-curacao', title: 'Orange Curaçao', name: 'orange curaçao', kind: 'ingredient', match: /orange cura[cç]ao/i, Component: OrangeCuracao },
  { id: 'orange-juice', title: 'Orange Juice', kind: 'ingredient', match: /orange juice/i, Component: OrangeJuice },
  { id: 'orgeat-syrup', title: 'Orgeat Syrup', kind: 'ingredient', match: /orgeat/i, Component: OrgeatSyrup },
  { id: 'passion-fruit-juice', title: 'Passion Fruit Juice', kind: 'ingredient', match: /passion ?fruit juice/i, Component: PassionFruitJuice },
  { id: 'passoa', title: 'Passoa', name: 'Passoa', kind: 'ingredient', match: /passoa/i, Component: Passoa },
  { id: 'peach-schnapps', title: 'Peach Schnapps', kind: 'ingredient', match: /peach schnapps/i, Component: PeachSchnapps },
  { id: 'pernod', title: 'Pernod', name: 'Pernod', kind: 'ingredient', match: /pernod/i, Component: Pernod },
  { id: 'pineapple-juice', title: 'Pineapple Juice', kind: 'ingredient', match: /pineapple juice/i, Component: PineappleJuice },
  { id: 'prosecco', title: 'Prosecco', kind: 'ingredient', match: /prosecco/i, Component: Prosecco },
  { id: 'scotch-whisky', title: 'Scotch Whisky', name: 'Scotch whisky', kind: 'ingredient', match: /scotch/i, Component: ScotchWhisky },
  { id: 'short-drinks', title: 'Short Drinks', kind: null, Component: ShortDrinks },
  { id: 'shot-glasses', title: 'Shot Glasses', name: 'shot glass', kind: 'equipment', match: /shot glass/i, Component: ShotGlasses },
  { id: 'sign-off', title: 'Want More Cocktail Recipes?', kind: null, Component: SignOff },
  { id: 'simple-syrup', title: 'Simple Syrup', kind: 'ingredient', match: /simple syrup|sugar syrup/i, Component: SimpleSyrup },
  { id: 'soda-water', title: 'Soda Water', kind: 'ingredient', match: /soda water|club soda/i, Component: SodaWater },
  { id: 'southern-comfort', title: 'Southern Comfort', name: 'Southern Comfort', kind: 'ingredient', match: /southern comfort/i, Component: SouthernComfort },
  { id: 'spiced-rum', title: 'Spiced Rum', kind: 'ingredient', match: /spiced rum/i, Component: SpicedRum },
  { id: 'strainer', title: 'Hawthorne Strainer', name: 'Hawthorne strainer', kind: 'equipment', match: /strainer/i, Component: Strainer },
  { id: 'tequila', title: 'Tequila', kind: 'ingredient', match: /tequila/i, Component: Tequila },
  { id: 'triple-sec', title: 'Triple Sec', kind: 'ingredient', match: /triple sec/i, Component: TripleSec },
  { id: 'vanilla-syrup', title: 'Vanilla Syrup', kind: 'ingredient', match: /vanilla syrup/i, Component: VanillaSyrup },
  { id: 'vermouth', title: 'Vermouth', kind: 'ingredient', match: /vermouth/i, Component: Vermouth },
  { id: 'vodka', title: 'Vodka', kind: 'ingredient', match: /\bvodka\b/i, Component: Vodka },
  { id: 'white-rum', title: 'White Rum', kind: 'ingredient', match: /white rum|light rum/i, Component: WhiteRum },
  { id: 'wine-glasses', title: 'Wine Glasses', name: 'wine glass', kind: 'equipment', match: /wine glass/i, Component: WineGlasses },
  { id: 'yellow-chartreuse-liqueur', title: 'Yellow Chartreuse', name: 'yellow Chartreuse', kind: 'ingredient', match: /yellow chartreuse/i, Component: YellowChartreuseLiqueur },
];

const plain = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ');

/** The snippet's name mid-sentence and singular: "vermouth", "Old Fashioned glass". */
export const snippetName = (s: Snippet) => s.name ?? s.title.toLowerCase();

export interface RecipeNeeds {
  /** For the recipe's ingredients, in the order it lists them. */
  ingredients: Snippet[];
  /** For the equipment its method uses, in the order it's used. */
  equipment: Snippet[];
  /**
   * The id of the article's own ingredients or equipment section, where it has one (most of the
   * WordPress articles did, with these same snippets in). The page shows that instead.
   */
  article: { ingredients?: string; equipment?: string };
}

/** A heading from the recipe's article, as render() gives them. */
export interface ArticleHeading {
  slug: string;
  text: string;
}

/** The article's own "What Ingredients…" and "What Equipment…" (or "The kit you need…") sections. */
function articleSections(headings: ArticleHeading[]): RecipeNeeds['article'] {
  return {
    ingredients: headings.find((h) => /\bingredients\b/i.test(h.text))?.slug,
    equipment: headings.find((h) => /\bequipment\b|\bkit\b/i.test(h.text))?.slug,
  };
}

/** The snippets a recipe mentions, each only once. `headings` are its article's, from render(). */
export function recipeNeeds(c: Cocktail, headings: ArticleHeading[] = []): RecipeNeeds {
  const find = (texts: string[], kind: Snippet['kind']) => {
    const found: Snippet[] = [];
    for (const text of texts) {
      // Within one ingredient or step, in the order they come up.
      snippets
        .filter((s) => s.kind === kind && !found.includes(s))
        .map((s) => ({ s, at: s.match ? text.search(s.match) : -1 }))
        .filter(({ at }) => at >= 0)
        .sort((a, b) => a.at - b.at)
        .forEach(({ s }) => found.push(s));
    }
    return found;
  };
  return {
    ingredients: find(c.data.ingredients.map((i) => plain(`${i.item ?? ''} ${i.note ?? ''}`)), 'ingredient'),
    equipment: find(c.data.method.map(plain), 'equipment'),
    article: articleSections(headings),
  };
}
