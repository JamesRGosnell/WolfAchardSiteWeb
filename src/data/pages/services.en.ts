import type { ServicesContent } from './services.types';
import { pathFor } from '../../lib/i18n';

/**
 * ENGLISH services page —
 * `https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html`
 * Capture: `source-assets/html/en-our-services.html` (107,145 bytes)
 *
 * THIS IS NOT A TRANSLATION OF `services.fr.ts`. It is a different page:
 *
 *  · an entire `Our approach` section — H2, lead, four numbered steps, eight
 *    bullets — that the French page does not have at all;
 *  · an `Our services` H2 and lead paragraph above the wheel, which French
 *    also lacks;
 *  · National Bank's generic `Purpose` / `Main benefits` boilerplate inside
 *    every service block, where the French page carries the team's own prose;
 *  · 52 list items against the French page's 5 (which are only the five
 *    disclaimers);
 *  · the third-party-provider disclosure SIX times with five markers, where
 *    French carries it once as an unmarked caption (§1.6, R-06).
 *
 * P-16 prohibits closing that gap in either direction. Nothing here may be
 * translated into `services.fr.ts`, and no English service copy may be written
 * to match the French. The imbalance IS the finding.
 *
 * WHY THE TWO PAGES DIVERGE, mechanically: on the English page the four
 * approach steps, the WHOLE seven-item services accordion, the toolbox and the
 * disclaimer accordion are each wrapped in `class="experiencefragment"` — they
 * are National Bank's centrally syndicated blocks. On the French page only the
 * toolbox and the disclaimers are. The French services copy is the team's; the
 * English is the bank's shared block (S-01 / S-02, P-14).
 *
 * WORDINGS THAT LOOK LIKE MISTAKES AND ARE NOT OURS:
 *  · `Our team members are there for you. Contact us directly at` — the closing
 *    sentence stops mid-phrase and runs straight into the phone numbers below
 *    it. Live. Ships sic; no F- row exists and none is drafted (§6).
 *  · `Wolf Archard Group offer advice…their client’s financial needs.` in the
 *    meta description — F-06, PENDING, three defects in one string. Verbatim.
 *  · `Budget tool` and `Mortgage calculator` point at the SAME URL. Live broken
 *    link (N-08). Not silently repointed — the French page proves a correct
 *    budget URL exists, but guessing the English one invents a destination.
 *  · `It's`, `family's` use U+0027; the meta description uses U+2019. As served.
 *  · Ten literal U+00A0 sit inside the strings below, and three more inside the
 *    closing lead (`Contact us directly at`). Real characters, not escapes.
 *
 * MARKERS — the live page is broken in four distinct ways and the rebuild
 * repairs presentation only, never wording (D-24 … D-26):
 *    live                                          shipped
 *    `. *<sup>1, 2, 3</sup>` (stray asterisk)   →  three <sup> links, no `*`
 *    `<sub>…sentence… ₁</sub>` (U+2081)         →  normal text + <sup>1</sup>
 *    `<sup> 1</sup>` (leading U+00A0)           →  <sup>1</sup>, U+00A0 kept
 *    `<sup>2</sup>` ×2, `<sup>3</sup>`          →  unchanged, now resolvable
 *
 * THE BANKING BLOCK CARRIES FEE AND RATE CLAIMS AND NO MARKER — `Savings on
 * certain banking solutions.`, `Competitive interest rates.` (C-43). Disclaimers
 * 4 and 5 govern exactly those, render on this page, and are cited by nothing
 * anywhere on the site (R-04). No marker is invented (P-6); it is reported.
 *
 * LANGUAGE PURITY (P-4): only English copy, English artwork, `nbc.ca` /
 * `nbfwm.ca` URLs and `@nbc.ca` addresses.
 */

/* ---------------------------------------------------------------- artwork --
 * ORIGINAL DAM masters (`data-asset`), not the rendered rendition.
 *
 * BOTH the banner and the wheel are National Bank's GENERIC artwork, not this
 * team's: `ban/nos-services/ban-couple-nos-services.png` is the shared
 * microsite banner, and the wheel is
 * `img/img-diagram-wealth-management-services-your-wealth-advisor-blue.png`,
 * which reads `Your Wealth Advisor` and `Client` and NEVER NAMES THE TEAM —
 * where the French wheel is bespoke and reads `Groupe Wolf Achard` / `Vous`.
 * Text baked into an image is still a claim (C-51). Supplied brand artwork is
 * not relabelled and the two wheels are not swapped for each other
 * (INTAKE Q4 default); the divergence is reported, not repaired.
 *
 * `picto-toolbox.svg` is the same DAM object the French page loads and carries
 * no wording — see the note in `services.fr.ts` for why it is one shared file. */
import banner from '../../images/services/ban-couple-nos-services.png';
import wheel from '../../images/services/img-diagram-wealth-management-services-your-wealth-advisor-blue.png';
import toolboxIcon from '../../images/services/picto-toolbox.svg';
import iconAnalyse from '../../images/services/picto-analyse.svg';
import iconObjectifs from '../../images/services/picto-objectifs.svg';
import iconPlan from '../../images/services/picto-plan-financier.svg';
import iconSuivi from '../../images/services/picto-suivi.svg';

const contact = pathFor('contact', 'en');

/** Host-absolute per language (§3.2). A root-relative path 404s on a new domain. */
const NBFWM = 'https://www.nbfwm.ca';

const STEP_ICON_SIZES = '3rem';

const content: ServicesContent = {
  locale: 'en',

  meta: {
    // Live <title>: `Services offered by Wolf Archard Group | National Bank
    // Financial - Wealth Management`. BaseLayout appends the suffix from en.ts.
    // `Wolf Archard` — with the second R — is the live English spelling of the
    // team's own name (C-21 / N-01). It ships exactly as live.
    title: 'Services offered by Wolf Archard Group',
    // F-06 PENDING and untouched: `offer` (not `offers`) and `their client’s`
    // (not `clients’`) are live. The live `meta[name=description]` also carries
    // a TRAILING SPACE that `og:description` does not; BaseLayout emits one
    // string into both, so the untrailed form ships. A trailing space in a meta
    // attribute is not client-facing copy and no wording changed.
    description:
      'Wolf Archard Group offer advice on estate planning, investment management and financial planning, providing solutions to fit their client’s financial needs.',
  },

  hero: {
    // VERBATIM live <h1>, at label size.
    heading: 'Our services',
    // VERBATIM live <p> from the same teaser, promoted to the display line.
    message: 'Investment management. Financial planning. Estate planning.',
    banner: {
      src: banner,
      // Valueless `alt` on the live <img> — decorative, as captured. N-12.
      alt: '',
      widths: [767, 991, 1199, 2000],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  intro: {
    heading: 'Solutions designed to meet your needs',
    body: [
      // Trailing U+00A0 — in the capture.
      ['Our specialty: Making it easier for you to manage your finances, no matter what your needs, goals or situation are. '],
      // The live paragraph closes with a `<br />` spacer, which carries no copy
      // and is not reproduced.
      ['Our wide range of services allows us to tailor our recommendations to each profile and work together to find the best solution for you.'],
    ],
  },

  /* ---- ENGLISH ONLY. There is no French counterpart; do not create one. ----
   * Four numbered steps and eight bullets, in the live order. The step titles
   * carry their own `1. ` … `4. ` numerals — that is the live <h3> string, not
   * a decorative index we added, and it is set at heading size so it can never
   * be mistaken for a footnote marker (audit check 16). */
  approach: {
    heading: 'Our approach',
    body: [
      ['Throughout our relationship, our team listens to your needs. We tailor our recommendations to your situation and ensure that we propose the solutions that best suit you.'],
    ],
    steps: [
      {
        icon: {
          src: iconAnalyse,
          alt: 'Pictogram of a magnifying glass.',
          widths: [100],
          sizes: STEP_ICON_SIZES,
        },
        title: '1. Understand your needs',
        items: [
          'We take the time to get to know you.',
          'We undertake a detailed analysis of your current situation.',
          // Trailing U+00A0 — in the capture.
          'We understand your needs and concerns to help you set objectives and priorities. ',
        ],
      },
      {
        icon: {
          src: iconObjectifs,
          alt: 'Pictogram of a target with a star.',
          widths: [100],
          sizes: STEP_ICON_SIZES,
        },
        title: '2. Plan',
        items: [
          'We recommend solutions that are tailored to your needs and establish an action plan with your priorities in mind.',
          'We design a personalized plan for your retirement.',
          'We assist you in your decision making regarding estate planning and settlement.',
        ],
      },
      {
        icon: {
          src: iconPlan,
          alt: 'Pictogram of a plane.',
          widths: [100],
          sizes: STEP_ICON_SIZES,
        },
        title: '3. Implement the plan',
        items: ['We build your investment portfolio and implement the adopted strategies.'],
      },
      {
        icon: {
          src: iconSuivi,
          alt: 'Pictogram of a calendar.',
          widths: [100],
          sizes: STEP_ICON_SIZES,
        },
        title: '4. Periodic monitoring',
        items: [
          'We monitor changes in your personal, financial and economic situation, to ensure the proposed solutions continue to suit your objectives.',
        ],
      },
    ],
  },

  services: {
    // The English page repeats `Our services` as an H2 under the H1 of the same
    // name. Live. The French page has neither this heading nor its lead.
    heading: 'Our services',
    lead: 'As you go through life and your situation changes, your expectations and financial goals will evolve. Our team guides you every step of the way and calls on specialists from various areas to make personalized recommendations and help you achieve your goals.',
    wheel: {
      image: {
        src: wheel,
        alt: 'A wheel that represents seven aspects of wealth management expertise.',
        widths: [383, 575, 767],
        sizes: '(min-width: 60rem) 30rem, calc(100vw - 2.5rem)',
      },
      caption: {
        // Live: `Certain services are offered by third party specialists. *`
        // followed by `<sup>1, 2, 3</sup>`. The `*` has NO footnote anywhere on
        // the page — a disclosure pointer pointing at nothing — so it does not
        // ship (D-26). The sentence, its terminal period and the three
        // disclaimer references are unchanged.
        text: 'Certain services are offered by third party specialists.',
        refs: [1, 2, 3],
      },
    },

    // LIVE ORDER: estate 3rd, tax 4th. The French page runs fiscale 3rd and
    // successorale 4th. Each tree keeps its own order.
    blocks: [
      {
        id: 'portfolio-management',
        title: 'Portfolio management',
        groups: [
          {
            heading: 'Purpose',
            items: [
              'Have a qualified professional manage your investment portfolio.',
              'Strike a balance between risk and reward.',
              'Enjoy a flexible solution that stays true to your goals.',
            ],
          },
          {
            heading: 'Main benefits',
            items: [
              'Have a clear plan to achieve your goals.',
              'Be able to react to the unexpected.',
              // Trailing U+00A0, after a `<br />` spacer that carries no copy.
              'Achieve the maximum benefits of diversification. ',
            ],
          },
        ],
        footnote: {
          // LIVE: the whole sentence sits inside a `<sub>` and its marker is a
          // literal U+2081 SUBSCRIPT ONE character, not markup (N-14, R-18).
          // Shipped as ordinary text with a real `<sup>` link, so the reference
          // is announced as a footnote and reads at the same size as the other
          // four. The U+00A0 between the period and the marker is preserved on
          // the sentence. Wording unchanged. D-25.
          text: 'These services are offered by third party specialists. ',
          refs: [1],
        },
      },
      {
        id: 'financial-planning',
        title: 'Financial planning',
        groups: [
          {
            heading: 'Purpose',
            items: [
              'A document outlining your short- and long-term financial goals and the strategies you will use to reach them.',
              'The plan reflects your personal and family situation, your risk tolerance and future expectations, and includes effective tax strategies.',
            ],
          },
          {
            heading: 'Main benefits',
            items: [
              'Your finances will be in good hands.',
              'You will enjoy greater peace of mind.',
              'You will be able to prioritize your projects and make informed decisions. ',
            ],
          },
        ],
        footnote: {
          // Live marker is `<sup> 1</sup>` — U+00A0 INSIDE the element. The
          // character is kept, moved onto the sentence so the marker element
          // is a clean link. §1.6: this string and the Portfolio one are
          // separate strings that happen to be equal. Not deduplicated.
          text: 'These services are offered by third party specialists. ',
          refs: [1],
        },
      },
      {
        id: 'estate-planning',
        title: 'Estate planning',
        groups: [
          {
            heading: 'Purpose',
            items: [
              'Document how you want your assets to be distributed after your death.',
              'Prevent any misunderstandings among your heirs.',
              'Plan for any situation.',
            ],
          },
          {
            heading: 'Main benefits',
            items: [
              'You will be protected in case of incapacity.',
              'Your assets will be transferred without conflict.',
              'Your wishes will be respected.',
              'You will minimize the tax burden on your estate.',
            ],
          },
        ],
        footnote: {
          // The live paragraph opens with a `<br />` spacer; no copy, not kept.
          text: 'These services are offered by third party specialists.',
          refs: [2],
        },
      },
      {
        id: 'tax-planning',
        title: 'Tax planning',
        // C-46: `More money to invest or spend.`, `Make tax-efficient
        // investments.` and `It's about doing more with the same money…` are
        // tax-OUTCOME claims, and the marker the live page attaches is `2` —
        // the Taxation/Retirement/Estate team note. Whether that is the right
        // disclaimer for a tax-savings promise is compliance's call; the
        // rebuild does not re-point a regulatory reference (P-13).
        groups: [
          {
            heading: 'Purpose',
            items: [
              'It is the development of financial strategies to reduce the impact of taxes on your investments.',
              'Proposing customized recommendations based on an analysis of your situation and your portfolio.',
              // U+0027 in `It's`. As served.
              "It's about doing more with the same money by optimizing your portfolio.",
            ],
          },
          {
            heading: 'Main benefits',
            items: [
              'More money to invest or spend.',
              'More freedom to achieve your goals.',
              'Make tax-efficient investments. ',
            ],
          },
        ],
        footnote: {
          text: 'These services are offered by third party specialists.',
          refs: [2],
        },
      },
      {
        id: 'insurance',
        title: 'Insurance',
        groups: [
          {
            heading: 'Purpose',
            items: [
              // U+0027 in `family's`, both items. As served.
              "These solutions will ensure your family's financial future should anything happen to you.",
              'They serve as a cushion to protect you from the unexpected.',
              "They will help keep your family's plans on track.",
            ],
          },
          {
            heading: 'Main benefits',
            items: [
              'Enjoy a safety net, even if you are not working.',
              'Transfer your assets and protect your legacy.',
              'Have peace of mind so you can be at ease. ',
            ],
          },
        ],
        footnote: {
          // §1.6: `collaborators`, NOT `specialists`. The one block that uses
          // the other noun. Never normalised to match its four siblings.
          text: 'These services are offered by third party collaborators.',
          refs: [3],
        },
      },
      {
        id: 'banking-solutions',
        title: 'Banking solutions',
        // C-43 / R-04 / R-05. `Savings on certain banking solutions.` and
        // `Competitive interest rates.` are fee and rate claims carrying NO
        // marker on the live page — and the French block promises `gratuités`
        // (free of charge) for the same offer, which is a different claim.
        // Disclaimers 4 and 5 render on this page and are cited by nothing.
        // No marker is invented (P-6); both are reported.
        body: [
          [
            {
              // Undated filename — nothing pinned to a year (P-14). The label
              // carries a U+00A0 after the pipe, in the capture.
              link: 'Wealth management - Banking-offer | Exclusive benefits',
              href: `${NBFWM}/content/dam/fbngp/pdf/doc-wealth-management-banking-offer-nbfwm.pdf`,
              external: true,
            },
          ],
          // U+2014 EM DASH with no surrounding spaces, exactly as served.
          ['As a National Bank Financial—Wealth Management client, you can take care of all your banking in one place:'],
        ],
        groups: [
          {
            // No label above this list on the live page. A heading is not
            // invented to balance the `Main benefits` list below it.
            items: ['Everyday transactions', 'Financing', 'Specific needs '],
          },
          {
            heading: 'Main benefits',
            items: [
              'Savings on certain banking solutions.',
              'Healthcare and legal virtual assistance services.',
              'Competitive interest rates.',
            ],
          },
        ],
      },
      {
        id: 'philanthropy',
        title: 'Philanthropy',
        // The French `Philanthropie` block names Fondation Philantra and links
        // to it; this one never mentions it. Not added (P-5 / P-16).
        // C-45: `Bequests in a will` is estate-law adjacent and disclaimer 2
        // governs, but the live block carries no marker. Not invented.
        body: [
          ['Do you want to give back to the community? Let our team guide you in designing a philanthropic plan.'],
        ],
        groups: [
          {
            items: ['Setting up a foundation', 'Distribution of donations', 'Bequests in a will'],
          },
        ],
      },
    ],
  },

  /* SYNDICATED. National Bank's `boite_outils_v3` Experience Fragment, served
     from `/content/experience-fragments/fbngp/boite_outils_v3/boite-a-outils-v3-en/`.
     A static rebuild freezes what the bank keeps current (P-14, S-01). */
  toolbox: {
    icon: {
      src: toolboxIcon,
      alt: 'An illustration of a wrench and screwdriver inside a blue circle.',
      widths: [200],
      sizes: '4rem',
    },
    heading: 'Toolbox',
    lead: 'Our useful resources will help you effectively manage and better understand your finances.',
    // Live document order: left column top-to-bottom, then right column.
    links: [
      { label: 'Understanding your statements', href: `${NBFWM}/documentation/statements.html`, external: true },
      { label: 'Understanding online services', href: `${NBFWM}/digital-services.html`, external: true },
      {
        // ⚠ N-08 / R-22 — LIVE BROKEN LINK, shipped as found. This points at
        // the MORTGAGE PAYMENTS CALCULATOR, the identical destination as
        // `Mortgage calculator` two rows down. The French page has two distinct
        // correct URLs, so an English budget-tool URL almost certainly exists,
        // but guessing it invents a destination. NBF supplies the right one.
        label: 'Budget tool',
        href: 'https://www.nbc.ca/personal/mortgages/calculators/payments.html',
        external: true,
      },
      {
        label: 'Messaging Center',
        href: `${NBFWM}/content/dam/fbngp/pdf/message-centre-guide.pdf`,
        external: true,
      },
      {
        label: 'Mortgage calculator',
        href: 'https://www.nbc.ca/personal/mortgages/calculators/payments.html',
        external: true,
      },
      { label: 'Understanding tax slips', href: `${NBFWM}/documentation/taxes.html`, external: true },
      {
        // U+2013 EN DASH with spaces, unlike the French hyphen. As served.
        label: 'Tax and Investment Guide – Canada (excluding Quebec)',
        href: `${NBFWM}/content/dam/fbngp/pdf/tax-guide-can-nbfwm.pdf`,
        external: true,
      },
      {
        label: 'Tax and Investment Guide – Quebec',
        href: `${NBFWM}/content/dam/fbngp/pdf/tax-guide-qc-nbfwm.pdf`,
        external: true,
      },
    ],
  },

  // Live container id of the `Legal Disclaimers` accordion, kept so an existing
  // deep link still lands. The five note ids are `#legal-note-1`…`5`.
  legalNotesId: 'disclaimer',

  contact: {
    // <h3> on the live page, in both languages.
    heading: 'Contact us',
    // LIVE, and it stops mid-phrase: the sentence runs straight into the two
    // phone numbers rendered below it. Three U+00A0 hold `Contact us directly
    // at` on one line. No F- row exists; ships verbatim and is reported.
    lead: 'Our team members are there for you. Contact us directly at',
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
