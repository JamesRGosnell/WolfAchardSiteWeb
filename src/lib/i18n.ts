import type { Locale, PageKey, SiteStrings } from '../data/types';
import fr from '../data/fr';
import en from '../data/en';

export type { Locale, PageKey, SiteStrings };

export const locales = ['fr', 'en'] as const satisfies readonly Locale[];
export const defaultLocale: Locale = 'fr';

/** <html lang> value per locale. */
export const htmlLang: Record<Locale, string> = { fr: 'fr-CA', en: 'en-CA' };

const dictionaries: Record<Locale, SiteStrings> = { fr, en };

/**
 * Accessor for the site-wide strings of a locale.
 *   const s = t(locale);  s.nav.items…
 */
export function t(locale: Locale): SiteStrings {
  return dictionaries[locale];
}

/**
 * THE SINGLE SOURCE OF TRUTH FOR ROUTING.
 *
 * French at the root, English under /en/. Every page exists exactly once per
 * language; the pair is what powers the language toggle, the hreflang
 * alternates and the "active nav item" test. Trailing slashes are mandatory
 * (astro.config trailingSlash: 'always').
 *
 * These are NOT the live site's slugs. The live tree is
 * `/conseiller/groupe-wolf-achard/<page>.html` and its English twin
 * `/advisor/wolf-archard-group/<page>.html`; the rebuild moves to a clean
 * root-level bilingual structure. Two consequences worth naming:
 *
 *  · The FR contact page is `nous-joindre.html` live and `/contact/` here, and
 *    the EN one is `contact-us.html` live and `/en/contact/`. That is a
 *    deliberate URL change, not a transcription error — it needs a register
 *    row, and redirects if the live URLs are ever pointed at this build.
 *  · The English slug is NOT a translation of the French one. Live, the pair is
 *    `groupe-wolf-achard` / `wolf-archard-**g**roup` — different spelling.
 *    Never derive one language's path from the other's; read this map.
 *
 * There are NO French-only pages on this microsite (verified by recon:
 * `frOnlyPages: []`), so the routing layer carries no FR-only plumbing. If one
 * is ever found, it must get a path here WITHOUT an English stub, an EN nav
 * entry or an hreflang alternate — and a language toggle pointing at the
 * nearest approved English page, which is navigation, not an hreflang pair.
 */
export const routeMap: Record<PageKey, Record<Locale, string>> = {
  home: { fr: '/', en: '/en/' },
  team: { fr: '/equipe/', en: '/en/team/' },
  services: { fr: '/services/', en: '/en/services/' },
  news: { fr: '/nouvelles/', en: '/en/news/' },
  firm: { fr: '/notre-firme/', en: '/en/our-firm/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
};

export const pageKeys = Object.keys(routeMap) as PageKey[];

/**
 * Per-advisor profile pages hang off the team page in both languages. They are
 * a genuine FR<->EN pair with no `PageKey`, so they build their hreflang set
 * with `alternatesForPair` rather than `alternatesFor`.
 */
export function advisorPath(slug: string, locale: Locale): string {
  return `${routeMap.team[locale]}${slug}/`;
}

/** Path of a page in a given language. */
export function pathFor(key: PageKey, locale: Locale): string {
  return routeMap[key][locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}

/** Path of the same page in the other language — used by the header toggle. */
export function switchPathFor(key: PageKey, locale: Locale): string {
  return routeMap[key][otherLocale(locale)];
}

/** Normalise any incoming pathname to the "/foo/" form used in routeMap. */
export function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  let p = pathname.split('?')[0]!.split('#')[0]!;
  if (!p.startsWith('/')) p = `/${p}`;
  if (!p.endsWith('/')) p = `${p}/`;
  return p.replace(/\/{2,}/g, '/');
}

/** Infers the locale from a URL path — everything under /en/ is English. */
export function localeFromPath(pathname: string): Locale {
  const p = normalizePath(pathname);
  return p === '/en/' || p.startsWith('/en/') ? 'en' : 'fr';
}

/** Reverse lookup: which page is this path? `null` for 404 and one-offs. */
export function pageKeyFromPath(pathname: string): PageKey | null {
  const p = normalizePath(pathname);
  for (const key of pageKeys) {
    if (routeMap[key].fr === p || routeMap[key].en === p) return key;
  }
  return null;
}

export interface Alternate {
  locale: Locale;
  hreflang: string;
  path: string;
}

/**
 * hreflang set for a page: fr-CA, en-CA and x-default (French — the site's
 * default locale and the language of the root).
 */
export function alternatesFor(key: PageKey): Alternate[] {
  return [
    { locale: 'fr', hreflang: htmlLang.fr, path: routeMap[key].fr },
    { locale: 'en', hreflang: htmlLang.en, path: routeMap[key].en },
    { locale: defaultLocale, hreflang: 'x-default', path: routeMap[key][defaultLocale] },
  ];
}

/**
 * hreflang set for a genuine FR<->EN pair that lives outside `routeMap` — the
 * per-advisor profile pages, whose paths are built from a slug rather than a
 * `PageKey`. Same shape and same x-default rule as `alternatesFor`; it exists
 * so a real pair is never forced to ship with NO alternates just because it is
 * a dynamic route.
 *
 * It must NEVER be used to fabricate a counterpart that does not exist. That is
 * what `pageKey={null}` with no `alternates` prop is for.
 */
export function alternatesForPair(frPath: string, enPath: string): Alternate[] {
  const byLocale: Record<Locale, string> = { fr: frPath, en: enPath };
  return [
    { locale: 'fr', hreflang: htmlLang.fr, path: frPath },
    { locale: 'en', hreflang: htmlLang.en, path: enPath },
    { locale: defaultLocale, hreflang: 'x-default', path: byLocale[defaultLocale] },
  ];
}

/** Absolute URL from a site-root path, for canonical / OG / hreflang tags. */
export function absoluteUrl(path: string, site: URL | string): string {
  const origin = typeof site === 'string' ? site : site.href;
  return new URL(path, origin).href;
}

/**
 * Active-state test for navigation. The home page must match exactly; every
 * other page also matches its sub-pages, so an advisor profile keeps "Notre
 * équipe" lit.
 */
export function isActivePath(currentPath: string, targetPath: string): boolean {
  const current = normalizePath(currentPath);
  const target = normalizePath(targetPath);
  if (target === '/' || target === '/en/') return current === target;
  return current === target || current.startsWith(target);
}

/** Home path for a locale. */
export function homePath(locale: Locale): string {
  return routeMap.home[locale];
}
