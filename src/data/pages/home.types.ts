import type { Locale, LinkItem, Run, RichText, ContactLine, SiteImage, SiteContactBlock } from '../types';

/**
 * Shape of the HOME page content, both languages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY ALMOST EVERY SECTION IS OPTIONAL
 *
 * The two home pages are NOT translations of each other. They are different
 * pages that happen to share a header. Measured from the captures:
 *
 *   section                     FR (fr-home.html)        EN (en-home.html)
 *   ─────────────────────────── ──────────────────────── ────────────────────
 *   hero banner                 bespoke team artwork     NBF generic stock
 *   intro (H2 + prose + photo)  yes                      — (still absent)
 *   `Personalized support`      —                        yes
 *   `Discover our company`      —                        yes (H3 + two H4s)
 *   mission / commitments       8 list items             8, TRANSLATED §6.5
 *   philosophy essay            yes                      yes, TRANSLATED §6.5
 *   differentiators             3 list items             3, TRANSLATED §6.5
 *   process                     4 steps, H3 + a described 4 DIFFERENT items,
 *                               paragraph each           bare <p>, no prose
 *   news teasers                3                        3
 *   contact block               yes                      yes
 *
 * ⚠ P-16 WAS AMENDED BY THE CLIENT ON 2026-08-03 (`content/COMPLIANCE.md` §6.5).
 * Four of the five gaps above are now closed **by translation of the published
 * French copy and by nothing else** — see `home.en.ts`, which quotes the French
 * source beside every English string. Authoring English copy is still
 * prohibited, and the amendment does not run the other way at all.
 *
 * TWO GAPS REMAIN OPEN AND EVERY FIELD BELOW IS STILL OPTIONAL, because they
 * are still real: `intro` has no English counterpart, and the four process
 * items are not the same four things in the two languages (qualities vs steps),
 * so `ProcessStep.description` is still English-absent by nature rather than by
 * omission. The gap is expressed structurally — an absent section is
 * `undefined` here and the page component renders nothing at all for it. There
 * is deliberately no "empty" or "placeholder" state anywhere in this type: a
 * heading can never appear over an absent list, because the heading and the
 * list are the same object.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * VERBATIM
 *
 * Every client-facing string here was lifted from `source-assets/html/*.html`
 * character-for-character, including U+00A0 (written ` `), U+2019 (written
 * `’`) and the places the live markup uses a plain U+0027 apostrophe
 * instead. Two mission items carry a TRAILING U+00A0; that is in the capture and
 * it ships. Never "tidy" one of these strings — verify with:
 *
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/home.fr.ts \
 *        --capture source-assets/html/fr-home.html
 */

/**
 * One inline run of a paragraph, and a paragraph as an ordered list of runs.
 *
 * The live copy carries `<b>` emphasis and one inline link INSIDE sentences.
 * Flattening those to a plain string would drop client formatting; storing the
 * whole sentence as one literal would also make the verbatim sweep fail, because
 * the sweep replaces a stripped tag with a space and the capture therefore has
 * no contiguous run matching the flattened sentence. Splitting at the tag
 * boundary keeps both the emphasis and the byte-exactness.
 *
 * THE ONE INLINE LINK ON THIS PAGE IS INTERNAL. `Personalized support` links
 * the word `team` to this site's own team page, so it carries no `external`
 * flag and opens in the same tab — unlike every inline link on the firm page.
 *
 * Declared once in `../types` and re-exported here: three page trees had
 * written the same type independently. Every existing
 * `import type { RichText } from './home.types'` still resolves.
 */
export type { Run, RichText };

/**
 * One image on this page. `SiteImage`, aliased — five page trees had declared
 * the identical shape.
 *
 * VERBATIM `alt` from the capture. `''` means the live `<img>` carries a
 * valueless `alt` attribute — the two hero banners do, in both languages, so
 * they ship decorative exactly as live. P-9: alt text asserts nothing, and
 * nothing here may be called "the team" (there is no group photograph anywhere
 * on this site). `widths` never exceeds the source width.
 */
export type HomeImage = SiteImage;

export interface HomeHero {
  /**
   * The client's VERBATIM live `<h1>`. It ships exactly as captured, at whatever
   * size the hierarchy wants — it is NOT the large visual line.
   */
  heading: string;
  /**
   * The large display line, >=56px, rendered in a NON-HEADING element.
   *
   * This is NOT new copy in either language: it is the live `<p>` that already
   * sits immediately after the `<h1>` inside the same AEM teaser
   * (`cmp-teaser__description`), promoted to display size. Visual hierarchy and
   * heading hierarchy are separate problems; no `NC-` row is needed because
   * nothing was written and nothing was replaced.
   */
  message: string;
  banner?: HomeImage;
}

/**
 * Heading + prose + optional photograph.
 *
 * Used by the FR-only `intro` (`Une gestion de patrimoine…`, still untranslated
 * — §6.5's exclusion list) and by the EN-only `support` (`Personalized
 * support`, which must not be translated into French).
 */
export interface HomeProse {
  heading: string;
  body: RichText[];
  image?: HomeImage;
}

/** Heading + list. The two are one object so a heading cannot outlive its list. */
export interface HomeList {
  heading: string;
  items: string[];
  image?: HomeImage;
}

/** `Notre philosophie` / `Our philosophy` (NC-22). One heading, one essay. */
export interface HomeEssay {
  heading: string;
  body: RichText;
}

/** EN only — `Discover our company`: H2, photo, one H3, two H4 + prose pairs. */
export interface HomeCompany {
  heading: string;
  image?: HomeImage;
  /** `Our purpose` — an H3 with no prose of its own on the live page. */
  subheading: string;
  points: { heading: string; body: RichText }[];
}

export interface ProcessStep {
  icon: HomeImage;
  title: string;
  /**
   * FR carries a described paragraph per step; EN carries none, and §6.5 does
   * NOT authorise translating the French ones into these slots. The two
   * languages list four DIFFERENT items here — French steps (`Faisons
   * connaissance`…) against English qualities (`Our personalized approach`…) —
   * so a French description attached to an English label would describe the
   * wrong item. D-73.
   */
  description?: string;
}

export interface HomeProcess {
  heading: string;
  lead: string;
  /**
   * The live element of a step title. FR uses `<h3>`; EN uses a bare `<p>`.
   * Reproducing this keeps each language's document outline identical to live,
   * AND it is what selects the layout: `h3` (with descriptions) renders as
   * hairline-ruled rows, `p` renders as the compact single-line rail.
   */
  titleAs: 'h3' | 'p';
  steps: ProcessStep[];
}

export interface NewsTeaser {
  image: HomeImage;
  title: string;
  blurb: string;
  href: string;
}

export interface HomeNews {
  heading: string;
  teasers: NewsTeaser[];
  allLink: LinkItem;
}

/**
 * One phone or email row. The two languages format phone numbers DIFFERENTLY
 * (`514 395-1937` vs `514-395-1937`) and use different mail domains
 * (`@bnc.ca` vs `@nbc.ca`). Never derive one from the other.
 */
export type { ContactLine };

/**
 * The closing contact block. `<h3>` on the live page in both languages — not an
 * `<h2>`. The page that renders it MUST pass `showFooterCta={false}` to
 * `<BaseLayout>`, or the footer band prints the same call to action again
 * (D-11).
 */
export type HomeContact = SiteContactBlock;

export interface HomeContent {
  locale: Locale;
  meta: {
    /** Live `<title>` minus the brand suffix `BaseLayout` appends. */
    title: string;
    /** Live `meta[name=description]`, verbatim. */
    description: string;
    /* NO `ogImageAlt` here. `og:image:alt` is owned by `BaseLayout`, which
       reads it from `src/data/{fr,en}.ts` and exposes no per-page override — so
       a value here would be dead data that reads as if it were shipping. It is
       currently `[[TODO-ARCHIVE]]` in both dictionaries; reported as friction. */
  };
  hero: HomeHero;

  /* ---- FR-only. `undefined` in English, and that is still the point. ----- */
  /** `Une gestion de patrimoine sur mesure…`. Excluded from §6.5. */
  intro?: HomeProse;

  /* ---- Translated into English under §6.5 (NC-20 … NC-23). --------------- */
  /** `Notre mission` and `Nos engagements` / `Our mission` and `Our commitments`,
   *  in the French page's live order. */
  lists?: HomeList[];
  essay?: HomeEssay;
  /** `Ce qui nous distingue` / `What sets us apart`. The English block carries
   *  no photograph — D-72. */
  distinctions?: HomeList;

  /* ---- EN-only blocks. `undefined` in French, and NOT to be translated. --- */
  support?: HomeProse;
  company?: HomeCompany;

  /* ---- Present in both, structured differently. -------------------------- */
  process: HomeProcess;
  news: HomeNews;
  contact: HomeContact;
}
