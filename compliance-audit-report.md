# Pre-launch compliance audit — Groupe Wolf Achard / Wolf Archard Group

**Scope:** every check in `content/COMPLIANCE.md` §7 (1–58), run against **`dist/`**, not `src/`.
**Date:** 2026-08-03 · **Auditor:** independent audit pass, first to look at all 17 pages together.
**Build under test:** `npm run build` → 17 pages, clean. `npx astro check` → **0 errors / 0 warnings / 0 hints** (79 files).

> Nothing was changed. This is a report.

---

## Verdict

| | Count |
|---|---|
| **PASS** | 53 |
| **FAIL** | 3 — checks **40**, **55**, **58** |
| **PARTIAL** | 1 — check **49** |
| **N-A** | 1 — check **50** (no §6 policy amendment exists, correctly) |
| **Total** | 58 |

**No BLOCKER.** Three MUST-FIX items are in the build, four are in the documentation.
**The legal apparatus — the part that actually carries regulatory risk — is clean.** All ten
disclaimers are byte-exact, every marker resolves on its own page, every claim traces to a §4
row, both language trees are pure, and the build makes zero third-party network requests.

---

## Findings, ranked

### BLOCKER

*None.*

---

### MUST-FIX — in the build

#### M-1 · The NBSP census does not match, and the deviation has no register row — **check 40 FAIL**

**Measured.** Archive = **102 × U+00A0**, build = **122 × U+00A0**. (U+202F is **3 / 3**, all three
on `dist/en/our-firm/index.html`, on `More than⟦NNBSP⟧$200 billion`, `$424⟦NNBSP⟧billion` and
`31,243⟦NNBSP⟧employees` — check 41 **PASS**.)

Reconciled character by character against `source-assets/html/`:

| | Count | What |
|---|---|---|
| Live NBSPs **kept** | 82 | every U+00A0 that sits inside a client-facing sentence |
| Live NBSPs **dropped** | **20** | 16 × empty spacer paragraph `<p>&nbsp;</p>` (AEM vertical-rhythm artefact, no text) + 4 × trailing U+00A0 after `<br />` closing the partners' affiliation paragraph (2 FR, 2 EN) |
| **New** NBSPs shipped | **40** | 24 × the EN address in the global footer `ContactBlock` (3 per page × 8 EN pages) · 8 × the same address inside JSON-LD `streetAddress` · 8 × the relocated `We⟦NBSP⟧are⟦NBSP⟧here to help` eyebrow (D-07), on 4 EN pages |

82 + 20 = 102 ✔ 82 + 40 = 122 ✔

**Not one NBSP inside a sentence was lost.** Spot-verified on the hard cases: `Plus de<strong>⟦NBSP⟧200 G$`,
`29 %⟦NBSP⟧`, `31⟦NBSP⟧243 employés`, `TSX : NA).⟦NBSP⟧Suivez`, `Conseiller en gestion de patrimoine⟦NBSP⟧`
(FR H4, both advisors), `Jean-Francois Gobeil⟦NBSP⟧` — all present. The FR services marker NBSP moved
out of `<sup>` onto the caption exactly as **D-24** describes.

**Why it is still a MUST-FIX.** §0 says NBSPs are *"preserved byte-for-byte… No build step may
normalise, collapse or substitute either."* Twenty archived U+00A0 do not ship, and **no `D-` row
records that.** A deliberate character-level departure from a stated character-level policy needs a
register row, or the next reader concludes the pipeline is silently normalising legal text.

**Recommended disposition — the build is right, the check is wrong.** Restate check 40 as a
*class* rule rather than a total, because the total cannot survive the rebuild's own architecture
(D-07 puts the address in every footer; the count is a function of page composition, not fidelity):

> *Every U+00A0 and U+202F inside a client-facing sentence in the archive is reproduced. Empty spacer
> paragraphs (`<p>&nbsp;</p>`) and trailing spacers after `<br />` are not content and do not ship.
> New NBSPs may only appear inside a verbatim string relocated under a registered `D-` row.*

Then add the `D-` row for the 20 drops. Files: `src/components/Footer.astro`,
`src/components/ContactBlock.astro`, `src/layouts/BaseLayout.astro` (JSON-LD).

#### M-2 · One of the four verbatim footer `<nav>` aria-labels does not ship — **check 55 FAIL**

`content/COMPLIANCE.md` §1.1 / §1.2 list **four**, in order:

```
Information and contact links / Regulatory links / Legal notes and social media / Partners
Liens d'informations et de contact / Liens de règlementation / Notes légales et réseaux sociaux / Partenaires
```

The build ships **three**. `Partners` / `Partenaires` is absent from all 17 pages: `Footer.astro`
merges the regulatory row (zone 3) and the legal bar (zone 4) into a single
`<nav class="legal-region" aria-label="Notes légales et réseaux sociaux">` (`src/components/Footer.astro:235`).
The regulator marks — OCRI/CIRO, FCPI/CIPF, LinkedIn — therefore sit inside the *legal-notes* landmark
rather than their own *Partners* landmark.

The build also introduces a **fourth, unregistered** footer nav: `<nav class="col" aria-label="Navigation">`
/ `"Navigation"` (the site-nav column, `Footer.astro:183`), which has no live counterpart. And the header
nav is labelled `Navigation principale` / `Main navigation` where the live site says `main menu` in
**both** languages — a sensible repair of the N-10 defect, but N-10's aria-label half has no register
row either.

Either ship the fourth landmark, or register the merge and the two new labels. Neither is a
client-facing string, so this is cheap — but check 55 is currently red.

#### M-3 · Contact tap targets are 28 px, not 44 px — **check 58 FAIL**

`src/components/ContactBlock.astro:138` sets `min-block-size: 28px` on `.contact__value`. Measured in
the browser at 375 × 812 with transitions suppressed: **40 contact targets under 44 px** across the
six pages that render `<ContactBlock>` — every `tel:` and `mailto:` link on `/`, `/services/`,
`/notre-firme/` and their `/en/` twins renders **28 px** tall.

This is inconsistent with the site's own floor: `Footer.astro` applies `min-block-size: 44px` to
`.f-link`, `.cta__phone` and `.legal__link`, and `OfficeBlock` targets clear it. Only `ContactBlock`
misses. Check 58 states the 44 px requirement explicitly for contact targets on a WCAG-AA-obligated
bank property.

*(Related, but not a failure: the `<sup>` note-reference links measure ~7–9 × 11–13 px. WCAG 2.5.8's
inline exception covers targets inside a sentence, so they are defensible — noted as A-6 below.)*

#### M-4 · A regulated footnote renders at 95 characters per line

Measured with per-character `Range` rects at 1440 and at 1900, transitions suppressed, across 192
multi-line text blocks. **Four blocks exceed 75 characters per rendered line:**

| Page | Block | Max chars/line |
|---|---|---|
| `/notre-firme/` | `.note__body` — the **C-35 Investor Economics ranking note** | **95** |
| `/nouvelles/` | `.vblock__blurb` × 2 | 78 |
| `/en/news/` | `.vblock__blurb` | 77 |

Everything else is ≤ 74; the median block is 40; the longest video-transcript paragraph is 74. The
`--measure: 48ch` calibration holds everywhere it is applied — these four blocks simply do not apply
it. The worst offender is the one string on the site that most needs to be read: a verbatim regulated
competitive-ranking claim (§1.7, C-35). `src/pages/_firme/RankingNote.astro`,
`src/pages/_nouvelles/VideoBlock.astro`.

---

### MUST-FIX — in the documentation

> The two checks I was asked to look at specifically were rewritten this hour. **Check 12's rewrite is
> coherent. Check 51's is not** — it still contradicts the register in two places, which is the exact
> failure mode the rewrite existed to end.

#### M-5 · Check 51 lists two N-items as "unchanged" that the register deliberately changed

Check 51's **first** list — *"Unchanged, verbatim, still exactly as live — verify against the capture"* — includes:

- **N-09** — *"the EN profile pages' French `View website` target, **not** silently repointed."*
  **`CHANGES-FOR-APPROVAL.md` D-21 removes the `Voir le site Web` / `View website` line entirely.**
  Measured: zero occurrences of `View website` or `fbngp.ca/conseiller/groupe-wolf-achard` anywhere in
  `dist/`. The build followed D-21. It is neither "repointed" nor "exactly as live", so it fails a
  check that was rewritten precisely so that a correct build would stop failing by design.
- **N-12** — *"the 4 advisor headshots' absent `alt`, not invented."*
  **`CHANGES-FOR-APPROVAL.md` NC-07 invents exactly those four descriptions**, and check **57**, four
  lines further down the same document, *requires* them: *"the 4 headshots whose `alt` attribute is
  genuinely absent get an explicit decision (the rebuild ships NEW COPY, `CHANGES` NC-07…)."*
  Measured: `alt="Laurent Achard, Conseiller en gestion de patrimoine"` and its three siblings all
  ship. **Check 51 contradicts check 57 inside one document.**

**The build is right; both bullets belong in check 51's second list** (the three items with a
registered, applied disposition), alongside N-07, N-14 and N-15. Move them, cite D-21 and NC-07, and
say what failure looks like — same shape as the N-14 and N-15 bullets already there.

Everything else check 51 guards is intact, including its real job:
`Wolf Archard` survives verbatim (N-01), `(FPCI)` survives on all 9 FR pages (N-02),
`National bank` lowercase survives in disclaimer 4 (N-03), `Jean-Francois` / `Jean-François` each on
its own surface (N-04), `Montreal` / `Montréal` (N-05), `See Our Contact Details` casing (N-06), the
duplicated EN toolbox URL (N-08), and the leading `*` on the FR ranking note (N-15 second half).
**Nobody "corrected" the client's name.**

#### M-6 · Check 12's code-comment warning is stale — the drift is already fixed

Check 12's warning box says *"Eleven citations across six files under `src/` cite `D-11` … `D-14` for
the four services-page decisions the register numbers `D-24` … `D-27`… Fixing them is a code change
and is listed for the code agent, not done here."*

**Measured: it has been done.** Those five files now cite `D-24`…`D-27` in the counts the box predicts —
`data/pages/services.en.ts` (D-24, D-25, D-26 ×2), `data/pages/services.fr.ts` (D-24 ×2),
`pages/en/services/index.astro` (D-24, D-25, D-26 ×2), `pages/services/index.astro` (D-24),
`pages/_services/ServiceBlock.astro` (D-27). **Zero `D-11`…`D-14` citations remain in any services
file.** The 14 surviving `D-11`…`D-14` citations elsewhere are all correct: `Footer.astro` and
`BaseLayout.astro` cite D-11 for the CTA band, `contact.fr.ts` cites D-12 for the `Nous Joindre`
casing, `OfficeBlock.astro` cites D-13 for the pictograms, `team.{fr,en}.ts` and both team pages cite
D-14 for the notes panel.

Delete the warning box. Leaving it tells the next auditor to distrust correct code. *(The box also
says "six files" and then lists five.)*

#### M-7 · R-14 is factually wrong about the affiliation-line NBSP

`content/COMPLIANCE.md` R-14 states: *"It transcribes the partners' affiliation line as
`Financière Banque Nationale - Gestion de patrimoine ⟦NBSP⟧`; the raw markup is `…patrimoine<br /> ` —
a `<br />` and an ordinary space, **no NBSP**."*

The raw markup is `Gestion de patrimoine<br />  </p>` — `<br />`, a space, **and a U+00A0**.
Verified at byte level in `source-assets/html/fr-notre-equipe.html` (2 occurrences) and
`en-our-team.html` (2 occurrences). The inventory's transcription is right; R-14 is wrong. This matters
because R-14 is the row that tells the reader the inventory over-marks NBSPs, and it is also one of the
four characters M-1 shows the build drops — so the wrong reason is attached to a real deviation.

R-15 by contrast is **correct**: `BUILD-CONTEXT.md:51` describes `<sup> 1, 2, 3</sup>` as having a
"leading space"; the raw is `<sup> 1, 2, 3</sup>` — U+00A0. Fix `BUILD-CONTEXT.md`, not R-15.

---

### ADVISORY

- **A-1 · `Wolf Archard` now appears 48 times in the EN tree, not 39.** The archive figure is confirmed
  (39 EN / 36 FR `Wolf Achard`, zero crossover either way — I re-counted the captures). The build ships
  48 / 46 with still **zero crossover**: no `Achard` in the EN tree, no `Archard` in the FR tree. The
  increase is the rebuild's own markup — `og:site_name`, JSON-LD `name`, header/footer lockup
  `aria-label` — plus the two EN profile pages going 0 → 4 because they now wear the microsite chrome
  instead of the corporate chrome (AP-04). **Restate the expected figure as "zero `Achard` in EN, zero
  `Archard` in FR" rather than a count**, or the next reviewer will read 48 as contamination.

- **A-2 · Check 49's "F-01 … F-13 all sic" is true for ten rows and inapplicable to three.**
  F-01 (`patrimoin ,`), F-02, F-03, F-04, F-05, F-06, F-07 (`Photo of··Laurent`), F-08, F-12
  (`Laurent Achard , ` ×6 on both profile pages), F-13 (`patrimoine··|`) all ship **sic** ✔.
  **F-09, F-10 and F-11's live strings do not exist in `dist/` at all** — not because a fix was applied,
  but because the surfaces carrying them were replaced: the team-page photo `alt` by **NC-07**, the
  contact pictograms by inline SVG under **D-13**. Give check 49 the same one-line carve-out it already
  gives F-14, naming NC-07 and D-13.

- **A-3 · The same photograph carries two different descriptions on two pages.** NC-07's scope is
  *"Team page + all four advisor profile pages"*, so `/equipe/` shows
  `alt="Laurent Achard, Conseiller en gestion de patrimoine"` while `/contact/` — same photo, same
  advisor — keeps the live, truncated `alt="Photo de Laurent Achard, Conseiller en gestion de
  patrimoin , membre de l'équipe expert."` (F-01). Both are correct per the register. It is worth the
  client seeing it stated that way, because "we fixed the description on one page and left it broken on
  the other" is how it will read at sign-off.

- **A-4 · Check 57's "4 + 14" no longer describes what ships.** Zero `<img>` lack an `alt` attribute ✔.
  But the build carries **48** valueless-`alt` images: the 14 the check names (12 hero banners + 2
  `img-projet-loi-899`) **plus 34 team lockups** (`team-{fr,en}.svg` and `team-{fr,en}-on-ink.svg`, one
  of each per page). Those 34 are not accessibility failures — the wrapping `<a>` carries
  `aria-label="Groupe Wolf Achard — Accueil"` / `"Wolf Archard Group — Home"`, which is the correct
  pattern — but **§3.1's documented lockup alt (`Logo Groupe Wolf Achard` / `Wolf Archard Group logo`)
  does not ship**, and that is an unregistered departure from a documented verbatim string. Register it,
  and update 57's arithmetic.

- **A-5 · P-4's whitelist has three entries; only two can fire in this build.** Entry 2
  (`https://www.nbc.ca/fr/article/…` on FR news) and entry 3 (`https://client.bnc.ca/nbfwm/home` on all
  8 EN pages) are present and are the **only** cross-domain hits in either direction — measured over
  `dist/`, both ways, hostname by hostname. Entry 1 (`logo-cp-fbngp-s.svg`, the wordless flag shared by
  both trees) **cannot occur**: `Logo.astro` ships distinct `nbfwm-fr.svg` / `nbfwm-en.svg` at every
  breakpoint by design. Check 28 says "exactly three… and no others", which sends the auditor hunting
  for a third that no longer exists. Say "two live entries; entry 1 is retired by the asset rename."

- **A-6 · Footnote-marker tap targets are 7–9 × 11–13 px.** WCAG 2.5.8's inline exception covers them,
  so this is not a failure — but on a bank property the note references are the smallest interactive
  targets on the page. Worth padding.

- **A-7 · `See our contact details` now appears on 2 EN pages, not 4.** C-24 records the label on
  `en-home`, `en-our-team`, `en-our-services` and `en-news-articles`. Under D-07/D-11 it survives only
  where `<ContactBlock>` renders — `/en/` and `/en/services/` — while `/en/team/` and `/en/news/` show
  the footer band's `Contact us` instead. The C-24 casing conflict is still visible (`See Our Contact
  Details` on `/en/our-firm/`, lower-case on the other two), so nothing is lost for the client
  conversation; the distribution simply changed. Same for `Voir nos coordonnées` in French (3 pages).

- **A-8 · The EN profile pages now render the address twice, in two different registered forms.**
  `/en/team/laurent-achard/` shows C-22 form (ii) — `1 Place Ville-Marie, Suite 1700, Montreal, Quebec,
  H3B 2C1` — in the advisor record, and C-22 form (i) — `1, Place Ville-Marie⟦NBSP⟧Suite 1700` /
  `Montreal⟦NBSP⟧QC⟦NBSP⟧H3B 2C1` — in the global footer. Each is verbatim for its own surface, so C-22
  is satisfied, but the contradiction the register wanted the client to *see* is now visible on one
  page. Arguably an improvement. Worth a sentence in the client note.

- **A-9 · AP-02's descriptive clause no longer matches.** AP-02 says the four profile pages *"carry no
  disclaimer accordion, no `<sup>` markers, and no contact strip… must stay that way."* The operative
  disposition holds: **zero accordions, zero markers, zero notes on all four** ✔. But the rebuild's
  site-wide `<ContactStrip>` and footer `<ContactBlock>` do render there. Reword the descriptive half.

- **A-10 · `BUILD-CONTEXT.md` carries three statements the evidence contradicts.** Line 37 writes the
  advisor's name **`David-Alexandre Wolf`**, hyphenated, against §2.1 and D-09 (and against the live
  site: zero `David-Alexandre` in any capture or in `dist/`). Line 51's "leading space" is a U+00A0
  (R-15). Line 83's "consent script loaded six times" is the Adobe Launch tag manager loaded three
  times (R-11). R-11 and R-15 already say so; the hyphen does not appear to be flagged anywhere.

- **A-11 · Dropping the EN services `*` also dropped the space before it.** Raw:
  `specialists. *<sup>1, 2, 3</sup>`. Shipped: `specialists.<sup …>`. D-26 says *"Nothing else on the
  sentence changed"*; a space did. Typographically correct, but the register sentence is now slightly
  untrue.

- **A-12 · `src/components/ServiceRow.astro` has zero importers.** Dead file; nothing from it reaches
  `dist/`. Delete or document.

---

## Check-by-check result

### A · Legal blocks (1–9) — 9/9 PASS

| # | Result | Evidence |
|---|---|---|
| 1 | PASS | `© NBFWM. All rights reserved 2026.` on all 8 EN pages, exactly once each |
| 2 | PASS | `© FBNGP Tous droits réservés 2026.` on all 8 FR pages + the 404; no period after `FBNGP` |
| 3 | PASS | `new Date` / `getFullYear`: **zero** in `src/`, `astro.config.mjs` and `dist/`. Copyright is a frozen literal |
| 4 | PASS | FR 1–5 measured **220 / 399 / 310 / 107 / 82** on `/services/` **and** `/equipe/`. Diffed against `source-assets/html/fr-nos-services.html`: identical. Apostrophes: note 2 = 2 × U+2019 (`l’équipe`, `d’experts`) + 1 × U+0027 (`qu'à`) in one sentence, as documented; note 3 = 3 × U+0027; note 4 = 1 × U+0027; note 5 = 1 × U+2019 |
| 5 | PASS | EN 1–5 measured **164 / 340 / 258 / 68 / 69** on `/en/services/` **and** `/en/team/`; `National bank` lower-case intact in item 4 |
| 6 | PASS | `<ol>` of five `<li>`, document order, no truncation. `<details>` keeps all text in the DOM; `main.ts` force-opens on `beforeprint` and on hash navigation, with a CSS fallback |
| 7 | PASS | No sixth note, no adapted wording |
| 8 | PASS | Five distinct EN strings per §1.6; `collaborators.` on Insurance, `specialists.` on the other four |
| 9 | PASS | `Certains services sont offerts par des tiers` — once, **no terminal period**; zero per-service FR footnote sentences |

### B · Footnote integrity (10–16) — 7/7 PASS

| # | Result | Evidence |
|---|---|---|
| 10 | PASS | 11 marker links across 4 pages; every `href="#legal-note-N"` resolves to an `id` on the same page. Zero orphans |
| 11 | PASS | Full five-note panel on **both** team pages (D-14), applied symmetrically |
| 12 | PASS | Matches §1.5 *as shipped* exactly. `/services/` FR: one `<sup>` → refs 1,2,3, five notes. `/en/services/`: **six** `<sup>` in document order `1,2,3` · `1` · `1` · `2` · `2` · `3`, five notes. `/equipe/` + `/en/team/`: `2` then `1`, five notes. Other 12 pages: zero markers, zero notes. See **M-6** on the stale warning box |
| 13 | PASS | `<sup class="note-ref"><a href="#legal-note-N" aria-label="Note légale N">` — real element, programmatic reference, localised label |
| 14 | PASS | **Zero U+2081** anywhere in `dist/`. Zero `<sub>` elements anywhere |
| 15 | PASS | Notes 4 and 5 render in full on all four accordion pages; `data-legal-refs="1,2"` / `"1,2,3"` selects markers only |
| 16 | PASS | Approach-step numbers are `<h3>1. Understand your needs</h3>` inside an `<ol class="steps">` — different element, different size, non-adjacent to any `<sup>` |

### C · Identity (17–24) — 8/8 PASS

| # | Result | Evidence |
|---|---|---|
| 17 | PASS | `Conseiller en gestion de patrimoine⟦U+00A0⟧` on the FR H4, both advisors, `/contact/` and `/equipe/`; profile-page H3 without the NBSP, matching the capture (0 NBSP on both FR profile pages). `Jean-Francois Gobeil⟦U+00A0⟧` intact |
| 18 | PASS | Zero designations or letters after either advisor's name |
| 19 | PASS | Only two `tel:` values in the whole build — `tel:+15143951937` (×74) and `tel:+15144120370` (×57). E.164 on the profile pages too (C-23 / D-23) |
| 20 | PASS | **Zero** `@nbc.ca` on any FR page, **zero** `@bnc.ca` on any EN page. Measured per page, both directions |
| 21 | PASS | `Français, anglais, italien` (FR team + contact) · `Français, Anglais, Italien` (FR profile) · `English` (EN team + contact) · `French, English, Italian` (EN profile). All four variants alive, nothing harmonised. Same for C-08 |
| 22 | PASS | EN contact: two lines, all three U+00A0. EN profiles: `1 Place Ville-Marie, Suite 1700, Montreal, Quebec, H3B 2C1`. FR: `1 Place Ville-Marie, Bureau 1700, Montréal (Québec) H3B 2C1`. See A-8 |
| 23 | PASS | Zero `Sans-frais`, `Toll-Free`, `Télécopieur`, `Fax`. `Footer.astro` renders those rows only if the data file declares them; neither language file does |
| 24 | PASS | `Jean-Francois` in headings and alt (2 per team page), `Jean-François` in the FR biography body — same page, both intact |

### D · Marks and links (25–32) — 8/8 PASS

| # | Result | Evidence |
|---|---|---|
| 25 | PASS | Every FR page: `nbfwm-fr.svg` + `team-fr.svg`. Every EN page: `nbfwm-en.svg` + `team-en.svg`. Zero cross-language lockups. FR artwork 225×70, EN 210×70 — the 7.1 % width difference §3.1 records |
| 26 | PASS | FR footers: `ocri.svg` → `ocri.ca`, `fcpi.svg` → `fcpi.ca`. EN: `ciro.svg` → `ciro.ca`, `cipf.svg` → `cipf.ca`. Alt text verbatim, **including the `(FPCI)` transposition** on all 9 FR pages (N-02) |
| 27 | PASS | Zero hits for `Regulated by`, `Member of CIRO`, `CIPF member`, `Réglementé par`, `Membre du FCPI`, `Member of CIPF`, `Membre de l'OCRI`. The advisor-report link is the only regulatory label |
| 28 | PASS | Run over `dist/`, both directions, hostname by hostname and asset by asset. Only whitelist hits: `client.bnc.ca/nbfwm/home` (8 EN pages) and `nbc.ca/fr/article/…` (FR news). Zero fourth hits. See A-5 |
| 29 | PASS | Every footer link is host-absolute per language (`www.fbngp.ca/…` FR, `www.nbfwm.ca/…` EN, `bnc.ca`/`nbc.ca` where the capture has them). **Zero** `/contact.html`-style root-relative paths survive. *Live 200-resolution against the bank's hosts was not tested — out of scope for an offline audit* |
| 30 | PASS | Exactly **34** distinct publication PDFs + 6 `/documentation/…` links, all host-absolute. **Zero dated filenames** — no year, quarter or month in any PDF path (P-14) |
| 31 | PASS | FR `Accès client` → `https://client.bnc.ca/fbngp/login`; EN `Client Access` → `https://client.bnc.ca/nbfwm/home` |
| 32 | PASS | Alt text is in the page's own language throughout. No alt asserts a headcount, credential, relationship or regulated status. NC-07's six read `Name, Title` and nothing more |

### E · Claims and characters (33–41) — 8 PASS, 1 FAIL

| # | Result | Evidence |
|---|---|---|
| 33 | PASS | Enumerated every digit sequence in visible text across all 17 pages. Firm-page set is exactly C-28…C-37. Team-page bio dates are C-10 (1998), C-11 (2004), C-15 (2015), C-18 (`plus de 8 ans`), C-17 (`CFA niveau III`). All other digits are phone numbers, the address, the copyright year and the C-49 video transcripts. **Zero unlisted numbers** |
| 34 | PASS | `près de 850` FR only, `over 850` EN only |
| 35 | PASS | `100 succursales` / `100 branches`, unchanged |
| 36 | PASS | `424 milliards de dollars au 31 octobre 2023` and `$424 billion in assets as at October 31, 2023` — dates intact, not rounded |
| 37 | PASS | `Twitter` still `Twitter`, both trees. `TSX : NA` keeps its space in FR; `TSX: NA` has none in EN |
| 38 | PASS | `<p class="note__body">*Financière Banque Nationale…(mars 2019).` — **leading `*` present**, `d&#39;actifs` is U+0027, **French only** (zero `Investor Economics` in `dist/en/`) |
| 39 | PASS | `Depuis 1902` / `Since 1902`; no computed "years since" anywhere |
| **40** | **FAIL** | 122 × U+00A0 against 102. U+202F is 3/3, all on the EN firm page. **See M-1** |
| 41 | PASS | `31⟦U+00A0⟧243 employés` FR · `31,243⟦U+202F⟧employees` EN · `Plus de<strong>⟦U+00A0⟧200 G$` FR · `More than⟦U+202F⟧$200 billion` EN. The two characters are **not** unified |

### F · Prohibitions (42–48) — 7/7 PASS

| # | Result | Evidence |
|---|---|---|
| 42 | PASS | EN home: **0** `ruled__item` list items against the FR home's 13. EN team: no `Biographie`, 1 690 chars of text against the FR page's 3 833. EN firm: no ranking footnote |
| 43 | PASS | FR services: no `class="steps"` block, 17 `<li>` against EN's 68. `Our approach` not translated |
| 44 | PASS | `#274155` appears **only** in the FR tree (`team-fr.svg`, 9 pages); `#00324d` **only** in the EN tree (`team-en.svg` 8 pages + 4 approach pictos on `/en/`). Zero mixing. The `#e41c23` third red (D-05) ships as supplied, per that row |
| 45 | PASS | Zero testimonials, client quotes, ratings, case studies. The one `review` hit is `quarterly review` in an NBI video blurb |
| 46 | PASS | Zero `guaranteed`, `garanti`, `risk-free`, `past performance`, `benchmark`, `annualized`, `outperform`. No growth/arrow motif adjacent to portfolio copy |
| 47 | PASS | **Runtime network trace, cold load, all 17 pages: 247 resource requests, 0 to any foreign host.** Zero `<iframe>`, `<embed>`, `<object>`. Fonts self-hosted (`_astro/instrument-*.woff2`). The two YouTube references are `<a href>` links to `youtube-nocookie.com`, not embeds — nothing is fetched |
| 48 | PASS | Zero `<form>` elements |

### G · Editorial fixes (49–51) — 1 PARTIAL, 1 N-A, 1 PASS-with-doc-defect

| # | Result | Evidence |
|---|---|---|
| **49** | **PARTIAL** | Ten of thirteen F-rows ship **sic** and are verified individually. F-09, F-10, F-11's surfaces were replaced under NC-07 / D-13, so their strings are absent — not a fix, but the check has no words for it. **F-14 is correctly applied**: `Flash info` → `flash-info.webp`, `Guide fiscalité et investissement` → `guide-fiscal-quebec-2025.webp`, and **both alt strings are byte-identical to the capture**. See **A-2** |
| 50 | N-A | No §6 policy amendment exists. Correct |
| 51 | PASS (build) / **doc defect** | The first list holds for eight of ten items; N-09 and N-12 contradict D-21 and NC-07. The three applied dispositions verify: N-07 corrected, **zero U+2081** (N-14), the EN `*` gone with its three numbered references intact (N-15 first half), the FR `*` present (N-15 second half). **See M-5** |

### H · Accessibility and language plumbing (52–58) — 5 PASS, 2 FAIL

| # | Result | Evidence |
|---|---|---|
| 52 | PASS | Every page: exactly **1** `<html>`, **1** `<head>`, **1** `<body>`, **1** canonical. `lang="fr-CA"` on 9 pages, `lang="en-CA"` on 8, each matching the page's actual language. `hreflang` triples (`fr-CA` / `en-CA` / `x-default`) pair every page with its own counterpart across the asymmetric slugs. The toggle preserves the page on all 16. **The 404 trap is handled correctly**: one static 404 for the whole site, French, `lang="fr-CA"`, with the two English words (`Back to home`) inside their own `lang="en-CA" hreflang="en-CA"` link, and no `hreflang` alternates because it has no counterpart |
| 53 | PASS | Native `<details>`/`<summary>` — keyboard-operable, state exposed, text always in the DOM, reachable by Ctrl-F, `main.ts` opens it on `#legal-note-N` and on `beforeprint`, restores state on `afterprint` |
| 54 | PASS | `@media print` reverses the whole footer to black-on-white and force-expands `.legal-notes__details:not([open])` |
| **55** | **FAIL** | Three of four verbatim aria-labels. **See M-2** |
| 56 | PASS | **Zero** `href="#"` in `dist/`. D-22 gave `< Voir tous les conseillers` / `< See all advisors` a real target |
| 57 | PASS | **Zero** `<img>` without an `alt` attribute. Disposition mismatch noted in **A-4** |
| **58** | **FAIL** | 40 contact targets at 28 px. **See M-3** |

---

## Things the brief asked me to be suspicious of

| # | Result |
|---|---|
| 1 | **FR `notre-firme` `*` — present.** `<p class="note__body">*Financière Banque Nationale…`. **EN services `*` — dropped**, three numbered references beside it intact and resolving. Both correct (D-26, N-15). *(A-11: the space before the `*` went too.)* |
| 2 | **`David Alexandre Wolf` unhyphenated in every display string.** Zero `David-Alexandre` in `dist/`. The hyphen appears only in `/equipe/david-alexandre-wolf/`, `/en/team/david-alexandre-wolf/` and `photo-david-alexandre-wolf.*`. *(`BUILD-CONTEXT.md:37` still hyphenates it — A-10.)* |
| 3 | **Home `<title>` carries the firm name.** `Groupe Wolf Achard \| Financière Banque Nationale - Gestion de patrimoine` and `Wolf Archard Group \| National Bank Financial - Wealth Management` |
| 4 | **`Wolf Archard` survives verbatim, 48 occurrences, zero `Achard` in the EN tree.** Archive figure of 39 confirmed; the delta is the rebuild's own markup — A-1 |
| 5 | **Nothing lost attributes in the component promotion.** `astro check` 0/0/0; **zero** empty `href`/`src`/`srcset`/`id`/`aria-label`/`aria-labelledby`; **zero** duplicate `id`s on any page; **zero** dangling `aria-labelledby` / `aria-controls` / `aria-describedby`; **zero** `undefined`, `null`, `NaN` or `[object Object]` in output; zero broken internal links, `#`-anchors, cross-page anchors or `srcset` candidates across all 17 pages. *(`ServiceRow.astro` is orphaned — A-12.)* |
| 6 | **No call to action was deleted.** The band is suppressed on exactly the 8 pages D-11 names (home / services / firm / contact, both languages) and rendered on the other 9. **Every one of the 17 pages carries both advisors' `tel:` and `mailto:`, a link to its own contact page (3–4 per page), and the contact strip.** *(Label distribution changed — A-7.)* |

## Also verified

- `npm run build` — 17 pages, clean · `npx astro check` — **0 / 0 / 0**
- **Zero** `[[TODO-ARCHIVE]]` in `dist/`. The seven hits in `src/` are prose inside code comments documenting the sentinel, not sentinels
- **Zero horizontal overflow** — 17 pages × 5 widths = **85 measurements**, `scrollWidth − clientWidth = 0` in every one
- **Header sizing cross-checks the arithmetic.** With `*{transition:none!important;animation:none!important}` injected before measuring: **32 px lockups / 77 px bar at 375, 768 and 1280**; **58 px / 103 px at 1440**; **72 px / 117 px at 1900** (`--logo-h-bar: clamp(2rem, 16.25vw - 11rem, 4.5rem)` at its 4.5rem ceiling). The viewport resized
- **Line length** — 192 multi-line blocks measured per character; 4 over 75 (M-4); median 40; longest transcript paragraph 74. `--measure: 48ch` holds where applied
- C-47's two 200-character blurbs both ship, differing by exactly one character (`é` / `É`). Not deduplicated

---

## One sentence for the client note

The regulated surface of this build is sound — ten byte-exact disclaimers, every footnote
resolving, both language trees pure, every figure traceable, and not a single third-party
request — and the three things that fail are a tap-target height, a missing landmark label
and a character census whose target number the rebuild's own architecture cannot produce.
