# Cocktail migration notes

The 253 cocktails from WordPress are in `src/content/cocktails/`. A few things need your eye.

## Recipes without their own photo (109)

On WordPress these all show the same generic placeholder (a pink hurricane-glass drink). Here they show a neon placeholder with the cocktail name until a real photo is added. To add one, give the recipe an `image` block in its frontmatter (see `americano.md`).

- [Dirty Shirley Temple](/cocktails/dirty-shirley-temple/)
- [Shirley Temple](/cocktails/shirley-temple/)
- [Monkey Gland](/cocktails/monkey-gland-2/)
- [Paradise](/cocktails/paradise/)
- [Cuba Libre](/cocktails/cuba-libre/)
- [Sidecar](/cocktails/sidecar/)
- [Manhattan](/cocktails/manhattan/)
- [Peach Daiquiri](/cocktails/peach-daiquiri/)
- [Colonel’s Coffee](/cocktails/colonels-coffee/)
- [Bourbon Apple Punch](/cocktails/bourbon-apple-punch/)
- [Bourbon and Ginger Punch](/cocktails/bourbon-and-ginger-punch/)
- [Bourbon Daisy](/cocktails/bourbon-daisy/)
- [Bourbon Collins](/cocktails/bourbon-collins/)
- [Derby](/cocktails/derby/)
- [Scofflaw](/cocktails/scofflaw/)
- [Whiskey Sour](/cocktails/whiskey-sour/)
- [Boulevardier](/cocktails/boulevardier/)
- [Tom Collins](/cocktails/tom-collins/)
- [Singapore Sling](/cocktails/singapore-sling/)
- [Frostbite](/cocktails/frostbite/)
- [Berry White](/cocktails/berry-white/)
- [Envy](/cocktails/envy/)
- [Blue Margarita](/cocktails/blue-margarita/)
- [Strawberry Daiquiri](/cocktails/strawberry-daiquiri/)
- [Daiquri](/cocktails/daiquri/)
- [Hairy Sunrise](/cocktails/hairy-sunrise/)
- [Poinsettia](/cocktails/poinsettia/)
- [Lynchburg Lemonade](/cocktails/lynchburg-lemonade/)
- [Between the Sheets](/cocktails/between-the-sheets/)
- [Golden Dream](/cocktails/golden-dream/)
- [Mai Tai Mix Up](/cocktails/mai-tai-mix-up/)
- [Fluffy Duck](/cocktails/fluffy-duck/)
- [Flirtini](/cocktails/flirtini/)
- [Malibu Ginger Apple](/cocktails/malibu-ginger-apple/)
- [Anejo Highball](/cocktails/anejo-highball/)
- [Ginger Beer Mojito](/cocktails/ginger-beer-mojito/)
- [Cherry Sparkler](/cocktails/cherry-sparkler/)
- [Pineapple Ginger Punch](/cocktails/pineapple-ginger-punch/)
- [Ginger Blood Orange](/cocktails/ginger-blood-orange/)
- [Ginger Apple Cooler](/cocktails/ginger-apple-cooler/)
- [Irish Ale](/cocktails/irish-ale/)
- [Bocci Ball](/cocktails/bocci-ball/)
- [Fuzzy Navel](/cocktails/fuzzy-navel/)
- [Dracula’s Bite](/cocktails/draculas-bite/)
- [Valencia](/cocktails/valencia/)
- [Ward 8](/cocktails/ward-8/)
- [Desert Cooler](/cocktails/desert-cooler/)
- [Bermuda](/cocktails/bermuda/)
- [Mimosa](/cocktails/mimosa/)
- [Bucks Fizz](/cocktails/bucks-fizz/)
- [A Day at the Beach](/cocktails/a-day-at-the-beach/)
- [Miami Spice](/cocktails/miami-spice/)
- [Bolo](/cocktails/bolo/)
- [Robson](/cocktails/robson/)
- [The Roosevelt](/cocktails/the-roosevelt/)
- [Scorpion](/cocktails/scorpion/)
- [Tequila Sunrise](/cocktails/tequila-sunrise/)
- [Sunflower Highball](/cocktails/sunflower-highball/)
- [Orange Crush](/cocktails/orange-crush/)
- [Mango Breeze](/cocktails/mango-breeze/)
- [Raspberry Lift Off](/cocktails/raspberry-lift-off/)
- [The Mandarin Madras](/cocktails/the-mandarin-madras/)
- [The Madras](/cocktails/the-madras/)
- [Citrus Blast](/cocktails/citrus-blast/)
- [A Veranda Moment](/cocktails/a-veranda-moment/)
- [Blue on Blue](/cocktails/blue-on-blue/)
- [Fruit Tingle](/cocktails/fruit-tingle/)
- [Vodka Watermelon](/cocktails/vodka-watermelon/)
- [The Red Zone](/cocktails/the-red-zone/)
- [Ginger Apple](/cocktails/ginger-apple/)
- [Hawaiian Sea Breeze](/cocktails/hawaiian-sea-breeze/)
- [Kamikaze](/cocktails/kamikaze/)
- [Sex on the Beach](/cocktails/sex-on-the-beach/)
- [Sea Breeze](/cocktails/sea-breeze/)
- [Harvey Wallbanger](/cocktails/harvey-wallbanger/)
- [Vodka Bellini](/cocktails/vodka-bellini/)
- [White Russian](/cocktails/white-russian/)
- [Cosmopolitan](/cocktails/cosmopolitan/)
- [Bloody Mary](/cocktails/bloody-mary/)
- [Cape Cod](/cocktails/cape-cod/)
- [Raspberry Sparkler](/cocktails/raspberry-sparkler/)
- [Black Russian](/cocktails/black-russian/)
- [Screwdriver](/cocktails/screwdriver/)
- [Agent Orange](/cocktails/agent-orange/)
- [Honeybuckle](/cocktails/honeybuckle/)
- [Carribean Joy](/cocktails/carribean-joy/)
- [Che’s Revolution](/cocktails/ches-revolution/)
- [Madison Avenue](/cocktails/madison-avenue/)
- [My Fair Lady](/cocktails/my-fair-lady/)
- [Gaugin](/cocktails/gaugin/)
- [245 West Indies Special](/cocktails/245-west-indies-special/)
- [Pineapple Fizz](/cocktails/pineapple-fizz/)
- [Rum Fizz](/cocktails/rum-fizz/)
- [Summer Seen](/cocktails/summer-seen/)
- [Kentucky Iced Tea](/cocktails/kentucky-iced-tea/)
- [Yo Ho](/cocktails/yo-ho/)
- [Coctel Nacional](/cocktails/coctel-nacional/)
- [Nacional De Cuba](/cocktails/nacional-de-cuba/)
- [Yellowhammer](/cocktails/yellowhammer/)
- [White Madras](/cocktails/white-madras/)
- [White Rum, Pineapple and Soda](/cocktails/white-rum-pineapple-and-soda/)
- [Strawberry Mojito](/cocktails/strawberry-mojito/)
- [Grapefruit and Blueberry Mojito](/cocktails/grapefruit-and-blueberry-mojito/)
- [Apple Mojito](/cocktails/apple-mojito/)
- [Mojito](/cocktails/mojito/)
- [Coconut Breeze](/cocktails/coconut-breeze/)
- [Raspberry White Rum Caipirinha](/cocktails/raspberry-white-rum-caipirinha/)
- [President](/cocktails/president/)
- [White Cuba Libre](/cocktails/white-cuba-libre/)

## Photos to replace

These have a photo, but it doesn't suit a square recipe card. All three are in the homepage's "Most popular" section.

- [Rhett Butler Cocktail](/cocktails/rhett-butler-cocktail/): the photo is a WordPress title card ("How to Make a Rhett Butler Cocktail"), so the square crop cuts the title text off.
- [Blue Dolphin Martini](/cocktails/blue-dolphin-martini/): uses the [Ocean Drive](/cocktails/ocean-drive/) photo, as on WordPress, so the two cards look identical.
- [Barbados Sunrise](/cocktails/barbados-sunrise/): uses a copy of the [Sex in the Driveway](/cocktails/sex-in-the-driveway/) photo (`sex-in-the-driveway-recipe-1`), so the two look the same.
- [Blue Hawaii](/cocktails/blue-hawaii/) and [Blue Lagoon](/cocktails/blue-lagoon/): both use `blue-Hawaiian`.
- [Fluffy Duck](/cocktails/fluffy-duck/): no photo yet (also in the list above), so it shows the neon placeholder.

## Alcohol recommendations to check

Found while migrating [/alcohol-recommendations/](/alcohol-recommendations/) on 23 October 2026.

- **No shop link**: Malibu had an empty link on WordPress, and Galliano linked to `/affiliates/galliano/`, a "Coming Soon" page. Both show "Not available to buy through us right now" until they get a link in `src/data/alcohol.ts`. De Kuyper Cherry Brandy also linked to a "Coming Soon" page (`/affiliates/cherry-brandy/`); since 2 November 2026 it uses https://amzn.to/4iD8IDx, as does the cherry brandy box in the Xanadu recipe.
- **Broken US links, dropped**: Captain Morgan's US link was `https://amzn.to/3VyIcwN-Amazon` (goes to the amazon.com homepage), and Absolut Citron's US box was a Smirnoff Vodka link under the Citron photo. US visitors get the UK link for both.
- **Absinthe had no name**: the box was blank. The link goes to "Fee NV Absinthe Verte" on Amazon UK and the photo is `envy-absinthe.jpg`, so it's called **La Fée NV Absinthe**. Check that's the bottle you meant.
- **Products with only a UK link**: the flavoured vodkas, Captain Morgan, Red Leg, Bushmills, Jim Beam Rye, Courvoisier, Teichenné, Campari, Galliano, Crème de Cassis, Bénédictine, Taylor's, Westons and the absinthe. US visitors see Amazon UK links for these, as they would have if WordPress's country lookup failed.
- **Prices removed**: the older Amazon boxes (Smirnoff Green Apple and Raspberry, Jim Beam Rye, Teichenné, Taylor's Port) showed prices from years ago (e.g. "Price: £24.13"), so they're gone.
- **Order**: the 31 sections are grouped into spirits, liqueurs, wine & cider, and bitters. Orange curaçao now sits next to blue curaçao, and vermouth is under wine.
- **Names and spellings fixed**: Absolute Lime → Absolut Lime, Disorano → Disaronno, Luxado → Luxardo, Kahula → Kahlúa, Agostura/Angustura → Angostura, favouriate → favourite. "The Pornstar Martini" linked to the Pornstar Martini Mocktail; it now goes to the Pornstar Martini.
- **Links to recipes**: links to the old how-to articles (Margarita, Blue Hawaii, White Russian, Harvey Wallbanger, Old Fashioned, Pornstar Martini) now go to the recipe pages. Links to articles that aren't migrated yet (the What is…? guides, the vodka comparison, Is Smirnoff good vodka?, and the "cocktails with" lists) keep their WordPress URLs.

## Articles

### What is triple sec? (23 October 2026)

- **Unfinished sentence removed**: "However, other reasonings range from it" ended there on WordPress.
- **Recipes**: the article copied out the Kamikaze, Long Island Iced Tea, Cosmopolitan and Appletini recipes, and they didn't match the recipe pages (e.g. 50ml lime juice in the Long Island). They're now recipe cards linking to those pages. The "ThatCocktail Mimosa" has triple sec but the Mimosa recipe page doesn't, so it stays in the article as a short recipe.
- **Duplicate and stale boxes**: the second Cointreau box (with a 2019 price) is gone; the one at the top uses the same Cointreau as /alcohol-recommendations/, so US visitors get the US link. Prices are gone from the glasses boxes too.
- **Links**: the Combier website links (/history/ and /products/original-combier/) are 404s, so it links to combier.fr instead. The Alcademics source is a 404 and alcoholvolume.com now redirects to an unrelated site, so both are gone. "40 quick and easy cocktails with vodka" pointed at /cocktail-recipes-with-vodka/, which isn't migrated; it now goes to /vodka-cocktails/. The Long Island Iced Tea article link goes to the recipe page.
- **Closing link**: WordPress ended on the generic recipe archive. It now ends with "Want more triple sec cocktails?", linking to a search for triple sec (40 recipes). There's no triple sec collection page yet: /cocktails-with-triple-sec/ is a WordPress article that isn't migrated.
- **Search**: searching "triple sec" now also finds recipes that list Cointreau (`kinds` in src/lib/cocktails.ts).

### What is blue curaçao? (23 October 2026)

- **Recipes**: the seven copied-out recipes (Blue Lagoon, Fruit Tingle, Barbados Sunrise, Summer Seen, Mermaid Mule, Blue Hawaii, Blue on Blue) are now recipe cards. Their measures didn't match the recipe pages either.
- **Prices removed** from the five brand boxes and the glasses and mug boxes. Bols uses the /alcohol-recommendations/ pick, so US visitors get the US link.
- **Links**: "The ultimate Moscow Mule recipe" goes to the recipe page instead of the /moscow-mule/ article, and the vodka link goes to /vodka-cocktails/ (as on the triple sec article). Added a link to What is triple sec?.
- **Fixes**: "Larah fruit", "Sevilla orange", "just how brands", "not mention" and "CuracaoLiqueurl.com". The WordPress title said "Here's all you need to know" twice.
- **Closing link**: a search for blue curaçao (20 recipes), as /cocktails-with-blue-curacao/ isn't migrated.
- **Same photo**: the Blue Lagoon and Blue Hawaii recipes both use `/wp-content/uploads/2020/05/blue-Hawaiian`, so their cards look identical.

### What is Campari? (23 October 2026)

- **History fixed**: WordPress said Gaspare started selling his bitters "in 1840", which clashes with him being 14 in 1842. Wikipedia says the 1840s, so that's what it says now. It also said the Bass Bar was "in his hometown of Cassolnovo"; Wikipedia puts the bar in Castelnuovo, so the article now just calls it a local bar.
- **Recipes**: the Negroni, Americano and Dracula's Bite are now recipe cards, and the Boulevardier is added. There's no Campari Spritz recipe page, so that one stays in the article as a short recipe, with a link to the Aperol Spritz.
- **Shaker set**: WordPress linked an older "Cocktail Shaker Set" (https://amzn.to/2ZPLmTF). It now uses the Autumndeer set from the cocktail shaker comparison, like the other articles. Prices are gone from all the kit boxes.
- **Sources**: the Chowhound thread about carmine is a 404, so the carmine claim now links to Wikipedia, which says the same. The abarabove.com link now redirects to an Aperol vs Campari article, so it's gone. The Telegraph article blocks automated checks (402) but is linked as before.
- **Links**: "14 easy cocktails with gin" (/easy-cocktails-with-gin/, not migrated) now goes to /gin-cocktails/.
- **Closing link**: only four recipes use Campari, so the article ends on the bitter cocktails collection (49 recipes) instead of a search.

### What is peach schnapps? (23 October 2026)

- **Recipes**: the Woo Woo, Sex on the Beach, Fuzzy Navel and Sex in the Driveway are now recipe cards.
- **Wrong picture**: the highball glasses box under the Woo Woo showed the Smirnoff bottle and used its own link (https://amzn.to/3vdwnPO). It's now the same highball glasses box as the other articles, after the four recipes, since they all use a highball glass.
- **In short**: WordPress called it "a strong alcoholic drink", but the same article says it's 15–20% alcohol, so the summary now says it's sweet and 15–20%.
- **Fixes**: "varaint", "far the most popular", "sum in all up", "an flavoured", "Peach Schnapps by mixing", and "Sex on the Driveway" in the summary.
- **Closing link**: /peach-schnapps-cocktails/ (16 recipes), counted the same way as that page.
- **Sources**: The Spruce Eats and the New York Times block automated checks (403) but are linked as before.

### What is sloe gin? (23 October 2026)

- **Recipes**: the Sloe Gin Fizz, Sloe Comfortable Screw and Alabama Slammer are recipe cards. The Charlie Chaplin and the Sloe Gin Negroni have no recipe pages, so they stay in the article as short recipes.
- **Sloe Gin Fizz doesn't match**: the article's version was sloe gin, lemon juice, simple syrup and champagne; the recipe page is sloe gin, sour mix and tonic water. The article now describes it loosely ("sloe gin, sour citrus and bubbles") and links to the page. Decide which recipe is right.
- **Dates**: WordPress put the Enclosure Acts in the 17th century; most were in the 18th and 19th, and the poem it quotes is from 1717, so the century is gone.
- **Stale numbers removed**: prices, Amazon star ratings and review counts ("5 stars out of 5, with 210 reviews"). The reviewer quotes are kept, shortened. The gin sales prediction now says it was made in 2018.
- **Product boxes**: Gordon's (the /alcohol-recommendations/ pick, with the US link), Greenalls, Sipsmith and Ableforth's. WordPress called the last one "Ableforth's Bathtub Gin"; it's the sloe gin.
- **Fixes**: "Gib botanicals", "Centruy", "palette" (palate), "Iron Bru", "Lemon Sherbert".
- **Closing link**: a search for sloe gin (7 recipes). /gin-cocktails/ deliberately leaves sloe gin out, so it isn't the target.
- **Sources**: The Kitchn and The Drinks Business block automated checks (403) but are linked as before.

### What is gold rum? (23 October 2026)

- **Wrong fact fixed**: WordPress said "Spiced Rum is actually based on Spiced Rum". Wikipedia says spiced rums are often based on light rums, so that's what it says now.
- **Shop link added later**: the Mount Gay box linked to /affiliates/golden-rum/, a "Coming Soon" page, so at first it had no Buy button. Since 2 November 2026 it uses https://amzn.to/3PlTaDO (Mount Gay Eclipse on Amazon UK), as do the golden rum links in the Mai Tai, Zombie and Bahama Mama recipes.
- **Recipes**: the Mai Tai, Zombie, Bahama Mama and Old Cuban (every recipe with gold rum) are recipe cards.
- **Closing link**: /rum-cocktails/ (72 recipes), counted the same way as that page.
- **Fixes**: "a more flavour", "the additional of caramel", "pefectly", "it's golden colour".

### The best white rum for cocktails (23 October 2026)

- **Dated figures**: the prices, Amazon ratings, best sellers positions and YouGov rankings are from February 2022. They're kept, in tables captioned with that date, and the article says to check the latest before buying. "in 2022" is gone from the title.
- **Wrong links fixed**: three of the Captain Morgan links (YouGov table, "strong second place") went to the Duppy White rum (https://amzn.to/3BjRraz). They all go to Captain Morgan White now (https://amzn.to/3GG7YXv). Bacardi linked to /affiliates/white-rum/ ("Coming Soon"); it uses the /alcohol-recommendations/ Bacardi link, with the US version.
- **Fixes**: "Brugal Blanco Sumpremo", "rum's", "contained in which it is aged", "A think", "pefectly". The "Are you ready for some white rum cocktails?" heading reused the verdict's anchor, so the contents linked to the wrong place.
- **Recipes**: four of the newest white rum cocktails as cards. **Closing link**: /rum-cocktails/#white-rum (49 recipes, the same count as that page).

### Is Smirnoff good vodka? (23 October 2026)

- **Smirnoff box**: shown three times instead of five, using the /alcohol-recommendations/ Smirnoff (with the US link).
- **Links**: the Moscow Mule article links go to the recipe page, the "40 vodka cocktails" listicle to /vodka-cocktails/, and "The Best Vodka for Cocktails in 2021" to the migrated review without the year. Smirnoff's history page (smirnoff.com/en-gb/our-history/) is a 404, so it's gone from the sources.
- **Fixes**: "Belverdere", "80% proof" (80 proof), "is drank", "thought Southern Russian", "refugee's", "we don;t". It said the logo picture was "directly above this section", which isn't true in the new layout, so that line is gone.
- **Worth a look**: the article says cheap vodka has *fewer* impurities than premium vodka, and that you'd want a "non-premium" vodka for sipping neat. That's the original argument and it's kept, but it may confuse readers.
- **Sources**: Seasoned Advice, The Spruce Eats and Quora block automated checks (403) but are linked as before.

### The best vodka for cocktails (23 October 2026)

- **Scores checked**: the four tests' points add up to the published totals exactly. The page now works the totals out from the test tables.
- **Wrong sentence fixed**: it said Grey Goose "dropped 2 points" without the reputation test. It actually loses 10, and ends up 2 points behind Russian Standard, which is what it says now.
- **Dated figures**: kept in tables, captioned "when we ran the comparison" (first published March 2020, last updated February 2022). "in 2022" is gone from the title.
- **Links**: Smirnoff's top link was /affiliates/vodka/ ("Coming Soon"); the box uses the /alcohol-recommendations/ Smirnoff. The Twitter link is now X. The "100 free cocktail recipes" and "40 vodka cocktails" links are replaced by recipe cards and /vodka-cocktails/.
- **Fixes**: "Vodak", "Skky", "al look", "around around", "incldued", "interested".

## Cocktail equipment (23 October 2026)

- **Shop links added later**: the Hawthorne strainer and Flow mixing glass boxes linked to /affiliates/hawthorne-strainer/ and /affiliates/mixing-glass/, "Coming Soon" pages, so at first they had no Buy button. Since 2 November 2026 they use https://amzn.to/3oTMvU9 and https://amzn.to/3r7FB2z, as do the matching boxes in the recipes. The text links to /affiliates/hawthorne-strainer/ and /affiliates/cocktail-shaker-2/ are gone.
- **Links**: "make a killer Pina Colada" pointed at /cocktails-with-white-rum/#pina-colada; it now goes to the Piña Colada recipe. "Specialised cocktail sets" and "the best cocktail shaker" still go to /cocktail-sets/, which isn't migrated.
- **Fixes**: "we basically anything", "range to everyday", "your buying for", "suppose to stir", "pro's".
- **Ending**: WordPress ended on a mailing list form; it now ends on the alcohol recommendations, then the usual free guide signup.

## Snippets and "What you need" (5 November 2026)

- **What**: the 61 snippets in https://www.thatcocktail.com/snippets-sitemap.xml are components in src/components/snippets/, one each. src/lib/recipe-snippets.ts lists them with a title, whether each is an ingredient or equipment, and the words that detect it. A recipe page has up to two sections just above the recipe card (src/components/WhatYouNeed.astro). "What Ingredients do you need to make an Americano?" has the snippets for its ingredients, in recipe order. "What Equipment do you need to make an Americano?" has the equipment its method uses, in method order. Each section only shows when it has something, and each snippet appears once.
- **FAQs**: the same two questions are the first FAQs (after any written from an article), in the FAQ section and the FAQPage schema. The ingredients answer lists every ingredient with its measure and links to the snippets above. The equipment answer lists the equipment and links to it. When the ingredients question is there, it replaces "What’s in an Americano?". The questions come from one function, needQuestion() in cocktail-faqs.ts, so the headings and FAQs can’t drift apart.
- **FAQ wording fix (every recipe)**: fixed amounts read wrongly in the FAQ ingredient lists: "and splash of soda water", "and top up with lemonade". They now say "a splash of", "a dash of", "a pinch of" and "lemonade to top up".
- **On every recipe (5 November 2026)**: of the 253 recipes, 211 have both sections, 24 only the ingredients one and 6 only the equipment one. The other 12 already have both sections in their WordPress articles: Aperol Spritz, Blue Dolphin Martini, Cheeky Monkey, Dirty Martini, Espresso Martini, Kentucky Sunrise, Long Island Iced Tea, Mint Julep, Ocean Drive, Old Fashioned, Passoa Margarita and Xanadu.
- **Articles keep their own sections**: when a recipe’s article already has an ingredients or equipment section (any heading with "ingredients", "equipment" or "kit"), ours for that part is left out, so the copy isn’t on the page twice. Jamaican Sunrise, for example, keeps its own "The kit you need" section and gets only our ingredients section. The FAQ answer then links to the article’s section.
- **FAQs already asked**: when the article’s FAQs already ask a question, ours isn’t added. That covers the Aperol Spritz’s "Do you need any equipment…?", Jamaican Sunrise’s "What equipment do you need…?", and the Old Fashioned’s "What ingredients/equipment do I need…?". Every in-page link in the FAQ answers was checked against the page.
- **Also fixed**: the FAQ ingredient lists said "and shot of espresso" (Espresso Martini).
- **Never added automatically**: Short Drinks, and Sign Off ("Want More Cocktail Recipes?").
- **Products**: where a snippet's "Our top pick" matches a product already in alcohol.ts or products.ts, the component uses that product. Each link is then in one place, and the US version is kept. The others are written into the component, with the links you gave earlier for the old /affiliates/ pages (Aperol, Falernum, Demerara Rum, Golden Rum, Julep Cups, Scotch, Soda Water, Wine Glasses, Yellow Chartreuse).
- **No buy link**: Aquafaba, Orgeat Syrup and Martini Extra Dry White Vermouth (on Lillet Blanc) linked to /affiliates/ pages that were never finished, and Malibu had no link.
- **Vermouth**: it has no product box, as on WordPress.
- **Shot Glasses**: WordPress said "For Shot Glasses, we recommend: No advert found...", which was taken out.
- **Links**: /affiliates/ text links go to the matching section of /alcohol-recommendations/, /cocktail-equipment/ or /cocktail-glassware/, or to the snippet's own Amazon link (Cognac, Ginger Beer/Ale, Grenadine, Maraschino Cherries, Orange Juice, Pineapple Juice, Soda Water, Wine Glasses, Chartreuse). Old URLs (/kir-royale/, /how-to-make-a-mimosa/, …) go to the recipes.
- **Not migrated**: "Bay Breeze" isn't linked any more (there's no recipe). "Our detailed cocktail shaker comparison" still goes to /cocktail-sets/, as in the articles. The sign-off's "Our List of Cocktail Collections" goes to /types-of-cocktails/.
- **Copy**: Typos are fixed ("Chambod", "kernals", "socctrine", "white win", "varaint", …). Also corrected:
  - Angostura: gentian is a plant, not "a kind of clear liqueur".
  - Vermouth: the Negroni is from 1919, so it's "and later the Negroni".
  - White rum: it's clear because it's aged in steel *or filtered after ageing*.
  - Coffee liqueur: no longer says "the one the creator of the cocktail originally used", which only made sense on the White Russian.
  - Orange juice: no longer says "this delicious list of cocktails", which isn't there.
- **Worth checking**: on WordPress, White Rum's Bacardi box and the Fever-Tree Ginger Beer box use the same Amazon link (amzn.to/2FKPSH2). alcohol.ts has it for Bacardi too. One of them is probably wrong.
- **Orange Juice link**: the snippet's Orange Juice box has a link (amzn.to/3Qv3EQQ). It could replace the 2 Orange Juice links still in AFFILIATE-LINKS-NOT-REPLACED.md.

## Recipe tips (3 November 2026)

- **What**: a "Bartender's tips" panel at the foot of the recipe card, after the method (src/components/CocktailTips.astro). It prints with the card, in black and white. To add tips to a recipe, give it `tips:` in its frontmatter, one string per tip; HTML links are allowed. Recipes without tips don't show the panel.
- **So far**: only the Sandpaper has tips.
- **Replaces** the old single `tip` field, which no recipe used.
- **Dev server**: after a new frontmatter field is added to src/content.config.ts, a recipe that hasn't changed since can keep its old data (without the field) in `astro dev`, even across restarts and `--force`. Changing the recipe file's contents fixes it; re-saving it unchanged doesn't. Builds aren't affected.

## Recipe FAQs (2 November 2026)

- **What**: every recipe page has an FAQ section under the recipe card, with FAQPage schema. The questions are worked out from the recipe (src/lib/cocktail-faqs.ts): what's in it, what alcohol, shaken or stirred, making it without a shaker, the glass, the garnish, and making it for a group. A question is left out when the recipe doesn't have the answer (e.g. no garnish), or when the recipe's article already asks it (e.g. the Old Fashioned, which only gets the garnish question). To add your own, give the recipe `faqs: [{ q, a }]` in its frontmatter.
- **Data fixes found on the way**: the Mai Tai's lime wedge and maraschino cherry and the Limoncello Spritz's lemon slice and mint weren't marked as garnishes, so they read as ingredients. Get Randy's method said "line twist" (lime twist).
- **FAQs from the articles (3 November 2026)**: the 24 recipes with an article have their own `faqs`, written from the article, and they come before the worked-out ones. When one covers the same thing as a worked-out question (e.g. the Moscow Mule's "Why is a Moscow Mule served in a copper mug?" and "What glass…?"), the worked-out one is dropped. Most have 3 to 6; the 9 with a line or two of article have one each.
- **FAQ blocks moved**: the Moscow Mule's "Moscow Mule FAQs" section and the Old Fashioned's "FAQs" section are now in the FAQ section under the recipe card, so they aren't on the page twice. The Old Fashioned's 21 questions are 17 now: "Do people ever search for sugar alternatives?" is gone, "What is Simple Syrup?" is part of the simple syrup answer (its product box became a link), and the orange peel and cherry answers are one garnish answer. The long "Why is it called an Old Fashioned?" answer stays in the article as its own section, and the FAQ has a short version that links to it.
- **Corrected in the FAQs**: the Old Fashioned article says a Wisconsin Old Fashioned is brandy instead of bourbon with "everything else the same"; it's usually topped up with soda too, which the FAQ says. Dirty Martini's article lists the Negroni among 19th-century vermouth cocktails (it's from 1919), so the FAQ only names the Martini and Manhattan. The Long Island's "white rum is clear because it's aged in steel" and the gin sales figures aren't used. **Worth checking**: the Old Fashioned batch answer (from the article) says a 750ml bottle of bourbon makes about 12 drinks, but the recipe uses 45ml, which would be about 16.
- **Recipe fixes**: the Blue Dolphin Martini's method never said to shake (it went from adding the ingredients to straining), so it has "Shake well until the shaker is cold to the touch." now. Kentucky Sunrise said "a maraschino cherries", Bourbon and Ginger Punch said "Add bourbon and ginger" (ginger ale), and the Kentucky Mule's slice of lime wasn't marked as a garnish. The Espresso Martini article said "Soho Brassiere" (Brasserie), Cheeky Monkey and Xanadu said "socctrine aloes" (socotrine), and Cheeky Monkey's "skip to the recipe" link went to the old WordPress URL.

## Moscow Mule recipe (2 November 2026)

- **Updated from WordPress** (last updated there 2 November 2026). The recipe page now has the article that used to be /moscow-mule-recipe/: history, the copper cup, FAQs and sources. It sits above the recipe card, like the Old Fashioned.
- **Method**: now the four WordPress steps (ice in the mug, measure with a jigger, stir with a bar spoon, garnish). WordPress's auto-linking had turned "Ginger Beer" into "<a>Gin</a>ger Beer" linking to /affiliates/gin/; that's plain "ginger beer" here. The measures are unchanged.
- **Ingredients section**: the article repeated the recipe's ingredient list right above the card, so it's now one sentence pointing to the card. The intro promised "the cocktail's calorie count", which the article never gave, so that bullet is gone.
- **Links**: the vodka link (Amazon, Smirnoff) goes to /alcohol-recommendations/#vodka. The copper cup links go to /cocktail-glassware/#copper-mugs, and there's a copper mug box (the glassware page's UK link, https://amzn.to/3omMFEC; no US swap in Markdown). The book and ginger beer links stay on Amazon, with rel="sponsored". "Vodka cocktail" links go to /vodka-cocktails/, "our awesome cocktail recipes" to /cocktails/, and the Jamaican Mule to its recipe page.
- **Sources**: Vinepair's history article and the Paykoc blog post now redirect to unrelated pages, so they're gone (the Vinepair claim is still there, without the link). Tasting Table's article moved; it uses the new URL. The Jamaican Mule was listed as a source; it's now in the closing line. Moscow Copper (429) and Liquor.com (403) block automated checks but are linked as before.
- **Fixes**: "anywhere Russia", "owner of British bar", "American’s", "Kunnet", "Old Jamaican" (it's Old Jamaica), "the real creator of the cocktails", a sentence ending in a comma, and 1.75oz → 1.7oz to match the card. "No advert found...]" and the mailing list form are gone.

## Cocktail glassware (2 November 2026)

- **Products**: seven boxes, one per glass, in `glassware` in src/data/products.ts. WordPress showed a separate US box for six of them; those are now the `us` version of the same box. They keep this page's links, which aren't the same as the glasses in `kit` that the older articles use (e.g. highball glasses are https://amzn.to/3nx7z22 here, https://amzn.to/32y7eQl in `kit`). Decide which to keep.
- **Links**: the recipe links go to the recipe pages instead of the old how-to articles (/moscow-mule-recipe/, /how-to-make-a-margarita/, etc.), and "cocktail recipe hub" goes to /cocktails/. The Pina Colada link pointed at /cocktails-with-white-rum/#pina-colada; it now goes to the recipe. Bay Breeze has no recipe page, so it keeps its WordPress URL (/how-to-make-a-bay-breeze/). The Champagne Flute text link in the intro went straight to Amazon; it now goes to the flutes section.
- **Fixes**: "Line Juice", "Margarita's", "the more elegant of classic cocktail". The title is now "Cocktail glassware", like the equipment page; the WordPress title is kept as the SEO title.
- **Ending**: WordPress ended on a mailing list form; it now ends on the equipment recommendations, then the usual free guide signup.
- **Recipe links**: the recipes' highball, cocktail and old fashioned glass links went to /affiliates/ pages; they now go to the matching section here. Glasses with no section here (wine, tiki, Irish coffee glasses and the julep cup) are plain text. See AFFILIATE-LINKS-NOT-REPLACED.md.

## Google ads (5 November 2026)

- **Where**: recipe pages only. One box is in the sticky rail under "Get my FREE guide" (desktop only, because on phones the rail is the "On this page" bar). The other is just above the recipe card. Both are in `src/components/AdSlot.astro`.
- **Loading**: nothing loads with the page. The first scroll loads `adsbygoogle.js` and fills the rail box. The recipe box fills when it's within 600px of the screen, as the WordPress theme's `public.js` did with its `.i-mount-content-ad` boxes.
- **Empty boxes**: a box AdSense has nothing for (`data-ad-status="unfilled"`) is hidden. The "Advertisement" label only shows once a box has an ad. The recipe box keeps 280px free beforehand, so the card doesn't jump.
- **Ad units**: both boxes use the theme's in-article unit (`ca-pub-3993142678243410`, slot `8107379716`). A display unit suits the 270px rail better: create one in AdSense and put its slot in `adsense.slots.rail` in `src/data/site.ts`.
- **Dev**: in `astro dev` the boxes carry `data-adtest="on"`, so testing doesn't count as real impressions. AdSense doesn't fill on localhost.
- **ads.txt**: copied from WordPress to `public/ads.txt`. It must stay at the site root or AdSense limits the ads it serves.
- **Consent**: WordPress pages have no consent tool of their own, and neither do these. For UK/EEA visitors, AdSense needs a Google-certified consent message to serve personalised ads. AdSense's own message (Privacy & messaging) is shown by `adsbygoogle.js`, so if it's already published for WordPress it carries over with no code here. Check it's on before launch.

## Measures to confirm

Where the ml and oz on WordPress disagreed, the ml figure was kept and the oz worked out from it. Most are rounding (50ml was listed as 2oz), but these look like real conflicts:

- **Get Randy**: "60ml / 1oz" → 60ml / 2oz
- **Godchild**: "25ml / 1oz" → 25ml / 0.8oz
- **French Connection**: "35ml / 1oz" → 35ml / 1.2oz
- **French Connection**: "35m / 1oz" → 35ml / 1.2oz
- **Godfather**: "35ml / 1oz" → 35ml / 1.2oz
- **Cherry Sparkler**: "30ml / 1.5oz" → 30ml / 1oz
- **Big Sister**: "30ml / 1.5oz" → 30ml / 1oz
- **Bocci Ball**: "45ml / 1.25oz" → 45ml / 1.5oz
- **Bocci Ball**: "150ml / 3.5oz" → 150ml / 5.1oz
- **Kentucky Sunrise**: "45ml / 1oz" → 45ml / 1.5oz
- **Kentucky Sunrise**: "15ml / .25oz" → 15ml / 0.5oz
- **Bermuda**: "45ml / 1oz" → 45ml / 1.5oz
- **Bermuda**: "15ml / .25oz" → 15ml / 0.5oz
- **The Roosevelt**: "45ml / 1oz" → 45ml / 1.5oz
- **The Roosevelt**: "15ml / .25oz" → 15ml / 0.5oz
- **Scorpion**: "10ml / .75oz" → 10ml / 0.3oz
- **Sunflower Highball**: "150ml / 3.5oz" → 150ml / 5.1oz
- **Sunflower Highball**: "23ml / 1.5oz" → 23ml / 0.8oz
- **[Bucks Fizz](/cocktails/bucks-fizz/)**: the recipe is 50ml champagne to 100ml orange juice, but the old Champagne Cocktails page described it as the boozier cousin of the Mimosa, at 2 parts champagne to 1 part orange juice. One of them needs changing; `/champagne-cocktails/` currently avoids giving a ratio.
- **[Peach Me](/cocktails/peach-me/)**: the ingredients list 2 dashes of orange bitters (as a garnish), but the method adds Angostura bitters with the bourbon and schnapps. The summary also says it’s "garnished with 2 orange bitters". Pick one bitters and move it out of the garnish.

## Other fixes made during migration

- **Lynchburg Lemonade**: the recipe card had no method, so it was taken from the WordPress recipe field.
- **Bellini**: the card (champagne and peach purée) and the article text underneath (prosecco, peach schnapps, lemon) give different recipes. The card version was kept.
- **Duplicate recipes**: WordPress had Bellini and Miami Spice twice (`/cocktails/bellini-2/`, `/cocktails/miami-spice-2/`) with identical recipes. The copies were removed and their URLs redirect to `/cocktails/bellini/` and `/cocktails/miami-spice/`. Bellini kept the copy's extra Summer tag.
- **Bermuda Cocktail**: the same drink as Bermuda with a different recipe (60ml gin, 15ml peach schnapps, 15ml orange juice, 10ml grenadine). It was removed in favour of [Bermuda](/cocktails/bermuda/), and `/cocktails/bermuda-cocktail/` redirects there.
- **Pornstar Martini Mocktail**: WordPress titled it 'Pornstar Martini Mockail' at `/cocktails/pornstar-martini-mockail/`. The name is fixed, the page moved to `/cocktails/pornstar-martini-mocktail/`, and the old URL redirects there.
- **Cuba Libre**: WordPress titled these 'Cubre Libre' and 'White Cubre Libre' at `/cocktails/cubre-libre/` and `/cocktails/white-cubre-libre/`. The names are fixed, the pages moved to `/cocktails/cuba-libre/` and `/cocktails/white-cuba-libre/`, and the old URLs redirect there.
- **Two-method recipes**: 56 older recipes had a second 'without a cocktail shaker' method. It now appears as its own box on the recipe card (`methodNoShaker` in the frontmatter).
- **Spelling and auto-link glitches**: e.g. 'Angustura', 'Maraschnio', 'Kaluha', 'Tobasco', 'Syrupr', 'suagr', 'cockail', and WordPress linking the 'Gin' in 'Ginger beer'.
- **Duplicate content**: copies of the ingredient and method lists inside articles were removed, as were 'jump to the recipe' links and embedded copies of the recipe card.
