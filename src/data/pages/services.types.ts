import type { Locale, LinkItem, Run, RichText, SiteImage, SiteContactBlock } from '../types';

/**
 * Shape of the SERVICES page content, both languages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THE TWO PAGES ARE NOT TRANSLATIONS. Measured from the captures:
 *
 *   section                     FR (fr-nos-services)     EN (en-our-services)
 *   ─────────────────────────── ──────────────────────── ────────────────────
 *   hero banner                 bespoke team artwork     NBF generic stock
 *   intro (H2 + prose)          1 paragraph              2 paragraphs
 *   `Our approach`              —                        H2 + lead + 4 steps,
 *                                                        8 bullets  (EN ONLY)
 *   services wheel              bespoke, reads           NBF generic, reads
 *                               `Groupe Wolf Achard`     `Your Wealth Advisor`
 *                               / `Vous`                 / `Client` — the team
 *                                                        is NOT named in it
 *   seven service blocks        team-written prose       NBF `Purpose` /
 *                               (2 short paragraphs      `Main benefits`
 *                               each, 0 list items)      boilerplate, 47 items
 *   third-party disclosure      once, as a caption       six times, five
 *                               (§1.6)                   markers (§1.6)
 *   toolbox                     8 links                  8 links
 *   disclaimers                 5, `Notes légales`       5, `Legal Disclaimers`
 *   total <li> in the page      5 (the disclaimers)      52
 *
 * P-16 PROHIBITS closing either gap, IN BOTH DIRECTIONS: no English service
 * prose written to match the French, and no French translation of `Our
 * approach` or of the 47 English list items. A block that does not exist in a
 * language is `undefined` here, never an empty array, so the page component
 * cannot render a heading over nothing.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ACCORDION ORDER DIFFERS BY LANGUAGE and each language keeps its own:
 *
 *   FR  portefeuille · financière · FISCALE · SUCCESSORALE · assurances ·
 *       bancaires · philanthropie
 *   EN  portfolio · financial · ESTATE · TAX · insurance · banking ·
 *       philanthropy
 *
 * Positions 3 and 4 are swapped between the trees. Harmonising them would
 * reorder a client's own page for no reason either language asked for.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT IS SYNDICATED BY NATIONAL BANK, not authored by this team. Measured by
 * locating every `class="experiencefragment"` wrapper in the two captures:
 *
 *   FR: the toolbox (`boite_outils_v3/boite-a-outils-v3-fr`) and the
 *       `Notes légales` accordion. Everything else is the team's own.
 *   EN: the four `Our approach` steps, THE WHOLE SEVEN-ITEM SERVICES ACCORDION,
 *       the toolbox and the `Legal Disclaimers` accordion.
 *
 * That is the mechanical explanation for the asymmetry: the French services
 * copy is written by the team, the English is National Bank's shared block.
 * See the S-rows in CHANGES-FOR-APPROVAL.md — syndicated content tracks the
 * bank and a static rebuild freezes it (P-14).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * VERBATIM. Every client-facing string here is character-for-character from
 * `source-assets/html/{fr-nos-services,en-our-services}.html`, including
 * U+00A0 (written ` `), U+2019 (`’`) and the places the live markup uses a
 * plain U+0027 instead — inside the same sentence, in both languages. Verify:
 *
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/services.fr.ts \
 *        --capture source-assets/html/fr-nos-services.html
 */

/**
 * One inline run of a paragraph, and a paragraph as an ordered list of runs.
 *
 * Declared once in `../types` and re-exported here — three page trees had
 * written the same type independently. `external` marks the links the live site
 * opens in a new tab; on this page the two in `Solutions bancaires`, the one in
 * `Philanthropie` and the English `Banking solutions` PDF paragraph all are.
 */
export type { Run, RichText };

/** A disclaimer this page's copy points at. Only 1–5 exist; there is no 6. */
export type NoteRef = 1 | 2 | 3 | 4 | 5;

/**
 * One image on this page. `SiteImage`, aliased.
 *
 * VERBATIM `alt` from the capture. `''` means the live `<img>` carries a
 * VALUELESS `alt` attribute — both hero banners do, so both ship decorative
 * exactly as live. P-9: alt text asserts nothing, and with no group photograph
 * anywhere on this site nothing may be described as "the team". `widths` never
 * exceeds the source width (banners 2000, wheels 767).
 */
export type ServicesImage = SiteImage;

export interface ServicesHero {
  /** The client's VERBATIM live `<h1>`, at label size — not the display line. */
  heading: string;
  /**
   * The large display line, >=56px, in a NON-HEADING element.
   *
   * Not new copy: it is the live `<p>` already sitting beside the `<h1>` in the
   * same AEM teaser (`cmp-teaser__description`), promoted to display size. No
   * `NC-` row — nothing was written and nothing was replaced.
   */
  message: string;
  banner?: ServicesImage;
}

/** Heading + prose. The FR/EN openers, and the EN `Our approach` lead. */
export interface ServicesIntro {
  heading: string;
  body: RichText[];
}

/**
 * A footnote marker attached to a run of copy.
 *
 * `refs` are the disclaimer numbers the marker points at. They render as real
 * `<sup>` links into `#legal-note-N` on the SAME page — P-12: a page that
 * renders a marker renders the full 1–5 set, and `refs` never filters the list.
 */
export interface NoteMarker {
  /** The sentence the marker sits on, verbatim. */
  text: string;
  refs: NoteRef[];
}

/** `Purpose` / `Main benefits`, or an unlabelled list. EN only. */
export interface ServiceGroup {
  /** Absent where the live block runs a bare list with no label above it. */
  heading?: string;
  items: string[];
}

export interface ServiceBlock {
  /**
   * STABLE ANCHOR. Slug of the live accordion title, so a link into a service
   * survives a rebuild. These ids are part of the page contract — the home
   * page's services teaser may point at one.
   */
  id: string;
  /** Live `cmp-accordion__title`, verbatim. */
  title: string;
  /** Leading paragraphs. FR: the team's prose. EN: banking / philanthropy leads. */
  body?: RichText[];
  /** EN only — NBF's `Purpose` / `Main benefits` lists. */
  groups?: ServiceGroup[];
  /**
   * The live third-party-provider disclosure sentence and its marker.
   *
   * EN only, on five of the seven blocks. §1.6: the five English strings are
   * DISTINCT (`specialists` vs `collaborators`) and are not deduplicated. The
   * French page carries this disclosure ONCE, as the wheel caption, and no
   * French footnote sentence may be back-filled to match English (P-5 / P-6).
   */
  footnote?: NoteMarker;
}

/** EN only — one numbered `Our approach` step. */
export interface ApproachStep {
  icon: ServicesImage;
  /** Live `<h3>`, INCLUDING its `1. ` … `4. ` numeral prefix. */
  title: string;
  items: string[];
}

export interface ServicesApproach extends ServicesIntro {
  steps: ApproachStep[];
}

/** The services wheel and its caption — the one place FR carries a marker. */
export interface ServicesWheel {
  image: ServicesImage;
  caption: NoteMarker;
}

export interface ServicesToolbox {
  icon: ServicesImage;
  heading: string;
  lead: string;
  /**
   * In LIVE DOCUMENT ORDER (left column top-to-bottom, then right column).
   * Root-relative live paths are stored HOST-ABSOLUTE per language (§3.2) —
   * `fbngp.ca` for French, `nbfwm.ca` for English — because a root-relative
   * `/documentation/…` silently 404s on a new domain.
   */
  links: LinkItem[];
}

export interface ServicesContent {
  locale: Locale;
  meta: {
    /** Live `<title>` minus the brand suffix `BaseLayout` appends. */
    title: string;
    /** Live `meta[name=description]`, verbatim. */
    description: string;
  };
  hero: ServicesHero;
  intro: ServicesIntro;

  /* ---- ENGLISH ONLY. `undefined` in French, and that is the finding. ------ */
  approach?: ServicesApproach;

  /**
   * The services section. EN carries an `Our services` H2 and a lead paragraph
   * above the wheel; FR carries neither — its wheel follows the opener
   * directly. `heading` and `lead` are therefore optional, not blank.
   */
  services: {
    heading?: string;
    lead?: string;
    wheel: ServicesWheel;
    blocks: ServiceBlock[];
  };

  toolbox: ServicesToolbox;

  /**
   * The live container id of the disclaimer accordion, per language
   * (`notes-legales` / `disclaimer`). Kept so an existing deep link still
   * lands. The note ids themselves are `#legal-note-1`…`5` in both trees —
   * that is <LegalNotes>'s contract and the markers depend on it.
   */
  legalNotesId: string;

  /**
   * The page's own closing contact block. Same shape as the home page's,
   * because it is the same live block — but NOT the same words: the English
   * services page carries a lead sentence that appears nowhere else on the
   * site.
   */
  /** Closing contact block. The page passes `showFooterCta={false}` (D-11). */
  contact: SiteContactBlock;
}
