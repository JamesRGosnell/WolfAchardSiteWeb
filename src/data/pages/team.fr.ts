import type { TeamContent } from './team.types';

/**
 * FRENCH team page — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html`
 * Capture: `source-assets/html/fr-notre-equipe.html` (116,791 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order. Nothing is reordered, nothing is added, nothing is translated
 * from the English page (P-16 runs in both directions).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THE ORPHAN MARKERS — the compliance decision this page exists to resolve
 *
 * The live page renders `<sup>2</sup>` on `Conseillère principale, planification
 * successorale` and `<sup>1</sup>` on `Planificateur financier` — and carries NO
 * disclaimer accordion anywhere. Same defect, symmetrically, on the English
 * twin. COMPLIANCE.md §1.5 / P-12: a marker must resolve to a disclaimer ON THE
 * SAME PAGE, and exactly two dispositions are legitimate — add the full
 * accordion, or drop the markers.
 *
 * THE REBUILD ADDS THE ACCORDION (`legalRefs` below, rendered by `<LegalNotes>`
 * on the page). It adds no new copy — the five disclaimers are platform-standard
 * text already published on this site's own services page, verified
 * byte-identical — and it is the only option that does not edit a regulated
 * title string. Dropping a marker removes a regulatory reference, which is a
 * compliance decision and not a builder's. Registered as D-14.
 *
 * Marker `1` is the important one: disclaimer 1 is about financial planners, and
 * `Planificateur financier` is the ONE title on this entire site that it
 * actually governs (C-13). Shipping it unresolved would be the highest-priority
 * instance of the defect.
 *
 * Disclaimers 3, 4 and 5 render uncited on this page. That is the CORRECT state
 * and P-12 explicitly permits it: uncited notes are fine, uncited markers are
 * not. Nothing anywhere in the 16-page archive cites 4 or 5.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CHARACTERS THAT LOOK LIKE MISTAKES AND ARE NOT
 *
 *  · `Jean-Francois Gobeil ` (H3) ends with a TRAILING U+00A0. In the capture.
 *  · The page mixes apostrophes: `d'experts`, `l'écoute` and `d'aider` are plain
 *    U+0027, while every biography paragraph uses U+2019 (`l’Université`,
 *    `qu’une`, `d’envergure`). Both forms are reproduced as served; a
 *    normalising pipeline silently rewrites claim text.
 *  · `Jean-Francois` (no cedilla) in the heading against `Jean-François` (with
 *    cedilla) in the first line of his own biography, on this page. N-04 — a
 *    person's name is not a mechanical typo. Both ship.
 *  · `B.B.A` with no trailing period, and `université Bishops` lowercase, inside
 *    an academic credential (C-14). P-8 forbids normalising a credential.
 *
 * ⚠ CLAIMS THAT AGE. The biographies carry `se prépare actuellement pour
 * l’examen du CFA niveau III` (C-17 — the highest decay risk on the site; he has
 * since passed, failed or abandoned, and CFA Institute rules restrict how
 * candidacy may be described) and `plus de 8 ans d’expertise-conseil` on an
 * undated page (C-18). Both ship verbatim and both need a client answer before
 * launch.
 *
 * LANGUAGE PURITY (P-4): this file contains only French copy and French artwork.
 *
 * VERIFY
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/team.fr.ts \
 *     --capture source-assets/html/fr-notre-equipe.html
 */

/* ---------------------------------------------------------------- artwork --
 * The ORIGINAL DAM masters, copied from `source-assets/images/`.
 *
 * `ban-team-fr.jpg` is `ban-page-notre-equipe-groupe-wolf-achard.jpg` (2000×380)
 * — artwork made for THIS team, from their own DAM folder. The English page
 * serves a different picture entirely (NBF's generic microsite banner), so the
 * two files are not renditions of one another and cannot be deduplicated.
 *
 * The two headshots are imported by `advisors.ts`, not here: they are identity,
 * shared by both language trees and by the profile pages.
 *
 * The partner headshots are renamed on the way in — the DAM basenames are
 * `photo-lysanne-tougas-collaborateur-…` and
 * `photo-jean-francois-gobeil-collaborateur-…`. Both files are byte-identical
 * across the two language trees, so ONE copy is imported and Vite serves the
 * same asset to both. Dropping the French word `collaborateur` from the local
 * basename keeps a cross-language leak grep clean against `dist/` without
 * touching any client-facing string. (`lysanne` is the DAM's own spelling; every
 * page string spells her `Lysane`. Filename only — see the assets manifest.) */
import banner from '../../images/team/ban-team-fr.jpg';
import photoTougas from '../../images/team/photo-lysanne-tougas.png';
import photoGobeil from '../../images/team/photo-jean-francois-gobeil.png';

/** Source width of every partner headshot is 350px — nothing may upscale. */
const PORTRAIT_WIDTHS = [280, 350];
const PORTRAIT_SIZES = '(min-width: 62rem) 22rem, (min-width: 40rem) 45vw, calc(100vw - 2.5rem)';

const content: TeamContent = {
  locale: 'fr',

  meta: {
    // Live <title> is `Nos conseillers financiers | Groupe Wolf Achard |
    // Financière Banque Nationale - Gestion de patrimoine`. BaseLayout appends
    // ` | Financière Banque Nationale - Gestion de patrimoine` from fr.ts, so
    // only the leading segments belong here.
    title: 'Nos conseillers financiers | Groupe Wolf Achard',
    description:
      "En tant que partenaire pour tous vos besoins financiers, notre équipe possède l'expertise qui vous aidera à atteindre vos objectifs. Découvrez notre équipe!",
  },

  hero: {
    // VERBATIM live <h1>.
    heading: 'Découvrez notre équipe',
    // VERBATIM live <p> from the same teaser, promoted to the display line.
    message: "Des professionnels à l'écoute de vos besoins",
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
    heading: 'Ensemble, nous œuvrons pour atteindre vos objectifs',
    body: [
      // C-20. Note what the French does NOT claim: the English twin of this
      // sentence says `highly qualified`, and this one does not. They are not
      // translations of each other and neither may be adjusted toward the other.
      'Notre équipe est composée de professionnels en finance et en service à la clientèle pour vous accompagner au mieux dans la gestion de votre patrimoine. Avec eux, vous pourrez choisir parmi notre gamme complète de produits ceux qui répondent le mieux à vos besoins.',
      "Nous sommes animés par une passion commune: celle d'aider les particuliers et les entreprises à bâtir et préserver leur richesse, à développer leur patrimoine et à en faire bénéficier leur succession.",
    ],
  },

  // Apostrophe is plain U+0027 here, U+2019 in the biographies below.
  advisorsHeading: "Notre équipe d'experts",

  partners: {
    heading: 'Nos partenaires',
    people: [
      {
        name: 'Lysane Tougas',
        // C-09. Marker 2 — the Taxation, Retirement and Estate Planning team at
        // National Bank Trust, which is the disclaimer her title points at.
        title: 'Conseillère principale, planification successorale',
        noteRefs: [2],
        org: 'Financière Banque Nationale - Gestion de patrimoine',
        image: {
          src: photoTougas,
          // NC-07. The live alt is `Photo de Lysane Tougas, Conseillère
          // principale, planification successorale, collaborateur et
          // partenaire. ` (trailing space, F-10). Ours asserts nothing beyond
          // name and title.
          alt: 'Lysane Tougas, Conseillère principale, planification successorale',
          widths: PORTRAIT_WIDTHS,
          sizes: PORTRAIT_SIZES,
        },
        bio: {
          heading: 'Biographie',
          paragraphs: [
            // C-10 (Barreau du Québec since 1998 — a publicly verifiable
            // membership date; any derived "28 years of practice" is invented,
            // P-3) and C-11 (academic credentials, P-8).
            'Lysane est membre du Barreau du Québec depuis 1998. Elle a complété son baccalauréat en droit à l’Université de Montréal ainsi qu’une maîtrise en droit, option fiscalité, en 2004.',
            // C-12 — three unquantified qualitative claims in one paragraph:
            // `vaste expérience`, `plusieurs années`, `d’envergure`.
            'Elle possède une vaste expérience en matière de planification successorale et testamentaire ainsi qu’en droit fiscal. Elle a exercé pendant plusieurs années dans des cabinets d’avocats et d’experts comptables d’envergure.',
            'Elle accompagne notre équipe dans la prestation d’un service conseil engageant et de haut calibre. Son expertise, son empathie et son écoute lui permettent d’accompagner nos clients dans l’élaboration et l’atteinte de leurs objectifs successoraux.',
          ],
        },
      },
      {
        // TRAILING U+00A0, in the capture's <h3>.
        name: 'Jean-Francois Gobeil ',
        // C-13. THE title disclaimer 1 actually governs, anywhere on this site.
        title: 'Planificateur financier',
        noteRefs: [1],
        org: 'Financière Banque Nationale - Gestion de patrimoine',
        image: {
          src: photoGobeil,
          // NC-07. Live alt: `Photo de Jean-Francois Gobeil, Planificateur
          // financier, collaborateur`. Ours drops the affiliation word and keeps
          // name + title. `Jean-Francois` without the cedilla, as the heading
          // and the live alt both spell it (N-04).
          alt: 'Jean-Francois Gobeil, Planificateur financier',
          widths: PORTRAIT_WIDTHS,
          sizes: PORTRAIT_SIZES,
        },
        bio: {
          heading: 'Biographie',
          paragraphs: [
            // C-19 — a scope-of-practice claim listing insurance and legal
            // matters. Read against disclaimers 1 and 3, which say those
            // services come from separate entities. Note `Jean-François` WITH
            // the cedilla here, against the cedilla-less heading (N-04).
            'Jean-François est un passionné de la finance et de l’expérience client. Vous trouverez en lui une oreille attentive doublée d’un expert très aguerri en matière de finances personnelles. Son expertise s’étend à la retraite, la finance, la fiscalité, les placements, les assurances et la gestion des risques, puis aux aspects légaux et à la succession. Son expérience terrain étendue vous aidera à mieux comprendre vos finances et à demeurer en contrôle de vos affaires.',
            // C-14 (`B.B.A` sic, `université` lowercase), C-15 (IQPF membership
            // — the regulated claim underpinning the `Planificateur financier`
            // title and disclaimer 1; must be current at launch), C-16, C-17
            // (`actuellement` — highest decay risk on the site) and C-18
            // (`plus de 8 ans`, ages silently).
            'Il est titulaire d’un B.B.A de l’université Bishops en finance et il est membre de l’IQPF depuis 2015. Il a complété son diplôme en planification financière au HEC Montréal et se prépare actuellement pour l’examen du CFA niveau III. Il compte plus de 8 ans d’expertise-conseil au sein d’équipe de courtiers en épargne collective et sécurité financière, de courtiers en placement et au sein des succursales bancaires à la fois au Québec et en Ontario.',
          ],
        },
      },
    ],
  },

  // Markers rendered on this page. NOT a filter — <LegalNotes> always renders
  // all five, in order, whatever this array says (P-13).
  legalRefs: [1, 2],
};

export default content;
