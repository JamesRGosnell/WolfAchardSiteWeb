import type { ServicesContent } from './services.types';
import { pathFor } from '../../lib/i18n';

/**
 * FRENCH services page —
 * `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nos-services.html`
 * Capture: `source-assets/html/fr-nos-services.html` (69,258 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order. Nothing is reordered, nothing is added, and nothing is
 * translated from the English page — which on THIS page means: no `Our
 * approach` section, no `Purpose` / `Main benefits` lists, and no per-service
 * footnote sentences. P-16 runs in both directions and the English services
 * page is the fatter one (52 list items against this page's 5).
 *
 * CHARACTERS AND WORDINGS THAT LOOK LIKE MISTAKES AND ARE NOT OURS:
 *  · `qui lui sont propre` (opener) — live typo, F-02, PENDING. No §6 policy
 *    amendment exists, so it ships verbatim with a flag.
 *  · `à l’intérieure des dispositions` (Planification fiscale) — F-03, PENDING.
 *  · `Planification fiscale : La planification fiscale est…` — the block
 *    repeats its own title inside its first sentence. Live. Ships sic.
 *  · `Demandez nous plus d’informations sur le Services d’assistance
 *    juridique` (Solutions bancaires) — two live defects in one clause
 *    (missing hyphen in `Demandez-nous`, `le` against a plural link label).
 *    No F- row exists for either; both ship verbatim, both are reported.
 *  · `L’objectif est d'assurer une tranquillité d’esprit` mixes U+2019 and
 *    U+0027 INSIDE ONE SENTENCE. So does the wheel `alt`. Reproduced as served
 *    (COMPLIANCE.md §0); a normalising pipeline silently rewrites this.
 *  · Four literal U+00A0 live in the strings below (Assurances paragraph 1,
 *    the two Philanthropie ones, and the wheel caption). They are written as
 *    real characters, not ` ` escapes, so the verbatim sweep can see them.
 *
 * MARKERS. The live page renders exactly ONE marker — `<sup> 1, 2, 3</sup>`,
 * opening with a U+00A0 and NOT a plain space — on the wheel caption, and the
 * `Notes légales` accordion resolves it. That single comma-list becomes three
 * real `<sup>` links into `#legal-note-1|2|3`; see D-24.
 *
 * THE BANKING BLOCK CARRIES FEE AND FINANCING CLAIMS AND NO MARKER — `gratuités
 * sur les comptes courants`, `rabais de taux d’intérêt` (C-42). Disclaimers 4
 * and 5 govern exactly those claims, render on this very page, and are cited by
 * nothing anywhere on the site (R-04). A marker is NOT invented here: inventing
 * a regulatory reference the live page does not carry is P-6. Reported instead.
 *
 * LANGUAGE PURITY (P-4): only French copy, French artwork, `bnc.ca` / `fbngp.ca`
 * URLs and `@bnc.ca` addresses. An `@nbc.ca` address, an `nbfwm.ca` URL or an
 * English alt string appearing here is a defect.
 */

/* ---------------------------------------------------------------- artwork --
 * ORIGINAL DAM masters (`data-asset`), not the rendered rendition.
 *
 * The banner and the wheel are BESPOKE FRENCH ARTWORK. The wheel bakes the
 * words `Groupe Wolf Achard` and `Vous` into the image — text in an image is
 * still a claim (C-51) — while the English page's wheel is National Bank's
 * generic diagram which never names the team. Neither is swapped for the other.
 *
 * `picto-toolbox.svg` IS ONE SHARED FILE, deliberately. The two language trees
 * load it from different Experience Fragment paths, but `data-asset` resolves
 * to the same DAM object in both and the pictogram carries no wording at all.
 * Two copies would make the bundler dedupe them by content hash and serve one
 * language a file named for the other — which a P-4 grep flags, and should.
 * Same reasoning as the wordless `logo-cp-fbngp-s.svg` whitelist entry. */
import banner from '../../images/services/ban-page-nos-services-groupe-wolf-achard.jpg';
import wheel from '../../images/services/img-nos-services-groupe-wolf-achard-767.png';
import toolboxIcon from '../../images/services/picto-toolbox.svg';

const contact = pathFor('contact', 'fr');

/** Host-absolute per language (§3.2). A root-relative path 404s on a new domain. */
const FBNGP = 'https://www.fbngp.ca';

const content: ServicesContent = {
  locale: 'fr',

  meta: {
    // Live <title>: `Nos services | Financière Banque Nationale - Gestion de
    // patrimoine`. BaseLayout appends the suffix from fr.ts.
    title: 'Nos services',
    description:
      'Le service que nous procurons va au-delà de la gestion de patrimoine et de la gestion de portefeuille. Nous nous engageons à vous offrir une planification exhaustive, et personnalisée à votre situation.',
  },

  hero: {
    // VERBATIM live <h1>, at label size.
    heading: 'Nos services',
    // VERBATIM live <p> from the same teaser, promoted to the display line.
    message: 'Profitez de notre expertise',
    banner: {
      src: banner,
      // Valueless `alt` on the live <img> — decorative, as captured. N-12.
      alt: '',
      widths: [767, 991, 1199, 2000],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  intro: {
    heading: 'Une approche globale pour la gestion de votre patrimoine',
    body: [
      [
        // `qui lui sont propre` — F-02, PENDING. Ships sic.
        'La gestion de patrimoine a pour objectif de maximiser la valeur nette d’un investisseur dans le respect de critères et de paramètres qui lui sont propre. Afin d’atteindre cet objectif, le Groupe Wolf Achard offre une large gamme de services.',
      ],
    ],
  },

  /* NO `approach` KEY. The English page has an entire `Our approach` section —
     an H2, a lead paragraph, four numbered steps and eight bullets. French has
     none of it. Translating it is prohibited (P-16); the absence is the
     finding, and the section simply does not exist on this page. */

  services: {
    // No `heading` and no `lead`: unlike the English page, the French wheel
    // follows the opener directly, with no `Nos services` H2 above it.
    wheel: {
      image: {
        src: wheel,
        // Live `alt`, U+0027 apostrophe (`&#39;` in the markup). C-51 — the
        // words `Groupe Wolf Achard` and `Vous` are baked into the artwork.
        alt: "Une roue qui représente sept schémas sur l'expertise en gestion du patrimoine.",
        widths: [383, 575, 767],
        sizes: '(min-width: 60rem) 30rem, calc(100vw - 2.5rem)',
      },
      caption: {
        // §1.6: the French page carries this disclosure ONCE, with NO terminal
        // period, and no per-service footnote sentence may be added to match
        // the English page's six. The trailing character is the live U+00A0
        // that opens `<sup> 1, 2, 3</sup>`; it is kept on the text so the
        // marker element itself stays clean. D-24.
        text: 'Certains services sont offerts par des tiers ',
        refs: [1, 2, 3],
      },
    },

    // LIVE ORDER: fiscale 3rd, successorale 4th. The English page runs estate
    // 3rd and tax 4th. Each tree keeps its own order.
    blocks: [
      {
        id: 'gestion-de-portefeuille',
        title: 'Gestion de portefeuille',
        body: [
          [
            'La gestion de portefeuille consiste à prendre des décisions d’investissement afin de générer des revenus et d’enregistrer des plus-values sur la durée. La gestion active, la gestion indicielle, l’analyse technique et l’analyse fondamentale sont des exemples de différentes méthodes de gestion de portefeuille.',
          ],
          [
            'Pour en apprendre plus sur notre philosophie de placements, n’hésitez pas à nous contacter et prendre rendez-vous!',
          ],
        ],
      },
      {
        id: 'planification-financiere',
        title: 'Planification financière',
        body: [
          [
            'La planification financière est un processus qui consiste à définir vos objectifs financiers et à élaborer un plan optimal pour les atteindre. Cela implique de créer une stratégie personnalisée adaptée à votre situation personnelle, professionnelle et financière.',
          ],
          [
            'Qu’il s’agisse de planifier l’achat d’une propriété, les études des enfants ou votre retraite, nous sommes confiants de pouvoir vous aider à réaliser vos projets!',
          ],
        ],
      },
      {
        id: 'planification-fiscale',
        title: 'Planification fiscale',
        body: [
          [
            // The block repeats its own title inside the sentence, and
            // `à l’intérieure` is F-03 (PENDING). Both live, both sic.
            'Planification fiscale : La planification fiscale est un processus qui consiste à définir une stratégie dont les objectifs consistent à réduire autant que possible la charge d’impôt et/ou d’en retarder le paiement en restant toujours à l’intérieure des dispositions de la loi.',
          ],
          [
            'La planification fiscale peut inclure la mise en place d’une structure corporative, un plan d’allocation d’actifs, des méthodes de fractionnement de revenus ou d’autres stratégies fiscales.',
          ],
        ],
      },
      {
        id: 'planification-successorale',
        title: 'Planification successorale',
        body: [
          [
            'La planification successorale est le processus par lequel une personne organise la distribution de ses biens et de son patrimoine après son décès.',
          ],
          [
            'Cela inclut généralement la rédaction d’un testament, la mise en place de fiducies et d’autres mécanismes juridiques pour s’assurer que la volonté du défunt est respectée et que les héritiers sont protégés.',
          ],
        ],
      },
      {
        id: 'assurances',
        title: 'Assurances',
        body: [
          [
            // Trailing U+00A0 — in the capture (`d’une organisation.&#160;</p>`).
            'Les assurances sont la pierre angulaire de la gestion de risque et permettent d’assurer la stabilité et la protection des finances d’un individu ou d’une organisation. ',
          ],
          [
            // U+2019 in `L’objectif` and `d’esprit`, U+0027 in `d'assurer` —
            // one sentence, two apostrophes. As served.
            "L’objectif est d'assurer une tranquillité d’esprit aux clients qui savent que leurs objectifs de vie pourront être atteints, même en cas d’imprévus.",
          ],
        ],
      },
      {
        id: 'solutions-bancaires',
        title: 'Solutions bancaires',
        // C-42 / R-04. `gratuités sur les comptes courants` and `rabais de taux
        // d’intérêt` are fee and rate claims, and the live block carries NO
        // marker — so disclaimers 4 (credit approval) and 5 (offer conditions)
        // render on this page citing nothing. Not repaired here: adding a
        // marker the live page does not have is inventing a regulatory
        // reference (P-6). Reported for compliance.
        body: [
          [
            'Pour effectuer leurs transactions quotidiennes, nos clients profitent de tous les produits bancaires à frais réduits. Cela inclut des gratuités sur les comptes courants et des rabais de taux d’intérêt sur les produits de financement. Demandez nous plus d’informations sur le ',
            {
              link: 'Services d’assistance juridique',
              href: 'https://www.bnc.ca/particuliers/comptes/services/assistance-juridique.html',
              external: true,
            },
            ' et services de ',
            {
              link: 'soins de santé virtuels',
              href: 'https://www.bnc.ca/particuliers/comptes/services/clinique-virtuelle.html',
              external: true,
            },
            ' (télémédecine).',
          ],
        ],
      },
      {
        id: 'philanthropie',
        title: 'Philanthropie',
        // C-44. The English `Philanthropy` block never mentions Fondation
        // Philantra and carries no outbound link at all. Not added there.
        body: [
          [
            'La ',
            {
              link: 'Fondation Philantra',
              href: 'https://www.bnc.ca/particuliers/epargne-placements/fondation-philantra.html',
              external: true,
            },
            // Opens with U+00A0 (live) and closes with U+00A0 (live).
            ' vous offre la possibilité de créer votre fonds de bienfaisance sans avoir à vous préoccuper des délais, des coûts et de la complexité administrative liés à la création et la gestion d’une fondation privée. ',
          ],
        ],
      },
    ],
  },

  /* SYNDICATED. This block is National Bank's `boite_outils_v3` Experience
     Fragment, not this team's content — the live markup wraps it in
     `class="experiencefragment"` and serves the pictogram from
     `/content/experience-fragments/fbngp/boite_outils_v3/boite-a-outils-v3-fr/`.
     A static rebuild freezes what the bank keeps current (P-14, S-01). */
  toolbox: {
    icon: {
      src: toolboxIcon,
      // Live `alt`, U+0027 apostrophes.
      alt: "Une illustration d'une clé et d'un tournevis à l'intérieur d'un cercle bleu.",
      widths: [200],
      sizes: '4rem',
    },
    heading: 'Boîte à outils',
    lead: 'Nos ressources utiles vous aideront à gérer efficacement et à mieux comprendre vos finances.',
    // Live document order: left column top-to-bottom, then right column.
    // Every one opens in a new tab on the live site.
    links: [
      { label: 'Comprendre vos relevés', href: `${FBNGP}/documentation/releves.html`, external: true },
      { label: 'Comprendre vos accès en ligne', href: `${FBNGP}/services-numeriques.html`, external: true },
      {
        // The French budget tool has its own correct URL. Its ENGLISH twin
        // points at the mortgage calculator instead (N-08) — a live broken
        // link this page proves is fixable, but only NBF may supply the right
        // English destination.
        label: 'Outil budgétaire',
        href: 'https://www.bnc.ca/formulaires/epargne-placements/calculer-budget-en-ligne.html',
        external: true,
      },
      {
        label: 'Centre de messagerie',
        href: `${FBNGP}/content/dam/fbngp/pdf/guide-centre-de-messagerie.pdf`,
        external: true,
      },
      {
        label: 'Calculatrice hypothécaire',
        href: 'https://www.bnc.ca/particuliers/hypotheque/calculatrices/versements.html',
        external: true,
      },
      { label: 'Comprendre les relevés fiscaux', href: `${FBNGP}/documentation/impots.html`, external: true },
      {
        // Undated filenames — nothing pinned to a year (P-14).
        label: 'Guide fiscalité et investissement - Canada (excepté Québec)',
        href: `${FBNGP}/content/dam/fbngp/pdf/guide-fiscal-can-fbngp.pdf`,
        external: true,
      },
      {
        label: 'Guide fiscalité et investissement - Québec',
        href: `${FBNGP}/content/dam/fbngp/pdf/guide-fiscal-qc-fbngp.pdf`,
        external: true,
      },
    ],
  },

  // Live container id of the `Notes légales` accordion, kept so an existing
  // deep link still lands. The five note ids are `#legal-note-1`…`5`.
  legalNotesId: 'notes-legales',

  contact: {
    // <h3> on the live page, in both languages.
    heading: 'Contactez-nous',
    lead: 'Obtenez les coordonnées des membres de notre équipe et voyez où se trouvent nos bureaux.',
    link: { label: 'Voir nos coordonnées', href: contact },
    // C-03 / C-04: the FR page spaces these numbers, the EN page hyphenates
    // them. Per-page verbatim; never harmonised.
    phones: [
      { display: '514 395-1937', href: 'tel:+15143951937' },
      { display: '514 412-0370', href: 'tel:+15144120370' },
    ],
    // C-05 / C-06: `@bnc.ca` in the French tree, always.
    emails: [
      { display: 'laurent.achard@bnc.ca', href: 'mailto:laurent.achard@bnc.ca' },
      { display: 'davidalexandre.wolf@bnc.ca', href: 'mailto:davidalexandre.wolf@bnc.ca' },
    ],
  },
};

export default content;
