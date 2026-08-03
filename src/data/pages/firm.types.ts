import type { Locale, Run, RichText, ContactLine, SiteImage, SiteContactBlock } from '../types';

/**
 * Shape of the FIRM page content (`Notre firme` / `Our Firm`), both languages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THIS PAGE IS
 *
 * It is 100% National Bank corporate boilerplate. Measured: every string on
 * both captures belongs to FBNGP/NBFWM or to Banque Nationale du Canada, and
 * **not one sentence is about Groupe Wolf Achard**. The only team-specific data
 * on the page is the two advisors' phone numbers and email addresses in the
 * closing contact block. That is a finding for the client (D-15), not a gap to
 * fill: writing copy about this team's own firm would be invented content (P-5).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * FIGURES — THE REASON THIS FILE IS COMMENTED THIS HEAVILY
 *
 * The page carries the site's stalest numbers, and each of them is a §4 claim
 * with its own row. **Every figure ships welded to whatever the source says
 * about it** — its wording, its as-at date if it has one, its non-breaking
 * spaces. Three rules follow, and none of them is negotiable:
 *
 *  1. A DATED figure never loses its date. `424 milliards de dollars au 31
 *     octobre 2023` / `$424 billion in assets as at October 31, 2023` is
 *     defensible *because* of the date. It stays inside its sentence (C-36).
 *  2. An UNDATED figure never acquires one. The four `Un puissant allié` /
 *     `A strong partner` figures carry no source and no as-at date on the live
 *     site (C-31…C-34). The rebuild ships them with none. Inventing an
 *     attribution is P-1/P-6 territory. Flagged as D-16 instead.
 *  3. NO figure is re-cut as a display numeral. Each stat renders as the whole
 *     live sentence with the live `<b>` run kept as emphasis — never a 64px
 *     `424` over a caption. Splitting a bank's number away from its own words
 *     is how an undated figure starts looking like a promise. See StatBand.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHITESPACE — THIS PAGE HOLDS ALL THREE OF THE SITE'S U+202F
 *
 * Measured across all 12 captures: **102 U+00A0 and exactly 3 U+202F**, and all
 * three narrow no-break spaces are on `en-our-firm.html`:
 *
 *   `More than⟦U+202F⟧$200 billion in assets`     (C-32)
 *   `$424⟦U+202F⟧billion`                          (C-36)
 *   `31,243⟦U+202F⟧employees`                      (C-37)
 *
 * The French page uses U+00A0 for the same job, including as the thousands
 * separator in `31⟦U+00A0⟧243`. Fold either character to a plain space and the
 * number can break across a line — and the string is no longer the approved
 * one. Verify with the sweep run STRICT, never `--loose-space`:
 *
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/firm.fr.ts \
 *        --capture source-assets/html/fr-notre-firme.html
 */

/**
 * One inline run of a paragraph.
 *
 * Now declared once in `../types` and re-exported here. It used to be
 * re-declared in this file because `home.types.ts` documents itself as the home
 * page's contract and a page build could not create the shared module.
 *
 * ⚠ EVERY INLINE LINK ON THIS PAGE IS `target="_blank"` IN THE CAPTURE — all
 * four in French, all four in English. That is now carried in the DATA as
 * `external: true` on each link run rather than hard-coded into a page-local
 * renderer, so the fact is visible where the links are and the shared <Prose>
 * needs no page-specific behaviour.
 */
export type { Run, RichText };

/**
 * One image on this page. `SiteImage`, aliased.
 *
 * VERBATIM `alt` from the capture. `''` means the live `<img>` carries a
 * valueless `alt` attribute — the firm hero banner does, in both languages, so
 * it ships decorative exactly as live. Alt text is never invented (P-9, N-12).
 * `widths` never exceeds the source width (2000px banner, 474px photos).
 */
export type FirmImage = SiteImage;

export interface FirmHero {
  /** The client's VERBATIM live `<h1>` — `À propos` / `About us`. */
  heading: string;
  /**
   * The large display line, >=56px, in a NON-HEADING element.
   *
   * Not new copy: it is the live `<p>` sitting immediately after the `<h1>`
   * inside the same AEM teaser (`cmp-teaser__description`). Note the two
   * languages punctuate it differently — FR `Financière Banque Nationale –
   * Gestion de patrimoine` uses U+2013 EN DASH, EN `National Bank Financial -
   * Wealth Management` uses U+002D. Per-language verbatim; not harmonised.
   */
  message: string;
  banner?: FirmImage;
}

/** Heading + prose. `Le partenaire financier des familles canadiennes`. */
export interface FirmIntro {
  heading: string;
  body: RichText[];
}

/**
 * One figure in the `Un puissant allié` / `A strong partner` band.
 *
 * `text` is the WHOLE live sentence as runs, with the live `<b>` span kept as a
 * `strong` run. There is deliberately no `value` / `label` split: that split is
 * exactly the "re-cut as a display numeral" this page may not do.
 */
export interface FirmStat {
  icon: FirmImage;
  text: RichText;
}

export interface FirmStatBand {
  heading: string;
  stats: FirmStat[];
}

/** A heading + prose + photograph block. Used by the news and parent-bank bands. */
export interface FirmSplit {
  heading: string;
  /** Second-level heading under `heading`, where the capture has one. */
  subheading?: string;
  body: RichText[];
  image?: FirmImage;
  /** Which side the photograph sits on, matching the live 5/7 grid. */
  mediaSide: 'start' | 'end';
}

/**
 * FR ONLY — the `Petits détails pour tout savoir` accordion.
 *
 * The English firm page has neither this accordion nor the ranking claim it
 * discloses. **Do not create an English equivalent** (P-16, C-35, §1.7). Its
 * live position is between the parent-bank block and the closing contact block,
 * and it stays there.
 *
 * `body` opens with a literal `*` that references nothing anywhere on the page
 * — verified: zero `<sup>` and zero `<sub>` in the capture, and no other `*` in
 * the body copy. Deleting the orphan `*` removes a disclosure signal; adding a
 * matching footnote invents regulatory wording (P-6). It ships as found (N-15).
 */
export interface FirmNote {
  title: string;
  body: string;
}

/**
 * One phone or email row. FR spaces the phone numbers and uses `@bnc.ca`; EN
 * hyphenates them and uses `@nbc.ca`. Never derive one from the other.
 */
export type { ContactLine };

/**
 * The closing contact block. `<h3>` on the live page in both languages.
 *
 * C-24 / N-06. THIS PAGE is the one that title-cases the English button label:
 * `See Our Contact Details` here against `See our contact details` on the other
 * four English pages. Ship each page's own string; do not harmonise — which is
 * exactly why this block still renders rather than deferring to the footer
 * band. The page therefore passes `showFooterCta={false}` (D-11).
 */
export type FirmContact = SiteContactBlock;

export interface FirmContent {
  locale: Locale;
  meta: {
    /** Live `<title>` minus the brand suffix `BaseLayout` appends. */
    title: string;
    /** Live `meta[name=description]`, verbatim. */
    description: string;
  };
  hero: FirmHero;
  intro: FirmIntro;
  stats: FirmStatBand;
  /** `Suivez l'actualité financière` — photo LEFT, text RIGHT, as live. */
  publications: FirmSplit;
  /** `À propos de la Banque Nationale` — text LEFT, photo RIGHT, as live. */
  parentBank: FirmSplit;
  /** FR only. `undefined` in English, and that is the point. */
  note?: FirmNote;
  contact: FirmContact;
}
