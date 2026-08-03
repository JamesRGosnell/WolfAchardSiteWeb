import type { ContactContent } from './contact.types';

/**
 * ENGLISH contact page —
 * `https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html`
 * Capture: `source-assets/html/en-contact-us.html` (64,352 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order: hero · `We are here to help` + coordinates ·
 * `Our team of experts` + the two advisors.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS IS THE ONE PAGE PAIR THAT IS A GENUINE TRANSLATION
 *
 * Unlike the home, team, services and firm pages — where the English tree is
 * materially thinner and P-16 forbids filling the gap — the two contact pages
 * are structurally identical: same three sections, same two advisors, same
 * order. The differences are at character level, and every one of them is
 * deliberate:
 *
 *   FR `1 Place Ville-Marie, Bureau 1700,` / `Montréal (Québec) H3B 2C1`
 *   EN `1, Place Ville-Marie⟨NBSP⟩Suite 1700` / `Montreal⟨NBSP⟩QC⟨NBSP⟩H3B 2C1`
 *   FR `514 395-1937` (space)          EN `514-395-1937` (hyphen)
 *   FR `@bnc.ca`                       EN `@nbc.ca`
 *   FR `Heures d'ouverture`            EN `Business hours`
 *   FR `Français, anglais, italien`    EN `English`
 *
 * All six live in `src/data/en.ts` under `contact` (or in `languages` below)
 * and none is derived from its French counterpart.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT IS DELIBERATELY NOT IN THIS FILE
 *
 * The address, both phone numbers, both email addresses and the branch-locator
 * link — imported from `src/data/en.ts`. Critically, `en.ts` `addressLines`
 * ALREADY holds THIS page's rendering of the office, form (i) of C-22, with all
 * three load-bearing U+00A0 intact. The one-line `addressInline` in the same
 * file is form (ii), the ADVISOR PROFILE pages' rendering, and it must never
 * appear here. The three renderings are not harmonised.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CHARACTERS THAT LOOK LIKE MISTAKES AND ARE NOT
 *
 *  · `We are here to help` carries TWO U+00A0, between `We`/`are` and
 *    `are`/`here`. They are in the live `<h2>` and they ship.
 *  · `Photo of  Laurent Achard, …` has a DOUBLE SPACE after `of` and a TRAILING
 *    SPACE. That is F-07, PENDING, shipped SIC.
 *  · `Photo of David Alexandre Wolf, …` has a TRAILING SPACE. F-08, PENDING,
 *    shipped SIC.
 *  · `Wolf Archard Group` in `meta.title` is the team's own name MISSPELLED, on
 *    the live English tree, in a `<title>` — while the English logo artwork on
 *    the same page spells it `Achard`. C-21 / N-01. It is an identity string and
 *    the single highest-value finding on this build. It ships untouched.
 *  · `Adress picto ` — the live `alt` of the address pictogram, missing a `d`
 *    and carrying a trailing space — does NOT appear in this file. See D-13:
 *    the three decorative platform pictograms are not reproduced at all, so the
 *    string has nothing to attach to. Recorded rather than silently dropped.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * LANGUAGE PURITY (P-4): English copy, `@nbc.ca` addresses (via `en.ts`),
 * English profile-page paths. A `@bnc.ca` address, an `fbngp.ca` URL or a French
 * alt string appearing here is a defect. Note that `en.ts` legitimately carries
 * ONE `bnc.ca` host — `https://client.bnc.ca/nbfwm/home`, the whitelisted
 * English Client Access login (P-4 entry 3) — and it is in the header, not here.
 */

/* ---------------------------------------------------------------- artwork --
 * The SAME three DAM masters the French page imports, and that is correct: the
 * live markup serves identical assets to both trees and none of the three
 * carries baked-in wording. See the artwork note in `contact.fr.ts`. The
 * per-language strings are the alt texts below, and those are not shared. */
import banner from '../../images/contact/ban-homme-femme-travaille-bureau.jpg';
import photoAchard from '../../images/contact/photo-laurent-achard-montreal-350x330.png';
import photoWolf from '../../images/contact/photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png';

/** Source width is 350px, so nothing here ever asks sharp to upscale. */
const PORTRAIT_WIDTHS = [150, 300];
const PORTRAIT_SIZES = '150px';

const content: ContactContent = {
  locale: 'en',

  meta: {
    // Live <title> is
    //   `Contact us | Wolf Archard Group | National Bank Financial - Wealth
    //    Management`
    // and BaseLayout appends ` | ${titleSuffix}`, which is that third segment.
    // `Wolf Archard Group` ships SIC — see C-21 / N-01 above.
    title: 'Contact us | Wolf Archard Group',
    description:
      'Our team of specialists is here for you. Contact us today to get answers to all your financial questions!',
  },

  hero: {
    // VERBATIM live <h1>.
    heading: 'Contact us',
    // VERBATIM live <p> from the same AEM teaser, promoted to the display line.
    // It is four words against the French line's nine; the English page is set
    // to breathe rather than stretch, per the design brief.
    message: 'Need answers? Contact us!',
    banner: {
      src: banner,
      // Valueless `alt` on the live <img> — decorative (P-9, N-12).
      alt: '',
      widths: [767, 991, 1199],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  office: {
    // Live <h2>, with TWO U+00A0. Also the string `en.ts` uses as the footer CTA
    // eyebrow (D-07) — borrowed FROM here, so it is declared here. D-11 keeps
    // the footer band off this page so it cannot appear twice.
    heading: 'We are here to help',
    lead: 'Our team of specialists is here to meet your needs.',
  },

  team: {
    heading: 'Our team of experts',
    // Live order: Achard, then Wolf.
    advisors: [
      {
        slug: 'laurent-achard',
        // Join key into `en.ts` contact.phones[].label — must match exactly.
        name: 'Laurent Achard',
        // No trailing U+00A0 in English; the French H4 has one. Per-surface.
        title: 'Wealth Advisor',
        // C-07: this surface says `English` — flatly contradicting the English
        // PROFILE page, which says `French, English, Italian` about the same
        // person, inside the same language tree. Both ship. Choosing between
        // them is a statement about a licensed advisor's declared capability.
        languages: 'English',
        photo: {
          src: photoAchard,
          // SIC — F-07, PENDING. Double space after `of`, trailing space.
          alt: 'Photo of  Laurent Achard, Wealth Advisor, member of the team of experts. ',
          widths: PORTRAIT_WIDTHS,
          sizes: PORTRAIT_SIZES,
        },
      },
      {
        slug: 'david-alexandre-wolf',
        // NO HYPHEN (D-09); only the slug above is hyphenated.
        name: 'David Alexandre Wolf',
        title: 'Wealth Advisor',
        // C-08, same treatment as C-07 above.
        languages: 'English',
        photo: {
          src: photoWolf,
          // SIC — F-08, PENDING. Trailing space.
          alt: 'Photo of David Alexandre Wolf, Wealth Advisor, member of the team of experts. ',
          widths: PORTRAIT_WIDTHS,
          sizes: PORTRAIT_SIZES,
        },
      },
    ],
  },
};

export default content;
