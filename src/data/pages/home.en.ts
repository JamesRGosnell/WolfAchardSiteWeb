import type { HomeContent } from './home.types';
import { pathFor } from '../../lib/i18n';

/**
 * ENGLISH home page — `https://www.nbfwm.ca/advisor/wolf-archard-group.html`
 * Capture: `source-assets/html/en-home.html` (72,241 bytes)
 *
 * THE LIVE ENGLISH PAGE IS NOT A TRANSLATION OF THE LIVE FRENCH ONE. It is a
 * different page: no mission, no commitments, no philosophy essay, no
 * differentiators, ZERO list items, and four process steps that are bare `<p>`
 * labels with no described paragraph.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠ P-16 WAS AMENDED BY THE CLIENT ON 2026-08-03 — `content/COMPLIANCE.md` §6.5
 *
 * FOUR of those blocks are now filled, BY TRANSLATION of the published French
 * copy and by nothing else: `lists` (NC-20 / NC-21), `essay` (NC-22) and
 * `distinctions` (NC-23). Every English string in them renders a French string
 * that is already live on `fr-home.html`; the French source for each is quoted
 * beside it below. Nothing was expanded, softened, strengthened, re-dated or
 * tidied, and no sentence exists here that has no French source.
 *
 * WHAT IS STILL ABSENT, AND MUST STAY ABSENT (§6.5's exclusion list):
 *
 *  · `intro` — the French `Une gestion de patrimoine sur mesure pour des
 *    clients uniques` H2, its two paragraphs and its photograph. NOT named in
 *    the client's authorisation. Untranslated.
 *  · The four process-step DESCRIPTIONS. Not named in the authorisation — and
 *    they could not be attached here anyway: this page's four process items are
 *    `Our personalized approach` / `Our integrity` / `Our professionalism` /
 *    `Our transparency`, which are QUALITIES, while the French page's are
 *    `Faisons connaissance` / `Établissons une stratégie` / `Déployons notre
 *    plan` / `Restons en contact`, which are STEPS. They are not the same four
 *    things, so a French description attached to an English label would
 *    describe the wrong item. D-73 records this; it is also why the English
 *    firm paragraph is one sentence shorter than the French one.
 *
 * The prohibition still runs in the OTHER direction, entirely un-amended:
 * `Personalized support` and `Discover our company` below have no French
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

  /* ------------------------------------------------------------------------
   * TRANSLATED UNDER §6.5 — `Notre mission` / `Nos engagements`. NC-20 / NC-21.
   *
   * Same two lists, same order, drawn ONLY from `home.fr.ts`. C-26 governs the
   * French strings and keeps `[KEEP VERBATIM]`; this is an additional English
   * surface for the same claims, not a restatement of them.
   *
   * ⚠ SIX ITEMS, NOT EIGHT — D-100, 2026-08-03. Two of the eight were CUT
   * because they duplicated `Our purpose`, the client's live English block
   * that sits immediately above this one and has no French counterpart
   * (D-83). Both cuts are from OUR translation; not one character of the
   * client's own copy was touched, and `home.fr.ts` still carries all eight
   * French items. Each removal is written out at the point it was removed.
   * A cut here is NOT a licence to re-translate the item under a different
   * wording: the amendment authorises a faithful rendering or nothing.
   *
   * ⚠ `partenaire principal` and `audacieuse` are both claims in French and
   * both are claims here. `main partner` and `boldly` are the one-for-one
   * renderings — NOT `leading partner`, NOT `aggressively`, NOT `fearlessly`.
   * A translation may not strengthen its source (§6.5 rule 2).
   *
   * ⚠ TRAILING U+00A0. Two of the four French mission items end with one
   * (`…avenir financier ` and `…réussite financière `). They are not carried
   * into these strings: an English string with a trailing no-break space would
   * be a NEW invisible character in NEW copy, not a preserved one, and §0's
   * policy protects characters INSIDE sentences — D-32 settled that a
   * whitespace-only tail is presentation. D-74.
   * ---------------------------------------------------------------------- */
  lists: [
    {
      // FR: `Notre mission`
      heading: 'Our mission',
      items: [
        // FR: `Sécuriser votre avenir financier ` (trailing U+00A0)
        'Secure your financial future',
        // FR: `Vous accompagner dans la réalisation de vos projets de vie ambitieux`
        // `accompagner` → `support`: the team's own English rendering of that
        // verb, from the live EN team page (`here to support you in managing
        // your wealth`). `projets` → `projects`, kept distinct from
        // `objectifs` → `goals`, which the French uses separately elsewhere.
        'Support you in achieving your ambitious life projects',
        /* ⚠ REMOVED 2026-08-03 — D-100 / D-102. The third item read
           `Be the main partner in your financial success`, rendering FR
           `Être le partenaire principal dans votre réussite financière `.
           It is CUT, not reworded, because `Our purpose` — the client's own
           live English copy, sitting one block above this list — already opens
           `As your partner in financial success, we're here to support you…`.
           The phrase `partner in financial success` therefore landed twice in
           two adjacent blocks (D-83). The cut is from OUR translation, never
           from their live copy. The French home page is untouched and still
           carries the item; the English clause also survives verbatim in
           NC-28 on `/en/our-firm/`, where no `Our purpose` block exists and
           nothing collides with it. */
        // FR: `Construire une relation à long terme basée sur la confiance et le professionnalisme`
        'Build a long-term relationship based on trust and professionalism',
      ],
    },
    {
      // FR: `Nos engagements`
      heading: 'Our commitments',
      items: [
        /* ⚠ REMOVED 2026-08-03 — D-100 / D-103. The first item read
           `Act with integrity and communicate transparently`, rendering FR
           `Agir de manière intègre et communiquer de façon transparente`.
           It is CUT, not reworded. `Our values` — live English copy in the
           `Our purpose` block above — already reads `We're committed to
           honesty, integrity and excellence.`, and `Our unique approach`
           below lists `Our integrity` and `Our transparency` as two of its
           four items. Both of those are the client's own live strings, so this
           item was the only one of the three we could cut; keeping it put
           `integrity` on the page three times (D-83) and `transparen*` twice.
           The French home page is untouched and still carries the item; the
           English clause also survives verbatim in NC-28 on `/en/our-firm/`,
           which has no `Our purpose` block and no `Our unique approach`. */
        // FR: `Demeurer informés pour prendre des décisions éclairées`
        // The repetition (`informed` / `well-informed`) is the faithful
        // rendering of `informés` / `éclairées`. `sound decisions` would be an
        // evaluative upgrade; `informed decisions` is the standard collocation.
        'Stay informed in order to make well-informed decisions',
        // FR: `Investir de manière audacieuse sans être imprudents`
        // `imprudent`, not `reckless` — `reckless` is stronger than `imprudents`.
        'Invest boldly without being imprudent',
        // FR: `Respecter tous nos engagements pour assurer le travail bien fait et le devoir accompli`
        'Keep all our commitments to ensure work well done and duty fulfilled',
      ],
    },
  ],

  /* ------------------------------------------------------------------------
   * TRANSLATED UNDER §6.5 — `Notre philosophie`. NC-22.
   *
   * C-27 / P-2. This is the only return-adjacent language on the site, in
   * either tree, and translating it puts it in front of a second audience. It
   * promises nothing and it must keep promising nothing: `le véritable objectif
   * ne se limite pas aux rendements des investissements mais réside dans le
   * rendement net pour l'investisseur` renders one-for-one and no further. P-2
   * is unchanged by §6.5 — this sentence is the ceiling, not a licence.
   *
   * Terminology is taken from the team's own English wherever they have it:
   * `financial planning` and `Portfolio management` are both live strings on
   * the English services page. `asset allocation`, `income splitting` and `tax
   * deferral` are the standard Canadian terms for `l'allocation d'actifs`, `le
   * fractionnement de revenus` and `le report d'impôts`.
   *
   * The three `<b>` runs are the live French page's own emphasis, in the same
   * three places. The French runs are separated by U+00A0 in the capture; these
   * are ordinary spaces, for the same reason as D-74.
   * ---------------------------------------------------------------------- */
  essay: {
    // FR: `Notre philosophie`
    heading: 'Our philosophy',
    body: [
      // FR: `Nous mettons autant le focus sur la <b>planification financière</b>
      //      et <b>l’optimisation fiscale</b> que sur <b>la gestion de portefeuille</b>.`
      'We focus as much on ',
      { strong: 'financial planning' },
      ' and ',
      { strong: 'tax optimization' },
      ' as we do on ',
      { strong: 'portfolio management' },
      // FR: `Nous pensons que le véritable objectif ne se limite pas aux
      //      rendements des investissements mais réside dans le rendement net
      //      pour l’investisseur. Dans cette optique, certains éléments tels que
      //      l’allocation d’actifs, le fractionnement de revenus ou encore le
      //      report d’impôts sont susceptibles d’avoir un impact majeur pour nos
      //      clients.`
      '. We believe that the true objective is not limited to investment returns but lies in the net return for the investor. With this in mind, certain elements such as asset allocation, income splitting and tax deferral are likely to have a major impact for our clients.',
    ],
  },

  /* ------------------------------------------------------------------------
   * TRANSLATED UNDER §6.5 — `Ce qui nous distingue`. NC-23.
   *
   * C-25 governs the three French strings and keeps `[KEEP VERBATIM]`.
   * `Croissance efficace du patrimoine` is flagged there as outcome-adjacent;
   * `Efficient wealth growth` is the one-for-one rendering and carries the same
   * flag. It is not upgraded to `growth without compromise` or any such thing.
   *
   * ⚠ NO PHOTOGRAPH HERE, deliberately (D-72). The French block is a split with
   * `img-page-accueil-homme-souriant-yacht.jpg`, whose live alt is French. The
   * amendment covers the four named copy blocks; writing or translating a
   * description of a photograph is authoring one (P-9, N-12, and the same
   * reasoning as D-03) — and the file's own basename is French, so importing it
   * here would put a French-named asset into the English tree for a purely
   * decorative gain (P-4). The list is the content; the picture was the
   * decoration. `image` is optional on `HomeList` and is simply absent.
   * ---------------------------------------------------------------------- */
  distinctions: {
    // FR: `Ce qui nous distingue`
    heading: 'What sets us apart',
    items: [
      // FR: `Connaissance approfondie de la gestion de patrimoine pour
      //      entrepreneurs et professionnels incorporés`
      'In-depth knowledge of wealth management for entrepreneurs and incorporated professionals',
      // FR: `Croissance efficace du patrimoine sans fragiliser la santé
      //      financière de la compagnie ni affecter la capacité d’emprunt`
      'Efficient wealth growth without weakening the company’s financial health or affecting its borrowing capacity',
      // FR: `Compréhension du fonctionnement d’une entreprise, surtout si elle
      //      est la pièce maîtresse du patrimoine`
      'Understanding of how a business operates, especially when it is the cornerstone of the wealth',
    ],
  },

  /* ---- The process. Four BARE LABELS — no descriptions exist in English. --
   * `titleAs: 'p'` reproduces the live element (the FR page uses <h3>) and
   * selects the compact single-line rail rather than the French ruled rows.
   * The rail is the same information design at a smaller scale; it is NOT the
   * French layout with the description slots left empty.
   *
   * ⚠ THESE FOUR ARE NOT THE FRENCH FOUR. `Our personalized approach` /
   * `Our integrity` / `Our professionalism` / `Our transparency` are QUALITIES.
   * `Faisons connaissance` / `Établissons une stratégie` / `Déployons notre
   * plan` / `Restons en contact` are STEPS. Only the lead sentence above them
   * is a translation pair. So the French step descriptions have no English
   * label to attach to, §6.5 excludes them, and no English sentence anywhere on
   * this site may describe "our four-step process" — the English tree does not
   * have one. D-73. */
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
