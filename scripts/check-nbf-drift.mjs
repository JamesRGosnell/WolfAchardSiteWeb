#!/usr/bin/env node
/**
 * check-nbf-drift — does our frozen copy of National Bank's content still match
 * what NBF is publishing today?
 *
 * ── TEMPLATE. Fill the CONFIG block, drop into scripts/, add to package.json:
 *      "check:nbf": "node scripts/check-nbf-drift.mjs"
 *
 * WHY. The News page is not the client's content. Every advisor microsite
 * renders it from a central AEM Experience Fragment that NBF edits on its own
 * schedule — three link swaps landed within six days of capture on the reference
 * project. The advisor profile pages are the same story: they render from NBF's
 * structured advisor records, so names, titles, phones, emails and biographies
 * can all move without anyone telling us. A static rebuild freezes all of that.
 * This script is the replacement for the updating the advisor loses at launch.
 *
 * WHAT IT READS. Only ordinary public page URLs, the same ones a visitor loads.
 * It deliberately does NOT fetch `/content/experience-fragments/…` or any
 * `.model.json` under `/content/`, because fbngp.ca's robots.txt carries
 * `Disallow: /content/*`. The rendered pages carry the same information and are
 * explicitly allowed.
 *
 * SCOPE. It reports; it never edits. Anything it flags goes through
 * CHANGES-FOR-APPROVAL.md like every other deviation.
 *
 * USAGE   npm run check:nbf  ·  npm run check:nbf -- --json
 * EXIT    0 = in sync · 1 = drift found · 2 = could not reach NBF
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* ---------------------------------------------------------------- CONFIG -- */

const TEAM_SLUG_FR = 'groupe-wolf-achard';   // fbngp.ca/conseiller/<slug>.html
// NOTE: 'Archard' (two Rs) is NBF's own misspelling of this team's name.
// The logo artwork reads 'Wolf Achard Group'. Do not 'correct' this slug —
// it is the live URL. See CHANGES-FOR-APPROVAL.md.
const TEAM_SLUG_EN = 'wolf-archard-group';     // nbfwm.ca/advisor/<slug>.html
const ADVISOR_SLUGS = ['laurent-achard', 'david-alexandre-wolf'];

const FR_HOST = 'https://www.fbngp.ca';
const EN_HOST = 'https://www.nbfwm.ca';
const FR_BASE = `${FR_HOST}/conseiller/${TEAM_SLUG_FR}`;
const EN_BASE = `${EN_HOST}/advisor/${TEAM_SLUG_EN}`;

const NEWS = {
  fr: { url: `${FR_BASE}/nouvelles-articles.html`, data: 'src/data/pages/news.fr.ts' },
  en: { url: `${EN_BASE}/news-articles.html`, data: 'src/data/pages/news.en.ts' },
};

const PROFILES = {
  fr: { base: `${FR_BASE}/notre-equipe`, slugs: ADVISOR_SLUGS },
  en: { base: `${EN_BASE}/our-team`, slugs: ADVISOR_SLUGS },
};

const ADVISOR_DATA = 'src/data/advisors.ts';

/**
 * Places where the build deliberately differs from NBF, each carrying a row in
 * CHANGES-FOR-APPROVAL.md. Without this, a daily job fails forever on a
 * difference we chose on purpose — and a check that always fails is a check
 * nobody reads.
 *
 * Keep this list SHORT and each entry SPECIFIC. It is not a mute button: an
 * entry means "a client decision put this here, and the register explains it".
 * Anything not listed is real drift and must surface.
 */
const ACCEPTED = [
  // {
  //   ref: 'C-44',
  //   why: "client chose `plus de 25 ans`; NBF's record still says `25 ans`",
  //   match: (text) => /<a distinctive regex for the one sentence>/.test(text),
  // },
];

/* ------------------------------------------------------------------ util -- */

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JSON_OUT = process.argv.includes('--json');
const TIMEOUT_MS = 30_000;

async function get(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'user-agent': 'nbf-drift-check/1.0 (+build-time content check)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

const stripTags = (s) => s.replace(/<[^>]+>/g, '');
const collapse = (s) => stripTags(s).replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const norm = (u) => u.replace(/^https?:\/\/(www\.)?/, 'https://');

/** Is this one of the publications the page exists to distribute? */
const isPublication = (u) =>
  /\.pdf(\?|$)/i.test(u) ||
  /(nbc|bnc)\.ca\/(fr|en|particuliers|personal)\//i.test(u) ||
  /(nbc|bnc)\.ca\/a-propos-de-nous\/nouvelles-medias\/actualite-economique/i.test(u) ||
  /(nbc|bnc)\.ca\/about-us\/news-media\/financial-news/i.test(u) ||
  /youtube(-nocookie)?\.com|youtu\.be/i.test(u);

/**
 * Publication links a visitor can actually click. Scoped to <main>: the header
 * and footer carry accessibility, news-room and corporate links on every page of
 * the bank's site, and they are chrome, not this page's content.
 */
function contentLinks(html, host) {
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [html])[0];
  const out = new Set();
  const add = (raw) => {
    let u = raw;
    if (u.startsWith('//')) u = 'https:' + u;
    if (u.startsWith('/')) u = host + u;
    if (!/^https?:/i.test(u)) return;
    if (isPublication(u)) out.add(norm(u));
  };
  for (const m of main.matchAll(/href="([^"]+)"/g)) add(m[1]);
  // The videos are <iframe src>, not links — the live page embeds them.
  for (const m of main.matchAll(/<iframe[^>]+src="([^"]+)"/gi)) add(m[1]);
  return out;
}

/**
 * URLs our build ships. Data modules compose URLs from host constants
 * (`const FBNGP = 'https://www.fbngp.ca'` … `${FBNGP}/content/dam/…`), so the
 * constants are resolved first — otherwise every templated URL reads as missing.
 */
function builtLinks(dataFile) {
  const src = fs.readFileSync(path.join(ROOT, dataFile), 'utf8');

  const consts = {};
  for (const m of src.matchAll(/const\s+([A-Z][A-Z0-9_]*)\s*=\s*['"](https:\/\/[^'"]+)['"]/g)) {
    consts[m[1]] = m[2];
  }

  const out = new Set();
  for (const m of src.matchAll(/\$\{([A-Z][A-Z0-9_]*)\}([^\s`'"]*)/g)) {
    const base = consts[m[1]];
    if (base && isPublication(base + m[2])) out.add(norm(base + m[2]));
  }
  for (const m of src.matchAll(/['"`](https:\/\/[^\s`'"]+)['"`]/g)) {
    const u = m[1];
    if (Object.values(consts).includes(u)) continue;
    if (isPublication(u)) out.add(norm(u));
  }
  return out;
}

/** youtube.com/watch?v=ID and youtube-nocookie.com/embed/ID are the same video. */
const videoId = (u) => (u.match(/(?:embed\/|v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/) || [])[1] ?? null;

function compareLinks(live, built) {
  const liveVids = new Set([...live].map(videoId).filter(Boolean));
  const builtVids = new Set([...built].map(videoId).filter(Boolean));
  const onlyLive = [...live].filter((u) => {
    const id = videoId(u);
    return id ? !builtVids.has(id) : !built.has(u);
  });
  const onlyBuilt = [...built].filter((u) => {
    const id = videoId(u);
    return id ? !liveVids.has(id) : !live.has(u);
  });
  return { onlyLive: onlyLive.sort(), onlyBuilt: onlyBuilt.sort() };
}

const acceptedFor = (text) => ACCEPTED.find((a) => a.match(text)) ?? null;

function profileFacts(html) {
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [html])[0];
  const bio = [...main.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => collapse(m[1]))
    .filter((p) => p.length > 40);
  const emails = [...new Set(main.match(/[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.ca/g) || [])];
  const title = collapse((html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1]);
  return { bio, emails, title };
}

/* ------------------------------------------------------------------ main -- */

const report = { news: {}, profiles: {}, drift: false, unreachable: [] };

for (const [lang, cfg] of Object.entries(NEWS)) {
  try {
    const html = await get(cfg.url);
    const cmp = compareLinks(contentLinks(html, lang === 'fr' ? FR_HOST : EN_HOST), builtLinks(cfg.data));
    report.news[lang] = cmp;
    if (cmp.onlyLive.length || cmp.onlyBuilt.length) report.drift = true;
  } catch (err) {
    report.unreachable.push(`${cfg.url} — ${err.message}`);
  }
}

const advisorSrc = fs.readFileSync(path.join(ROOT, ADVISOR_DATA), 'utf8');

for (const [lang, cfg] of Object.entries(PROFILES)) {
  report.profiles[lang] = {};
  for (const slug of cfg.slugs) {
    try {
      const facts = profileFacts(await get(`${cfg.base}/${slug}.html`));

      // Probe on the opening of each paragraph: enough to identify the sentence,
      // short enough that a trailing edit elsewhere doesn't false-positive.
      const changed = facts.bio.filter((p) => {
        const probe = p.slice(0, 55).replace(/\s+/g, ' ');
        return probe.length > 30 && !advisorSrc.includes(probe);
      });

      const missingBio = [];
      const accepted = [];
      for (const p of changed) {
        const hit = acceptedFor(p);
        if (hit) accepted.push({ ref: hit.ref, why: hit.why, text: p });
        else missingBio.push(p);
      }

      const missingEmail = facts.emails.filter((e) => !advisorSrc.includes(e));
      report.profiles[lang][slug] = { missingBio, missingEmail, accepted, liveTitle: facts.title };
      if (missingBio.length || missingEmail.length) report.drift = true;
    } catch (err) {
      report.unreachable.push(`${cfg.base}/${slug}.html — ${err.message}`);
    }
  }
}

/* --------------------------------------------------------------- report -- */

if (JSON_OUT) {
  console.log(JSON.stringify(report, null, 2));
} else {
  const line = (s = '') => console.log(s);
  line('NBF content drift check');
  line('='.repeat(60));

  for (const [lang, cmp] of Object.entries(report.news)) {
    line();
    line(`News page (${lang.toUpperCase()})`);
    if (!cmp.onlyLive.length && !cmp.onlyBuilt.length) {
      line('  in sync — every publication link matches NBF');
    }
    for (const u of cmp.onlyLive) line(`  + NBF now links, we do not : ${u}`);
    for (const u of cmp.onlyBuilt) line(`  - we still link, NBF dropped: ${u}`);
  }

  for (const [lang, people] of Object.entries(report.profiles)) {
    line();
    line(`Advisor profiles (${lang.toUpperCase()})`);
    for (const [slug, r] of Object.entries(people)) {
      const notes = (r.accepted ?? []).map((a) => `    accepted divergence (${a.ref}): ${a.why}`);
      if (!r.missingBio.length && !r.missingEmail.length) {
        line(`  ${slug}: in sync`);
        for (const n of notes) line(n);
        continue;
      }
      line(`  ${slug}:`);
      for (const e of r.missingEmail) line(`    email on NBF not in our data: ${e}`);
      for (const p of r.missingBio) line(`    biography text changed at NBF: "${p.slice(0, 90)}…"`);
      for (const n of notes) line(n);
    }
  }

  if (report.unreachable.length) {
    line();
    line('Could not reach:');
    for (const u of report.unreachable) line(`  ${u}`);
  }

  line();
  line('='.repeat(60));
  line(report.drift ? 'DRIFT FOUND — see CHANGES-FOR-APPROVAL.md before changing anything.' : 'No drift.');
  line('Reminder: content changes go through the register. This script never edits.');
}

if (report.unreachable.length && !report.drift) process.exit(2);
process.exit(report.drift ? 1 : 0);
