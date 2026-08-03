# Build context — Groupe Wolf Achard

Read this first. Every agent on this project shares it.

## What we are building

A bilingual (FR/EN) static rebuild of **Groupe Wolf Achard**'s National Bank
Financial advisor microsite, for Leadlord.ai. It is a **spec/pitch build** — the
client has not commissioned it and cannot answer questions mid-build, so
unanswered decisions proceed on a documented default and get a register row.

The playbook is the skill at `C:\Users\james\.claude\skills\nbc-advisor-site\`.
**Read `SKILL.md` and the reference files it points at before starting.** The
reference implementation is `C:\Users\james\Documents\Github\CompagnatReiseSiteWeb`
— when something is ambiguous, read that repo; it shipped.

## The live site (verified by recon, `recon.json`)

| | French | English |
|---|---|---|
| Slug | `groupe-wolf-achard` | `wolf-archard-group` ← note the different spelling |
| Host | `https://www.fbngp.ca/conseiller/` | `https://www.nbfwm.ca/advisor/` |

8 live pages per language, no French-only pages, no dead links:

```
<team>.html                          home
<team>/notre-equipe.html             our-team.html
<team>/nos-services.html             our-services.html
<team>/nouvelles-articles.html       news-articles.html
<team>/notre-firme.html              our-firm.html
<team>/nous-joindre.html             contact-us.html
<team>/notre-equipe/laurent-achard.html          our-team/laurent-achard.html
<team>/notre-equipe/david-alexandre-wolf.html    our-team/david-alexandre-wolf.html
```

Two advisors: **Laurent Achard**, **David-Alexandre Wolf**.
Emails: `laurent.achard@bnc.ca`, `davidalexandre.wolf@bnc.ca` (FR);
the EN tree uses `@nbc.ca` — verify per page, never translate an address.

## Already established — do not re-derive

**The five numbered disclaimers are platform-standard.** Verified byte-identical
between this team and Compagnat Reise, in both languages. They are pre-filled in
the skill's `assets/COMPLIANCE.template.md`. **Diff them against the live page;
do not re-transcribe.** Same for the footer legal link bar, the accordion title,
and the regulator marks (`ocri.svg`, `fcpi.svg`).

**CORRECTION (2026-08-02).** An earlier version of this file said
`nos-services.html` renders zero `<sup>` markers. **That was wrong** — it renders
one, `<sup> 1, 2, 3</sup>` (note the leading space inside the tag), on
`Certains services sont offerts par des tiers`. The archive agent caught it.
Trust the archive over this file wherever they disagree.

**Marker discipline, as captured:**

| Page | markers | accordion | verdict |
|---|---|---|---|
| `fr-nos-services` / `en-our-services` | present | yes | resolves |
| `fr-notre-equipe` **and** `en-our-team` | `2`, `1` | **no** | **orphan — P-12, both languages** |
| the other 12 pages | none | no | consistent |

Also: **disclaimers 4 and 5 are never cited by any marker, in either language.**
EN services wraps one disclaimer in `<sub>` with a literal U+2081 SUBSCRIPT ONE
instead of a `<sup>` element, and carries a stray `*` with no footnote anywhere.
FR `notre-firme`'s accordion opens with a `*` that likewise references nothing.

**The English site misspells the team's own name.** The logo artwork reads
`Wolf Achard Group` (one R). The English `<title>`, `<h1>`, nav label, alt text
and URL slug all read `Wolf A**r**chard`. French is `Achard` throughout. Ship
verbatim; this is the single highest-value finding for the client conversation.

**The two language trees are not translations of each other — they are different
sites.** FR home has 11 list items plus mission, commitments, differentiators, a
philosophy essay and a described 4-step process; EN home had **zero** list items
and bare unlabelled steps. FR services has 5 list items, EN has 52 and an entire
`Our approach` section FR lacks. FR team page carries two biographies; EN carried
none.

> ⚠ **AMENDED 2026-08-03 — the client authorised closing part of that gap.**
> `content/COMPLIANCE.md` **§6.5** is a dated, scope-limited amendment to P-16:
> **translation of existing French copy only.** Six blocks are now translated
> into English — the home page's mission, commitments, philosophy and
> differentiators, and the team page's two biographies (`CHANGES` NC-20 … NC-26,
> D-70). **Everything else in this paragraph stands.** Authoring English copy is
> still prohibited; the FR home intro, the four described process steps and the
> FR-only ranking note are still FR-only; and **the reverse direction is not
> amended at all** — the EN services page's `Our approach` section and its 52
> list items must **not** be translated into French. Read §6.5 before writing any
> English string; the imbalance that remains is still a finding for the client.

**Both team pages serve three complete nested HTML documents** — 3×`<html>`,
3×`<head>`, 3×`<body>`, three conflicting canonicals, consent script loaded six
times. Reproduce the *content*, obviously not the nesting.

**Brand colours conflict between the supplied lockups:** FR navy `#274155`,
EN navy `#00324d`, plus an olive `#79755d` used only for the word `Group` in
English. Brand red is `#de161d` in both. Whichever navy the rebuild adopts, the
other language's own artwork will not match it. **Client decision — do not pick.**

**Syndicated by National Bank, not this team's content:**
`nouvelles-articles.html` / `news-articles.html` (central AEM Experience
Fragment) and both advisor profile pages (structured advisor records). Read
`references/nbf-platform.md` before touching either. Never pin a dated PDF
filename.

## Standing rules

- **VERBATIM** — client-facing strings character-for-character from the live
  site, typos included.
- **NEVER INVENT** — no statistic, disclaimer, credential, relationship or
  regulatory phrase the live site does not carry.
- **LANGUAGE PURITY** — FR pages carry only FR lockups/URLs/emails/marks; EN only
  the EN set. Grep both directions.
- **Every deviation gets a row** in `CHANGES-FOR-APPROVAL.md`, in ID order,
  preserving rows other agents added.
- Do not normalise apostrophes or non-breaking spaces. The live markup mixes
  U+0027 and U+2019 inside single sentences; reproduce the raw HTML.

## Reporting

Report measurements, not impressions. State what you could not verify. Never
report a phase complete without verification numbers.
