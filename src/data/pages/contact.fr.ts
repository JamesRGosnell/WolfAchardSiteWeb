import type { ContactContent } from './contact.types';

/**
 * FRENCH contact page —
 * `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nous-joindre.html`
 * Capture: `source-assets/html/fr-nous-joindre.html` (64,585 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order: hero · `Nous sommes à votre écoute` + coordinates ·
 * `Notre équipe d'experts` + the two advisors.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT IS DELIBERATELY NOT IN THIS FILE
 *
 * The address, both phone numbers, both email addresses and the branch-locator
 * link. They are site-wide identity data, they are already correct in
 * `src/data/fr.ts` under `contact`, and the page imports them from there. See
 * the header of `contact.types.ts` for why a second copy on this page would be
 * the worst possible place for one.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CHARACTERS THAT LOOK LIKE MISTAKES AND ARE NOT
 *
 *  · `Conseiller en gestion de patrimoine ` (both advisors) ends in a TRAILING
 *    U+00A0. It is in the live `<h4>` (`…patrimoine&#160;</h4>`). C-01 / C-02.
 *    The profile-page `<h3>` does NOT carry it; each surface keeps its own form.
 *  · The apostrophe is a plain U+0027 in `Notre équipe d'experts`, in
 *    `aujourd'hui` and in both headshot alts — the live markup serves `&#39;`
 *    at every one of those points, not `&rsquo;`. Do not "upgrade" them to
 *    U+2019 (COMPLIANCE §0).
 *  · `Nous Joindre` in `meta.title` has a CAPITAL J; the `<h1>` in `hero.heading`
 *    has a lowercase one. Both are live, on the same page. Flagged as D-12;
 *    neither is corrected, because a page title is an identity-adjacent string
 *    and there is no policy amendment authorising editorial fixes (§6).
 *  · `Photo de Laurent Achard, Conseiller en gestion de patrimoin , membre…` —
 *    the word is truncated mid-title and there is a space before the comma.
 *    That is live. It is F-01, it is PENDING, and it SHIPS SIC. Wolf's alt on
 *    the same page is correct, which is the proof this is a slip and not a
 *    variant — but repairing it is a client decision, not a builder's.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * LANGUAGE PURITY (P-4): French copy, `@bnc.ca` addresses (via `fr.ts`), French
 * profile-page paths. An `@nbc.ca` address, an `nbfwm.ca` URL or an English alt
 * string appearing here is a defect.
 */

/* ---------------------------------------------------------------- artwork --
 * Page-local imports of the ORIGINAL DAM masters.
 *
 * ALL THREE ARE SHARED WITH THE ENGLISH PAGE, and that is correct rather than a
 * language-purity breach. The live markup serves the identical DAM assets to
 * both trees — `/content/dam/fbngp/ban/contact/ban-homme-femme-travaille-
 * bureau.jpg` and the two `/content/dam/fbngp/photo/…` headshots. None of the
 * three carries baked-in wording in either language, so there is nothing to
 * diverge. Same reasoning as the wordless `logo-cp-fbngp-s.svg` flag in the
 * P-4 whitelist and as the three shared news teasers on the home page: one
 * neutral file under the DAM's own basename is both truthful and grep-clean.
 * The per-language strings are the alt texts below, and those are NOT shared. */
import banner from '../../images/contact/ban-homme-femme-travaille-bureau.jpg';
import photoAchard from '../../images/contact/photo-laurent-achard-montreal-350x330.png';
import photoWolf from '../../images/contact/photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png';

/** Source width is 350px, so nothing here ever asks sharp to upscale. */
const PORTRAIT_WIDTHS = [150, 300];
const PORTRAIT_SIZES = '150px';

const content: ContactContent = {
  locale: 'fr',

  meta: {
    // Live <title> is
    //   `Nous Joindre | Équipe Groupe Wolf Achard | Financière Banque Nationale
    //    - Gestion de patrimoine`
    // and BaseLayout appends ` | ${titleSuffix}`, which is exactly that third
    // segment. So the first two segments belong here and the rendered title is
    // character-identical to live. Note `Équipe Groupe Wolf Achard`: the English
    // title says only `Wolf Archard Group`, with no equivalent of `Équipe`. The
    // asymmetry is live and is not evened out.
    title: 'Nous Joindre | Équipe Groupe Wolf Achard',
    description:
      "Notre équipe de spécialistes est là pour vous. Contactez-nous dès aujourd'hui pour trouver réponse à toutes vos questions financières!",
  },

  hero: {
    // VERBATIM live <h1>, lowercase `joindre`. Ships as captured, at label size.
    heading: 'Nous joindre',
    // VERBATIM live <p> from the same AEM teaser, promoted to the display line.
    message: 'Contactez nos experts pour trouver réponse à vos questions',
    banner: {
      src: banner,
      // The live <img> carries a valueless `alt` attribute — decorative, exactly
      // like the home banner. N-12 lists all 12 hero banners as alt-less;
      // writing one is authoring (P-9).
      alt: '',
      widths: [767, 991, 1199],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  office: {
    // Live <h2>. This is ALSO the string `fr.ts` uses as the footer CTA band's
    // eyebrow (D-07) — the footer borrowed it FROM this page, not the reverse,
    // so it is declared here where it belongs rather than read back out of the
    // footer's data. See D-11 for why the footer band does not render on this
    // page at all, which is what keeps it from appearing twice.
    heading: 'Nous sommes à votre écoute',
    lead: 'Notre équipe de spécialistes est là pour répondre à vos besoins.',
  },

  team: {
    // Live <h2>. Apostrophe is U+0027 (`d&#39;experts` in the markup).
    heading: "Notre équipe d'experts",
    // Live order: Achard, then Wolf.
    advisors: [
      {
        slug: 'laurent-achard',
        // Join key into `fr.ts` contact.phones[].label — must match exactly.
        name: 'Laurent Achard',
        title: 'Conseiller en gestion de patrimoine ',
        // C-07: this surface says `Français, anglais, italien`. The FR profile
        // page says `Français, Anglais, Italien` and the EN tree says `English`
        // on one page and `French, English, Italian` on another. Four
        // assertions, four surfaces; this page ships its own and nothing is
        // reconciled.
        languages: 'Français, anglais, italien',
        photo: {
          src: photoAchard,
          // SIC — F-01, PENDING. `patrimoin ` is truncated and carries a space
          // before the comma, live, in this exact string.
          alt: "Photo de Laurent Achard, Conseiller en gestion de patrimoin , membre de l'équipe expert.",
          widths: PORTRAIT_WIDTHS,
          sizes: PORTRAIT_SIZES,
        },
      },
      {
        slug: 'david-alexandre-wolf',
        // NO HYPHEN. Live display name in both languages (D-09); only the slug
        // above is hyphenated.
        name: 'David Alexandre Wolf',
        title: 'Conseiller en gestion de patrimoine ',
        // C-08, same treatment as C-07 above.
        languages: 'Français, anglais',
        photo: {
          src: photoWolf,
          alt: "Photo de David Alexandre Wolf, Conseiller en gestion de patrimoine, membre de l'équipe expert.",
          widths: PORTRAIT_WIDTHS,
          sizes: PORTRAIT_SIZES,
        },
      },
    ],
  },
};

export default content;
