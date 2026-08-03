import type { FirmContent } from './firm.types';
import { pathFor } from '../../lib/i18n';

/**
 * ENGLISH firm page — `https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html`
 * Capture: `source-assets/html/en-our-firm.html` (62,025 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order. Nothing is translated from the French page (P-16).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠ THIS FILE HOLDS ALL THREE OF THE SITE'S U+202F NARROW NO-BREAK SPACES
 *
 * Measured across all 12 captures: 102 U+00A0 and exactly 3 U+202F. Every one
 * of the three is on this page, and all three sit inside a §4 figure:
 *
 *   More than⟦U+202F⟧$200 billion in assets      C-32
 *   $424⟦U+202F⟧billion                           C-36
 *   31,243⟦U+202F⟧employees                       C-37
 *
 * They are NOT interchangeable with U+00A0. Both are written as literal
 * characters here; both are invisible in an editor. **Do not retype these
 * lines**, and never run the sweep with `--loose-space` to make them pass — the
 * flag exists to document a decision, and no decision here permits folding a
 * figure's no-break space.
 *
 * Eleven U+00A0 ship from this file as well, including two inside an `<h2>`
 * (`A⟦NBSP⟧strong⟦NBSP⟧partner`) and two in the opening clause
 * (`we⟦NBSP⟧have⟦NBSP⟧been`).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHERE ENGLISH AND FRENCH DISAGREE — SHIP BOTH, RECONCILE NEITHER
 *
 *  · `over 850 wealth advisors` here vs `près de 850 conseillers` in French.
 *    *More than* against *nearly*. The two point in opposite directions and it
 *    is the most quotable numeric contradiction on the site (C-29).
 *  · `29%` / `9%` here, `29 %` / `9 %` in French — English has no space before
 *    the percent sign, French does (C-33 / C-34).
 *  · `(TSX: NA)` here, `(TSX : NA)` in French. Both are correct for their own
 *    language (C-39).
 *  · `31,243` here with a comma; `31 243` in French with a U+00A0 as the
 *    thousands separator (C-37).
 *  · `National Bank Financial - Wealth Management` uses U+002D; the French hero
 *    line uses U+2013 EN DASH.
 *  · `across Canada—from Victoria to Halifax` uses U+2014 EM DASH with no
 *    surrounding spaces; the French sentence has no dash at all (C-30).
 *  · This page has NO ranking footnote and NO accordion. The French page's
 *    `Petits détails pour tout savoir` and its Investor Economics claim have no
 *    English counterpart, and none may be written (P-16, C-35). `note` is
 *    deliberately absent from this module.
 *  · The second intro paragraph is a different sentence from the French one,
 *    not a translation of it.
 *
 * SHIPPED SIC, ALREADY FLAGGED:
 *  · `Our Firm` — title case, against sentence-case siblings in the same nav
 *    and the same `<title>` pattern.
 *  · `See Our Contact Details` — this is THE page that title-cases it; the
 *    other four English pages say `See our contact details` (C-24 / N-06).
 *  · `Twitter` — renamed X in July 2023, three months before the October 2023
 *    as-of date in the same paragraph (C-40).
 *
 * LANGUAGE PURITY (P-4): only English copy and `@nbc.ca` addresses. The seven
 * images are National Bank DAM masters served BYTE-IDENTICALLY to both language
 * trees by the live site; their filenames are the DAM's own.
 */

/* ---------------------------------------------------------------- artwork --
 * ⚠ As on the French page, `icn_part_canada.svg` sits on assets-under-
 * management and `icn_actif_sous_gestion.svg` sits on Canadian market share —
 * each pictogram is attached to the statistic its filename does not name. Live
 * pairing, reproduced. The alt strings describe the PICTURES correctly. */
import banner from '../../images/firm/ban-microsites-notre-a-propos.jpg';
import corridorPhoto from '../../images/firm/img-microsites-humain-a-propos-2-474x464.png';
import lakePhoto from '../../images/firm/img-microsites-aspirationnel-a-propos-1-474x464.png';
import icnRevenue from '../../images/firm/icn_revenu_par_annee.svg';
import icnAssets from '../../images/firm/icn_part_canada.svg';
import icnShareQc from '../../images/firm/icn_part_de_marche.svg';
import icnShareCa from '../../images/firm/icn_actif_sous_gestion.svg';

const contact = pathFor('contact', 'en');

const HALF_SIZES = '(min-width: 60rem) 30rem, calc(100vw - 2.5rem)';

const content: FirmContent = {
  locale: 'en',

  meta: {
    // Live <title> is `Our Firm | National Bank Financial - Wealth Management`.
    // BaseLayout appends ` | ` + titleSuffix from en.ts. The capital F is the
    // live string and ships sic.
    title: 'Our Firm',
    description:
      'Doing business with National Bank Financial - Wealth Management means having access to a wide range of resources and a strong network of experts.',
  },

  hero: {
    heading: 'About us',
    // VERBATIM live <p> from the same AEM teaser. U+002D hyphen, unlike the
    // French line's U+2013.
    message: 'National Bank Financial - Wealth Management',
    banner: {
      src: banner,
      // Valueless `alt` on the live <img> — decorative, as captured (N-12).
      // The SAME banner serves both language trees on the live site.
      alt: '',
      widths: [767, 1199, 1600, 2000],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  intro: {
    heading: 'A financial partner for Canadian families',
    body: [
      // C-28 / C-29 / C-30. `Since 1902` is never computed into a number of
      // years (P-3). `over 850` contradicts the French `près de 850` and both
      // ship. Four U+00A0 in this one sentence.
      [
        'Since 1902, we have been building lasting relationships with Canadian families. NBFWM’s mission is to help our clients manage their wealth from generation to generation. Our network includes over 850 wealth advisors at 100 branches across Canada—from Victoria to Halifax.',
      ],
      // NOT a translation of the French second paragraph, which opens `Grâce à
      // ce riche héritage`. Different sentence; both ship as their page has it.
      ['Our experts offer personalized service to help you realize your life goals.'],
    ],
  },

  /* ------------------------------------------------------------------------
   * THE STAT BAND. C-31 … C-34, all four UNSOURCED AND UNDATED. Each `text` is
   * the whole live sentence with the live <b> span kept as a `strong` run; no
   * figure is re-cut as a display numeral and no as-at date is invented (D-16).
   * ---------------------------------------------------------------------- */
  stats: {
    // TWO U+00A0 inside this heading, in the capture.
    heading: 'A strong partner',
    stats: [
      {
        icon: {
          src: icnRevenue,
          alt: 'National Bank employee picto',
          widths: [52],
          sizes: '3.25rem',
        },
        // C-31. Whose revenue is never stated on the live page.
        text: [{ strong: '$1 billion in revenue' }, ' per year'],
      },
      {
        icon: {
          src: icnAssets,
          alt: 'Bulb and dollar sign picto',
          widths: [62],
          sizes: '3.25rem',
        },
        // C-32. `More than` is followed by U+202F, not U+00A0 and not a plain
        // space. `assets under management` — writing `AUM` is a restatement.
        text: ['More than ', { strong: '$200 billion in assets' }, ' under management'],
      },
      {
        icon: {
          src: icnShareQc,
          alt: 'Market share picto',
          widths: [93],
          sizes: '3.25rem',
        },
        // C-33. No space before `%` here; the French page has one.
        text: [{ strong: '29%' }, ' Market share in Quebec'],
      },
      {
        icon: {
          src: icnShareCa,
          alt: 'Wallet with a National Bank logo picto',
          widths: [68],
          sizes: '3.25rem',
        },
        // C-34.
        text: [{ strong: '9%' }, ' Market share in Canada'],
      },
    ],
  },

  publications: {
    heading: 'Keep up with financial news',
    body: [
      // The link falls on DIFFERENT WORDS than the French page's: `economic
      // news` here, `publications financières` there, and the sentences around
      // them are not translations either.
      [
        'Read articles written by our experts for the latest ',
        {
          link: 'economic news',
          href: 'https://www.nbfwm.ca/documentation/financial-publications.html',
          external: true,
        },
        '. Our reliable, well-respected publications will help you achieve your financial goals and make informed choices.',
      ],
      [
        'For clear and concise information on the state of the global economy, see our ',
        // P-14: an evergreen NBF publication URL, overwritten in place by the
        // bank. Never pin a dated PDF filename.
        {
          link: 'quarterly investment strategy publication',
          href: 'https://www.nbfwm.ca/content/dam/fbngp/pdf/doc-investment-strategy.pdf',
          external: true,
        },
        '.',
      ],
    ],
    image: {
      src: corridorPhoto,
      alt: 'Two women are talking as they walk down a corridor in an office.',
      widths: [237, 474],
      sizes: HALF_SIZES,
    },
    mediaSide: 'start',
  },

  /* ------------------------------------------------------------------------
   * THE STALE CLUSTER — C-36 … C-41. `$424 billion in assets as at October 31,
   * 2023` keeps its as-at date: the date is the only thing making the figure
   * defensible, and a builder may never update the number, drop the date, round
   * it, or write "over $400 billion". `31,243` keeps the U+202F that binds it
   * to `employees`. `Twitter` ships sic (C-40).
   * ---------------------------------------------------------------------- */
  parentBank: {
    heading: 'About National Bank of Canada',
    // U+0027 apostrophe in `Canada's`, as captured.
    subheading: 'One of Canada\'s leading financial institutions',
    body: [
      [
        'We build on the outstanding reputation of our parent company. With $424 billion in assets as at October 31, 2023, National Bank of Canada, together with its subsidiaries, forms one of Canada\'s leading integrated financial services groups. It has more than 31,243 employees in knowledge-intensive positions and has been recognized numerous times as a top employer and for its commitment to diversity. Its securities are listed on the Toronto Stock Exchange (TSX: NA). Follow the Bank\'s activities at ',
        { link: 'nbc.ca', href: 'http://nbc.ca/', external: true },
        ', through our ',
        { link: 'News Room', href: 'https://www.nbc.ca/about-us/news-media.html', external: true },
        ' or via social media such as Facebook, LinkedIn and Twitter.',
      ],
    ],
    image: {
      src: lakePhoto,
      alt: 'A light blue lake surrounded by mountains.',
      widths: [237, 474],
      sizes: HALF_SIZES,
    },
    mediaSide: 'end',
  },

  // `note` is ABSENT, not empty. The English page has no ranking footnote and
  // no accordion, and P-16 forbids writing one.

  contact: {
    // <h3> on the live page, not an <h2>.
    heading: 'Contact us',
    lead: 'Get contact information for our team members and find out where our offices are.',
    // C-24 / N-06 — THE title-cased instance. Four other English pages say
    // `See our contact details`. Each page keeps its own string.
    link: { label: 'See Our Contact Details', href: contact },
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
