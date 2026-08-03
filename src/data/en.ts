import type { SiteStrings } from './types';

/**
 * ENGLISH site chrome — Wolf Archard Group.
 *
 * Note the spelling. The English tree really is `wolf-archard-group` /
 * "Wolf Archard Group", with an `r` the French "Achard" does not have. It is
 * not a typo in this file; it is what National Bank publishes. Never "correct"
 * it, and never derive one language's name from the other's.
 *
 * PROVENANCE, per group:
 *
 *  · `footer.columns`, `footer.regulatory`, `footer.legal`, `legalNotes.items`,
 *    `meta.titleSuffix`, `meta.defaultDescription`, `brand.name` and the two
 *    lockup alt strings were SPLICED IN BYTE-EXACTLY by
 *    `scripts/extract-chrome.mjs` from `source-assets/html/en-home.html` and
 *    the platform-standard disclaimer block in the nbc-advisor-site skill.
 *
 *  · `nav.items` labels are verbatim from the live navigation — including
 *    `News & articles` with an ampersand and `Our Firm` with a capital F,
 *    which do not match the sentence casing of their siblings. Ship sic.
 *
 *  · THE ARCHIVE PASS IS COMPLETE — this file carries no placeholders. Every
 *    value that once read `[[TODO-ARCHIVE]]` was filled from
 *    `source-assets/html/`, or, where the live site genuinely has no
 *    counterpart, from the minimum authored microcopy already covered by
 *    NC-04. `contact.tollFree` and `contact.fax` were REMOVED, not filled: this
 *    site publishes neither and audit check 23 fails the build if either is
 *    reintroduced. A sentinel reappearing here is a defect; grep before every
 *    commit.
 *
 * LANGUAGE PURITY: this file carries only EN hosts (nbfwm.ca), EN bank links
 * (nbc.ca), EN regulator marks (CIRO / CIPF) and `@nbc.ca` addresses. An
 * `fbngp.ca`, `bnc.ca`, `ocri.ca` or `@bnc.ca` string appearing here is a
 * defect.
 */
const strings: SiteStrings = {
  locale: 'en',
  htmlLang: 'en-CA',
  localeName: 'English',
  localeShort: 'EN',
  otherLocaleName: 'Français',
  otherLocaleShort: 'FR',
  switchLanguageAria: 'View this page in French',
  languageLabel: 'Language',

  meta: {
    siteName: "Wolf Archard Group",
    titleSuffix: "National Bank Financial - Wealth Management",
    defaultDescription: "With National Bank Financial - Wealth Management, you can rely on a solid financial partner. Find out how our personalized support can help you.",
    ogLocale: 'en_CA',
    ogLocaleAlternate: 'fr_CA',
    // The share card IS the National Bank mark on white — the same artwork all
    // 16 live pages serve as `og:image` (A-02). So the alt is the live verbatim
    // alt for that mark, `alt="National Bank"` in the EN footer, and nothing
    // more. There is NO GROUP PHOTO anywhere on this site: no headcount, no
    // "our team", no regulated status, no description of any person (P-9).
    ogImageAlt: 'National Bank',
  },

  brand: {
    name: "Wolf Archard Group",
    descriptor: 'National Bank Financial - Wealth Management',
    logoAlt: "Wolf Archard Group logo",
    nbfwmName: 'National Bank Financial - Wealth Management',
    nbfwmLogoAlt: "National Bank Financial Wealth Management logo",
    nbfwmHref: 'https://www.nbfwm.ca/',
  },

  nav: {
    // `liveLabel` is verbatim from the live navigation, INCLUDING `News &
    // articles` with an ampersand and `Our Firm` with a capital F. `label` is
    // the BAR label — see the NavItem docs in types.ts.
    //
    // NC-02: `News & articles` is shortened to `News` IN THE BAR ONLY, matching
    // the French NC-01 change so the two trees stay structurally identical. The
    // page `<h1>`, `<title>` and any body reference keep the live string via
    // `liveLabel`. The casing quirks are NOT touched anywhere.
    items: [
      { key: 'team', label: 'Our team', liveLabel: 'Our team' },
      { key: 'services', label: 'Our services', liveLabel: 'Our services' },
      { key: 'news', label: 'News', liveLabel: 'News & articles' },
      { key: 'firm', label: 'Our Firm', liveLabel: 'Our Firm' },
      { key: 'contact', label: 'Contact us', liveLabel: 'Contact us' },
    ],
    ariaLabel: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuLabel: 'Menu',
  },

  cta: {
    // Verbatim label and destination from the live header.
    clientAccess: {
      label: 'Client Access',
      href: 'https://client.bnc.ca/nbfwm/home',
      external: true,
      ariaLabel: 'Client Access',
    },
    contact: { label: 'Contact us', href: '/en/contact/' },
    meetTeam: { label: 'Our team', href: '/en/team/' },
    ourServices: { label: 'Our services', href: '/en/services/' },
    learnMore: 'Learn more',
    readMore: 'Read more',
    backHome: { label: 'Back to home', href: '/en/' },
  },

  // NC-05 — interface format badge, no live-site counterpart. Rendered by
  // <NewsCard> and by the services <Toolbox>.
  formats: {
    pdf: 'PDF',
  },

  a11y: {
    skipToContent: 'Skip to main content',
    mainLandmark: 'Main content',
    footerLandmark: 'Footer',
    opensNewWindow: 'opens in a new window',
    backToTop: 'Back to top',
    // `Wolf Archard Group` is the live nav link to the home page, verbatim —
    // including the `r` the French name does not have (C-21 / COMPLIANCE N-01).
    // The ` — Home` suffix is authored a11y microcopy (NC-04): the anchor needs
    // a destination in its accessible name because its <img> is decorative.
    homeLink: 'Wolf Archard Group — Home',
    legalNoteRef: 'Legal note',
  },

  contact: {
    // VERBATIM from en-contact-us.html, which serves the address as TWO
    // paragraphs, not one broken line:
    //   `<p>1, Place Ville-Marie Suite 1700</p><p>Montreal QC H3B 2C1</p>`
    // ⚠ ALL THREE U+00A0 BELOW ARE LOAD-BEARING AND INVISIBLE. They are stored
    // as literal no-break spaces, exactly as served — one between `Ville-Marie`
    // and `Suite`, two around `QC`. Do not retype these three lines, do not let
    // a formatter collapse them, and never "fix" them to ordinary spaces: they
    // are the only thing holding `Suite 1700`, `QC` and the postal code on
    // their intended lines (COMPLIANCE §0 and §2.4, audit checks 22 and 40).
    //
    // This is form (i) of THREE live English renderings of one office (C-22).
    // The other two — `1 Place Ville-Marie, Suite 1700, Montreal, Quebec,
    // H3B 2C1` on the profile pages, and the French form — are not used here.
    // Note `Montreal` unaccented and `Suite` not `Bureau`: deliberate
    // per-language rendering (N-05), never derived from the French.
    addressLines: ['1, Place Ville-Marie Suite 1700', 'Montreal QC H3B 2C1'],
    // The ONE-LINE English address is NOT a join of the two lines above —
    // that string exists nowhere on the live site. It is form (ii) of C-22,
    // verbatim from both English advisor-profile pages, which is precisely
    // the surface this field documents itself as serving: commas after
    // `Suite 1700` and `Montreal`, province spelled out, no comma after `1`,
    // and no NBSP anywhere in it.
    addressInline: '1 Place Ville-Marie, Suite 1700, Montreal, Quebec, H3B 2C1',
    // Parsed for schema.org only. Each part is a substring of the live lines,
    // unnormalised — `QC` is what THIS page says; the French tree says `Québec`,
    // and the U+00A0 inside `Ville-Marie Suite` survives into the JSON-LD.
    addressParts: {
      street: '1, Place Ville-Marie Suite 1700',
      locality: 'Montreal',
      region: 'QC',
      postalCode: 'H3B 2C1',
      country: 'CA',
    },
    // Label and destination both verbatim: the live EN contact page links the
    // branch locator as `Business hours`, not as a map link. See D-06 — the
    // authored `View on map` it replaced was a label we would have written for
    // a destination the client already labels.
    mapsLabel: 'Business hours',
    mapsHref: 'https://locator.nbc.ca/national-bank-financial/qc/montreal/1-place-ville-marie',
    // NO `tollFree`, NO `fax`. This site publishes neither — verified across all
    // 16 captures (COMPLIANCE.md §2.4, audit check 23). Both keys are optional
    // in `SiteStrings` precisely so nobody fills them from an NBF template.
    //
    // ENGLISH HYPHENATES THE NUMBER (`514-395-1937`); French uses a space after
    // the area code. Same line, two renderings, neither translated — C-03 /
    // C-04. `href` is the live microsite E.164 form (C-23).
    //
    // `David Alexandre Wolf` carries NO hyphen: that is the display name on
    // every live surface in both languages (COMPLIANCE §2.1). Only the URL slug
    // is `david-alexandre-wolf`.
    phones: [
      { label: 'Laurent Achard', display: '514-395-1937', href: 'tel:+15143951937' },
      { label: 'David Alexandre Wolf', display: '514-412-0370', href: 'tel:+15144120370' },
    ],
    emails: [
      { label: 'laurent.achard@nbc.ca', href: 'mailto:laurent.achard@nbc.ca' },
      { label: 'davidalexandre.wolf@nbc.ca', href: 'mailto:davidalexandre.wolf@nbc.ca' },
    ],
  },

  footer: {
    // ---- CTA band: THREE RELOCATED LIVE STRINGS, NOT NEW COPY (D-07).
    // The live home page closes on exactly this block — a `Get contact
    // information…` paragraph under a `Contact us` heading, above the two
    // advisors' numbers. The rebuild promotes it to site chrome so it closes
    // every page instead of only the home page; the words are unchanged.
    //   eyebrow  <h2>  en-contact-us.html  ⚠ CARRIES TWO U+00A0 (`We are here`)
    //   heading  <h3>  en-home.html
    //   lead     <p>   en-home.html  (source wraps mid-sentence; renders as one
    //                  space, reproduced here as one space)
    // Nothing here is authored, so no NC- row — see D-07 for the relocation.
    ctaEyebrow: 'We are here to help',
    ctaHeading: 'Contact us',
    ctaLead: 'Get contact information for our team members and find out where our offices are.',
    ctaButton: { label: 'Contact us', href: '/en/contact/' },
    addressTitle: 'Office',
    navTitle: 'Navigation',
    // ---- SPLICED, byte-exact from en-home.html. Root-relative hrefs have been
    // resolved host-absolute against https://www.nbfwm.ca. Do not edit by hand.
    columns: [
      {
        "title": "Information and contact links",
        "links": [
          {
            "label": "Contact us",
            "href": "https://www.nbfwm.ca/contact.html",
            "external": true
          },
          {
            "label": "Find an advisor",
            "href": "https://www.nbfwm.ca/advisor.html",
            "external": true
          },
          {
            "label": "Regulatory information",
            "href": "https://www.nbfwm.ca/about/regulatory-information.html",
            "external": true
          },
          {
            "label": "Complaint settlement",
            "href": "https://www.nbfwm.ca/complaint-settlement.html",
            "external": true
          },
          {
            "label": "Our organisation",
            "href": "https://www.nbfwm.ca/about.html",
            "external": true
          },
          {
            "label": "National Bank of Canada",
            "href": "https://www.nbc.ca/personal.html",
            "external": true
          },
          {
            "label": "Our subsidiaries",
            "href": "https://www.nbc.ca/contact-us.html",
            "external": true
          },
          {
            "label": "Careers",
            "href": "https://www.nbfwm.ca/career.html",
            "external": true
          },
          {
            "label": "Press releases",
            "href": "https://www.nbc.ca/about-us/news-media.html",
            "external": true
          }
        ]
      },
      {
        "title": "Regulatory links",
        "links": [
          {
            "label": "User agreement",
            "href": "https://www.nbfwm.ca/user-agreement.html",
            "external": true
          },
          {
            "label": "Privacy policy",
            "href": "https://www.nbc.ca/privacy-policy.html",
            "external": true
          },
          {
            "label": "Digital data policy",
            "href": "https://www.nbfwm.ca/digital-data-policy.html",
            "external": true
          },
          {
            "label": "ABCs of security",
            "href": "https://www.nbc.ca/abcs-of-security.html",
            "external": true
          },
          {
            "label": "Accessibility",
            "href": "https://www.nbc.ca/about-us/esg/accessibility-statement.html",
            "external": true
          },
          {
            "label": "Accessibility Progress Report",
            "href": "https://www.nbc.ca/about-us/esg/accessibility-progress-report.html",
            "external": true
          },
          {
            "label": "Accessibility feedback process",
            "href": "https://www.nbc.ca/about-us/esg/accessibility-plan.html#2.2",
            "external": true
          }
        ]
      }
    ],
    regulatory: {
      // VERBATIM landmark name — live `<nav aria-label="Partners"
      // class="fourth-level">`, holding exactly the marks below it.
      navAriaLabel: "Partners",
      "ciro": {
        "label": "CIRO",
        "href": "https://www.ciro.ca/",
        "external": true
      },
      "ciroLogoAlt": "Canadian Investment Regulatory Organization (CIRO), external link which opens in a new tab.",
      "ciroAdvisorReport": {
        "label": "See advisor reports of the CIRO",
        "href": "https://www.ciro.ca/office-investor/know-your-advisor-advisor-report",
        "external": true,
        "ariaLabel": "See advisor reports of the CIRO, external link which opens in a new tab."
      },
      "cipf": {
        "label": "CIPF",
        "href": "https://www.cipf.ca/",
        "external": true
      },
      "cipfLogoAlt": "Canadian Investor Protection Fund (CIPF), external link which opens in a new tab.",
      "linkedin": {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/financi-re-banque-nationale/",
        "external": true,
        "ariaLabel": "LinkedIn, external link which opens in a new tab."
      },
      "nbMarkAlt": "National Bank"
    },
    legal: {
      navAriaLabel: "Legal notes and social media",
      // FROZEN string. Never computed from the clock.
      copyright: "© NBFWM. All rights reserved 2026.",
      links: [],
    },
  },

  legalNotes: {
    // The live English title is `Legal Disclaimers`, not `Legal Notes`.
    // Confirm against the capture before sign-off.
    title: 'Legal Disclaimers',
    // ---- SPLICED from the platform-standard block. DIFF against
    // source-assets/html/en-our-services.html; do not re-transcribe.
    // `National bank` in item 4 is lowercase on the live site. Ship it sic.
    items: [
      "Financial Planners are authorized to act in the field of Financial Planning. They exercise their duties for National Bank Financial Inc., a financial planning firm.",
      "We work closely with the Taxation, Retirement and Estate Planning Team from National Bank Trust, made up of multidisciplinary experts who provide knowledge and advice that complement our service offering. These experts assist us in providing the best solutions for your personal finances related to taxation, retirement and estate planning.",
      "Insurance products and services are provided by National Bank Insurance Firm (NBIF) or by NBF Financial Services (NBFFS), as applicable. NBIF and NBFFS are not members of Canadian Investor Protection Fund (CIPF). Insurance products are not protected by CIPF.",
      "Financing solutions are subject to credit approval by National bank.",
      "For details and conditions of the offer, please contact your advisor."
    ],
  },

  contactStrip: {
    heading: 'Contact us',
    closeLabel: 'Close',
    callLabel: 'Call',
    emailLabel: 'Email',
  },

  notFound: {
    eyebrow: 'Error 404',
    heading: 'Page not found',
    lead: 'The page you are looking for no longer exists or has moved.',
  },
};

export default strings;
