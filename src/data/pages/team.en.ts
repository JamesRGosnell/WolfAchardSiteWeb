import type { TeamContent } from './team.types';

/**
 * ENGLISH team page — `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html`
 * Capture: `source-assets/html/en-our-team.html` (111,493 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS PAGE IS SHORTER THAN THE FRENCH ONE, ON PURPOSE
 *
 * The French page carries TWO `Biographie` accordions — five paragraphs of
 * credential claims about Lysane Tougas and Jean-Francois Gobeil. This page
 * carries NONE. P-16 prohibits translating them: they are credential claims
 * about named, licensed individuals, and writing English versions would be
 * invented copy in a regulated context. The imbalance is a commissioning
 * question for the client ("do you want English biographies written and
 * approved?"), not a gap for a builder to close.
 *
 * So the English partner cards are simply shorter. There is no empty accordion,
 * no "biography coming soon", and no heading over absent content — `bio` is
 * `undefined` and the component renders nothing at all for it.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THE ORPHAN MARKERS
 *
 * Identical defect to the French page, symmetrically: `<sup>2</sup>` on `Senior
 * Advisor, Estate Planning`, `<sup>1</sup>` on `Financial Planner`, and NO
 * accordion anywhere on the live page. The rebuild adds the full `Legal
 * Disclaimers` set on this page so both markers resolve (D-14). Reasoning in
 * full at the head of `team.fr.ts`; the choice is made once and applied to both
 * language trees, because a compliance disposition that differs by language is
 * a second defect.
 *
 * ⚠ HEADING LEVEL. `<LegalNotes>` renders its title as `<h2>` in both languages.
 * The live English services page renders the same block as `<h3>` while the
 * French one uses `<h2>` — an asymmetry COMPLIANCE.md records as a live defect,
 * not a choice (N-11). This page has no live accordion at all, so there is no
 * English heading level here to deviate from; `<h2>` matches the French tree and
 * sits correctly beside `Our team of experts` and `Our partners`.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CHARACTERS THAT LOOK LIKE MISTAKES AND ARE NOT
 *
 *  · `They will help` and `We are driven` carry U+00A0 between the words, twice
 *    each. In the capture. §0 of COMPLIANCE.md forbids folding them.
 *  · `Wolf Archard Group` — TWO Rs — in the `<title>`. The French tree, and the
 *    English tree's OWN logo artwork, both spell it `Achard`. C-21 / N-01: it is
 *    the team's own name, correcting it changes a live URL and every hreflang
 *    pair, and only the client can decide. Ships sic. Highest-value item in the
 *    client conversation.
 *  · `Jean-Francois Gobeil` has no trailing U+00A0 here; the French heading does.
 *
 * LANGUAGE PURITY (P-4): this file contains only English copy and English
 * artwork.
 *
 * VERIFY
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/team.en.ts \
 *     --capture source-assets/html/en-our-team.html
 */

/* ---------------------------------------------------------------- artwork --
 * `ban-team-en.jpg` is `ban-microsites-notre-equipe.jpg` (1199×375) — National
 * Bank's GENERIC microsite banner from the shared `ban/fbngp-notre-equipe/`
 * folder, not artwork made for this team. The French page opens on a bespoke
 * 2000×380 picture from the team's own folder. Same pattern the register
 * records for the HOME pages (D-04) and the NEWS pages (D-19): nothing above
 * the fold on the English page is specific to this team, and the English master
 * is too small to run full-bleed on a large screen.
 *
 * ⚠ THE TEAM-PAGE BANNER HAS NO ROW OF ITS OWN. D-04 is the home page and D-19
 * is news; neither covers this pair. Not substituted here — that is a brand
 * decision of exactly the kind D-04 already puts to the client, and it is the
 * same decision for all three page pairs. Flagged for the register rather than
 * numbered here; do not cite D-04 as if it covered this banner.
 *
 * The partner headshots are ONE shared copy each, imported by both language
 * trees; the files are byte-identical in the DAM. The advisors' headshots come
 * from `advisors.ts`. */
import banner from '../../images/team/ban-team-en.jpg';
import photoTougas from '../../images/team/photo-lysanne-tougas.png';
import photoGobeil from '../../images/team/photo-jean-francois-gobeil.png';

const PORTRAIT_WIDTHS = [280, 350];
const PORTRAIT_SIZES = '(min-width: 62rem) 22rem, (min-width: 40rem) 45vw, calc(100vw - 2.5rem)';

const content: TeamContent = {
  locale: 'en',

  meta: {
    // Live <title> is `Our financial advisors | Wolf Archard Group | National
    // Bank Financial - Wealth Management`. BaseLayout appends ` | National Bank
    // Financial - Wealth Management` from en.ts.
    title: 'Our financial advisors | Wolf Archard Group',
    description:
      'As your partner for all your financial needs, our team has the expertise to help you achieve your goals. Meet our team!',
  },

  hero: {
    heading: 'Meet our team',
    message: 'Professionals who listen to your needs',
    banner: {
      src: banner,
      // Valueless `alt` on the live <img> — decorative, as captured (N-12).
      alt: '',
      // Source is 1199px wide. Nothing above it, ever.
      widths: [767, 1199],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  intro: {
    heading: 'We work together to achieve your goals',
    body: [
      // C-20. `highly qualified` is unsubstantiated puffery the FRENCH page does
      // not claim. The two sentences are not translations of each other and
      // neither may be adjusted toward the other. U+00A0 in `They will help`.
      'Our team of highly qualified investment professionals is here to support you in managing your wealth. They will help you choose the products best suited to your needs.',
      // U+00A0 in `We are driven`.
      'We are driven by our passion for helping individuals and businesses build and protect their wealth so that they can leave a lasting legacy.',
    ],
  },

  advisorsHeading: 'Our team of experts',

  partners: {
    heading: 'Our partners',
    people: [
      {
        name: 'Lysane Tougas',
        // C-09.
        title: 'Senior Advisor, Estate Planning',
        noteRefs: [2],
        org: 'National Bank Financial - Wealth Management',
        image: {
          src: photoTougas,
          // NC-07. Live alt is `Photo of Lysane Tougas, Senior Advisor, Estate
          // Planning`; ours is that minus the `Photo of ` prefix, which a screen
          // reader announces redundantly on an <img>.
          alt: 'Lysane Tougas, Senior Advisor, Estate Planning',
          widths: PORTRAIT_WIDTHS,
          sizes: PORTRAIT_SIZES,
        },
        // NO `bio` — see the header comment. Do not add one (P-16).
      },
      {
        name: 'Jean-Francois Gobeil',
        // C-13 — the one title on this site disclaimer 1 actually governs.
        title: 'Financial Planner',
        noteRefs: [1],
        org: 'National Bank Financial - Wealth Management',
        image: {
          src: photoGobeil,
          // NC-07. Live alt is `Photo of Jean-Francois Gobeil , Financial
          // Planner, partner` — space before the comma (F-09, PENDING). Ours
          // carries name and title only.
          alt: 'Jean-Francois Gobeil, Financial Planner',
          widths: PORTRAIT_WIDTHS,
          sizes: PORTRAIT_SIZES,
        },
      },
    ],
  },

  legalRefs: [1, 2],
};

export default content;
