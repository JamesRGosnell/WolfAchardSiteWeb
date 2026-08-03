import type { SiteStrings } from './types';

/**
 * FRENCH site chrome — Groupe Wolf Achard.
 *
 * PROVENANCE, per group:
 *
 *  · `footer.columns`, `footer.regulatory`, `footer.legal`, `legalNotes.items`,
 *    `meta.titleSuffix`, `meta.defaultDescription`, `brand.name` and the two
 *    lockup alt strings were SPLICED IN BYTE-EXACTLY by
 *    `scripts/extract-chrome.mjs` from `source-assets/html/fr-home.html` and
 *    the platform-standard disclaimer block in the nbc-advisor-site skill. They
 *    were not retyped. Do not "tidy" an apostrophe, a no-break space or a
 *    capital in any of them — the live markup mixes U+0027 and U+2019 inside
 *    single sentences and that is what must ship.
 *
 *  · `nav.items` labels are verbatim from the live navigation.
 *
 *  · THE ARCHIVE PASS IS COMPLETE — this file carries no placeholders. Every
 *    value that once read `[[TODO-ARCHIVE]]` was filled from
 *    `source-assets/html/` (the office address, the two advisors' numbers and
 *    addresses, the branch-locator link, the footer CTA band, the share-card
 *    alt) or, where the live site genuinely has no counterpart, from the
 *    minimum authored microcopy already covered by NC-04. `contact.tollFree`
 *    and `contact.fax` were REMOVED, not filled: this site publishes neither
 *    and audit check 23 fails the build if either is reintroduced.
 *    A sentinel reappearing here is a defect. Grep before every commit:
 *      rg "\[\[TODO-ARCHIVE\]\]" src/
 *
 *  · a11y microcopy, menu labels and the contact-strip labels are AUTHORED UI
 *    strings — they have no live-site counterpart. Each is a candidate register
 *    row, not a verbatim claim.
 *
 * LANGUAGE PURITY: this file carries only FR hosts (fbngp.ca), FR bank links
 * (bnc.ca), FR regulator marks (OCRI / FCPI) and `@bnc.ca` addresses. An
 * `nbfwm.ca`, `nbc.ca`, `ciro.ca` or `@nbc.ca` string appearing here is a
 * defect. Grep both directions before every commit.
 */
const strings: SiteStrings = {
  locale: 'fr',
  htmlLang: 'fr-CA',
  localeName: 'Français',
  localeShort: 'FR',
  otherLocaleName: 'English',
  otherLocaleShort: 'EN',
  switchLanguageAria: 'Afficher cette page en anglais',
  languageLabel: 'Langue',

  meta: {
    siteName: "Groupe Wolf Achard",
    titleSuffix: "Financière Banque Nationale - Gestion de patrimoine",
    defaultDescription: "Comptez sur un partenaire financier solide avec la Financière Banque Nationale - Gestion de patrimoine. Découvrez comment nous pouvons vous aider avec un accompagnement personnalisé.",
    ogLocale: 'fr_CA',
    ogLocaleAlternate: 'en_CA',
    // The share card IS the National Bank mark on white — the same artwork all
    // 16 live pages serve as `og:image` (A-02). So the alt is the live verbatim
    // alt for that mark, `alt="Banque Nationale"` in the FR footer, and nothing
    // more. There is NO GROUP PHOTO anywhere on this site: no headcount, no
    // "notre équipe", no regulated status, no description of any person (P-9).
    // If a purpose-made co-branded card ever lands, this string is re-derived
    // from the new artwork, not extended.
    ogImageAlt: 'Banque Nationale',
  },

  brand: {
    name: "Groupe Wolf Achard",
    descriptor: 'Financière Banque Nationale - Gestion de patrimoine',
    logoAlt: "Logo Groupe Wolf Achard",
    nbfwmName: 'Financière Banque Nationale - Gestion de patrimoine',
    nbfwmLogoAlt: "Logo Financière Banque Nationale Gestion de patrimoine",
    nbfwmHref: 'https://www.fbngp.ca/',
  },

  nav: {
    // `liveLabel` is verbatim from the live navigation. `label` is the BAR
    // label and may be shorter — see the NavItem docs in types.ts.
    //
    // Home is reached through the lockup, exactly as on the live site, so it is
    // not a nav item.
    //
    // NC-01: `Nouvelles et articles` is shortened to `Nouvelles` IN THE BAR
    // ONLY. It measured 162.3px against a 94–107px sibling range — 61% wider
    // than the next-longest label — and on its own it pushed the one-row French
    // bar past every common laptop width. The page `<h1>`, `<title>` and any
    // body reference keep the live string via `liveLabel`. No other label is
    // shortened: after this change the set is 95–107px, which is even.
    items: [
      { key: 'team', label: 'Notre équipe', liveLabel: 'Notre équipe' },
      { key: 'services', label: 'Nos services', liveLabel: 'Nos services' },
      { key: 'news', label: 'Nouvelles', liveLabel: 'Nouvelles et articles' },
      { key: 'firm', label: 'Notre firme', liveLabel: 'Notre firme' },
      { key: 'contact', label: 'Nous joindre', liveLabel: 'Nous joindre' },
    ],
    ariaLabel: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    menuLabel: 'Menu',
  },

  cta: {
    // Verbatim label and destination from the live header.
    clientAccess: {
      label: 'Accès client',
      href: 'https://client.bnc.ca/fbngp/login',
      external: true,
      ariaLabel: 'Accès client',
    },
    contact: { label: 'Nous joindre', href: '/contact/' },
    meetTeam: { label: 'Notre équipe', href: '/equipe/' },
    ourServices: { label: 'Nos services', href: '/services/' },
    learnMore: 'En savoir plus',
    readMore: 'Lire la suite',
    backHome: { label: "Retour à l'accueil", href: '/' },
  },

  // NC-05 — interface format badge, no live-site counterpart. Rendered by
  // <NewsCard> and by the services <Toolbox>.
  formats: {
    pdf: 'PDF',
  },

  a11y: {
    skipToContent: 'Aller au contenu principal',
    mainLandmark: 'Contenu principal',
    footerLandmark: 'Pied de page',
    opensNewWindow: 'ouvre dans une nouvelle fenêtre',
    backToTop: 'Retour en haut',
    // `Groupe Wolf Achard` is the live nav link to the home page, verbatim.
    // The ` — Accueil` suffix is authored a11y microcopy (NC-04): the anchor
    // needs a destination in its accessible name because its <img> is
    // decorative.
    homeLink: 'Groupe Wolf Achard — Accueil',
    legalNoteRef: 'Note légale',
  },

  contact: {
    // VERBATIM from fr-nous-joindre.html, which serves the address as one <p>
    // broken by a `<br />`:
    //   `1 Place Ville-Marie, Bureau 1700,<br /> Montréal (Québec) H3B 2C1`
    // The trailing comma on line 1 is the live site's, not ours. The FRENCH
    // rendering is the only one used in this tree — `Montréal` accented,
    // `Bureau` not `Suite`, province in parentheses. See C-22 / N-05: the
    // English tree renders the same office three different ways and none of
    // them may leak here.
    addressLines: ['1 Place Ville-Marie, Bureau 1700,', 'Montréal (Québec) H3B 2C1'],
    addressInline: '1 Place Ville-Marie, Bureau 1700, Montréal (Québec) H3B 2C1',
    // Parsed for schema.org only. Each part is a substring of the live line,
    // unnormalised — `Québec` is not silently swapped for `QC` (that is the
    // ENGLISH page's rendering).
    addressParts: {
      street: '1 Place Ville-Marie, Bureau 1700',
      locality: 'Montréal',
      region: 'Québec',
      postalCode: 'H3B 2C1',
      country: 'CA',
    },
    // Label and destination both verbatim: the live FR contact page links the
    // branch locator as `Heures d'ouverture` (U+0027 apostrophe), not as a map
    // link. See D-06 — the authored `Voir sur la carte` it replaced was a label
    // we would have written for a destination the client already labels.
    mapsLabel: "Heures d'ouverture",
    mapsHref: 'https://localisateur.bnc.ca/financiere-banque-nationale/qc/montreal/1-place-ville-marie',
    // NO `tollFree`, NO `fax`. This site publishes neither — verified across all
    // 16 captures (COMPLIANCE.md §2.4, audit check 23). Both keys are optional
    // in `SiteStrings` precisely so nobody fills them from an NBF template.
    //
    // Head-of-team pair, in the order the live site lists them. <ContactStrip>
    // reads the first two entries of `phones` / `emails`; keep them aligned.
    //
    // FRENCH FORMATS THE NUMBER WITH A SPACE AFTER THE AREA CODE (`514 395-1937`);
    // English hyphenates it. Same line, two renderings, neither translated —
    // C-03 / C-04. `href` is the live microsite E.164 form (C-23).
    //
    // `David Alexandre Wolf` carries NO hyphen: that is the display name on
    // every live surface in both languages (COMPLIANCE §2.1). Only the URL slug
    // is `david-alexandre-wolf`.
    phones: [
      { label: 'Laurent Achard', display: '514 395-1937', href: 'tel:+15143951937' },
      { label: 'David Alexandre Wolf', display: '514 412-0370', href: 'tel:+15144120370' },
    ],
    emails: [
      { label: 'laurent.achard@bnc.ca', href: 'mailto:laurent.achard@bnc.ca' },
      { label: 'davidalexandre.wolf@bnc.ca', href: 'mailto:davidalexandre.wolf@bnc.ca' },
    ],
  },

  footer: {
    // ---- CTA band: THREE RELOCATED LIVE STRINGS, NOT NEW COPY (D-07).
    // The live home page closes on exactly this block — an `Obtenez les
    // coordonnées…` paragraph under a `Contactez-nous` heading, above the two
    // advisors' numbers. The rebuild promotes it to site chrome so it closes
    // every page instead of only the home page; the words are unchanged.
    //   eyebrow  <h2>  fr-nous-joindre.html
    //   heading  <h3>  fr-home.html
    //   lead     <p>   fr-home.html  (source wraps mid-sentence; renders as one
    //                  space, reproduced here as one space)
    // Nothing here is authored, so no NC- row — see D-07 for the relocation.
    ctaEyebrow: 'Nous sommes à votre écoute',
    ctaHeading: 'Contactez-nous',
    ctaLead: 'Obtenez les coordonnées des membres de notre équipe et voyez où se trouvent nos bureaux.',
    ctaButton: { label: 'Nous joindre', href: '/contact/' },
    addressTitle: 'Bureau',
    // Authored UI label for the site-navigation column the live footer does not
    // have. Candidate register row.
    navTitle: 'Navigation',
    // ---- SPLICED, byte-exact from fr-home.html. Root-relative hrefs have been
    // resolved host-absolute against https://www.fbngp.ca so they do not 404 on
    // a new domain. Do not edit by hand.
    columns: [
      {
        "title": "Liens d’informations et de contact",
        "links": [
          {
            "label": "Nous joindre",
            "href": "https://www.fbngp.ca/contact.html",
            "external": true
          },
          {
            "label": "Trouver un conseiller",
            "href": "https://www.fbngp.ca/conseiller.html",
            "external": true
          },
          {
            "label": "Informations réglementaires",
            "href": "https://www.fbngp.ca/a-propos/informations-reglementaires.html",
            "external": true
          },
          {
            "label": "Résolution des insatisfactions",
            "href": "https://www.fbngp.ca/resolution-insatisfactions.html",
            "external": true
          },
          {
            "label": "Notre organisation",
            "href": "https://www.fbngp.ca/a-propos.html",
            "external": true
          },
          {
            "label": "Banque Nationale du Canada",
            "href": "https://www.bnc.ca/particuliers.html",
            "external": true
          },
          {
            "label": "Filiales Banque Nationale",
            "href": "https://www.bnc.ca/coordonnees.html",
            "external": true
          },
          {
            "label": "Carrières",
            "href": "https://www.fbngp.ca/carriere.html",
            "external": true
          },
          {
            "label": "Communiqués",
            "href": "https://www.bnc.ca/a-propos-de-nous/nouvelles-medias.html",
            "external": true
          }
        ]
      },
      {
        "title": "Liens de règlementation",
        "links": [
          {
            "label": "Convention",
            "href": "https://www.fbngp.ca/convention.html",
            "external": true
          },
          {
            "label": "Politique de protection des renseignements personnels",
            "href": "https://www.bnc.ca/politique-de-confidentialite.html",
            "external": true
          },
          {
            "label": "Politique sur les données numériques",
            "href": "https://www.fbngp.ca/politique-donnees-numeriques.html",
            "external": true
          },
          {
            "label": "ABC de la sécurité",
            "href": "https://www.bnc.ca/abc-securite.html",
            "external": true
          },
          {
            "label": "Accessibilité",
            "href": "https://www.bnc.ca/a-propos-de-nous/esg/enonce-sur-accessibilite.html",
            "external": true
          },
          {
            "label": "Rapport d'étape sur l'accessibilité",
            "href": "https://www.bnc.ca/a-propos-de-nous/esg/rapport-etape-accessibilite.html",
            "external": true
          },
          {
            "label": "Processus de rétroaction en matière d'accessibilité",
            "href": "https://www.bnc.ca/a-propos-de-nous/esg/plan-accessibilite.html#2.2",
            "external": true
          }
        ]
      }
    ],
    regulatory: {
      // VERBATIM landmark name — live `<nav aria-label="Partenaires"
      // class="fourth-level">`, holding exactly the marks below it.
      navAriaLabel: "Partenaires",
      "ciro": {
        "label": "OCRI",
        "href": "https://www.ocri.ca/",
        "external": true
      },
      "ciroLogoAlt": "Organisme Canadien de Réglementation des Investissements (OCRI), lien externe qui s'ouvre dans un nouvel onglet.",
      "ciroAdvisorReport": {
        "label": "Consultez les rapports Info-Conseiller de l'OCRI",
        "href": "https://www.ocri.ca/bureau-des-investisseurs/rapport-info-conseiller",
        "external": true,
        "ariaLabel": "Consultez les rapports Info-Conseiller de l'OCRI, lien externe qui s'ouvre dans un nouvel onglet."
      },
      "cipf": {
        "label": "FCPI",
        "href": "https://www.fcpi.ca/",
        "external": true
      },
      "cipfLogoAlt": "Fonds Canadien de protection des investisseurs (FPCI), lien externe qui s'ouvre dans un nouvel onglet.",
      "linkedin": {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/financi-re-banque-nationale/",
        "external": true,
        "ariaLabel": "LinkedIn, lien externe qui s'ouvre dans un nouvel onglet."
      },
      "nbMarkAlt": "Banque Nationale"
    },
    legal: {
      navAriaLabel: "Notes légales et réseaux sociaux",
      // FROZEN string. Never computed from the clock.
      copyright: "© FBNGP Tous droits réservés 2026.",
      links: [],
    },
  },

  legalNotes: {
    // Confirm against the capture before sign-off.
    title: 'Notes légales',
    // ---- SPLICED from the platform-standard block. Verified byte-identical
    // across two unrelated NBF teams in both languages. DIFF these against
    // source-assets/html/fr-nos-services.html; do not re-transcribe. If the
    // diff shows any change, National Bank has revised its standard wording and
    // that needs a register row.
    items: [
      "Les planificateurs financiers sont autorisés à agir dans la discipline de planification financière. Ils exercent leurs activités pour le compte de la Financière Banque Nationale inc., cabinet en planification financière.",
      "Nous travaillons en étroite collaboration avec l’équipe fiscalité, retraite et succession de Banque Nationale Trust, composée d’experts multidisciplinaires dont les connaissances et les conseils viennent compléter notre offre de services. Ces experts nous accompagnent pour fournir les meilleures solutions pour vos finances personnelles liées à la fiscalité, à la retraite ainsi qu'à la succession.",
      "Les produits et services d'assurance sont fournis par le Cabinet d'assurance Banque Nationale inc. (CABN) ou les Services Financiers FBN (SFFBN), selon le cas. CABN et SFFBN ne sont pas membres du Fonds canadien de protection des investisseurs (FCPI). Les produits d'assurance ne sont pas protégés par le FCPI.",
      "Les solutions de financement sont octroyées sous réserve de l'approbation de crédit de la Banque Nationale.",
      "Pour tous les détails et conditions de l’offre, communiquez avec votre conseiller."
    ],
  },

  contactStrip: {
    heading: 'Nous joindre',
    closeLabel: 'Fermer',
    callLabel: 'Appeler',
    emailLabel: 'Écrire',
  },

  notFound: {
    eyebrow: 'Erreur 404',
    heading: 'Page introuvable',
    lead: "La page que vous cherchez n'existe plus ou a été déplacée.",
  },
};

export default strings;
