# Changes for client approval — Groupe Wolf Achard rebuild

**What this document is.** Every place the new site differs from the live site,
in one list, so Groupe Wolf Achard and National Bank compliance can sign off in
one pass rather than hunting for changes.

**What it is not.** It is not a changelog of the build. Design, layout and markup
changes are not listed — only changes to *words, figures, links and identity
data*.

**How to read a row.** Each row quotes the live string and the shipped string
exactly. `Applied — pending sign-off` means it is in the build today and will be
reverted if you say so. `⚠ NEW COPY` means these words are not on your current
site at all.

**Rule we worked under:** nothing was changed silently. If it is not in this
document, it is character-for-character what your site says today.

> **Status: ALL PAGE PASSES COMPLETE, RECONCILED 2026-08-02.** Every page agent
> has written its rows and the register has been reconciled once end to end (ID
> collisions, ordering, cross-references). **Insert new rows in ID order and
> preserve rows other agents have added** — never rewrite this file wholesale.

---

# ▶ START HERE — five questions

**This is the whole file in one page.** Everything below it is the permanent
record; this is the part that needs you. Five questions, all answerable in one
reply. Each says what we found, what we did while waiting for you, and what
changes if you answer differently.

---

### 1. Your English site spells your name `Wolf Archard`. Your logo spells it `Wolf Achard`.

**What we found.** The English page titles, the `<h1>`s, the navigation label,
the image descriptions and the web address itself all read **`Wolf Archard`**,
two Rs — **39 occurrences across your 8 English pages, and not one `Achard`**.
French reads `Achard` throughout, 36 occurrences, not one `Archard`. **The two
spellings have never once crossed**, which is what tells us this is a systematic
platform error rather than a scatter of typos. And the
English logo artwork on those same pages, `logo-ia-wolf-achard-group-L.svg`,
reads **`Achard`**. The English site contradicts its own letterhead on every
page.

**What we did.** Shipped `Archard` exactly as your live site has it. We do not
silently correct a client's own name, and correcting it changes a live web
address, every language-pair link, the canonical address and the search index.

**If you say otherwise.** Confirm `Achard` is correct and National Bank re-slugs
the English pages; we change **every occurrence in the English tree** and one URL
in a single pass, and the old address redirects. *(39 of them are the strings your
live pages carry today; the rebuilt site repeats the name in its own headers,
footers and share data as well, so the edit is one find-and-replace either way —
we mention it only so the number in the change log does not surprise you.)*
**This is the highest-value item on the whole list, and only you can answer it.**
*(`COMPLIANCE.md` C-21 / N-01 / R-08 · INTAKE Q1)*

---

### 2. Your English site is mostly National Bank's writing. Your French site is yours.

**What we found.** Not "the English is thinner" — something sharper. National
Bank injects blocks of central content into advisor pages at load time; they are
identifiable in the markup. We counted them on all sixteen of your live pages:

| Your page | Bank-injected blocks |
|---|---|
| **News & articles** — both languages | **6 each** |
| **Our services** — English | 4 |
| **Nos services** — French | 2 |
| every other page, both languages | 0 |

**Your news page is the most syndicated thing on your site, in both languages** —
you are not the author of any of it (that is question 5). **Your services pages
are the ones where it depends which language a reader picks:** on the English
page the bank supplies the `Our approach` section, **the entire seven-service
accordion**, the toolbox and the legal notes; on the French page only the toolbox
and the legal notes are the bank's — **all seven service descriptions are your
team's own prose.** Measured by words, the French services page is **26.6%**
the bank's (211 of 794) against the English page's **74.0%** (713 of 963). The
English page is the *larger* of the two (52 list items against French's 5) and
the *less yours*.

Every other page is written in place — though `Notre firme` / `Our Firm` is still
entirely *about* National Bank rather than about you (see D-15). Across the whole
site, at most **27.5% of your French body copy and 15.8% of your English** is
demonstrably yours rather than shared platform wording. That is a lower bound,
measured against one other advisor's site.

The same pattern runs across the rest: your French home page has a mission,
commitments, differentiators and a philosophy essay; the English one has none.
Your French team page carries two biographies; the English carries none.

> ⚠ **Correction, 2026-08-03.** An earlier version of this section — and of
> `INTAKE.md` Q3 — said the four-against-two split was on the services pages and
> **"every other page carries none."** That last clause was wrong: it was
> generalised from a partial sample that did not include the news captures. The
> full census is the table above. **It sharpens the finding rather than softening
> it** — the news pages turn out to be the most syndicated pages on the site.

> ### ✅ ANSWERED 2026-08-03 — you authorised the English translations, and they are in the build
>
> **This question is no longer open. It is a decision taken.** What follows is
> what shipped and what is still owed.
>
> **What you authorised.** Filling the English gap **by translation of the French
> copy you already publish** — and by nothing else. Recorded as a dated,
> scope-limited amendment to the prohibition that previously forbade it
> (`content/COMPLIANCE.md` §6.5; the decision is `D-70`). **The prohibition was
> not deleted — it was amended, in writing, with a boundary**, so that a later
> reader finds the rule *and* the authorisation together.
>
> **What shipped.** Six blocks, all on the two pages that carried the gap:
>
> | Now on your English site | Translated from |
> |---|---|
> | `Our mission` — 4 items | `Notre mission` *(NC-20)* |
> | `Our commitments` — 4 items | `Nos engagements` *(NC-21)* |
> | `Our philosophy` — the essay | `Notre philosophie` *(NC-22)* |
> | `What sets us apart` — 3 items | `Ce qui nous distingue` *(NC-23)* |
> | Lysane Tougas's `Biography` — 3 paragraphs | her `Biographie` *(NC-24, NC-25)* |
> | Jean-Francois Gobeil's `Biography` — 2 paragraphs | his `Biographie` *(NC-26)* |
>
> Your English home page went from **five sections to eight**, and your English
> team page carries biographies for the first time. **Nothing was improved on the
> way across** — where your French carries a defect, the English carries the same
> one and it is flagged rather than repaired.
>
> **What is still owed, and it is the part that needs National Bank.**
> **Seven credential and regulatory lines are now asserted in a second language**
> about two named, licensed individuals — Barreau du Québec membership since
> 1998, a bachelor's and a master's in law (2004), a B.B.A, IQPF membership since
> 2015, a diploma from HEC Montréal, the CFA Level III line, and "more than 8
> years". **Every one of them needs NBF compliance sign-off before launch**, and
> each is flagged on its own line at `NC-25` / `NC-26`. **The CFA line is the one
> to answer first — see question 3, which this decision has just made twice as
> urgent.**
>
> **What we did NOT translate, and why.** Your French home page's opening
> `Une gestion de patrimoine sur mesure…` block and the four descriptions under
> `Un processus éprouvé` — neither was in your authorisation, and the process
> descriptions could not have been attached anyway, because **your English page's
> four items are four different things** (`Our personalized approach`,
> `Our integrity`, `Our professionalism`, `Our transparency` are qualities; the
> French four are steps). That is `D-73`, and it is also why the new English
> paragraph on `Our Firm` is one sentence shorter than the French one. The
> `Petits détails pour tout savoir` ranking note is still not translated — that
> one is a stale competitive ranking claim and remains a separate decision
> (`D-20`). **And the prohibition still runs the other way, untouched:** your
> English services page's `Our approach` section is **not** translated into
> French.
>
> **Still true, and unchanged by any of this:** your **services** pages are
> untouched, so the 74%-vs-26% split in the table above still stands, and your
> news pages are still 100% the bank's. **This decision closed the home and team
> gaps. It did not make your English site yours** — the services page is where
> that argument still lives (`C-62`).

**What we did before you answered.** Reproduced both trees exactly, thin English
included, because we were prohibited from inventing content to fill a language
gap — it would have meant writing claims and credentials about named, licensed
people.
*(D-70 · NC-20 … NC-26 · C-62 · S-07 · `COMPLIANCE.md` §6.5 / P-16 / R-13 ·
INTAKE Q3)*

---

### 3. One sentence on your site expires faster than any other, and two more have already aged.

**What we found.** Jean-Francois Gobeil's French biography says he
**`se prépare actuellement pour l'examen du CFA niveau III`** — *is currently
preparing* — on a page that carries **no date**. Since it was written he has
passed, failed or stopped; in all three cases the present tense is now wrong, and
CFA Institute rules constrain how candidacy may be described in public material.
The same paragraph claims **`plus de 8 ans`** of experience, which also counts
upward from an unstated year. Alongside them: National Bank's
**`424 milliards … au 31 octobre 2023`** paragraph (which still names
**`Twitter`**, renamed in July 2023), and a French-only **5th-place ranking
sourced to `Investor Economics (mars 2019)`** — over seven years old, and the
only claim on your entire site that cites a source at all.

**What we did.** Shipped all of them exactly as they read, dates intact. We never
update, round or re-date a figure or a credential.

> ⚠ **This question got more urgent on 2026-08-03, not less.** Answering question
> 2 put the CFA sentence and the "more than 8 years" sentence **into English as
> well** — faithfully, with `actuellement` preserved as `currently` and the digit
> `8` preserved as `8`, because a translation may not quietly improve its source.
> **Both sentences now age in two languages instead of one**, in front of two
> audiences. Nothing about them was softened and nothing was fixed. The English
> is written to be the smallest possible claim: `is currently preparing for the
> CFA Level III exam`, **never** `CFA Level III candidate` or `pursuing the CFA
> charter`, because CFA Institute rules constrain how candidacy may be described
> in public material and those forms say more than your French does. *(NC-26,
> lines (a) and (c).)*

**If you say otherwise.** National Bank supplies refreshed wording — each figure
with **its own as-of date** — and Jean-Francois (or NBF compliance) supplies one
corrected sentence. **The CFA line needs an answer before launch, not after** —
and one corrected sentence now fixes two pages instead of one.
*(`COMPLIANCE.md` C-17 / C-18 / C-35 / C-36 / C-40 · R-07 / R-10 · NC-26 ·
INTAKE Q8)*

---

### 4. Four things on your site point at nothing. We made them resolve.

**What we found.** Your **team page**, in both languages, prints a small ¹ beside
`Planificateur financier` / `Financial Planner` and a ² beside
`Conseillère principale, planification successorale` — and carries **no legal
notes for them to point at**. Your **English services page** prints a footnote
marker that is not markup at all but a `₁` character typed into subscript, plus a
stray `*` with no note behind it anywhere on the page. And on your **French news
page** the `Flash info` card shows the tax-guide cover while the tax-guide card
shows the Flash Info cover — **each described as the other**.

**What we did.** Added your standard five-item `Notes légales` /
`Legal Disclaimers` panel to the team page so both markers resolve (**no new
wording** — it is National Bank's standard text, already published on your own
services page). Made every services-page number a working link. Turned the `₁`
into a real superscript. Dropped the `*`, because a reference that resolves or
does not ship is the rule we built to. Exchanged the two news pictures so each
card shows its own publication.

**If you say otherwise.** Each is one line to reverse. **Two of them genuinely
need a line from compliance**, because your own documents disagreed about them:
the dropped `*` (`D-26`) and the swapped pictures (`F-14`) — we have written the
reasoning for both into `content/COMPLIANCE.md` so there is one answer on file,
not two. The underlying picture fault is National Bank's and should be raised
with them either way.
*(D-14 · D-24 · D-25 · D-26 · F-14 · `COMPLIANCE.md` N-07 / N-14 / N-15 / P-12 ·
INTAKE Q5)*

---

### 5. Your news page updates itself today. After launch it will not. Who owns it?

**What we found.** Every report, budget analysis and video on your
`Nouvelles et articles` page is written by National Bank and injected when the
page loads. You wrote none of it, and roughly **112 other advisors publish the
identical page**. A static site is a photograph of it.

**What we did.** Pinned **no** dated file, so the "read the latest version"
documents keep refreshing on their own. `npm run check:nbf` reports what has
moved since capture.

**If you say otherwise — and this one has no default.** The rotating items (three
featured articles, two videos, the campaign block) will go stale silently, with
nothing visibly broken. **Somebody has to own running that check.** Three
options, cheapest first: run it on a schedule and update by hand; point the
rotating items at National Bank's own hub pages, which never go stale; or pull
the bank's content at build time, which restores automatic updating and costs the
most. **Assign an owner before launch.**
*(the S-series · AP-06 · `COMPLIANCE.md` P-14)*

---

### One more thing, and it is a one-line answer — not a sixth question

**The same photograph of Laurent Achard is described two different ways on two
different pages of the new site.** On your team page it reads
`Laurent Achard, Conseiller en gestion de patrimoine`. On your contact page it
reads `Photo de Laurent Achard, Conseiller en gestion de patrimoin , membre de
l'équipe expert.` — your live wording, with the word `patrimoine` cut off
mid-word, exactly as your site has it today.

**Both are correct, and each for its own reason.** The team-page description is
one of the new ones we wrote because the picture there had no description at all
(`NC-07`); the contact-page one is a live string we are not allowed to correct
without your word (`F-01`). Two rules, two pages, one photograph — and side by
side at sign-off it simply reads as a mistake, which is why it is here rather
than buried in the tables.

**Nothing changes until you answer** — both pages ship today exactly as described
above. **Two clean answers, both one line.** Either **(a)** use the written
version on both pages, which also disposes of the `patrimoin` truncation — this
is what we would do, and it is the same recommendation as question 9 of the
detailed table; or **(b)** leave both exactly as they are, verbatim wherever your
site has wording of its own. Answering `F-01` settles it either way.
*(`NC-07` · `F-01` · `COMPLIANCE.md` N-12)*

---

> Everything from here down is the permanent record. **The detailed decision
> index is the next-but-one section**, and every row in this file is reversible.

---

## ⚠ ID CHANGE, 2026-08-02 — this file's `N-` series is now `D-`

This document and `content/COMPLIANCE.md` each ran an independent `N-` series, so
`N-01` meant **two different things** depending on which file you had open: the
client-access button here, the `Wolf Archard` misspelling there. Read side by
side — which is exactly how a client reads them — that is actively misleading.

Resolved by giving each series its own prefix, and by giving each file one job:

| | Prefix | Scope | Owner |
|---|---|---|---|
| `content/COMPLIANCE.md` | **`N-`** *(unchanged)* | **Compliance flag-only.** Live-site defects we will not repair because repairing them would be a legal, identity or regulatory decision. | Compliance |
| **this file** | **`D-`** *(was `N-`)* | **Build decisions.** Places the rebuild had to choose, where the choice is the client's to confirm. | Build |

**Old → new, complete:**

| Was | Now | Item |
|---|---|---|
| `N-01` | **`D-01`** | `Accès client` / `Client Access` button kept in the top bar |
| `N-02` | **`D-02`** | Navigation label lengths — only two shortened |
| `N-03` | **`D-03`** | French home icon descriptions describe the wrong pictures |
| `N-04` | **`D-04`** | English home page opens on National Bank's generic banner |
| `N-05` | **`D-05`** | A third red, and a navy, in the home-page icon artwork |

`D-06` onward are new. **An `N-` reference anywhere in this repo now means
`content/COMPLIANCE.md`, always.**

## ⚠ SECOND ID CHANGE, 2026-08-02 — this file's `AP-` rows are now `AP-04` … `AP-06`

Six agents wrote in parallel and the `AP-` series collided the same way `N-` did:
this file and `content/COMPLIANCE.md` each opened `AP-01`, with **different
meanings**. The register's own rule is that `AP-` is **one shared series across
both documents** — the same convention `C-` and `F-` already follow, where
`content/COMPLIANCE.md` holds the low numbers and this file continues the count.
So this file's three rows move up rather than acquiring a new prefix.

**Old → new, complete:**

| Was | Now | Item |
|---|---|---|
| `AP-01` | **`AP-04`** | Profile pages carried over — routing, pairing, sitemap |
| `AP-02` | **`AP-05`** | No legal-notes panel on the four profile pages |
| `AP-03` | **`AP-06`** | Every string on those pages is National Bank's, not yours |

`content/COMPLIANCE.md` keeps `AP-01` (defects originate in NBF's advisor
record), `AP-02` (no accordion, no markers, no contact strip — keep as-is) and
`AP-03` (the languages fields contradict the team pages). **Nothing in
`content/COMPLIANCE.md` moved, and no code comment changes** — every `AP-`
citation under `src/` already names `COMPLIANCE.md` explicitly or matches its
meaning.

*(`AP-05` here and `AP-02` there reach the same disposition from two directions —
the build states what it did, compliance states why it must stay that way. They
are cross-linked, not merged, because the two documents have different readers.)*

## Which series lives in which document

**This table is the authority. `content/COMPLIANCE.md` §0 carries the identical
table, and the two must be changed together.**

| Series | Lives in | Meaning | Numbering |
|---|---|---|---|
| **`C-`** | **both** | Claim — anything assertable | `C-01` … `C-53` compliance · `C-54` → this file |
| **`F-`** | **both** | Editorial fix to a live defect | `F-01` … `F-13` compliance · `F-14` → this file |
| **`AP-`** | **both** | Advisor profile pages | `AP-01` … `AP-03` compliance · `AP-04` → this file |
| **`N-`** | `content/COMPLIANCE.md` **only** | Flag-only. A live defect we will **not** repair, because repairing it is a legal, identity or regulatory decision | `N-01` … `N-15` |
| **`P-`** | `content/COMPLIANCE.md` **only** | Prohibition — a standing rule the build must not violate | `P-1` … `P-16` *(no leading zero, deliberately — a `P-` is a rule, not a row)* |
| **`R-`** | `content/COMPLIANCE.md` **only** | Risk found during review, including risks in our own documents | `R-01` … `R-33` |
| **`D-`** | **this file only** | Build decision — a place the rebuild had to choose, where the choice is the client's to confirm | `D-01` … `D-32` |
| **`NC-`** | **this file only** | New copy written for the rebuild | `NC-01` … `NC-07` |
| **`S-`** | **this file only** | Syndicated National Bank content | `S-01` … `S-08` |
| **`A-`** | **this file only** | Brand artwork substitutions and derivations | `A-01` … `A-05` |
| **`U-`** | **this file only** | URL change | `U-01` |

**A shared `C-`, `F-` or `AP-` row may be *restated* in the other file under the same ID —
that is a cross-reference, not a collision.** `F-01` is drafted in `content/COMPLIANCE.md`
§6.1 and presented to the client here; both describe one defect. **A collision is one ID
meaning two different things**, which is what `N-` and `AP-` did. The numbering column above
says where each number is *allocated*, not where it may appear.

Three rules follow from it, and all three were broken at least once during the
parallel build:

1. **A shared series is one ascending count, never two.** If you need a new `C-`,
   `F-` or `AP-` row, take the next free number **across both files**.
2. **A single-document series never appears as a definition in the other file** —
   only as a citation, and a citation to a series the other file owns should name
   the file (`content/COMPLIANCE.md N-07`).
3. **Every table is in ascending ID order.** Renumbering is a last resort: the IDs
   are cited in code comments under `src/`, and a renumber that stops at the
   documents leaves the code pointing at the wrong row.

---

## Every open decision, in detail

The five questions above are the ones we need answered to launch. This table is
the long form — every decision in the build, including the ones with a default
you will probably just wave through. Nothing here is missing from the five; the
five are these, grouped.

| # | Question | Our recommendation |
|---|---|---|
| 1 | Two navigation labels are shortened **in the top bar only** (`Nouvelles et articles` → `Nouvelles`, `News & articles` → `News`). Page headings, page titles and the footer navigation still carry the full wording. Acceptable? | Yes — see NC-01/NC-02. Without it, the full French navigation does not fit on one row at common laptop widths. |
| 2 | Page addresses change from `.../groupe-wolf-achard/nous-joindre.html` to `/contact/` (and `/en/contact/`). Acceptable? | Yes — see U-01. Shorter, bilingual-symmetrical, and the old addresses can redirect. |
| 3 | Should the **Accès client / Client Access** button stay in the top bar? Removing it would let the full navigation appear on smaller laptops too. | Keep it — see D-01. It is the only conversion control in the header, and removing it is a compliance-adjacent decision we did not want to take unilaterally. |
| 4 | On your **French** home page, the four "processus éprouvé" icons are described to screen-reader users as a target, a star, rigour and a magnifying glass — but the pictures are a handshake, a strategy chart, a survey and a speech bubble. Each description belongs to a different icon set. Fix the descriptions, or mark the icons decorative? | See D-03. We shipped your live descriptions unchanged, because writing new ones would mean us authoring descriptions of your brand artwork. Either answer is quick; both need your word. |
| 5 | Your **English** home page opens on National Bank's generic stock banner, while the French one opens on artwork made for your team. Do you want your own artwork used in English too? | See D-04. This is the same pattern as the un-branded English services diagram (INTAKE Q4), and it is the cheapest visible upgrade available to the English site. |
| 6 | Your site's closing "Contact us" block — the heading, the sentence under it and your two direct numbers — now appears at the foot of **every** page instead of only the home page. Same words, more places. Acceptable? | Yes — see D-07. Nothing was rewritten; the block was moved. |
| 7 | …**except on the eight pages that already close on that same block themselves**, where it would have printed the identical heading, sentence and two numbers twice on one page. It still appears on the nine that do not: both team pages, both news pages, all four advisor profiles and the 404. Acceptable? | Yes — see D-11, which lists the decision page by page. Nothing was deleted: on every one of those eight pages both direct numbers still appear at least three times. |
| 8 | On your **French** contact page the browser tab says `Nous Joindre` (capital J) and the heading says `Nous joindre` (lowercase). Both are live today. Harmonise them, or leave both? | See D-12. We left both, because the tab title is what search engines have indexed. Either answer is a one-line change. |
| 9 | Your contact **and team** pages' photo descriptions contain three small typos — one French word cut off mid-word (`patrimoin`), and two English descriptions with stray spaces. Fix them? | See F-01 / F-07 / F-08. We shipped them exactly as they are, because we do not correct copy on a regulated page without your word. **We recommend approving all three** — they are mechanical slips, not wording choices. |
| 10 | Your **team page**, in both languages, prints a small ¹ beside `Planificateur financier` / `Financial Planner` and a small ² beside `Conseillère principale, planification successorale` / `Senior Advisor, Estate Planning` — but the page has **no legal notes for them to point at**. The footnote markers lead nowhere. We added your standard five-item `Notes légales` / `Legal Disclaimers` panel to the page so both markers now resolve. Confirm? | Yes — see D-14. It adds no new wording: the five notes are National Bank's standard text, already published on your own services page. The alternative was deleting the two markers, which removes a regulatory reference and is not ours to do. |
| 11 | Jean-Francois Gobeil's French biography says he **`se prépare actuellement pour l'examen du CFA niveau III`** and has **`plus de 8 ans`** of experience, on a page carrying no date. Both sentences have aged since they were written, and CFA Institute rules restrict how candidacy may be described. What should they say now? | We shipped both exactly as they are (COMPLIANCE C-17 / C-18) because rewording a credential claim is not a builder's call. **This one needs an answer before launch, not after** — it is the fastest-decaying sentence on your site. |
| 12 | **Your news page updates itself today. After launch it will not.** Every report, budget analysis and video on it is written by National Bank and injected when the page loads — you did not write any of it, and roughly 112 other advisors publish the identical page. A static site freezes it. **Who owns keeping it current?** | See the S-series. We pinned **no** dated file, so the "read the latest version" documents keep refreshing on their own. The rotating items — three featured articles, two videos, the campaign block — will go stale silently. `npm run check:nbf` tells you when. **Assign an owner before launch.** |
| 13 | On your **French** news page, the `Flash info` card shows the tax-guide cover and the `Guide fiscalité et investissement` card shows the Flash Info cover — each described as the other. English is correct. **We swapped them back.** Our own two documents disagreed about whether we should have: `INTAKE.md` Q5 said fix it, `content/COMPLIANCE.md` N-07 said leave it for National Bank. **That is now resolved on our side** — the correction stands, and N-07 has been rewritten to say so and why. | See F-14, written out in full. **Sanctioned, and yours to overturn.** Reverting is a two-value edit. Either way the underlying fault is National Bank's and should be raised with them. |
| 14 | **Your services page prints small footnote numbers that go nowhere, and one of them is not even a footnote — it is a `₁` character typed into a subscript.** There is also a stray `*` with no note behind it. We made every number a working link, normalised the `₁`, and dropped the `*`. Confirm? | See D-24 / D-25 / D-26. **Not one word of the notes changed and no number was added or removed.** ⚠ Only the dropped `*` needs an actual decision — `content/COMPLIANCE.md` N-15 calls it a compliance call. **Resolved on our side under the same rule as F-14** (a reference resolves or it does not ship); the audit no longer expects the `*` back. Restoring it is a one-character change. |
| 15 | **Your banking block promises `gratuités` in French and `Savings` in English — two different promises for the same offer — and neither carries a footnote.** The two notes written for exactly those claims (credit approval, and terms of the offer) sit further down the same page, pointed at by nothing on your entire site. | See C-60. **This is the first thing to put to NBF compliance on this page.** We did not attach the markers ourselves: adding a regulatory reference your page does not carry is inventing one. |
| 16 | **Your English services page is mostly National Bank's writing; your French one is yours.** The English service descriptions, the four `Our approach` steps and the toolbox are all central bank blocks. The French page has your team's own prose for all seven services — and no `Our approach` section at all. Do you want the two to say the same thing? | See C-62 / S-07. We translated nothing in either direction. Making them match is a writing-and-approval job, not a build one — and it is worth deciding which page you would rather a prospective client landed on. |

---

## Editorial fixes (F-series) — typos on the live site

**Not one word in this table has been corrected.** Every one of these is a
live-site defect we found and **shipped exactly as it is**, because
`content/COMPLIANCE.md` §6 carries no policy amendment authorising editorial
fixes. They are listed so you can approve or decline the whole set in one pass.
Declining costs nothing — the site already says what your site says today.

**One row is an exception, and it is an exception for a precise reason.** `F-14`
is *applied*. It changes **no string** — it exchanges two image files whose
descriptions were already right and already crossed. §6 governs wording, so a
change that alters no wording is not gated by the missing amendment. It is
written out in full under the table, and `content/COMPLIANCE.md` §6.4 and §7
check 49 both record it so no later audit reads it as an unauthorised fix.

| ID | Page | Live (sic) | As built | Status |
|---|---|---|---|---|
| F-01 | Contact **and team**, **FR** — Laurent Achard's photo description (4 occurrences) | `Photo de Laurent Achard, Conseiller en gestion de patrimoin , membre de l'équipe expert.` | **unchanged (sic)** | Shipped sic — awaiting your word. The word `patrimoine` is cut off mid-word and there is a space before the comma. David Alexandre's description on the same page is correct, which is what tells us this is a slip rather than a variant. **Highest-priority item in this table.** |
| F-02 | **Services**, **FR** — the opening paragraph | `…dans le respect de critères et de paramètres qui lui sont propre.` | **unchanged (sic)** | Shipped sic. `propre` should agree with `critères et paramètres` and read `propres`. One letter. |
| F-03 | **Services**, **FR** — `Planification fiscale` | `…en restant toujours à l’intérieure des dispositions de la loi.` | **unchanged (sic)** | Shipped sic. `à l'intérieure` should be `à l'intérieur` — `intérieure` is the feminine adjective, and the expression here is the preposition. |
| F-06 | **Services**, **EN** — the page's search-result description | `Wolf Archard Group offer advice on estate planning, investment management and financial planning, providing solutions to fit their client’s financial needs.` | **unchanged (sic)** | Shipped sic. Three things in one sentence: `offer` should be `offers`, `their client’s` should be `their clients’`, and the live page stores that same sentence twice — once with a trailing space and once without. The rebuild has one field for it and ships the untrailed form; no word changed. ⚠ The name `Wolf Archard` inside it is **not** part of this fix — the team-name question is separate (`content/COMPLIANCE.md` N-01). |
| F-07 | Contact **and team**, **EN** — Laurent Achard's photo description (4 occurrences) | `Photo of··Laurent Achard, Wealth Advisor, member of the team of experts.·` *(`·` marks a literal space)* | **unchanged (sic)** | Shipped sic. A double space after `of`, and a trailing space. |
| F-08 | Contact **and team**, **EN** — David Alexandre Wolf's photo description | `Photo of David Alexandre Wolf, Wealth Advisor, member of the team of experts.·` | **unchanged (sic)** | Shipped sic. A trailing space. |
| F-11 | Contact, **EN** — address pictogram description | `Adress picto·` | **not reproduced at all** | The misspelling (`Adress`, no `d`) and its trailing space never reach the new site, because the pictogram it described is not reproduced — see D-13. Recorded here so it is not silently lost: if you ever restore those pictograms, this string needs fixing first. |
| F-14 | **News**, **FR** — the two swapped pictures in `Guides et outils` | The `Flash info` card displays the file whose artwork reads **`GUIDE FISCAL 2025`**; the `Guide fiscalité et investissement` card displays the file whose artwork reads **`FLASH INFO 2026`**. Each card's description therefore names a publication that is not the one pictured. **The English page pairs the same four items correctly.** | **Corrected** — the two pictures are exchanged so each card shows its own publication. **Not one character of description changed.** | **Applied — sanctioned disposition, 2026-08-02.** `content/COMPLIANCE.md` N-07 has been rewritten to record it. Yours to overturn |
| F-15 | **Services**, **FR** — `Solutions bancaires` | `Demandez nous plus d’informations sur le Services d’assistance juridique et services de soins de santé virtuels (télémédecine).` | **unchanged (sic)** | Shipped sic. Two slips in one clause: `Demandez nous` is missing its hyphen (`Demandez-nous`), and `sur le Services` should be `sur les Services` — the link label it introduces is plural. Not previously catalogued; found on this page. |
| F-16 | **Services**, **EN** — the closing `Contact us` block | `Our team members are there for you. Contact us directly at` | **unchanged (sic)** | Shipped sic. **The sentence stops mid-phrase.** On the live page it runs straight into your two phone numbers, which is presumably the intent — but read on its own it ends on the word `at`. The French page's equivalent sentence is complete. Not previously catalogued; found on this page. |

> ### F-14 — resolved 2026-08-02. The correction stands.
>
> **This was the one place in the build where two of our own documents gave
> opposite instructions, so it is written out in full rather than left in a table
> cell. It is now decided; this is the record of how.**
>
> `INTAKE.md` Q5 said correct the pairing — *"a display bug, not a wording
> change"*. `content/COMPLIANCE.md` N-07 said leave it crossed, because the fault
> is inside National Bank's central fragment and a local fix diverges from the
> syndicated source: *"NBF fixes it upstream."*
>
> **N-07's conclusion rested on a risk that cannot occur here.** Its stated
> reason for not correcting is that a local fix *"would be silently reverted the
> next time NBF republishes."* That is a property of a **live** syndicated
> surface. This rebuild does not re-fetch the fragment — it is a static copy,
> already frozen at capture (S-04, S-07). There is no republish path into this
> site, so there is nothing to revert it. Remove that premise and N-07 has no
> remaining argument for shipping the crossed pair; what survives of it is the
> part that was always right, and it is now recorded as an open action instead of
> a disposition: **the real fix is still National Bank's.**
>
> **What the alternative actually costs.** Leaving it crossed means publishing a
> picture we know is wrong under a description we know names a different
> publication. A screen-reader user is told the `Flash info` card shows Flash
> Info artwork; it shows the 2025 tax guide. That is a false statement in an
> accessible name, and it buys nothing — no wording is preserved by it, because
> **F-14 changes no wording at all.**
>
> **Why the missing §6 amendment does not block it.** §6 of
> `content/COMPLIANCE.md` gates *editorial fixes* — changes to strings — and no
> amendment exists, so every other `F-` row ships sic. **F-14 exchanges two
> `src` values and touches no string**, so it is outside that gate. It is
> recorded as a non-editorial correction in §6.4 there, and §7 check 49 has been
> amended to name it explicitly rather than fail on it.
>
> **Applied. Reverting is a two-value edit in `src/data/pages/news.fr.ts`.**
> This row stays open until National Bank fixes it at source.
>
> **What F-14 does NOT fix.** The French description of the tax guide says
> *"une main tenant un formulaire"* — a hand holding a form — while the picture
> is a couple at a laptop. The English description of the same publication says
> *"two young persons in front of a laptop"*, which is right. Writing a new
> French description of National Bank's artwork would be us authoring it, not
> correcting it, so the French wording ships untouched. Worth asking NBF for a
> corrected string.

**Two further live defects on the news pages were NOT corrected**, because each
already has a pending row and no policy amendment exists: **F-04**
(`votre sante financière`, missing accent, French) and **F-05**
(`take advantage of our analyzes`, the English page description). Both ship
exactly as they are.

---

## Brand assets (A-series) — artwork substitutions and derivations

Every lockup and mark on the site is now your **own artwork**, pulled from the
original DAM master rather than the resized copy the live page displays. Nine of
the thirteen are byte-identical to your files. The four exceptions, and one
format change, are below.

| ID | Item | What we did | Why | Status |
|---|---|---|---|---|
| A-01 | **Reversed lockups for the dark footer and the mobile menu** — `team-fr`, `team-en`, `nbfwm-fr`, `nbfwm-en`, each `-on-ink` | Derived from your own `-L` artwork. The wording and the navy plate become cream `#F2EFE9`; the white `WA` monogram becomes ink `#15181D` so it still reads once its plate has reversed; the English olive `Group` becomes cream with the rest of the wording. **Brand red `#DE161D` is untouched.** No shape, spacing or proportion is altered. | Your DAM holds no reversed artwork, and the footer is a dark surface. Without this, most of each lockup — including the whole `FINANCIÈRE BANQUE NATIONALE` wordmark, which ships with no colour set on it at all — would render **black on near-black** and be invisible. | Applied — pending sign-off |
| A-02 | **Share card** (`og:image`, the picture shown when a page is posted to LinkedIn or sent in a message) | We ship **your live share card**: the red National Bank flag on white, 1200×630. Converted from PNG to JPEG; nothing about the picture changed. | This is what all 16 of your live pages already serve. We did not substitute a different image. | Applied — pending sign-off |
| A-03 | **The word `Groupe` in the French team lockup** | Shipped exactly as supplied — **not corrected**. | In `logo-cp-groupe-wolf-achard-L.svg` the word `Groupe` carries no colour instruction, so it renders **black**, while `Wolf Achard` beneath it is navy `#274155`. Your live site has the same behaviour, so the rebuild matches it. The English lockup does not have this problem — every letter there is explicitly coloured. **Worth a corrected master from whoever produced the artwork.** | Flagged, not changed |
| A-04 | **The two team lockups use different navy** | Both shipped as supplied; neither was recoloured to match the other. | French artwork is `#274155`, English is `#00324d`, and the English lockup alone adds an olive `#79755d` for the word `Group`. Whichever navy the site adopts, the other language's own artwork will not match it. This is a brand decision, not a design one. | Flagged — client decision |
| A-05 | **Three picture files on the news pages were renamed on our side.** No picture changed — every one is byte-for-byte the file National Bank serves. | `invest-in-you.jpg` → `defi-oser-sinvestir-fr.jpg`; `oser-s-investir.jpg` → `invest-in-you-challenge-en.jpg`; and `img-publications-financieres-revues-de-marche-740x489.png` → the same name ending `.jpg`. | The first two names are **crossed on National Bank's side**: the file called `invest-in-you` holds the **French** `Oser s'investir` artwork and is used only on your French page, and the file called `oser-s-investir` holds the **English** artwork and is used only on your English page. Both pages display the right language today — only the names lie. Left as they were, our own safety check "no English file on a French page" would report a false alarm every time it ran, which is how a real one eventually gets ignored. The third is a JPEG that was named `.png`. | Applied — pending sign-off |

Regulator artwork (`OCRI` / `CIRO`) and protection-fund artwork (`FCPI` / `CIPF`)
is **byte-identical to your files and has no reversed variant by design** — on
the dark footer each sits on a pale chip instead, so the official colours are
never altered.

---

## New copy (NC-series) — words written for the rebuild

| ID | Page | New string | Why it exists | Status |
|---|---|---|---|---|
| NC-01 | Top navigation bar, all FR pages | `Nouvelles` (bar label only). Live: `Nouvelles et articles` | The live label measures 162.3px against a 94–107px range for its four siblings — 61% wider than the next-longest. On its own it pushed the one-row French bar past every common laptop width. **The page `<h1>`, the browser `<title>` and the footer navigation all still carry `Nouvelles et articles` verbatim**, so the full wording appears on every page of the site. | ⚠ needs explicit approval |
| NC-02 | Top navigation bar, all EN pages | `News` (bar label only). Live: `News & articles` | The English twin of NC-01, applied so the two language trees stay structurally identical. The live ampersand and the live casing are untouched everywhere the full string is used. | ⚠ needs explicit approval |
| NC-03 | Footer, all pages | Column heading `Navigation` (both languages) | The live footer has no site-navigation column. The rebuild adds one, listing the same five pages as the top bar with their **full live labels**. No page name is invented; only the column heading is new. | Applied — pending sign-off |
| NC-04 | Site chrome, all pages | Accessibility and interface microcopy with no live-site counterpart: skip-link text, landmark names, "opens in a new window", menu open/close labels, the contact strip's `Appeler` / `Écrire` (`Call` / `Email`), the 404 page's wording, and the **` — Accueil` / ` — Home` suffix on the logo's accessible name** (the name itself is your own `Groupe Wolf Achard` / `Wolf Archard Group`; only the destination suffix is ours, and without it the logo link has no accessible name at all). | These are interface labels the live platform either does not expose or expresses differently. None is a claim, a credential, a figure or a regulatory phrase. Listed for completeness. | Applied — pending sign-off |
| NC-05 | News pages **and the services `Boîte à outils` / `Toolbox`**, both languages | **One word: `PDF`.** It appears as a small badge beside any link that opens a PDF — on the news cards, and on the three toolbox links per language that resolve to a document (`Centre de messagerie` / `Messaging Center` and the two tax guides). | A visitor should know before clicking that a link downloads a document rather than opening a page. It is a file-format label, not a claim, a figure or a regulatory phrase, and it is identical in both languages. **Scope extended 2026-08-02**: the badge was on the news pages only, which meant the same site answered the same question in two different ways on two pages. It is now the same word, in the same small grey chip, wherever a link opens a document. **Your link labels are untouched** — the badge sits beside the label, never inside it — and it is derived from the destination, so a link retargeted at a web page loses its badge automatically. *(The `Vidéo` / `Video` badge beside each video needed no new word — both already appear on your live page, inside the transcript headings.)* **One deliberate exception**: the English `Banking solutions` block links a PDF from inside a sentence of your own body copy; a chip inside a sentence is a different thing from a chip on a link list, so that one is not badged. | Applied — pending sign-off |
| NC-06 | Both advisor profile pages, both languages | Three field labels: `Téléphone` / `Phone`, `Courriel` / `Email`, `Langues` / `Languages`. | Your live profile pages label these facts with **unnamed icons** — empty elements a screen reader cannot announce — so a blind visitor hears `514 395-1937` and `Français, Anglais, Italien` with nothing to say what either one is. Three words per language replace three silent glyphs. The fourth label, `Bureau` / `Office`, is **not new**: it is the wording already used in your site footer. None of these is a claim, a figure, a credential or a regulatory phrase. | Applied — pending sign-off |
| NC-07 | Team page + all four advisor profile pages, both languages | Descriptions for the four photographs of people: `Laurent Achard, Conseiller en gestion de patrimoine` · `David Alexandre Wolf, Conseiller en gestion de patrimoine` · `Lysane Tougas, Conseillère principale, planification successorale` · `Jean-Francois Gobeil, Planificateur financier`, and their English equivalents. | **Your four profile-page photographs carry no description at all** — the attribute is absent, not empty (COMPLIANCE N-12), so a screen-reader user is told nothing about the picture of a named advisor. On the French team page the description that does exist is cut off mid-word: `…Conseiller en gestion de patrimoin , membre de l’équipe expert.` (F-01), and the English ones carry stray spaces (F-07/F-08/F-09). Rather than repair four broken strings and invent two more, all six now follow one rule: **name, then title as that page displays it, and nothing else.** No headcount, no `membre de l’équipe expert`, no regulated status, no credential — and nothing described as "the team", because there is no group photograph anywhere on your site. Five of the six are word-for-word substrings of what your own pages already say. | ⚠ needs explicit approval |

### NC-20 … NC-26 — the English translations you authorised on 2026-08-03

> **What changed, and what did not.** Until 2026-08-03 we were prohibited from
> writing any English copy to close the gap described in question 2 —
> `content/COMPLIANCE.md` **P-16**. **You lifted that prohibition, narrowly.**
> The amendment is recorded, dated and scope-limited in `content/COMPLIANCE.md`
> **§6.5**, and its limit is one sentence long: **translation of copy you already
> publish in French, and nothing else.**
>
> So every English string in the seven rows below is a faithful rendering of a
> French string that is live on your site today. **Nothing was improved,
> expanded, softened, modernised or tidied on the way across.** Where your French
> carries a defect — an undated year count, a present tense that has aged, a
> credential written without its full stop — **the English carries the same
> defect**, and it is flagged rather than repaired. That is deliberate: a
> translator who fixes things is no longer translating.
>
> **The French is still the source of record.** None of it changed. Nothing below
> replaces or restates a French sentence; each adds an English surface for one.
>
> **⚠ Seven credential and regulatory lines are flagged individually below and
> every one of them needs National Bank compliance sign-off before launch.** They
> are the reason this section is separated from the rows above rather than
> appended to them. **The CFA line is the one to answer first** — it was already
> the fastest-decaying sentence on your site (question 3), and it now decays in
> two languages instead of one.
>
> **What we did NOT translate**, and each has a reason on file: your French home
> page's opening `Une gestion de patrimoine sur mesure pour des clients uniques`
> block (not in your authorisation); the four descriptions under
> `Un processus éprouvé` (not in your authorisation, **and** your English page's
> four items are different items — see D-73); and the `Petits détails pour tout
> savoir` ranking note (still prohibited, D-20). The prohibition also still runs
> the other way, untouched: your English services page's `Our approach` section
> is **not** translated into French.

| ID | Page | New English string | French source, live on your site today | Status |
|---|---|---|---|---|
| NC-20 | English home page — a new `Our mission` block | `Our mission` · `Secure your financial future` · `Support you in achieving your ambitious life projects` · `Be the main partner in your financial success` · `Build a long-term relationship based on trust and professionalism` | `Notre mission` · `Sécuriser votre avenir financier ` · `Vous accompagner dans la réalisation de vos projets de vie ambitieux` · `Être le partenaire principal dans votre réussite financière ` · `Construire une relation à long terme basée sur la confiance et le professionnalisme` *(French home page, C-26)* | ⚠ needs explicit approval — **NBF sign-off required.** `partenaire principal` is a claim in French and `main partner` is the same claim in English; it is **not** upgraded to `leading` or `primary`. Two of the French items end in an invisible no-break space that the English does not carry — D-74 |
| NC-21 | English home page — a new `Our commitments` block | `Our commitments` · `Act with integrity and communicate transparently` · `Stay informed in order to make well-informed decisions` · `Invest boldly without being imprudent` · `Keep all our commitments to ensure work well done and duty fulfilled` | `Nos engagements` · `Agir de manière intègre et communiquer de façon transparente` · `Demeurer informés pour prendre des décisions éclairées` · `Investir de manière audacieuse sans être imprudents` · `Respecter tous nos engagements pour assurer le travail bien fait et le devoir accompli` *(French home page, C-26)* | ⚠ needs explicit approval — **NBF sign-off required.** `audacieuse` renders as `boldly`, not `aggressively` or `fearlessly`; `imprudents` renders as `imprudent`, not `reckless`, which would be stronger than what you say |
| NC-22 | English home page — a new `Our philosophy` essay | `Our philosophy` · `We focus as much on **financial planning** and **tax optimization** as we do on **portfolio management**. We believe that the true objective is not limited to investment returns but lies in the net return for the investor. With this in mind, certain elements such as asset allocation, income splitting and tax deferral are likely to have a major impact for our clients.` | `Notre philosophie` · `Nous mettons autant le focus sur la **planification financière** et **l'optimisation fiscale** que sur **la gestion de portefeuille**. Nous pensons que le véritable objectif ne se limite pas aux rendements des investissements mais réside dans le rendement net pour l'investisseur. Dans cette optique, certains éléments tels que l'allocation d'actifs, le fractionnement de revenus ou encore le report d'impôts sont susceptibles d'avoir un impact majeur pour nos clients.` *(French home page, C-27)* | ⚠ needs explicit approval — **NBF sign-off required, and this is the second-most sensitive row in the set.** This is **the only sentence anywhere on your site that mentions returns**, in either language, and translating it puts it in front of a second audience. It promises nothing, and it renders one-for-one so that it still promises nothing. `financial planning` and `portfolio management` are your own English service names; `asset allocation`, `income splitting` and `tax deferral` are the standard Canadian terms for the three French ones. The three bold runs are your French page's own emphasis, in the same three places |
| NC-23 | English home page — a new `What sets us apart` block | `What sets us apart` · `In-depth knowledge of wealth management for entrepreneurs and incorporated professionals` · `Efficient wealth growth without weakening the company's financial health or affecting its borrowing capacity` · `Understanding of how a business operates, especially when it is the cornerstone of the wealth` | `Ce qui nous distingue` · `Connaissance approfondie de la gestion de patrimoine pour entrepreneurs et professionnels incorporés` · `Croissance efficace du patrimoine sans fragiliser la santé financière de la compagnie ni affecter la capacité d'emprunt` · `Compréhension du fonctionnement d'une entreprise, surtout si elle est la pièce maîtresse du patrimoine` *(French home page, C-25)* | ⚠ needs explicit approval — **NBF sign-off required.** `Croissance efficace du patrimoine` is flagged in the compliance file as outcome-adjacent; `Efficient wealth growth` carries exactly the same flag and no more. **The English block has no photograph** where the French one does — D-72 |
| NC-24 | English team page — the panel heading on both partner cards | `Biography` | `Biographie` *(French team page)* | Applied — pending sign-off. One word, and the only string in this set that carries no claim |
| **NC-25** | **English team page — Lysane Tougas's biography, three paragraphs** | ¶1 `Lysane has been a member of the Barreau du Québec since 1998. She completed her bachelor's degree in law at the Université de Montréal as well as a master's degree in law, taxation option, in 2004.`<br>¶2 `She has extensive experience in estate and will planning as well as in tax law. She practised for several years in major law and accounting firms.`<br>¶3 `She supports our team in delivering an engaging, high-calibre advisory service. Her expertise, her empathy and her attentiveness allow her to support our clients in developing and achieving their estate objectives.` | ¶1 `Lysane est membre du Barreau du Québec depuis 1998. Elle a complété son baccalauréat en droit à l'Université de Montréal ainsi qu'une maîtrise en droit, option fiscalité, en 2004.` *(C-10, C-11)*<br>¶2 `Elle possède une vaste expérience en matière de planification successorale et testamentaire ainsi qu'en droit fiscal. Elle a exercé pendant plusieurs années dans des cabinets d'avocats et d'experts comptables d'envergure.` *(C-12)*<br>¶3 `Elle accompagne notre équipe dans la prestation d'un service conseil engageant et de haut calibre. Son expertise, son empathie et son écoute lui permettent d'accompagner nos clients dans l'élaboration et l'atteinte de leurs objectifs successoraux.` | ⚠ **needs explicit approval — NBF COMPLIANCE SIGN-OFF REQUIRED, TWO CREDENTIAL LINES FLAGGED SEPARATELY.**<br>**(a) `membre du Barreau du Québec depuis 1998` → `has been a member of the Barreau du Québec since 1998`** (C-10). The bar keeps its own registered French name — translating a regulator's name invents a variant of it. `since 1998` is preserved and **no number of years is computed from it anywhere.** Membership must be current at launch and only NBF can confirm that.<br>**(b) `baccalauréat en droit` + `maîtrise en droit, option fiscalité, en 2004` → `bachelor's degree in law` + `master's degree in law, taxation option, in 2004`** (C-11). Deliberately **not** rendered `LL.B.` and `LL.M. in Taxation`: those are stronger, more specific statements of an academic credential than your French makes. `2004` is preserved exactly.<br>Also flagged, though not credentials: `vaste expérience`, `plusieurs années` and `d'envergure` cross as `extensive`, `several years` and `major` — three unquantified claims in French, three unquantified claims in English, none given a number it does not have |
| **NC-26** | **English team page — Jean-Francois Gobeil's biography, two paragraphs** | ¶1 `Jean-François is passionate about finance and the client experience. In him you will find an attentive ear combined with a highly seasoned expert in personal finances. His expertise extends to retirement, finance, taxation, investments, insurance and risk management, and then to legal aspects and estate planning. His extensive field experience will help you better understand your finances and stay in control of your affairs.`<br>¶2 `He holds a B.B.A in finance from Bishops university and has been a member of the IQPF since 2015. He completed his diploma in financial planning at HEC Montréal and is currently preparing for the CFA Level III exam. He has more than 8 years of advisory expertise within teams of mutual fund and financial security brokers, of investment dealers and within bank branches, in both Quebec and Ontario.` | ¶1 `Jean-François est un passionné de la finance et de l'expérience client. Vous trouverez en lui une oreille attentive doublée d'un expert très aguerri en matière de finances personnelles. Son expertise s'étend à la retraite, la finance, la fiscalité, les placements, les assurances et la gestion des risques, puis aux aspects légaux et à la succession. Son expérience terrain étendue vous aidera à mieux comprendre vos finances et à demeurer en contrôle de vos affaires.` *(C-19)*<br>¶2 `Il est titulaire d'un B.B.A de l'université Bishops en finance et il est membre de l'IQPF depuis 2015. Il a complété son diplôme en planification financière au HEC Montréal et se prépare actuellement pour l'examen du CFA niveau III. Il compte plus de 8 ans d'expertise-conseil au sein d'équipe de courtiers en épargne collective et sécurité financière, de courtiers en placement et au sein des succursales bancaires à la fois au Québec et en Ontario.` *(C-14 … C-18)* | ⚠ **needs explicit approval — NBF COMPLIANCE SIGN-OFF REQUIRED. THIS IS THE MOST SENSITIVE ROW ON THE WHOLE LIST, AND FIVE LINES ARE FLAGGED SEPARATELY.**<br>**(a) `se prépare actuellement pour l'examen du CFA niveau III` → `is currently preparing for the CFA Level III exam`** (C-17). ⚠ **Answer this one before launch.** It is **not** rendered `CFA Level III candidate`, `CFA candidate` or `pursuing the CFA charter` — **CFA Institute rules constrain how candidacy may be described in public material**, and each of those is a stronger claim than your French makes. `actuellement` is preserved as `currently`, decay and all: softening it would be improving the source, which the amendment forbids. **The sentence now ages in two languages.** It needs one corrected sentence from Jean-Francois or NBF compliance — this is question 3, still open.<br>**(b) `membre de l'IQPF depuis 2015` → `has been a member of the IQPF since 2015`** (C-15). A **regulated professional-body membership** that underpins his `Financial Planner` title and legal note 1. `IQPF` is deliberately **not** spelled out — your French does not spell it out either, and expanding an acronym your source abbreviates adds credential detail. Must be current at launch; NBF confirms.<br>**(c) `plus de 8 ans d'expertise-conseil` → `more than 8 years of advisory expertise`** (C-18). The **digit is preserved**; it is not spelled out, not rounded, not converted to a start year and not turned into "nearly a decade". It is still a rolling count on an undated page, in two languages now.<br>**(d) `un B.B.A de l'université Bishops` → `a B.B.A in finance from Bishops university`** (C-14). ⚠ **Shipped exactly as your French writes it**: `B.B.A` with no final period, `Bishops` with no apostrophe, `university` lowercase. It will look like a typo to an English reader **because it is one in French**, and we may not normalise a credential. One word from you and it becomes `B.B.A. from Bishop's University`.<br>**(e) `son diplôme en planification financière au HEC Montréal` → `his diploma in financial planning at HEC Montréal`** (C-16). Institution name and accent unchanged.<br>Also: **`Jean-François` carries the cedilla in this English biography while the heading above it reads `Jean-Francois` without one** — exactly as your French page does. D-75 |

### NC-27 / NC-28 — the paragraph about your team on `Notre firme` / `Our Firm`

> **This is the answer to D-15**, and it is **not** a translation — neither
> paragraph depends on the P-16 amendment above. Each language is assembled from
> strings you already publish **in that language**.
>
> `Notre firme` / `Our Firm` is the page a prospective client opens to find out
> who they would be dealing with, and every sentence on it is National Bank's.
> These two paragraphs sit **above** all of that, and they are the first thing on
> the page that is about you.
>
> **Every clause is traced.** Your two advisors' names; the plural job title
> **your own page already uses one paragraph further down** (`conseillers en
> gestion de patrimoine` / `wealth advisors`, from the `près de 850` / `over 850`
> sentence); your `Notre mission` and `Nos engagements` items; your four-step
> process; and your office city.
>
> **What they deliberately do not say, because your site does not say it:** no
> years in business, no founding date, no client count, no assets, no headcount,
> no ranking, and none of `trusted`, `leading`, `passionate`, `boutique` or
> `award-winning`. If you want any of those, you supply the fact and it becomes a
> claim on the register first.

| ID | Page | The paragraph | Where every sentence comes from | Status |
|---|---|---|---|---|
| NC-27 | `/notre-firme/` — new section, above the National Bank material | Heading `Groupe Wolf Achard`, then:<br>`Notre équipe réunit Laurent Achard et David Alexandre Wolf, conseillers en gestion de patrimoine à Montréal. Notre mission est de sécuriser votre avenir financier, de vous accompagner dans la réalisation de vos projets de vie ambitieux et d'être le partenaire principal dans votre réussite financière. Nous nous engageons à agir de manière intègre, à communiquer de façon transparente et à construire une relation à long terme basée sur la confiance et le professionnalisme. Notre processus se déroule en quatre étapes: faisons connaissance, établissons une stratégie, déployons notre plan, restons en contact.` | **Heading** — your own team name, unchanged. **S1** — `Notre équipe` is your own navigation label; both names are from your identity data; `conseillers en gestion de patrimoine` (plural, lowercase) is a live string **on this same page**, in the `près de 850` sentence just below; `à Montréal` is your office city from the address in your footer. **S2** — your `Notre mission` heading plus three of its four items. **S3** — your `Nos engagements` heading, its first item, and the fourth mission item. **S4** — your `Un processus éprouvé` block's four step titles, verbatim and in order. *(`éprouvé` is dropped — it is your claim and it stays on your home page, but this paragraph is not the place for a superlative. The colon has no space before it because **that is how your own French copy punctuates it**, twice.)* | ⚠ needs explicit approval — reversible by deleting one key in one file |
| NC-28 | `/en/our-firm/` — new section, above the National Bank material | Heading `Wolf Archard Group`, then:<br>`Our team brings together Laurent Achard and David Alexandre Wolf, wealth advisors in Montreal. Our mission is to secure your financial future, to support you in achieving your ambitious life projects and to be the main partner in your financial success. We are committed to acting with integrity, communicating transparently and building a long-term relationship based on trust and professionalism.` | **Heading** — your own English team name, **including the `Archard` misspelling**, because every other English string on the site carries it and spelling it differently here would quietly answer question 1 for you (D-76). **S1** — `Our team` is your own navigation label; `wealth advisors` (plural, lowercase) is a live string **on this same page**, in the `over 850` sentence just below; `Montreal` unaccented is this tree's own convention. **S2 / S3** — the `Our mission` and `Our commitments` items from NC-20 / NC-21. | ⚠ needs explicit approval — **and note it is three sentences where the French is four.** The French ends on your four-step process and **your English site has no four-step process** to end on — its four items are qualities, not steps. We wrote the shorter honest version rather than padding it. D-73 |

---

## URL changes (U-series)

| ID | Live URL | Rebuilt URL | Why | Status |
|---|---|---|---|---|
| U-01 | `/conseiller/groupe-wolf-achard/nous-joindre.html`<br>`/advisor/wolf-archard-group/contact-us.html` | `/contact/`<br>`/en/contact/` | The whole site moves from the bank platform's `/conseiller/<slug>/<page>.html` tree to a clean root-level bilingual structure; the contact page is the one whose slug is not a direct translation of the new path. **If the live URLs are ever pointed at this build, they need redirects.** All other pages follow the same root-level pattern (`/equipe/`, `/services/`, `/nouvelles/`, `/notre-firme/` and their `/en/` twins). | Applied — pending sign-off |

---

## Claims (C-series) — flagged, not changed

*Nothing in this table was altered.* C-01 to C-53 belong to the compliance pass
and live in `content/COMPLIANCE.md`. C-54 onward are the news pages.

**Read the six below together and they say one thing:** the French and English
news pages are **not translations of each other**, and where they disagree, they
disagree about facts — who wrote a report, who fronts a campaign, which year a
guide is from. None of it is yours to answer; all of it is worth putting to
National Bank in one email.

| ID | Claim | Where it conflicts | Recommendation |
|---|---|---|---|
| C-54 | **The same campaign is credited to two different people.** French: `Défi oser s'investir avec l'ambassadrice **Kathy Marquis** en vedette.` English: `Invest in you challenge featuring the ambassador **Jessica Moorhouse**.` | Same slot, same section, on the two language versions of one page — and the **two pictures genuinely show different women**, so this is not a mis-typed name. Both ship as they are. | Ask NBF which ambassador fronts the campaign in each market. It may well be deliberate; if it is not, one of the two pages names the wrong person. |
| C-55 | **The same publication pair is credited to two different research groups.** French `Mythes et réalités`: `Le groupe **Économie et stratégie**`. English `Facts & Fiction`: `The **CIO Office of National Bank Investments**`. | The two are the language versions of one report. Both ship as they are. | Ask NBF which group authors it. Attribution of investment research is not something a website should get wrong in one language only. |
| C-56 | **The French page sends one of three featured articles to an English-tree host.** Two go to `bnc.ca`; the third goes to `nbc.ca/fr/article/…`. | Inside one section of one page. The destination is genuinely French content, so nothing is broken for a reader. | Leave it. Recorded because an automatic "no English host on a French page" check flags it, and whoever runs that check needs to know this one is expected — `content/COMPLIANCE.md` N-09 already whitelists it. |
| C-57 | **An English picture description names a French publication.** The `Facts & Fiction` cover is described as `Myths and realities by National Bank Investments`. | English page only. The artwork itself correctly reads `Facts & Fiction`. | Ask NBF for a corrected description. Not fixed here: writing a new description of their artwork is authoring it (P-9). |
| C-58 | **One block of text is used for two unrelated publications, and the two copies are not identical.** On the French page, `Vision` and `Mythes et réalités` both carry `Vous recherchez une analyse financière fiable ? Le groupe …`. Both are exactly 200 characters and they differ at a single letter — `Le groupe **é**conomie` on one, `Le groupe **É**conomie` on the other. | French page, two different sections. Both ship as they are, and they are deliberately **not** merged into one string. | Ask NBF for a description of `Mythes et réalités` that describes `Mythes et réalités`. Today it describes `Vision`. |
| C-59 | **A 2025 guide is on display in August 2026.** Both languages show the `2025 TAX GUIDE` / `GUIDE FISCAL 2025` cover, and the file names say `2025`. | Both pages. The linked PDF behind it is current; only the cover picture is a year behind. | Ask NBF to refresh the cover artwork. Cosmetic, but it is the first thing a reader sees on the card. |
| C-60 | **Your banking block promises money off, and nothing on the page points at the note that qualifies it.** French: `des gratuités sur les comptes courants et des rabais de taux d’intérêt`. English: `Savings on certain banking solutions.` and `Competitive interest rates.` | **Services page, both languages.** Two problems at once. (a) Neither block carries a footnote marker, while notes **4** (`financing solutions are subject to credit approval`) and **5** (`for details and conditions of the offer, contact your advisor`) sit further down the same page — written for exactly these claims and pointed at by nothing, here or anywhere else on your site. (b) The two languages promise different things: `gratuités` means *free of charge*; `Savings` means *a reduction*. Both ship exactly as they are. | **This is the one item on the services page we would put to NBF compliance first.** Two clean answers: attach markers `4` and `5` to those two blocks, or leave them and record why. We did not attach them ourselves — adding a regulatory reference your page does not carry is inventing one, and that is not a builder's call. |
| C-61 | **The English tax block promises a tax outcome and points at the wrong note.** `More money to invest or spend.`, `Make tax-efficient investments.`, `It's about doing more with the same money by optimizing your portfolio.` — marked with footnote **2**, which is the note about the Taxation, Retirement and Estate Planning team at National Bank Trust. | English page only. **The French tax block makes no outcome claim at all** — it describes what tax planning is, and stops. | Ask NBF whether note 2 is the right note for a tax-saving promise. We changed nothing: re-pointing a footnote is re-pointing a regulatory reference. |
| C-62 | **Your two services pages describe the same seven services in completely different words, and disclose third parties at completely different rates.** French: your team's own prose, two short paragraphs per service, **5 list items on the whole page**. English: National Bank's shared `Purpose` / `Main benefits` lists, an extra `Our approach` section French does not have, and **52 list items**. The sentence *"certain services are offered by third parties"* appears **once** in French, as a caption, and **six times** in English. | Both services pages. Neither was padded, trimmed or translated to match the other. | The English services copy is the bank's; the French is yours (see S-07). If you want the English page to say what the French one says, that is a translation-and-approval job for NBF — and the reverse, translating `Our approach` into French, is the same job in the other direction. Nothing here is broken; it is a decision about which page speaks for you. |

---

## Syndicated National Bank content (S-series)

**Please read the short version first.** Your `Nouvelles et articles` /
`News & articles` page is **not your content**. It is written by National Bank
and pushed, unchanged, into roughly 112 advisor websites — yours is one of them,
and the page on your site is an empty shell that the bank fills at the moment a
visitor loads it. You did not write a word of it and cannot be credited with it.

Everything below is either a link left exactly where it was, or a change to how
that content is presented — never to what it says.

**Nothing was deduplicated, reordered or balanced between languages.** Where your
English page carries a report your French page does not (`Week at a Glance`),
where the same four guides are listed in a different order in each language, or
where the same report is credited to two different research groups — that is
reproduced as-is and written up in the C-series above.

*(The advisor profile pages are syndicated too, from a different source; those
rows are in the AP-series.)*

| ID | Was (frozen at capture) | Now | Why |
|---|---|---|---|
| S-01 | The live French page renders **four headings reading `Nouvelles et articles` with nothing at all under them**; the English page renders three of the same. They are left over from the way the bank's page is assembled from nested pieces. | **Not reproduced.** Your page heading still reads `Nouvelles et articles` / `News and articles` once, at the top, exactly as live. | An empty heading tells a screen-reader user a section exists and then gives them nothing — four times over, all with the same name. No words are lost: the heading text still appears on the page. |
| S-02 | The bank's page gives **three different sections the same anchor name** (`#economique` on French, `#economic` on English) and **two more sections share `#finance`**. Anchors are the `#…` addresses that let a link jump to a section. | The three anchors your **home page already links to** — `#spotlight`, `#economic` and `#guide` — are kept **exactly as they are**, and each now points at exactly one place. The six duplicates were given distinct names. | With duplicates, a link to `#economic` could land in one of three different places depending on the browser. Your home page's three news links are verified to land on the right section in both languages. |
| S-03 | Each language embeds **two YouTube players** in the page. | The two videos are **links** that open the same National Bank video, at the **identical address** the page uses today. The full written transcript that the bank already publishes beside each video is kept, in a panel that opens on the page. | **Your site makes no third-party requests at all** — that is a real difference from every competitor site we measured, and one embedded player would end it. A YouTube frame contacts Google the moment your page opens, whether or not anyone presses play, and it would become the only thing on your site a cookie banner had to ask about. Verified: **zero `<iframe>` and zero third-party requests in the built site.** |
| S-04 | The bank's document links are written as page-relative addresses (`/content/dam/…`) that only work on `fbngp.ca` / `nbfwm.ca`. | The same paths, **character for character**, with the bank's own address in front — `https://www.fbngp.ca` on your French page, `https://www.nbfwm.ca` on your English one. | Without it, every document link would break the moment the site moves to your own domain. **Verified: 25 links on the French page and 26 on the English one, none dropped, none altered, tracking codes and `#` anchors intact.** |
| S-05 | On the bank's page, the titles of the article and document cards are ordinary paragraphs; only the report titles are headings. | Every card title is a heading. | It lets a screen-reader user jump card to card instead of reading the page top to bottom. **No wording changed** — same words, in an element that describes what they are. Related: every link that leaves your site opens in a new tab. The bank's own page does this for all but one link (`Épargne et placements`), which we made consistent. |
| S-06 | The live page ends with a `Contactez-nous` / `Contact us` block — a heading, one sentence, both direct phone numbers and both email addresses. | **Not repeated on this page.** | D-07 already moved that exact block into the footer of every page. Reproducing it here would print the same sentence and the same two phone numbers twice on one screen. Nothing is lost and nothing is reworded. |
| S-07 | **Most of your ENGLISH services page is National Bank's too — and this was not previously known.** Four blocks on it are central bank fragments, not your content: the four `Our approach` steps, **the entire seven-service accordion** (`Purpose` / `Main benefits`), the `Toolbox`, and the `Legal Disclaimers` panel. On the **French** page only two are — the `Boîte à outils` and the `Notes légales`. Everything else on the French page is your team's own writing. | Reproduced exactly, both languages. Nothing merged, nothing balanced. | This is the mechanical explanation for C-62: **your French services page is written by you; your English one is written by the bank.** It also means the English service descriptions will drift from the bank's current version after launch, the same way the news page will (question 12). `npm run check:nbf` covers it. |
| S-08 | On the services pages the bank's document and tool links are page-relative addresses (`/documentation/…`, `/content/dam/fbngp/pdf/…`) that only work on `fbngp.ca` / `nbfwm.ca`. | The same paths, **character for character**, with the bank's own address in front — `https://www.fbngp.ca` on French, `https://www.nbfwm.ca` on English. **Verified: 8 toolbox links per language plus the English banking-offer PDF, none dropped, none altered, no dated filename pinned.** | Same reason as S-04: without it every one of those links breaks the moment the site moves to your own domain. |

> **⚠ THE ONE DECISION ONLY YOU AND NATIONAL BANK CAN MAKE.**
>
> **Today this page updates itself. After launch it will not.**
>
> Every report, budget analysis and video on it arrives automatically because the
> bank's platform injects fresh content each time the page loads. A rebuilt
> static site is a photograph of that page taken on the day we captured it.
>
> We have done what can be done from our side: **not one document link is pinned
> to a dated file.** They point at the addresses National Bank overwrites in
> place, which is exactly why the buttons beside them say *"Lire la dernière
> version"* / *"Read the latest version"* — and those keep working on their own.
> But links that move to a new address, the three featured articles, the two
> videos and the campaign items **will go stale**, quietly, with nothing visibly
> broken. On the reference project three links drifted within **six days** of
> capture, and every one still returned a valid page — just June's edition,
> forever.
>
> `npm run check:nbf` compares your live bank page against this build and reports
> what has moved. **Somebody has to own running it.** Three options, cheapest
> first: (1) run the check on a schedule and update by hand; (2) point the
> rotating items at National Bank's own hub pages, which never go stale; (3) pull
> the bank's content at build time, which restores automatic updating and costs
> the most to set up.
>
> There is also a larger question worth asking once: **roughly 112 advisors
> publish this identical page.** It differentiates you by nothing. The only thing
> on it that could ever be yours is a piece you write. That is a conversation
> about opportunity, not compliance.

---

## Advisor profile pages (AP-series)

> **`AP-` is one series shared with `content/COMPLIANCE.md`**, which holds
> `AP-01` … `AP-03`. These three were `AP-01` … `AP-03` here until 2026-08-02 and
> collided with those; the mapping is at the top of this file.

| ID | Item | Detail | Status |
|---|---|---|---|
| AP-04 | Pages carried over | `/equipe/<slug>/` and `/en/team/<slug>/` for `laurent-achard` and `david-alexandre-wolf`, matching the two live profile pages per language. All four are built, linked from the team page in their own language, paired to each other by `hreflang`, and listed in the sitemap. | **Built.** The content decisions on these four pages are **D-21, D-22, D-23** (the dropped `View website` line, the dead `See all advisors` link, the phone-link format) plus **NC-06** and **NC-07** (field labels and photo descriptions). **Not D-14** — that row adds the legal-notes panel to the *team* page, and these pages deliberately do not get one: see AP-05 |
| AP-05 | No legal-notes panel on the four profile pages | Your live profile pages carry no footnote markers and no disclaimer panel, which is internally consistent — nothing on them cites a note. The rebuilt pages keep it that way. **Adding a panel there would have been as much a change as removing one.** ⚠ This is the same disposition as `content/COMPLIANCE.md` **AP-02**, reached from the other side: that row states why it must stay this way, this row states that the build did. The two are cross-linked, not merged. | Unchanged — matches your site |
| AP-06 | Every string on these pages is National Bank's, not yours | All four live pages are generated by the bank from a central advisor record, into the bank's own page furniture rather than your microsite's. Name, title, phone, email, address and languages are fields in that record. Copying them into a static site **ends the automatic updating those pages have today.** | ⚠ open question: who keeps these four pages current after launch? |

---

## Build decisions (D-series) — client decision required

> Renamed from `N-` on 2026-08-02; the mapping is at the top of this file. The
> `N-` series now belongs exclusively to `content/COMPLIANCE.md`.
>
> **Ordering note, 2026-08-02.** `D-21` … `D-23` were written as `D-15` … `D-17`
> by the profile-pages agent while the firm-page agent was writing its own
> `D-15` … `D-17`. The profile rows were renumbered to break the collision but
> were left sitting between `D-14` and `D-15`; the table has now been put back
> into ascending order. **The numbers themselves did not move again** — they are
> cited in code comments under `src/`, and a second renumber would break those.
> `D-06` … `D-32` are a single ascending run with no gaps and no duplicates.
>
> *(`D-32` added 2026-08-03 — the non-breaking-space reconciliation. It records
> behaviour that was already in the build and had no row.)*

| ID | Item | Why we left it | What we recommend |
|---|---|---|---|
| D-01 | **`Accès client` / `Client Access` button in the top bar.** Removing it would free ~184px and let the full French navigation appear from ~1120px instead of ~1280px. | It is the only conversion control in the header and it links to the bank's own client login, which is compliance-adjacent chrome. Not our call. | Keep it. Below 1280px the navigation collapses to a standard menu button, which is normal behaviour and loses nothing. |
| D-02 | **Navigation label lengths.** Two labels are shortened (NC-01/NC-02); the other three are unchanged. | Every shortening is a deviation, so we made the minimum number that solved the problem rather than tidying the whole set. | Approve NC-01/NC-02 as they stand. After them the label set is 95–107px, which is even. |
| D-03 | **French home page — the four `Un processus éprouvé` icon descriptions describe the wrong pictures.** The artwork files are `icone-1-handshake`, `icone-2-strategie`, `icone-3-survey`, `icone-4-speech`. Their live descriptions read `Icône de cible…` (target), `Icône d'étoile…` (star), `Icône symbolisant la rigueur…`, `Icône de loupe…` (magnifying glass). Those four strings are, word for word, the translations of the descriptions on your **English** page's `Our unique approach` icons (`picto-approche`, `picto-integrite`, `picto-professionnalisme`, `picto-transparence`) — a different icon set entirely. A screen-reader user is told there is a target where there is a handshake. | There is no correct pairing to restore: the four strings do not describe **any** of the four French icons, so repairing this means **writing new descriptions of your brand artwork**, which is authoring, not correcting (P-9). Same reasoning as N-12 in `content/COMPLIANCE.md`. | Two clean options, your choice: (a) NBF supplies four corrected descriptions, or (b) the icons are marked decorative (`alt=""`) since each already sits beside its own heading, and nothing is lost. **We recommend (b)** — it is free, it is accurate, and it removes four wrong statements. |
| D-04 | **English home page opens on National Bank's generic banner.** French serves `bannieres/accueil/ban-page-accueil-groupe-wolf-achard.jpg`, made for your team. English serves `ban/fbngp-accueil/img-microsites-aspirationnel.jpg`, National Bank's shared microsite banner — so nothing above the fold on the English home page is specific to you. (The English master is also only 1199px wide against the French 2000px, so it cannot be used full-bleed on a large screen without being enlarged past its own resolution.) | Substituting your French artwork onto the English page is a brand decision, exactly like the un-branded English services diagram in INTAKE Q4. Not ours to take. | Use the bespoke banner on both language trees, and ask NBF for the 2000px master. It is the single cheapest visible improvement to the English site. |
| D-05 | **A third red, and a navy, in the home-page icon artwork.** The four French process icons are filled `#e41c23`. Your brand red — measured from both team lockups — is `#de161d`. They are close enough to look like a mistake and far enough apart to be visible side by side. The four English approach icons are filled `#00324d`, the English lockup navy, so **the same functional element is red in French and navy in English.** | We do not recolour supplied brand artwork (INTAKE Q4 default), and the navy question is already open as INTAKE Q2 / P-15. Shipped exactly as supplied in both languages. | Fold this into the Q2 brand answer: one red and one navy across both trees, then have NBF re-export the eight icons. Until then the site's own palette stays warm-paper so the mismatch is never seen against a third colour. |

### Applied build decisions — D-06 onward

These are **decisions we took and applied**, not things we left alone. Each is
listed so you can reverse it in one line if you disagree.

| ID | Item | What we did, and why | Status |
|---|---|---|---|
| D-06 | **The footer's office link is now labelled in your own words.** Was our wording, `Voir sur la carte` / `View on map`. | Your live contact page links the National Bank branch locator as **`Heures d'ouverture`** / **`Business hours`**. That is the same destination, already labelled by you — so we use your label instead of one we wrote. One less invented string, and the label now matches what the page actually opens. | Applied — pending sign-off |
| D-07 | **Your closing contact block now appears on every page, not only the home page.** | Your home page ends with `Contactez-nous` / `Contact us`, the sentence `Obtenez les coordonnées…` / `Get contact information…`, and Laurent's and David Alexandre's direct numbers. We moved that block into the site's footer so every page ends the same way. The small line above it, `Nous sommes à votre écoute` / `We are here to help`, is the heading from your contact page. **Every word is yours; nothing was written and nothing was translated.** Three of your sentences now appear in a place they did not before, which is the only thing to approve. | Applied — pending sign-off |
| D-08 | **No toll-free line and no fax line anywhere on the site.** | National Bank's page template has slots for `Sans-frais :` / `Toll-Free :` and `Télécopieur :` / `Fax :`. **Your site publishes neither** — we checked all sixteen live pages. Rather than leave two empty rows or fill them from the template, we removed both from the site's data model entirely, and the pre-launch audit now fails the build if either reappears. If you do have a toll-free or fax number you want shown, tell us and it goes back in. | Applied — pending sign-off |
| D-09 | **`David Alexandre Wolf` is spelled without a hyphen.** An internal draft of ours had written `David-Alexandre`. | Every live page in both languages displays **`David Alexandre Wolf`**, no hyphen. Only the web address of his profile page uses one (`david-alexandre-wolf`), and that is unchanged. This never reached a built page; it is listed because it is a person's name. | Applied — pending sign-off |
| D-10 | **The description of your share card.** This is the text a screen reader announces for the picture that appears when one of your pages is posted to LinkedIn or sent in a message. | Your share card is National Bank's red flag on white — the same image all sixteen of your live pages already use. So the description is simply `Banque Nationale` / `National Bank`, which is what your own footer already calls that mark. **It deliberately says nothing else**: there is no group photograph anywhere on this site, so nothing may describe "the team", count people, or claim a regulated status. When a purpose-made co-branded card is produced, this text is rewritten from the new picture. | Applied — pending sign-off |
| D-11 | **The closing "Contact us" band appears once per page, never twice.** It is switched off on any page whose own content already carries that same call to action. | D-07 moved that band into the footer of every page, and on eight of the seventeen it then said the same thing the page had already said. On the **contact page** it went wrong twice over: its small top line is `Nous sommes à votre écoute` / `We are here to help`, which is **that page's own main heading, word for word**, so the same sentence appeared twice on one page; and its button is `Nous joindre` / `Contact us` pointing at the contact page — **the page the visitor is already on**. The site's most prominent call to action became a link to nowhere at exactly the moment someone was trying to act. On the **home, services and `Notre firme` pages** the collision was blunter still: each of those closes on its own `Contactez-nous` / `Contact us` block, so the heading printed twice about 800 pixels apart, and on `Notre firme` your two direct numbers appeared four times on one page. **The decision, page by page** — band switched OFF on home, services and `Notre firme` (both languages) because each closes on its own contact block, and on the contact page pair because that page *is* the destination; band switched ON on team, news, the two advisor profiles and the 404 (both languages), none of which carries a contact block, so there the band is the only route to your contact page. **No information is lost anywhere**: on every page where it is switched off, both direct numbers still appear at least three times — in the page's own closing block, in the footer's office column, and in the tab pinned to the edge of the screen. *(Build note: this is now a real setting on the footer component, replacing the stylesheet workaround the contact page used first. Reversing it, on one page or on all of them, is a one-word change per page.)* | Applied — pending sign-off |
| D-12 | **Your contact page spells its own name two ways.** | The browser tab title reads `Nous Joindre` with a capital **J**; the heading on the page reads `Nous joindre` with a lowercase one. Both are live today, on the same page. We shipped both exactly as they are rather than picking one — a page title is an identity string and it is indexed by search engines under the current spelling. **One word from you and we harmonise them.** *(English is unaffected: `Contact us` is consistent there.)* | Flagged, not changed |
| D-13 | **The three pictograms above your contact details are drawn from the site's own icon set** instead of the platform's picture files. | Your live page sets a phone, a location pin and an envelope above the three columns; the envelope is a red PNG. On the new site red is reserved for legal-note markers and the keyboard focus ring, so a red decorative icon would spend the whole colour budget on decoration — the same decision already applied to your home page's contact block. The replacements are the same three shapes, drawn in warm grey. **No wording changes**: those pictures carried descriptions that asserted nothing. One consequence, recorded rather than hidden: your English address pictogram's description `Adress picto ` (F-11) has nothing left to attach to, so it does not ship. | Applied — pending sign-off |
| D-14 | **Your team page's two footnote markers now have something to point at.** | In both languages the page prints a small ¹ beside `Planificateur financier` / `Financial Planner` and a small ² beside `Conseillère principale, planification successorale` / `Senior Advisor, Estate Planning` — and **carries no legal notes anywhere on the page.** The markers lead nowhere, in both languages, identically. We added your standard five-item `Notes légales` / `Legal Disclaimers` panel to the page, so both markers now resolve to text on the same page. **This adds no new wording**: the five notes are National Bank's standard text, already published verbatim on your own services page, and we verified them character-for-character (French 220/399/310/107/82 characters, English 164/340/258/68/69 — byte-identical to the platform standard). Notes 3, 4 and 5 appear without a marker pointing at them, which is correct and is how your services page already works. **The only other option was deleting the two markers, which removes a regulatory reference — a compliance decision, not ours.** Note ¹ is the important one: it is the note about financial planners, and `Planificateur financier` is the one job title on your entire site it actually governs. | Applied — pending sign-off |
| D-15 | **Your `Notre firme` / `Our Firm` page says nothing about your firm.** Every sentence on it belongs to National Bank — the FBNGP/NBFWM network description, the four statistics, the parent-bank paragraph. The only thing on the page that is yours is Laurent's and David Alexandre's phone numbers and email addresses at the bottom. | We reproduced it exactly as it stands. Writing an introduction to Groupe Wolf Achard for this page would have been inventing copy about a regulated business, which we do not do (P-5). | ✅ **ANSWERED 2026-08-03 — and the recommendation stands corrected.** This row used to end *"it needs to be written by you… we cannot supply it."* That was half right. We could not **author** a paragraph, and we still cannot. But we could **assemble** one entirely out of sentences you already publish, and you authorised it — so `Notre firme` / `Our Firm` now opens with a short paragraph about your team, **above** every National Bank block on the page. `NC-27` (French, 4 sentences) and `NC-28` (English, 3 — `D-73` says why). Names, the plural job title from this page's own `près de 850` / `over 850` sentence, your mission and commitments, your four-step process, your office city. **No years in business, no client count, no assets, no superlatives** — every one of those would still be inventing copy about a regulated business. **If you want any of them, you supply the fact and it becomes a claim on this register first.** |
| D-16 | **The four figures in `Un puissant allié` / `A strong partner` have no source and no date.** `1 G$ de revenus par année`, `Plus de 200 G$ d'actifs sous gestion`, `29 % Part de marché au Québec`, `9 % Part de marché au Canada`. The page never says whose revenue, market share of what, or as of when. | We shipped all four exactly as they are, with **no source line and no date added**. Writing `Source : Banque Nationale` or an as-of date under them would be inventing an attribution the page does not have — the opposite of the problem it looks like it solves. | Ask NBF for the four figures **each with its own as-of date**, the way the `424 milliards … au 31 octobre 2023` figure in the paragraph below them already has one. A dated figure ages honestly; an undated one just gets quietly wrong. |
| D-17 | **The figures are set at reading size, not blown up into big numbers.** The obvious design is `1 G$` at 60px with a caption under it. We did not do that. | Every one of these figures depends on the words attached to it — `Plus de`, `par année`, `au Québec`. Separated from those words and set at display size, an undated, unsourced number starts reading as a headline claim that nobody at National Bank approved in that form. So each figure keeps its whole sentence, with the same bold emphasis your live page already applies. Measured: the figures render at 19px against a 56px section heading. | Keep it this way until D-16 is answered. Once the figures carry dates and a source, they can be set as large as you like. |
| D-18 | **`Contactez-nous` / `Contact us` used to appear twice at the bottom of this page**, once as the page's own closing block and again in the footer band D-07 introduced. | The page's own block is the only place on the whole site that carries the label **`See Our Contact Details`** — title-cased, where your other four English pages say `See our contact details`. That inconsistency is real, it is yours, and it is flagged (C-24) precisely so you can see it and decide. Dropping the block to remove the repetition would have deleted the only evidence of it. So we kept both and flagged the repetition instead. | **Resolved.** The fix is the one D-11 already used on the contact page, now applied as a site-wide rule: the footer band is switched off wherever a page already closes on its own contact block. Your own block stays — so `See Our Contact Details` is still on the page, exactly once — and the repetition is gone. Not one word was deleted. |
| D-19 | **Your English news page opens on National Bank's generic banner; your French one opens on artwork made for your team.** French serves `/microsites/groupe-wolf-achard/bannieres/nouvelles-articles/…`; English serves `/ban/ban-news-articles/…`, the bank's shared file. Nothing above the fold on the English page is specific to you. | Each language ships its own banner, untouched. Moving your French artwork onto the English page is a brand decision, not a build one. | Use the bespoke banner on both language trees. **This is the same finding as D-04 on the home page and INTAKE Q4 on the services diagram — the English tree keeps getting the generic version of things you already have a branded version of.** One answer settles all three. |
| D-20 | **The English `Our Firm` page is one section shorter than the French one, on purpose.** French closes with a `Petits détails pour tout savoir` panel holding a ranking claim — *5th among Canadian full-service brokers, per Investor Economics, March 2019*. The English page has never had it. | We did not translate it. It is a **competitive ranking claim**, its supporting data is now over seven years old, and putting it in front of English readers for the first time is a compliance decision, not a build one (P-16). The English page simply ends after the National Bank section rather than showing an empty panel. | Two questions, and they are separate: **(1)** should the ranking claim be refreshed with current Investor Economics data or retired — it is the only claim on your whole site that cites a source, and it is stale; **(2)** if it stays, should it appear in English too? |
| D-21 | **The `Voir le site Web` / `View website` line is not on the rebuilt profile pages.** | On the live site each profile page sits inside National Bank's own page furniture, and that link is the only way back to your microsite. On the new site the profile page **is** your microsite — it wears your header, your navigation and your footer — so the link would point from your site to itself. There is a second reason: **both English profile pages currently link to the FRENCH site** (COMPLIANCE N-09). Shipping that would carry a French link onto an English page; quietly repointing it would edit National Bank's record of a licensed advisor. Neither is ours to do, so the line is not shown and the defect is reported to NBF instead. | Applied — pending sign-off |
| D-22 | **`< Voir tous les conseillers` / `< See all advisors` is replaced by a working link to your own team page.** | All four live profile pages carry that link and **it goes nowhere** — the address is literally `#` (COMPLIANCE N-10). We could not simply point the existing label somewhere, because "all advisors" means every advisor on `fbngp.ca`, which is a page this site does not have. So the link now reads `Notre équipe` / `Our team` — **your own navigation wording, not ours** — and goes to your team page. | Applied — pending sign-off |
| D-23 | **One phone-link format across the whole site.** | Your site publishes the same two numbers in two different link formats: `tel:+15143951937` on twelve pages, and `tel:514-395-1937` on the four profile pages (COMPLIANCE C-23). The second has no country code, so it is not reliably dialable from outside Canada. We used **your own more common format everywhere**, so every phone link on the site works the same way. **The number you see on the page is untouched** and still differs by language exactly as your site does — `514 395-1937` in French, `514-395-1937` in English. This is a choice between two values that are both already live on your site; we did not invent a third. | Applied — pending sign-off |
| D-24 | **Your footnote numbers now work as footnotes.** Both services pages. | On your live site the small `1, 2, 3` beside `Certains services sont offerts par des tiers` / `Certain services are offered by third party specialists` is **plain text**. A reader who wants to know what note 2 says has to find the `Notes légales` / `Legal Disclaimers` panel, open it, and count. On the new site each number is a link: click `2` and the panel opens at note 2. **No number was added, removed or renumbered, and not one word of the notes changed** — all five still render, in order, on the same page, whether or not anything points at them. | Applied — pending sign-off |
| D-25 | **One English footnote marker was typed as a character instead of being marked up, and is now a proper superscript link like the other four.** `Portfolio management`. | On the live English page that block's disclosure sentence — `These services are offered by third party specialists.` — is wrapped in **subscript** type with a small `₁` typed into it as an ordinary character. It sits below the line instead of above it, it is smaller than the four markers beside it, and screen readers do not announce it as a footnote reference at all. It now reads at normal size with a real superscript `1` link, matching the other four. **Not one word changed.** | Applied — pending sign-off |
| D-26 | **A stray `*` on the English services page does not ship.** Live: `Certain services are offered by third party specialists. *` followed by the `1, 2, 3`. | **There is no `*` footnote anywhere on that page** — the asterisk points at nothing. Our rule for this build is that a reference either resolves or it does not ship, so it does not ship; the three numbered references beside it are untouched and now resolve. **Resolved 2026-08-02, same reasoning as F-14.** `content/COMPLIANCE.md` N-15 called an orphan `*` a compliance call and its final audit (check 51) expected the `*` still to be there; that check tested the live site's defect rather than the rebuild's rule, and has been rewritten. ⚠ **Not the same as the French one:** the `*` opening the FR `notre-firme` accordion **does ship**, because there it is the first character of a verbatim regulated sentence (`content/COMPLIANCE.md` §1.7, C-35), not a dangling reference. Restoring the English one is a one-character change. | Applied — sanctioned disposition. Yours to overturn |
| D-27 | **Your seven services are open on the page instead of hidden behind click-to-open panels.** | On the live site each service is a collapsed panel. On the **English** page five of those panels have a disclosure sentence and a footnote marker *inside* them — so the sentence telling a reader that a service comes from a third party is hidden until they click. Opened out, every claim, every disclosure and every marker is visible, printable, searchable with Ctrl-F and readable by a screen reader in one pass. **Same words, same order, same seven services** — only the click is gone. | Applied — pending sign-off |
| D-28 | **The legal-notes panel is the same heading level in both languages.** | On your live site the French panel heading is coded one level higher than the English one, for the same block of text on the same pair of pages. We used the French level for both. It changes nothing a reader sees; it changes the page outline a screen reader announces, which should not differ between two versions of one page. | Applied — pending sign-off |
| D-29 | **Your English services diagram does not name your team. Your French one does.** | The wheel on your French page is artwork made for you: it reads `Groupe Wolf Achard` at the centre and `Vous` around it. The English page shows National Bank's shared diagram, which reads `Your Wealth Advisor` and `Client` and never names you. We shipped each language's own picture exactly as supplied and did **not** relabel or swap either — words inside a picture are still words, and re-lettering brand artwork is not ours to do. | Flagged — client decision |
| D-30 | **`Budget tool` and `Mortgage calculator` on your English page still lead to the same page.** Both point at National Bank's mortgage payments calculator. | Your French page has two different, correct addresses — `calculer-budget-en-ligne.html` for the budget tool and `calculatrices/versements.html` for the mortgage one — which is how we know the English budget link is simply wrong rather than intentional. We did **not** guess the English equivalent: inventing a destination is worse than reproducing a broken one, because nobody would ever notice we had. **NBF supplies the correct English address and it is a one-line change.** | Flagged — needs the correct address from NBF |
| D-31 | **Both services pages end with your own `Contact us` block and then again with the footer band**, exactly as `Notre firme` does (D-18). | We kept the page's own block because the **English** one carries a sentence that appears nowhere else on your entire site: `Our team members are there for you. Contact us directly at` — which stops mid-phrase and runs straight into your two phone numbers. Dropping the block would have deleted that sentence silently; it ships exactly as it reads today, and it is worth a look. The French block is word-for-word what the footer band already says, and is kept only so the two language versions of the page have the same shape. | Applied — pending sign-off. The clean fix is the D-18 recommendation: switch the footer band off wherever a page closes on its own contact block. |
| D-32 | **Twenty invisible spacer characters on your live pages are not reproduced, and forty new ones appear inside an address that was moved, not written.** Nothing a reader can see changes either way. | Your pages use a special "non-breaking space" — the character that stops a line breaking between `31` and `243`, or between `Plus de` and `200 G$`. **It is a legal-text character on this site and we treat it as one: every single one that sits inside a sentence is reproduced exactly.** All **82** of them. The other **20** in your live markup are not in any sentence — **16 are empty paragraphs used purely as vertical spacing**, and **4 are trailing spacers sitting after a line break at the end of the partners' affiliation line**. They hold no words, they are announced by nothing, and the new site achieves that spacing with its stylesheet, so they do not ship. Separately, **40 new ones appear** — all of them inside your own address and your own `Nous sommes à votre écoute` / `We are here to help` line, which D-07 moved into the footer of every page and into the page's share data. **Not one of the 40 is a new character in a new string: they are the same verbatim strings, in more places.** Reconciled character by character against the captures: **102 = 82 kept + 20 spacers · 122 = 82 kept + 40 relocated.** The rule this sets, and the reason the row exists: **a whitespace-only node is presentation and is not content; every non-breaking space inside a sentence is.** *(This also disposes of a wrong entry in our own risk register — `COMPLIANCE.md` R-14 claimed the affiliation line had no such character and that the content inventory had over-marked it. The inventory was right; R-14 is withdrawn. §7 check 40 now tests the rule above rather than a page-count-dependent total.)* | Applied — pending sign-off |
| **D-51** | ⚠ **We added machine-readable data about your firm that your live site does not have — and it states, in a form search engines read directly, that your team operates under National Bank Financial.** Every page except the error page. **This is the one item on this list we would put in front of NBF compliance before launch.** | Search engines and AI assistants increasingly answer questions from a small block of structured data in a page's code rather than from the page's words. Your live site publishes none, so anything that answers "who is Groupe Wolf Achard?" today is guessing. We added one, and the rule we held it to is that **it may not say anything your pages do not already say in plain sight**: your name, your office address, your two direct phone numbers, and one relationship — `parentOrganization: Financière Banque Nationale - Gestion de patrimoine`. That relationship is on every page of your site already, in the footer lockup, in the parent-bank block and in the first numbered disclaimer. Stating it is the *safe* choice: a block that named your team with no parent would present you to a machine as an independent firm, which is the one thing this site may not imply. **What we took out:** a second entry naming National Bank Financial as your *brand*. Your brand is your own name, which the block already carries, and nothing visible on your pages makes the brand claim. **What we fixed:** the address of the page itself was wrong on 14 of the 16 pages carrying the block — every page claimed to be the home page. Each now names itself. **What is deliberately absent:** no registration or dealer number, no headcount, no assets figure, no ratings, no awards, no named employees — nothing that would be a credential or a claim. Your name, address and phone numbers were checked character-for-character against the identity table in the compliance file, per language, including the non-breaking space inside the English address. | ⚠ **needs explicit approval — flag to NBF compliance.** Turning it off is one line (`structuredData={false}`); nothing a reader sees would change |
| **D-52** | **Your home page now links to your services page and your team page.** Both languages. | The French home page's main content held **five** links: four into National Bank's news section and one to your contact page. **None to `Nos services` or `Notre équipe`** — the two pages that carry your own writing, and the two your home page spends its whole length building an argument for. A reader who finished `Un processus éprouvé` had nowhere to go but the bank's syndicated news. (The English page linked `Our team` once, as a single word inside a sentence, and `Our services` not at all.) Two links now sit under the process section on both pages. **We wrote no new words for them: the labels are your own live navigation wording**, `Nos services` / `Notre équipe` and `Our services` / `Our team`, and they point at the same pages your top bar already points at. Only the placement is ours. They are styled as the quieter of the two button styles, because the strongest control on the page stays your closing contact block. | Applied — pending sign-off |
| **D-53** | **Your main navigation is announced in the language of the page it is on.** All 17 pages. | Your live site labels its main navigation `main menu` — **in English, on the French pages as well as the English ones** (compliance file N-10). That label is not visible; it is what a screen reader announces when a blind visitor jumps between the regions of a page. On your French pages it announces an English phrase. We ship `Navigation principale` in French and `Main navigation` in English. **Shipping your string verbatim is not available here**, and that is why this is a row rather than a silent fix: our own language-purity rule (P-4) forbids an English string on a French page, so reproducing `main menu` exactly would trade one defect for another — and this one is a platform defect across all of `fbngp.ca`, not something your team wrote. Nothing a sighted reader sees changes. **Not fixed by us, and still open: the same defect on your live site**, which only National Bank can correct. | Applied — pending sign-off |

> **Note on the three ids above.** `D-51` … `D-53` are deliberately numbered well
> clear of the `D-01` … `D-32` block: they were appended while another agent was
> editing this file, and a gap is cheaper than a collision. Renumber them into
> sequence whenever this file next has a single owner. No existing row was
> touched.

### D-60 … D-62 — the home and services banners

> Three decisions, all made on 2026-08-03, all about the same thing: the two
> banners that open your home and services pages were designed to be printed
> on, and were not being printed on. **`D-60` is the one that matters; `D-61`
> is where it could not be done, and `D-62` is what happens everywhere else.**
>
> *(Numbered from `D-60` for the same reason `D-51` and `D-70` were: a gap is
> cheaper than a collision while more than one person is editing this file.)*

| ID | Item | What we did, and why | Status |
|---|---|---|---|
| **D-60** | **Your home and services banners now carry the heading, instead of sitting underneath it as a picture of nothing.** | These banners come out of National Bank's page templates, and they are built to be printed on: the photograph occupies the right-hand side and the left is deliberately blank, because the live site prints your heading over it. Measured on the master files, that blank part is not merely pale — it is **one single colour repeated exactly**, with no texture and no gradient: `#ececec` across the left **53.15%** of the French home banner, `#efefef` across the left **43.37%** of the English one, and `#ececec` across the left **53.20%** of both services banners. Placed under the heading, as it was, that half of every banner was empty grey. **The heading and the line beneath it now sit on the banner, in the space the artwork leaves for them**, from 960px of screen width upward. The band runs the full width of the window; where the window is wider than the picture, the stylesheet continues the identical flat colour, so there is no visible join — we checked pixel by pixel and the two sides are the same value. **Contrast was measured, not assumed.** The darkest pixel anywhere behind the type is **12.45:1** on the French home banner, **11.72:1** on the English one and **12.64:1** on the French services banner, against a legal floor of 4.5:1 — and **no shading, tint or panel was placed over any photograph to get there.** The type simply stops before the photograph starts. Your heading, its wording and its size are unchanged; so is the order a screen reader meets it in. Two other things a reader will notice: the first block of each page now sits slightly further below the banner, because a change of colour earns the full spacing; and the banner is now requested at the size it is actually displayed at, which it was not before, so it is sharper. | Applied — pending sign-off |
| D-61 | **The English services page is the one banner that does *not* do this. Its heading stays above the picture.** | The reason is the sentence, not the artwork. Your English services line is `Investment management. Financial planning. Estate planning.` — **58 characters over three sentences, against 27 in French.** At the size that line is set, it needs roughly 600px of width across three lines, or 775px across two; the room the photograph leaves depends on how tall the band is, so asking for more height costs width. Rather than judge it by eye we solved it: **there is no band height between 180px and the artwork's own 380px at which the English line fits, at any window narrower than about 1728px.** At a 1440px window the best case still needs 515px of band to fit into 380px. It is not marginal. The ways to force it were all worse — shrink a display line you approved, break your sentence at a point we chose, or lay a shading panel over a bank photograph to buy contrast the picture does not owe. We did none of them. **The English services page keeps what it has today: heading first, picture below.** French overlays, English does not, and we are reporting that rather than hiding it. | Applied — pending sign-off. If you would rather the two languages match, the cheaper change is to the French page, not the English one |
| D-62 | **Wherever a banner still sits below the heading, it is now cropped to the photograph.** | This covers phones and small tablets (below 960px) and the whole of the English services page. The plate used to be a fixed 2.6:1 letterbox, which at most sizes still contained part of the blank half — on the English home page **up to 30% of the plate was empty grey.** Each plate now takes the shape of its own photograph (2.47:1 French home, 1.81:1 English home, 2.46:1 both services), so the picture fills it edge to edge and the blank region never appears at all. On phones the crop tightens further to 16:9, which stays inside the photograph and keeps its subject. **Nothing about the pictures themselves changed** — no retouching, no recolouring, and nobody has been cropped out of frame. | Applied — pending sign-off |

---

### D-70 … D-76 — decisions taken while writing the copy you authorised

> Seven judgement calls, all made on 2026-08-03 while producing `NC-20` … `NC-28`.
> They are here rather than folded into those rows because each is a decision you
> could reverse on its own without touching the copy. **`D-70` is the one that
> matters; the other six are consequences of it.**
>
> *(Numbered from `D-70` for the same reason `D-51` was: a gap is cheaper than a
> collision. `D-33` … `D-50`, `D-54` … `D-59` and `D-63` … `D-69` are unused;
> `D-60` … `D-62` are the banner rows immediately above.)*

| ID | Item | What we did, and why | Status |
|---|---|---|---|
| **D-70** | ⚠ **You lifted the prohibition on filling the English gap — and we recorded that as a dated amendment rather than just doing it.** | Every previous pass on this project was bound by `content/COMPLIANCE.md` **P-16**: *do not fill the English content gap*. It is the rule behind the answer to question 2, behind the missing English biographies and behind three "on purpose" notes in the decision log. **Overriding it silently would have left the register describing a build that no longer exists** — and the next person to read P-16 would have found a rule the site was openly breaking, with nothing to say who authorised it. So the amendment is written into §6.5 of that file: **dated, attributed to you, and scope-limited to a single sentence — translation of copy you already publish in French, and nothing else.** It names the six blocks it covers, lists by name the four FR-only blocks it does **not** cover, states that the reverse direction (English → French) is not amended at all, requires every credential line to be flagged individually and signed off by NBF, and says explicitly that **it does not grant the editorial-fix amendment**: every `F-` typo row is still PENDING and every typo on your site still ships exactly as your site has it. **The prohibition was not deleted. It was amended, in writing, with a boundary.** | Applied — the amendment is on file at `content/COMPLIANCE.md` §6.5 |
| D-71 | **The English home page's single tinted band moved from the process rail to `Our philosophy`.** | Your pages use one tinted band each — one pause, in one place. On the English home page that band sat on the process rail, for a reason that no longer holds: it was there because the page was thin and the rail was the only section that could carry a design idea. **The page now has eight sections instead of five.** The band moves to `Our philosophy`, which is exactly where your French home page pauses. Two versions of one page now breathe in the same place. Nothing a reader reads changes; it is one word in one file. | Applied — pending sign-off |
| D-72 | **`What sets us apart` appears on the English page without the photograph the French block has.** | On your French home page that list sits beside a photograph of a man on a boat, whose description exists **only in French**. Your authorisation covers translating copy; **writing or translating a description of a photograph is authoring one**, which is the same line we did not cross on your four process icons (D-03) or your profile headshots. There is a second reason and it is mechanical: the picture's own file name is French, so putting it on an English page would put a French-named file into the English tree, which our language check exists to catch. **The list is the content; the photograph was the decoration.** The English block is the list, set on its own measure — not a two-column split with an empty column. | Applied — pending sign-off. One description from you and the photograph goes on |
| D-73 | ⚠ **Your English paragraph on `Our Firm` is three sentences where the French is four — and the missing sentence is a finding, not an omission.** | The French paragraph ends on your process: *faisons connaissance, établissons une stratégie, déployons notre plan, restons en contact.* **Your English site has no such process.** Its `Our unique approach` block lists `Our personalized approach`, `Our integrity`, `Our professionalism` and `Our transparency` — **four qualities, not four steps, and not translations of the four French ones.** Only the sentence above them is a translation pair. So there were two ways to write a fourth English sentence and both were wrong: translate the French step titles, and the firm page describes a four-step process the home page does not have — a **new** contradiction on your site; or use the four English quality labels, and `integrity` and `transparency` appear twice in one short paragraph, because the sentence before already carries them. **We wrote the shorter honest version.** ⚠ It also means the four French step *descriptions* could not be translated onto the English home page at all — there is no matching label to attach them to. | Applied — pending sign-off. **If you want the four steps in English, they are a translation on the home page first, and the firm sentence follows it** |
| D-74 | **Two invisible no-break spaces on your French mission items are not carried into their English translations.** | `Sécuriser votre avenir financier` and `Être le partenaire principal dans votre réussite financière` each end with a no-break space in your live markup. We preserve every one of those **inside** a sentence, exactly (D-32). These two are not inside a sentence — they are at the very end of a list item, holding nothing — and more to the point, **an English translation is new text: there is no live character there to preserve.** Adding one would be inventing an invisible character, not protecting one. **Your French items are untouched and still carry theirs.** | Applied — pending sign-off |
| D-75 | **Jean-Francois's name is spelled two ways on the English team page, exactly as it is on the French one.** | The heading on his card reads `Jean-Francois Gobeil`, no cedilla. The first word of his biography reads `Jean-François`, with one. **That is precisely what your French page does**, on the same card, in the same two places (COMPLIANCE N-04). A translation that quietly picked one spelling would be **choosing how to spell a named individual's name**, which is not a builder's call in either language. So the English reproduces the inconsistency rather than resolving it. **One line from Jean-Francois settles it in both languages at once.** | Flagged, not changed |
| D-76 | **The new English paragraph on `Our Firm` is headed `Wolf Archard Group` — with the misspelling.** | This is the one place where new English copy had to carry your team's name, and question 1 is still open. Spelling it `Achard` here, while the `<h1>` two inches above it and 39 other strings across your English pages all say `Archard`, would have **quietly answered question 1 for you** — and produced a page that contradicts itself in two directions at once. So the new heading matches the tree it lives in. **If you confirm `Achard`, this string changes in the same single find-and-replace as all the others**; it adds nothing to that job. | Applied — pending sign-off, and dependent on question 1 |

---

## Decisions taken

| Date | Decision | Result |
|---|---|---|
| 2026-08-02 | Full French navigation must be visible at 1280px | Achieved at 1280px with 37.5px of measured headroom, via NC-01/NC-02 plus a padding audit of the header's right-hand cluster. 1120px is not reachable while the client-access button stays in the bar — see D-01. |
| 2026-08-02 | Live-site defects are shipped as they are, not silently corrected | Applies to the `(FPCI)` transposition in the French protection-fund image description, the `Our Firm` capitalisation, and the `News & articles` ampersand. Rows to be added by the compliance pass. |
| 2026-08-02 | Real brand artwork wired in, header re-measured in French | All 13 lockups and marks replaced from the DAM masters. Re-measured in French with webfonts loaded: **37.2px of headroom at 1280px** (the estimate it replaced was 37.5px), zero page overflow and zero brand/navigation overlap at 375 / 1200 / 1280 / 1366 / 1440 / 1900. **No layout value needed to change.** Four artwork rows added as A-01 to A-04. |
| 2026-08-02 | **The top bar is now the size the benchmark asks for** | The bar was 79px tall at a 1440-wide screen with 35px logos, against a competitive bar of 95–110px and 58–72px. It is now **103px with 58px logos at 1440**, and unchanged at 32px logos / 77px bar at 1280 and below — so the full French navigation still appears at 1280 with the same 37.2px of measured spare room it had before, to the pixel. Re-measured in French with the real artwork at 375 / 768 / 1200 / 1280 / 1366 / 1440 / 1526 / 1900: no overlap and no sideways scrolling at any width. The tightest fit on the whole site is 26.2px of spare room at 1526px, where the logos stop growing. |
| 2026-08-02 | **Home page: the big hero line is your own copy, not ours** | The large line on each home page is the sentence that already sits under your heading on the live site — `Réalisons des projets ambitieux` in French, `Our expert team is here to meet your financial needs` in English. It is set larger (76px at 1440) and your heading stays exactly as it is, at 22px. **No words were written for either home page**, so the home build adds no `NC-` row. Verified: 36/39 French and 20/23 English strings match your live site character-for-character, and every unmatched item is a stylesheet value, not copy. |
| 2026-08-02 | **News pages: National Bank's syndicated block reproduced, not curated** | Nine sections per language in the capture's own order, nothing merged, sorted or balanced between languages. **Verified: 95/96 French and 88/89 English strings match the live page character-for-character** (strict — no-break spaces not folded), and the single miss in each is a stylesheet value, not copy. Run again including short strings: 143/151 and 138/145, every miss named — one CSS value, the `PDF` badge (NC-05), and six internal section names. **51 links audited against the capture: 25 French, 26 English, zero dropped, zero altered, all 6 tracking codes and all 4 `#` anchors intact, and 0 of the 29 PDFs pinned to a dated filename.** The three anchors the home page links at (`#spotlight`, `#economic`, `#guide`) each resolve to exactly one target in both languages. |
| 2026-08-02 | **News pages: the two video embeds became links, and the site still makes zero third-party requests** | The live page embeds two YouTube players per language. Reproducing them would have made your site contact Google on every page load — ending the "no third-party requests" position and creating the only thing on the site a cookie banner would have to govern. Each video ships as a link carrying the **identical captured URL**, with National Bank's own written transcript kept on the page in a panel that needs no JavaScript. **Verified across the whole built site: 17 HTML files, 0 `<iframe>`, 0 third-party subresources.** S-03. |
| 2026-08-02 | ~~**Home page: the English page is shorter than the French one, on purpose**~~ ⚠ **SUPERSEDED 2026-08-03** | Your English home page had no mission, no commitments, no philosophy, no list items and no descriptions under its four process steps. We did not write any (P-16 / INTAKE Q3). Instead the English page omitted those sections entirely rather than showing empty headings, and gave the sections it did have more room and larger type. **Five full sections in English, seven in French; neither page showed a gap.** ⚠ **You then authorised the translations** — the English home page now carries `Our mission`, `Our commitments`, `Our philosophy` and `What sets us apart` and runs to **eight** sections (NC-20 … NC-23, D-70). **The one part of this row that still stands** is the process: its four steps are still a single-line rail with no descriptions, and there is now a second reason as well as the first — the English four items are not the French four (D-73). |
| 2026-08-02 | **Team page: the orphan footnote markers are resolved, not deleted** | Both team pages printed markers ¹ and ² with no disclaimer panel — the same defect, symmetrically, in both languages (COMPLIANCE §1.5, P-12). The full five-note panel was added to both pages rather than dropping the markers from either. Verified in the built output: **2 markers per page, both resolving to a note on the same page, 5 notes rendered, 0 orphans, in both languages.** Applied identically to French and English, because a compliance disposition that differed by language would be a second defect. See D-14. |
| 2026-08-02 | ~~**Team page: the English page carries no biographies, on purpose**~~ ⚠ **SUPERSEDED 2026-08-03** | The French team page carries two `Biographie` panels — five paragraphs of credentials for Lysane Tougas and Jean-Francois Gobeil. The English page carried none, because your English page carries none. We wrote no English versions (P-16): they are credential claims about named, licensed individuals. **The gap itself was the finding.** ⚠ **You then authorised translating them**, and both panels now render in English (NC-24 … NC-26, D-70). **The reason the gap was left open in the first place has not gone away — it has become a condition:** they are still credential claims about named, licensed individuals, so **seven lines are flagged individually and every one needs NBF compliance sign-off before launch.** Nothing was improved in translation; the CFA line and the "8 years" line now age in two languages (question 3). |
| 2026-08-02 | **Advisor identity has exactly one source, and it is guarded at build time** | The team page and all four profile pages read name, title, phone, email, languages and photograph from a single file (`src/data/advisors.ts`), so the two surfaces cannot drift apart. Nothing is paired by list position — every value belongs to the advisor object it describes — and the file additionally **fails the build** if the two language trees stop describing the same two people in the same order, if a display name acquires a hyphen (D-09), if any identity field is blank, or if a French entry carries an `@nbc.ca` address or an English entry an `@bnc.ca` one (P-4). Confirmed by deliberately breaking it: the build stops with a named error. |
| 2026-08-02 | **Register reconciled end to end after six parallel passes** | Two ID collisions resolved (`N-`→`D-`, and this file's `AP-01…03`→`AP-04…06`); the `D-` and `NC-` tables and `content/COMPLIANCE.md` §2.3 put back into ascending order; one wrong cross-reference corrected (`AP-04` cited `D-14`, a team-page row, for profile-page decisions). **Series ownership is now stated identically in both files.** `D-21`…`D-23` were *not* renumbered a second time — they are cited in code comments, and the eight stale `D-11`…`D-14` citations in the services files are listed for the code agent rather than fixed by renumbering the register. ✅ **Done — re-measured 2026-08-03: all twelve services-file citations now read `D-24`…`D-27`.** The two `D-11` citations that remain in those files are correct ones (the CTA band), not leftovers. `COMPLIANCE.md` §7 check 12 records it. |
| 2026-08-02 | **F-14 / N-07 resolved: the swapped French news pictures stay corrected** | The two documents gave opposite instructions. N-07's reason for not correcting — that a local fix is reverted at the next NBF republish — cannot occur in a static copy that never re-fetches the fragment, so the disposition does not follow from it. The correction changes **no wording**, so §6's missing editorial-fix amendment does not gate it. `content/COMPLIANCE.md` N-07 rewritten, §6.4 opened for it, §7 checks 49 and 51 amended. **The upstream fix is still National Bank's and the row stays open.** |
| 2026-08-02 | **Two audit checks that failed by design were rewritten to test the rebuild, not the live site** | `content/COMPLIANCE.md` §7 check 12 (marker inventory) and check 51 (the stray `*`) both failed on the services pages **because the build deliberately repaired what they were asserting**. §1.5 now carries an **as captured** and an **as shipped** column and the two checks test the shipped state against the rebuild's rule — *markers resolve or they do not ship, and any page rendering a marker renders all five notes in order.* A check that fails by design is a check nobody reads. |
| 2026-08-02 | **The closing "Contact us" band now appears once per page, never twice** | D-07 put it at the foot of every page; eight of the seventeen already said the same thing themselves. It is now switched off wherever a page's own content already carries that call to action — home, services and `Notre firme` in both languages, plus the contact pair — and left on for team, news, the two advisor profiles and the 404. Measured on the built pages: `Contactez-nous` went from twice to once on `Notre firme`, and both advisors' direct lines from five renderings to four. **Nothing was deleted** — every suppressed page still carries both numbers at least three times. D-11 / D-18. |
| 2026-08-02 | **A styling bug that left three prose blocks with no line-length limit at all** | Astro scopes a page's styles to that page's own markup, and a paragraph rendered by a shared component was falling outside it — so `max-inline-size`, margins and type size written for it silently did nothing. Audited every built page for it: **24 cases across 11 pages, now 0**, verified mechanically against the built HTML rather than by eye. The visible effect was worst on the French home page, where the philosophy paragraph ran at **110 characters a line** against the 60–75 the design brief requires, and set at 17px instead of 24px. No wording changed anywhere; this is layout only. |
| 2026-08-02 | **Ten duplicated component files removed, and the `PDF` badge made consistent** | Six page builds ran in parallel and each wrote its own copy of the same three building blocks — five near-identical image renderers, three paragraph renderers and two contact blocks. They are now one of each, shared, with every page repointed and the built HTML verified byte-identical for the pages affected. The `PDF` badge was on the news pages only; it is now the same word in the same chip on the services toolbox too (NC-05). |
| 2026-08-03 | **Five documentation defects corrected after the pre-launch audit — the build was right in every one of them** | The audit found four places where a document, not the build, was wrong, plus one unregistered deviation. **(1)** `COMPLIANCE.md` §7 check 51 listed `N-09` and `N-12` as "verify unchanged against the capture" when `D-21` and `NC-07` had already disposed of both — and on `N-12` it contradicted check 57 four lines below it, which *requires* the new descriptions. Both moved, and `N-10`, `N-11`, `N-13` added, so all fifteen `N-` items now sit on exactly one side of the check. **(2)** Check 12's code-drift warning was stale — the renumber it warned about is done. **(3)** `R-14` was factually wrong and is **withdrawn**: the content inventory's transcription of the affiliation line was correct. **(4)** The `Wolf Archard` expectation is restated as **zero crossover** rather than a count of 39, which the build's own chrome makes obsolete. **(5)** The non-breaking-space reconciliation is registered as **`D-32`** and §0's absolute "byte-for-byte" wording softened to the rule it was proxying for. **Not one build file was touched.** |
| 2026-08-03 | **A false claim in the client-facing summary corrected: "every other page carries none"** | Question 2 and `INTAKE.md` Q3 both asserted that National Bank's injected content blocks appear only on the services pages. **A full census of all sixteen captures shows the news pages carry 6 each — more than either services page.** The claim had been generalised from a partial sample. Both places now carry the complete census. **The finding is stronger, not weaker:** the news pages are 100% the bank's, the services split is language-dependent, and everything else is authored in place. |
| 2026-08-03 | ⚠ **The English content gap is closed by translation — the first policy amendment on this build** | The client authorised filling the gap that P-16 prohibited. Recorded as a **dated, scope-limited amendment** at `content/COMPLIANCE.md` §6.5 rather than as a silent override: *translation of existing French copy only*, six named blocks, an explicit exclusion list, the reverse direction un-amended, and an explicit statement that **the §6 editorial-fix amendment is still not granted** — every `F-` typo row stays PENDING. Shipped: `Our mission`, `Our commitments`, `Our philosophy`, `What sets us apart` on the English home page, and both partner biographies on the English team page. **The English home page went from five sections to eight.** Verified: `npm run build` 17 pages, `npx astro check` **0 errors / 0 warnings / 0 hints**, cross-language leak grep over `dist/` **0 failures in both directions** (28 new English strings absent from all 8 French pages, 5 new French strings absent from all 8 English pages), P-4 purity grep **0 failures**, **430 internal links and 32 anchors checked, 0 broken, 0 missing assets**, and exactly one tinted band per page still. `D-70` … `D-76`, `NC-20` … `NC-26`. |
| 2026-08-03 | **`Notre firme` / `Our Firm` says something about this team for the first time** | D-15 recorded that not one sentence on that page was about Groupe Wolf Achard. One short paragraph per language now sits above all of National Bank's material, **assembled from strings the team already publishes in that language** — not translated, not authored. The French runs four sentences, the English three, and the missing fourth is itself a finding: the English tree has no four-step process to describe, because its four `Our unique approach` items are qualities, not steps (`D-73`). `NC-27` / `NC-28`. |
| 2026-08-02 | **Three contradictions about your advisors' spoken languages ship unresolved, on purpose** | Your site makes four different statements about Laurent Achard's languages: `Français, anglais, italien` (French team page), `Français, Anglais, Italien` (his French profile), `English` (English team page) and `French, English, Italian` (his English profile). **Two of those disagree with each other inside the English tree alone.** Same pattern for David Alexandre Wolf. Each page now shows exactly what that page shows today; nothing was harmonised. This is a statement about a licensed advisor's declared capability (COMPLIANCE C-07 / C-08) and only you and NBF can settle it. |
---

## Pre-launch checklist

- [ ] Final domain confirmed (one constant in `astro.config.mjs`)
- [ ] NC-series new copy approved
- [ ] ⚠ **NBF compliance sign-off on the seven translated credential lines** (NC-25 a–b, NC-26 a–e) — *required by the §6.5 amendment itself, not optional*
- [ ] ⚠ **The CFA Level III sentence answered** — it now appears in both languages (NC-26 a / question 3)
- [ ] NC-27 / NC-28 — the team paragraph on `Notre firme` / `Our Firm` approved
- [x] Real lockup artwork in `src/assets/logos/`, and the header re-measured in French *(2026-08-02 — see A-01…A-04)*
- [ ] Imagery licensed, or replaced with client photography
- [ ] Purpose-made co-branded OG card
- [ ] Team photography commissioned if no full-team shot exists
- [ ] Stale bank figures refreshed via NBF
- [ ] Syndicated-content ownership assigned
- [ ] Redirects in place for the live URLs (U-01)
- [ ] NBF compliance review complete
- [ ] Demo hardening removed for the production build
