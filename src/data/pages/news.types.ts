import type { ImageMetadata } from 'astro';
import type { Locale } from '../types';

/**
 * Shape of the NEWS page content, both languages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS PAGE IS NOT THE CLIENT'S CONTENT.
 *
 * Every word, image and link below is authored centrally by National Bank and
 * injected into ~112 advisor microsites from one AEM Experience Fragment
 * (`/content/experience-fragments/fbngp/nouvelles-et-articles-3/quebec/…`).
 * Groupe Wolf Achard did not write it, cannot be credited with it, and does not
 * control when it changes. See `references/nbf-platform.md`.
 *
 * Three consequences bind this file:
 *
 *  1. **Every publication URL ships EXACTLY as captured, and no dated filename
 *     is ever pinned.** Most of these PDFs sit at stable paths National Bank
 *     overwrites in place, which is why the link labels literally promise
 *     `Lire la dernière version` / `Read the latest version`. Freezing
 *     `…-2026-06.pdf` in here would silently break that promise while still
 *     returning HTTP 200 — the failure is invisible. All 34 linked PDFs were
 *     verified live with `last-modified` between 2026-07-10 and 2026-07-31.
 *  2. **The catalogue is not ours to improve.** Nothing here is deduplicated,
 *     reordered, retitled or balanced between languages. Where the two
 *     languages disagree — a card English has that French lacks, four items
 *     listed in a different order, the same publication pair credited to two
 *     different research groups — each language reproduces ITS OWN page.
 *  3. **A static rebuild ends the automatic refresh the advisor has today.**
 *     That is a client decision, registered, not something this file can solve.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * VERBATIM
 *
 * These strings were EXTRACTED from `source-assets/html/{fr,en}-*.html`
 * programmatically, not retyped: ordinary whitespace collapsed, U+00A0 and
 * U+2019 preserved, nothing trimmed that the markup did not trim. Invisible
 * characters are written as ` ` escapes so a formatter cannot eat them and
 * a reviewer can see them. Verify with:
 *
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/news.fr.ts \
 *        --capture source-assets/html/fr-nouvelles-articles.html
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT IS *NOT* IN HERE, AND WHY
 *
 *  · **The video iframes.** The live page embeds two YouTube players per
 *    language. This site makes ZERO third-party requests — a stated
 *    differentiator — so each video ships as an OUTBOUND LINK carrying the
 *    captured player URL verbatim, plus the transcript the live page already
 *    publishes beside it. Registered as S-03. There is deliberately no
 *    `embedHtml` field anywhere in this type: an embed must not be
 *    representable.
 *  · **The empty `<h2>` shells.** The live French page renders FOUR headings
 *    reading `Nouvelles et articles` with no content under any of them (English
 *    renders three of the same). They are artefacts of the nested fragment
 *    stack. Registered as S-01.
 *  · **The closing `Contactez-nous` / `Contact us` block.** It is identical to
 *    the block D-07 already moved into the site footer, so rendering it here
 *    would print the same three sentences and two phone numbers twice on one
 *    page.
 */

/** A card image. VERBATIM `alt`; `''` means the live `<img>` is decorative. */
export interface NewsImage {
  src: ImageMetadata;
  /**
   * VERBATIM `alt` from the capture — INCLUDING leading/trailing spaces where
   * the live markup has them, and including alt text that does not match its
   * picture. P-9: writing replacement alt for National Bank's artwork is
   * authoring, not correcting.
   */
  alt: string;
}

/** Image + a title that IS the link. Trump documents, Spotlight articles. */
export interface DocCard {
  image: NewsImage;
  title: string;
  href: string;
}

/** Same, plus the blurb the live markup puts after a `<br />`. */
export interface PromoCard extends DocCard {
  blurb: string;
}

/** The publication pattern: cover, title, boilerplate blurb, its own CTA. */
export interface PubCard {
  image: NewsImage;
  title: string;
  /** Corporate boilerplate. Never summarised, never re-attributed. */
  blurb: string;
  /** The live button label — `Lire la dernière version`, `Guide du Québec`… */
  cta: string;
  /** The live URL, verbatim. NEVER a dated filename. */
  href: string;
}

export interface VideoTranscript {
  /** The live accordion title, verbatim. */
  title: string;
  paragraphs: string[];
}

export interface VideoItem {
  title: string;
  blurb: string;
  /**
   * The captured `<iframe src>`, shipped as the href of an ordinary outbound
   * link. Unchanged, not rewritten to a `watch?v=` form — the rule is that
   * every URL ships as captured, and that rule does not bend for a URL we are
   * changing the element type of.
   */
  watchHref: string;
  /** The captured `<iframe aria-label>` — the episode title. The link text. */
  watchLabel: string;
  /** `Visionnez les éditions précédentes` / `Watch previous editions`. */
  more?: { label: string; href: string };
  transcript: VideoTranscript;
}

export interface FraudBlock {
  image: NewsImage;
  body: string;
  cta: string;
  href: string;
}

/**
 * One live `<h2>` and everything under it.
 *
 * `id` is the in-page anchor. `spotlight`, `economic` and `guide` are the LIVE
 * ids and must stay exactly as they are — the home page's three news teasers
 * link at them. The other six are ours, because the live page reuses
 * `#economique`/`#economic` on three different sections and `#finance` on two,
 * and duplicate ids are neither valid HTML nor usable by `aria-labelledby`.
 * S-02.
 */
export type NewsSection =
  | { kind: 'documents'; id: string; heading: string; note?: 'pdf'; items: DocCard[] }
  | { kind: 'promos'; id: string; heading: string; items: PromoCard[] }
  | { kind: 'publications'; id: string; heading: string; items: PubCard[] }
  | {
      kind: 'videos';
      id: string;
      heading: string;
      items: VideoItem[];
      /**
       * English only. The live English page files `Week at a Glance` INSIDE its
       * `Economic news` section; French has no such card at all. Reproduced
       * where each language puts it, not moved to match the other.
       */
      publications?: PubCard[];
    }
  | { kind: 'fraud'; id: string; heading: string; block: FraudBlock };

export interface NewsContent {
  locale: Locale;
  meta: {
    /** Live `<title>` minus the brand suffix `BaseLayout` appends. */
    title: string;
    /** Live `meta[name=description]`, verbatim — typos included. */
    description: string;
  };
  hero: {
    /** The live `<h1>`. NOT the `<title>`: English says `News and articles` in
     *  the heading and `News & articles` in the title bar. Both ship. */
    heading: string;
    banner: { src: ImageMetadata; alt: string; widths: number[]; sizes: string };
  };
  /**
   * Format badges. These two words have NO live-site counterpart — they are
   * interface labels telling a visitor what a link opens. NC-05.
   */
  labels: { pdf: string; video: string };
  sections: NewsSection[];
}
