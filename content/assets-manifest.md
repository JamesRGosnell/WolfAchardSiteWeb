# Assets manifest — Groupe Wolf Achard / Wolf Archard Group

Every image the live site references, downloaded from the **original DAM `data-asset` path**
rather than the resized `.coreimg.` rendition the page displays — so each file here is the
highest resolution the platform holds.

| | |
|---|---|
| Downloaded | **2026-08-02** |
| Location | `source-assets/images/` |
| Files on disk | **106** |
| Total size | 8.6 MB |
| Verification | **every file confirmed by magic bytes** — 44 JPEG, 22 PNG, 39 SVG, 1 ICO. No HTML error pages, no truncated files. |
| Failures | **none.** All 106 fetched HTTP 200 first or second attempt. |

**Dimensions below are measured from the file**, not read off the filename, and the
descriptions are what the image *actually shows* after opening it. Several filenames are
wrong; those are called out inline.

DAM assets resolve identically from `www.fbngp.ca` and `www.nbfwm.ca`. The URL column
records the origin actually fetched (the English host for English-only assets).

---

## Page banners (hero bands)

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `ban-page-accueil-groupe-wolf-achard.jpg` | 2000x380 | 166 KB | **FR home hero.** Two mountaineers at sunrise on a rock summit — the higher one reaching down to pull the lower one up. Left ~55% is flat pale-grey gradient (text zone). No people's faces visible. Team-specific DAM folder. | FR home |
| `img-microsites-aspirationnel.jpg` | 1199x375 | 165 KB | **EN home hero — a completely different picture from the French one.** Aerial of a white sailing yacht anchored off a turquoise lagoon and forested sandbar. Generic FBNGP banner folder, not this team's. Different pixel dimensions too (1199×375 vs the French 2000×380). | EN home |
| `ban-page-notre-equipe-groupe-wolf-achard.jpg` | 2000x380 | 155 KB | **FR team hero.** Overhead shot of ~8 hands stacked in a circle on a wooden floor. Team-specific folder. | FR team |
| `ban-microsites-notre-equipe.jpg` | 1199x375 | 124 KB | **EN team hero — different picture.** Two women shaking hands in a bright office lobby; one holds a tablet. Generic FBNGP folder. 1199×375. | EN team |
| `ban-page-nos-services-groupe-wolf-achard.jpg` | 2000x380 | 164 KB | **FR services hero.** Elevated view of downtown Montreal — Mary Queen of the World Cathedral dome, Place du Canada, Sun Life building. Team-specific folder. | FR services |
| `ban-couple-nos-services.png` | 2000x380 | 336 KB | **EN services hero — different picture, and the filename lies.** No couple. Hands typing on a laptop overlaid with floating hexagonal fintech icons (documents, calendar, %, $, house, people). 2000×380 PNG. | EN services |
| `ban-page-nouvelles-articles-groupe-wolf-achard-lg.jpg` | 2000x380 | 156 KB | **FR news hero.** Folded newspaper with black-framed reading glasses on it, coffee cup and laptop behind, window blinds. Team-specific folder. | FR news |
| `ban-news-articles.jpg` | 2000x380 | 42 KB | **EN news hero — different picture.** Very high-key shot of a person holding a tablet beside an open laptop on a wooden desk. Generic FBNGP folder. | EN news |
| `ban-microsites-notre-a-propos.jpg` | 2000x375 | 63 KB | Firm-page hero, **shared by FR and EN**. A red-haired woman and a grey-bearded man in a café-style office reading a printed document together. | EN firm, FR firm |
| `ban-homme-femme-travaille-bureau.jpg` | 1199x375 | 115 KB | Contact-page hero, **shared by FR and EN**. A grey-haired man in shirt and tie and a woman in a blush blouse looking at a tablet together in a bright office. | EN contact, FR contact |

**Source paths**

- `ban-page-accueil-groupe-wolf-achard.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/groupe-wolf-achard/bannieres/accueil/ban-page-accueil-groupe-wolf-achard.jpg`
- `img-microsites-aspirationnel.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/ban/fbngp-accueil/img-microsites-aspirationnel.jpg`
- `ban-page-notre-equipe-groupe-wolf-achard.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/groupe-wolf-achard/bannieres/notre-equipe/ban-page-notre-equipe-groupe-wolf-achard.jpg`
- `ban-microsites-notre-equipe.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/ban/fbngp-notre-equipe/ban-microsites-notre-equipe.jpg`
- `ban-page-nos-services-groupe-wolf-achard.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/groupe-wolf-achard/bannieres/nos-services/ban-page-nos-services-groupe-wolf-achard.jpg`
- `ban-couple-nos-services.png` ← `https://www.nbfwm.ca/content/dam/fbngp/ban/nos-services/ban-couple-nos-services.png`
- `ban-page-nouvelles-articles-groupe-wolf-achard-lg.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/groupe-wolf-achard/bannieres/nouvelles-articles/ban-page-nouvelles-articles-groupe-wolf-achard-lg.jpg`
- `ban-news-articles.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/ban/ban-news-articles/ban-news-articles.jpg`
- `ban-microsites-notre-a-propos.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/ban/notre-firme/ban-microsites-notre-a-propos.jpg`
- `ban-homme-femme-travaille-bureau.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/ban/contact/ban-homme-femme-travaille-bureau.jpg`

## People — headshots (all single-person, no group photo exists anywhere on this site)

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `photo-laurent-achard-montreal-350x330.png` | 350x330 | 185 KB | **Laurent Achard.** One man, roughly 30s, short light-brown hair, trimmed beard, grey-blue suit, white shirt, navy tie with white polka dots. Cut out on white. ⚠ **One file, two different `alt` strings in the rebuild, and both are correct.** On the **team and profile pages** it carries the authored `Laurent Achard, Conseiller en gestion de patrimoine` (`CHANGES` **NC-07** — those surfaces had no description at all). On the **contact page** it keeps the live, truncated `Photo de Laurent Achard, Conseiller en gestion de patrimoin , membre de l'équipe expert.` (**F-01**, shipped sic — no §6 amendment exists). Each follows its own rule; side by side at sign-off it reads as an error, so it is surfaced as a one-line client decision in the `▶ START HERE` section of `CHANGES-FOR-APPROVAL.md`. **Do not "harmonise" it here** — answering `F-01` is what settles it. | EN contact, EN Achard profile, EN team, FR Achard profile, FR team, FR contact |
| `photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png` | 350x330 | 152 KB | **David Alexandre Wolf.** One man, roughly 30s–40s, dark hair, short beard, navy blazer over an open-collar white shirt. Cut out on white. | EN contact, EN Wolf profile, EN team, FR Wolf profile, FR team, FR contact |
| `photo-lysanne-tougas-collaborateur-350x330.png` | 350x330 | 127 KB | **Lysane Tougas.** One woman, blonde shoulder-length hair with fringe, red-and-black windowpane-check jacket over a black top, black shoulder strap. Cut out on white. *Filename spells the first name `lysanne`; every page string spells it `Lysane`.* | EN team, FR team |
| `photo-jean-francois-gobeil-collaborateur-350x330.png` | 350x330 | 135 KB | **Jean-Francois Gobeil.** One man, dark hair, clean-shaven, charcoal suit over a pale blue patterned shirt, no tie. Cut out on white. | EN team, FR team |

**Source paths**

- `photo-laurent-achard-montreal-350x330.png` ← `https://www.fbngp.ca/content/dam/fbngp/photo/photo-laurent-achard-montreal-350x330.png`
- `photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png` ← `https://www.fbngp.ca/content/dam/fbngp/photo/photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png`
- `photo-lysanne-tougas-collaborateur-350x330.png` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/photos-collaborateurs/photo-lysanne-tougas-collaborateur-350x330.png`
- `photo-jean-francois-gobeil-collaborateur-350x330.png` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/photos-collaborateurs/photo-jean-francois-gobeil-collaborateur-350x330.png`

## Team lockups — genuinely different artwork per language

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `logo-cp-groupe-wolf-achard-L.svg` | 225x70 | 12 KB | **FR team lockup, large.** Navy `#274155` square with a white overlapped `WA` monogram, then two lines: small `Groupe` above large `Wolf Achard`, both navy. All wording is outlined vector paths — 19 `<path>`, no live `<text>`. 225×70. | FR home, FR services, FR team, FR firm, FR contact, FR news |
| `logo-cp-groupe-wolf-achard-M.svg` | 180x43 | 12 KB | FR team lockup, medium. Same artwork, 180×43. | FR home, FR services, FR team, FR firm, FR contact, FR news |
| `logo-cp-groupe-wolf-achard-S.svg` | 35x28 | 4 KB | FR team lockup, small/mobile. Navy square + white `WA` monogram only, no wording. 35×28, 3 paths. | FR home, FR services, FR team, FR firm, FR contact, FR news |
| `logo-ia-wolf-achard-group-L.svg` | 210x70 | 12 KB | **EN team lockup, large — different layout, different colours, and it spells the name differently from the page.** Navy `#00324d` square with white `WA`, then large `Wolf Achard` on line 1 and `Group` on line 2 in olive `#79755d`. **The artwork reads `Wolf Achard` — one R — while the English page title, H1, nav label and URL slug all read `Wolf Archard`.** 210×70, 18 paths, no live text. | EN contact, EN home, EN news, EN firm, EN services, EN team |
| `logo-ia-wolf-achard-group-M.svg` | 167.5x43 | 12 KB | EN team lockup, medium. Same artwork, 167.5×43. | EN contact, EN home, EN news, EN firm, EN services, EN team |
| `logo-ia-wolf-achard-group-S.svg` | 35x28 | 4 KB | EN team lockup, small/mobile. Navy square + white `WA` only. 35×28. | EN contact, EN home, EN news, EN firm, EN services, EN team |

**Source paths**

- `logo-cp-groupe-wolf-achard-L.svg` ← `https://www.fbngp.ca/content/dam/fbngp/logos/groupe-wolf-achard/logo-cp-groupe-wolf-achard-L.svg`
- `logo-cp-groupe-wolf-achard-M.svg` ← `https://www.fbngp.ca/content/dam/fbngp/logos/groupe-wolf-achard/logo-cp-groupe-wolf-achard-M.svg`
- `logo-cp-groupe-wolf-achard-S.svg` ← `https://www.fbngp.ca/content/dam/fbngp/logos/groupe-wolf-achard/logo-cp-groupe-wolf-achard-S.svg`
- `logo-ia-wolf-achard-group-L.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/logos/groupe-wolf-achard/logo-ia-wolf-achard-group-L.svg`
- `logo-ia-wolf-achard-group-M.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/logos/groupe-wolf-achard/logo-ia-wolf-achard-group-M.svg`
- `logo-ia-wolf-achard-group-S.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/logos/groupe-wolf-achard/logo-ia-wolf-achard-group-S.svg`

## Bank lockups and regulator marks

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `logo-cp-fbngp-L.svg` | viewBox 0 0 225 70 | 9 KB | **FBNGP lockup (FRENCH), large.** Red National Bank flag + `FINANCIÈRE BANQUE NATIONALE` over a rule and `GESTION DE PATRIMOINE`. viewBox 0 0 225 70. Brand red measured out of this file: **`#de161d`**. | FR home, FR services, FR team, FR firm, FR contact, FR news |
| `logo-cp-fbngp-M.svg` | viewBox 0 0 150 70 | 8 KB | FBNGP lockup (FRENCH), medium. viewBox 0 0 150 70. | FR home, FR services, FR team, FR firm, FR contact, FR news |
| `logo-cp-fbngp-s.svg` | viewBox 0 0 32.84 30 | 693 B | **Red National Bank flag, wordless.** Despite the `fbngp` stem this file carries **no French wording at all** — which is why both the French and the English pages load it as the mobile mark. Not a language-purity breach. viewBox 0 0 32.84 30. | EN contact, EN home, EN news, EN firm, EN services, EN team, FR home, FR services, FR team, FR firm, FR contact, FR news |
| `logo-cp-nbfwm-L.svg` | viewBox 0 0 210 70 | 6 KB | **NBFWM lockup (ENGLISH), large.** Red flag + `NATIONAL BANK FINANCIAL` over a rule and `WEALTH MANAGEMENT`. viewBox 0 0 210 70. Note the English canvas is **15px narrower** than the French one — French is the binding locale for header layout. | EN contact, EN home, EN news, EN firm, EN services, EN team |
| `logo-cp-nbfwm-M.svg` | viewBox 0 0 150 70 | 6 KB | NBFWM lockup (ENGLISH), medium. viewBox 0 0 150 70. **There is no `logo-cp-nbfwm-S.svg`** — the small English slot falls back to the wordless flag above. | EN contact, EN home, EN news, EN firm, EN services, EN team |
| `logo-fbngp-245x70.png` | 230x67 | 6 KB | **FBNGP lockup as a raster**, used only in the corporate header of the two FRENCH advisor-profile pages. Reads `FINANCIÈRE BANQUE NATIONALE / GESTION DE PATRIMOINE`. **Actual pixels 230×67, not the 245×70 the filename claims.** | FR Wolf profile, FR Achard profile |
| `logo-nbfwm-245x70.png` | 230x67 | 6 KB | **NBFWM lockup as a raster**, used only in the corporate header of the two ENGLISH advisor-profile pages. Reads `NATIONAL BANK FINANCIAL / WEALTH MANAGEMENT`. **Actual pixels 230×67, not 245×70.** | EN Wolf profile, EN Achard profile |
| `logo-ocri.svg` | 273x49 | 29 KB | **OCRI mark (FRENCH).** Green/olive chevron + `Réglementée par OCRI` and `Organisme canadien de réglementation des investissements`. 273×49. | FR Wolf profile, FR home, FR Achard profile, FR services, FR team, FR firm, FR contact, FR news |
| `logo-ciro.svg` | 196x52 | 21 KB | **CIRO mark (ENGLISH).** Same chevron + `Regulated by CIRO` and `Canadian Investment Regulatory Organization`. 196×52. | EN contact, EN Wolf profile, EN home, EN Achard profile, EN news, EN firm, EN services, EN team |
| `logo-fcpi.svg` | 135x104 | 47 KB | **FCPI mark (FRENCH).** Serif `FCPI` with a column glyph as the I, `Fonds canadien de protection des investisseurs`, `MEMBRE`. 135×104. | FR Wolf profile, FR home, FR Achard profile, FR services, FR team, FR firm, FR contact, FR news |
| `logo-cipf.svg` | 142x110 | 66 KB | **CIPF mark (ENGLISH).** Serif `CIPF` with the column glyph, `Canadian Investor Protection Fund`, `MEMBER`. 142×110. | EN contact, EN Wolf profile, EN home, EN Achard profile, EN news, EN firm, EN services, EN team |
| `picto-logo-bn-24x22.svg` | 32x32 | 443 B | Small red National Bank flag in the footer legal bar. Both languages. 32×32 canvas. | EN contact, EN Wolf profile, EN home, EN Achard profile, EN news, EN firm, EN services, EN team, FR Wolf profile, FR home, FR Achard profile, FR services, FR team, FR firm, FR contact, FR news |
| `logo-bnc-flag.png` | 33x30 | 535 B | Red National Bank flag, tiny raster (33×30). Appears only on the four advisor-profile pages. | EN Wolf profile, EN Achard profile, FR Wolf profile, FR Achard profile |
| `bnc-logo.png` | 1200x630 | 15 KB | Red National Bank flag on white, 1200×630 — the `og:image` for **all 16 pages**, both languages. Carries no wording, so it is language-neutral. | — |
| `favicon.ico` | 48x48 + 32x32 + 16x16 | 15 KB | Multi-resolution favicon (48×48 + 32×32 + 16×16): the red National Bank flag. Shared by both hosts. | EN contact, EN Wolf profile, EN home, EN Achard profile, EN news, EN firm, EN services, EN team, FR Wolf profile, FR home, FR Achard profile, FR services, FR team, FR firm, FR contact, FR news |
| `apple-touch-icon.png` | 180x180 | 3 KB | Red National Bank flag, 180×180. The AEM toolkit declares **twelve** touch-icon links (`-48x48`, `-120x120`, `-144x144`, `-152x152`, `-167x167`, plain, each with a `-precomposed` twin) — all twelve URLs return the **same 180×180 file, byte-identical (SHA-256 verified)**. Only one copy is kept here. | EN contact, EN Wolf profile, EN home, EN Achard profile, EN news, EN firm, EN services, EN team, FR Wolf profile, FR home, FR Achard profile, FR services, FR team, FR firm, FR contact, FR news |

**Source paths**

- `logo-cp-fbngp-L.svg` ← `https://www.fbngp.ca/content/dam/fbngp/logos/logo-cp-fbngp-L.svg`
- `logo-cp-fbngp-M.svg` ← `https://www.fbngp.ca/content/dam/fbngp/logos/logo-cp-fbngp-M.svg`
- `logo-cp-fbngp-s.svg` ← `https://www.fbngp.ca/content/dam/fbngp/logos/logo-cp-fbngp-s.svg`
- `logo-cp-nbfwm-L.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/logos/logo-cp-nbfwm-L.svg`
- `logo-cp-nbfwm-M.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/logos/logo-cp-nbfwm-M.svg`
- `logo-fbngp-245x70.png` ← `https://www.fbngp.ca/content/dam/fbngp/logos/logo-fbngp-245x70.png`
- `logo-nbfwm-245x70.png` ← `https://www.nbfwm.ca/content/dam/fbngp/logos/logo-nbfwm-245x70.png`
- `logo-ocri.svg` ← `https://www.fbngp.ca/content/dam/fbngp/logos/logo-ocri.svg`
- `logo-ciro.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/logos/logo-ciro.svg`
- `logo-fcpi.svg` ← `https://www.fbngp.ca/content/dam/fbngp/logos/logo-fcpi.svg`
- `logo-cipf.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/logos/logo-cipf.svg`
- `picto-logo-bn-24x22.svg` ← `https://www.fbngp.ca/content/dam/bnc/particuliers/picto/picto-logo-bn-24x22.svg`
- `logo-bnc-flag.png` ← `https://www.fbngp.ca/content/dam/bnc/commun/logo/logo-bnc-flag.png`
- `bnc-logo.png` ← `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `favicon.ico` ← `https://www.fbngp.ca/content/dam/global/logo/favicon.ico`
- `apple-touch-icon.png` ← `https://www.fbngp.ca/etc.clientlibs/web-sites-toolkit/clientlibs/clientlib-static/resources/apple-touch-icon.png`

## Home-page content imagery

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-page-accueil-poignee-de-mains.jpg` | 767x511 | 145 KB | FR home, section 1. A smiling woman in a pale blue shirt shakes hands across a desk with a man seen from behind. 767×511. | FR home |
| `img-page-accueil-homme-souriant-yacht.jpg` | 767x511 | 168 KB | FR home, section 2. A silver-haired man in a white shirt and shorts sitting on the deck of a sailing yacht at sea. 767×511. | FR home |
| `img-nos-services-homme-femme-travail.jpg` | 767x431 | 190 KB | **EN home** content image (despite the `nos-services` filename). A man and a woman standing in a glass-walled atrium reading a notebook together. 767×431. The FR home uses no equivalent image here. | EN home |

**Source paths**

- `img-page-accueil-poignee-de-mains.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/groupe-wolf-achard/images/accueil/img-page-accueil-poignee-de-mains.jpg`
- `img-page-accueil-homme-souriant-yacht.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/groupe-wolf-achard/images/accueil/img-page-accueil-homme-souriant-yacht.jpg`
- `img-nos-services-homme-femme-travail.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/img/img-nos-services-homme-femme-travail.jpg`

## Home-page process/values pictograms — a different icon set per language

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `icone-1-handshake-246x313.svg` | 246x313 | 3 KB | FR home step 1 `Faisons connaissance`. Red outline handshake, no fill. 246×313. | FR home |
| `icone-2-strategie-246x313.svg` | 246x313 | 3 KB | FR home step 2 `Établissons une stratégie`. Red outline flip-chart on a tripod with an X-and-arrow play diagram. 246×313. | FR home |
| `icone-3-survey-246x313.svg` | 246x313 | 2 KB | FR home step 3 `Déployons notre plan`. Red outline clipboard with five ticked lines and a downward arrow. 246×313. | FR home |
| `icone-4-speech-246x313.svg` | 246x313 | 646 B | FR home step 4 `Restons en contact`. Two overlapping red outline speech bubbles. 246×313. | FR home |
| `picto-approche.svg` | 180x180 | 2 KB | EN home value `Our personalized approach`. **Filled navy disc** with a white concentric-target-and-arrow glyph. 180×180. Visually unrelated to the French set. | EN home |
| `picto-integrite.svg` | 180x180 | 1 KB | EN home value `Our integrity`. Filled navy disc, white star/rosette. 180×180. | EN home |
| `picto-professionnalisme.svg` | 180x180 | 1 KB | EN home value `Our professionalism`. Filled navy disc, white bust of a person in a tie. 180×180. | EN home |
| `picto-transparence.svg` | 180x180 | 1 KB | EN home value `Our transparency`. Filled navy disc, white magnifying glass. 180×180. | EN home |

**Source paths**

- `icone-1-handshake-246x313.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icone-1-handshake-246x313.svg`
- `icone-2-strategie-246x313.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icone-2-strategie-246x313.svg`
- `icone-3-survey-246x313.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icone-3-survey-246x313.svg`
- `icone-4-speech-246x313.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icone-4-speech-246x313.svg`
- `picto-approche.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/picto/picto-approche.svg`
- `picto-integrite.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/picto/picto-integrite.svg`
- `picto-professionnalisme.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/picto/picto-professionnalisme.svg`
- `picto-transparence.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/picto/picto-transparence.svg`

## Home-page news teasers — the FR and EN files are byte-identical

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-teaser-spotlight-fr.jpg` | 767x307 | 35 KB | FR home teaser 1. A couple leaning over a laptop at a dining table, staircase behind. **No baked-in text**, so the artwork is language-neutral. 767×307. | — |
| `img-teaser-spotlight-en.jpg` | 767x307 | 35 KB | EN home teaser 1. **SHA-256 identical to `img-teaser-spotlight-fr.jpg`** — National Bank stores the same bytes under both `/images-teasers/fr/` and `/images-teasers/en/`. Kept separately because the DAM paths differ. | — |
| `img-teaser-economic-news-fr.jpg` | 767x307 | 102 KB | FR home teaser 2. Head-and-shoulders of a middle-aged man in a dark suit and striped tie against a blue geometric panel — reads as a National Bank economist portrait. 767×307. | — |
| `img-teaser-economic-news-en.jpg` | 767x307 | 102 KB | EN home teaser 2. **SHA-256 identical to the FR file.** | — |
| `img-teaser-guides-tools-fr.jpg` | 767x307 | 25 KB | FR home teaser 3. Hands using a desk calculator over printed spreadsheets, laptop at left. 767×307. Same photograph as `img-article-asset-allocation-strategy.jpg`, cropped to a band. | — |
| `img-teaser-guides-tools-en.jpg` | 767x307 | 25 KB | EN home teaser 3. **SHA-256 identical to the FR file.** | — |

**Source paths**

- `img-teaser-spotlight-fr.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/images-teasers/fr/img-teaser-spotlight.jpg`
- `img-teaser-spotlight-en.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/microsites/images-teasers/en/img-teaser-spotlight.jpg`
- `img-teaser-economic-news-fr.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/images-teasers/fr/img-teaser-economic-news.jpg`
- `img-teaser-economic-news-en.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/microsites/images-teasers/en/img-teaser-economic-news.jpg`
- `img-teaser-guides-tools-fr.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/images-teasers/fr/img-teaser-guides-tools.jpg`
- `img-teaser-guides-tools-en.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/microsites/images-teasers/en/img-teaser-guides-tools.jpg`

## Services-page imagery

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-nos-services-groupe-wolf-achard-767.png` | 767x767 | 123 KB | **FR services wheel — a bespoke, team-branded diagram.** Outer ring of seven red labels (`Planification successorale`, `Planification financière`, `Planification fiscale`, `Philanthropie`, `Solutions bancaires`, `Assurances`, `Gestion de portefeuille`), a middle ring reading **`Groupe Wolf Achard`**, and a red centre disc reading **`Vous`**. Inner ring carries six line icons: house, heartbeat, handshake, pram, heart, graduation cap. 767×767. | FR services |
| `img-diagram-wealth-management-services-your-wealth-advisor-blue.png` | 767x767 | 119 KB | **EN services wheel — National Bank's generic stock diagram, not a translation of the French one.** Seven black labels around a multicoloured segmented ring (salmon / sage / navy / lime / tan / red / charcoal), and grey concentric circles reading **`Your Wealth Advisor`** and **`Client`**. **The team is not named anywhere in it**, and it has none of the French wheel's inner icons. 767×767. | EN services |
| `picto-toolbox.svg` | viewBox 0 0 200 200 | 2 KB | `Boîte à outils` / `Toolbox` icon — filled navy disc with a white wrench and screwdriver. The **only** pictogram shared by the FR and EN services pages. viewBox 0 0 200 200. | EN services, FR services |
| `picto-analyse.svg` | 100x100 | 945 B | EN services only. Red outline magnifying glass. 100×100. Referenced from a `<source srcset>`. | EN services |
| `picto-objectifs.svg` | 100x100 | 1 KB | EN services only. Red outline target with a star at centre. 100×100. | EN services |
| `picto-plan-financier.svg` | 100x100 | 2 KB | EN services only. Red outline clipboard with ticked lines. 100×100. | EN services |
| `picto-suivi.svg` | 100x100 | 2 KB | EN services only. Red outline calendar/ledger with a down arrow. 100×100. | EN services |

**Source paths**

- `img-nos-services-groupe-wolf-achard-767.png` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/groupe-wolf-achard/images/nos-services/img-nos-services-groupe-wolf-achard-767.png`
- `img-diagram-wealth-management-services-your-wealth-advisor-blue.png` ← `https://www.nbfwm.ca/content/dam/fbngp/img/img-diagram-wealth-management-services-your-wealth-advisor-blue.png`
- `picto-toolbox.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/picto-toolbox.svg`
- `picto-analyse.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/picto/picto-analyse.svg`
- `picto-objectifs.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/picto/picto-objectifs.svg`
- `picto-plan-financier.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/picto/picto-plan-financier.svg`
- `picto-suivi.svg` ← `https://www.nbfwm.ca/content/dam/fbngp/picto/picto-suivi.svg`

## Firm-page imagery and statistic pictograms

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-microsites-aspirationnel-a-propos-1-474x464.png` | 474x464 | 429 KB | Firm page, both languages. Peyto-Lake-style turquoise glacial lake in a forested Rocky Mountain valley. 474×464. | EN firm, FR firm |
| `img-microsites-humain-a-propos-2-474x464.png` | 474x464 | 358 KB | Firm page, both languages. Two women in business dress walking and talking down a bright office corridor. 474×464. | EN firm, FR firm |
| `icn_revenu_par_annee.svg` | viewBox 0 0 52 65 | 2 KB | Firm stat 1 — `1 G$ de revenus par année` / `$1 billion in revenue per year`. Dark-olive outline bust of a person in a tie. viewBox 0 0 52 65. **Note the FR/EN pages both attach this icon to the revenue figure although the file name and the FR alt text (`Picto Employé Banque Nationale`) describe an employee.** | EN firm, FR firm |
| `icn_part_canada.svg` | viewBox 0 0 62 65 | 2 KB | Firm stat 2 — `Plus de 200 G$ d'actifs sous gestion` / `More than $200 billion in assets under management`. Olive outline lightbulb with a dollar sign inside. viewBox 0 0 62 65. Filename says *part Canada*; it is used for assets under management. | EN firm, FR firm |
| `icn_part_de_marche.svg` | viewBox 0 0 92.5 65 | 1 KB | Firm stat 3 — `29 % Part de marché au Québec` / `29% Market share in Quebec`. Olive outline pie chart with a dollar sign. viewBox 0 0 92.5 65. | EN firm, FR firm |
| `icn_actif_sous_gestion.svg` | viewBox 0 0 68 65 | 1 KB | Firm stat 4 — `9 % Part de marché au Canada` / `9% Market share in Canada`. Olive outline wallet/purse with an NBC flag on it. viewBox 0 0 68 65. Filename says *actif sous gestion*; it is used for Canadian market share. **Two of these four icons are attached to the statistic their filename does not name.** | EN firm, FR firm |

**Source paths**

- `img-microsites-aspirationnel-a-propos-1-474x464.png` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-microsites-aspirationnel-a-propos-1-474x464.png`
- `img-microsites-humain-a-propos-2-474x464.png` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-microsites-humain-a-propos-2-474x464.png`
- `icn_revenu_par_annee.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icn_revenu_par_annee.svg`
- `icn_part_canada.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icn_part_canada.svg`
- `icn_part_de_marche.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icn_part_de_marche.svg`
- `icn_actif_sous_gestion.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icn_actif_sous_gestion.svg`

## Contact and inline pictograms

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `picto-contact-appel-46x43.png` | 46x43 | 3 KB | Contact page — red outline headset. 46×43. | EN contact, FR contact |
| `picto-contact-localisation-31x44.png` | 33x46 | 3 KB | Contact page — red outline map pin with an NBC flag inside. **Actual pixels 33×46, not the 31×44 the filename claims.** | EN contact, FR contact |
| `picto-courriel-rouge-40x40.png` | 40x40 | 3 KB | Contact page — red outline `@`. 40×40. | EN contact, FR contact |
| `picto-courriel-rouge-80x80.png` | 80x80 | 6 KB | Sticky contact strip on 10 pages — red outline `@`. 80×80. | EN home, EN news, EN firm, EN services, EN team, FR home, FR services, FR team, FR firm, FR news |
| `picto-telephone-rouge-80x80.png` | 80x80 | 5 KB | Sticky contact strip on 10 pages — red outline handset. 80×80. | EN home, EN news, EN firm, EN services, EN team, FR home, FR services, FR team, FR firm, FR news |
| `icn-phone-conseillers-20x20.svg` | 20pxx20px | 4 KB | Advisor card — red outline handset. 20×20. | EN contact, EN team, FR team, FR contact |
| `icn-mail-conseillers-20x20.svg` | 20pxx20px | 2 KB | Advisor card — red outline envelope. 20×20. | EN contact, EN team, FR team, FR contact |
| `icn-chat-conseillers-20x20.svg` | 20pxx20px | 2 KB | Advisor card, languages-spoken row — red outline speech bubble. 20×20. | EN contact, EN team, FR team, FR contact |
| `collapse-closed.svg` | 24x24 | 239 B | Footer accordion `+` glyph. `alt="closed"` on all 16 pages. 24×24. | EN contact, EN Wolf profile, EN home, EN Achard profile, EN news, EN firm, EN services, EN team, FR Wolf profile, FR home, FR Achard profile, FR services, FR team, FR firm, FR contact, FR news |
| `external-link.svg` | 16x16 | 1 KB | Small outbound-arrow-in-box glyph beside the regulator report link. `alt=""`. 16×16. | EN contact, EN Wolf profile, EN home, EN Achard profile, EN news, EN firm, EN services, EN team, FR Wolf profile, FR home, FR Achard profile, FR services, FR team, FR firm, FR contact, FR news |
| `picto-social-linkedin.svg` | 32x32 | 2 KB | Footer LinkedIn glyph, `in` in a circle. 32×32. | EN contact, EN Wolf profile, EN home, EN Achard profile, EN news, EN firm, EN services, EN team, FR Wolf profile, FR home, FR Achard profile, FR services, FR team, FR firm, FR contact, FR news |

**Source paths**

- `picto-contact-appel-46x43.png` ← `https://www.fbngp.ca/content/dam/fbngp/picto/picto-contact-appel-46x43.png`
- `picto-contact-localisation-31x44.png` ← `https://www.fbngp.ca/content/dam/fbngp/picto/picto-contact-localisation-31x44.png`
- `picto-courriel-rouge-40x40.png` ← `https://www.fbngp.ca/content/dam/fbngp/picto/picto-courriel-rouge-40x40.png`
- `picto-courriel-rouge-80x80.png` ← `https://www.fbngp.ca/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png`
- `picto-telephone-rouge-80x80.png` ← `https://www.fbngp.ca/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png`
- `icn-phone-conseillers-20x20.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg`
- `icn-mail-conseillers-20x20.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg`
- `icn-chat-conseillers-20x20.svg` ← `https://www.fbngp.ca/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg`
- `collapse-closed.svg` ← `https://www.fbngp.ca/content/dam/bnc/particuliers/picto/collapse-closed.svg`
- `external-link.svg` ← `https://www.fbngp.ca/content/dam/bnc/particuliers/picto/external-link.svg`
- `picto-social-linkedin.svg` ← `https://www.fbngp.ca/content/dam/bnc/particuliers/picto/picto-social-linkedin.svg`

## News page — Trump policy block (both languages)

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-obbba-767x433.jpeg` | 751x433 | 178 KB | Canadian and US flags overlapping, fabric texture close-up. **Actual pixels 751×433, not the 767×433 in the filename.** | EN news, FR news |
| `img-projet-loi-899-767x433.png` | 763x433 | 447 KB | US flag dissolving into a blue stock chart with floating percentage figures. **Actual pixels 763×433.** ⚠ **ALT CORRECTED 2026-08-02: this image carries a VALUELESS `alt` attribute on both language pages** — the raw markup ends `data-cmp-hook-image="image" alt/`, which HTML parses as `alt=""`. **It ships decorative, and that is NBF's own declaration, not an omission.** This cell previously recorded the alt as *a single space character* and called the image "informative with effectively no alt". **That single space is the wrapper `<div>`'s `data-title=" "` — a different attribute on a different element.** Re-verified byte-level against both captures. The capture wins over this manifest; the correction is to the manifest, not the build. `COMPLIANCE.md` N-12 / R-17. | EN news, FR news |
| `img-droit-de-douane-trump-767x433.jpeg` | 751x433 | 113 KB | US flag on a rope halyard in the foreground; a loaded container ship and port gantry cranes behind. **Actual pixels 751×433.** | EN news, FR news |

**Source paths**

- `img-obbba-767x433.jpeg` ← `https://www.fbngp.ca/content/dam/fbngp/img/droit-douane-trump/img-obbba-767x433.jpeg`
- `img-projet-loi-899-767x433.png` ← `https://www.fbngp.ca/content/dam/fbngp/img/droit-douane-trump/img-projet-loi-899-767x433.png`
- `img-droit-de-douane-trump-767x433.jpeg` ← `https://www.fbngp.ca/content/dam/fbngp/img/droit-douane-trump/img-droit-de-douane-trump-767x433.jpeg`

## News page — spotlight articles (same three photos in both languages)

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-article-july-article-fusions-acquisitions.jpg` | 767x482 | 87 KB | A smiling woman with curly grey hair in a grey blazer shaking hands with a man across a boardroom table; a third person in the foreground. 767×482. | EN news, FR news |
| `img-article-july-article-maximiser-son-patrimoine.jpg` | 767x482 | 126 KB | A mother helping a young boy and a young girl draw with coloured pencils at a kitchen counter. 767×482. | EN news, FR news |
| `img-article-july-article-pension-individuelle.jpg` | 767x482 | 94 KB | A woman at a home dining table holding a printed letter, looking out of the window; plant, candle and a bowl of salad in frame. 767×482. | EN news, FR news |

**Source paths**

- `img-article-july-article-fusions-acquisitions.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-fusions-acquisitions.jpg`
- `img-article-july-article-maximiser-son-patrimoine.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-maximiser-son-patrimoine.jpg`
- `img-article-july-article-pension-individuelle.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-pension-individuelle.jpg`

## News page — “Finance in focus” / “Les finances en lumière”

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `invest-in-you.jpg` | 768x509 | 89 KB | **Language filename and artwork are crossed — the artwork is FRENCH.** Reads `LE DÉFI / Oser s'investir / ACTION 1 / Faites votre bilan financier`, pink panel, woman in a striped cream sweater. Referenced **only by the French news page**, where it displays correctly. 768×509. | FR news |
| `oser-s-investir.jpg` | 768x509 | 88 KB | **Crossed the other way — the artwork is ENGLISH.** Reads `Invest in you / CHALLENGE / ACTION 1 / Take stock of your current financial situation`, woman in a magenta blouse. Referenced **only by the English news page**, where it displays correctly. 768×509. *So both pages render the right language; only the DAM filenames are swapped. But the two images are different women, and the pages credit different ambassadors — `Kathy Marquis` (FR alt) vs `Jessica Moorhouse` (EN alt).* | EN news |
| `img-publications-financieres-revues-de-marche-740x489.png` | 740x490 | 291 KB | **A `.png` that is actually a JPEG** (verified by magic bytes) and **740×490, not 740×489**. Two women, one younger standing and one older seated, looking at a laptop by a window. Also note the DAM path sits under **another advisory team's folder**, `/microsites/edwards-knutson-wealth-advisors/page-content/` — a cross-team asset dependency on both language pages. | EN news, FR news |
| `img-publications-financieres-rapports-mensuels-740x489.png` | 740x490 | 513 KB | Real PNG, **740×490 not 740×489**. A woman with short auburn hair and a man in a navy suit reviewing printed documents at a desk. | EN news, FR news |

**Source paths**

- `invest-in-you.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/invest-in-you.jpg`
- `oser-s-investir.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/img/oser-s-investir.jpg`
- `img-publications-financieres-revues-de-marche-740x489.png` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/edwards-knutson-wealth-advisors/page-content/img-publications-financieres-revues-de-marche-740x489.png`
- `img-publications-financieres-rapports-mensuels-740x489.png` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-publications-financieres-rapports-mensuels-740x489.png`

## News page — economic analysis and strategy thumbnails (shared by both languages)

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-article-weekly-economic-watch-768x433.jpg` | 768x433 | 82 KB | A woman in a polka-dot blouse sitting cross-legged on a grey sofa reading a printed page, tablet on the coffee table. 768×433. | EN news, FR news |
| `img-article-monthly-vision.jpg` | 768x433 | 46 KB | A couple leaning over a laptop at a dining table — **the same photograph as the home-page `img-teaser-spotlight` teasers**, at a different crop. 768×433. | EN news, FR news |
| `img-article-monthly-economic-monitor.jpg` | 768x433 | 41 KB | A grey-haired man in a charcoal jumper writing in a notebook beside a laptop in an attic room, bowl of bananas. 768×433. | EN news, FR news |
| `img-article-monthly-equity-monitor.jpg` | 768x433 | 52 KB | A blonde woman at a standing desk high above a city, three screens showing candlestick and line charts. 768×433. | EN news, FR news |
| `img-article-strategie-placement-fr-767x433.jpg` | 767x433 | 35 KB | **FRENCH** cover card. White glass-curtain-wall abstract with `Stratégie de placement` in red type. 767×433. | FR news |
| `img-article-strategie-placement-en-767x433.jpg` | 767x433 | 33 KB | **ENGLISH** cover card, same building visual, `Investment Strategy` in red type. 767×433. (Both filenames are French-stemmed; the `-fr` / `-en` suffix is the only thing that distinguishes them, and here it is correct.) | EN news |
| `img-article-asset-allocation-strategy.jpg` | 768x433 | 31 KB | Hands using a desk calculator over printed spreadsheets. 768×433. Both languages. | EN news, FR news |
| `img-article-quarterly-investment-strategy.jpg` | 768x433 | 40 KB | **Used for the ENGLISH `Week at a Glance` card, not for any quarterly strategy item.** A smiling bald man in a white shirt and blue tie looking at his phone on a city street. 768×433. **The French news page has no `Week at a Glance` card at all.** | EN news |

**Source paths**

- `img-article-weekly-economic-watch-768x433.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-weekly-economic-watch-768x433.jpg`
- `img-article-monthly-vision.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-monthly-vision.jpg`
- `img-article-monthly-economic-monitor.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-monthly-economic-monitor.jpg`
- `img-article-monthly-equity-monitor.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-monthly-equity-monitor.jpg`
- `img-article-strategie-placement-fr-767x433.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-strategie-placement-fr-767x433.jpg`
- `img-article-strategie-placement-en-767x433.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/img/img-article-strategie-placement-en-767x433.jpg`
- `img-article-asset-allocation-strategy.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-asset-allocation-strategy.jpg`
- `img-article-quarterly-investment-strategy.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/img/img-article-quarterly-investment-strategy.jpg`

## News page — budgets

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-article-federal-budget.jpg` | 767x482 | 39 KB | A Canadian flag on a pole at sunset over snowy mountains. 767×482. Both languages. | EN news, FR news |
| `img-article-provincial-budget.jpg` | 767x482 | 61 KB | Three people around a table with printed charts, a tablet, a fountain pen and a notebook. 767×482. Both languages. | EN news, FR news |

**Source paths**

- `img-article-federal-budget.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-federal-budget.jpg`
- `img-article-provincial-budget.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-provincial-budget.jpg`

## News page — guides and tools

| Local file | Actual size | Bytes | What it actually is | Used on |
|---|---|---|---|---|
| `img-nouvelles-articles-guide-investir.jpg` | 767x482 | 146 KB | **FRENCH** guide cover: `BANQUE NATIONALE` flag, `2026 / Guide investir / Des conseils clés pour votre santé financière.` over a family loading suitcases into a car. 767×482. *The authored alt text on the page spells it `sante` without the accent.* | FR news |
| `img-news-articles-investing-guide.jpg` | 767x482 | 142 KB | **ENGLISH** guide cover: `NATIONAL BANK` flag, `2026 / Investing Guide / Essential advice for your financial health` — same family photograph. 767×482. | EN news |
| `guide-fiscal-quebec-2025.jpg` | 1598x1004 | 406 KB | **FRENCH tax-guide cover: `GUIDE FISCAL 2025 / Nouveautés + feuillets fiscaux / QUÉBEC`, `BANQUE NATIONALE` flag, couple at a laptop.** 1598×1004. **DEFECT — the French news page uses this file for its `Flash info` card**, whose authored alt text describes a Flash Info graphic. Wrong image in that slot. | FR news |
| `flash-info.jpg` | 1598x1004 | 388 KB | **FRENCH Flash Info cover: `FLASH INFO 2026 / Quelques chiffres utiles pour 2026`, `BANQUE NATIONALE` flag.** 1598×1004. **DEFECT — the French news page uses this file for its `Guide fiscalité et investissement` card**, whose alt text describes a tax guide. The two French files are swapped between the two cards. | FR news |
| `tax-guide-quebec-2025.jpg` | 1598x1004 | 388 KB | **ENGLISH tax-guide cover: `2025 TAX GUIDE / Updates + Tax slips / QUEBEC`, `NATIONAL BANK` flag.** 1598×1004. Correctly paired on the English page. **Stale artwork: a 2025 guide displayed in August 2026.** | EN news |
| `quick-facts.jpg` | 1598x1004 | 315 KB | **ENGLISH Quick Facts cover: `QUICK FACTS 2026 / Know the numbers - useful figures for 2026`.** 1598×1004. Correctly paired on the English page. | EN news |
| `img-article-flip-book-trimestriel-v2-fr.jpg` | 1023x643 | 104 KB | **The filename says quarterly flip book; the artwork says `Mythes et réalités`** — cream ground, black type, single red curve. 1023×643. Used for the FR `Mythes et réalités` card, which is correct; only the filename misleads. | FR news |
| `img-article-quarterly-flip-book-v2-en.jpg` | 1023x643 | 93 KB | **Artwork reads `Facts & Fiction`**, same cream-and-red treatment. 1023×643. Used for the EN `Facts & Fiction` card — but that card's authored alt text says **`Myths and realities by National Bank Investments`**, naming the French publication. | EN news |
| `picto-protection-identity.png` | 512x512 | 32 KB | Fraud-prevention icon, both languages. Pale-blue outline bust of a person with a shield at the shoulder. 512×512. | EN news, FR news |

**Source paths**

- `img-nouvelles-articles-guide-investir.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/images-articles/fr/img-nouvelles-articles-guide-investir.jpg`
- `img-news-articles-investing-guide.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/microsites/images-articles/en/img-news-articles-investing-guide.jpg`
- `guide-fiscal-quebec-2025.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/images-articles/fr/guide-fiscal-quebec-2025.jpg`
- `flash-info.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/microsites/images-articles/fr/flash-info.jpg`
- `tax-guide-quebec-2025.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/microsites/images-articles/en/tax-guide-quebec-2025.jpg`
- `quick-facts.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/microsites/images-articles/en/quick-facts.jpg`
- `img-article-flip-book-trimestriel-v2-fr.jpg` ← `https://www.fbngp.ca/content/dam/fbngp/img/img-article-flip-book-trimestriel-v2-fr.jpg`
- `img-article-quarterly-flip-book-v2-en.jpg` ← `https://www.nbfwm.ca/content/dam/fbngp/img/img-article-quarterly-flip-book-v2-en.jpg`
- `picto-protection-identity.png` ← `https://www.fbngp.ca/content/dam/fbngp/picto/picto-protection-identity.png`

---

## Filenames that lie — quick index

Pair assets by what the artwork says, never by what the file is called.

| File | What the name implies | What it actually is |
|---|---|---|
| `invest-in-you.jpg` | English "Invest in you" artwork | **French** `Oser s'investir` artwork; referenced only by the French page |
| `oser-s-investir.jpg` | French "Oser s'investir" artwork | **English** `Invest in you` artwork; referenced only by the English page |
| `img-article-flip-book-trimestriel-v2-fr.jpg` | a quarterly flip book | the `Mythes et réalités` publication cover |
| `img-article-quarterly-flip-book-v2-en.jpg` | a quarterly flip book | the `Facts & Fiction` publication cover |
| `img-article-quarterly-investment-strategy.jpg` | quarterly investment strategy | used for the English **`Week at a Glance`** card; a man on a phone |
| `ban-couple-nos-services.png` | a couple | hands on a laptop with floating fintech icons — no people's faces |
| `img-nos-services-homme-femme-travail.jpg` | a services-page image | used on the **English home page** |
| `img-publications-financieres-revues-de-marche-740x489.png` | a PNG, 740×489 | a **JPEG**, 740×490, stored under **another team's DAM folder** |
| `img-publications-financieres-rapports-mensuels-740x489.png` | 740×489 | 740×490 |
| `logo-fbngp-245x70.png` / `logo-nbfwm-245x70.png` | 245×70 | both **230×67** |
| `picto-contact-localisation-31x44.png` | 31×44 | **33×46** |
| `img-droit-de-douane-trump-767x433.jpeg` / `img-obbba-767x433.jpeg` | 767×433 | both **751×433** |
| `img-projet-loi-899-767x433.png` | 767×433 | **763×433** |
| `photo-lysanne-tougas-collaborateur-350x330.png` | `Lysanne` | every page string spells her **`Lysane`** |
| `icn_part_canada.svg` | Canadian market share | used for **assets under management** |
| `icn_actif_sous_gestion.svg` | assets under management | used for **Canadian market share** |
| `logo-cp-fbngp-s.svg` | a French FBNGP lockup | the **wordless** red flag — legitimately shared by both languages |

## Assets the site references but does not serve

**None.** Every referenced asset resolves:

- 106 / 106 DAM originals — HTTP 200, valid magic bytes.
- 152 / 152 resized `.coreimg.` renditions the pages actually display — HTTP 200, valid image bytes.
- 34 / 34 linked PDFs — HTTP 200 (206 on ranged request), all begin `%PDF-`.

## Duplicate content under different paths

| SHA-256 (first 12) | Files |
|---|---|
| `bb8cf3d6783a` | `/images-teasers/en/img-teaser-spotlight.jpg` = `/images-teasers/fr/img-teaser-spotlight.jpg` |
| `48f894745311` | `/images-teasers/en/img-teaser-economic-news.jpg` = `/images-teasers/fr/img-teaser-economic-news.jpg` |
| `5efd0f5fd830` | `/images-teasers/en/img-teaser-guides-tools.jpg` = `/images-teasers/fr/img-teaser-guides-tools.jpg` |
| `c8e2bc75987f` | all **twelve** `apple-touch-icon*` URLs |

The three teaser pairs carry no baked-in text, so a single copy can serve both languages in
the rebuild — but the decision should be registered, because the DAM keeps them apart.

## Brand colour, measured

Sampled out of the National Bank lockup SVGs rather than any brand document:

| Token | Value | Source file |
|---|---|---|
| Brand red | `#de161d` | `logo-cp-fbngp-L.svg`, `logo-cp-nbfwm-L.svg`, `logo-cp-fbngp-s.svg` |
| Team navy, **French** | `#274155` | `logo-cp-groupe-wolf-achard-L.svg` |
| Team navy, **English** | `#00324d` | `logo-ia-wolf-achard-group-L.svg` |
| Team olive (word `Group`, EN only) | `#79755d` | `logo-ia-wolf-achard-group-L.svg` |
| Home value pictos (EN) | `#00324d` fill | `picto-approche/integrite/professionnalisme/transparence.svg` |

**The two team lockups do not use the same navy.** French is `#274155`, English is `#00324d`.
Whichever the rebuild adopts, the other language's supplied artwork will not match it. This
needs a client decision, not a designer's pick.

## Header-layout constraint

| | French | English |
|---|---|---|
| Bank lockup canvas | `225 × 70` | `210 × 70` |
| Team lockup canvas | `225 × 70` | `210 × 70` |
| Mobile mark | `35 × 28` team + wordless flag | `35 × 28` team + wordless flag |

The French marks are **7.1 % wider** at the same height in both slots. French is therefore the
binding locale for header sizing; a header tuned to the English lockups will overflow in French.
