import type { FirmContent } from './firm.types';
import { pathFor } from '../../lib/i18n';

/**
 * FRENCH firm page — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-firme.html`
 * Capture: `source-assets/html/fr-notre-firme.html` (64,413 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order. Nothing is reordered, added, or translated from the English
 * page (P-16 runs in both directions).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THE NINE NON-BREAKING SPACES THAT SHIP FROM THIS FILE
 *
 * Written as literal U+00A0 characters, not escapes, because that is what the
 * capture holds and what the strict sweep compares against. They look like
 * ordinary spaces in an editor. **Do not retype these lines.**
 *
 *   canadiennes.⟦NBSP⟧La mission          intro paragraph 1
 *   près de 850⟦NBSP⟧conseillers          C-29 — the `près de` / `over` conflict
 *   revenus⟦NBSP⟧ + par année             C-31 stat
 *   Plus de + ⟦NBSP⟧200 G$                C-32 stat
 *   29 %⟦NBSP⟧ / 9 %⟦NBSP⟧                 C-33 / C-34 stats
 *   grâce aux⟦NBSP⟧ … ⟦NBSP⟧de nos équipes  publications paragraph
 *   choix avisés.⟦NBSP⟧                   TRAILING, end of that paragraph
 *   ⟦NBSP⟧de stratégie de placement.      publications paragraph 2
 *   31⟦NBSP⟧243 employés                  C-37 — thousands separator. Fold this
 *                                          one and the headcount can break in
 *                                          half across a line.
 *   (TSX : NA).⟦NBSP⟧Suivez … sur⟦NBSP⟧     C-39 / C-40
 *   ⟦NBSP⟧ou par … comme⟦NBSP⟧Facebook
 *
 * ⚠ THE FRENCH PAGE CARRIES ZERO U+202F. All three of the site's narrow
 * no-break spaces are on the ENGLISH firm page. Do not "match" them here.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CHARACTERS THAT LOOK LIKE MISTAKES AND ARE NOT
 *
 *  · The apostrophe is U+0027 in `d'accompagner`, `l'actualité`, `d'experts`
 *    and `d'actifs` (the accordion), but U+2019 in `d’actifs` (the stat band),
 *    `l’excellente`, `l’un`, `d’employeur`, `l’égard`, `l’entremise` and
 *    `l’information`. The same two words take different apostrophes on the same
 *    page. Both forms ship as found (§0 of COMPLIANCE.md).
 *  · `29 %` and `9 %` use an ORDINARY space between the digits and the `%`,
 *    with the U+00A0 sitting AFTER the percent sign. French typography wants it
 *    the other way round. It ships as captured (C-33 / C-34).
 *  · The hero line uses U+2013 EN DASH (`Financière Banque Nationale – Gestion
 *    de patrimoine`) while the accordion body two screens down uses U+002D for
 *    the same firm name. Both are in the capture.
 *  · `5e rang` has no superscript ordinal. Left alone.
 *
 * LANGUAGE PURITY (P-4): this file contains only French copy and `@bnc.ca`
 * addresses. An `@nbc.ca` address, an `nbfwm.ca` URL or an English alt string
 * appearing here is a defect. The seven images are National Bank DAM masters
 * served BYTE-IDENTICALLY to both language trees by the live site — the
 * filenames are the DAM's own and carry no language.
 */

/* ---------------------------------------------------------------- artwork --
 * Page-local imports of the ORIGINAL DAM assets (the `data-asset` master, not
 * the rendered rendition), copied from `source-assets/images/`.
 *
 * ⚠ TWO OF THE FOUR STAT PICTOS ARE ATTACHED TO THE STATISTIC THEIR FILENAME
 * DOES NOT NAME: `icn_part_canada.svg` sits on assets-under-management and
 * `icn_actif_sous_gestion.svg` sits on Canadian market share. That is the live
 * pairing and it is reproduced. The alt strings describe the PICTURES
 * correctly, so no screen-reader user is misinformed; only the filenames are
 * crossed. Documented in `content/assets-manifest.md`. */
import banner from '../../images/firm/ban-microsites-notre-a-propos.jpg';
import corridorPhoto from '../../images/firm/img-microsites-humain-a-propos-2-474x464.png';
import lakePhoto from '../../images/firm/img-microsites-aspirationnel-a-propos-1-474x464.png';
import icnRevenue from '../../images/firm/icn_revenu_par_annee.svg';
import icnAssets from '../../images/firm/icn_part_canada.svg';
import icnShareQc from '../../images/firm/icn_part_de_marche.svg';
import icnShareCa from '../../images/firm/icn_actif_sous_gestion.svg';

const contact = pathFor('contact', 'fr');

/** Source widths, so no `widths` array below ever asks sharp to upscale. */
const HALF_SIZES = '(min-width: 60rem) 30rem, calc(100vw - 2.5rem)';

const content: FirmContent = {
  locale: 'fr',

  meta: {
    // Live <title> is `Notre firme | Financière Banque Nationale - Gestion de
    // patrimoine`; BaseLayout appends ` | ` + titleSuffix from fr.ts, so only
    // the leading segment belongs here.
    title: 'Notre firme',
    description:
      'Travailler avec la Financière Banque Nationale - Gestion de patrimoine, c’est profiter d’un solide réseau d’experts et d’une grande variété de ressources.',
  },

  hero: {
    // VERBATIM live <h1>. Ships as captured, at label size.
    heading: 'À propos',
    // VERBATIM live <p> from the same AEM teaser, promoted to the display line.
    // U+2013 EN DASH, not a hyphen.
    message: 'Financière Banque Nationale – Gestion de patrimoine',
    banner: {
      src: banner,
      // The live <img> carries a valueless `alt` attribute — decorative. N-12
      // lists every hero banner on the site as alt-less; writing one is
      // authoring (P-9).
      alt: '',
      widths: [767, 1199, 1600, 2000],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  intro: {
    heading: 'Le partenaire financier des familles canadiennes',
    body: [
      // C-28 (`Depuis 1902` — never computed into a number of years, P-3),
      // C-29 (`près de 850`, which the English page contradicts with `over
      // 850`), C-30 (`100 succursales`, unsourced and undated).
      [
        'Depuis 1902, nous tissons des liens durables avec les familles canadiennes. La mission de la FBNGP est d\'accompagner nos clients dans la gestion de leur patrimoine de génération en génération. Notre réseau compte près de 850 conseillers en gestion de patrimoine dans 100 succursales distribuées entre Victoria et Halifax.',
      ],
      // No English equivalent: the EN page's second paragraph is a different
      // sentence (`Our experts offer personalized service…`), not a
      // translation of this one. Do not reconcile them (P-16).
      [
        'Grâce à ce riche héritage, nos experts vous offrent un service hautement personnalisé pour que vos objectifs de vie deviennent réalité.',
      ],
    ],
  },

  /* ------------------------------------------------------------------------
   * THE STAT BAND. C-31 … C-34, all four UNSOURCED AND UNDATED on the live
   * site. Each `text` is the WHOLE live sentence with the live <b> span kept as
   * a `strong` run — the number is never separated from its own words, and no
   * as-at date is invented for figures that have none (D-16).
   * ---------------------------------------------------------------------- */
  stats: {
    heading: 'Un puissant allié',
    stats: [
      {
        icon: {
          src: icnRevenue,
          alt: 'Picto Employé Banque Nationale',
          widths: [52],
          sizes: '3.25rem',
        },
        // C-31. Whose revenue is never stated on the live page.
        text: [{ strong: '1 G$ de revenus ' }, 'par année'],
      },
      {
        icon: {
          src: icnAssets,
          alt: 'Picto Ampoule et signe de dollar',
          widths: [62],
          sizes: '3.25rem',
        },
        // C-32. The leading U+00A0 belongs to the <b>, not to `Plus de`.
        // `actifs sous gestion` — writing `ASG`/`AUM` would be a restatement.
        text: ['Plus de', { strong: ' 200 G$ d’actifs' }, ' sous gestion'],
      },
      {
        icon: {
          src: icnShareQc,
          alt: 'Picto Part de marché',
          widths: [93],
          sizes: '3.25rem',
        },
        // C-33. Market share OF WHAT, measured WHEN, is not stated.
        text: [{ strong: '29 % ' }, 'Part de marché au Québec'],
      },
      {
        icon: {
          src: icnShareCa,
          alt: 'Picto Porte-monnaie avec un logo de la Banque Nationale',
          widths: [68],
          sizes: '3.25rem',
        },
        // C-34.
        text: [{ strong: '9 % ' }, 'Part de marché au Canada'],
      },
    ],
  },

  publications: {
    heading: 'Suivez l\'actualité financière',
    body: [
      [
        'Restez informés de l\'actualité économique grâce aux ',
        {
          link: 'publications financières',
          href: 'https://www.fbngp.ca/documentation/publications-financieres.html',
          external: true,
        },
        // Leading AND trailing U+00A0, both in the capture.
        ' de nos équipes d\'experts. Fiables et reconnues, elles vous aideront à atteindre vos objectifs financiers et à faire des choix avisés. ',
      ],
      [
        'Pour obtenir de l’information claire et concise sur la conjoncture économique mondiale, consultez notre ',
        // P-14: an evergreen NBF publication URL, overwritten in place by the
        // bank. Never pin a dated PDF filename.
        {
          link: 'publication trimestrielle',
          href: 'https://www.fbngp.ca/content/dam/fbngp/pdf/doc-strategie-placement.pdf',
          external: true,
        },
        ' de stratégie de placement.',
      ],
    ],
    image: {
      src: corridorPhoto,
      alt: 'Deux femmes discutent en marchant dans un corridor dans un bureau.',
      widths: [237, 474],
      sizes: HALF_SIZES,
    },
    mediaSide: 'start',
  },

  /* ------------------------------------------------------------------------
   * THE STALE CLUSTER — C-36 … C-41, one paragraph, four ageing assertions.
   * `424 milliards de dollars au 31 octobre 2023` keeps its as-at date because
   * the date is the only thing making the figure defensible. `31 243` keeps its
   * U+00A0 thousands separator. `Twitter` ships sic: the platform was renamed X
   * in July 2023, three months BEFORE the as-of date in the same sentence, and
   * modernising corporate-approved text is not a builder's call (C-40).
   * ---------------------------------------------------------------------- */
  parentBank: {
    heading: 'À propos de la Banque Nationale',
    subheading: 'L\'une des institutions financières les plus importantes au Canada',
    body: [
      [
        'Nous bénéficions de l’excellente réputation de notre société mère. Avec un actif de 424 milliards de dollars au 31 octobre 2023, la Banque Nationale du Canada, avec ses filiales, est l’un des plus importants groupes financiers intégrés canadiens. Elle compte plus de 31 243 employés dans des fonctions à contenu élevé de savoir, et a été maintes fois primée pour ses qualités d’employeur et son engagement à l’égard de la diversité. Ses titres sont cotés à la Bourse de Toronto (TSX : NA). Suivez ses activités sur ',
        { link: 'bnc.ca', href: 'http://bnc.ca/', external: true },
        ', sa ',
        {
          link: 'salle de presse',
          href: 'https://www.bnc.ca/fr/a-propos-de-nous/nouvelles/salle-de-presse.html',
          external: true,
        },
        ' ou par l’entremise de réseaux sociaux comme Facebook, LinkedIn et Twitter.',
      ],
    ],
    image: {
      src: lakePhoto,
      alt: 'Un lac d’un bleu clair encerclé de montagnes.',
      widths: [237, 474],
      sizes: HALF_SIZES,
    },
    mediaSide: 'end',
  },

  /* ------------------------------------------------------------------------
   * FR ONLY (C-35, §1.7). The English firm page has neither this accordion nor
   * the claim it discloses; creating one would be translating a competitive
   * ranking claim into a language its compliance file never approved (P-16).
   *
   * Live position: after the parent-bank block, before the contact block. Kept.
   *
   * The leading `*` references nothing. Verified independently on the capture:
   * zero <sup>, zero <sub>, and no other `*` anywhere in the body copy. It
   * ships as found — deleting an orphan reference removes a disclosure signal,
   * and adding a matching footnote invents regulatory wording (N-15, P-6).
   *
   * The claim itself is substantiated to Investor Economics, MARCH 2019 — over
   * seven years old at rebuild, and the ONLY properly attributed claim on the
   * entire site. Flagged, not refreshed: only NBF may supply a new citation.
   * ---------------------------------------------------------------------- */
  note: {
    title: 'Petits détails pour tout savoir',
    // `Financière Banque Nationale - Gestion de patrimoine` here uses U+002D,
    // where the hero line above uses U+2013. Apostrophe in `d'actifs` is
    // U+0027, where the stat band above uses U+2019. Both differences are in
    // the capture, on this one page.
    body:
      '*Financière Banque Nationale - Gestion de patrimoine est classée au 5e rang chez les courtiers de plein exercice canadiens en termes d\'actifs sous gestion, selon Investor Economics (mars 2019).',
  },

  contact: {
    // <h3> on the live page, not an <h2>.
    heading: 'Contactez-nous',
    lead: 'Obtenez les coordonnées des membres de notre équipe et voyez où se trouvent nos bureaux.',
    link: { label: 'Voir nos coordonnées', href: contact },
    // C-03 / C-04: the FR page SPACES these numbers, the EN page hyphenates
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
