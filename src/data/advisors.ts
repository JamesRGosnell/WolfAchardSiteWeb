/**
 * ONE SOURCE OF ADVISOR IDENTITY — the team page and the per-advisor profile
 * pages read from here, so they cannot drift.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY EVERY IDENTITY FIELD IS PER-SURFACE AND NOT PER-LANGUAGE
 *
 * The live site publishes the SAME advisor with DIFFERENT strings on the team
 * page and on his own profile page, in both languages. Measured from the six
 * captures, for Laurent Achard alone:
 *
 *   surface                       title                     phone         languages
 *   ───────────────────────────── ───────────────────────── ───────────── ──────────────────────────
 *   fr-notre-equipe   (H4)        Conseiller … patrimoine␠  514 395-1937  Français, anglais, italien
 *   fr-laurent-achard (H3)        Conseiller … patrimoine   514 395-1937  Français, Anglais, Italien
 *   en-our-team       (H4)        Wealth Advisor            514-395-1937  English
 *   en-laurent-achard (H3)        Wealth Advisor            514-395-1937  French, English, Italian
 *                                 (␠ = trailing U+00A0)
 *
 * COMPLIANCE.md C-07 / C-08 / AP-03: these are self-declared capability claims
 * about licensed individuals, and the archive found FOUR different assertions
 * about Achard's languages — two of them inside the same language tree. The
 * disposition is **[KEEP VERBATIM, ALL FOUR] + [FLAG — CONFLICT]. Do not
 * harmonise.** So `team` and `profile` are separate fields, not one field with a
 * formatter; there is deliberately no code path that can derive one from the
 * other.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THE PROFILE PAGES ARE
 *
 * NOT this team's content. All four carry
 * `meta[name=template]=fiche-conseillers-placement-template` and are rendered by
 * National Bank from a central structured advisor record into the corporate
 * `fbngp.ca` / `nbfwm.ca` chrome, not the microsite chrome. Every string on them
 * — name, title, phone, email, website, address, languages — is a FIELD IN NBF'S
 * RECORD. COMPLIANCE.md AP-01: a defect on these pages originates in the record,
 * and correcting it locally makes the site disagree with the bank's own record
 * of a licensed advisor. Report; do not repair.
 *
 * COMPLIANCE.md AP-02: the live profile pages carry NO `<sup>` markers and NO disclaimer
 * accordion. That is internally consistent and stays that way — `<LegalNotes>`
 * must be ABSENT from these pages. Adding one is as much a deviation as
 * dropping one.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CHARACTERS THAT LOOK LIKE MISTAKES AND ARE NOT
 *
 *  · `Conseiller en gestion de patrimoine ` (team H4, BOTH advisors) ends with a
 *    TRAILING U+00A0. It is in the live markup and it is inside a regulated
 *    title string (P-8), so §0's NBSP-preservation policy forbids touching it.
 *  · `David Alexandre Wolf` has NO HYPHEN in the display name, in either
 *    language. Only the URL slug is hyphenated. D-09.
 *  · The FR Wolf profile H3 is `Conseiller en gestion de patrimoine ` with a
 *    trailing PLAIN space; the FR Achard profile H3 has none. That trailing
 *    space is what produces the doubled space in Wolf's live `<title>` (F-13,
 *    PENDING). HTML collapses it in rendering, so it is preserved in `seo.title`
 *    where it is observable and dropped from the H3 where it is not.
 *  · `Laurent Achard ` — his live profile `<h1>` carries a trailing plain space,
 *    which is what produces `Laurent Achard , Conseiller…` (space before comma)
 *    in his `<title>` and descriptions on both profile pages. F-12, PENDING;
 *    shipped sic in the metadata strings.
 *
 * LANGUAGE PURITY (P-4): `fr` entries carry only `@bnc.ca`; `en` entries only
 * `@nbc.ca`. Both currently measure clean and an address is NEVER translated.
 *
 * VERIFY
 *   node scripts/verbatim-sweep.mjs --data src/data/advisors.ts \
 *     --capture source-assets/html/fr-notre-equipe.html \
 *     --capture source-assets/html/en-our-team.html \
 *     --capture source-assets/html/fr-laurent-achard.html \
 *     --capture source-assets/html/en-laurent-achard.html \
 *     --capture source-assets/html/fr-david-alexandre-wolf.html \
 *     --capture source-assets/html/en-david-alexandre-wolf.html
 */
import type { Locale } from './types';

import photoLaurentAchard from '../images/team/photo-laurent-achard.png';
import photoDavidAlexandreWolf from '../images/team/photo-david-alexandre-wolf.png';

/**
 * A string that legitimately differs between the team page and the advisor's own
 * profile page. Never collapse the two — see the table above.
 */
export interface BySurface<T> {
  /** As it appears on the TEAM page (`notre-equipe` / `our-team`). */
  team: T;
  /** As it appears on the PROFILE page. May legitimately differ. */
  profile: T;
}

export interface Advisor {
  /** URL segment. Identical in both languages; never translated. */
  slug: string;
  /**
   * VERBATIM display name — `Laurent Achard`, `David Alexandre Wolf`.
   * No hyphen in Wolf's name anywhere on the live site (D-09); only the slug
   * has one. Neither advisor displays ANY credential, designation or letters
   * after his name on any live page, and none may be added (P-8).
   */
  name: string;
  /** VERBATIM regulated title, per surface. NBF-assigned. C-01 / C-02. */
  title: BySurface<string>;
  /**
   * Biography paragraphs, per surface.
   *
   * EMPTY EVERYWHERE ON THIS SITE. Neither advisor has a biography on the team
   * page or on his profile page, in either language — the profile pages' own
   * `advisorBiographyUI` container renders empty in all four captures. The two
   * biographies that DO exist belong to the partners Lysane Tougas and
   * Jean-Francois Gobeil, are French-only, and live in the team page's data
   * module because they are page content, not advisor identity.
   *
   * The field stays because a future NBF record may carry one; it must never be
   * filled from another source (P-5 / P-16).
   */
  bio: BySurface<string[]>;
  /**
   * Phone. The DISPLAY string is per-surface and per-language verbatim
   * (`514 395-1937` in French, `514-395-1937` in English — C-03 / C-04).
   *
   * The `tel:` href is deliberately NOT per-surface. The live site publishes two
   * different hrefs for the same number: E.164 `tel:+15143951937` on the twelve
   * microsite pages, and local `tel:514-395-1937` on the four profile pages
   * (C-23 — no country code, not reliably dialable from outside Canada). Both
   * are the client's own live values; the rebuild uses the dominant one
   * throughout rather than shipping a link that may not dial. D-23.
   */
  phone: { display: BySurface<string>; href: string };
  /** VERBATIM. Never translated, never derived from the other language. */
  email: string;
  /** VERBATIM languages line, per surface. `COMPLIANCE.md` C-07 / C-08 / AP-03.
   *  (`CHANGES-FOR-APPROVAL.md` runs its own `AP-04`…`AP-06`; always namespace
   *  an `AP-` citation to the document it belongs to.) Do not harmonise. */
  languages: BySurface<string>;
  /** Headshot. One file, shared by both language trees — a photograph carries no language. */
  image: ImageMetadata;
  /**
   * Alt text, per language. NEW COPY (NC-07) — the live pages have none usable:
   * all four profile-page photos carry NO `alt` attribute at all (N-12), and the
   * FR team page's alt is truncated mid-title with a space before the comma
   * (`…gestion de patrimoin , membre de l'équipe expert.`, F-01).
   *
   * Written to assert NOTHING beyond name and title (P-9): no headcount, no
   * "member of the team of experts", no regulated status, no credential. There
   * is no group photograph anywhere on this site, so nothing may be called
   * "the team".
   */
  imageAlt: string;
  /** Live profile-page `<title>` and `meta[name=description]`, VERBATIM (F-12/F-13 sic). */
  seo: { title: string; description: string };
}

/**
 * The two registered advisors, in the order the live team page lists them.
 *
 * Nothing below is inferred. Every string is character-for-character from the
 * capture named in the comment above it.
 */
export const advisorsByLocale: Record<Locale, Advisor[]> = {
  fr: [
    {
      slug: 'laurent-achard',
      name: 'Laurent Achard',
      title: {
        // fr-notre-equipe H4 — TRAILING U+00A0, in the capture. C-01.
        team: 'Conseiller en gestion de patrimoine ',
        // fr-laurent-achard H3 — no NBSP.
        profile: 'Conseiller en gestion de patrimoine',
      },
      bio: { team: [], profile: [] },
      phone: {
        display: { team: '514 395-1937', profile: '514 395-1937' },
        href: 'tel:+15143951937',
      },
      email: 'laurent.achard@bnc.ca',
      languages: {
        // Three different assertions about this man's languages exist across the
        // site; these two are the French tree's. C-07. Do not harmonise.
        team: 'Français, anglais, italien',
        profile: 'Français, Anglais, Italien',
      },
      image: photoLaurentAchard,
      imageAlt: 'Laurent Achard, Conseiller en gestion de patrimoine',
      seo: {
        // Space before the comma is in the live markup (F-12, PENDING). It comes
        // from the profile `<h1>Laurent Achard </h1>` trailing space.
        title: 'Laurent Achard , Conseiller en gestion de patrimoine',
        description:
          'Laurent Achard , Conseiller en gestion de patrimoine à la Financière Banque Nationale. Découvrez une gamme complète de solutions pour planifier vos projets et gérer votre patrimoine.',
      },
    },
    {
      slug: 'david-alexandre-wolf',
      // NO HYPHEN. D-09.
      name: 'David Alexandre Wolf',
      title: {
        // fr-notre-equipe H4 — TRAILING U+00A0. C-02.
        team: 'Conseiller en gestion de patrimoine ',
        // fr-david-alexandre-wolf H3. The live element has a trailing PLAIN
        // space, which HTML collapses; it survives in `seo.title` below, where
        // it is observable as a doubled space (F-13).
        profile: 'Conseiller en gestion de patrimoine',
      },
      bio: { team: [], profile: [] },
      phone: {
        display: { team: '514 412-0370', profile: '514 412-0370' },
        href: 'tel:+15144120370',
      },
      email: 'davidalexandre.wolf@bnc.ca',
      languages: {
        // C-08. The two French surfaces disagree on the ORDER; both ship.
        team: 'Français, anglais',
        profile: 'Anglais, Français',
      },
      image: photoDavidAlexandreWolf,
      imageAlt: 'David Alexandre Wolf, Conseiller en gestion de patrimoine',
      seo: {
        // DOUBLED SPACE before the pipe, in the live markup (F-13, PENDING).
        title: 'David Alexandre Wolf, Conseiller en gestion de patrimoine ',
        description:
          'David Alexandre Wolf, Conseiller en gestion de patrimoine  à la Financière Banque Nationale. Découvrez une gamme complète de solutions pour planifier vos projets et gérer votre patrimoine.',
      },
    },
  ],

  en: [
    {
      slug: 'laurent-achard',
      name: 'Laurent Achard',
      title: {
        // en-our-team H4. No NBSP in English — the trailing U+00A0 is French-only.
        team: 'Wealth Advisor',
        // en-laurent-achard H3.
        profile: 'Wealth Advisor',
      },
      bio: { team: [], profile: [] },
      phone: {
        display: { team: '514-395-1937', profile: '514-395-1937' },
        href: 'tel:+15143951937',
      },
      email: 'laurent.achard@nbc.ca',
      languages: {
        // ⚠ C-07: the English team page asserts `English` ONLY while his English
        // profile page asserts `French, English, Italian` — a self-contradiction
        // inside one language tree. Both ship verbatim. Do not harmonise.
        team: 'English',
        profile: 'French, English, Italian',
      },
      image: photoLaurentAchard,
      imageAlt: 'Laurent Achard, Wealth Advisor',
      seo: {
        // Space before the comma, live (F-12, PENDING).
        title: 'Laurent Achard , Wealth Advisor',
        description:
          'Laurent Achard , Wealth Advisor at National Bank Financial. Discover a complete range of solutions to plan your projects and manage your assets.',
      },
    },
    {
      slug: 'david-alexandre-wolf',
      name: 'David Alexandre Wolf',
      title: { team: 'Wealth Advisor', profile: 'Wealth Advisor' },
      bio: { team: [], profile: [] },
      phone: {
        display: { team: '514-412-0370', profile: '514-412-0370' },
        href: 'tel:+15144120370',
      },
      email: 'davidalexandre.wolf@nbc.ca',
      languages: {
        // C-08. Same shape as C-07: bare `English` on the team page, two
        // languages on the profile page.
        team: 'English',
        profile: 'English, French',
      },
      image: photoDavidAlexandreWolf,
      imageAlt: 'David Alexandre Wolf, Wealth Advisor',
      seo: {
        // No doubled space in English — F-13 is a French-only defect.
        title: 'David Alexandre Wolf, Wealth Advisor',
        description:
          'David Alexandre Wolf, Wealth Advisor at National Bank Financial. Discover a complete range of solutions to plan your projects and manage your assets.',
      },
    },
  ],
};

/* ------------------------------------------------------- integrity gate --
 * BUILD-TIME ASSERTIONS. This module renders a licensed advisor's phone number,
 * email address and regulated title beside his photograph on four pages. The
 * failure mode nobody notices in review is a SILENT MIS-PAIRING — Wolf's number
 * under Achard's photo — which on a regulated site is worse than a broken page.
 *
 * Nothing here pairs by array position: every field is a property of the advisor
 * object it belongs to, so a reorder cannot cross-wire anyone. These checks
 * defend the invariants that structure alone cannot:
 *
 *   · the two language trees describe THE SAME two people, in the same order
 *   · every slug is the hyphenated form and every display name is not
 *   · no scaffold placeholder sentinel survives into a shipped identity string
 *   · every advisor has a phone, an email and a title on BOTH surfaces
 *
 * A violation throws during `astro build`, so the site cannot ship wrong. */
const SENTINEL = `[[${'TODO'}-ARCHIVE]]`;

const EXPECTED: { slug: string; name: string }[] = [
  { slug: 'laurent-achard', name: 'Laurent Achard' },
  // D-09: NO hyphen in the display name, in either language. Only the slug.
  { slug: 'david-alexandre-wolf', name: 'David Alexandre Wolf' },
];

for (const locale of ['fr', 'en'] as const) {
  const list = advisorsByLocale[locale];

  if (list.length !== EXPECTED.length) {
    throw new Error(
      `advisors.ts: ${locale} declares ${list.length} advisors, expected ${EXPECTED.length}. ` +
        `Adding or removing a registered advisor is a client/NBF decision, not a data edit.`,
    );
  }

  list.forEach((advisor, index) => {
    const expected = EXPECTED[index]!;
    const where = `advisors.ts[${locale}][${index}]`;

    if (advisor.slug !== expected.slug || advisor.name !== expected.name) {
      throw new Error(
        `${where}: expected ${expected.name} / ${expected.slug}, got ` +
          `${advisor.name} / ${advisor.slug}. The two language trees must list the ` +
          `same people in the same order — the team page and both profile pages read ` +
          `this array, and a mismatch puts one advisor's contact details under another's photo.`,
      );
    }

    // Display name vs URL slug must stay distinct (D-09).
    if (advisor.name.includes('-')) {
      throw new Error(`${where}: display name must not be hyphenated — got "${advisor.name}" (D-09).`);
    }

    const identity: [string, string][] = [
      ['name', advisor.name],
      ['title.team', advisor.title.team],
      ['title.profile', advisor.title.profile],
      ['phone.display.team', advisor.phone.display.team],
      ['phone.display.profile', advisor.phone.display.profile],
      ['phone.href', advisor.phone.href],
      ['email', advisor.email],
      ['languages.team', advisor.languages.team],
      ['languages.profile', advisor.languages.profile],
      ['imageAlt', advisor.imageAlt],
      ['seo.title', advisor.seo.title],
      ['seo.description', advisor.seo.description],
    ];

    for (const [field, value] of identity) {
      if (!value.trim()) throw new Error(`${where}.${field} is empty.`);
      // Assembled rather than written out, so `rg` for the sentinel over src/
      // reports only real unfilled data — never this guard.
      if (value.includes(SENTINEL)) {
        throw new Error(`${where}.${field} still carries the ${SENTINEL} scaffold sentinel.`);
      }
    }

    // LANGUAGE PURITY (P-4): an address is never translated, and there are no
    // per-person exceptions on this site — measured clean in both directions.
    const domain = locale === 'fr' ? '@bnc.ca' : '@nbc.ca';
    const wrong = locale === 'fr' ? '@nbc.ca' : '@bnc.ca';
    if (!advisor.email.endsWith(domain) || advisor.email.includes(wrong)) {
      throw new Error(`${where}.email "${advisor.email}" is not a ${domain} address (P-4).`);
    }
  });
}

/**
 * Display name. Credentials are NOT appended — neither advisor displays one
 * anywhere on the live site, and P-8 forbids adding any NBF's records may hold.
 */
export function displayName(advisor: Advisor): string {
  return advisor.name;
}

/** The biography for a given surface. Returns [] when there is none — which, on
 *  this site, is every advisor on every surface. */
export function bioFor(advisor: Advisor, surface: 'team' | 'profile'): string[] {
  return advisor.bio[surface];
}

export function advisorBySlug(slug: string, locale: Locale): Advisor | undefined {
  return advisorsByLocale[locale].find((advisor) => advisor.slug === slug);
}
