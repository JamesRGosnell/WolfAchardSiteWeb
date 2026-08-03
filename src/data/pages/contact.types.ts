import type { Locale, SiteImage } from '../types';

/**
 * Shape of the CONTACT page content, both languages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT IS **NOT** IN THIS TYPE, AND WHY
 *
 * The office coordinates — the address block, both phone numbers, both email
 * addresses and the branch-locator link — are **site-wide identity data** and
 * already live in `src/data/fr.ts` / `src/data/en.ts` under `contact`. The page
 * reads them from there with `t(locale)`.
 *
 * They are deliberately absent here. Every one of those strings is regulated
 * identity data (COMPLIANCE §2 / C-03…C-06, C-22, C-23); a second copy on this
 * page is a second place for them to drift, and this page is the surface where
 * a drift would be most visible. In particular:
 *
 *  · `contact.addressLines` is ALREADY this page's own verbatim rendering in
 *    both languages. English is form (i) of C-22 — `1, Place Ville-Marie⟨NBSP⟩
 *    Suite 1700` / `Montreal⟨NBSP⟩QC⟨NBSP⟧H3B 2C1`, two paragraphs, three
 *    load-bearing U+00A0. `contact.addressInline` is form (ii), the ADVISOR
 *    PROFILE page's single-line rendering, and must never be used here.
 *  · `contact.phones[].href` is the microsite E.164 form (`tel:+15143951937`).
 *    The profile pages use `tel:514-395-1937`; that is C-23 and it is not this
 *    surface's form.
 *  · `contact.phones[].label` is the advisor's live display name, which is what
 *    lets the advisor cards below be built by pairing rather than by retyping a
 *    number beside a name.
 *
 * There is also NO toll-free and NO fax field, here or anywhere. This site
 * publishes neither (COMPLIANCE §2.4, D-08). The label colons an NBF template
 * would carry — `Sans-frais :`, `Télécopieur :`, `Toll-Free :`, `Fax :` — are
 * part of those strings, not CSS, and since the strings do not exist on this
 * site neither do the colons. Do not reintroduce either field.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * NO DISCLAIMER ACCORDION
 *
 * Measured on both captures: `fr-nous-joindre.html` and `en-contact-us.html`
 * each render **zero `<sup>` and zero `<sub>` elements**. P-12 binds markers to
 * an accordion, not the other way round, and COMPLIANCE §3.3 lists this page as
 * carrying neither. There is therefore no `legalNotes` slot in this type, and
 * `<LegalNotes>` must not appear on this page — adding one is as much a
 * deviation as dropping one.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * VERBATIM
 *
 * Every client-facing string in `contact.fr.ts` / `contact.en.ts` is byte-exact
 * from `source-assets/html/{fr-nous-joindre,en-contact-us}.html`, including
 * U+00A0 and the places the live markup uses a plain U+0027 apostrophe. Verify:
 *
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/contact.fr.ts \
 *        --capture source-assets/html/fr-nous-joindre.html
 */

/**
 * One image on this page. `SiteImage`, aliased.
 *
 * VERBATIM `alt` from the capture. `''` means the live `<img>` carries a
 * valueless `alt` attribute — the contact banner does, in both languages, so it
 * ships decorative exactly as live (P-9, N-12).
 *
 * The two headshot alts ship SIC, with their live defects intact: F-01 (the
 * French `patrimoin ` truncation), F-07 (the English double space and trailing
 * space) and F-08 (an English trailing space) are all PENDING and no policy
 * amendment authorises applying them. `widths` never exceeds the source width
 * (1199px banner, 350px headshots).
 */
export type ContactImage = SiteImage;

export interface ContactHero {
  /** The client's VERBATIM live `<h1>`. Ships as captured, at label size. */
  heading: string;
  /**
   * The large display line, >=56px, in a NON-HEADING element — the live `<p>`
   * that already sits after the `<h1>` in the same AEM teaser, promoted to
   * display size. Nothing written, nothing replaced, so no `NC-` row.
   */
  message: string;
  banner?: ContactImage;
}

/**
 * One advisor card.
 *
 * NOTE WHAT IS ABSENT: no phone, no email. Those are read from
 * `contact.phones` / `contact.emails` in the shared dictionary and paired to
 * this entry by `name`, so the number beside a licensed advisor's photograph
 * and the number in the footer are the same string by construction. If a name
 * here ever stops matching a `phones[].label` there, the page throws at build
 * time rather than shipping a card with a missing line.
 */
export interface ContactAdvisor {
  /**
   * URL segment of the profile page. IDENTICAL in both languages
   * (`laurent-achard`, `david-alexandre-wolf`); only the parent path differs.
   * Never translated.
   */
  slug: string;
  /**
   * VERBATIM display name — and the join key into `contact.phones[].label`.
   *
   * `David Alexandre Wolf` carries NO hyphen. That is the display name on every
   * live surface in both languages (COMPLIANCE §2.1, D-09); only the slug above
   * is hyphenated.
   */
  name: string;
  /**
   * VERBATIM regulated title (P-8). The French H4 ends in a TRAILING U+00A0 on
   * this page — that is in the capture and it ships. The profile page's H3 does
   * not have it; each surface keeps its own form (C-01 / C-02).
   */
  title: string;
  /**
   * VERBATIM languages line AS THIS PAGE STATES IT.
   *
   * C-07 / C-08: four surfaces make four different assertions about the same
   * two people, two of them inside one language tree. This page's own strings
   * ship; they are not reconciled against the team page or the profile pages,
   * because that is a judgment about a licensed advisor's declared capability.
   */
  languages: string;
  photo: ContactImage;
}

export interface ContactContent {
  locale: Locale;
  meta: {
    /** Live `<title>` minus the brand suffix `BaseLayout` appends. */
    title: string;
    /** Live `meta[name=description]`, verbatim. */
    description: string;
  };
  hero: ContactHero;
  /** Live `<h2>` + the `<p>` under it, above the coordinates. */
  office: { heading: string; lead: string };
  /** Live `<h2>` + the two advisor cards, in live order. */
  team: { heading: string; advisors: ContactAdvisor[] };
}
