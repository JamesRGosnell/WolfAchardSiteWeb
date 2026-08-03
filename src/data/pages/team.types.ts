import type { Locale, SiteImage } from '../types';

/**
 * Shape of the ÉQUIPE / OUR TEAM page content, both languages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THE TWO PAGES SHARE, AND WHERE THEY DIVERGE
 *
 * Unlike the home pages, the two team pages have the SAME five sections in the
 * same order. Measured from `fr-notre-equipe.html` / `en-our-team.html`:
 *
 *   section                       FR                        EN
 *   ───────────────────────────── ───────────────────────── ─────────────────────────
 *   hero banner                   bespoke team artwork      NBF generic stock
 *   intro (H2 + 2 paragraphs)     yes                       yes, different sentences
 *   advisors (H2 + 2 cards)       yes                       yes
 *   partners (H2 + 2 cards)       yes, WITH biographies     yes, TRANSLATED §6.5
 *   contact block                 yes                       yes  ← see below
 *
 * THE ONE GAP WAS THE BIOGRAPHIES, AND IT IS NOW CLOSED BY TRANSLATION. French
 * carries two `Biographie` accordions — Lysane Tougas and Jean-Francois Gobeil
 * — running to five paragraphs of credential claims (Barreau du Québec 1998, a
 * maîtrise en droit 2004, a B.B.A, IQPF membership since 2015, a CFA level III
 * exam in preparation). The live English page carries ZERO, and P-16 prohibited
 * translating them. ⚠ **The client amended P-16 on 2026-08-03**
 * (`content/COMPLIANCE.md` §6.5): the two panels may be closed BY TRANSLATION
 * of the published French copy, faithfully, with every credential line flagged
 * individually and every one needing NBF sign-off. NC-24 … NC-26.
 *
 * `bio` STAYS OPTIONAL. Two reasons, and neither is inertia: the two advisors
 * in `advisors.ts` have no biography in either language and never did, and the
 * amendment is reversible in one line per partner if NBF declines a credential
 * line. There is still no empty-accordion state anywhere in this type — a
 * partner without a `bio` renders nothing at all, not a placeholder.
 *
 * THE CONTACT BLOCK IS NOT IN THIS TYPE. Both live pages end with `Contactez-nous`
 * / `Contact us`, the `Obtenez les coordonnées…` / `Get contact information…`
 * sentence and the two direct numbers. D-07 moved that exact block into the
 * site footer, where it now renders on every page. Re-declaring it here would
 * print it twice on this page.
 *
 * THE ADVISORS ARE NOT IN THIS TYPE EITHER. Their names, titles, phones, emails,
 * languages and headshots come from `src/data/advisors.ts`, which the profile
 * pages read from too — that is the single source that stops the team page and
 * the profiles drifting. Only the section HEADING lives here.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * VERBATIM
 *
 * Every client-facing string in `team.fr.ts` / `team.en.ts` was lifted from the
 * capture character-for-character, including U+00A0 (written ` `), U+2019
 * (written `’`) and the places the live markup uses a plain U+0027 instead —
 * the FR page mixes both, sometimes in adjacent elements. Verify with:
 *
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/team.fr.ts \
 *        --capture source-assets/html/fr-notre-equipe.html
 */

/**
 * One image on this page. `SiteImage`, aliased.
 *
 * VERBATIM `alt` where the live site has one worth keeping; NEW COPY (NC-05)
 * for the people, where it does not. `''` means the live `<img>` carries a
 * valueless `alt` attribute — both team hero banners do, in both languages, so
 * they ship decorative exactly as live. P-9: alt asserts nothing, and with no
 * group photograph anywhere on this site, nothing may be described as "the
 * team". `widths` never exceeds the source width (partner headshots are 350px).
 */
export type TeamImage = SiteImage;

export interface TeamHero {
  /**
   * The client's VERBATIM live `<h1>`. Ships exactly as captured, at whatever
   * size the hierarchy wants — it is NOT the large visual line.
   */
  heading: string;
  /**
   * The large display line, >=56px, in a NON-HEADING element.
   *
   * NOT new copy: it is the live `<p>` that already sits immediately after the
   * `<h1>` inside the same AEM teaser (`cmp-teaser__description`), promoted to
   * display size — exactly the device the home page uses. Nothing was written
   * and nothing was replaced, so no `NC-` row arises from the hero.
   */
  message: string;
  banner?: TeamImage;
}

/** `Ensemble, nous œuvrons…` / `We work together…` — H2 plus its paragraphs. */
export interface TeamIntro {
  heading: string;
  /** Plain paragraphs. Neither language carries inline `<b>` or links here. */
  body: string[];
}

/**
 * A partner / collaborator — Lysane Tougas and Jean-Francois Gobeil.
 *
 * They are NOT advisors and they are NOT in `advisors.ts`: they publish no
 * phone, no email and no profile page, they carry an employer line the advisors
 * do not, and their titles are the only two strings on this page that carry a
 * disclaimer marker.
 */
export interface Partner {
  /**
   * VERBATIM name. The French heading for Gobeil ends with a TRAILING U+00A0 and
   * the English one does not — reproduce each. Both spell him `Jean-Francois`
   * WITHOUT the cedilla, while the French biography body spells him
   * `Jean-François` WITH one, in the same paragraph on the same page. N-04: a
   * person's name is not a mechanical typo. Both ship as found.
   */
  name: string;
  /** VERBATIM regulated title. C-09 / C-13. Never re-cased, never translated. */
  title: string;
  /**
   * Disclaimer numbers attached to the title, rendered as real `<sup>` links
   * into `<LegalNotes>`.
   *
   * P-12: any page rendering one of these MUST render the complete 1–5 set on
   * the same page. The live team page renders these markers with NO accordion,
   * in BOTH languages — see the header comment in `team.fr.ts`.
   */
  noteRefs: number[];
  /** VERBATIM employer line. Differs from the advisors' — they have none. */
  org: string;
  image: TeamImage;
  /**
   * `Biographie` / `Biography` accordion. Present in BOTH languages since
   * 2026-08-03 — the English text is a translation of the French, made under
   * the P-16 amendment in `content/COMPLIANCE.md` §6.5 (NC-24 … NC-26).
   *
   * Every paragraph is a credential or experience claim about a named, licensed
   * individual (C-10 … C-19). None may be edited, summarised, excerpted,
   * strengthened or re-dated. The English is a faithful rendering of the French
   * and nothing else; the French keeps `[KEEP VERBATIM]` and is the source of
   * record. `undefined` still means the person genuinely has none — which is
   * the case for both advisors, in both languages.
   */
  bio?: { heading: string; paragraphs: string[] };
}

export interface TeamContent {
  locale: Locale;
  meta: {
    /** Live `<title>` minus the brand suffix `BaseLayout` appends. */
    title: string;
    /** Live `meta[name=description]`, verbatim. */
    description: string;
  };
  hero: TeamHero;
  intro: TeamIntro;
  /** `Notre équipe d'experts` / `Our team of experts` — heading only; the cards
   *  render from `advisors.ts`. */
  advisorsHeading: string;
  partners: {
    /** `Nos partenaires` / `Our partners`. */
    heading: string;
    people: Partner[];
  };
  /**
   * Disclaimer numbers this page's markers point at. Documentation and emphasis
   * only — `<LegalNotes>` ALWAYS renders all five, in order. `refs` selects
   * which markers appear, never which notes render (P-13).
   */
  legalRefs: number[];
}
