# src/assets — what is here

**REAL ARTWORK, wired 2026-08-02.** Every placeholder has been replaced from
`source-assets/images/` (the DAM originals, not the page renditions), and
`scripts/make-placeholder-assets.mjs` has been deleted — with real files in
place its `--force` flag would have destroyed them.

The mapping actually applied, and how each file got here:

| Here | From `source-assets/images/` | How |
|---|---|---|
| `logos/team-fr.svg` | `logo-cp-groupe-wolf-achard-L.svg` | byte copy |
| `logos/team-en.svg` | `logo-ia-wolf-achard-group-L.svg` | byte copy |
| `logos/nbfwm-fr.svg` | `logo-cp-fbngp-L.svg` | byte copy |
| `logos/nbfwm-en.svg` | `logo-cp-nbfwm-L.svg` | byte copy |
| `logos/ocri.svg` | `logo-ocri.svg` | byte copy |
| `logos/ciro.svg` | `logo-ciro.svg` | byte copy |
| `logos/fcpi.svg` | `logo-fcpi.svg` | byte copy |
| `logos/cipf.svg` | `logo-cipf.svg` | byte copy |
| `logos/nb-mark.svg` | `picto-logo-bn-24x22.svg` | byte copy |
| `logos/team-fr-on-ink.svg` | `logo-cp-groupe-wolf-achard-L.svg` | reversed, see below |
| `logos/team-en-on-ink.svg` | `logo-ia-wolf-achard-group-L.svg` | reversed |
| `logos/nbfwm-fr-on-ink.svg` | `logo-cp-fbngp-L.svg` | reversed |
| `logos/nbfwm-en-on-ink.svg` | `logo-cp-nbfwm-L.svg` | reversed |
| `images/og-default.jpg` | `bnc-logo.png` | 1200x630, PNG→JPEG q92 |

**The DAM holds no reversed artwork**, so the four `-on-ink` files are derived
here. The rule, applied mechanically:

1. `fill="#f2efe9"` on the root `<svg>`, so every path that carries **no** fill
   declaration reverses too. That is not a detail — the whole
   `FINANCIÈRE BANQUE NATIONALE` / `NATIONAL BANK FINANCIAL` wordmark, the rule
   under it, and the French word `Groupe` all ship unfilled and would otherwise
   render **black on the ink footer**.
2. Navy (`#274155` FR / `#00324d` EN) and the English olive `#79755d` → `#f2efe9`.
3. The white `WA` monogram → `#15181d`, because its navy plate reverses to cream
   and a white monogram on a cream plate is invisible.
4. Brand red is untouched: it lives in a `.st0 { fill: #de161d }` CSS rule inside
   the file, which beats the inherited root fill.

Nothing else in the artwork was altered. See CHANGES-FOR-APPROVAL.md **A-01**.

---

## `logos/` — the file names are the contract

`src/components/Logo.astro` imports these paths and picks the variant from the
page locale. **Drop a real file on top of a placeholder and nothing else needs
to change.** Never rename one; never hand a component a hand-picked lockup —
showing an English lockup on a French page is a compliance defect, and the
locale mapping lives in `Logo.astro` and only there.

| File | Source (DAM path on the live site) | Notes |
|---|---|---|
| `team-fr.svg` | `/content/dam/fbngp/logos/groupe-wolf-achard/logo-cp-groupe-wolf-achard-L.svg` | FR team lockup, ~3.21:1 |
| `team-en.svg` | `/content/dam/fbngp/logos/groupe-wolf-achard/logo-ia-wolf-achard-group-L.svg` | EN team lockup, ~3:1 |
| `team-fr-on-ink.svg` | same artwork, reversed | wordmark `#F2EFE9`, brand red preserved |
| `team-en-on-ink.svg` | same artwork, reversed | " |
| `nbfwm-fr.svg` | `/content/dam/fbngp/logos/logo-cp-fbngp-L.svg` | FBNGP co-brand lockup |
| `nbfwm-en.svg` | `/content/dam/fbngp/logos/logo-cp-nbfwm-L.svg` | NBFWM co-brand lockup |
| `nbfwm-fr-on-ink.svg` | same artwork, reversed | for the ink footer |
| `nbfwm-en-on-ink.svg` | same artwork, reversed | " |
| `ocri.svg` | `/content/dam/fbngp/logos/logo-ocri.svg` | FR regulator mark |
| `ciro.svg` | `/content/dam/fbngp/logos/logo-ciro.svg` | EN regulator mark |
| `fcpi.svg` | `/content/dam/fbngp/logos/logo-fcpi.svg` | FR protection-fund mark |
| `cipf.svg` | `/content/dam/fbngp/logos/logo-cipf.svg` | EN protection-fund mark |
| `nb-mark.svg` | `/content/dam/bnc/particuliers/picto/picto-logo-bn-24x22.svg` | one file, both languages |

Three rules that are not negotiable:

1. **Pull the ORIGINAL DAM asset, not the rendition the page displays.** The
   rendered `<img>` is a resized copy; the `data-asset` path is the master.
2. **Regulator artwork may never be recoloured.** There is deliberately no
   `-on-ink` variant of `ocri` / `ciro` / `fcpi` / `cipf` — on the dark footer
   they sit on a paper chip instead (`Footer.astro`, `.reg__chip`).
3. **Never scale a regulated lockup non-uniformly.** `Logo.astro` derives the
   width from the file's own intrinsic ratio; if a real SVG carries a `viewBox`
   but no `width`/`height`, Astro reads the `viewBox` — check the artwork rather
   than trusting a fallback ratio.

### The ramp, re-solved against the benchmark — 2026-08-02

`--logo-h-bar` was `clamp(2rem, 8vw - 5rem, 4.5rem)`. It protected the 1280 fit
but **never reached the benchmark band**: 35.19px lockups and a 79.19px bar at
1440, against targets of 58–72px and 95–110px. It is now

```
--logo-h-bar: clamp(2rem, 16.25vw - 11rem, 4.5rem);
```

solved from the two bands rather than chosen. With the fixed 2.75rem clearance,
`header ∈ [95,110]` and `lockup ∈ [58,72]` intersect at `lockup ∈ [58,66]` at
1440, and 58 is the member that spends the least width — so the curve is pinned
through **(1280 → 32px)** and **(1440 → 58px)**:

```
slope  = (58 − 32) / (1440 − 1280) = 0.1625 px/px = 16.25vw
offset = 0.1625 × 1280 − 32        = 176px        = 11rem
```

32px at 1280 is **bit-identical to the old ramp**, so the 1280 headroom is
untouched by construction, not by luck. The cap and the breakpoint did not move.

Re-measured in FRENCH on the real artwork, webfonts loaded, **transitions
disabled** (see the note at the end):

| viewport | content | lockup h | lockup w | ratio | bar h | `<header>` h | nav | headroom | overprint | overflow |
|---|---|---|---|---|---|---|---|---|---|---|
| 375 | 335 | 32 | 102.84 | 3.214 | 76 | 77 | burger | — | none | 0 |
| 768 | 673 | 32 | 102.84 | 3.214 | 76 | 77 | burger | — | none | 0 |
| 1200 | 1089 | 32 | 102.84 | 3.214 | 76 | 77 | burger | — | none | 0 |
| **1280** | **1169** | **32** | **102.84** | **3.214** | **76** | **77** | **full nav** | **37.20** | **none** | **0** |
| 1366 | 1255 | 45.97 | 147.75 | 3.214 | 89.97 | 90.97 | full nav | 33.39 | none | 0 |
| **1440** | **1329** | **58.00** | **186.42** | **3.214** | **102.00** | **103.00** | **full nav** | **30.05** | **none** | **0** |
| **1526** ← knee | 1415 | 71.97 | 231.33 | 3.214 | 115.97 | 116.97 | full nav | **26.23** | none | 0 |
| 1900 | 1789 | 72 | 231.42 | 3.214 | 116 | 117 | full nav | 400.05 | none | 0 |

`<header>` h is the bar plus its 1px hairline; the BENCHMARK snippet reads the
`<header>` box, so **103px is the number that answers the 95–110 band**.

**MEASURE AT THE KNEE, NOT ONLY AT THE ROUND NUMBERS.** Free space changes by
`1 − 6.4286 × 0.1625 = −0.0446px` per px of viewport while the ramp is climbing,
so it *shrinks* from 1280 up to the point where the 72px cap binds —
`16.25vw − 176 = 72` → **1526px** — and only grows after that. A pass that
samples 1280 / 1440 / 1900 never sees the tightest state on the site.

**And measure an interior page, not only the home page.** `.bar__link.is-active`
is heavier than its siblings, so the nav is 1–1.5px wider wherever a nav item is
the current page. Measured worst case on the whole site:

| page | viewport | header | lockup | headroom | overflow |
|---|---|---|---|---|---|
| `/` (no active item) | 1280 | 77 | 32 | 37.20 | 0 |
| `/` | 1440 | 103 | 58 | 30.05 | 0 |
| `/contact/` (active) | 1440 | 103 | 58 | 28.92 | 0 |
| `/` | 1526 | 116.97 | 71.97 | 26.23 | 0 |
| **`/equipe/`** (longest active label) | **1526** | **116.97** | **71.97** | **25.17** | **0** |

25.17px is the floor. The scrolled state is never the constraint — at 1526 it
drops the lockups to 59.02px and the bar to 96.02px, returning 108.45px.

*Latent* headroom below the breakpoint is unchanged from the previous pass: 1200
is **−42.8px short** if the desktop cluster were forced on, which is the measured
reason the breakpoint cannot drop below 1280 while the client-access button stays
(D-01, renumbered from `N-01` — see the mapping at the top of
`CHANGES-FOR-APPROVAL.md`).

Ratio note: the placeholders were 3.208:1 and the real French L lockups are
3.2143:1, a difference of 0.4px across both lockups at the 32px bar height, which
is why the 1280 arithmetic survived the artwork swap.

**The bar renders the `-L` variant at every breakpoint** — `Logo.astro` maps one
file per (kind, tone, locale) with no width-conditional switch, so the `-M` and
`-S` variants are not imported anywhere and never reach the DOM. If a responsive
variant switch is ever added, note that `logo-cp-groupe-wolf-achard-M.svg` is
**4.186:1** on a trimmed canvas and would blow the 1280 fit.

The four values that must still move together if any of this is re-solved:

- `--logo-h-bar` and `--breakpoint-nav` (`src/styles/global.css`)
- `NAV_BREAKPOINT` (`src/scripts/main.ts`)
- the two `@media (min-width: …)` blocks in `src/components/Header.astro`

Measurement note: CSS transitions do not advance while the automation tab is
`visibilityState: hidden`, so `block-size` and `min-block-size` read back at
their pre-resize values. Disable transitions before measuring or the 1440 and
1900 rows silently report the 32px floor:

```js
const k = document.createElement('style');
k.textContent = '*,*::before,*::after{transition:none!important;animation:none!important}';
document.head.append(k);
```

then resize, force a reflow (`void document.documentElement.offsetHeight`), and
read. **Sanity check: if two different widths report the same value for
something fluid, the numbers are stale.** The table above passes it — 32 / 45.97
/ 58 / 71.97 / 72 are five distinct readings.

---

## `images/`

| File | What it is |
|---|---|
| `og-default.jpg` | **The live site's own share card**, converted from `bnc-logo.png`: 1200×630, the red National Bank flag on white, no wording, so it is language-neutral. All 16 live pages serve exactly this as their `og:image`. It is **not** person-centred and it does not name the team — a purpose-made co-branded card remains an open pre-launch item, not a defect this pass invented. |

Everything else is the page agents' to add. Rules that apply to all of it:

- **Real photography of this team's own people beats everything.** It is the
  clearest signal the site is bespoke rather than a filled-in bank template.
- **Stock photography is a launch blocker, not a taste question** — licensing
  has to be cleared, and metaphor stock reads as template anyway. If a demo uses
  it, flag it in the register as demo-only.
- **Never upscale.** Check the source dimensions against the display width and
  the `widths` array before shipping a srcset that generates upscales.
- Campaign artwork with baked-in type must be `object-fit: contain` on a warm
  plate at a fixed frame — cropping slices words off the artwork.
- Alt text asserts nothing: no headcount, no "our team" for a partial group, no
  regulated status. Per language, always.
