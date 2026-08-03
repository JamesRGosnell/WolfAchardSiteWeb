# COMPLIANCE.md — Groupe Wolf Achard / Wolf Archard Group rebuild

Compiled 2026-08-02 from `source-assets/html/` (16 raw captures), `content/content-inventory.md`
and `content/assets-manifest.md`. Every string below was re-verified against the raw markup,
not against the inventory transcription. Where this file and the raw capture disagree,
**the capture wins** — and fix this file rather than the build.

---

## 0. Preamble

**Precedence.** Raw HTML capture > content inventory > this file > design brief.
A design brief is not evidence. For *presentation* the brief wins; for *wording, claims and
figures*, the capture wins, always.

**Three standing rules.**

- **VERBATIM** — client-facing strings are character-for-character from the live site,
  including typos, doubled spaces, mixed apostrophes and inconsistencies.
- **NEVER INVENT** — no statistic, disclaimer, regulatory phrase, credential, relationship
  or date the live site does not carry.
- **LANGUAGE PURITY** — FR pages carry only FR lockups/URLs/emails/marks (`fbngp.ca`,
  `@bnc.ca`, OCRI, FCPI); EN pages only the EN set (`nbfwm.ca`, `@nbc.ca`, CIRO, CIPF).
  **Three measured exceptions, one in each direction plus a shared asset** — the full list
  is P-4 and it is the ONLY list; a naive grep produces a false positive on every one of
  them, in both directions.

**Character-level policy, decided once, here.** **Every non-breaking space that sits inside a
client-facing sentence is preserved exactly** — U+00A0 stays U+00A0, U+202F stays U+202F, and
no build step may normalise, collapse or substitute either. The archive contains **102 ×
U+00A0** and **3 × U+202F** across the 16 pages; **82 of the 102 are in-sentence and all 82
ship.** The other 20 are presentational whitespace with no text attached — 16 empty spacer
paragraphs (`<p>&nbsp;</p>`) and 4 trailing spacers after `<br />` — and they do **not** ship.
**A whitespace-only node is layout, not content**; the rule protects characters inside
sentences, not the archive's vertical rhythm. Reconciled character by character and registered
as `CHANGES` **D-32**; the class rule is §7 check 40. Mixed apostrophes (U+2019 / U+0027 inside
one sentence) are reproduced as served.

> ⚠ **This paragraph used to read "preserved byte-for-byte… exactly 102 × U+00A0", full stop.**
> That is a *total*, and a total cannot survive the rebuild's own architecture: D-07 puts the
> verbatim address in every footer, so the build ships **122**, and the count became a function
> of page composition rather than of fidelity. The absolute wording failed an audit that was
> actually passing. **The property that matters — not one NBSP lost from inside a sentence —
> is unchanged and is now what the policy states.**

**Status of this document.** This is a **spec/pitch build**. The client has commissioned
nothing and cannot answer questions mid-build. Every `F-` fix below is **PENDING** — no
editorial-fix policy amendment has been granted (§6). Default behaviour until one is:
**ship verbatim with a flag.** *(One exception, and it is not an editorial fix: `F-14`
changes no string. §6.4.)*

### 0.1 Which series lives in which document

**This table is the authority. `CHANGES-FOR-APPROVAL.md` carries the identical table, and
the two must be changed together.** Six agents wrote to these two files in parallel and the
`N-` and `AP-` series each collided — the same ID meaning two different things depending on
which file the reader had open, which is exactly how a reader reads them: side by side.

| Series | Lives in | Meaning | Numbering |
|---|---|---|---|
| **`C-`** | **both** | Claim — anything assertable | `C-01` … `C-53` **here** · `C-54` → `CHANGES` |
| **`F-`** | **both** | Editorial fix to a live defect | `F-01` … `F-13` **here** · `F-14` → `CHANGES` |
| **`AP-`** | **both** | Advisor profile pages | `AP-01` … `AP-03` **here** · `AP-04` → `CHANGES` |
| **`N-`** | **this file only** | Flag-only. A live defect we will **not** repair, because repairing it is a legal, identity or regulatory decision | `N-01` … `N-15` |
| **`P-`** | **this file only** | Prohibition — a standing rule the build must not violate | `P-1` … `P-16` *(no leading zero, deliberately — a `P-` is a rule, not a row)* |
| **`R-`** | **this file only** | Risk found during review, including risks in our own documents | `R-01` … `R-33` |
| **`D-`** | `CHANGES` **only** | Build decision the client confirms | `D-01` … `D-32` |
| **`NC-`** | `CHANGES` **only** | New copy written for the rebuild | `NC-01` … `NC-07` |
| **`S-`** | `CHANGES` **only** | Syndicated National Bank content | `S-01` … `S-08` |
| **`A-`** | `CHANGES` **only** | Brand artwork substitutions | `A-01` … `A-05` |
| **`U-`** | `CHANGES` **only** | URL change | `U-01` |

**A shared `C-`, `F-` or `AP-` row may be *restated* in the other file under the same ID —
that is a cross-reference, not a collision.** `F-01` is drafted in `content/COMPLIANCE.md`
§6.1 and presented to the client here; both describe one defect. **A collision is one ID
meaning two different things**, which is what `N-` and `AP-` did. The numbering column above
says where each number is *allocated*, not where it may appear.

Three rules follow, and all three were broken at least once during the parallel build:

1. **A shared series is one ascending count, never two.** A new `C-`, `F-` or `AP-` row takes
   the next free number **across both files**.
2. **A single-document series is never *defined* in the other file** — only cited, and a
   citation should name the file it points into (`content/COMPLIANCE.md N-07`).
3. **Every table is in ascending ID order.** Renumbering is a last resort: these IDs are cited
   in code comments under `src/`, and a renumber that stops at the documents leaves the code
   pointing at the wrong row. That has already happened once — see the note under §7 check 12.

**Resolved collisions, for the record.** `CHANGES-FOR-APPROVAL.md` renamed its `N-` series to
`D-` (2026-08-02) and its `AP-01` … `AP-03` to `AP-04` … `AP-06` (2026-08-02). **Nothing in
this file moved.** An `N-`, `P-` or `R-` reference anywhere in this repository means this
file, always.

---

## 1. Verbatim legal blocks — paste-ready

### 1.0 Finding: there is NO long-form footer disclosure paragraph on this site

**Checked all 16 archived pages.** Every `<footer>` was parsed and every `<p>` inside it
measured. **Zero footer paragraphs exceed 60 characters** on any page in either language.
The footer contains only: the four-column link bar, the second-level legal link row, the
copyright line, the LinkedIn glyph and the two regulator marks.

> **There is no disclosure paragraph to paste.** If any brief, template or agent instructs a
> builder to reproduce "the full NBF/NBC disclosure paragraph as on the current site", there
> is no source for it and synthesising one would put a fabricated legal notice on a regulated
> page. See R-01.

### 1.1 Footer legal block — ENGLISH (identical on all 8 EN pages, verified)

Column headings and links, in document order:

```
Help and contact
  Contact us                                   /contact.html
Useful links
  Find an advisor                              /advisor.html
  Regulatory information                       /about/regulatory-information.html
  Complaint settlement                         /complaint-settlement.html
About us
  Our organisation                             /about.html
  National Bank of Canada                      https://www.nbc.ca/personal.html
  Our subsidiaries                             https://www.nbc.ca/contact-us.html
  Careers                                      /career.html
Stay tuned
  Press releases                               https://www.nbc.ca/about-us/news-media.html
```

Second-level legal row, in order:

```
User agreement                    /user-agreement.html
Privacy policy                    https://www.nbc.ca/privacy-policy.html
Digital data policy               /digital-data-policy.html
ABCs of security                  https://www.nbc.ca/abcs-of-security.html
Accessibility                     https://www.nbc.ca/about-us/esg/accessibility-statement.html
Accessibility Progress Report     https://www.nbc.ca/about-us/esg/accessibility-progress-report.html
Accessibility feedback process    https://www.nbc.ca/about-us/esg/accessibility-plan.html#2.2
```

Copyright line — **a FROZEN string, never computed** (note the period after `NBFWM`):

```
© NBFWM. All rights reserved 2026.
```

Marks and their exact alt text:

```
picto-logo-bn-24x22.svg    alt="National Bank"
picto-social-linkedin.svg  alt="LinkedIn, external link which opens in a new tab."
                           → https://www.linkedin.com/company/financi-re-banque-nationale/
logo-ciro.svg              alt="Canadian Investment Regulatory Organization (CIRO), external link which opens in a new tab."
                           → https://www.ciro.ca/
external-link.svg          alt=""
"See advisor reports of the CIRO"  → https://www.ciro.ca/office-investor/know-your-advisor-advisor-report
                           aria-label="See advisor reports of the CIRO, external link which opens in a new tab."
logo-cipf.svg              alt="Canadian Investor Protection Fund (CIPF), external link which opens in a new tab."
                           → https://www.cipf.ca/
```

Footer `<nav>` aria-labels, verbatim, in order:

```
Information and contact links   /   Regulatory links   /   Legal notes and social media   /   Partners
```

Header nav aria-label: `main menu` (lowercase, in **both** languages — see N-10).

### 1.2 Bloc légal du pied de page — FRANÇAIS (identique sur les 8 pages FR, vérifié)

```
Aide et contact
  Nous joindre                                 /contact.html
Liens utiles
  Trouver un conseiller                        /conseiller.html
  Informations réglementaires                  /a-propos/informations-reglementaires.html
  Résolution des insatisfactions               /resolution-insatisfactions.html
À propos de nous
  Notre organisation                           /a-propos.html
  Banque Nationale du Canada                   https://www.bnc.ca/particuliers.html
  Filiales Banque Nationale                    https://www.bnc.ca/coordonnees.html
  Carrières                                    /carriere.html
Restez à l'affût
  Communiqués                                  https://www.bnc.ca/a-propos-de-nous/nouvelles-medias.html
```

```
Convention                                             /convention.html
Politique de protection des renseignements personnels  https://www.bnc.ca/politique-de-confidentialite.html
Politique sur les données numériques                   /politique-donnees-numeriques.html
ABC de la sécurité                                     https://www.bnc.ca/abc-securite.html
Accessibilité                                          https://www.bnc.ca/a-propos-de-nous/esg/enonce-sur-accessibilite.html
Rapport d'étape sur l'accessibilité                    https://www.bnc.ca/a-propos-de-nous/esg/rapport-etape-accessibilite.html
Processus de rétroaction en matière d'accessibilité    https://www.bnc.ca/a-propos-de-nous/esg/plan-accessibilite.html#2.2
```

Ligne de droits — **chaîne FIGÉE** (noter : **pas** de point après `FBNGP`, contrairement à l'anglais) :

```
© FBNGP Tous droits réservés 2026.
```

Marques et textes alternatifs exacts :

```
picto-logo-bn-24x22.svg    alt="Banque Nationale"
picto-social-linkedin.svg  alt="LinkedIn, lien externe qui s'ouvre dans un nouvel onglet."
                           → https://www.linkedin.com/company/financi-re-banque-nationale/
logo-ocri.svg              alt="Organisme Canadien de Réglementation des Investissements (OCRI), lien externe qui s'ouvre dans un nouvel onglet."
                           → https://www.ocri.ca/
external-link.svg          alt=""
"Consultez les rapports Info-Conseiller de l'OCRI" → https://www.ocri.ca/bureau-des-investisseurs/rapport-info-conseiller
                           aria-label="Consultez les rapports Info-Conseiller de l'OCRI, lien externe qui s'ouvre dans un nouvel onglet."
logo-fcpi.svg              alt="Fonds Canadien de protection des investisseurs (FPCI), lien externe qui s'ouvre dans un nouvel onglet."
                           → https://www.fcpi.ca/
```

> ⚠ **`(FPCI)` is what the live markup says** — the acronym is transposed (correct form is
> `FCPI`, as used correctly in disclaimer 3 on the same site). It ships **sic**. Flag-only,
> **N-02** — do not correct it; it is inside a regulator identification string.

`<nav>` aria-labels FR, dans l'ordre :

```
Liens d'informations et de contact  /  Liens de règlementation  /  Notes légales et réseaux sociaux  /  Partenaires
```

> Note `règlementation` (the 1990-rectified spelling) in the second aria-label. Ships sic.

### 1.3 Les notes légales numérotées — FRANÇAIS · **DIFFED, byte-identical**

> **DIFF RESULT (2026-08-02): all five FRENCH disclaimers are byte-identical to the
> platform-standard text in `assets/COMPLIANCE.template.md`.** Extracted from
> `source-assets/html/fr-nos-services.html`, whitespace-collapsed to rendered form, compared
> character-by-character. Measured lengths **220 / 399 / 310 / 107 / 82** — matching the
> reference-client figures exactly. **National Bank has not revised its French wording.**
> No register row required.

```
1. Les planificateurs financiers sont autorisés à agir dans la discipline de planification financière. Ils exercent leurs activités pour le compte de la Financière Banque Nationale inc., cabinet en planification financière.
2. Nous travaillons en étroite collaboration avec l’équipe fiscalité, retraite et succession de Banque Nationale Trust, composée d’experts multidisciplinaires dont les connaissances et les conseils viennent compléter notre offre de services. Ces experts nous accompagnent pour fournir les meilleures solutions pour vos finances personnelles liées à la fiscalité, à la retraite ainsi qu'à la succession.
3. Les produits et services d'assurance sont fournis par le Cabinet d'assurance Banque Nationale inc. (CABN) ou les Services Financiers FBN (SFFBN), selon le cas. CABN et SFFBN ne sont pas membres du Fonds canadien de protection des investisseurs (FCPI). Les produits d'assurance ne sont pas protégés par le FCPI.
4. Les solutions de financement sont octroyées sous réserve de l'approbation de crédit de la Banque Nationale.
5. Pour tous les détails et conditions de l’offre, communiquez avec votre conseiller.
```

**Mixed apostrophes, confirmed in this client's markup.** Item 2 uses U+2019 in `l’équipe`
and `d’experts` but **U+0027** in `qu'à la succession` — *inside the same sentence*. Item 5
uses U+2019 (`l’offre`). Items 3 and 4 use U+0027 throughout. Reproduce exactly; a
normalising pipeline silently rewrites legal text.

Accordion title, verified: `Notes légales`, rendered as
`<h2 class="cmp-accordion__header"> <button …> <span class="cmp-accordion__title">Notes légales</span>`.
Container id `notes-legales`. It is the **8th of 8** accordion items on the FR services page.

### 1.4 The numbered disclaimers — ENGLISH · **DIFFED, byte-identical**

> **DIFF RESULT (2026-08-02): all five ENGLISH disclaimers are byte-identical to the
> platform-standard text.** Extracted from `source-assets/html/en-our-services.html`.
> Measured lengths **164 / 340 / 258 / 68 / 69**. **National Bank has not revised its English
> wording.** No register row required.

```
1. Financial Planners are authorized to act in the field of Financial Planning. They exercise their duties for National Bank Financial Inc., a financial planning firm.
2. We work closely with the Taxation, Retirement and Estate Planning Team from National Bank Trust, made up of multidisciplinary experts who provide knowledge and advice that complement our service offering. These experts assist us in providing the best solutions for your personal finances related to taxation, retirement and estate planning.
3. Insurance products and services are provided by National Bank Insurance Firm (NBIF) or by NBF Financial Services (NBFFS), as applicable. NBIF and NBFFS are not members of Canadian Investor Protection Fund (CIPF). Insurance products are not protected by CIPF.
4. Financing solutions are subject to credit approval by National bank.
5. For details and conditions of the offer, please contact your advisor.
```

`National bank` in item 4 is lowercase on the live site. **Ships sic** (N-03).

Accordion title, verified: `Legal Disclaimers`, rendered as
`<h3 class="cmp-accordion__header">` — **one heading level lower than the French `<h2>`**.
Container id `disclaimer`. 8th of 8 items.

> **Heading-level asymmetry is a live defect, not a choice.** FR `<h2>` vs EN `<h3>` for the
> same block on parallel pages. The rebuild must pick one level per language tree and record
> it; either choice is a deviation from one language's live markup. See N-11.

### 1.5 Attachment map — which disclaimer attaches to what, on which page

Built by extracting **every** `<sup>` and `<sub>` element from all 16 captures. **Two
columns, and the distinction is load-bearing:** *as captured* is the live site, which is
what a diff against the archive must match; *as shipped* is the rebuilt output, which is
what §7 checks 10–16 test. They differ in exactly four places, each one a registered
decision, and **no wording differs between them at all**.

| Marker, as captured | Attaches to (verbatim) | FR | EN | As shipped |
|---|---|---|---|---|
| `⟦NBSP⟧1, 2, 3` | `Certains services sont offerts par des tiers` *(no terminal period)* | `nos-services` | — | One `<sup>` carrying **three** `<a>` links → `#legal-note-1` / `-2` / `-3`. **The U+00A0 moves out of the marker onto the caption text** and is preserved byte-for-byte; the marker element itself is clean (D-24) |
| `1, 2, 3` | `Certain services are offered by third party specialists. *` *(period, space, stray asterisk)* | — | `our-services` | Same three-link `<sup>`. **The stray `*` does not ship** (D-26 — see the orphan note below) |
| `⟦NBSP⟧1` | `These services are offered by third party specialists.` — **Financial planning** block | — | `our-services` | `<sup>` link, unchanged. U+00A0 preserved on the sentence (D-24) |
| `2` | `These services are offered by third party specialists.` — **Estate planning** block | — | `our-services` | `<sup>` link, unchanged (D-24) |
| `2` | `These services are offered by third party specialists.` — **Tax planning** block | — | `our-services` | `<sup>` link, unchanged (D-24) |
| `3` | `These services are offered by third party collaborators.` — **Insurance** block | — | `our-services` | `<sup>` link, unchanged (D-24) |
| `2` | `Conseillère principale, planification successorale` (Lysane Tougas) | `notre-equipe` | — | `<sup>` link. **Now resolves** — the full five-note panel was added to the page (D-14) |
| `1` | `Planificateur financier` (Jean-Francois Gobeil) | `notre-equipe` | — | `<sup>` link. **Now resolves** (D-14) |
| `2` | `Senior Advisor, Estate Planning` (Lysane Tougas) | — | `our-team` | `<sup>` link. **Now resolves** (D-14) |
| `1` | `Financial Planner` (Jean-Francois Gobeil) | — | `our-team` | `<sup>` link. **Now resolves** (D-14) |
| **not a `<sup>`** | `<sub>These services are offered by third party specialists.⟦NBSP⟧₁</sub>` — **Portfolio management** block, marker is a literal **U+2081 SUBSCRIPT ONE** inside a `<sub>` wrapping the *whole sentence* | — | `our-services` | **Normalised.** Sentence ships as ordinary text; the marker ships as a real `<sup>1</sup>` link like the other four. U+00A0 preserved on the sentence. **Zero U+2081 in the build** (D-25, N-14) |

**Marker discipline — as captured, and as shipped:**

| Page | `<sup>` markers **as captured**, document order | Accordion, live | `<sup>` markers **as shipped** | Five notes, shipped | Verdict, shipped |
|---|---|---|---|---|---|
| `fr-nos-services` | `⟦NBSP⟧1, 2, 3` | **yes** (`Notes légales`) | one `<sup>` → refs 1, 2, 3 | **yes** | Resolve |
| `en-our-services` | `1, 2, 3` · `⟦NBSP⟧1` · `2` · `2` · `3` (+ the U+2081 sub) | **yes** (`Legal Disclaimers`) | **six `<sup>`**: `1, 2, 3` (wheel caption) · `1` (Portfolio management, **was the `<sub>`/U+2081**) · `1` (Financial planning) · `2` (Estate planning) · `2` (Tax planning) · `3` (Insurance) | **yes** | Resolve |
| `fr-notre-equipe` | `2` · `1` | **NO** ⚠ | `2` · `1`, unchanged | **yes — added, D-14** | Resolve |
| `en-our-team` | `2` · `1` | **NO** ⚠ | `2` · `1`, unchanged | **yes — added, D-14** | Resolve |
| the other 12 pages | *none* | no | *none* | no | Consistent |

> **Read the two `<sup>` columns for `en-our-services` together.** Five became six and
> **nothing was added** — the sixth is the `<sub>`/U+2081 marker promoted into the same
> element type as its four neighbours. The count of *disclaimer references on the page* is
> unchanged at six. A raw `<sup>` count that ignores the `<sub>` will read this as an
> invented marker; that is the error §7 check 12 used to encode.

**As captured** — the two live defects this map exists to record:

- [x] **Pages with an accordion but no markers:** *none.*
- [x] **Pages with markers but no accordion:** `fr-notre-equipe` **and** `en-our-team`
      — **the defect exists in BOTH language trees, symmetrically.** ← P-12 violation,
      R-03. **Disposition (a) applied in both languages, symmetrically: D-14.**

**Two further orphans, of the opposite kind:**

1. **Disclaimers 4 and 5 are cited by nothing, in either language.** No `<sup>4</sup>` or
   `<sup>5</sup>` exists anywhere in the 16-page archive. Both render in the services
   accordion, referenced by no marker. Disclaimer 4 (credit approval) sits on a page whose
   Banking-solutions block makes financing claims; disclaimer 5 (offer conditions) sits on a
   page whose Banking-solutions block makes fee claims. Neither block carries a marker.
2. **Two stray `*` references with no footnote — and they are not the same kind of thing.**
   - `en-our-services`: `Certain services are offered by third party specialists. *<sup>1, 2, 3</sup>`
     — an asterisk immediately before the superscript. No `*` footnote exists on the page.
     **A dangling reference: it points, and there is nothing at the other end.**
     **As shipped: dropped (D-26).** Under the rebuild's rule below, a reference resolves or
     it does not ship. Nothing else on the sentence changed, and the three numbered
     references beside it now resolve. Reversible in one character.
   - `fr-notre-firme`: the accordion `Petits détails pour tout savoir` opens
     `*Financière Banque Nationale…`. No `*` appears anywhere else on the page.
     **Not a dangling reference — it is the first character of a verbatim regulated
     sentence** (§1.7, C-35), which is where a footnote's *text* lives, not where a pointer
     to one lives. **As shipped: present, verbatim, leading `*` intact** (§7 check 38).
     Deleting it would edit a regulated string; the English one deletes nothing but a
     pointer. **The rule below distinguishes them; a check that says "both stray `*` must
     survive" does not, which is why check 51 was rewritten.**

> ### THE REBUILD'S RULE — state it, enforce it in §7
>
> **Markers resolve or they do not ship.** Every page that renders a `<sup>` disclaimer
> marker MUST render the **full 1–5 disclaimer set on that same page, in order, complete**.
> The disclaimer list is never filtered to the markers a page happens to cite — `refs`
> selects which markers appear, **not** which notes render.
>
> Therefore, for the two team pages, exactly two dispositions are legitimate:
> **(a)** add the full `Notes légales` / `Legal Disclaimers` accordion to the team page, or
> **(b)** drop markers `1` and `2` from the partner titles.
> **(a) is the default and the recommendation** — it adds no new copy, only relocates
> platform-standard text that already exists on the site, and it is the only option that does
> not edit a regulated title string. **(b) removes a regulatory reference and is a compliance
> decision, not a builder's.** Register the choice either way.
> **(a) was applied, in both languages, symmetrically — D-14.**
>
> A page must never render markers `1`/`2` and disclaimers `1`–`5` where `3`, `4`, `5` are
> uncited — that is the *correct* state, and P-12 explicitly permits it. Uncited notes are
> fine; uncited **markers** are not.
>
> **Three corollaries, because the audit has to be able to test this rule rather than test
> the live site's defects:**
>
> 1. **A marker's element type is not its meaning.** A `<sub>` carrying a U+2081, a `<sup>`
>    carrying a digit and a `<sup>` carrying a link are all *one disclaimer reference*.
>    Normalising the presentation of a reference is not adding or removing one. Count
>    references, then check the element type separately (N-14, D-25).
> 2. **A reference that resolves is not the same object as the text it resolves to.** The
>    English services `*` is a pointer with nothing behind it; the French firm-page `*` is
>    the first character of the note itself. The rule governs pointers (D-26).
> 3. **The rule is the standard, the capture is the evidence.** §7 tests the built output
>    against the *as shipped* column of §1.5. Anything in the *as captured* column that the
>    build deliberately departed from carries a `D-` row naming the departure, and the check
>    tests the `D-` row — never the defect the `D-` row exists to repair.

### 1.6 Service footnote sentences (verbatim variants)

**English — five distinct strings.** These are separate strings, not one string repeated.
Do not deduplicate; note `specialists` vs `collaborators`:

```
Certain services are offered by third party specialists. *
These services are offered by third party specialists.          (Portfolio management — inside <sub>, marker U+2081)
These services are offered by third party specialists.          (Financial planning — <sup>⟦NBSP⟧1</sup>)
These services are offered by third party specialists.          (Estate planning — <sup>2</sup>; Tax planning — <sup>2</sup>)
These services are offered by third party collaborators.        (Insurance — <sup>3</sup>)
```

**French — one string only:**

```
Certains services sont offerts par des tiers
```

> ⚠ **Asymmetric disclosure of the same fact.** The FR services page carries the
> third-party-provider disclosure **once**, as a caption under the services wheel, with no
> terminal period. The EN page carries it **six times** — once globally and once inside five
> of the seven service accordions. Same seven services, same providers, materially different
> disclosure density. Ship both verbatim; raise as R-06. Do **not** back-fill French footnote
> sentences to match English — that would be invented regulatory wording (P-6) *and*
> invented French copy (P-5).

### 1.7 Language-only footnote — the FR-only ranking note

Rendered only inside the FR `notre-firme` accordion `Petits détails pour tout savoir`
(`<h3 class="cmp-accordion__header">`, container id `accordion-97f5644bc9`):

```
*Financière Banque Nationale - Gestion de patrimoine est classée au 5e rang chez les courtiers de plein exercice canadiens en termes d'actifs sous gestion, selon Investor Economics (mars 2019).
```

Leading `*` is part of the string. Apostrophe in `d'actifs` is **U+0027**.
**The English `Our firm` page has neither this accordion nor the claim it discloses.**
Do not translate it (P-5). See C-30.

### 1.8 Trademark marks — a null finding

**Scanned all 16 captures for `®` (U+00AE), `™` (U+2122), `&reg;`, `&trade;` and
`<sup>MD</sup>`: zero occurrences.** This site carries no trademark marks. If a design brief
or component library introduces one, it is invented (P-6).

---

## 2. Identity table — exact strings, by language

### 2.1 Advisors

| | Laurent Achard | David Alexandre Wolf |
|---|---|---|
| Name, both languages | `Laurent Achard` | `David Alexandre Wolf` *(no hyphen in the display name; the URL slug is `david-alexandre-wolf`)* |
| Title FR | `Conseiller en gestion de patrimoine⟦NBSP⟧` *(H4, trailing U+00A0)* · profile page H3: `Conseiller en gestion de patrimoine` *(no NBSP)* | same |
| Title EN | `Wealth Advisor` | `Wealth Advisor` |
| Designations | **none displayed anywhere** | **none displayed anywhere** |
| Phone FR | `514 395-1937` *(space after area code)* | `514 412-0370` |
| Phone EN | `514-395-1937` *(hyphen)* | `514-412-0370` |
| `tel:` — microsite pages | `tel:+15143951937` | `tel:+15144120370` |
| `tel:` — profile pages | `tel:514-395-1937` ⚠ | `tel:514-412-0370` ⚠ |
| Fax | **none on the site** | **none on the site** |
| Email FR | `laurent.achard@bnc.ca` | `davidalexandre.wolf@bnc.ca` |
| Email EN | `laurent.achard@nbc.ca` | `davidalexandre.wolf@nbc.ca` |
| LinkedIn | **none** (the only LinkedIn link is the corporate footer one) | **none** |
| Languages | **three conflicting values — see §2.3 / C-07** | FR `Français, anglais` · FR profile `Anglais, Français` · EN team/contact `English` · EN profile `English, French` |

There are **no credentials, designations or letters after either advisor's name anywhere on
the live site.** If NBF's records hold any, they may not be displayed until compliance
ratifies (P-8).

### 2.2 Partners / collaborators

| | Lysane Tougas | Jean-Francois Gobeil |
|---|---|---|
| Name FR | `Lysane Tougas` | `Jean-Francois Gobeil⟦NBSP⟧` *(H3, trailing U+00A0; **no cedilla** in the heading)* |
| Name EN | `Lysane Tougas` | `Jean-Francois Gobeil` |
| Title FR | `Conseillère principale, planification successorale⟦sup⟧2⟧` | `Planificateur financier⟦sup⟧1⟧` |
| Title EN | `Senior Advisor, Estate Planning⟦sup⟧2⟧` | `Financial Planner⟦sup⟧1⟧` |
| Affiliation FR | `Financière Banque Nationale - Gestion de patrimoine` + `<br />` | same |
| Affiliation EN | `National Bank Financial - Wealth Management` + `<br />` | same |
| Biography | **FR only** (accordion `Biographie`) | **FR only** (accordion `Biographie`) |
| Phone / email | **none published** | **none published** |

> **The heading spells him `Jean-Francois` (no cedilla); the biography body spells him
> `Jean-François` (with cedilla), in the same French paragraph on the same page.** Both ship
> verbatim. Flag-only, **N-04** — a person's name is not a mechanical typo.
>
> The photo filename is `photo-lysanne-tougas-…` (`Lysanne`); every page string is `Lysane`.
> Filename only — no client-facing string is affected.

### 2.3 Documented conflicts and canonical decisions

**No canonical is chosen for any of these. Each surface ships its own verbatim string.**
Choosing between them is a client/NBF decision.

> **These seven `C-` numbers each appear twice in this file, deliberately.** This table sets
> out *both sides of the conflict*; the §4 claims register carries the same ID with the claim
> text and the disposition, and points back here. **A restatement of one row, not two rows
> sharing a number** (§0.1). Table is in ascending ID order — it was not, before 2026-08-02.

| ID | Conflict | Side A (with source) | Side B (with source) |
|---|---|---|---|
| **C-07** | **Laurent Achard's languages** | `Français, anglais, italien` — `fr-notre-equipe`, `fr-nous-joindre`. And `Français, Anglais, Italien` (title case) — `fr-laurent-achard`. | `English` — `en-our-team`, `en-contact-us`. And `French, English, Italian` — `en-laurent-achard`. **Three different assertions about the same person, two of them in the same language tree.** |
| **C-08** | **David Alexandre Wolf's languages** | `Français, anglais` — `fr-notre-equipe`, `fr-nous-joindre`. `Anglais, Français` — `fr-david-alexandre-wolf`. | `English` — `en-our-team`, `en-contact-us`. `English, French` — `en-david-alexandre-wolf`. |
| **C-21** | **The team's own name** | `Wolf Achard` — FR `<title>`, H1, nav, alt, slug, **and the ENGLISH logo artwork** (`logo-ia-wolf-achard-group-L.svg`, one R). 36 occurrences across the 8 FR pages, 0 of `Archard`. | `Wolf Archard` — EN `<title>`, `<h1>`, nav label, `alt="Wolf Archard Group logo"`, and the URL slug `wolf-archard-group`. 39 occurrences across the 8 EN pages, 0 of `Achard`. **Both counts are of the captures; the build's counts differ legitimately and the audited property is the 0, not the 39 — see §7 check 51 and R-08.** |
| **C-22** | **The English office address renders three ways** | (i) `1, Place Ville-Marie⟦NBSP⟧Suite 1700` + `Montreal⟦NBSP⟧QC⟦NBSP⟧H3B 2C1` — `en-contact-us`, two paragraphs, comma after `1`, province abbreviated. | (ii) `1 Place Ville-Marie, Suite 1700, Montreal, Quebec, H3B 2C1` — both EN profile pages, single line, no comma after `1`, province spelled out. **(iii)** the French form `1 Place Ville-Marie, Bureau 1700, Montréal (Québec) H3B 2C1` on both FR profile pages and `fr-nous-joindre`. |
| **C-23** | **`tel:` href format** | Microsite pages (12): E.164 — `tel:+15143951937` | Advisor profile pages (4): local hyphenated, **no country code** — `tel:514-395-1937`. A `tel:` value without `+1` is not reliably dialable from outside Canada. |
| **C-24** | **CTA label casing** | `See our contact details` — `en-home`, `en-our-team`, `en-our-services`, `en-news-articles` (4 pages) | `See Our Contact Details` — `en-our-firm` (1 page). French is `Voir nos coordonnées` on all 5, consistently. |
| **C-47** | **`Vision` and `Mythes et réalités` carry near-identical French descriptions** | `Vision` (`fr-nouvelles-articles`): `Vous recherchez une analyse financière fiable ? Le groupe économie et stratégie fournit un rapport détaillé sur les taux d'intérêt, les obligations, le marché boursier et la stratégie de portefeuille.` | `Mythes et réalités` (same page): identical **except one character** — `Le groupe Économie` (capital É) at position 58. Both 200 characters. **They are NOT byte-identical** — see R-14; a brief that says they are will cause a builder to deduplicate them and silently change one. |

### 2.4 Office / contact block

**FRENCH** (`fr-nous-joindre`) — verbatim, no label colons exist on this site:

```
514 395-1937
514 412-0370
1 Place Ville-Marie, Bureau 1700, Montréal (Québec) H3B 2C1
Heures d'ouverture   → https://localisateur.bnc.ca/financiere-banque-nationale/qc/montreal/1-place-ville-marie
laurent.achard@bnc.ca
davidalexandre.wolf@bnc.ca
```

**ENGLISH** (`en-contact-us`) — verbatim, **two paragraphs**, NBSPs load-bearing:

```
514-395-1937
514-412-0370
1, Place Ville-Marie⟦NBSP⟧Suite 1700
Montreal⟦NBSP⟧QC⟦NBSP⟧H3B 2C1
Business hours       → https://locator.nbc.ca/national-bank-financial/qc/montreal/1-place-ville-marie
laurent.achard@nbc.ca
davidalexandre.wolf@nbc.ca
```

> This site has **no** `Sans-frais :` / `Toll-Free :` / `Télécopieur :` / `Fax :` lines.
> Do not add them from a template. The three U+00A0 in the EN address are the only thing
> holding `Suite 1700`, `QC` and the postal code on their intended lines.
>
> `Montreal` (unaccented) in EN and `Montréal` in FR is deliberate per-language rendering,
> not a bug (N-05).

### 2.5 Advisor profile pages — syndicated structured records (`AP-` series)

> **`AP-` is one series shared with `CHANGES-FOR-APPROVAL.md`** (§0.1). This file holds
> `AP-01` … `AP-03`; that file continues the count at `AP-04`. Until 2026-08-02 both files
> ran their own `AP-01` … `AP-03`, with **different meanings for `AP-01` and `AP-03`** — the
> exact collision the `N-`→`D-` rename was meant to end. `CHANGES-FOR-APPROVAL.md` renumbered
> its three; **nothing here moved**, and every `AP-` citation in code under `src/` points at
> this file.
>
> `AP-02` here and `AP-05` there are the same disposition from two directions: this row says
> why the profile pages must carry no accordion, that row records that the build carries
> none. Cross-linked, deliberately not merged — the two documents have different readers.

The four pages under `notre-equipe/` / `our-team/` are **not this team's content**. They are
rendered by National Bank from a central structured advisor record
(`meta[name=template]` = `fiche-conseillers-placement-template` on all four) into the
corporate `fbngp.ca` / `nbfwm.ca` chrome, not the microsite chrome. Every string on them —
name, title, phone, email, website, address, languages — is a **field in NBF's record**, not
copy this team authored.

| ID | Item | Disposition |
|---|---|---|
| **AP-01** | **Defects on these four pages originate in NBF's advisor record, not in the page.** This covers the space before the comma in `Laurent Achard , …` (F-12), the double space in `David Alexandre Wolf, Conseiller en gestion de patrimoine  \| …` (F-13), the local-format `tel:` hrefs (C-23), the missing `alt` on all four headshots (N-12), the four `href="#"` dead links (N-10), and the English `View website` links pointing at the French microsite (N-09). | **Correcting any of these in the rebuild makes the site disagree with the bank's own record of a licensed advisor.** Report every one to the client for NBF to fix at source. If the client directs a local correction anyway, it needs its own register row and an explicit note that the rebuild now diverges from NBF's record. |
| **AP-02** | These pages carry **no disclaimer accordion, no `<sup>` markers, and no contact strip**. That is internally consistent (§1.5) and must stay that way. | **[KEEP AS-IS]** — do not add the accordion here; nothing on the page cites it. |
| **AP-03** | The languages fields on these pages contradict the team pages in both languages (C-07, C-08) — and the profile pages are the **more detailed** source (`French, English, Italian` vs the team page's bare `English`). | **[KEEP VERBATIM, BOTH] + [FLAG]**. The profile record is the likelier source of truth, but that is a judgment about a licensed advisor's declared capability. **Do not pick.** |

---

## 3. Required marks per page

### 3.1 Logos — which lockup, which page, which language

| Slot | FRENCH (6 microsite pages) | ENGLISH (6 microsite pages) |
|---|---|---|
| Bank lockup, large | `logo-cp-fbngp-L.svg` alt `Logo Financière Banque Nationale Gestion de patrimoine` | `logo-cp-nbfwm-L.svg` alt `National Bank Financial Wealth Management logo` |
| Bank lockup, medium | `logo-cp-fbngp-M.svg`, same alt | `logo-cp-nbfwm-M.svg`, same alt |
| Bank lockup, mobile | `logo-cp-fbngp-s.svg`, same alt | `logo-cp-fbngp-s.svg` ⚠ **same file**, alt `National Bank Financial Wealth Management logo` |
| Team lockup L/M/S | `logo-cp-groupe-wolf-achard-{L,M,S}.svg` alt `Logo Groupe Wolf Achard` | `logo-ia-wolf-achard-group-{L,M,S}.svg` alt `Wolf Archard Group logo` |

`logo-cp-fbngp-s.svg` carries **no wording at all** (the bare red flag), which is why both
language trees load it. **This is not a language-purity breach** — the audit grep must
whitelist it, or check 27 produces a false failure.

The two **advisor profile pages per language** do not use the microsite header at all. They
render the corporate `fbngp.ca` / `nbfwm.ca` chrome: `logo-fbngp-245x70.png`
alt `Financière Banque Nationale` / `logo-nbfwm-245x70.png` alt `National Bank Financial`.

**Brand colours measured out of the artwork, not a brand document:**

| Token | Value | Source |
|---|---|---|
| Brand red | `#de161d` | both bank lockups |
| Team navy, **FRENCH** | `#274155` | `logo-cp-groupe-wolf-achard-L.svg` |
| Team navy, **ENGLISH** | `#00324d` | `logo-ia-wolf-achard-group-L.svg` |
| Team olive (the word `Group`, EN only) | `#79755d` | `logo-ia-wolf-achard-group-L.svg` |

> **The two supplied team lockups do not use the same navy.** Whichever the rebuild adopts,
> the other language's own artwork will not match it. **Client decision — do not pick.**
> Until they decide, **P-15 forbids mixing the two navies within one language tree**
> (§7 check 44). French artwork is 7.1 % wider at the same height, so French is the binding
> locale for header sizing.

### 3.2 Links — exact URLs, footer of every page

All footer targets are listed verbatim in §1.1 / §1.2. **Every root-relative path
(`/contact.html`, `/user-agreement.html`, `/convention.html`, `/advisor.html`,
`/conseiller.html`, `/about/regulatory-information.html`, `/a-propos/informations-reglementaires.html`,
`/complaint-settlement.html`, `/resolution-insatisfactions.html`, `/career.html`,
`/carriere.html`, `/about.html`, `/a-propos.html`, `/digital-data-policy.html`,
`/politique-donnees-numeriques.html`) must be resolved HOST-ABSOLUTE per language before
build** — `https://www.nbfwm.ca/…` for EN, `https://www.fbngp.ca/…` for FR — and
link-checked. On a new domain they 404 silently, which means `User agreement`,
`Complaint settlement` and `Regulatory information` are all dead at launch. Same for the
~34 `/content/dam/fbngp/pdf/…` publication PDFs and every `/documentation/…` link.

Client access, per language, verbatim:
`Accès client` → `https://client.bnc.ca/fbngp/login` · `Client Access` → `https://client.bnc.ca/nbfwm/home`
(the two profile-page variants use `/nbfwm/login`, label `Login`).

### 3.3 Per-page requirement matrix

| Page | Bank + team lockup | Disclaimer accordion | Contact strip | Regulator marks | `<sup>` markers |
|---|---|---|---|---|---|
| `fr-home` / `en-home` | yes | no | yes | yes | none |
| `fr-notre-equipe` / `en-our-team` | yes | **NO — must be added (P-12)** | yes | yes | `2`,`1` |
| `fr-nos-services` / `en-our-services` | yes | **yes** | yes | yes | see §1.5 |
| `fr-nouvelles-articles` / `en-news-articles` | yes | no | yes | yes | none |
| `fr-notre-firme` / `en-our-firm` | yes | FR: `Petits détails…` only; EN: none | yes | yes | none |
| `fr-nous-joindre` / `en-contact-us` | yes | no | **no** — this page *is* the contact page | yes | none |
| 4 advisor profile pages | corporate chrome only | no | no | yes | none |

---

## 4. Claims register

Every assertable statement, numbered. **Disposition is `[KEEP VERBATIM]` for all of them**
unless a row says otherwise — this is a spec build with no client sign-off.

### 4.1 Team-level claims

| ID | Claim (verbatim) | Lang | Page(s) | Attribution | As-at | Disposition |
|---|---|---|---|---|---|---|
| **C-01** | `Conseiller en gestion de patrimoine⟦NBSP⟧` (Achard) / `Wealth Advisor` | both | team, contact, profile | Title string — NBF-assigned | — | **[KEEP VERBATIM]**. Titles are regulated strings (P-8). The FR H4 carries a trailing U+00A0 that the profile-page H3 does not — reproduce each surface's own form. |
| **C-02** | `Conseiller en gestion de patrimoine⟦NBSP⟧` (Wolf) / `Wealth Advisor` | both | team, contact, profile | Title string | — | **[KEEP VERBATIM]** |
| **C-03** | `514 395-1937` / `514-395-1937` (Achard) | both | 12 pages | Identity string | — | **[KEEP VERBATIM]** per-language format. `tel:` conflict → C-23. |
| **C-04** | `514 412-0370` / `514-412-0370` (Wolf) | both | 12 pages | Identity string | — | **[KEEP VERBATIM]** |
| **C-05** | `laurent.achard@bnc.ca` / `laurent.achard@nbc.ca` | both | 12 pages | Identity string | — | **[KEEP VERBATIM]**. Never translate an address; zero `@nbc.ca` in the FR tree and zero `@bnc.ca` in the EN tree — measured, both are currently clean. |
| **C-06** | `davidalexandre.wolf@bnc.ca` / `davidalexandre.wolf@nbc.ca` | both | 12 pages | Identity string | — | **[KEEP VERBATIM]** |
| **C-07** | Achard languages — `Français, anglais, italien` / `Français, Anglais, Italien` / `English` / `French, English, Italian` | both | team, contact, both profiles | Self-declared capability | — | **[KEEP VERBATIM, ALL FOUR] + [FLAG — CONFLICT]**. See §2.3. A capability claim about a licensed advisor. The EN team page asserting `English` only, while the EN profile page asserts `French, English, Italian`, is a self-contradiction inside one language tree. **Do not harmonise.** |
| **C-08** | Wolf languages — `Français, anglais` / `Anglais, Français` / `English` / `English, French` | both | team, contact, both profiles | Self-declared | — | **[KEEP VERBATIM] + [FLAG — CONFLICT]** |
| **C-09** | `Conseillère principale, planification successorale⟦sup⟧2⟧` / `Senior Advisor, Estate Planning⟦sup⟧2⟧` + `Financière Banque Nationale - Gestion de patrimoine` / `National Bank Financial - Wealth Management` | both | team | Title + employer | — | **[KEEP VERBATIM]**. Marker `2` currently orphaned (§1.5). |
| **C-10** | `Lysane est membre du Barreau du Québec depuis 1998.` | FR only | `notre-equipe` bio | Self-claim; Barreau du Québec membership is publicly verifiable | **1998** | **[KEEP VERBATIM]** + **[FLAG — AGES SILENTLY]**: a *membership since* date is stable, but any derived "28 years of practice" is invented (P-3). **No EN equivalent — do not translate (P-5 / P-16).** |
| **C-11** | `Elle a complété son baccalauréat en droit à l’Université de Montréal ainsi qu’une maîtrise en droit, option fiscalité, en 2004.` | FR only | `notre-equipe` bio | Self-claim, academic credential | **2004** | **[KEEP VERBATIM]**. Academic credentials are credentials (P-8). |
| **C-12** | `Elle possède une vaste expérience en matière de planification successorale et testamentaire ainsi qu’en droit fiscal. Elle a exercé pendant plusieurs années dans des cabinets d’avocats et d’experts comptables d’envergure.` | FR only | `notre-equipe` bio | Self-claim, unquantified | **none** | **[KEEP VERBATIM]** + **[FLAG — UNQUANTIFIED]**: `vaste expérience`, `plusieurs années`, `d'envergure` are three unsubstantiated qualitative claims in one paragraph. |
| **C-13** | `Planificateur financier⟦sup⟧1⟧` / `Financial Planner⟦sup⟧1⟧` + employer line | both | team | Title + employer | — | **[KEEP VERBATIM]**. This is the **one title on the site that disclaimer 1 actually governs** — and its marker is currently orphaned. Highest-priority instance of the P-12 defect. |
| **C-14** | `Il est titulaire d’un B.B.A de l’université Bishops en finance` | FR only | `notre-equipe` bio | Academic credential | **none** | **[KEEP VERBATIM]** *(sic: `B.B.A` without trailing period; `université` lowercase)*. Do not normalise the credential (P-8). |
| **C-15** | `il est membre de l’IQPF depuis 2015` | FR only | `notre-equipe` bio | **IQPF membership — a regulated professional-body claim** | **2015** | **[KEEP VERBATIM]** + **[FLAG — REGULATED]**. IQPF membership underpins the `Planificateur financier` title and disclaimer 1. Must be current at launch; NBF compliance confirms. |
| **C-16** | `Il a complété son diplôme en planification financière au HEC Montréal` | FR only | `notre-equipe` bio | Academic credential | **none** | **[KEEP VERBATIM]** |
| **C-17** | `se prépare actuellement pour l’examen du CFA niveau III` | FR only | `notre-equipe` bio | **In-progress designation** | **`actuellement`** | **[KEEP VERBATIM]** + **[FLAG — HIGHEST DECAY RISK ON THE SITE]**. `actuellement` is anchored to an undated page. He has either passed, failed or abandoned since publication; in every case the sentence is now wrong or misleading. CFA Institute rules restrict how candidacy may be described. **This needs a client answer before launch, not after.** |
| **C-18** | `Il compte plus de 8 ans d’expertise-conseil au sein d’équipe de courtiers en épargne collective et sécurité financière, de courtiers en placement et au sein des succursales bancaires à la fois au Québec et en Ontario.` | FR only | `notre-equipe` bio | Self-claim | **none** | **[KEEP VERBATIM]** + **[FLAG — AGES SILENTLY]**: `plus de 8 ans` on an undated page. Prefer a fixed start year over a rolling count — but only NBF may restate it. |
| **C-19** | `Jean-François est un passionné de la finance et de l’expérience client… Son expertise s’étend à la retraite, la finance, la fiscalité, les placements, les assurances et la gestion des risques, puis aux aspects légaux et à la succession.` | FR only | `notre-equipe` bio | Self-claim, scope-of-expertise | — | **[KEEP VERBATIM]** + **[FLAG]**: a **scope-of-practice** claim listing insurance and legal matters. Read against disclaimers 1 and 3, which say those services come from separate entities. |
| **C-20** | `Notre équipe est composée de professionnels en finance et en service à la clientèle…` / `Our team of highly qualified investment professionals is here to support you…` | both | team | Team self-claim | — | **[KEEP VERBATIM]**. `highly qualified` is unsubstantiated puffery; the FR does not claim it. Not translations of each other. |
| **C-21** | **Team name: `Wolf Achard` vs `Wolf Archard`** — see §2.3 | both | every page + both logo files | — | — | **[KEEP VERBATIM, BOTH] + [FLAG — CONFLICT, HIGHEST CLIENT VALUE]**. The English site misspells the team's own name in its `<title>`, `<h1>`, nav, alt text and URL slug, **while its own logo artwork spells it correctly**. This is an identity string. Fixing it changes a live URL and is an SEO + compliance decision. **Do not fix it in the build (N-01).** |
| **C-22** | **Three English address renderings** — see §2.3 | EN | contact, both profiles | Identity string | — | **[KEEP VERBATIM, EACH SURFACE'S OWN] + [FLAG — CONFLICT]** |
| **C-23** | **`tel:` format split** — see §2.3 | both | 16 pages | — | — | **[KEEP VERBATIM] + [FLAG]**: the profile-page form has no country code. |
| **C-24** | **`See Our Contact Details` vs `See our contact details`** — see §2.3 | EN | 5 pages | — | — | **[KEEP VERBATIM, BOTH] + [FLAG]**: 1 page against 4. Purely a casing inconsistency, but it is a CTA label and harmonising it is a copy decision (N-06). |
| **C-25** | FR home: `Connaissance approfondie de la gestion de patrimoine pour entrepreneurs et professionnels incorporés` · `Croissance efficace du patrimoine sans fragiliser la santé financière de la compagnie ni affecter la capacité d’emprunt` · `Compréhension du fonctionnement d’une entreprise…` | FR only | `home` | Team self-claim, differentiators | — | **[KEEP VERBATIM]** + **[FLAG]**: `Croissance efficace du patrimoine` is an outcome-adjacent claim. **No EN equivalent — the EN home has zero list items.** Do not translate (P-16). |
| **C-26** | FR home mission/commitments — 8 list items incl. `Sécuriser votre avenir financier⟦NBSP⟧`, `Être le partenaire principal dans votre réussite financière⟦NBSP⟧`, `Investir de manière audacieuse sans être imprudents` | FR only | `home` | Team self-claim | — | **[KEEP VERBATIM]**, FR only. `partenaire principal` and `audacieuse` are both claims. Trailing U+00A0 on two items. |
| **C-27** | FR home philosophy: `le véritable objectif ne se limite pas aux rendements des investissements mais réside dans le rendement net pour l’investisseur` | FR only | `home` | Team investment philosophy | — | **[KEEP VERBATIM]** + **[FLAG]**: mentions `rendements` — the only return-adjacent language on the site. It makes no performance promise; keep it that way. **P-2 forbids extending it.** |

### 4.2 Firm-level claims (FBNGP / NBFWM)

| ID | FRENCH (verbatim) | ENGLISH (verbatim) | Page | Attribution | As-at | Disposition |
|---|---|---|---|---|---|---|
| **C-28** | `Depuis 1902, nous tissons des liens durables avec les familles canadiennes.` | `Since 1902, we⟦NBSP⟧have⟦NBSP⟧been building lasting relationships with Canadian families.` | firm | NBFWM heritage | 1902 | **[KEEP VERBATIM]**. **Never compute "124 years"** (P-3). Note the two U+00A0 in the EN sentence. |
| **C-29** | `Notre réseau compte près de 850⟦NBSP⟧conseillers en gestion de patrimoine` | `Our network includes⟦NBSP⟧over 850 wealth advisors` | firm | **None — unsourced, undated** | **none** | **[KEEP VERBATIM, BOTH] + [FLAG — CONFLICT]**. `près de 850` means *nearly* 850; `over 850` means *more than* 850. **They point in opposite directions.** The single most quotable numeric contradiction on the site. NBF must supply one figure with an as-of date. **Do not average, round, or pick one.** |
| **C-30** | `dans 100 succursales distribuées entre Victoria et Halifax` | `at 100 branches across Canada⟦EMDASH⟧from Victoria to Halifax` | firm | **None** | **none** | **[KEEP VERBATIM]** + **[FLAG — UNSOURCED]**. A branch count that ages silently. Note the EN uses U+2014 EM DASH with no surrounding spaces; FR uses none. |
| **C-31** | `1 G$ de revenus⟦NBSP⟧par année` | `$1 billion in revenue⟦NBSP⟧per year` | firm, stat band | **None — no source, no as-of date** | **none** | **[KEEP VERBATIM]** + **[FLAG — UNATTRIBUTED]**. Also: which entity's revenue? The band never says. |
| **C-32** | `Plus de⟦NBSP⟧200 G$ d’actifs sous gestion` | `More than⟦NNBSP⟧$200 billion in assets under management` | firm, stat band | **None** | **none** | **[KEEP VERBATIM]** + **[FLAG — UNATTRIBUTED]**. Terminology is **assets under management** in both languages; writing `AUA` is an invented restatement. FR uses U+00A0, **EN uses U+202F** — different characters, both must survive. |
| **C-33** | `29 %⟦NBSP⟧Part de marché au Québec` | `29% Market share in Quebec` | firm, stat band | **None** | **none** | **[KEEP VERBATIM]** + **[FLAG — UNATTRIBUTED]**. Market share of *what*, measured *when*, is not stated. FR uses a space before `%` (French typography) and U+00A0 after; EN uses neither. |
| **C-34** | `9 %⟦NBSP⟧Part de marché au Canada` | `9% Market share in Canada` | firm, stat band | **None** | **none** | **[KEEP VERBATIM]** + **[FLAG — UNATTRIBUTED]** |
| **C-35** | `*Financière Banque Nationale - Gestion de patrimoine est classée au 5e rang chez les courtiers de plein exercice canadiens en termes d'actifs sous gestion, selon Investor Economics (mars 2019).` | *(no English equivalent — the EN firm page has neither the accordion nor the claim)* | `notre-firme` | **Investor Economics, mars 2019 — the only properly attributed claim on the entire site** | **March 2019** | **[KEEP VERBATIM]** + **[FLAG — STALE, 7+ YEARS]**. A **competitive ranking** claim substantiated by data now over seven years old. Ranking claims require current substantiation. Client decides: refresh with a new Investor Economics citation supplied by NBF, or retire the footnote. **Do not translate into English (P-16).** |

### 4.3 National Bank of Canada corporate paragraph — the stale cluster

One paragraph on `notre-firme` / `our-firm`. **It is nearly three years out of date and
contains four separate ageing assertions.**

| ID | Claim | Disposition |
|---|---|---|
| **C-36** | `Avec un actif de 424 milliards de dollars au 31 octobre 2023` / `With $424⟦NNBSP⟧billion in⟦NBSP⟧assets as at October 31, 2023` | **[KEEP VERBATIM]** + **[FLAG — STALE]**. Properly dated — the date is the only thing making it defensible. As-of is **2 years 9 months old** at rebuild. Only NBF/NBC may supply a refreshed figure **with its own as-of date**. A builder must never update the number, drop the date, round it, or write "over $400 billion". Note the EN embeds **U+202F** between `$424` and `billion`. |
| **C-37** | `plus de 31⟦NBSP⟧243 employés` / `more than 31,243⟦NNBSP⟧employees` | **[KEEP VERBATIM]** + **[FLAG]**. "More than" attached to a five-significant-figure headcount is internally odd and **carries no date at all**. FR uses **U+00A0** as the thousands separator; EN uses a comma **and** a **U+202F** before `employees`. Three different space characters in one claim pair. Preserve every one. |
| **C-38** | `a été maintes fois primée pour ses qualités d’employeur et son engagement à l’égard de la diversité` / `has been recognized numerous times as a top employer and for its commitment to diversity` | **[KEEP VERBATIM]** — unquantified, unsourced award claim. **[FLAG]** low priority. |
| **C-39** | `Ses titres sont cotés à la Bourse de Toronto (TSX : NA).` / `Its securities are listed on the Toronto Stock Exchange (TSX: NA).` | **[KEEP VERBATIM]**. **FR uses a space before the colon** (`TSX : NA`), EN does not (`TSX: NA`). Both are correct for their language. Do not harmonise. |
| **C-40** | `…comme⟦NBSP⟧Facebook, LinkedIn et Twitter.` / `…such as Facebook, LinkedIn and Twitter.` | **[KEEP VERBATIM]** + **[FLAG — STALE]**. Twitter was renamed **X** in July 2023 — before the October 2023 as-of date in the same paragraph. Do not modernise it; it is inside corporate-approved text. Flag to the client as the most visible symptom of the paragraph's age. |
| **C-41** | `est l’un des plus importants groupes financiers intégrés canadiens` / `forms one of Canada's leading integrated financial services groups` | **[KEEP VERBATIM]** — comparative positioning claim, unsourced. |

> **The C-36 / C-37 / C-40 cluster is one paragraph and should be raised as one question:**
> *"National Bank's corporate paragraph is dated October 2023 and still names Twitter. Will
> NBF supply a refreshed version with a new as-of date, or does it ship as-is?"*

### 4.4 Product, offer and service claims

| ID | Claim | Lang | Disposition |
|---|---|---|---|
| **C-42** | `nos clients profitent de tous les produits bancaires à frais réduits. Cela inclut des gratuités sur les comptes courants et des rabais de taux d’intérêt sur les produits de financement.` | FR | **[KEEP VERBATIM]** + **[FLAG]**: **fee and rate claims** — `gratuités`, `rabais de taux d'intérêt`. The FR Banking-solutions block carries **no footnote marker at all**, so disclaimers 4 (credit approval) and 5 (offer conditions) float unattached. See R-04. |
| **C-43** | `Savings on certain banking solutions.` · `Competitive interest rates.` · `Healthcare and legal virtual assistance services.` | EN | **[KEEP VERBATIM]** + **[FLAG — CONFLICT with C-42]**: EN promises *savings*; FR promises *gratuités* (free of charge). **Different fee claims for the same offer.** The EN block also carries no marker. |
| **C-44** | `La Fondation Philantra⟦NBSP⟧vous offre la possibilité de créer votre fonds de bienfaisance sans avoir à vous préoccuper des délais, des coûts et de la complexité administrative liés à la création et la gestion d’une fondation privée.⟦NBSP⟧` | FR | **[KEEP VERBATIM]** — third-party product description. |
| **C-45** | EN Philanthropy: `Setting up a foundation` · `Distribution of donations` · `Bequests in a will` | EN | **[KEEP VERBATIM]**. `Bequests in a will` is estate-law adjacent; disclaimer 2 governs, but the block carries no marker. |
| **C-46** | EN Tax planning: `More money to invest or spend.` · `Make tax-efficient investments.` · `It's about doing more with the same money by optimizing your portfolio.` | EN | **[KEEP VERBATIM]** + **[FLAG]**: **tax-outcome claims**, marker `2` attached (Estate/Trust team), which is arguably the wrong disclaimer for a tax-savings promise. Compliance should confirm. **No FR equivalent** — the FR tax block makes no outcome claims. |
| **C-47** | **`Vision` / `Mythes et réalités` near-identical FR description** — see §2.3 | FR | **[KEEP VERBATIM, BOTH] + [FLAG]**. They differ by exactly one character (`é`/`É`). One of the two blurbs is almost certainly copy-pasted from the wrong publication — `Mythes et réalités` is a Banque Nationale Investissements publication, not an Economics-and-Strategy one. |
| **C-48** | EN `Facts & Fiction` credits `The CIO Office of National Bank Investments`; FR `Mythes et réalités` credits `Le groupe Économie et stratégie` — **same publication pair** | both | **[KEEP VERBATIM] + [FLAG — CONFLICT]**: substantive **attribution mismatch** for third-party research distributed to clients. One language mis-credits the author. Ship verbatim; NBF resolves. |
| **C-49** | Video transcripts (Marion / Paquet / Lajoie): oil-price forecasts, `2% probability`, `27%`, `20% earnings per share growth`, Fed-policy speculation, `probabilités de réouverture` | both | **[KEEP VERBATIM]** — third-party NBC/NBI corporate content. **Never edit, excerpt, summarise, pull-quote or re-attribute.** Named speakers and affiliations stay attached. **No transcript sentence may be surfaced as team commentary or as a stat-band figure** — they contain forward-looking market predictions. |
| **C-50** | Publication blurbs (`The experts at National Bank Financial give a detailed analysis…`, `Cette publication vous tient au courant…`, etc.) | both | **[KEEP VERBATIM]** — NBF corporate boilerplate on syndicated content. |
| **C-51** | Services wheel artwork: the **French** diagram bakes in the words `Groupe Wolf Achard` and `Vous`; the **English** diagram bakes in `Your Wealth Advisor` and `Client` and **never names the team** | both | **[KEEP VERBATIM — the images are the claim]**. Text baked into an image is still a claim and still traces to §4. The FR wheel is bespoke and team-branded; the EN wheel is NBF generic. Not translations. Do not swap one for the other to "fix" the asymmetry. |
| **C-52** | EN home hero: `Our expert team is here to meet⟦NBSP⟧your financial needs` vs FR `Réalisons des projets ambitieux` | both | **[KEEP VERBATIM]** — not translations of each other; both approved puffery. `expert team` is an unsubstantiated claim the FR does not make. Do not "fix" the mismatch. |
| **C-53** | EN news card: `Invest in you Challenge` credits ambassador **`Jessica Moorhouse`**; the FR equivalent credits **`Kathy Marquis`** | both | **[KEEP VERBATIM]** — different people in different artwork for the same campaign. Named-individual attribution; do not cross-wire. |

---

## 5. Prohibitions

Binary. Any one of these on the finished site is a **launch blocker**.

| ID | Prohibition |
|---|---|
| **P-1** | **No invented statistics.** Every number that ships traces to a §4 row. No new, updated, rounded, derived or auto-computed figures — no `850+`, no `425 G$`, no "since 1902 = 124 years", no "over $400 billion". If a design slot needs a number and §4 has none, the slot is redesigned, not filled. |
| **P-2** | **No performance promises and no imagery implying performance or growth near portfolio content.** No returns, benchmarks, back-tests, charts of past performance, upward-arrow motifs beside investment copy, "guaranteed" or "risk-free". C-27 mentions `rendements`; that is the ceiling, not a licence. |
| **P-3** | **Every figure that ships traces to a §4 row.** Grep the build for digit sequences in display context; zero unlisted numbers. |
| **P-4** | **Language purity.** No cross-language URL, email, lockup, alt text, ARIA label or regulator mark. Zero `@nbc.ca` **email addresses** in the FR tree, zero `@bnc.ca` **email addresses** in the EN tree — both currently measure clean. **Three measured whitelist entries, and only three:**<br>1. `logo-cp-fbngp-s.svg` — the wordless red flag, carrying no language at all, legitimately loaded by both trees (§3.1).<br>2. `https://www.nbc.ca/fr/article/…` — the spotlight link on the **FR** news page. National Bank's own **French** content, hosted on the `nbc.ca` domain (N-09).<br>3. `https://client.bnc.ca/nbfwm/home` — the **English** Client Access href, verbatim from the live EN header (§3.2). **This is National Bank's own English login host despite the `bnc.ca` domain**; the `/nbfwm/` path is the English platform and there is no `client.nbc.ca`. The two EN profile pages use the same host at `/nbfwm/login`.<br>⚠ Entries 2 and 3 mean **the domain name alone never decides the language of a link.** A grep of the form "no `bnc.ca` on English pages" false-positives on every English page unless entry 3 is excluded, and the mirror grep false-positives on the FR news page unless entry 2 is. Grep for `@nbc.ca`/`@bnc.ca` **email addresses** and for the lockup/mark filenames; check hostnames against this list, not against a domain rule. Any fourth hit is a real failure. |
| **P-5** | **No content invented to fill a language gap.** |
| **P-6** | **No regulatory wording the live site does not carry.** The site never says "Regulated by CIRO", "Member of CIPF", "Réglementé par l'OCRI" or "Membre du FCPI" in text, alt, tooltip, caption or `aria-label`. The marks are **unlabelled images that link to the regulators**; that is the approved treatment. The only regulatory label on the site is the advisor-report link (§1.1/§1.2). |
| **P-7** | **No independent-firm framing.** The team operates under National Bank Financial. No standalone `Organization` schema without a parent, no header showing the team lockup without the bank lockup. Nav label `Notre firme` / `Our Firm` is verbatim site copy and stays — it refers to NBFWM, whose page H1 is `À propos` / `About us`. |
| **P-8** | **No credential, designation or title not displayed on a live page**, and no altering the ones that are — not wording, capitalisation, punctuation or language. `B.B.A` keeps its form. `Planificateur financier` keeps its masculine form. Neither advisor displays any designation; none may be added, even one NBF's own records hold. |
| **P-9** | **Alt text asserts nothing.** No headcount, no "our team" for a partial group, no regulated status, no credential. |
| **P-10** | **No contact form.** Static site; `mailto:` / `tel:` only. A dead form that silently drops an enquiry is a service failure at a regulated dealer. |
| **P-11** | **No analytics, tag managers, tracking pixels, ad tags, session recording, chat widgets or third-party fonts/CDNs.** The live site loads Adobe Launch (`assets.adobedtm.com`) on every page — **three times** on each team page. **Do not reproduce it.** Self-host fonts. |
| **P-12** | **Marker ⇒ full accordion on the same page.** Any page rendering a `<sup>` disclaimer marker renders the complete 1–5 set on that page, in order. `refs` selects markers, not which notes render. **Currently violated in both languages on the team page** (§1.5). |
| **P-13** | **No renumbering, re-ordering, splitting, merging, excerpting or selectively omitting disclaimers 1–5**, and no dropping a marker because it is visually awkward. **No excerpting legal or regulated text** — reproduce whole or omit. |
| **P-14** | **Claims, figures and dates are frozen strings. Syndicated bank publications track the bank.** Two separate categories; never collapse them. Copyright year is the literal `2026`, not `new Date()`. `October 31, 2023`, `mars 2019`, `Twitter` and every §4 figure are frozen. **But** `news-articles` / `nouvelles-articles` is a central NBF AEM Experience Fragment and its PDFs sit at evergreen URLs NBF overwrites in place — the approved labels literally say `Read the latest version` / `Lire la dernière version`. **Never pin a dated PDF filename**; freezing those links breaks the approved copy instead of preserving it. |
| **P-15** | **Do not mix the two team navies within one language tree.** FR artwork is `#274155`, EN artwork is `#00324d`. Until the client picks one, each tree uses its own artwork's navy consistently. No third navy, no blend, no "split the difference". |
| **P-16** | **DO NOT FILL THE ENGLISH CONTENT GAP.** ⚠ *Client-specific to this build.* The English tree is materially thinner than the French: EN home has **zero** list items against the French home's 11 plus a mission, commitments, differentiators and a philosophy essay; the EN team page carries **no biographies at all** against the French page's two; the EN firm page has neither the ranking footnote nor its accordion. **Writing English copy to balance them is prohibited.** It would be invented copy about named, licensed individuals and their credentials. The imbalance is itself the finding — it goes to the client as a commissioning decision ("do you want English biographies written and approved?"), not to a builder as a gap to close. The reverse also holds: the EN services page's `Our approach` section and 52 list items must **not** be translated into French. |

---

## 6. Approved editorial fixes

### ⚠ STATUS: NO POLICY AMENDMENT EXISTS. EVERY `F-` ROW BELOW IS **PENDING**.

> This is a **spec build**. Nobody has authorised any editorial fix. The default behaviour is
> **ship verbatim with a flag**; the corrected wording is pre-drafted below only so the client
> can approve the whole set in one pass.
>
> **If and when the client agrees, record it here as an explicit, dated policy amendment with
> this hard scope limit:**
>
> > *Scope: F-numbered editorial typos only. §1 legal blocks, §2 identity strings, §4 claims
> > and figures, and all N-items stay strictly verbatim.*
>
> Without that amendment in this file, every agent makes its own judgment call and the
> register stops describing what shipped. **Do not apply any F-row until it appears.**

### 6.1 Mechanical typos — spelling and grammar

| ID | Page / language | Live string (verbatim, sic) | Corrected string | Status |
|---|---|---|---|---|
| **F-01** | `notre-equipe` + `nous-joindre`, FR — Achard photo `alt`/`title` (4 occurrences) | `Photo de Laurent Achard, Conseiller en gestion de patrimoin , membre de l'équipe expert.` | `Photo de Laurent Achard, Conseiller en gestion de patrimoine, membre de l'équipe expert.` | **PENDING.** Restores the dropped `e` and removes the space before the comma. The **word is truncated mid-title**; Wolf's identical alt on the same page is correct, which is the proof this is a slip and not a variant. Highest-priority F-row. |
| **F-02** | `nos-services`, FR — opening H2 paragraph | `…dans le respect de critères et de paramètres qui lui sont propre.` | `…qui lui sont propres.` | **PENDING.** Plural agreement with `critères et paramètres`. |
| **F-03** | `nos-services`, FR — Planification fiscale | `…en restant toujours à l'intérieure des dispositions de la loi.` | `…à l'intérieur des dispositions de la loi.` | **PENDING.** `intérieure` is the feminine adjective; the locution is `à l'intérieur de`. Apostrophe is U+2019 in the live markup — preserve it in the corrected string. |
| **F-04** | `nouvelles-articles`, FR — `Guide investir` image `alt`/`title` | `Guide d'investissement - des conseils clés pour votre sante financière.` | `…pour votre santé financière.` | **PENDING.** Missing acute accent. |
| **F-05** | `news-articles`, EN — `meta[name=description]` + `og:description` | `Get the latest news of the financial markets and take advantage of our analyzes to better achieve your goals.` | `…take advantage of our analyses to better achieve your goals.` | **PENDING.** `analyzes` is the third-person verb; the noun plural is `analyses`. |
| **F-06** | `our-services`, EN — `meta[name=description]` + `og:description` | `Wolf Archard Group offer advice on estate planning, investment management and financial planning, providing solutions to fit their client’s financial needs. ` | `Wolf Archard Group offers advice on estate planning, investment management and financial planning, providing solutions to fit their clients’ financial needs.` | **PENDING.** Three defects in one string: (i) subject–verb — a singular group name takes `offers`; (ii) `their client’s` disagrees in number with `their`; (iii) **trailing space** present in `meta[name=description]` but absent from `og:description`. ⚠ **Note this string also contains `Wolf Archard` — C-21/N-01 governs the name and stays untouched by this fix.** |

### 6.2 Whitespace — doubled, leading and trailing

All verified byte-level in the raw markup, not inferred.

| ID | Page / language | Live string (sic, `·` marks a literal space) | Corrected string | Status |
|---|---|---|---|---|
| **F-07** | `our-team` + `contact-us`, EN — Achard photo `alt`/`title` (4 occurrences) | `Photo of··Laurent Achard, Wealth Advisor, member of the team of experts.·` | `Photo of Laurent Achard, Wealth Advisor, member of the team of experts.` | **PENDING.** Double space after `of` **and** a trailing space. |
| **F-08** | `our-team` + `contact-us`, EN — Wolf photo `alt`/`title` | `Photo of David Alexandre Wolf, Wealth Advisor, member of the team of experts.·` | `…member of the team of experts.` | **PENDING.** Trailing space only. |
| **F-09** | `our-team`, EN — Gobeil photo `alt`/`title` (3 occurrences) | `Photo of Jean-Francois Gobeil·, Financial Planner, partner` | `Photo of Jean-Francois Gobeil, Financial Planner, partner` | **PENDING.** Space before the comma. **The name spelling itself is N-04 and is not touched.** |
| **F-10** | `notre-equipe`, FR — Tougas photo `alt`/`title` | `Photo de Lysane Tougas, Conseillère principale, planification successorale, collaborateur et partenaire.·` | `…collaborateur et partenaire.` | **PENDING.** Trailing space. |
| **F-11** | `contact-us`, EN — address pictogram `alt`/`title` (2 occurrences) | `Adress picto·` | `Address picto` | **PENDING.** Misspelling **and** trailing space. Every other pictogram on the page uses the correct pattern (`Phone picto`, `Email us picto`). |
| **F-12** | `laurent-achard`, both languages — `<title>`, `meta[name=description]`, `og:title`, `og:description`, `og:url` label (5 occurrences per page) | `Laurent Achard·, Conseiller en gestion de patrimoine \| …` and `Laurent Achard·, Wealth Advisor \| …` | remove the space before the comma | **PENDING.** ⚠ **These are advisor-profile pages fed by NBF's structured advisor record — the defect is in the source data, not the page.** Fixing it in the rebuild diverges from the bank's record. See AP-01. |
| **F-13** | `david-alexandre-wolf`, FR — `<title>`, descriptions, `og:*` | `David Alexandre Wolf, Conseiller en gestion de patrimoine··\| …` | collapse to a single space before the pipe | **PENDING.** Same AP-01 caveat. |

**Not in scope for any F-row** (each is deliberately excluded, with a reason):

- The trailing **U+00A0** on `Conseiller en gestion de patrimoine⟦NBSP⟧` (H4) and
  `Jean-Francois Gobeil⟦NBSP⟧` (H3). These are **inside title and name strings** (P-8), and
  the NBSP-preservation policy in §0 forbids touching any no-break space anywhere.
- The 102 U+00A0 and 3 U+202F elsewhere. Preserved, never "cleaned".
- Everything in §6.3.
- **`F-14`, which is not an editorial fix at all — see §6.4.**

### 6.3 Flag-only (`N-nn`) — do **NOT** pre-draft a fix

Proposing wording for any of these would itself be a content, identity, legal or design
decision. Report; do not repair.

| ID | Item | Why no fix is proposed |
|---|---|---|
| **N-01** | **`Wolf Archard` throughout the English tree** (title, H1, nav, alt, URL slug) against `Wolf Achard` in French **and in the English logo artwork** | It is the **team's own name** — an identity string (C-21). Correcting it changes a live URL, every `hreflang` pair, the canonical, the alt text and the search index. Only the client can decide, and only NBF can re-slug the page. **This is the single highest-value item in the client conversation.** |
| **N-02** | **`(FPCI)`** in the FR footer alt for `logo-fcpi.svg`, on all 8 FR pages | Inside a **regulator identification string**. The correct acronym `FCPI` appears correctly in disclaimer 3 on the same site, which proves it is a transposition — but a builder does not edit a regulator's name. NBF corrects it at source. |
| **N-03** | Disclaimer 4, `National bank` (lowercase b) | Inside **platform-standard approved legal text**, verified byte-identical across two unrelated teams. Report; do not capitalise. |
| **N-04** | `Jean-Francois` (no cedilla) in headings and alt text vs `Jean-François` (cedilla) in the biography body, same page | A **person's name**. Not a mechanical typo. He may spell it either way; the client asks him. |
| **N-05** | `Montreal` (EN) vs `Montréal` (FR) in the same address | Intentional per-language rendering. Not a bug. |
| **N-06** | `See Our Contact Details` vs `See our contact details` (C-24) | A **CTA label**, 1 page against 4. Harmonising is a copy decision, not a typo fix. |
| **N-07** | **The two swapped French news images.** `guide-fiscal-quebec-2025.jpg` (artwork: `GUIDE FISCAL 2025 / QUÉBEC`) sits in the **`Flash info`** card, whose alt reads `Éléments graphiques de différentes couleurs et texte écrit en rouge flash info.`; `flash-info.jpg` (artwork: `FLASH INFO 2026`) sits in the **`Guide fiscalité et investissement`** card, whose alt reads `Guide fiscal et d'investissement - une main tenant un formulaire.` **Each card's alt text describes the other card's image.** | ⚠ **DISPOSITION REVERSED 2026-08-02 — see the note below. The pairing is corrected in the build (F-14); this row is now flag-only for the *upstream* fix, not for the local one.** The **content** is correct and the **alt text** is correct — only the pairing is crossed, and it is crossed inside a **central NBF Experience Fragment** (`/nouvelles-et-articles-3/guides-outils-quebec-fr/`), not in this team's page. **NBF must still fix it upstream**, and this row stays open until they do. |
| **N-08** | **EN toolbox: `Budget tool` and `Mortgage calculator` both point at `https://www.nbc.ca/personal/mortgages/calculators/payments.html`** | The French page has two distinct, correct URLs (`…/calculer-budget-en-ligne.html` and `…/calculatrices/versements.html`), so the correct English budget-tool URL almost certainly exists — **but guessing it is inventing a destination.** NBF supplies the right English URL. |
| **N-09** | **Both English advisor-profile pages' `View website` links point at the FRENCH microsite** (`https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`) | A **language-purity breach in the live data**, and the pages are fed by NBF's structured advisor record (AP-01). The obvious repoint is `https://www.nbfwm.ca/advisor/wolf-archard-group.html`, but changing an advisor record's website field is NBF's action, not a builder's. ⚠ **Related whitelist note:** the FR news page legitimately links to `https://www.nbc.ca/fr/article/…` (NBF's own French content on the `nbc.ca` host). A naive "no nbc.ca on FR pages" grep flags it falsely — see §7 check 27. ⚠ **DISPOSED 2026-08-02 as `CHANGES` D-21: the `Voir le site Web` / `View website` line is not rendered at all.** On the rebuilt site the profile page *is* the microsite, so the link would point from the site to itself; shipping the live target would import the purity breach, and repointing it would edit NBF's record. **Neither the defect nor a repair ships — the line does not.** The row stays open for NBF's upstream fix. **Verify against D-21, not against the capture** (§7 check 51, list b). |
| **N-10** | **The four `href="#"` dead links**: `< Voir tous les conseillers` (2 FR profile pages) and `< See all advisors` (2 EN profile pages). Also `aria-label="main menu"` in **English on the French pages** | The dead links are navigation the platform stubs out; the sensible targets are `/conseiller.html` and `/advisor.html`, but that is a **new navigation decision** (and they may be intentionally inert). The English `main menu` aria-label on FR pages is a **platform-level accessibility defect across all of `fbngp.ca`**, not this team's content. ⚠ **PARTLY DISPOSED — and the two halves are not in the same state.** **Dead links: `CHANGES` D-22** — they carry a real target, `Notre équipe` / `Our team`, pointing at the team page, because "all advisors" means a page this site does not have. **Zero `href="#"` in the build** (§7 check 56). **Aria-label: repaired in the build but NOT registered** — the header nav ships `Navigation principale` / `Main navigation` where live says `main menu` in both languages. It is the right repair and it is an unregistered deviation; **it needs a `D-` row.** Verify the first half against D-22; treat the second as open (§7 check 51, list b). |
| **N-11** | **Legal-accordion heading level differs by language** — FR `<h2 class="cmp-accordion__header">`, EN `<h3>` | Picking one changes the document outline on one language tree away from live. It is a semantic/accessibility decision that should be made once, deliberately, and registered. ⚠ **DISPOSED as `CHANGES` D-28: the French level is used for both.** Made once, deliberately, and registered — which is what this row asked for. Nothing a reader sees changes; the page outline a screen reader announces no longer differs between two versions of one page. **Verify against D-28** (§7 check 51, list b). |
| **N-12** | **18 `<img>` in the archive render with no accessible name — but they are two different defects and the earlier count of "18 alt-less" merged them.** ⚠ **RE-MEASURED 2026-08-02 against the raw captures, `<img>` by `<img>`:** • **4 have no `alt` attribute at all** — the four advisor-profile headshots, one per advisor per language. The attribute is absent, so a screen reader falls back to the filename or announces nothing. • **14 carry a valueless `alt` attribute** — written `alt/` in the markup, which HTML parses as `alt=""`. These are the **12 hero banners** and the **2 `img-projet-loi-899-767x433.png` news images**. They are already declared decorative *by the markup itself*. **Total 18; the split is 4 + 14, not 18 + 0.** | Writing alt text for a **photograph of a named, licensed advisor** is authoring a description of a person (P-9). **The two classes need opposite handling and that is the point of the split:** the **4 absent-attribute headshots** are an unambiguous defect — an image with no attribute has no declared status at all, informative or decorative — and their disposition is a client/NBF choice (the rebuild's own headshot descriptions are NEW COPY, `CHANGES` NC-07). The **14 valueless ones** are not undecided: NBF's authoring tool declared them decorative and the rebuild honours that declaration; changing it to a description would be authoring, not repairing. **Propose nothing for the 4; do not "fix" the 14.** ⚠ Note for anyone re-deriving this from the archive documents: `content/content-inventory.md` and `content/assets-manifest.md` recorded the two news images' alt as *a single space*. That single space is the wrapper's `data-title=" "`, **not** the alt. Both files are corrected and carry the capture history. |
| **N-13** | **Cross-team DAM dependency.** `img-publications-financieres-revues-de-marche-740x489.png`, on **both** language news pages, is served from `/content/dam/fbngp/microsites/edwards-knutson-wealth-advisors/page-content/` — another advisory team's folder | The asset renders fine today, but this team's page has a hard dependency on an unrelated team's DAM folder. If Edwards Knutson's microsite is retired the image 404s on Groupe Wolf Achard's page. **Re-hosting it is right for the rebuild, but flagging it upstream is NBF's call.** (The file is also a JPEG named `.png`, and 740×490 not 740×489.) ⚠ **DISPOSED as `CHANGES` A-05: the asset is served locally and renamed to its true format** (`…740x489.png` → the same name ending `.jpg`). **The picture is byte-for-byte the file NBF serves** — only the hosting and the extension changed, so no image and no description is altered. The build therefore has **no live dependency on another team's DAM folder**. The upstream flag is still owed to NBF. **Verify against A-05** (§7 check 51, list b). |
| **N-14** | **The U+2081 SUBSCRIPT ONE footnote marker** on the EN Portfolio-management block, inside a `<sub>` that wraps the entire sentence | It is a **disclaimer reference**. Rendering it as a proper `<sup>1</sup>` to match the other four is almost certainly right — visually, semantically and for screen readers — **but it changes how a regulatory reference is presented**, so compliance signs it off rather than a builder. Record the accessibility consequence: U+2081 is announced inconsistently and does not read as a footnote reference. ⚠ **APPLIED as `CHANGES` D-25**, under §1.5's first corollary — a reference's element type is not its meaning, so normalising presentation neither adds nor removes a reference. **Not one word changed**; the sentence's U+00A0 is preserved. §1.5's *as shipped* column and §7 checks 12 and 14 both encode it. Reversible; still needs a compliance line. |
| **N-15** | **`Certain services are offered by third party specialists. *`** — the stray `*` on EN services, and the leading `*` on the FR `notre-firme` accordion, neither of which has a matching footnote | Deleting an orphan reference **removes a disclosure signal**; adding a `*` footnote **invents regulatory wording** (P-6). Both are compliance calls. ⚠ **SPLIT AND PARTLY APPLIED, 2026-08-02** — this row conflated two different objects (§1.5, orphan 2). **EN services `*`: a pointer with nothing behind it. Dropped — `CHANGES` D-26**, under the rebuild's rule that a reference resolves or it does not ship; the three numbered references beside it are untouched and now resolve, so no disclosure signal is lost — the disclosure they carry is *more* reachable than before, not less. **FR `notre-firme` `*`: NOT a pointer** — it is the first character of the verbatim ranking note itself (§1.7, C-35). **It ships, unchanged** (§7 check 38). Restoring the English one is a one-character change; still needs a compliance line. |

> #### N-07 — why the disposition changed, 2026-08-02
>
> **This row previously read "do not correct — un-swapping locally would diverge from the
> syndicated source and would be silently reverted the next time NBF republishes."**
> `INTAKE.md` Q5 set the opposite default. The news agent applied Q5 and registered the
> contradiction as `F-14`. Resolved here, in favour of the correction, for three reasons —
> and the first is the only one that actually decides it.
>
> **1. The stated risk cannot occur in this build.** "Silently reverted at the next
> republish" is a property of a **live** syndicated surface, where NBF's fragment is fetched
> on each page load. This rebuild does not fetch it: the fragment is a **static copy, frozen
> at capture** (S-04, S-07, and the whole premise of question 12 in
> `CHANGES-FOR-APPROVAL.md`). There is no republish path into this site. Remove the premise
> and the conclusion does not follow — the row was reasoning about a different kind of
> artefact than the one being built.
>
> **2. The alternative is an active accessibility failure, not a neutral one.** Shipping the
> crossed pair means publishing an image we know is wrong under an accessible name we know
> describes a different publication. A screen-reader user is told the `Flash info` card shows
> Flash Info artwork; it shows the 2025 tax guide. **That is a false statement in an
> accessible name.** WCAG 1.1.1 requires a text alternative that serves the equivalent
> purpose; here it serves a different one. Nothing is preserved in exchange — see 3.
>
> **3. It is not a content change, so the usual reason for restraint does not apply.**
> `F-14` exchanges **two `src` values**. It alters no word, no claim, no figure, no
> disclosure, no alt text, no attribution. The VERBATIM rule governs strings; §6 gates
> *editorial fixes*, which are changes to strings. There is no string here. **A missing §6
> amendment is not a bar to it** — recorded as such in §6.4, and §7 check 49 amended so the
> audit does not read `F-14` as an unauthorised fix.
>
> **What survives of the original row, and it is the important part.** The defect is
> National Bank's, it lives in a fragment served to **every Quebec advisor microsite**
> (R-26), and the local correction does nothing for any of them. **The upstream fix is still
> owed and this row stays open until NBF makes it.** That is now an *action*, not a
> disposition — the distinction the original row collapsed.
>
> **Not fixed, and deliberately.** The French alt for the tax guide says
> `une main tenant un formulaire` while the artwork is a couple at a laptop; the English alt
> for the same publication is correct. **Writing a new French description of NBF's artwork is
> authoring it, not correcting it** (P-9, and the same reasoning as N-12 and D-03). The
> French wording ships untouched. Ask NBF for a corrected string.
>
> **Reversible in one line:** two values in `src/data/pages/news.fr.ts`. If the client or NBF
> compliance prefers the crossed pair, revert and set this row back to flag-only.

### 6.4 Applied non-editorial corrections — outside the §6 amendment gate

**One row, and the section exists so that nobody later reads it as an unauthorised fix.**

§6 gates **editorial fixes**: changes to *strings*. Its scope limit — *"F-numbered editorial
typos only; §1 legal blocks, §2 identity strings, §4 claims and figures, and all N-items stay
strictly verbatim"* — is a limit on **wording**. A correction that changes no wording is not
inside that scope, and refusing it on the ground that no amendment exists applies the rule to
something it does not describe.

| ID | What it changes | What it does **not** change | Gate | Status |
|---|---|---|---|---|
| **F-14** | Two `src` values on `fr-nouvelles-articles`: the `Flash info` card and the `Guide fiscalité et investissement` card exchange the image files they display, so each card shows its own publication. | **No string.** Not a word, claim, figure, disclosure, attribution, alt text or link. Both alt strings were already correct and already described the image each card should have been showing; only the pairing was crossed. | **Not §6.** No editorial-fix amendment is required or implied. | **APPLIED 2026-08-02.** Reasoning under N-07. Reversible in two values in `src/data/pages/news.fr.ts` |

**The test for this section, if a future row wants in:** *would reverting it change a single
character that a reader sees or a screen reader announces?* For `F-14` the answer is **no** —
reverting changes which two pictures are displayed, and the crossed pairing is what makes
the existing alt text false. If the answer is yes, it is a §6 editorial fix and it waits for
the amendment. **§6.4 is not a loophole in §6; it is the boundary of §6.**

> ⚠ **`F-14` keeps its `F-` number**, even though it is not a §6 row. Renumbering it would
> break the client summary, the news-page code comments and this file's own cross-references
> for a purely cosmetic gain. The `F-` series means *"a live defect we found"*; §6.1/§6.2 vs
> §6.4 says what kind. **§7 check 49 is written to match.**

---

## 7. Final audit checklist

Binary. Run against the **built output**, both language trees, every page. Any ✗ blocks launch.

**A. Legal blocks (1–9)**

1. EN copyright renders exactly `© NBFWM. All rights reserved 2026.` on all 8 EN pages — hard-coded, not date-generated. ☐
2. FR copyright renders exactly `© FBNGP Tous droits réservés 2026.` on all 8 FR pages — **no period after `FBNGP`**, unlike the English. ☐
3. `grep -r "new Date\|getFullYear"` over the build returns nothing inside any legal or footer component. ☐
4. Every page that renders a marker also renders all five FR disclaimers character-for-character against §1.3, **apostrophes byte-identical to the raw capture (mixed U+2019/U+0027 — do not normalise)**. ☐
5. Same for EN against §1.4, including `National bank` lowercase in item 4. ☐
6. No disclaimer list is re-ordered, re-numbered, truncated, merged or partially hidden behind a "read more". ☐
7. No disclaimer text has been invented, adapted from another NBF site, or added beyond items 1–5. ☐
8. Every EN service footnote line matches one of the five strings in §1.6 exactly, **including `collaborators` on Insurance**. ☐
9. The FR services page carries `Certains services sont offerts par des tiers` **once, with no terminal period**, and **no** per-service footnote sentences have been added to French. ☐

**B. Footnote integrity (10–16)**

10. Every marker rendered on a page resolves to a disclaimer **on that same page**. Zero orphans, both trees. ☐
11. **The team page in BOTH languages either carries the full accordion or carries no markers.** The live orphan (§1.5) is resolved one way, and the chosen way is recorded in `CHANGES-FOR-APPROVAL.md`. ☐
12. **Marker inventory per page matches the *as shipped* column of §1.5 exactly**, and the rebuild's rule holds on every page: *a marker resolves or it does not ship, and any page rendering a marker renders the full five-note set on that page, in order.* ☐
    - `services` **FR** — one `<sup>` carrying refs `1, 2, 3`; five notes present. The live U+00A0 that opened `<sup>⟦NBSP⟧1, 2, 3</sup>` is **preserved on the caption text**, not inside the marker (D-24). ☐
    - `services` **EN** — **six** `<sup>`, in document order: `1, 2, 3` (wheel caption) · `1` (Portfolio management) · `1` (Financial planning) · `2` (Estate planning) · `2` (Tax planning) · `3` (Insurance); five notes present. **Six, not five, is correct**: the Portfolio-management reference was the `<sub>`/U+2081 and is now a `<sup>` like its four neighbours (D-25, N-14). The *count of disclaimer references on the page is unchanged*. ☐
    - `team` **FR and EN** — `2` then `1`; **five notes present on the page** (D-14). Applied identically in both languages: a disposition that differed by language would be a second defect. ☐
    - **All other 12 pages — zero markers and zero notes.** ☐
    - **Zero `<sub>` used as a disclaimer marker. Zero U+2081** (check 14). **Zero markers resolving to a note on a different page. Zero notes filtered out because nothing cites them** (checks 10, 15, P-12/P-13). ☐

    > **Why this check is written against *as shipped* and not against the capture.** It used
    > to read "matches §1.5 exactly", where §1.5 was a description of the **live site** — which
    > by then included two defects the build had a registered decision to repair (D-25, D-14).
    > It therefore **failed by design, permanently**, on a page that was correct. A check that
    > fails by design is a check nobody reads, and a checklist with a known-red line on it
    > stops being evidence of anything. §1.5 now carries both columns; this check tests the
    > shipped one. **Diffing the build against the live capture is still required — that is
    > checks 4–9 and the verbatim string sweeps — but it is a different question from whether
    > the marker apparatus is sound.**
    >
    > ✅ **Code-comment drift — RESOLVED 2026-08-03. Recorded because it bit once, and
    > because the warning that replaced it went stale in turn.** The register rows for the
    > four services-page decisions were renumbered from `D-11` … `D-14` to `D-24` … `D-27` to
    > break a collision with the contact- and team-page rows, and for a while the code
    > comments still cited the old numbers — describing the right behaviour under numbers
    > that belonged to entirely different rows. **The comments have since been corrected.**
    > Re-measured across the five services files: **12 citations, all of them `D-24` … `D-27`**
    > — `data/pages/services.en.ts` (D-24, D-25, D-26 ×2), `data/pages/services.fr.ts`
    > (D-24 ×2), `pages/en/services/index.astro` (D-24, D-25, D-26 ×2),
    > `pages/services/index.astro` (D-24), `pages/_services/ServiceBlock.astro` (D-27).
    > **No services-page footnote decision is cited under a `D-11` … `D-14` number anywhere.**
    >
    > ⚠ **Do not grep for zero.** Two `D-11` citations survive in the services pages
    > (`pages/en/services/index.astro`, `pages/services/index.astro`) and **both are correct**:
    > D-11 is the CTA-band row, and both services pages close on their own `<ContactBlock>`,
    > which is exactly what D-11 governs. The 14 further `D-11` … `D-14` citations elsewhere
    > (`Footer.astro`, `BaseLayout.astro`, `contact.fr.ts`, `OfficeBlock.astro`,
    > `team.{fr,en}.ts` and both team pages) are correct for the same reason. **The check is
    > "no services-page *footnote* decision cited as `D-11` … `D-14`", not "no `D-11` in a
    > services file".** A blanket grep reports four false hits and teaches the next auditor to
    > distrust correct code — which is what the previous version of this box did.
13. Markers are real `<sup>` elements with a programmatic reference (`<sup><a href="#note-1" aria-describedby="…">` or equivalent), not bare digits appended to a title string. ☐
14. **Zero U+2081 characters anywhere in the build.** ☐
15. Disclaimers 4 and 5 render in full on every page carrying the accordion, even though nothing cites them. ☐
16. Every service-accordion number used decoratively is visually and semantically distinguishable from a footnote marker (different element, different size, non-adjacent, `aria-hidden` on the decorative one). ☐

**C. Identity (17–24)**

17. Every advisor and partner title matches §2.1/§2.2 character-for-character in the correct language, **including the trailing U+00A0 on the FR H4 titles**. Zero paraphrase. ☐
18. Zero designations, credentials or letters appear after either advisor's name — the live site displays none. ☐
19. Every `tel:` href is E.164 `+1514…`, **including on the four profile pages** (the live local-format hrefs are a documented deviation, C-23, with a register row). ☐
20. Every email on an EN page is `@nbc.ca`; every email on an FR page is `@bnc.ca`. **Zero exceptions — grep both directions.** ☐
21. `Laurent Achard`'s languages string on each surface matches that surface's own live value (C-07). Nothing has been harmonised across the four variants. ☐
22. The EN contact-page address renders as **two paragraphs** with all three U+00A0 intact; the EN profile pages render the single-line form; the FR pages render the French form (C-22). ☐
23. No `Sans-frais`, `Toll-Free`, `Télécopieur` or `Fax` line has been introduced — this site has none. ☐
24. `Jean-Francois Gobeil` / `Jean-François` render exactly as each surface has them (N-04); nothing has been unified. ☐

**D. Marks and links (25–32)**

25. Every FR page shows the FBNGP lockup **and** the `Groupe Wolf Achard` lockup; every EN page shows NBFWM **and** the `wolf-achard-group` lockup. Zero cross-language lockups. ☐
26. FR footers show OCRI + FCPI; EN footers show CIRO + CIPF. Each links to its regulator per §1.1/§1.2. ☐
27. **`grep -rE "Regulated by|Member of CIRO|CIPF member|Réglementé par|Membre du FCPI"` over the build returns zero hits** (P-6). The only regulatory label is the advisor-report link, with its exact verbatim text. ☐
28. Language-purity grep run in both directions **over `dist/`, not over `src/`** (Vite dedupes byte-identical assets across languages and can serve an `-en` file to a French page), **with exactly the three documented P-4 whitelist entries and no others**: `logo-cp-fbngp-s.svg` (wordless flag, both trees), `https://www.nbc.ca/fr/article/…` on the FR news page, and `https://client.bnc.ca/nbfwm/home` on **every** EN page. **Entry 3 is why a bare "no `bnc.ca` on English pages" grep is not the check** — it fires on all 8 English pages and every hit is legitimate. Exclude it explicitly, then any fourth hit is a real failure. ☐
29. Every footer link resolves 200 — all root-relative paths rewritten host-absolute per language (§3.2). No `/contact.html`-style path survives in the build. ☐
30. All 34 publication PDFs and every `/documentation/…` link resolve; **no dated PDF filename has been pinned** (P-14). ☐
31. `Accès client` → `https://client.bnc.ca/fbngp/login` on FR; `Client Access` → `https://client.bnc.ca/nbfwm/home` on EN. ☐
32. Alt text is in the page's own language on every image, and **no alt text asserts a headcount, a credential, a relationship or a regulated status** (P-9). ☐

**E. Claims and characters (33–41)**

33. Grep the build for every digit sequence in display context; each traces to a §4 row. **Zero unlisted numbers.** ☐
34. `près de 850` appears in FR only; `over 850` in EN only; neither has been harmonised (C-29). ☐
35. `100 succursales` / `100 branches` unchanged (C-30). ☐
36. `424 milliards de dollars au 31 octobre 2023` and `$424 billion in assets as at October 31, 2023` both still carry their as-of date. **The date has not been dropped, updated or rounded** (C-36). ☐
37. `Twitter` still reads `Twitter` (C-40). `TSX : NA` keeps its space in FR; `TSX: NA` has none in EN (C-39). ☐
38. The Investor Economics footnote still cites `(mars 2019)`, still opens with `*`, and appears in **French only** (C-35). ☐
39. `Depuis 1902` / `Since 1902` unchanged, and **no computed "years since"** appears anywhere (C-28, P-1). ☐
40. **NBSP census — a class rule, not a total.** ☐
    - **Every U+00A0 and U+202F inside a client-facing sentence in the archive is reproduced.** All **82** of them; the three U+202F are all on the EN firm page (`More than⟦NNBSP⟧$200 billion`, `$424⟦NNBSP⟧billion`, `31,243⟦NNBSP⟧employees`). **One in-sentence NBSP missing is a failure.** ☐
    - **Empty spacer paragraphs (`<p>&nbsp;</p>`) and trailing spacers after `<br />` are not content and do not ship.** 16 + 4 in the archive; 0 expected in the build (D-32). ☐
    - **New NBSPs may appear only inside a verbatim string relocated under a registered `D-` row.** Measured at 2026-08-03: 122 in the build against 102 in the archive — 82 kept, 40 new, all 40 inside the verbatim address in the global footer and its JSON-LD, and the relocated `We⟦NBSP⟧are⟦NBSP⟧here to help` eyebrow (D-07). **A new NBSP with no `D-` row behind it is a failure.** ☐

    > **Why this check is not a total.** It used to read *"matches the archive exactly: 102 ×
    > U+00A0"*. The rebuild ships **122**, and it is correct: D-07 renders the verbatim address
    > in every footer, so the count tracks page composition, not fidelity. Meanwhile the 20
    > archived NBSPs that do **not** ship carry no text at all. A total therefore failed a
    > passing build in one direction and would have hidden a real loss in the other — a
    > sentence NBSP could go missing while the total was made good by an extra footer. **The
    > class rule catches the thing the total was proxying for.** Full reconciliation: `CHANGES`
    > D-32.
41. Specifically: **`31⟦NBSP⟧243` renders with U+00A0 in FR** and **`31,243⟦NNBSP⟧employees` with U+202F in EN**; **`Plus de⟦NBSP⟧200 G$` uses U+00A0** and **`More than⟦NNBSP⟧$200 billion` uses U+202F**. Both markers the inventory records are present, and the two characters have **not** been unified (C-32, C-37). ☐

**F. Prohibitions (42–48)**

42. **Zero invented English content.** The EN home still has no list items; the EN team page still has no biographies; the EN firm page still has no ranking footnote (P-16). ☐
43. **Zero invented French content.** The EN-only `Our approach` section and its 52 list items have **not** been translated into French (P-16). ☐
44. **Neither navy is mixed within a language tree.** `grep -c "#274155"` returns zero inside the EN tree's CSS/assets and `grep -c "#00324d"` returns zero inside the FR tree's — or, if the client has chosen a single navy, that choice is applied uniformly and registered (P-15). ☐
45. No testimonials, client quotes, ratings, case studies or endorsement language. ☐
46. No performance figures, return claims, benchmarks or guarantee language; no growth/upward-arrow imagery adjacent to portfolio content (P-2). ☐
47. **No analytics, tag manager, pixel, chat widget, ad tag or third-party CDN/font request.** Verify with a network trace on a cold load of every page: **zero requests to `assets.adobedtm.com`** or any non-origin host (P-11). ☐
48. No contact form anywhere. ☐

**G. Editorial fixes (49–51)**

49. **If no §6 policy amendment exists, zero §6.1/§6.2 F-rows have been applied and every string ships verbatim.** F-01 … F-13 all sic. ☐
    - **`F-14` is the one applied `F-` row and it is expected to be applied** — §6.4, a non-editorial correction that changes no string. Verify it that way: the two French news cards each display their own publication, **and both alt strings are byte-identical to the capture.** If any *word* has changed, that is a real failure. ☐
50. If an amendment exists: every applied fix is on the client-approved list, every one is logged in `CHANGES-FOR-APPROVAL.md` with before/after, and no fix was applied silently. ☐
51. **No flag-only item (N-01 … N-15) has been silently "corrected."** Two lists, and the second is the point of the check. **All fifteen are accounted for below, exactly once** — N-15 is split because it is two objects (§1.5, orphan 2). ☐
    - **(a) Unchanged, verbatim, still exactly as live — verify against the capture:** ☐
      · **N-01** — the team's own name. **The expectation is zero crossover, not a count:** **zero `Wolf Achard` (one R) anywhere in the EN tree, zero `Wolf Archard` (two Rs) anywhere in the FR tree.** Measured 2026-08-03: **48 EN / 46 FR, zero crossover both ways** ✔. ⚠ **Do not check this against the archive's 39 / 36.** Those are the *capture* counts; the build legitimately carries more because site chrome repeats the name on every page (`og:site_name`, JSON-LD `name`, the header and footer lockup `aria-label`, and the two EN profile pages going 0 → 4 now that they wear the microsite chrome, AP-04). **A count moves whenever the chrome moves; the crossover property does not.** ⚠ **And do not grep bare `Achard`** — it is also Laurent Achard's surname and is spelled that way in both trees, 65 times in the EN tree alone. **Grep the team name.** ☐
      · **N-02** `(FPCI)` in the FR footer alt · **N-03** `National bank` lowercase in disclaimer 4 · **N-04** `Jean-Francois` / `Jean-François` each on its own surface · **N-05** `Montreal` / `Montréal` · **N-08** the EN toolbox's duplicated URL. ☐
      · **N-06** — `See Our Contact Details` / `See our contact details`, both casings alive, neither harmonised. ⚠ **Verify the strings, not the page count.** The title-cased label is on `/en/our-firm/` and the lower-case one on the pages that still render `<ContactBlock>`; under D-07/D-11 that is **2 EN pages, not the capture's 4**, and the FR equivalent 3. **The distribution changed by decision; no string did.** ☐
      · **N-15, second half** — **the leading `*` on the FR `notre-firme` ranking note ships**, because there it is the first character of a verbatim regulated sentence, not a pointer (§1.7, C-35, check 38). ☐
    - **(b) Eight N-items have a registered, applied disposition. Verify each against its register row, NOT against the live defect:** ☐
      · **N-07** — the two French news cards are **corrected**, each showing its own publication (`CHANGES` F-14, §6.4). **Failure = the crossed pair, or any changed word.** ☐
      · **N-09** — the `Voir le site Web` / `View website` line **is not on the rebuilt profile pages at all** (`CHANGES` D-21). Shipping it would have carried a French link onto an English page; repointing it would have edited NBF's record of a licensed advisor. **Failure = the line back in any form** — either the live French target, which is the purity breach, or a silently repointed English one, which is the edit we refused. Expect **zero** `View website` and zero `fbngp.ca/conseiller/groupe-wolf-achard` in `dist/`. ☐
      · **N-10** — the four `href="#"` dead links carry a real target: `Notre équipe` / `Our team`, pointing at the team page (`CHANGES` D-22, check 56). **Failure = a surviving `href="#"`, or an invented "all advisors" destination.** ⚠ **The other half of N-10 — the English `aria-label="main menu"` on French pages — is repaired in the build (`Navigation principale` / `Main navigation`) but has no register row yet.** That is an open item, not a disposition; it is not a licence to treat the label as verified. ☐
      · **N-11** — the legal-notes panel is **one heading level in both languages**, the French one (`CHANGES` D-28). **Failure = the two language trees disagreeing again.** ☐
      · **N-12** — the 4 advisor headshots' absent `alt` is **not left absent**: the rebuild ships authored descriptions, `name, then title, nothing else` (`CHANGES` NC-07, and check 57 requires them). **Failure = a headshot with no `alt` attribute, or an `alt` asserting anything beyond name and title.** ⚠ **Not "not invented" — NC-07 is new copy and needs explicit client approval.** The 14 valueless-`alt` images are the other half of N-12 and ship `alt=""`, honouring the live declaration. ☐
      · **N-13** — the cross-team DAM asset is **re-hosted locally** and renamed to its true format (`CHANGES` A-05). **Failure = a live dependency on another team's DAM folder, or a changed picture.** ☐
      · **N-14** — the U+2081 marker is a real `<sup>` link; **zero U+2081 in the build** (`CHANGES` D-25, check 14). **Failure = a surviving U+2081, or a changed sentence.** ☐
      · **N-15, first half** — the stray `*` on EN services **does not ship**, and the three numbered references beside it resolve (`CHANGES` D-26). **Failure = the `*` back, or a dropped numbered reference.** ☐
    - **Any N-item in list (a) found altered is a failure. Any N-item found altered with no row in list (b) is a failure.** ☐

    > **Why this check was rewritten, twice.** It first read *"the swapped news images and the
    > two stray `*` are all still exactly as live"* — which the build **deliberately** departs
    > from in registered places, so the check failed by design on a correct build. Worse, it
    > treated the two stray `*` as one object: the English one is a pointer to nothing, the
    > French one is the first character of a regulated sentence (§1.5, orphan 2). A check
    > cannot demand both survive without demanding the rebuild's own rule be broken.
    >
    > **The first rewrite did not finish the job, and this is the second (2026-08-03).** It
    > left **N-09** and **N-12** in list (a) as things to verify "exactly as live" when the
    > register had already disposed of both — D-21 deletes the `View website` line, NC-07
    > authors the four headshot descriptions — and on N-12 it contradicted **check 57 four
    > lines further down this same document**, which *requires* those descriptions. It also
    > accounted for only twelve of the fifteen N-items: **N-10, N-11 and N-13** appeared in
    > neither list while all three had been altered under D-22, D-28 and A-05, so the closing
    > catch-all fired on correct build behaviour. **All fifteen are now on exactly one side,
    > and every item in list (b) names the row it is verified against.**
    >
    > **The general rule this keeps re-learning: an N-item with a register row is verified
    > against the row, never against the defect.** A flag-only item that acquires a
    > disposition moves lists in the same edit that creates the row. **The check's real job is
    > unchanged and is list (a): catching an agent that "helpfully" fixed a client's name.**

**H. Accessibility and language plumbing (52–58)** — WCAG 2.1 AA, bank property

52. `<html lang="fr">` / `<html lang="en">` correct on every page; `hreflang` alternates pair each page with its counterpart; the language toggle preserves the current page. **Exactly one `<html>`, one `<head>`, one `<body>` and one canonical per page** — the live team pages serve three of each and 15 `hreflang` links (R-11). ☐
53. Disclaimer accordions are keyboard-operable, expose expanded/collapsed state, keep their content in the DOM, and are reachable by in-page search and by print. **Legal text must never sit behind a JS-only reveal or a `display:none` a print stylesheet keeps hidden.** ☐
54. Print stylesheet renders the disclaimers and the full footer legal block. ☐
55. Footer `<nav>` elements carry the verbatim aria-labels in §1.1/§1.2. ☐
56. **Zero `href="#"` links in the build** (N-10) — either given a real target with a register row, or rendered as non-links. ☐
57. **Zero `<img>` without an `alt` attribute in the build.** All 18 live images that render no accessible name have an explicit disposition, each recorded (N-12), and the disposition matches the class: the **4 headshots whose `alt` attribute is genuinely absent** get an explicit decision (the rebuild ships NEW COPY, `CHANGES` NC-07, naming person and title only); the **14 carrying a valueless `alt`** — 12 hero banners + the 2 `img-projet-loi-899` news images — ship `alt=""`, honouring the declaration already in the live markup. **4 + 14, not 18 + 0** — re-measured 2026-08-02 against the raw captures. ☐
58. All contact targets ≥44 px; visible focus rings on every regulatory link and mark; AA contrast on the footer ink background. ☐

---

## 8. New compliance risks found in this review

Each verified against `source-assets/html/`. **Risks in this project's own documents are in
scope and are listed first, because a wrong instruction propagates into every page a builder
touches.**

| ID | Risk | Severity |
|---|---|---|
| **R-01** | **The skill's own compliance reference contains a false statement about THIS client.** `references/compliance-register.md` states: *"On Wolf Achard's services page the accordion renders with **zero `<sup>` markers** anywhere — five disclaimers citing nothing."* **This is wrong.** The FR services page renders one `<sup>⟦NBSP⟧1, 2, 3</sup>` **and** the accordion; the EN page renders five `<sup>` elements plus a `<sub>` **and** the accordion. `BUILD-CONTEXT.md` carries a dated correction, but the skill reference itself is still wrong and will mislead the **next** client build, where nobody will have this project's correction to hand. **Fix the skill file, not just the build context.** | **BLOCKER (process)** |
| **R-02** | **A brief circulating on this project asserts that `Vision` and `Mythes et réalités` share a *byte-identical* French description. They do not.** They differ at character 58 — `Le groupe économie` vs `Le groupe Économie` — both strings exactly 200 characters. A builder told they are identical will deduplicate them into one shared string and **silently alter one of the two**, with no register row, in copy attributing third-party research. The inventory transcribed both correctly; only the summary is wrong. | **High** |
| **R-03** | **P-12 is violated in BOTH language trees, symmetrically.** `fr-notre-equipe` and `en-our-team` each render markers `1` and `2` against the two partners' titles with **no disclaimer accordion anywhere on the page**. Marker `1` sits on `Planificateur financier` / `Financial Planner` — the one title on this site that disclaimer 1 actually governs. A regulatory reference pointing nowhere is worse than no reference. | **High** |
| **R-04** | **Fee and financing claims run with no disclaimer marker, in both languages.** The Banking-solutions block claims `gratuités sur les comptes courants` and `rabais de taux d'intérêt` (FR) / `Savings on certain banking solutions` and `Competitive interest rates` (EN). **Neither block carries any marker**, so disclaimer 4 (credit approval) and disclaimer 5 (offer conditions) — both of which render on that very page — attach to nothing. **Disclaimers 4 and 5 are cited by no marker anywhere in the 16-page archive.** | **High** |
| **R-05** | **Fee-claim mismatch EN/FR for the same offer.** FR promises `gratuités` (free of charge); EN promises `Savings` (a reduction). Two different fee assertions describing one banking package, compounded by R-04's total absence of disclosure markers on both. | **High** |
| **R-06** | **Asymmetric third-party-provider disclosure.** The English services page carries the "these services are offered by third parties" disclosure **six times** with five markers; the French page carries it **once**, as an unmarked caption with no terminal period, for the same seven services. A French reader gets materially less disclosure of the same fact. | **High** |
| **R-07** | **The `CFA niveau III` claim (C-17) is almost certainly wrong now.** `se prépare actuellement pour l'examen du CFA niveau III` is anchored to an undated page. Whatever the outcome since publication, the present-tense sentence is stale, and CFA Institute rules constrain how candidacy may be described. It is a credential claim about a named individual. **Needs a client answer before launch.** | **High** |
| **R-08** | **The English tree misspells the team's own name in its title, H1, nav, alt text and URL slug — while its own logo artwork spells it correctly.** `Wolf Archard` (**39 occurrences across the 8 EN captures**) vs `Wolf Achard` (**36 across the 8 FR captures**, **and** in `logo-ia-wolf-achard-group-L.svg`). The rebuild must ship it verbatim (N-01), which means shipping a misspelling of the client's name; the alternative requires NBF to re-slug a live URL. Either way the client must decide, and they will not know until told. ⚠ **Those two figures describe the *captures*. Do not audit the build against them** — the build ships 48 / 46 because its own chrome repeats the name on every page, and that is not contamination. **The verifiable property is zero crossover**, and it is §7 check 51's list (a). | **High (client-facing)** |
| **R-09** | **The `over 850` / `près de 850` contradiction (C-29)** is a firm-level headcount asserted in opposite directions on parallel pages, unsourced and undated in both. | **High** |
| **R-10** | **The stale-figure cluster.** `424 milliards … 31 octobre 2023` + `31 243 employés` + `Twitter` are one paragraph, **2 years 9 months old**, and the Twitter reference was already obsolete when the paragraph was dated. The Investor Economics ranking (C-35) is **over seven years old** and is a *competitive ranking* — the class of claim that most needs current substantiation. | **High** |
| **R-11** | **Both team pages serve three complete nested HTML documents** — 3 × `<html>`, 3 × `<body>`, **three conflicting canonicals**, 15 `hreflang` links instead of 5, and the Adobe Launch tag manager loaded **three times**. Reproduce the *content*; never the nesting. ⚠ `BUILD-CONTEXT.md` describes this as "consent script loaded six times" — **measured: it is the Adobe Launch tag manager, loaded three times, and there is no consent script in the captures at all.** Correct the build context. | **High** |
| **R-12** | **Root-relative legal and PDF URLs will silently 404 on a new domain.** ~15 footer legal links (`/user-agreement.html`, `/convention.html`, `/complaint-settlement.html`, `/resolution-insatisfactions.html`, `/about/regulatory-information.html`…) plus ~34 publication PDFs are stored as paths that resolve only on `nbfwm.ca` / `fbngp.ca`. **`User agreement`, `Complaint settlement` and `Regulatory information` would all be dead at launch.** | **High** |
| **R-13** | **P-16: the English content gap is large enough to be a commissioning decision, not a build detail.** EN home: 0 list items vs FR's 11 plus mission, commitments, differentiators and a philosophy essay. EN team: **no biographies at all** vs two in French. EN firm: no ranking footnote. The two trees are not translations — they are different sites. **Any agent that "balances" them fabricates copy about named licensed individuals.** | **High** |
| **R-14** | ⚠ **WITHDRAWN 2026-08-03 — this row was wrong, and the inventory was right.** It claimed *"the inventory over-marks at least one U+00A0"*, on the ground that the partners' affiliation line is `…patrimoine<br /> ` — *"a `<br />` and an ordinary space, **no NBSP**"*. **Re-verified at byte level in the raw captures: the markup is `Gestion de patrimoine<br />  </p>` — `<br />`, an ordinary space, **and a U+00A0**.** 2 occurrences in `source-assets/html/fr-notre-equipe.html` and 2 in `en-our-team.html`. `content/content-inventory.md` transcribes it as `Financière Banque Nationale - Gestion de patrimoine ⟦NBSP⟧`, which is **correct, character for character**. **Nobody should "fix" that transcription** — it is right, and correcting it would delete a real character from the record. **What survives of this row is only the general practice, and it was never evidence of an inventory error:** the raw captures are the source of truth for character-level questions, per §0's precedence rule. The inventory has no known NBSP error. (The firm-page NBSPs in C-31…C-37 were separately re-verified and are correct too.) ⚠ **A real deviation had the wrong reason attached to it.** Those 4 characters *are* among the 20 archived U+00A0 the build does not ship — but as **trailing spacers after `<br />`**, whitespace-only nodes with no text attached, which is a build decision now registered as `CHANGES` **D-32** and encoded in §7 check 40. The deviation was real; this row's explanation of it was not. | ~~Medium-High~~ **Withdrawn — no risk** |
| **R-15** | **`BUILD-CONTEXT.md` describes the FR services marker as `<sup> 1, 2, 3</sup>` "(note the leading space inside the tag)". It is a NO-BREAK SPACE, U+00A0, not a space.** A builder reproducing "a space" strips a registered character out of a disclaimer reference — and check 40's census then fails for a reason nobody can find. | **Medium-High** |
| **R-16** | **Adobe Launch (`//assets.adobedtm.com/…`) loads on all 16 live pages.** The rebuild must not carry it (P-11), but note the corollary: the live site sets third-party storage, so any "we set no non-essential cookies" claim about the *rebuild* is a new claim about a different site and should be worded as such. | **Medium** |
| **R-17** | **Eighteen `<img>` elements render with no accessible name — but only four have no `alt` attribute at all.** ⚠ **Re-measured 2026-08-02:** the **4 advisor-profile headshots** have the attribute genuinely absent; the **12 hero banners** and the **2 news `img-projet-loi-899` images** carry a **valueless `alt`** (`alt/`), which parses as `alt=""` — declared decorative by the markup itself. The severity sits on the four: on a WCAG-AA-obligated bank property, a photograph of a named advisor with **no declared status at all** is both an accessibility failure and an identity-data gap (N-12). The fourteen are a *documentation* risk rather than an accessibility one — two of the archive documents recorded their alt as "a single space" (that space is `data-title`), which is exactly the sort of transcription error that gets "corrected" backwards at sign-off. Both are fixed and carry their capture history. | **Medium** |
| **R-18** | **U+2081 SUBSCRIPT ONE used as a disclaimer marker** on the EN Portfolio-management block, inside a `<sub>` wrapping the whole sentence. Visually wrong, semantically wrong, announced inconsistently by screen readers — sitting on a regulatory reference (N-14). | **Medium** |
| **R-19** | **Two stray `*` references with no footnote** (§1.5): `…third party specialists. *<sup>1, 2, 3</sup>` on EN services, and `*Financière Banque Nationale…` opening the FR firm accordion. Each looks like a disclosure pointer and points at nothing. | **Medium** |
| **R-20** | **`(FPCI)` in the FR footer alt on all 8 French pages** — the regulator's acronym transposed, in the accessible name of the mark that identifies investor-protection coverage. Screen-reader users get the wrong acronym for the protection fund (N-02). | **Medium** |
| **R-21** | **The two supplied team lockups use different navies** (`#274155` FR, `#00324d` EN) plus an olive `#79755d` used only for the English word `Group`. There is no correct answer; whichever is adopted, one language's own artwork mismatches the site around it. **Client decision (P-15).** | **Medium** |
| **R-22** | **The English `Budget tool` and `Mortgage calculator` point at the same URL** (the mortgage payments calculator). One of the two toolbox links is simply wrong, and the French page proves a correct budget URL exists. Guessing the English equivalent is inventing a destination (N-08). | **Medium** |
| **R-23** | **Both English advisor-profile `View website` links send English visitors to the French microsite** — a language-purity breach inside NBF's own structured advisor record (N-09). | **Medium** |
| **R-24** | **Four `href="#"` dead links** on the profile pages (`< See all advisors` / `< Voir tous les conseillers`), plus `aria-label="main menu"` in English on all French pages (N-10). | **Medium** |
| **R-25** | **Cross-team DAM dependency**: both news pages load an image from `/microsites/edwards-knutson-wealth-advisors/page-content/`. If that team's microsite is retired, this team's page breaks (N-13). | **Medium** |
| **R-26** | **Two French news cards display each other's images** (N-07), and the defect lives in a **central NBF Experience Fragment**, so it affects every advisor microsite in Quebec, not just this one. ⚠ **This row previously ended "fixing it locally would be reverted on NBF's next publish."** That is true of a live syndicated surface and **not** of this build, which never re-fetches the fragment — see the N-07 note. **The pairing is corrected locally (F-14); the risk that remains is the upstream one**, and it is the larger of the two: every other Quebec advisor still ships the crossed pair, and this build's local correction does nothing for any of them. **Raise it with NBF as a platform defect, not as a page defect.** | **Medium** |
| **R-27** | **Stale artwork shipping as current**: the English `Tax and Investment Guide` card displays `tax-guide-quebec-2025.jpg` — a **2025** guide cover, in August 2026 — while the French equivalent card displays a 2026 Flash Info cover (crossed, per N-07). Publication currency is a claim. | **Medium** |
| **R-28** | **Attribution mismatch on third-party research** (C-48): EN credits the CIO Office of National Bank Investments, FR credits *le groupe Économie et stratégie*, for the same publication pair. One language mis-credits the author of research being distributed to clients. Compounded by C-47, where the FR `Vision` and `Mythes et réalités` blurbs are one character apart — suggesting a copy-paste that also carried the wrong attribution. | **Medium** |
| **R-29** | **Unattributed, undated stat band.** C-31…C-34 (`1 G$`, `200 G$`, `29 %`, `9 %`) carry **no source and no as-of date** on the live site. Any rebuild that renders them at hero scale amplifies four unsubstantiated figures. Same figures, much louder — worth explicit compliance sign-off and, ideally, an as-of caption supplied by NBF. Note also that two of the four pictograms are attached to the statistic their own filename does not name. | **Medium** |
| **R-30** | **Both team pages' partner cards assert an employer** (`Financière Banque Nationale - Gestion de patrimoine` / `National Bank Financial - Wealth Management`) for two people who are described as *partners/collaborators* and carry no phone or email. The relationship being asserted — employee, seconded specialist, or third-party collaborator — is exactly what disclaimers 1 and 2 exist to clarify, and the markers that would clarify it are the orphaned ones in R-03. | **Medium** |
| **R-31** | **`og:image` for all 16 pages, both languages, is the generic National Bank corporate logo** (`bnc-logo.png`). Every social share of a Groupe Wolf Achard page renders as National Bank corporate. Any replacement must still carry NBF co-branding (P-7). | **Low** |
| **R-32** | **Copyright year frozen at `2026`.** Correct today, wrong on 1 January. **Do not auto-generate it** (P-14) — put it on the client's annual review list instead. | **Low** |
| **R-33** | **`Our subsidiaries` links to `nbc.ca/contact-us.html`** (and `Filiales Banque Nationale` to `bnc.ca/coordonnees.html`) — label/destination mismatch in the footer. Verbatim from live, so keep, but a user seeking subsidiary disclosure lands on a contact page. | **Low** |

---

## 9. The five questions for the client — compliance IDs behind each

> ⚠ **The client-facing wording lives in `CHANGES-FOR-APPROVAL.md`, in the
> `▶ START HERE — five questions` section at the top of that file. That is the single list
> that goes in front of the client.** This section is its compliance index: the same five
> questions, with every ID a reviewer needs to trace one. **Keep the two in step — if a
> question is added, removed or re-scoped there, it changes here in the same edit.** Two
> five-question lists that drift apart are the same failure as two `AP-01`s.

| # | The question, in one line | Compliance IDs |
|---|---|---|
| **1** | **Your English site spells your name `Wolf Archard`. Your logo spells it `Wolf Achard`. Which is right — and may we change the English web address to match?** On the live site: 39 occurrences EN, 36 of `Achard` FR, **zero crossover either way** — and zero crossover is also what the build is audited on (check 51), not the count. | C-21 · N-01 · R-08 · `INTAKE` Q1 |
| **2** | **Your English site is mostly National Bank's writing; your French site is yours.** Four syndicated `experiencefragment` blocks on the EN services page against two on the FR one — the seven English service descriptions are the bank's, the seven French ones are your team's. Same pattern on home and team. Do you want English versions written and put through NBF approval? | C-62 (`CHANGES`) · S-07 (`CHANGES`) · P-16 · P-5 · R-13 · `INTAKE` Q3 |
| **3** | **The sentences that are ageing.** `se prépare actuellement pour l'examen du CFA niveau III` and `plus de 8 ans` on an undated page; National Bank's `$424 billion / October 2023` paragraph, still naming `Twitter`; the FR-only `Investor Economics (mars 2019)` 5th-place ranking. Refreshed wording from NBF, or ship as they stand? **CFA Institute rules constrain how candidacy may be described — this one needs an answer before launch.** | C-17 · C-18 · C-35 · C-36 · C-37 · C-40 · R-07 · R-10 · `INTAKE` Q8 |
| **4** | **Four references on your site point at nothing, and we made them resolve.** The team page's markers `1`/`2` with no notes → the standard five-note panel added; the services page's `₁` typed into a subscript → a real superscript; the stray `*` with no footnote → dropped; the two French news cards showing each other's pictures → exchanged. Confirm, or reverse any of them. | P-12 · P-13 · R-03 · N-07 · N-14 · N-15 · §6.4 · `CHANGES` D-14 / D-24 / D-25 / D-26 / F-14 · `INTAKE` Q5 |
| **5** | **Your news page updates itself today; after launch it will not. Who owns keeping it current?** Roughly 112 advisors publish the identical page; no dated PDF is pinned, so the "read the latest version" links keep working, but the rotating items go stale silently. **This one has no default we can take for you.** | P-14 · AP-03 · `CHANGES` S-01 … S-08, AP-06 |

**Two findings that are *not* in the five, and why.** The `près de 850` / `over 850`
contradiction (C-29) and the four conflicting statements about the advisors' spoken languages
(C-07, C-08) are real and are in the register, but each already has a clean default that
needs no client decision to proceed — **each surface ships its own verbatim string, and
nothing is harmonised.** They are in `INTAKE` Q7 and in the detailed decision table in
`CHANGES-FOR-APPROVAL.md`. Putting them in the five would trade a launch-blocking question
for one that is only embarrassing.

**One item sits in the client summary without being one of the five, added 2026-08-03.**
The **same photograph of Laurent Achard carries two different `alt` strings** in the build:
the authored `NC-07` description on the team and profile pages, and the live truncated
`…patrimoin , membre de l'équipe expert.` (`F-01`) on the contact page. **Both are correct
per their own rows** — NC-07 covers surfaces that had no description at all, F-01 ships sic
because no §6 amendment exists — and the register is internally consistent. It is in the
summary because **it does not read that way at sign-off**: one photograph described two ways
on two pages of one site reads as an error, and the client should hear it from us first. It
is not a sixth question: it needs no new decision, only an answer to `F-01`, which is already
question 9 of the detailed table. **Still five questions; the `▶ START HERE` section and this
one remain in step.** *(N-12 · `CHANGES` NC-07 / F-01.)*

> Bundle them. Trickling decisions costs weeks; one conversation closes the file.
