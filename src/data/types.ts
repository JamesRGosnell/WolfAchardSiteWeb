/**
 * Shared shape for every site-wide string, in both languages.
 *
 * `fr.ts` and `en.ts` both declare `const strings: SiteStrings`, so the two
 * languages cannot drift structurally — a key added to one and forgotten in the
 * other is a type error, which matters a great deal in a regulated bilingual
 * property.
 *
 * SCOPE: site chrome only — navigation, CTAs, the contact block, the footer,
 * the numbered disclaimers. Page copy lives with the page data modules
 * (`src/data/pages/<page>.{types,fr,en}.ts`), which the page agents own.
 *
 * PLACEHOLDERS. `fr.ts` and `en.ts` are both fully populated from the live
 * capture — zero `[[TODO-ARCHIVE]]` sentinels remain, in source or in `dist/`.
 * The sentinel convention stays for future fields: any value reading
 * `[[TODO-ARCHIVE]]` has NOT been taken from the capture and must not ship.
 * Grep for it before every commit:  `rg "\[\[TODO-ARCHIVE\]\]" src/`
 *
 * It also holds the SHARED CONTENT PRIMITIVES the page modules re-export —
 * `Run`, `RichText`, `SiteImage`, `ContactLine`, `SiteContactBlock` — so a
 * primitive six page trees rely on has exactly one declaration.
 */
import type { ImageMetadata } from 'astro';

export type Locale = 'fr' | 'en';

/** Stable identity of a page across languages — the hinge of the hreflang map. */
export type PageKey = 'home' | 'team' | 'services' | 'news' | 'firm' | 'contact';

/* ---------------------------------------------------------------------------
   SHARED CONTENT PRIMITIVES

   These four types were independently re-declared in `home.types.ts`,
   `firm.types.ts`, `services.types.ts`, `team.types.ts` and `contact.types.ts`
   because a page build may not create files in `src/components/` or edit this
   module. They are declared ONCE here and re-exported from each page module, so
   every existing `import type { RichText } from './home.types'` keeps working
   while there is exactly one definition to change.

   The per-page modules keep their own documentation of what the values MEAN on
   their page — that is page knowledge and it stays with the page.
   --------------------------------------------------------------------------- */

/**
 * One inline run of a paragraph.
 *
 * The live copy carries `<b>` emphasis and inline links INSIDE sentences.
 * Flattening those to a plain string would drop client formatting; storing the
 * whole sentence as one literal would also break the verbatim sweep, which
 * replaces a stripped tag with a space, so no contiguous run in the capture
 * matches the flattened form. Splitting at the tag boundary keeps both the
 * emphasis and the byte-exactness.
 *
 * `external` marks a link the live site opens in a new tab. It drives
 * `target="_blank" rel="noopener noreferrer"` plus the site's standing
 * "opens in a new window" screen-reader note in <Prose>. Every inline link on
 * the FIRM page is external in the capture; the one on the English home page
 * (`team`) is internal and must not be.
 */
export type Run = string | { strong: string } | { link: string; href: string; external?: boolean };

/** A paragraph, as an ordered list of runs. */
export type RichText = Run[];

/**
 * One image from a page data module.
 *
 * `alt` is VERBATIM from the capture; `''` means the live `<img>` carries a
 * valueless `alt` attribute and therefore ships decorative. Alt text is never
 * invented to fill one in (P-9, N-12).
 *
 * `widths` NEVER exceeds the source width — the DAM masters are small and an
 * upscale is a visible quality regression.
 */
export interface SiteImage {
  src: ImageMetadata;
  alt: string;
  widths: number[];
  sizes: string;
}

/** One phone or email row in a closing contact block. */
export interface ContactLine {
  /**
   * Verbatim display string. FR spaces the phone numbers and uses `@bnc.ca`;
   * EN hyphenates them and uses `@nbc.ca`. Never derive one from the other
   * (C-03…C-06, P-4).
   */
  display: string;
  href: string;
}

/**
 * The closing `Contactez-nous` / `Contact us` block a page renders in its own
 * main content. `<h3>` on the live page in both languages — not an `<h2>`.
 *
 * A page that declares one MUST also suppress the footer's CTA band
 * (`showFooterCta={false}`), or the same call to action prints twice. See D-11.
 */
export interface SiteContactBlock {
  heading: string;
  lead: string;
  link: LinkItem;
  phones: ContactLine[];
  emails: ContactLine[];
}

export interface LinkItem {
  label: string;
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer" + external-link icon. */
  external?: boolean;
  /** Rendered as a small suffix badge, e.g. "PDF". */
  note?: string;
  /** Accessible name override when the visible label is not self-describing. */
  ariaLabel?: string;
}

export interface NavItem {
  key: PageKey;
  /**
   * THE BAR LABEL. Navigation chrome — may be SHORTER than the live nav string
   * where the bar cannot afford the width. Use this in <Header> and nowhere
   * else.
   */
  label: string;
  /**
   * THE LIVE NAV STRING, VERBATIM. Use this for a page `<h1>`, `<title>` or any
   * body-copy reference to the page by name.
   *
   * The split exists so a chrome-level shortening can NEVER leak into shipped
   * page copy. Where nothing was shortened the two are identical, which is the
   * point: the distinction is enforced by the type, not by remembering.
   * See NC-01 / NC-02 in CHANGES-FOR-APPROVAL.md.
   */
  liveLabel: string;
}

export interface FooterColumn {
  title: string;
  links: LinkItem[];
}

export interface PhoneEntry {
  /** Person or line name, e.g. "Laurent Achard" or "Sans frais". */
  label: string;
  /** Formatted for display, verbatim from the live site. */
  display: string;
  /** tel: href, digits only. */
  href: string;
}

export interface SiteStrings {
  locale: Locale;
  /** Value for <html lang>. */
  htmlLang: string;
  /** Name of this language, in this language. */
  localeName: string;
  /** Two-letter label of THIS language, shown as the current side of the toggle. */
  localeShort: string;
  /** Name of the other language, in the other language. */
  otherLocaleName: string;
  /** Two-letter switch label shown in the header toggle. */
  otherLocaleShort: string;
  /**
   * Screen-reader suffix on the toggle link, IN THIS PAGE'S LANGUAGE — a French
   * page carries no English UI strings. Rendered AFTER the visible "EN"/"FR" so
   * the accessible name still starts with the visible label (WCAG 2.5.3).
   */
  switchLanguageAria: string;
  /** Accessible name of the toggle group — "Langue" / "Language". */
  languageLabel: string;

  meta: {
    siteName: string;
    /** Appended to every page title. */
    titleSuffix: string;
    defaultDescription: string;
    ogLocale: string;
    ogLocaleAlternate: string;
    /**
     * `og:image:alt` for the default share card.
     *
     * Must assert NOTHING: no headcount, no "our team" framing for a partial
     * group, no regulated status. Per language, like every other alt.
     */
    ogImageAlt: string;
  };

  brand: {
    /** "Groupe Wolf Achard" / "Wolf Archard Group" — note the EN spelling. */
    name: string;
    /** Full descriptor used in the lockup context and JSON-LD. */
    descriptor: string;
    logoAlt: string;
    /** "Financière Banque Nationale – Gestion de patrimoine" / NBFWM. */
    nbfwmName: string;
    nbfwmLogoAlt: string;
    /** Parent-firm site the co-brand lockup links to, in this language. */
    nbfwmHref: string;
  };

  nav: {
    items: NavItem[];
    ariaLabel: string;
    openMenu: string;
    closeMenu: string;
    menuLabel: string;
  };

  cta: {
    clientAccess: LinkItem;
    contact: LinkItem;
    meetTeam: LinkItem;
    ourServices: LinkItem;
    learnMore: string;
    readMore: string;
    backHome: LinkItem;
  };

  /**
   * FORMAT BADGES — the small chip telling a visitor what a link opens.
   *
   * NC-05. These words have NO live-site counterpart; they are interface
   * labels, not client copy. They live here rather than in one page's data
   * module because two surfaces render them — the news cards and the services
   * toolbox — and one authored word must not grow two spellings.
   *
   * `PDF` is identical in both languages. It is still declared per language:
   * the day one of them changes, the type is what makes the other visible.
   */
  formats: {
    pdf: string;
  };

  a11y: {
    skipToContent: string;
    mainLandmark: string;
    footerLandmark: string;
    opensNewWindow: string;
    backToTop: string;
    /**
     * Accessible name of the logo home-links (header bar + mobile overlay).
     * The lockup <img> is decorative (`alt=""`) because the ANCHOR is the thing
     * being named; without this the link has no accessible name at all
     * (WCAG 2.4.4 / 4.1.2).
     */
    homeLink: string;
    /**
     * Accessible-name PREFIX for a numbered legal-note marker, rendered as
     * `${legalNoteRef} 3` → "Note légale 3" / "Legal note 3". A bare "3" is not
     * an accessible name for a regulatory reference.
     */
    legalNoteRef: string;
  };

  contact: {
    /** Street lines, rendered one per line inside <address>. */
    addressLines: string[];
    /** Full one-line address, for aria labels and profile pages. */
    addressInline: string;
    /** Parsed for schema.org PostalAddress. Verbatim values, unnormalised. */
    addressParts: {
      street: string;
      locality: string;
      region: string;
      postalCode: string;
      country: string;
    };
    mapsLabel: string;
    mapsHref: string;
    /**
     * OPTIONAL, AND OMITTED ON THIS SITE.
     *
     * The NBF template these fields came from carries `Sans-frais :` /
     * `Toll-Free :` and `Télécopieur :` / `Fax :` lines. **Groupe Wolf Achard
     * has neither** — verified against all 16 captures; see COMPLIANCE.md §2.4
     * and audit check 23, which fails the build if either line is introduced.
     *
     * They stay in the type because a future team may have them, and because a
     * required field with no source is an invitation to fill it from a
     * template. If a team ever does publish one, the label colon is PART OF THE
     * STRING, not CSS — `Sans-frais :`, `Télécopieur :` — including the French
     * no-break space before the colon. Consumers must guard on presence.
     */
    tollFree?: PhoneEntry;
    fax?: PhoneEntry;
    /** Head-of-team lines shown in the footer CTA band and the contact strip. */
    phones: PhoneEntry[];
    emails: LinkItem[];
  };

  footer: {
    ctaEyebrow: string;
    /** Plain string. There is no split-italic headline device in this system. */
    ctaHeading: string;
    ctaLead: string;
    ctaButton: LinkItem;
    addressTitle: string;
    /**
     * Title of the site-navigation column. AUTHORED — the live footer has no
     * such column; the links are built from `nav.items` by <Footer>, so the
     * footer nav can never drift from the header nav.
     */
    navTitle: string;
    columns: FooterColumn[];
    /**
     * Regulator badges. The badges are UNLABELLED images linking to the
     * regulator; alt text is taken verbatim from the live site and must not be
     * embellished with any membership or regulation assertion the live site
     * does not carry. The advisor-report link is the only visible regulatory
     * LABEL on the site.
     */
    regulatory: {
      /**
       * aria-label of the footer <nav> that holds the regulator marks —
       * `Partenaires` / `Partners`, VERBATIM from the live site, where it names
       * the `fourth-level` nav containing exactly OCRI/CIRO, the advisor-report
       * link and FCPI/CIPF. It is a landmark name, so it is captured copy the
       * same way the alt strings beside it are: do not translate `Partners` to
       * anything but the live `Partenaires`, and do not fold this nav back into
       * the legal one — doing that is what dropped the label from all 17 pages
       * and failed audit check 55.
       */
      navAriaLabel: string;
      ciro: LinkItem;
      ciroLogoAlt: string;
      ciroAdvisorReport: LinkItem;
      cipf: LinkItem;
      cipfLogoAlt: string;
      linkedin: LinkItem;
      /** "Banque Nationale" / "National Bank". */
      nbMarkAlt: string;
    };
    legal: {
      /**
       * aria-label of the footer legal <nav>, verbatim from the live site.
       * Live, this nav holds the National Bank mark, the copyright line and
       * LinkedIn — the `social media` half of its own name. Keep LinkedIn
       * inside it.
       */
      navAriaLabel: string;
      /** VERBATIM copyright line. A FROZEN string — never computed from a clock. */
      copyright: string;
      links: LinkItem[];
    };
  };

  /**
   * The five numbered disclaimers, rendered by <LegalNotes>.
   *
   * NOT footer content. They belong on the pages whose copy carries their
   * superscript markers, and all five always render together, in order — never
   * a subset, never renumbered, never truncated.
   */
  legalNotes: {
    /** "Notes légales" / "Legal Disclaimers" — confirm against the capture. */
    title: string;
    items: string[];
  };

  /**
   * Sticky contact strip. Carries only the head-of-team pair, read from
   * `contact.phones` / `contact.emails` rather than re-declared here, so the
   * strip cannot drift from what the footer prints and the per-language
   * `@bnc.ca` / `@nbc.ca` split lives in exactly one place.
   *
   * These are UI labels only — no client copy, no regulated strings.
   */
  contactStrip: {
    /** Tab and panel heading. */
    heading: string;
    closeLabel: string;
    /** Mobile bar — visible label of the `tel:` action. */
    callLabel: string;
    /** Mobile bar — visible label of the `mailto:` action. */
    emailLabel: string;
  };

  notFound: {
    eyebrow: string;
    heading: string;
    lead: string;
  };
}
