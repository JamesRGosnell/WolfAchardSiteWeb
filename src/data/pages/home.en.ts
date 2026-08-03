import type { HomeContent } from './home.types';
import { pathFor } from '../../lib/i18n';

/**
 * ENGLISH home page — `https://www.nbfwm.ca/advisor/wolf-archard-group.html`
 * Capture: `source-assets/html/en-home.html` (72,241 bytes)
 *
 * THIS IS NOT A TRANSLATION OF `home.fr.ts`. It is a different page. It has no
 * mission, no commitments, no philosophy essay, no differentiators and ZERO
 * list items, and its four process steps are bare `<p>` labels with no
 * described paragraph. Those blocks are absent from this object rather than
 * empty, so the page component cannot render a heading over nothing.
 *
 * P-16: writing English copy to close that gap is PROHIBITED — it would be
 * invented copy about named, licensed individuals. The gap is the finding
 * (INTAKE.md Q3), not a hole for a builder to fill. The prohibition runs both
 * ways: `Personalized support` and `Discover our company` below have no French
 * counterpart and must not be translated into `home.fr.ts`.
 *
 * `Wolf Archard` — with the second R — is the live English spelling in the
 * `<title>`, the `<h1>`, the nav and the URL slug, while the English LOGO
 * artwork reads `Wolf Achard Group` and French says `Achard` everywhere. It is
 * the team's own name, so it ships exactly as live (C-21 / N-01). Do not
 * "correct" it here.
 *
 * LANGUAGE PURITY (P-4): only English copy, English artwork and `@nbc.ca`
 * addresses. A `@bnc.ca` address or an `fbngp.ca` URL here is a defect.
 */

/* ---------------------------------------------------------------- artwork --
 * The EN hero banner is National Bank's GENERIC microsite banner
 * (`/content/dam/fbngp/ban/fbngp-accueil/img-microsites-aspirationnel.jpg`),
 * not the bespoke artwork the French page gets. That divergence is the live
 * site's, reproduced as found and reported — it is the same pattern as the
 * un-branded English services diagram (INTAKE.md Q4). */
import banner from '../../images/home/img-microsites-aspirationnel.jpg';
import companyPhoto from '../../images/home/img-nos-services-homme-femme-travail.jpg';
import iconApproach from '../../images/home/picto-approche.svg';
import iconIntegrity from '../../images/home/picto-integrite.svg';
import iconProfessionalism from '../../images/home/picto-professionnalisme.svg';
import iconTransparency from '../../images/home/picto-transparence.svg';
// The three teaser photographs are ONE shared asset each: the FR and EN DAM
// renditions are byte-identical and carry no baked-in language. See the note in
// home.fr.ts — two copies made the bundler serve the FRENCH page an `-en`-named
// file, which is a P-4 breach a purity grep must keep catching.
import teaserSpotlight from '../../images/home/img-teaser-spotlight.jpg';
import teaserEconomic from '../../images/home/img-teaser-economic-news.jpg';
import teaserGuides from '../../images/home/img-teaser-guides-tools.jpg';

const news = pathFor('news', 'en');
const contact = pathFor('contact', 'en');
const team = pathFor('team', 'en');

const HALF_SIZES = '(min-width: 60rem) 34rem, calc(100vw - 2.5rem)';
const THIRD_SIZES = '(min-width: 60rem) 22rem, calc(100vw - 2.5rem)';

const content: HomeContent = {
  locale: 'en',

  meta: {
    // Live <title>: `Wolf Archard Group | National Bank Financial - Wealth
    // Management`. BaseLayout renders `title | suffix` and prints no brand name of
    // its own, so the leading segment is supplied here. `Archard` is the live
    // misspelling and ships verbatim.
    title: 'Wolf Archard Group',
    description:
      'With National Bank Financial - Wealth Management, you can rely on a solid financial partner. Find out how our personalized support can help you.',
  },

  hero: {
    heading: 'Wolf Archard Group',
    // C-52. VERBATIM live <p> beside the <h1>, promoted to the display line.
    // `expert team` is an unsubstantiated claim the French page does not make;
    // it is approved live copy and ships unchanged, but it is not extended.
    message: 'Our expert team is here to meet your financial needs',
    banner: {
      src: banner,
      // Valueless `alt` on the live <img> — decorative, as captured.
      alt: '',
      widths: [767, 991, 1199],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  /* ---- ENGLISH-ONLY. No French counterpart exists; do not create one. ---- */
  support: {
    heading: 'Personalized support',
    body: [
      [
        'Our team is made up of highly qualified investment professionals with many years of experience in wealth management.',
      ],
      [
        'We leverage the expertise of all ',
        // Inline link on the single word `team`, exactly as the live markup has
        // it. The destination moves with the site restructure (U-01).
        { link: 'team', href: team },
        ' members to ensure our clients get the best possible financial management advice.',
      ],
    ],
  },

  company: {
    heading: 'Discover our company',
    image: {
      src: companyPhoto,
      alt: 'A man and a woman look at a notebook in a glass office.',
      widths: [383, 575, 767],
      sizes: HALF_SIZES,
    },
    // `Our purpose` is an <h3> that carries no prose of its own on the live
    // page — the two <h4> blocks below sit under it.
    subheading: 'Our purpose',
    points: [
      {
        heading: 'Our objectives',
        body: [
          'As your partner in financial success, we\'re here to support you with all your investment goals. You can count on our help to make your money work for you.',
        ],
      },
      {
        heading: 'Our values',
        body: [
          // Trailing U+00A0 after `peace of mind.` is in the capture.
          'We\'re committed to honesty, integrity and excellence. Our comprehensive financial planning service and personalized solutions will provide you with peace of mind. ',
        ],
      },
    ],
  },

  /* ---- The process. Four BARE LABELS — no descriptions exist in English. --
   * `titleAs: 'p'` reproduces the live element (the FR page uses <h3>) and
   * selects the compact single-line rail rather than the French ruled rows.
   * The rail is the same information design at a smaller scale; it is NOT the
   * French layout with the description slots left empty. */
  process: {
    heading: 'Our unique approach',
    lead: 'Our clients greatly appreciate our dedicated advice and support. You can always count on:',
    titleAs: 'p',
    steps: [
      {
        icon: {
          src: iconApproach,
          alt: 'Target icon representing a global and personalized approach.',
          widths: [64],
          sizes: '2.75rem',
        },
        title: 'Our personalized approach',
      },
      {
        icon: {
          src: iconIntegrity,
          alt: 'Star icon symbolizing the integrity we demonstrate in our work.',
          widths: [64],
          sizes: '2.75rem',
        },
        title: 'Our integrity',
      },
      {
        icon: {
          src: iconProfessionalism,
          alt: 'Icon symbolizing the rigor that guides our work.',
          widths: [64],
          sizes: '2.75rem',
        },
        title: 'Our professionalism',
      },
      {
        icon: {
          src: iconTransparency,
          alt: 'Magnifying glass icon symbolizing how we make decisions and communicate with you.',
          widths: [64],
          sizes: '2.75rem',
        },
        title: 'Our transparency',
      },
    ],
  },

  news: {
    heading: 'News and articles',
    teasers: [
      {
        image: {
          src: teaserSpotlight,
          alt: 'A man and woman looking at their finances on a laptop.',
          widths: [383, 575, 767],
          sizes: THIRD_SIZES,
        },
        title: 'Spotlight: now trending',
        blurb: 'Keep up to date with what\'s trending this month.',
        href: `${news}#spotlight`,
      },
      {
        image: {
          src: teaserEconomic,
          alt: 'Stéfan Marion, Chief Economist and Strategist for National Bank of Canada and National Bank Financial.',
          widths: [383, 575, 767],
          sizes: THIRD_SIZES,
        },
        title: 'Economic news',
        // Trailing U+00A0 in the capture.
        blurb: 'Read the latest financial news from our National Bank experts. ',
        href: `${news}#economic`,
      },
      {
        image: {
          src: teaserGuides,
          alt: 'Someone calculating their finances at a desk.',
          widths: [383, 575, 767],
          sizes: THIRD_SIZES,
        },
        title: 'Guides and tools',
        // Trailing U+00A0 in the capture.
        blurb: 'Consult our useful guides and tools to help simplify your finances. ',
        href: `${news}#guide`,
      },
    ],
    allLink: { label: 'Read all news and articles', href: news },
  },

  contact: {
    heading: 'Contact us',
    lead: 'Get contact information for our team members and find out where our offices are.',
    // C-24 / N-06: this page says `See our contact details`; one other page
    // title-cases it. Each page keeps its own string; not harmonised.
    link: { label: 'See our contact details', href: contact },
    // C-03 / C-04: the EN page HYPHENATES what the FR page spaces.
    phones: [
      { display: '514-395-1937', href: 'tel:+15143951937' },
      { display: '514-412-0370', href: 'tel:+15144120370' },
    ],
    // C-05 / C-06: `@nbc.ca` in the English tree, always.
    emails: [
      { display: 'laurent.achard@nbc.ca', href: 'mailto:laurent.achard@nbc.ca' },
      { display: 'davidalexandre.wolf@nbc.ca', href: 'mailto:davidalexandre.wolf@nbc.ca' },
    ],
  },
};

export default content;
