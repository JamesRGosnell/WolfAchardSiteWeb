# Intake — Groupe Wolf Achard

Every question traces to something found in the live site. Answer inline.

**This is a spec build.** Nobody has been asked yet, so each question carries the
**default we are proceeding on**. Every default gets a row in
`CHANGES-FOR-APPROVAL.md`, so an unanswered question is a visible pending
decision, not a stall. Answering later changes a string, not the build.

> **This file and the five questions at the top of `CHANGES-FOR-APPROVAL.md` are
> the same conversation at two levels of detail, and they must never state two
> different defaults for one question.** The five are the ones that block launch;
> these nine are the full set, with the register IDs behind each. If a default
> changes in one file it changes in both, in the same edit.
>
> | This file | The five questions | State |
> |---|---|---|
> | Q1 team name | **1** | open |
> | Q3 English is the bank's words | **2** | ✅ **answered 2026-08-03 — a decision taken, not a pending question.** The translations shipped; what remains is NBF sign-off on seven credential lines, which is tracked here and on the pre-launch checklist, not as an unanswered question |
> | Q8 + Q8b stale figures and the CFA claim | **3** | open — **and made more urgent by the answer to Q3**: the CFA sentence now appears in English too |
> | Q5 + Q5b references that point at nothing | **4** | disposed |
> | Q10 who owns the syndicated content | **5** | open |
> | Q2, Q4, Q6, Q7, Q9 | *not in the five — each has a working default and needs no answer to proceed* | |
>
> **One question in this file is now answered, and both documents say so in the
> same words.** An answered question keeps its number and its history — it is not
> deleted — but it states what shipped and what is still owed, so that nobody
> re-asks it and nobody mistakes "answered" for "finished".

---

## 1. Your English site misspells your name — which is right?

Your logo artwork reads **`Wolf Achard Group`** (one R). But the English page
title, the `<h1>`, the nav label, the image alt text and the URL slug all read
**`Wolf A`r`chard`** (two Rs). French says `Achard` everywhere.

> **Q1.** Confirm `Achard` is correct, and that `Archard` is an error on National
> Bank's side across the whole English tree.

**Default:** ship `Archard` verbatim in the English tree exactly as the live site
has it, flagged in the register, and recommend NBF correct it at source. We do
not silently fix a client's own name — but we also will not let it launch
unnoticed.

---

## 2. Which navy is your brand colour?

Your two supplied lockups disagree. Measured out of the SVG artwork itself:

| | Navy | Also |
|---|---|---|
| French lockup | `#274155` | |
| English lockup | `#00324d` | olive `#79755d` on the word `Group` |

Brand red is `#de161d` in both — no conflict there.

> **Q2.** Which navy is correct? Whichever we adopt, the other language's own
> artwork will not match it.

**Default:** use each language's own supplied lockup as-is, and take **no** navy
into the design system — the site's own palette stays warm-paper/ink so the
mismatch is never visible side by side. Flagged for a proper brand answer.

---

## 3. Your English site is mostly National Bank's words, not yours

This is the biggest finding on the project, and it is sharper than "the English
is thinner."

We located National Bank's syndicated content blocks in the page markup
(`experiencefragment` wrappers — the bank injects these at render time, and they
are identical across every advisor microsite on the platform). Censused across
**all sixteen captures**:

| Capture | `experiencefragment` wrappers |
|---|---|
| `fr-nouvelles-articles.html` | **6** |
| `en-news-articles.html` | **6** |
| `en-our-services.html` | 4 |
| `fr-nos-services.html` | 2 |
| all 12 others | **0** |

> ⚠ **Corrected 2026-08-03.** This section previously said the four-against-two
> split was on the services pages and that **"every other page carries none"** —
> generalised from a partial sample that did not include the news captures.
> **The news pages are in fact the most syndicated pages on the site**, which is
> consistent with the platform research: they render from a central AEM
> Experience Fragment, which is why the page node has not been edited in years
> yet shows current content. The same correction is applied to question 2 of the
> five in `CHANGES-FOR-APPROVAL.md`.

Read the three classes separately, because the answer differs for each:

- **News, both languages — 100% National Bank's.** You are the author of none of
  it. That is Q10, not this question.
- **Services — the split depends on which language a prospect reads.** On your
  **English** page the bank supplies the `Our approach` section, **the entire
  seven-service accordion**, the toolbox and the disclaimers. On your **French**
  page only the toolbox and disclaimers come from the bank — the seven service
  descriptions are **your team's own writing**. By word count: French **26.6%**
  the bank's (211 of 794), English **74.0%** (713 of 963).
- **Everything else — authored in place**, though `Notre firme` / `Our Firm` is
  still entirely *about* National Bank rather than about you.

Across the whole site, at most **27.5% of French body words and 15.8% of English**
are demonstrably this team's own rather than shared platform copy. Measured
against one control advisor site, so treat it as a lower bound.

So the asymmetry is not that one page is longer. It is that a prospect reading
you in French hears you, and a prospect reading you in English hears National
Bank. The English page is *larger* (52 list items against French's 5) and *less
yours*.

The same pattern, in the opposite direction, on the rest of the site:

| | French | English |
|---|---|---|
| Home | mission (4), commitments (4), differentiators (3), a philosophy essay, a 4-step process **with a description per step** | **no list items at all**, four bare step labels, no mission / commitments / philosophy |
| Services | team-written prose in every accordion | National Bank's generic "Purpose / Main benefits" boilerplate, plus an `Our approach` section French lacks |
| Team | full biographies for Lysane Tougas and Jean-Francois Gobeil | **no biographies** |

> **Q3.** Do you want the French mission, philosophy and biographies translated
> into English for the rebuild? That is new copy and needs NBF approval, but it
> roughly doubles the English site.

## ✅ Q3 — ANSWERED 2026-08-03. This is no longer a pending question.

**The client said yes, and the prohibition was amended rather than overridden.**

`content/COMPLIANCE.md` **P-16** previously forbade filling the English gap
outright. It now carries a **dated, scope-limited amendment at §6.5** —
*translation of existing French copy only* — naming the six blocks it covers,
listing by name the blocks it does **not**, leaving the reverse direction
(English → French) entirely un-amended, and stating explicitly that it does
**not** grant the §6 editorial-fix amendment. Every `F-` typo row is still
PENDING and every typo on the live site still ships sic. The decision is
`CHANGES-FOR-APPROVAL.md` **D-70**.

**What shipped**

| English page | New block | Translated from | Register |
|---|---|---|---|
| `/en/` | `Our mission`, 4 items | `Notre mission` | NC-20 |
| `/en/` | `Our commitments`, 4 items | `Nos engagements` | NC-21 |
| `/en/` | `Our philosophy`, the essay | `Notre philosophie` | NC-22 |
| `/en/` | `What sets us apart`, 3 items | `Ce qui nous distingue` | NC-23 |
| `/en/team/` | Lysane Tougas — `Biography`, 3 paragraphs | her `Biographie` | NC-24, NC-25 |
| `/en/team/` | Jean-Francois Gobeil — `Biography`, 2 paragraphs | his `Biographie` | NC-26 |

The English home page went from **five sections to eight**. Nothing was
improved, expanded, softened or re-dated on the way across; where the French
carries a defect the English carries the same one, flagged.

**What still needs NBF, and it is the whole of what is left open**

- ⚠ **Seven credential and regulatory lines are now asserted in a second
  language** about two named, licensed individuals: Barreau du Québec since
  1998 (C-10) · bachelor's + master's in law, 2004 (C-11) · `B.B.A`, shipped
  with its live missing period and lowercase `university` (C-14) · **IQPF
  membership since 2015** (C-15) · HEC Montréal diploma (C-16) · **the CFA
  Level III line** (C-17) · **`more than 8 years`** (C-18). **Every one needs
  NBF compliance sign-off before launch** — that is a condition written into
  the amendment itself, not an afterthought. Each is flagged individually at
  `NC-25` / `NC-26`.
- ⚠ **The CFA line is now urgent in two languages.** See Q8b below, which this
  answer has made harder rather than easier.

**What was NOT translated, and each has a reason on file**

| Left in French only | Why |
|---|---|
| FR home `Une gestion de patrimoine sur mesure pour des clients uniques` | Not in the authorisation |
| The four descriptions under `Un processus éprouvé` | Not in the authorisation — **and there is nothing to attach them to**: the English page's four items (`Our personalized approach`, `Our integrity`, `Our professionalism`, `Our transparency`) are *qualities*, not the French *steps*. `CHANGES` D-73 |
| FR firm `Petits détails pour tout savoir` — the Investor Economics ranking | Still prohibited. A stale competitive ranking claim in front of a new audience is a separate decision — `CHANGES` D-20 |
| EN services `Our approach` + its 52 list items | **The reverse direction is not amended at all.** Still prohibited |

**Separately, and not a translation:** `Notre firme` / `Our Firm` now opens with
a short paragraph about the team, assembled from strings already published in
each language (`NC-27` / `NC-28`). That answers **D-15**, not this question, and
it does not rely on the §6.5 amendment.

**The original default, for the record:** reproduce both trees exactly, thin
English included, because inventing content to fill a language gap was
prohibited. That is what the build did until 2026-08-03.

---

## 4. Your services diagram doesn't name you in English

The French services wheel is bespoke artwork reading `Groupe Wolf Achard` / `Vous`
at the centre. The English one is National Bank's generic stock diagram reading
`Your Wealth Advisor` / `Client` — **your team is not named in it at all.**

> **Q4.** May we use the bespoke French wheel, relabelled, on the English page?

**Default:** ship each language's own artwork as captured. Relabelling supplied
brand artwork is not ours to do.

---

## 5. Two images on your French news page are swapped

The `Flash info` card displays the file showing **`GUIDE FISCAL 2025`**, and the
`Guide fiscalité et investissement` card displays the file showing
**`FLASH INFO 2026`**. Both alt texts describe the image that is *not* there. The
English side pairs correctly.

> **Q5.** Fix the pairing? This is a display bug, not a wording change.

**Default:** ship the pairing **corrected** with the alt text matching the image
actually shown, logged as an `F-` row. Shipping a knowingly wrong image with
knowingly wrong alt text fails accessibility for no benefit.

**Applied, and the conflict behind it is resolved.** `content/COMPLIANCE.md`
**N-07** originally said the opposite — leave it crossed, because the defect is
inside National Bank's central fragment and NBF fixes it upstream. **N-07 has
been rewritten** (2026-08-02): its stated risk, a silent revert at NBF's next
republish, cannot occur in a static copy that never re-fetches the fragment, and
the correction changes **no wording**, so §6's missing editorial-fix amendment
does not gate it. Registered as **`F-14`** and **`COMPLIANCE.md` §6.4**.
**The upstream fix is still National Bank's and that row stays open.**

## 5b. Three more references on your site point at nothing

Found after this file was first written; same family as Q5, same kind of answer.

- Your **team page**, both languages, prints ¹ beside `Planificateur financier` /
  `Financial Planner` and ² beside `Conseillère principale, planification
  successorale` — and carries **no legal notes on the page** for them to point at.
- Your **English services page** prints a footnote marker that is not markup: a
  **`₁` character typed into a subscript**, wrapping the whole sentence.
- The same page carries a **stray `*`** with no footnote behind it anywhere.

> **Q5b.** Confirm the repairs, or reverse any of them?

**Default:** **repair all three, changing not one word.** Your standard five-item
`Notes légales` / `Legal Disclaimers` panel is added to the team page so both
markers resolve (`D-14` — the notes are National Bank's standard text, already
published verbatim on your own services page). The `₁` becomes a real superscript
link like its four neighbours (`D-25`). The stray `*` does not ship (`D-26`).
The rule behind all three: **a reference resolves or it does not ship**, and any
page rendering a marker renders the full five-note set, in order.

⚠ **Not touched, and deliberately:** the leading `*` on the French `Notre firme`
ranking note. That one is the **first character of the note itself**, not a
pointer to a missing one — deleting it would edit a regulated string.

---

## 6. Photographs

Four headshots exist, all single-person cut-outs on white: Laurent Achard,
David-Alexandre Wolf, Lysane Tougas, Jean-Francois Gobeil. **There is no group
photo anywhere on the site, in either language.**

> **Q6a.** Is there a team photograph we have not seen?
> **Q6b.** Can a shoot be commissioned? A real photograph of your people is the
> single strongest signal that a site is not a template.
> **Q6c.** Anything this team actually cares about that should show up visually —
> a sport, a cause, the city, the office?

**Default:** build the hero around typography and the headshots, no stock
photography. Any stock used for demo purposes is marked demo-only and
unlicensed in the register.

---

## 7. Facts that contradict themselves on your live site

| Fact | Version A | Version B |
|---|---|---|
| Laurent Achard's languages | `Français, anglais, italien` (FR team) | `English` only (EN team) — and `French, English, Italian` on his EN profile |
| Advisor count | `près de 850` (FR) | `over 850` (EN) |
| Your English address | `1, Place Ville-Marie Suite 1700` (contact) | `1 Place Ville-Marie, Suite 1700` (profiles) |

> **Q7.** Which is right in each case?

**Default:** each page ships its own verbatim string. We do not harmonise
contradictory facts about licensed advisors.

---

## 8. National Bank figures on your firm page are stale

`424 milliards de dollars **au 31 octobre 2023**` · `31 243 employés` (same 2023
basis) · social media listed as `Facebook, LinkedIn et **Twitter**` (renamed X in
July 2023) · and, French only, a 5th-place ranking sourced to
`Investor Economics (**mars 2019**)` — over seven years old.

> **Q8.** Ask NBF for refreshed figures, or drop the stale ones?

**Default:** ship verbatim with the stated as-at dates intact, flagged. Undated
rounding of a bank's balance-sheet figure is exactly how a compliance problem
gets created. *(`COMPLIANCE.md` C-35, C-36, C-37, C-40; R-10.)*

## 8b. And one credential claim that is ageing faster than any of them

Jean-Francois Gobeil's French biography, on a page carrying **no date**:

- **`se prépare actuellement pour l'examen du CFA niveau III`** — *is currently
  preparing.* Since it was written he has passed, failed or stopped. In all three
  cases the present tense is now wrong, and **CFA Institute rules constrain how
  candidacy may be described in public material.**
- **`plus de 8 ans d'expertise-conseil`** — a rolling count from an unstated year.

> **Q8b.** What should each of these say now? A corrected sentence has to come
> from Jean-Francois or NBF compliance, not from us.

**Default:** ship both exactly as they read. Rewording a credential claim about a
named, licensed individual is not a builder's call. **This is the one question on
the list that should be answered before launch rather than after** — it is the
fastest-decaying sentence on the site. *(`COMPLIANCE.md` C-17, C-18; R-07.)*

> ⚠ **UPDATED 2026-08-03 — answering Q3 raised the stakes on this one.**
> Both sentences are now published **in English as well**, translated faithfully
> under the §6.5 amendment: `is currently preparing for the CFA Level III exam`
> and `more than 8 years of advisory expertise`. `actuellement` is preserved as
> `currently` and the digit `8` is preserved as `8`, because a translation may
> not quietly improve its source — softening either would have been exactly the
> silent rewording this question exists to prevent.
>
> **The English is written to be the smallest claim available**: never
> `CFA Level III candidate`, never `CFA candidate`, never `pursuing the CFA
> charter`. CFA Institute rules constrain how candidacy may be described in
> public material, and all three of those say more than the French does.
>
> **Two consequences.** The sentence now decays on two pages in front of two
> audiences — and **one corrected sentence from Jean-Francois or NBF compliance
> now fixes both at once.** *(`CHANGES` NC-26, lines (a) and (c).)*

---

## 9. Standing permissions

> **Q9a.** May we fix mechanical typos — truncated words, doubled spaces, missing
> accents — each logged for your sign-off? (Examples found: `patrimoin `,
> `sante financière`, `qui lui sont propre`, `à l'intérieure`, `Adress picto `.)
> **Q9b.** Final domain?
> **Q9c.** May we commit and redeploy the private demo link freely?

**Defaults:** ship all typos verbatim until a §6 policy amendment is signed ·
placeholder domain in one config constant · demo redeploys freely, `noindex` and
`robots: Disallow: /` throughout, because it carries National Bank marks without
their approval.

**Q9a is untouched by Q5 and Q5b, and the distinction is the whole point.** §6
gates changes to **wording**. Nothing in Q5 or Q5b changes a word: `F-14`
exchanges two image files, `D-25` changes an element type, `D-26` removes a
pointer to a footnote that does not exist, `D-14` adds text already published
verbatim elsewhere on your own site. **Every typo in Q9a is still shipped exactly
as your site has it** — `F-01` … `F-13` all sic. *(`COMPLIANCE.md` §6.4 and §7
check 49 record the boundary so no later audit reads `F-14` as an unauthorised
editorial fix.)*

---

## 10. Who owns the syndicated content after launch?

Your `Nouvelles et articles` / `News & articles` page is written by National Bank
and injected when the page loads — you wrote none of it, and roughly **112 other
advisors publish the identical page.** The four advisor profile pages are
syndicated too, from a different source. **Today they update themselves. On a
static site they will not.**

> **Q10.** Who runs the freshness check, and how often?

**Default — and this is the one question with no default we can take for you.**
We pinned **no** dated file, so the "read the latest version" documents keep
refreshing on their own, and `npm run check:nbf` reports what has moved since
capture. But the rotating items — three featured articles, two videos, the
campaign block — go stale silently, with nothing visibly broken. Three options,
cheapest first: run the check on a schedule and update by hand; point the
rotating items at National Bank's own hub pages, which never go stale; or pull
the bank's content at build time, which restores automatic updating and costs the
most to set up. **Assign an owner before launch.** *(`CHANGES-FOR-APPROVAL.md`
S-01 … S-08 and AP-06; `COMPLIANCE.md` P-14, AP-03.)*
