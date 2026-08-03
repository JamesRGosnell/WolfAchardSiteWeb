// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Delete emitted `_astro/` assets that nothing in the built output references.
 *
 * WHY THIS EXISTS. Every image is imported as an ESM module and rendered through
 * `<Picture>`, which emits WebP variants at each breakpoint — and Astro ALSO
 * emits the untouched source-format original (the `.png` / `.jpg` the module
 * resolves to), because the import itself produces an asset. Nothing links to
 * those originals: the `<picture>` fallback is a WebP too. They were **3,319 KB
 * across 20 files — 40% of `dist/`** — shipped to every visitor's CDN and to
 * nobody's browser.
 *
 * THE SAFETY RULE, and why it is safe HERE specifically: a file is deleted only
 * if its exact hashed basename appears in NO emitted `.html`, `.css`, `.js`,
 * `.xml` or `.txt`. That would be unsafe on a site that builds asset URLs at
 * runtime — this one cannot: it ships one client script, makes zero third-party
 * requests, and constructs no `src` anywhere (verified). If a future change adds
 * a runtime-constructed asset path, THIS HOOK MUST GO, because a string the
 * scanner cannot see is a file it will delete.
 *
 * It runs after `astro:build:done`, so it can never affect what the pages
 * reference — only what is left on disk beside them.
 */
function pruneUnreferencedAssets() {
  return {
    name: 'prune-unreferenced-assets',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = path.normalize(dir.pathname.replace(/^\/([A-Za-z]:)/, '$1'));
        const walk = (d, o = []) => {
          for (const e of fs.readdirSync(d, { withFileTypes: true })) {
            const p = path.join(d, e.name);
            e.isDirectory() ? walk(p, o) : o.push(p);
          }
          return o;
        };
        if (!fs.existsSync(root)) return;
        const files = walk(root);
        let haystack = '';
        for (const f of files) if (/\.(html|css|js|mjs|xml|txt|json)$/.test(f)) haystack += fs.readFileSync(f, 'utf8');
        let freed = 0, n = 0;
        for (const f of files) {
          if (!/[\\/]_astro[\\/]/.test(f)) continue;
          if (/\.(css|js|mjs)$/.test(f)) continue; // never touch code chunks
          if (haystack.includes(path.basename(f))) continue;
          freed += fs.statSync(f).size;
          fs.unlinkSync(f);
          n++;
        }
        if (n) logger.info(`pruned ${n} unreferenced asset(s), ${(freed / 1024).toFixed(0)} KB`);
      },
    },
  };
}

/**
 * Canonical production origin. PLACEHOLDER until the client confirms a domain —
 * change it here only; every canonical, OG, hreflang and sitemap URL derives
 * from this one constant.
 *
 * ASTRO_SITE / ASTRO_BASE are read from the environment so a demo deploy can
 * serve the site from a subpath without touching source. Local dev and the
 * eventual production build use the defaults below.
 */
export const SITE_URL = process.env.ASTRO_SITE ?? 'https://groupewolfachard.ca';
const BASE = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  output: 'static',
  // HTML-aware whitespace handling. Regulated copy carries no-break spaces and
  // inline footnote markers that must not be re-flowed by the compiler.
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // NOTE: 'auto' re-inlines shared chrome CSS into every page. That is fine
    // while the site is small; extract to a real stylesheet once the page set
    // stabilises (see build-playbook.md, "Astro gotchas").
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      // hreflang alternates are emitted per page from src/lib/i18n.ts routeMap.
      // The integration's own i18n option cannot express the asymmetric FR/EN
      // slugs (/equipe/ <-> /en/team/), so it is deliberately left off here.
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
    }),
    pruneUnreferencedAssets(),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          /**
           * NEUTRAL CSS CHUNK NAMES — a language-purity requirement, not a
           * cosmetic one.
           *
           * Rollup names an extracted CSS asset after the chunk that owns it,
           * and Astro's shared page-CSS chunks take their name from the first
           * module they happen to contain — which is usually an IMAGE. That
           * produced `photo-david-alexandre-groupe-wolf-achard-mtl-350x330
           * .<hash>.css` on `/en/contact/` (a French-slugged filename on an
           * English page) and `img-teaser-guides-tools.<hash>.css` on `/`
           * (an English-slugged one on a French page). Both are bundler
           * artefacts with no cross-language content, but COMPLIANCE §7 check
           * 28 greps `dist/` for exactly this shape, and a check that has to
           * carry a list of known-benign filenames is a check nobody trusts.
           *
           * So CSS chunks are named `styles.<hash>.css` and the grep stays
           * strict. This does NOT weaken it: Vite still dedupes byte-identical
           * IMAGES across languages, which is a real leak class — the French
           * home page did serve an `-en` asset earlier in this build — and
           * every non-CSS asset keeps its source-derived name so the grep can
           * still catch it.
           */
          assetFileNames(assetInfo) {
            const name = assetInfo.names?.[0] ?? assetInfo.name ?? '';
            return name.endsWith('.css')
              ? '_astro/styles.[hash][extname]'
              : '_astro/[name].[hash][extname]';
          },
        },
      },
    },
  },
  image: {
    // Warm, print-like treatment is applied in CSS; sharp handles format and
    // size only.
    responsiveStyles: true,
  },
});
