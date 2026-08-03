import type { TeamContent } from './team.types';

/**
 * ENGLISH team page — `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html`
 * Capture: `source-assets/html/en-our-team.html` (111,493 bytes)
 *
 * Every string below is byte-exact from that capture, in the capture's own
 * document order — **with ONE class of exception, and it is the big one**: the
 * two `bio` panels are NOT in the capture. They are translations of the French
 * page, made under `content/COMPLIANCE.md` §6.5 and registered as NC-24 … NC-26.
 * Everything that is not inside a `bio` object is still verbatim, and the
 * verbatim sweep must be run with those two objects excluded, not folded in.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠ THE TWO BIOGRAPHIES ARE NEW ON THIS PAGE — TRANSLATED 2026-08-03
 *
 * The live English page carries NO biographies. The live French page carries
 * two `Biographie` accordions running to five paragraphs of credential claims
 * about Lysane Tougas and Jean-Francois Gobeil. P-16 prohibited translating
 * them; **the client amended P-16 on 2026-08-03** and the amendment, its scope
 * limit and its exclusion list are `content/COMPLIANCE.md` §6.5.
 *
 * So both cards now carry a `Biography` panel. NC-24 (the panel heading),
 * NC-25 (Tougas, 3 paragraphs), NC-26 (Gobeil, 2 paragraphs). Every English
 * sentence renders a French sentence that is already live on
 * `fr-notre-equipe.html`; the French source is quoted beside each one below.
 *
 * ⚠ THIS IS THE MOST DANGEROUS COPY ON THE SITE AND IT IS NOT CLOSE.
 * Five §4 claims are now asserted in a second language, about two named,
 * licensed individuals:
 *
 *   C-10  Barreau du Québec membership since 1998
 *   C-11  baccalauréat en droit + maîtrise en droit, option fiscalité, 2004
 *   C-14  B.B.A, université Bishops            ← sic in both languages
 *   C-15  IQPF membership since 2015           ← regulated professional body
 *   C-16  diplôme en planification financière, HEC Montréal
 *   C-17  CFA level III, `se prépare actuellement`  ← see the block below
 *   C-18  `plus de 8 ans d'expertise-conseil`  ← rolling count, undated page
 *
 * Every one of them keeps `[KEEP VERBATIM]` on its FRENCH string. Nothing here
 * replaces or restates a French claim; it adds an English surface for it.
 * **All seven need NBF compliance sign-off before launch** (§6.5 rule 5), and
 * C-17 additionally needs the answer INTAKE Q8b has been asking for.
 *
 * ⚠ C-17 — `se prépare actuellement pour l'examen du CFA niveau III`.
 * Rendered `is currently preparing for the CFA Level III exam`. It is NOT
 * rendered `CFA Level III candidate`, `CFA candidate` or `pursuing the CFA
 * charter`: those are stronger forms, CFA Institute rules constrain how
 * candidacy may be described in public material, and §6.5 rule 2 forbids a
 * translation from strengthening its source. `actuellement` → `currently` is
 * preserved deliberately, decay and all — softening it to a past tense or
 * dropping it would be improving the source, which is the one thing a
 * translation may not do. The sentence now decays in two languages instead of
 * one. That is a reason to answer Q8b, not a reason to edit it here.
 *
 * ⚠ C-18 — `plus de 8 ans` renders as `more than 8 years`, digit preserved.
 * Not `over eight years`, not `nearly a decade`, not a computed span.
 *
 * There is still no empty accordion and no placeholder anywhere: `bio` remains
 * optional on `Partner`, and a partner without one renders nothing at all.
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
        // NC-25. Translated from the French `Biographie` panel under §6.5.
        bio: {
          // NC-24. FR: `Biographie`
          heading: 'Biography',
          paragraphs: [
            // ⚠ CREDENTIAL PARAGRAPH — C-10 and C-11, both flagged individually.
            //
            // FR: `Lysane est membre du Barreau du Québec depuis 1998. Elle a
            //      complété son baccalauréat en droit à l’Université de Montréal
            //      ainsi qu’une maîtrise en droit, option fiscalité, en 2004.`
            //
            // `membre du Barreau du Québec depuis 1998` → `has been a member of
            // the Barreau du Québec since 1998`. The professional body keeps its
            // own registered French name — it is a regulator, and translating a
            // regulator's name invents a variant of it (P-6, and the same rule
            // that keeps `IQPF` unexpanded below). Present perfect + `since
            // 1998` reproduces `est membre … depuis`, and NOTHING computes a
            // number of years from it (P-3).
            //
            // `baccalauréat en droit` → `bachelor's degree in law`, NOT `LL.B.`.
            // `maîtrise en droit, option fiscalité` → `master's degree in law,
            // taxation option`, NOT `LL.M. in Taxation` and NOT `specializing
            // in tax law`. Both would be stronger, more specific restatements of
            // an academic credential (P-8, §6.5 rule 2). `2004` is preserved.
            // `Université de Montréal` keeps its own name and its accents.
            'Lysane has been a member of the Barreau du Québec since 1998. She completed her bachelor’s degree in law at the Université de Montréal as well as a master’s degree in law, taxation option, in 2004.',
            // C-12 — three unquantified qualitative claims in one paragraph, and
            // all three survive translation unquantified: `vaste expérience` →
            // `extensive experience`, `plusieurs années` → `several years`,
            // `d’envergure` → `major`. None is given a number, a range or a
            // firm name it does not have.
            //
            // FR: `Elle possède une vaste expérience en matière de planification
            //      successorale et testamentaire ainsi qu’en droit fiscal. Elle a
            //      exercé pendant plusieurs années dans des cabinets d’avocats et
            //      d’experts comptables d’envergure.`
            //
            // `planification successorale` → `estate planning`, which is this
            // team's own English for it — it is her published English title on
            // this very page.
            'She has extensive experience in estate and will planning as well as in tax law. She practised for several years in major law and accounting firms.',
            // FR: `Elle accompagne notre équipe dans la prestation d’un service
            //      conseil engageant et de haut calibre. Son expertise, son
            //      empathie et son écoute lui permettent d’accompagner nos clients
            //      dans l’élaboration et l’atteinte de leurs objectifs
            //      successoraux.`
            //
            // `accompagner` → `support`, twice, which is the team's own English
            // rendering of that verb on this page (`here to support you in
            // managing your wealth` ← `pour vous accompagner…`).
            'She supports our team in delivering an engaging, high-calibre advisory service. Her expertise, her empathy and her attentiveness allow her to support our clients in developing and achieving their estate objectives.',
          ],
        },
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
        // NC-26. Translated from the French `Biographie` panel under §6.5.
        bio: {
          // NC-24. FR: `Biographie`
          heading: 'Biography',
          paragraphs: [
            // C-19 — a scope-of-practice claim listing insurance and legal
            // matters, to be read against disclaimers 1 and 3 at the foot of
            // this page, which say those services come from separate entities.
            // It is now asserted in English too, and the disclaimers it must be
            // read against are rendered on the same page in both languages.
            //
            // ⚠ `Jean-François` WITH the cedilla, because the French BIOGRAPHY
            // BODY spells him that way while the French and English HEADINGS
            // both spell him `Jean-Francois` without one. N-04: a person's name
            // is not a mechanical typo, and both forms ship as found. The
            // translation reproduces the French page's own internal
            // inconsistency rather than resolving it, because resolving it would
            // be choosing a spelling for a named individual. D-75.
            //
            // FR: `Jean-François est un passionné de la finance et de
            //      l’expérience client. Vous trouverez en lui une oreille
            //      attentive doublée d’un expert très aguerri en matière de
            //      finances personnelles. Son expertise s’étend à la retraite, la
            //      finance, la fiscalité, les placements, les assurances et la
            //      gestion des risques, puis aux aspects légaux et à la
            //      succession. Son expérience terrain étendue vous aidera à mieux
            //      comprendre vos finances et à demeurer en contrôle de vos
            //      affaires.`
            //
            // `la succession` → `estate planning`: National Bank's OWN English
            // renders that exact French word that way in disclaimer 2, on this
            // same page (`…à la succession` → `…and estate planning`).
            'Jean-François is passionate about finance and the client experience. In him you will find an attentive ear combined with a highly seasoned expert in personal finances. His expertise extends to retirement, finance, taxation, investments, insurance and risk management, and then to legal aspects and estate planning. His extensive field experience will help you better understand your finances and stay in control of your affairs.',
            // ⚠ THE CREDENTIAL PARAGRAPH. C-14, C-15, C-16, C-17, C-18 — five
            // flagged claims in three sentences, and each is flagged separately
            // in the register.
            //
            // FR: `Il est titulaire d’un B.B.A de l’université Bishops en finance
            //      et il est membre de l’IQPF depuis 2015. Il a complété son
            //      diplôme en planification financière au HEC Montréal et se
            //      prépare actuellement pour l’examen du CFA niveau III. Il compte
            //      plus de 8 ans d’expertise-conseil au sein d’équipe de courtiers
            //      en épargne collective et sécurité financière, de courtiers en
            //      placement et au sein des succursales bancaires à la fois au
            //      Québec et en Ontario.`
            //
            // C-14 — `B.B.A` keeps its live form: no trailing period, and
            // `Bishops` with no apostrophe, and `university` LOWERCASE, exactly
            // as the French renders the institution. P-8 forbids normalising a
            // credential — not wording, capitalisation, punctuation or language
            // — and `B.B.A. from Bishop's University` would normalise three
            // things at once. It looks like a typo in English because it is one
            // in French. Flagged, not repaired.
            //
            // C-15 — `IQPF` is NOT expanded. The French does not expand it, and
            // spelling out a regulated professional body the source only
            // abbreviates adds a credential detail (P-8). `depuis 2015` →
            // `since 2015`, date preserved, no span computed.
            //
            // C-16 — `HEC Montréal` keeps its own name and accent.
            //
            // C-17 — see the ⚠ block at the head of this file. `is currently
            // preparing for the CFA Level III exam`. Not `candidate`.
            //
            // C-18 — `plus de 8 ans` → `more than 8 years`. The DIGIT is
            // preserved; every figure on this site traces to a §4 row (P-3).
            // `courtiers en épargne collective` → `mutual fund brokers`,
            // `courtiers en placement` → `investment dealers`: the standard
            // English of the two Quebec registration categories. `Québec` →
            // `Quebec` unaccented, this tree's own convention (N-05).
            'He holds a B.B.A in finance from Bishops university and has been a member of the IQPF since 2015. He completed his diploma in financial planning at HEC Montréal and is currently preparing for the CFA Level III exam. He has more than 8 years of advisory expertise within teams of mutual fund and financial security brokers, of investment dealers and within bank branches, in both Quebec and Ontario.',
          ],
        },
      },
    ],
  },

  legalRefs: [1, 2],
};

export default content;
