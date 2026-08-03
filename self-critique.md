# Self-critique — Groupe Wolf Achard rebuild

Hostile read of the built site. Everything below is measured from `dist/`, `src/`,
`source-assets/html/` and `content/`. No browser was used — see
[What I could not assess](#what-i-could-not-assess).

**Verdict: worth showing, French first, with the English tree presented as the
finding rather than as a page.** The craft is above the bar the reference build
set — `astro check` 0/0/0, 0 broken links out of 689 internal references, 0
third-party requests, 2 same-origin scripts totalling 7 KB, one tint block per
page, one `<h1>` per page with zero heading-level skips, non-breaking spaces
preserved, 0 upscaled image variants of 53 checked. Nine of the eleven inherited
pitfalls in `pitfalls.md` were either avoided or do not exist on this client.
What is wrong is almost entirely **routing and emphasis**, not correctness — and
that is the cheap kind of wrong.

---

## Fix this first

**The most visually dominant control on all 17 pages is a login for people who
are already clients, and on the contact page it is the only control there is.**

Measured:

- `Accès client` / `Client Access` → `https://client.bnc.ca/...` is the **only
  `btn-primary btn-pill` in the header**, on **17 of 17 pages**. Counting the
  footer repeat, **34 instances site-wide**.
- On `/contact/` and `/en/contact/` — the page a convinced prospect lands on —
  **the only two `<a class="btn">` elements on the entire page are both
  `Accès client`.** There is no prospect-facing button on the contact page at
  all.
- The prospect CTA that does exist, `Voir nos coordonnées` / `See our contact
  details`, appears on **3 of 8 pages per language** and is a navigation label,
  not an action.
- On the French homepage, `<main>` contains **five internal links: four to
  `/nouvelles/` and one to `/contact/`. Zero to `/services/` and zero to
  `/equipe/`** — the only two pages carrying the team's own writing. The
  homepage's own body routes every click either to National Bank's syndicated
  content or to a page listing two indistinguishable people.

This is not the registered "no contact form" decision. A form is a client
decision (INTAKE Q3-adjacent, deliberately deferred). **This is a hierarchy
decision we made ourselves**, and it inverts the site's purpose: the loudest
thing on a trust-to-lead site is an existing-client login.

**The fix, and its cost.** Three changes, none of which needs a word from the
client:

1. Demote the header `Accès client` from `btn-primary btn-pill` to the secondary
   or text treatment. **Zero words change** — the register explicitly scopes
   itself to "words, figures, links and identity data", so a class swap needs no
   row. One line in `src/components/Header.astro`.
2. Promote one named contact action on `/contact/` using strings already on the
   page (`Laurent Achard`, `514 395-1937`, `laurent.achard@bnc.ca`). Existing
   `<Button>` and `<AdvisorCard>` components; no new copy.
3. Add one homepage body link to `/services/` reusing the existing nav label
   `Nos services` / `Our services`. This one **is** a link change → one `D-` row.

Estimate: **under a day**, including a re-run of `verbatim-sweep.mjs` and the
link check. It is the highest ratio of prospect impact to approval cost anywhere
on this project.

---

## 1. Actively costing them — loses a prospect, or creates exposure

### 1.1 Nothing on the site tells a visitor which of the two advisors to contact

This is true in the built output, and it is worse than the earlier agent argued.

| Datum | Laurent Achard | David Alexandre Wolf |
|---|---|---|
| Title (FR + EN, both surfaces) | identical | identical |
| Office | identical | identical |
| Biography | **none** | **none** |
| Languages, FR team page | `Français, anglais, italien` | `Français, anglais` |
| Languages, **EN team page** | `English` | `English` |

**On the English site the two men are byte-identical apart from a phone number
and an email address.** The single differentiating fact anywhere on the site —
Achard's Italian — is contradicted *inside the English tree itself* (`English`
on `/en/team/`, `French, English, Italian` on `/en/team/laurent-achard/`), which
is registered as C-07 and shipped verbatim on purpose.

**What would fix it using only words already on the site: nothing would.** I
checked. The complete inventory of per-advisor prose on all 16 captured pages is
the languages line, and it is self-contradictory. There is no honest way to
differentiate these two men from existing strings.

So the only zero-new-copy fix is to **stop asking**. The site's own ordering
already establishes precedence — Achard is listed first on every page in both
languages, and `tel:+15143951937` is the first `tel:` in the DOM on all 17 pages.
Making one named advisor the single default action, with the second reachable but
not co-equal, removes the choice instead of explaining it. That is a design
change, not a content change.

The alternative — one sentence each about who they serve — is INTAKE Q3/Q6
territory and needs the client.

### 1.2 The four advisor profile pages are dead ends that lose information

`/equipe/laurent-achard/` renders **30 words** in `<main>`; the English twin
renders **27**. Full contents: name, title, phone, email, office, languages.

A prospect who clicks Laurent Achard's card on `/equipe/` arrives at a page
carrying **less** than the card he clicked (the card at least sits beside two
biographies). **4 of 17 routes — 24% of the site — carry 114 of 10,132 `<main>`
words, or 1.1%.** They exist because the live site has them and because
`advisors.ts` is a genuinely good single source of truth; they earn nothing.

Inherited in substance (they are National Bank's structured advisor records, and
`advisors.ts` correctly refuses to fill them). Ours in consequence: we chose to
give them routes and to link them from the team card.

### 1.3 A politically-charged block is the first thing on the news page, in both languages

The first `<h2>` in `<main>` on `/nouvelles/` is **`Actualités politiques de
Trump`**; on `/en/news/` it is **`Trump's Policy Updates`**. Three items follow,
all about US politics and tariffs, before anything else on the page.

This is National Bank's syndicated fragment and it is reproduced faithfully. It
is still the first impression on a page that is **61% of the French site's body
words and 62% of the English**. Registered as syndicated (S-series); not
registered as an editorial risk. On a Montréal wealth site whose product is
trust, roughly half of readers have a reaction to that headline before they read
a word the team wrote.

### 1.4 The English `/en/` tree is not a site you put a prospect in front of

Measured across the eight English pages, `<main>` only:

- **The team is named once.** `Wolf Archard Group`, in the homepage `<h1>` — and
  it is the misspelling. Four of the eight English pages (`/en/`, `/en/news/`,
  `/en/our-firm/`, `/en/services/`) name neither the group nor either advisor
  anywhere in their body. **3,900 of 4,470 English body words — 87% — sit on
  pages that never say who this is.** French: 3,800 of 5,662, or 67%; excluding
  the news page, French drops to 16% and English only to 66%.
- **The 76px hero line on the English homepage is `Our expert team is here to
  meet your financial needs`** — which appears **character-for-character in the
  same slot on another NBF advisor's homepage** in our archive. The largest type
  on the English site is a National Bank stock tagline.
- No mission, no commitments, no philosophy, no biographies for anyone —
  including the two partners who have 112 and 175 words in French.
- The services wheel is `img-diagram-wealth-management-services-your-wealth-advisor-blue.png`,
  National Bank's generic diagram. The French page uses bespoke artwork naming
  the team. The two `alt` strings describe them identically, which hides the
  difference from anyone auditing by text.

The build handles this well *as a design problem* — DESIGN_BRIEF §6 is honoured,
nothing renders an empty container, and the English pages read as composed rather
than broken. That is exactly the risk: **a thin page that looks deliberate stops
being visibly a problem.** If `/en/` is shown as a finished page rather than as
Q3's evidence, the strongest argument on the project gets quietly buried by our
own craft.

### 1.5 The demo's non-indexing depends on one unverified regex

`dist/robots.txt` as built is `Allow: /` with a live sitemap, and exactly **one
of 17 pages** carries `noindex` (the 404). The hardening lives in
`.github/workflows/deploy-pages.yml` as two `perl -pi -e` substitutions over
built HTML plus an overwrite of `robots.txt`.

The noindex insertion matches the literal string `<head>`. Nothing tests that it
fired. If a future Astro release emits `<head >`, or a minifier reorders the
document, the substitution silently no-ops and an unapproved co-branded National
Bank site — carrying NBFWM, CIRO and CIPF marks without NBF sign-off — enters
Google's index. The exposure is real and the guard is a string match.

Cheap fix: assert it. Three lines in the workflow that `grep -c noindex dist`
equals the HTML file count and fail the job otherwise.

---

## 2. Diluting the work — makes good work read as generic

### 2.1 Whose words these are, quantified

Two independent methods agree.

**Method A — National Bank's own markers.** Balanced-`<div>` extraction of every
`experiencefragment` wrapper in `source-assets/html/`, with visible-text word
counts:

| Capture | wrappers | words inside | share of page text |
|---|---|---|---|
| `fr-nos-services.html` | 2 | 211 / 794 | **26.6%** |
| `en-our-services.html` | 4 | 713 / 963 | **74.0%** |
| `fr-nouvelles-articles.html` | 1 outer (6 markers, 5 nested) | 3,239 / 3,379 | **95.9%** |
| `en-news-articles.html` | 1 outer (6 markers, 5 nested) | 2,718 / 2,834 | **95.9%** |
| the other 12 pages | 0 | — | 0% |

**The project's central finding holds.** English services carries four wrappers
against French's two; the French service descriptions are outside every wrapper
and the English ones are inside one. A prospect reading the French services page
hears this team for 73% of it; a prospect reading the English one hears National
Bank for 74% of it.

**One correction the client will find themselves.** `INTAKE.md` Q3 and
`CHANGES-FOR-APPROVAL.md` question 2 both say the wrappers appear on the services
pages and that **"Every other page carries none."** That is false: the two news
pages carry **six markers each**. The substance survives — news is separately and
correctly documented as syndicated — but the sentence as written is wrong, and
anyone who views source on their own page finds it in thirty seconds. Fix the
sentence before this goes out.

**Method B — cross-advisor identity.** Every normalised text block in the Wolf
Achard capture that appears character-identically in our Compagnat Reise capture,
with nav/footer chrome removed (24 shared blocks per language):

| | body words | identical to another advisor's site | **demonstrably theirs** |
|---|---|---|---|
| French, all 8 pages | 5,513 | 3,998 (72.5%) | **27.5%** |
| English, all 8 pages | 4,486 | 3,778 (84.2%) | **15.8%** |
| French, excl. news | 2,258 | 754 (33.4%) | **66.6%** |
| English, excl. news | 1,746 | 1,049 (60.1%) | **39.9%** |

This is a **lower bound on borrowed content** — it can only catch strings shared
with the single control site we hold. The English homepage's "unique" 39.9%
includes `Our team is made up of highly qualified investment professionals with
many years of experience in wealth management`, which is unique only because
Compagnat Reise happened to write their own.

Headline for the client, defensible and conservative: **at most a quarter of the
French words and at most a sixth of the English words on this site are
demonstrably this team's own.**

### 2.2 The two people whose names are on the door have the shortest entries on the team page

Word counts in each person's card region on `/equipe/`:

| | words |
|---|---|
| Laurent Achard — registered advisor | **15** |
| David Alexandre Wolf — registered advisor | **16** |
| Lysane Tougas — external partner, National Bank Trust | **112** |
| Jean-Francois Gobeil — external partner | **175** |

The external partners outrank the founding advisors by **7.0× and 11.7×**. This
is the `pitfalls.md` "external partner outranking a founding advisor" case, and
it is more extreme here than on the reference build. On `/en/team/` all four are
zero, so the English page solves it by having nothing.

Inherited, and correctly not invented. But it is the finding most likely to make
the client act, and it currently sits inside a 92 KB register rather than in the
five questions.

### 2.3 The homepage shows a stock yacht instead of the two men

`dist/index.html` `<main>` contains 17 images. Not one is a photograph of Laurent
Achard or David Alexandre Wolf. The set is: a National Bank banner
(`ban-page-accueil-groupe-wolf-achard`, `alt=""`), two bank stock photographs
(`img-page-accueil-poignee-de-mains` — a handshake — and
`img-page-accueil-homme-souriant-yacht` — a smiling man on a yacht), four
pictograms, three news teasers, and chrome logos.

The four headshots exist in `src/images/team/` and appear on exactly four pages:
`/equipe/`, `/contact/` and the two profile pages, plus English equivalents.
**Neither homepage carries a single photograph of a real person from this team.**

Both stock images are on the live site and reproduced verbatim, so this is
inherited. But `BENCHMARK.md` sets "Media above the fold: ≥1, **real people**"
and this is where we lose it — and the yacht is the most quotable asset on the
site for the wrong reason.

### 2.4 The `Notre firme` page still contains nothing about the firm

`/notre-firme/` is 353 `<main>` words, `/en/our-firm/` is 284, and **the team is
named zero times on either**. 100% National Bank, with every stale figure
reproduced verbatim and flagged: `424 milliards de dollars au 31 octobre 2023`,
`31 243 employés`, `Facebook, LinkedIn et Twitter`, and the French-only
`Investor Economics (mars 2019)` ranking — now seven years and four months old.

Correctly registered (C-35…C-37, C-40, R-10) and correctly not silently
refreshed. It remains a page in the client's own navigation that says nothing
about the client.

**One thing the reference build got wrong and this one did not:** the stat band
(`1 G$` / `200 G$` / `29%` / `9%`) appears on **2 of 17 pages** — the firm pages
only — and on neither homepage. The "borrowed credibility used twice" pitfall is
**not present here**. Worth saying out loud.

### 2.5 Machine-readable claims that no human reviewed

The live site carries **zero** `application/ld+json` — verified across all 16
captures. The rebuild adds a `FinancialService` block to **15 of 17 pages**
asserting, in machine-readable form:

```
"parentOrganization": { "@type": "Organization", "name": "Financière Banque Nationale - Gestion de patrimoine" }
"brand":              { "@type": "Organization", "name": "Financière Banque Nationale - Gestion de patrimoine" }
"name":               "Wolf Archard Group"        (English pages — the misspelling, propagated into structured data)
```

`CHANGES-FOR-APPROVAL.md` runs `NC-01`…`NC-07` for new copy and covers nav
labels, a footer heading, interface microcopy, the `PDF` badge, three field
labels and six alt strings. **It contains no row for the structured data, and
neither does `content/COMPLIANCE.md` — the strings `schema.org`, `ld+json` and
`JSON-LD` appear in neither file.**

Against this project's own standing rule — *"NEVER INVENT — no statistic,
disclaimer, credential, **relationship** or regulatory phrase the live site does
not carry"* — an unregistered assertion that a licensed advisor team is a
subsidiary and brand of a chartered bank is exactly the class of thing the
register exists for. It is invisible to visual review, it is the format search
engines ingest for knowledge panels, and it is ours, not inherited.

**And it is wrong on its own terms.** `ld.url` is the homepage URL on **13 of 15**
LD-bearing pages, contradicting each page's own `<link rel="canonical">`:

```
/contact/            ld.url = https://groupewolfachard.ca/         canonical = .../contact/
/en/services/        ld.url = https://groupewolfachard.ca/en/      canonical = .../en/services/
...11 more
```

Either register it and fix the URL, or delete the block. Half a day either way.

---

## 3. Engineering weight — cost without benefit

### 3.1 39% of the built site is bytes no page loads

`dist/` is 8,514,779 bytes. Cross-referencing every asset basename against all
HTML and CSS:

- referenced: 232 files, 3,988 KB
- **unreferenced: 20 files, 3,319 KB — 39.0% of the build**

All 20 are the source-format originals Astro emits alongside its WebP
derivatives. Every `<picture>` fallback in this build is itself a WebP, so no
page ever requests a `.png` or `.jpg`. The largest dead files are 429 KB, 358 KB
and 336 KB.

Harmless on static hosting; it makes the repo and every deploy artifact 1.7×
bigger than the site is, and it makes any future "how heavy is this page" answer
wrong by default. The pages themselves are well optimised — the home hero's four
WebP variants are 3.7–16.5 KB.

### 3.2 1,462 lines of type declarations for a 17-page static site

`src/` is 16,579 lines. Of that, `src/data/types.ts` (369) plus six
`src/data/pages/*.types.ts` files (1,093) is **1,462 lines — 8.8% of the
codebase — that emit no output.** Six near-parallel type modules for six page
shapes, on a site where each shape has exactly two instances.

The build-time integrity gate at the bottom of `advisors.ts` is the opposite of
this and is worth every line: it makes a silent mis-pairing of a licensed
advisor's phone number impossible. The page-type modules defend nothing
comparable.

Related: `Advisor.bio` is declared `BySurface<string[]>`, is `[]` for all four
advisors in both languages, and `bioFor()` is a function that can only ever
return `[]`. Documented as deliberate. It is still dead code shipped with a
justification.

### 3.3 Small stuff, priced honestly

- **2 stylesheets on 11 of 17 pages** against a benchmark target of 1. Astro's
  per-page scoped-style chunk. 4 KB.
- **No `<link rel="preload">` for either font**, on a site whose entire argument
  is typographic and whose hero is a 76px serif. Two lines in `BaseLayout.astro`.
- **28 KB of `.woff` fallbacks** shipped alongside the `.woff2` files for
  browsers this site will never meet.
- The two news pages link `https://www.youtube-nocookie.com/embed/<id>` as
  ordinary top-level anchors. That is verbatim from the capture, and it is the
  bank's URL, but an `/embed/` URL opened in a new tab shows a bare chromeless
  player rather than a YouTube page.

---

## 4. `pitfalls.md` verified against this build

Not assumed. Each row checked against `dist/` or the captures.

| Pitfall | Real here? | Evidence |
|---|---|---|
| No conversion mechanism | **REAL, and sharper** | 0 `<form>`; 79 `mailto:`, 131 `tel:` across 17 pages. The only header `btn-primary` on every page is `Accès client`; `/contact/` has no other button at all. |
| News page is a link farm exporting traffic | **REAL** | `/nouvelles/`: 25 anchors in `<main>`, **25 external, 25 `target="_blank"`, 0 internal**, 14 PDFs. `/en/news/`: 26/26/26/0, 15 PDFs. 61%/62% of each language's body words. |
| — politically-charged item first | **REAL** | First `<h2>` on both news pages is `Actualités politiques de Trump` / `Trump's Policy Updates`. |
| — stale "quarterly" section, duplicate entries, cross-wired descriptions | **not present** | Nine sections per language, no repeats between the featured block and its own section, no stale single-issue newsletter. |
| "Our firm" page contains nothing about the firm | **REAL** | 353 FR / 284 EN `<main>` words; team named 0 times; 2023 balance sheet, 31 243 employees, `Twitter`, March 2019 ranking, all verbatim. |
| Borrowed credibility used twice | **NOT present** | Stat band on 2 of 17 pages, both firm pages, neither homepage. |
| Generic values | **REAL in English only** | FR: `entrepreneurs et professionnels incorporés`, `sans fragiliser la santé financière de la compagnie`. EN: `Our integrity` / `Our professionalism` / `Our transparency`. |
| Uneven bios / partner outranks founder | **REAL, worse than reference** | 15 / 16 words for the two advisors; 112 / 175 for the two external partners. |
| Competitor comparison table, MFDA | **NOT present** | 0 occurrences of `MFDA` or `OCRCVM` in `dist/`. |
| Performance-adjacent invitation | **NOT present** | No equivalent of "Interested in our performance?". The only `rendement` is inside the team's own philosophy paragraph. |
| Two specialty pages 69% identical | **N/A** | This client has none. |
| Consent wall governing nothing | **NOT present** | 0 occurrences of `consent`; the 4 `cookie` hits are all inside `youtube-nocookie.com` URLs. 0 `<iframe>`, 0 third-party requests. |
| Known errors shipping deliberately | **REAL, registered** | `F-01`…`F-13` sic, pending a §6 amendment. |

**Technical traps — all avoided, verified:**

| Trap | Status |
|---|---|
| `export type` in `.astro` frontmatter | `astro check`: **0 errors, 0 warnings, 0 hints** across 79 files. |
| `position: sticky` on the inner bar | Sticky is on `<header>`; documented as note 1 in `Header.astro`. |
| 1px sentinel inside a sticky header | Not used — `main.ts` uses `window.scrollY > 8`. |
| `min-inline-size: 0` on the logo cluster | `flex: none` on `.bar__brands`, documented as note 2. |
| Hard-coded upscaling `widths` | **0 upscaled variants of 53 image stems** checked against source dimensions. |
| Byte-identical assets across languages | **Not present.** 2 duplicate groups in `src/images`, both the same person's headshot in `contact/` and `team/` — neither filename is language-stamped. Purity grep over `dist/` returns 3 hits, all false positives: `discutons-en`, `calculer-budget-en-ligne.html`, and one `www.nbc.ca/fr/` URL that is verbatim in the French capture. |
| Pipeline stripping non-breaking spaces | **Preserved.** 122 NBSP in `dist/`, distributed across 14 pages, consistent with the captures' 92. |
| Appending designations to a `name` field | Explicitly refused in `advisors.ts`; `displayName()` returns `name` unmodified. |

---

## 5. Benchmark, including where we lose

`--logo-h-bar: clamp(2rem, 16.25vw - 11rem, 4.5rem)` · `--header-h: max(4.75rem,
logo + 2.75rem)` · +1px border. Solved as closed form, not measured.

| Metric | Entourage | Target | This build | |
|---|---|---|---|---|
| Header height @ 1440 | 95px | 95–110 | **103px** | pass |
| Header height @ 1280 | — | 95–110 | **77px** | **fail, 19% under** |
| Header height @ 1900 | — | 95–110 | **117px** | **fail, over** |
| Width band where header ∈ 95–110 | — | — | **1391–1483px only, a 92px window** | **fail** |
| Logo height @ 1440 | 80px | 58–72 | **58px** | pass, at the floor |
| Logo height @ 1280 | — | 58–72 | **32px** | **fail** |
| First logo from viewport edge | 26–30px | ≤48 | **48px** at ≥1200px | pass at the exact boundary; **18–22px worse than the reference** |
| Nav link | 16px / 700 | ≥16px | **17px / 500** | pass on size, **lighter than the reference** |
| Full nav, no burger | — | down to 1280 | **`@media (min-width: 80rem)` = 1280px exactly** | pass |
| Hero message @ 1440 | 65px | ≥56 | **76px** | pass |
| Hero message @ 768 / 375 | — | ≥56 | **44px** (`clamp(2.75rem, 5.4vw, 4.75rem)` ≥56px only above 1037px) | fail on mobile |
| `<h1>` | 22px | may stay small | **22px** | pass |
| Scripts | 4 | 0–2 | **2 module scripts, 7 KB, same-origin** | pass |
| Stylesheets | 1 | 1 | **2 on 11 of 17 pages** | marginal fail |
| Body background | #F6F1ED | #F7F4EF | **#F7F4EF** | pass |
| Third-party requests | — | zero | **0** — 0 `<iframe>`, 0 external `<script src>`, 0 remote fonts | pass |
| `astro check` | — | 0 / 0 | **0 errors, 0 warnings, 0 hints** | pass |
| Broken internal links | — | 0 | **0 of 689**; 0 unresolved fragments; 0 missing `srcset` entries | pass |
| Media above the fold | 7 | ≥1, **real people** | homepage hero is a bank banner with `alt=""`; **0 photographs of either advisor on either homepage** | **fail** |

**The header is the honest loss.** The two benchmark bands — bar 95–110px and
lockups 58–72px — are only satisfied simultaneously across a 92px stretch of
viewport width. The comment block in `global.css` derives this correctly and
states the constraint (two ~3.21:1 French lockups cost 6.4px of bar width per 1px
of height), so it is a knowingly accepted trade, not an error. But a client on a
1280px laptop sees a 77px bar after asking for a bigger one, and that is the
width most likely to be in the room.

---

## 6. Ours versus inherited

The distinction matters more than any single item.

**Defects we introduced** — every one is cheap, and only the first two are
serious:

1. Unregistered `application/ld+json` on 15 pages asserting `parentOrganization`
   and `brand` for a regulated entity, plus the misspelling propagated into
   structured data. The live site has none. (§2.5)
2. `ld.url` wrong on 13 of 15 pages, contradicting each page's own canonical.
   (§2.5)
3. `Accès client` as the only header primary on 17 pages, and as the only button
   of any kind on both contact pages. (Fix this first)
4. Both homepages route all body links to `/nouvelles/` and `/contact/`, never to
   `/services/` or `/equipe/`. (Fix this first)
5. Four profile routes carrying 1.1% of the site's words. (§1.2)
6. 3,319 KB of unreferenced build output. (§3.1)
7. Demo non-indexing guarded by an untested string substitution. (§1.5)
8. `INTAKE.md` Q3 / register question 2 state "Every other page carries none"
   about the `experiencefragment` wrappers; the news pages carry six each. (§2.1)
9. 1,462 lines of page-type declarations; a permanently empty `bio` field with
   an accessor that cannot return anything else. (§3.2)
10. 2 stylesheets where the benchmark asks for 1; no font preload; 28 KB of
    `.woff` fallbacks.

**Inherited and deliberately reproduced** — every one is registered, and none
should be silently repaired:

- `Wolf Archard` throughout the English tree, 39 occurrences in the capture. Note
  the rebuild raises that to **48**, because it prints the group name in more
  places (footer, structured data). If the client answers "Achard is correct",
  the fix got 23% larger.
- Every stale National Bank figure on the firm pages, with as-at dates intact.
- Gobeil's `se prépare actuellement pour l'examen du CFA niveau III` — still the
  fastest-decaying sentence on the site, still correctly refused.
- Four contradictory assertions about Achard's languages.
- Trump block first on both news pages.
- Two bank stock photographs on the homepage and zero of the actual advisors.
- The English services page being National Bank's writing.
- `F-01`…`F-13` visible French errors, sic.
- One `http://` (not https) link each on the two firm pages, verbatim.

---

## 7. What a competitor says pitching against this site

Four sentences, all sourced from the built output, none unfair:

> "Their homepage shows a stock photo of a man on a yacht and a handshake, and
> not one picture of either advisor.
>
> Their English site spells their own name wrong on every page, and the biggest
> line on it is a sentence National Bank puts on every advisor's homepage.
>
> Their two advisors have identical titles and no biographies — but the two
> outside consultants they work with get 112 and 175 words each.
>
> And if you decide you want to talk to them, the only button on their contact
> page is a login for people who are already clients."

Every one is true of the built site today. Three are inherited. The fourth is
ours, and it is the one we can delete this afternoon.

---

## What I could not assess

Stated plainly, per instruction. The browser pane was not usable in this session
and I did not retry it.

- **Rendered layout at any viewport.** No screenshots. Header and type values
  above are computed from the `clamp()` arithmetic, which is exact, but I have
  not seen the pages.
- **Horizontal overflow at 375 / 768 / 1280 / 1440 / 1900.** `BENCHMARK.md`
  requires this and I cannot supply it. There is no `overflow-x` clip on `html`
  or `body`, so an overflow would surface as a visible scrollbar rather than be
  masked — which is the right choice, and also means it must actually be looked
  at.
- **Scroll-state behaviour** — the `data-scrolled` hairline, the shrunk bar, the
  mobile overlay focus trap, the contact-strip disclosure. All are in `main.ts`
  and read correctly, none was executed.
- **Real transfer weight of a first visit**, which needs a network panel. Static
  sizes only: FR home 56 KB HTML + 45 KB CSS + ~51 KB woff2 + 16.5 KB hero WebP.
- **Colour contrast ratios.** Tokens look conservative (`--color-ink #15181d` on
  `--color-paper #f7f4ef`) but I did not compute a single ratio.
- **Whether the 76px English hero tagline appears on all ~112 advisor sites.** I
  verified it against the one control capture we hold (Compagnat Reise). Every
  cross-advisor percentage in §2.1 is therefore a **lower bound**, not an
  estimate.
- **Compliance.** Deliberately not re-run — a separate agent is on
  `content/COMPLIANCE.md` §7. Where this document touches the register (§2.5) the
  question is whether *our own* additions are recorded, not whether the site is
  compliant.
