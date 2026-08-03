import type { HomeContent } from './home.types';
import { pathFor } from '../../lib/i18n';

/**
 * FRENCH home page — `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
 * Capture: `source-assets/html/fr-home.html` (83,888 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order. Nothing is reordered, nothing is added, nothing is translated
 * from the English page (P-16 runs in both directions).
 *
 * CHARACTERS THAT LOOK LIKE MISTAKES AND ARE NOT:
 *  · `financier ` and `financière ` in `Notre mission` end with a TRAILING
 *    U+00A0. It is in the live markup (`…financier </li>`). C-26.
 *  · The apostrophe is U+2019 in body copy but plain U+0027 inside several alt
 *    strings (`d'homme`, `Quelqu'un`). The live markup genuinely mixes them
 *    inside single sentences; both forms ship as found (§0 of COMPLIANCE.md).
 *  · `fiscalement optimisé.` (masculine singular, agreeing with nothing) and
 *    `d'une cinquantaine d'année` (singular) are live typos. No F- row exists
 *    for either and no policy amendment authorises one, so they ship verbatim.
 *
 * LANGUAGE PURITY (P-4): this file contains only French copy, French artwork
 * and `@bnc.ca` addresses. An `@nbc.ca` address, an `nbfwm.ca` URL or an
 * English alt string appearing here is a defect.
 */

/* ---------------------------------------------------------------- artwork --
 * Page-local imports. These are the ORIGINAL DAM assets (the `data-asset`
 * master, not the rendered rendition), copied from `source-assets/images/`.
 * The FR tree references only FR artwork — the bespoke team banner.
 *
 * THE THREE NEWS TEASERS ARE ONE SHARED ASSET EACH, deliberately. The DAM
 * serves them from `/images-teasers/fr/` and `/images-teasers/en/`, but the two
 * files are BYTE-IDENTICAL (verified by hash) and carry no baked-in language.
 * Keeping two copies made the bundler dedupe them by content hash and serve the
 * French page an asset literally named `…-en.webp`, which a language-purity
 * grep flags and should flag (P-4). One neutral file — the DAM's own basename —
 * is both truthful and clean. Same reasoning as the P-4 whitelist entry for the
 * wordless `logo-cp-fbngp-s.svg` flag. If NBF ever diverges the two renditions,
 * split them again. */
import banner from '../../images/home/ban-page-accueil-groupe-wolf-achard.jpg';
import introPhoto from '../../images/home/img-page-accueil-poignee-de-mains.jpg';
import distinctionsPhoto from '../../images/home/img-page-accueil-homme-souriant-yacht.jpg';
import icon1 from '../../images/home/icone-1-handshake-246x313.svg';
import icon2 from '../../images/home/icone-2-strategie-246x313.svg';
import icon3 from '../../images/home/icone-3-survey-246x313.svg';
import icon4 from '../../images/home/icone-4-speech-246x313.svg';
import teaserSpotlight from '../../images/home/img-teaser-spotlight.jpg';
import teaserEconomic from '../../images/home/img-teaser-economic-news.jpg';
import teaserGuides from '../../images/home/img-teaser-guides-tools.jpg';

const news = pathFor('news', 'fr');
const contact = pathFor('contact', 'fr');

/** Source widths, so no `widths` array below ever asks sharp to upscale. */
const HALF_SIZES = '(min-width: 60rem) 34rem, calc(100vw - 2.5rem)';
const THIRD_SIZES = '(min-width: 60rem) 22rem, calc(100vw - 2.5rem)';

const content: HomeContent = {
  locale: 'fr',

  meta: {
    // Live <title> is `Groupe Wolf Achard | Financière Banque Nationale -
    // Gestion de patrimoine`; BaseLayout appends the suffix from fr.ts, so only
    // the leading segment belongs here. BaseLayout renders `title | suffix`, and prints no brand name of
    // its own, so the leading segment must be supplied here.
    title: 'Groupe Wolf Achard',
    description:
      'Comptez sur un partenaire financier solide avec la Financière Banque Nationale - Gestion de patrimoine. Découvrez comment nous pouvons vous aider avec un accompagnement personnalisé.',
  },

  hero: {
    // VERBATIM live <h1>. Ships as captured, at label size.
    heading: 'Groupe Wolf Achard',
    // VERBATIM live <p> from the same teaser, promoted to the display line.
    message: 'Réalisons des projets ambitieux',
    banner: {
      src: banner,
      // The live <img> carries a valueless `alt` attribute — decorative. N-12
      // lists all 12 hero banners as alt-less; writing one is authoring.
      alt: '',
      widths: [767, 1199, 1600, 2000],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  intro: {
    heading: 'Une gestion de patrimoine sur mesure pour des clients uniques',
    body: [
      [
        'Lorsqu’on parle de gestion de patrimoine et investissements, nous pensons que la situation de chaque client présente des contraintes à respecter, mais aussi des opportunités. C’est dans cet état d’esprit que nous établissons des stratégies financières personnalisées, fiscalement optimisé.',
      ],
      [
        'Nous sommes présents pour nos clients et lorsque surviennent des changements importants, nous adaptons notre stratégie rapidement. C’est ainsi que nous veillons à leur ',
        { strong: 'avenir financier.' },
      ],
    ],
    image: {
      src: introPhoto,
      alt: "Femme souriante qui serre la main d'homme dans un contexte professionnel.",
      widths: [383, 575, 767],
      sizes: HALF_SIZES,
    },
  },

  // `Notre mission` and `Nos engagements`, in live document order. C-26.
  lists: [
    {
      heading: 'Notre mission',
      items: [
        // Trailing U+00A0 — in the capture, ships as found.
        'Sécuriser votre avenir financier ',
        'Vous accompagner dans la réalisation de vos projets de vie ambitieux',
        // Trailing U+00A0.
        'Être le partenaire principal dans votre réussite financière ',
        'Construire une relation à long terme basée sur la confiance et le professionnalisme',
      ],
    },
    {
      heading: 'Nos engagements',
      items: [
        'Agir de manière intègre et communiquer de façon transparente',
        'Demeurer informés pour prendre des décisions éclairées',
        'Investir de manière audacieuse sans être imprudents',
        'Respecter tous nos engagements pour assurer le travail bien fait et le devoir accompli',
      ],
    },
  ],

  // C-27. Mentions `rendements` — the only return-adjacent language on the
  // site. It promises nothing and P-2 forbids extending it.
  essay: {
    heading: 'Notre philosophie',
    body: [
      'Nous mettons autant le focus sur la ',
      { strong: 'planification financière' },
      ' et ',
      { strong: 'l’optimisation fiscale' },
      ' que sur ',
      { strong: 'la gestion de portefeuille' },
      '. Nous pensons que le véritable objectif ne se limite pas aux rendements des investissements mais réside dans le rendement net pour l’investisseur. Dans cette optique, certains éléments tels que l’allocation d’actifs, le fractionnement de revenus ou encore le report d’impôts sont susceptibles d’avoir un impact majeur pour nos clients.',
    ],
  },

  // C-25. No English equivalent exists; do not translate (P-16).
  distinctions: {
    heading: 'Ce qui nous distingue',
    items: [
      'Connaissance approfondie de la gestion de patrimoine pour entrepreneurs et professionnels incorporés',
      'Croissance efficace du patrimoine sans fragiliser la santé financière de la compagnie ni affecter la capacité d’emprunt',
      'Compréhension du fonctionnement d’une entreprise, surtout si elle est la pièce maîtresse du patrimoine',
    ],
    image: {
      src: distinctionsPhoto,
      alt: "Homme d'une cinquantaine d'année assis souriant et heureux sur un bateau.",
      widths: [383, 575, 767],
      sizes: HALF_SIZES,
    },
  },

  process: {
    heading: 'Un processus éprouvé',
    /* F-20 - TRUNCATED, NOT REWRITTEN. The live lead ends
       `... En effet, vous pourrez toujours compter sur:` and the next thing on
       the page is the h3 `Faisons connaissance` - a process step, not a thing
       you can count on. The colon promises a list the client never wrote; the
       live document order (h2 > this p > h3 Faisons connaissance) confirms the
       dangle is theirs, not ours. Cutting at the sentence boundary removes the
       broken promise using only their words - no clause is rewritten and none
       is invented. The remaining sentence is complete and introduces the
       section cleanly. Reverting restores the live text exactly.
       NOTE: their `Nos engagements` list IS four things a client can count on;
       if they want the colon back, that list is the honest continuation. */
    lead: 'Nos conseils, notre accompagnement et notre dévouement sont très appréciés de tous nos clients.',
    titleAs: 'h3',
    steps: [
      {
        // ⚠ The four `alt` strings below describe a target, a star, rigour and a
        // magnifying glass — they are the ENGLISH page's approach-icon
        // descriptions, attached here to entirely different artwork
        // (handshake / strategy / survey / speech bubble). That is a live-site
        // defect, reported as a new N- row; it is NOT repaired here, because
        // writing replacement alt text for a client's brand artwork is
        // authoring (P-9, N-12 precedent).
        icon: {
          src: icon1,
          alt: 'Icône de cible représentant une approche globale et personnalisée.',
          widths: [246],
          sizes: '3.5rem',
        },
        title: 'Faisons connaissance',
        description:
          'Nous voulons en apprendre le plus possible sur vous, votre parcours et vos projets. Parlez-nous de votre famille ou de votre travail.',
      },
      {
        icon: {
          src: icon2,
          alt: "Icône d’étoile symbolisant l'intégrité dont nous faisons preuve.",
          widths: [246],
          sizes: '3.5rem',
        },
        title: 'Établissons une stratégie',
        description:
          'Sur la base de votre situation personnelle, professionnelle et financière, nous vous proposerons une stratégie personnalisée.',
      },
      {
        icon: {
          src: icon3,
          alt: 'Icône symbolisant la rigueur qui guide notre travail.',
          widths: [246],
          sizes: '3.5rem',
        },
        title: 'Déployons notre plan',
        description:
          'Mettons à exécution votre plan financier. Nous veillerons à la gestion continue de votre portefeuille et maintiendrons le cap sur vos objectifs.',
      },
      {
        icon: {
          src: icon4,
          alt: 'Icône de loupe symbolisant la façon dont nous prenons des décisions et communiquons avec vous.',
          widths: [246],
          sizes: '3.5rem',
        },
        title: 'Restons en contact',
        description:
          'Les aléas de la vie peuvent modifier vos projets et vos priorités. Chaque fois qu’un changement important surviendra, discutons-en.',
      },
    ],
  },

  news: {
    heading: 'Nouvelles et articles',
    teasers: [
      {
        image: {
          src: teaserSpotlight,
          alt: 'Un homme et une femme consultent leurs finances sur un ordinateur portable.',
          widths: [383, 575, 767],
          sizes: THIRD_SIZES,
        },
        title: 'Contenus en vedette',
        blurb: 'Restez au courant des tendances du mois.',
        // Live: `/conseiller/groupe-wolf-achard/nouvelles-articles.html#spotlight`.
        // The path moves with the site-wide restructure (U-01); the FRAGMENT is
        // the live one and must keep matching the news page's section ids.
        href: `${news}#spotlight`,
      },
      {
        image: {
          src: teaserEconomic,
          alt: 'Stéfan Marion, économiste et stratège en chef de la Banque Nationale du Canada et de la Financière Banque Nationale.',
          widths: [383, 575, 767],
          sizes: THIRD_SIZES,
        },
        title: 'Actualités économiques',
        blurb: 'Lisez les dernières nouvelles financières de nos experts de la Banque Nationale.',
        href: `${news}#economic`,
      },
      {
        image: {
          src: teaserGuides,
          alt: "Quelqu'un qui calcule ses finances à un bureau.",
          widths: [383, 575, 767],
          sizes: THIRD_SIZES,
        },
        title: 'Guides et outils',
        blurb: 'Consultez nos guides et outils utiles pour simplifier vos finances.',
        href: `${news}#guide`,
      },
    ],
    allLink: { label: 'Toutes les nouvelles et articles', href: news },
  },

  contact: {
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
