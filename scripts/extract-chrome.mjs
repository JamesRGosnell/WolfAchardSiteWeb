#!/usr/bin/env node
/**
 * ONE-SHOT CODE GENERATOR — chrome strings, byte-exact.
 *
 * Site chrome (the footer link bars, the regulator badges and their alt text,
 * the legal nav aria-label, the copyright line, the numbered disclaimers) is
 * client-facing regulated text. Retyping it by hand is how U+2019 becomes
 * U+0027 and a no-break space becomes a space.
 *
 * So it is not retyped. This script reads the raw captures in
 * `source-assets/html/` and the platform-standard disclaimer block in the
 * nbc-advisor-site skill, and splices the exact code points into
 * `src/data/fr.ts` / `src/data/en.ts` at the `/* __MARKER__ *​/` sentinels.
 *
 * Run once at scaffold time. After that the data files are ordinary
 * hand-maintained modules; re-running is only useful if the capture is
 * refreshed. Re-running is idempotent ONLY against files that still carry the
 * sentinels, so it refuses to clobber spliced output.
 *
 *   node scripts/extract-chrome.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const HTML = join(ROOT, 'source-assets', 'html');
const COMPLIANCE_TEMPLATE = join(
  process.env.USERPROFILE ?? process.env.HOME ?? '',
  '.claude',
  'skills',
  'nbc-advisor-site',
  'assets',
  'COMPLIANCE.template.md',
);

const HOST = { fr: 'https://www.fbngp.ca', en: 'https://www.nbfwm.ca' };

const decode = (s) =>
  s
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&copy;/g, '©')
    .replace(/&#169;/g, '©')
    .replace(/[ \t\r\n]+/g, ' ')
    .trim();

const abs = (href, locale) => (href.startsWith('/') ? HOST[locale] + href : href);

function footerOf(locale) {
  const file = join(HTML, locale === 'fr' ? 'fr-home.html' : 'en-home.html');
  const html = readFileSync(file, 'utf8');
  const i = html.search(/<footer/i);
  if (i < 0) throw new Error(`no <footer> in ${file}`);
  return html.slice(i);
}

/** Every <nav aria-label="…"> group in the footer, with its links. */
function navGroups(foot, locale) {
  const groups = [];
  const parts = foot.split(/(<nav[^>]*>)/);
  let title = null;
  for (const part of parts) {
    if (/^<nav/.test(part)) {
      const m = part.match(/aria-label="([^"]+)"/);
      title = m ? decode(m[1]) : null;
      continue;
    }
    if (title === null) continue;
    const links = [];
    for (const m of part.matchAll(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
      const label = decode(m[2]);
      if (!label) continue;
      links.push({ label, href: abs(m[1], locale), external: true });
    }
    groups.push({ title, links });
    title = null;
  }
  return groups;
}

function imgAlt(foot, pattern) {
  const m = foot.match(new RegExp(`<img[^>]*${pattern}[^>]*>`, 'i'));
  if (!m) return null;
  const alt = m[0].match(/alt="([^"]*)"/);
  return alt ? decode(alt[1]) : null;
}

function chrome(locale) {
  const foot = footerOf(locale);
  const html = readFileSync(join(HTML, locale === 'fr' ? 'fr-home.html' : 'en-home.html'), 'utf8');
  const groups = navGroups(foot, locale);

  const wanted = locale === 'fr'
    ? ['Liens', 'Liens de']
    : ['Information and contact links', 'Regulatory links'];
  // The two informational groups are the first two; the remaining two are the
  // social row and the regulator/partners row, which are modelled separately.
  const columns = groups.filter((g) => g.links.length > 1).slice(0, 2);

  // The social row's only link is an unlabelled image, so it has zero TEXT
  // links and `navGroups` cannot find it by link label. Match on the raw markup
  // of the <nav> instead.
  const legalNavAria = (() => {
    for (const m of foot.matchAll(/<nav[^>]*aria-label="([^"]+)"[^>]*>([\s\S]*?)<\/nav>/g)) {
      if (/linkedin\.com/.test(m[2])) return decode(m[1]);
    }
    return null;
  })();
  const partners = groups.find((g) => g.links.some((l) => /(ocri|ciro)\.ca/.test(l.href)));

  const linkedinHref = 'https://www.linkedin.com/company/financi-re-banque-nationale/';
  const regulatorHref = locale === 'fr' ? 'https://www.ocri.ca/' : 'https://www.ciro.ca/';
  const fundHref = locale === 'fr' ? 'https://www.fcpi.ca/' : 'https://www.cipf.ca/';
  const advisorReport = (partners?.links ?? []).find((l) => /(rapport-info-conseiller|advisor-report)/.test(l.href));

  const linkedinAlt = imgAlt(foot, 'picto-social-linkedin');
  const regulatorAlt = imgAlt(html, locale === 'fr' ? 'logo-ocri' : 'logo-ciro');
  const fundAlt = imgAlt(html, locale === 'fr' ? 'logo-fcpi' : 'logo-cipf');
  const nbMarkAlt = imgAlt(foot, 'picto-logo-bn');

  const advisorAria = (() => {
    const m = foot.match(/aria-label="([^"]*(?:Info-Conseiller|advisor reports)[^"]*)"/i);
    return m ? decode(m[1]) : undefined;
  })();

  const copyright = (() => {
    const m = foot.match(/(?:©|&copy;|&#169;)[^<]{0,140}/);
    return m ? decode(m[0]) : null;
  })();

  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) ?? [])[1] ?? '');
  const description = decode((html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? '');
  // "Groupe Wolf Achard | Financière Banque Nationale - Gestion de patrimoine"
  const [brandName, titleSuffix] = title.split(' | ').map((s) => s.trim());

  const teamLogoAlt = imgAlt(html, 'logo-(?:cp-groupe-wolf-achard|ia-wolf-achard-group)-L');
  const firmLogoAlt = imgAlt(html, 'logo-cp-(?:fbngp|nbfwm)-L');

  return {
    columns,
    regulatory: {
      // `label` is the short mark name; the badges render as unlabelled image
      // links, so it never appears on screen. The regulatory ASSERTION lives in
      // the alt text, verbatim from the live site — do not embellish it.
      ciro: { label: locale === 'fr' ? 'OCRI' : 'CIRO', href: regulatorHref, external: true },
      ciroLogoAlt: regulatorAlt,
      ciroAdvisorReport: advisorReport
        ? { label: advisorReport.label, href: advisorReport.href, external: true, ariaLabel: advisorAria }
        : null,
      cipf: { label: locale === 'fr' ? 'FCPI' : 'CIPF', href: fundHref, external: true },
      cipfLogoAlt: fundAlt,
      linkedin: { label: 'LinkedIn', href: linkedinHref, external: true, ariaLabel: linkedinAlt },
      nbMarkAlt,
    },
    legal: {
      navAriaLabel: legalNavAria,
      copyright,
    },
    meta: { brandName, titleSuffix, description },
    logoAlt: { team: teamLogoAlt, firm: firmLogoAlt },
  };
}

/** The five platform-standard disclaimers, copied byte-for-byte. */
function legalNotes(locale) {
  if (!existsSync(COMPLIANCE_TEMPLATE)) {
    throw new Error(`COMPLIANCE.template.md not found at ${COMPLIANCE_TEMPLATE}`);
  }
  const md = readFileSync(COMPLIANCE_TEMPLATE, 'utf8');
  const heading = locale === 'fr' ? '**FRANÇAIS**' : '**ENGLISH**';
  const start = md.indexOf(heading);
  if (start < 0) throw new Error(`heading ${heading} not found`);
  const open = md.indexOf('```', start);
  const close = md.indexOf('```', open + 3);
  const block = md.slice(open + 3, close);
  const items = block
    .split('\n')
    .map((line) => line.replace(/^\s*\d+\.\s*/, ''))
    .filter((line) => line.trim().length > 0);
  if (items.length !== 5) throw new Error(`expected 5 disclaimers, got ${items.length}`);
  return items;
}

/* -------------------------------------------------------------------------- */

const lit = (value, indent) => {
  const json = JSON.stringify(value, null, 2);
  return json
    .split('\n')
    .map((line, i) => (i === 0 ? line : ' '.repeat(indent) + line))
    .join('\n');
};

let touched = 0;
for (const locale of ['fr', 'en']) {
  const file = join(ROOT, 'src', 'data', `${locale}.ts`);
  let src = readFileSync(file, 'utf8');
  if (!src.includes('__FOOTER_COLUMNS__')) {
    console.log(`  ${locale}.ts — already spliced, skipping`);
    continue;
  }

  const c = chrome(locale);
  const notes = legalNotes(locale);

  const replacements = {
    __FOOTER_COLUMNS__: [lit(c.columns, 4), 4],
    __REGULATORY__: [lit(c.regulatory, 4), 4],
    __LEGAL_NAV_ARIA__: [JSON.stringify(c.legal.navAriaLabel), 0],
    __COPYRIGHT__: [JSON.stringify(c.legal.copyright), 0],
    __LEGAL_NOTES__: [lit(notes, 4), 4],
    __TITLE_SUFFIX__: [JSON.stringify(c.meta.titleSuffix), 0],
    __DEFAULT_DESCRIPTION__: [JSON.stringify(c.meta.description), 0],
    __BRAND_NAME__: [JSON.stringify(c.meta.brandName), 0],
    __TEAM_LOGO_ALT__: [JSON.stringify(c.logoAlt.team), 0],
    __FIRM_LOGO_ALT__: [JSON.stringify(c.logoAlt.firm), 0],
  };

  for (const [marker, [value]] of Object.entries(replacements)) {
    const token = `/* ${marker} */`;
    if (!src.includes(token)) throw new Error(`${locale}.ts is missing ${token}`);
    // split/join, not a regex: the replacement text contains `$` sequences that
    // String.replace would interpret as capture-group references.
    src = src.split(token).join(value);
  }

  writeFileSync(file, src, 'utf8');
  touched += 1;
  console.log(`  ${locale}.ts — spliced ${notes.length} disclaimers, ${c.columns.length} footer columns`);
}

console.log(touched ? `\nDone. ${touched} file(s) written.` : '\nNothing to do.');
