# Design brief — Groupe Wolf Achard

Binding for presentation. **`content/COMPLIANCE.md` wins on wording, and the raw
capture in `source-assets/html/` wins over both.** This brief is not evidence: if
it asserts a string, verify it before shipping it.

## 1. Concept — the method made visible

Compagnat Reise led with heritage ("50 ans d'expérience"). **This team's own copy
leads with process.** Their French site is built on `Notre mission`,
`Nos engagements`, `Ce qui nous distingue`, `Notre philosophie` and a four-step
`Un processus éprouvé` where every step carries a described paragraph.

That is unusually concrete for an advisor site, it is genuinely theirs, and it is
the thing their English site is missing entirely. So the site's argument is:
**this team can tell you exactly how they work, and most cannot.**

Clarity over grandeur. Calm, precise, generous with space. Nothing decorative
that a competitor could paste onto their own page.

## 2. Palette

Tokens live in `src/styles/global.css` and nowhere else. Never hard-code a hex.

```
--color-paper        #f7f4ef    the world
--color-paper-raised #ffffff    cards
--color-greige       #eae5dd    the single tint block per page
--color-hairline     #dcd5ca    list rules
--color-card-border  #e7e1d8    white card on paper
--color-ink          #15181d    footer + small chrome ONLY
--color-on-ink       #f2efe9
--color-nb-red       #de161d    measured from their own logo SVGs
--color-stone        #6e6861    icons rest here
```

**No navy anywhere in the design system.** Their two lockups carry *different*
navies (`#274155` FR, `#00324d` EN) plus an olive that appears only on the
English word `Group`. Adopting either would clash with the other language's own
artwork. Warm paper sidesteps the conflict entirely, and the lockups keep their
supplied colours untouched. Registered as a client question, not a design choice.

**Red is disciplined.** At rest it appears only on disclaimer superscripts and
focus rings. Never on buttons, ticks, icons, or rules.

Independent support for the direction: entourageconseils.ca — the site rated best
for feel — runs on `#F6F1ED`.

## 3. Typography

Instrument Serif (display) + Instrument Sans Variable (body), self-hosted, latin
+ latin-ext only. Roman serif for large headings. **No italic accents, no
decorative numerals** — numerals near copy collide with the numbered disclaimer
markers, and this client already has marker problems.

**The hero rule, and it matters:** the client's verbatim `<h1>` stays exactly as
captured, sized to whatever the hierarchy wants. The large message goes in a
**non-heading element beside it, ≥56px**. Measured on Entourage: their `<h1>` is
22px, their 65px message is a styled `<p>`. Visual hierarchy and heading
hierarchy are separate problems. Nothing compliance-approved is replaced, and the
message is additive new copy needing only an `NC-` row.

## 4. Layout

`--container-site` capped for a 60–75 character measure. Asymmetric splits
(5/7, 6/6) over centred columns. Hairlines only where a list genuinely needs
ruling. Band rhythm: mostly paper, **at most one tint block per page**, ink in
the footer only. Two tint blocks on a page means the page is fighting itself.

Cards 16px radius, buttons pills, `--card-border` on white over paper.

## 5. Motion

150–300ms, transform and opacity only, ease-out entering. One or two moving
elements per view. `prefers-reduced-motion` respected everywhere. Nothing moves
that does not explain a cause.

## 6. The English problem — a design constraint, not a content one

The English tree is materially thinner: no mission, no commitments, no
philosophy, no biographies, and four process steps that are bare labels with no
descriptions. **We may not write English copy to fill it** (P-5) — that is a
client commissioning decision, registered as `INTAKE.md` Q3.

So the design must let a thin page read as *composed* rather than *broken*:

- **Never render an empty container.** No card grid with three of six filled, no
  heading over an absent list. If a section's content does not exist in a
  language, that section does not exist in that language.
- **Let the English pages breathe rather than stretch.** Fewer sections at larger
  type and wider margins reads as confident; the same sections padded out reads
  as missing.
- **The process is the exception worth composing carefully.** French gets
  hairline-ruled rows with a described paragraph per step. English has labels
  only, so it gets a compact single-line rail — the same information design at a
  smaller scale, not a French layout with holes in it.
- Both languages must be able to stand alone. Nobody sees them side by side.

## 7. Page blueprints

FR shown; EN mirrors **except where the archive records a divergence**, which is
often. Confirm every section against the capture before building it.

**Home** — hero: verbatim `<h1>` + ≥56px message + headshot pair or single image
in a 16px card · mission · commitments · what distinguishes them · the four-step
process (ruled rows, described) · philosophy pull-quote · services teaser ·
contact CTA. *EN: hero, bare-label process rail, services teaser, CTA. No
mission/commitments/philosophy sections at all.*

**Équipe** — verbatim `<h1>` · the two advisors as large cards linking to their
profile pages · the service team · partners. FR carries biographies for Tougas
and Gobeil inside their own cards; EN carries none, so EN cards are simply
shorter. **Both languages currently render orphan disclaimer markers `1` and `2`
with no accordion — the rebuild either resolves them to a rendered accordion or
does not ship them. Do not reproduce an orphan reference.**

**Services** — verbatim `<h1>` · intro · seven service blocks in the capture's
own per-language order (FR and EN differ) · `Notes légales` accordion, all five
disclaimers, always, in order. *EN additionally has `Our approach`.* FR
`Philanthropie` references Fondation Philantra with an outbound link; EN does not
mention it.

**Nouvelles** — verbatim `<h1>` · publications directory grouped under the live
H2s in live order · PDF/video affordances · **every link exactly as captured, no
dated filenames pinned.** This is National Bank's syndicated content; read
`references/nbf-platform.md` first.

**Notre firme** — verbatim `<h1>` · the bank's own copy with its stated as-at
dates intact · light stat row, attributed, never re-cut as undated display
numerals · regulator marks unlabelled · FR-only ranking footnote in its live
position.

**Contact** — verbatim office block **including label colons** · both advisors ·
map or address card. Route is `/contact/` and `/en/contact/`, a deliberate change
from the live `nous-joindre` / `contact-us`; registered.

**Advisor profiles** — `/equipe/<slug>/` and `/en/team/<slug>/` for Laurent
Achard and David-Alexandre Wolf, from one shared `src/data/advisors.ts` so the
team page and profiles cannot drift. Identity renders from that single source.

## 8. Compliance — non-negotiable

Verbatim · never invent · language purity · every deviation gets a register row ·
marker implies the full accordion on the same page · claims and figures freeze
while National Bank's syndicated publications track National Bank · copyright is
a frozen string · alt text asserts nothing, and with **no group photo anywhere on
this site**, nothing may be described as "the team".

## 9. Quality bar

Measured, not eyeballed, at 375 / 768 / 1280 / 1440 / 1900 in **French** (the
binding locale — French lockups are 7.1% wider at the same height).

| | Target | Source |
|---|---|---|
| Header height | 95–110px | Entourage 95px |
| Full nav, no burger | **down to 1280px** | Entourage shows six items at 1440 |
| Nav link size | ≥16px | Entourage 16px/700 |
| Hero message | ≥56px | Entourage 65px |
| Logo from viewport edge | ≤48px | Entourage 26–30px |
| Scripts / stylesheets | 0–2 / 1 | Entourage 4 / 1 |
| Third-party requests | **zero** | our differentiator |
| `astro check` | 0 errors, 0 warnings | |
| Broken internal links | 0 | |
| Horizontal overflow | none at any tested width | |

Plus, before any page is called done: `verbatim-sweep.mjs` run strict with every
miss accounted for by name, and a cross-language leak grep clean in both
directions.
