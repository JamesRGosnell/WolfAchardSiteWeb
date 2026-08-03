#!/usr/bin/env node
/**
 * verbatim-sweep — does every client-facing string we ship actually appear,
 * character-for-character, in the raw capture of the live site?
 *
 * WHY. On a regulated rebuild the copy is compliance-approved and must survive
 * the move byte-for-byte. Eyeballing does not scale to hundreds of strings, and
 * the failure mode is silent: a stray space, a straightened apostrophe, a
 * dropped colon, a non-breaking space collapsed to an ordinary one. This script
 * makes "we verified it" a number you can put in a report.
 *
 * It reads the RAW HTML capture, never the content inventory — the inventory is
 * a transcription and normalises characters the live markup genuinely mixes.
 *
 * USAGE
 *   node scripts/verbatim-sweep.mjs \
 *     --data src/data/pages/home.fr.ts \
 *     --capture source-assets/html/fr-accueil.html
 *
 *   # several captures (home strings can live across the home + shared pages)
 *   node scripts/verbatim-sweep.mjs --data src/data/pages/home.fr.ts \
 *     --capture source-assets/html/fr-accueil.html \
 *     --capture source-assets/html/fr-notre-equipe.html
 *
 *   # options
 *   --min 30        only check strings of at least N characters (default 30)
 *   --all           also check short strings (names, titles, phones, emails)
 *   --loose-space   fold NBSP (U+00A0) and narrow NBSP (U+202F) to plain spaces
 *   --json          machine-readable output
 *
 * ON --loose-space. Default is STRICT, and that is deliberate: the live markup
 * peppers French copy and figures with non-breaking spaces (`En vous offrant`,
 * `31 243`), and a build that silently replaces them has altered a registered
 * string at character level — on the reference project the audit found the build
 * had stripped essentially every NBSP in the captures. Run strict first and read
 * the misses. Only pass --loose-space once the register explicitly says NBSPs
 * ship as ordinary spaces, so the flag documents a decision instead of hiding one.
 *
 * EXIT CODES  0 = every string accounted for · 1 = unmatched strings remain
 *
 * Unmatched is NOT automatically a failure. Intended new microcopy — eyebrows,
 * alt text, registered fixes — will not match by design. The rule is that every
 * miss must be *accounted for by name* in your report and carry a row in
 * CHANGES-FOR-APPROVAL.md. This script tells you the list; you explain it.
 */
import fs from 'node:fs';
import process from 'node:process';

/* ------------------------------------------------------------------ args -- */

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(`--${name}`);
const many = (name) =>
  argv.reduce((acc, a, i) => (a === `--${name}` && argv[i + 1] ? [...acc, argv[i + 1]] : acc), []);
const one = (name, fallback) => many(name)[0] ?? fallback;

const dataFiles = many('data');
const captureFiles = many('capture');
const MIN = flag('all') ? 1 : Number(one('min', 30));
const JSON_OUT = flag('json');

if (!dataFiles.length || !captureFiles.length) {
  console.error('usage: verbatim-sweep.mjs --data <file.ts> --capture <file.html> [--capture …]');
  console.error('       [--min N] [--all] [--json]');
  process.exit(64);
}

/* ------------------------------------------------------------- haystacks -- */

const ENTITIES = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&rsquo;': '’',
  '&lsquo;': '‘',
  '&ldquo;': '“',
  '&rdquo;': '”',
  '&eacute;': 'é',
  '&egrave;': 'è',
  '&agrave;': 'à',
  '&ccedil;': 'ç',
  '&ocirc;': 'ô',
  '&ecirc;': 'ê',
  '&icirc;': 'î',
  '&ugrave;': 'ù',
  '&hellip;': '…',
  '&mdash;': '—',
  '&ndash;': '–',
};

const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&[a-z]+;/gi, (m) => ENTITIES[m.toLowerCase()] ?? m);

/**
 * Whitespace-collapsed, entity-decoded. NBSP (U+00A0) and narrow NBSP (U+202F)
 * are deliberately NOT folded into ordinary spaces here — if the build strips
 * them, that is a real character-level change to a registered figure and this
 * sweep should catch it. Run with --loose-space if your register says otherwise.
 */
const LOOSE_SPACE = flag('loose-space');
const collapse = (s) => {
  let t = decode(s);
  if (LOOSE_SPACE) t = t.replace(/[  ]/g, ' ');
  return t.replace(/[ \t\r\n]+/g, ' ').trim();
};

function haystacks(files) {
  let text = '';
  let attrs = '';
  for (const f of files) {
    const html = fs.readFileSync(f, 'utf8');
    // Text nodes: drop script/style wholesale, then all tags.
    const body = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ');
    text += ' ' + collapse(body.replace(/<[^>]+>/g, ' '));
    // Attribute values, so meta descriptions / alt / title / aria-label
    // are checkable too — the tag stripper above removes them.
    for (const m of body.matchAll(/(?:content|alt|title|aria-label|href|src)="([^"]*)"/gi)) {
      attrs += ' ' + collapse(m[1]);
    }
  }
  return { text, attrs };
}

/* ----------------------------------------------------------- needle set -- */

/**
 * Every string literal in the module, found by scanning rather than by regex.
 *
 * Regex cannot do this job: French copy is full of apostrophes, so a `'…'`
 * pattern happily matches from an apostrophe inside one double-quoted string to
 * an apostrophe inside the next, producing garbage "strings" spanning real code.
 * The scanner tracks quote state, so an apostrophe inside "…" is just a
 * character.
 *
 * Comments are skipped in the same pass — live strings are routinely quoted in
 * explanatory comments and must not count as shipped copy. Template literals
 * are taken only when they carry no `${}`; an interpolated URL belongs to the
 * link check, not this one.
 */
function scanStringLiterals(src) {
  const out = [];
  const n = src.length;
  let i = 0;

  while (i < n) {
    const c = src[i];

    // comments
    if (c === '/' && src[i + 1] === '/') {
      while (i < n && src[i] !== '\n') i++;
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < n && !(src[i] === '*' && src[i + 1] === '/')) i++;
      i += 2;
      continue;
    }

    // string literals
    if (c === "'" || c === '"' || c === '`') {
      const quote = c;
      let j = i + 1;
      let buf = '';
      let interpolated = false;
      let closed = false;

      while (j < n) {
        const d = src[j];
        if (d === '\\') {
          buf += d + (src[j + 1] ?? '');
          j += 2;
          continue;
        }
        if (d === quote) {
          closed = true;
          break;
        }
        // An unescaped newline ends a single/double-quoted literal in JS —
        // if we hit one we mis-parsed, so drop this candidate.
        if (quote !== '`' && d === '\n') break;
        if (quote === '`' && d === '$' && src[j + 1] === '{') interpolated = true;
        buf += d;
        j++;
      }

      if (closed && !interpolated) out.push(buf);
      i = (closed ? j : i) + 1;
      continue;
    }

    i++;
  }

  return out;
}

function literals(file) {
  const unescape = (s) =>
    s.replace(/\\n/g, '\n').replace(/\\t/g, ' ').replace(/\\(['"`\\])/g, '$1');

  return [...new Set(scanStringLiterals(fs.readFileSync(file, 'utf8')))]
    .map((s) => collapse(unescape(s)))
    .filter((s) => s.length >= MIN)
    // Not client copy: import paths, bare URLs, css selectors, lone tokens.
    .filter((s) => !/^[./]|^https?:\/\/|^[#.][\w-]+$/.test(s))
    .filter((s) => /\s/.test(s) || MIN === 1);
}

/* ------------------------------------------------------------------ run -- */

const { text, attrs } = haystacks(captureFiles);
const rows = [];

for (const file of dataFiles) {
  for (const s of literals(file)) {
    const where = text.includes(s) ? 'text' : attrs.includes(s) ? 'attribute' : null;
    rows.push({ file, string: s, matched: Boolean(where), where });
  }
}

const matched = rows.filter((r) => r.matched);
const missed = rows.filter((r) => !r.matched);

if (JSON_OUT) {
  console.log(JSON.stringify({ total: rows.length, matched: matched.length, missed }, null, 2));
} else {
  console.log('verbatim sweep');
  console.log('='.repeat(64));
  console.log(`data     : ${dataFiles.join(', ')}`);
  console.log(`capture  : ${captureFiles.join(', ')}`);
  console.log(`min chars: ${MIN}${LOOSE_SPACE ? '  (NBSP folded)' : ''}`);
  console.log();
  console.log(`${matched.length}/${rows.length} matched character-for-character`);
  const inAttr = matched.filter((r) => r.where === 'attribute').length;
  if (inAttr) console.log(`  (${inAttr} of them matched inside an HTML attribute)`);

  if (missed.length) {
    console.log();
    console.log(`${missed.length} unmatched — account for EVERY one of these:`);
    for (const r of missed) {
      const s = r.string.length > 96 ? r.string.slice(0, 96) + '…' : r.string;
      console.log(`  · ${s}`);
    }
    console.log();
    console.log('Each miss must be either intended new copy (⇒ NC- row),');
    console.log('a registered editorial fix (⇒ F- row), or a real transcription bug.');
  }
  console.log();
  console.log('='.repeat(64));
  console.log(missed.length ? 'UNMATCHED STRINGS PRESENT' : 'All strings verbatim.');
}

process.exit(missed.length ? 1 : 0);
