/**
 * Groupe Wolf Achard — the site's only client script.
 *
 * Zero dependencies, zero frameworks, zero third-party requests. Five jobs:
 *   1. sticky-header state   → hairline appears once the bar detaches
 *   2. mobile menu           → full-screen ink overlay, Esc, focus trap
 *   3. scroll reveals        → IntersectionObserver, once, 60ms stagger
 *   4. legal-note niceties   → deep links + print-safe disclosure
 *   5. sticky contact strip  → accessible desktop disclosure
 *
 * Everything degrades to "visible and usable" if JS never runs: `.reveal` is
 * the only thing that hides content, and it is un-hidden here on the first
 * frame when motion is not wanted.
 */

/** MUST match --breakpoint-nav in global.css and the two @media blocks in
 *  Header.astro. A custom property cannot be read from a media query, so this
 *  is the third copy of one number — change all three together. */
const NAV_BREAKPOINT = '(min-width: 80rem)';
const REVEAL_STAGGER_MS = 60;
const MENU_TRANSITION_MS = 320;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const prefersReducedMotion = () => reducedMotion.matches;

/* -------------------------------------------------------------------------
   1. Sticky header
   Once the page has scrolled at all, the bar is floating over content and has
   earned its bottom hairline and shrunk height.

   A 1px sentinel above the bar CANNOT work here: <header> is what sticks, so a
   sentinel inside it rides along and can only ever report "not scrolled". A
   scroll offset is the honest signal.
   ---------------------------------------------------------------------- */
function initHeader(): void {
  const bar = document.querySelector<HTMLElement>('[data-header-bar]');
  if (!bar) return;

  const setScrolled = (on: boolean) => {
    bar.toggleAttribute('data-scrolled', on);
  };

  const ENTER_SCROLLED = 64;
  const LEAVE_SCROLLED = 24;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      /* Hysteresis. The scrolled state shrinks the header by 8px, and a single
         8px threshold sat exactly on that delta: shrinking moved the scroll
         offset back under the threshold, which grew the header, which moved it
         back over — the header oscillated a few pixels below the top. Entering
         and leaving at different offsets makes that impossible, and the gap is
         far wider than any height change. */
      const y = window.scrollY;
      if (y > ENTER_SCROLLED) setScrolled(true);
      else if (y < LEAVE_SCROLLED) setScrolled(false);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* -------------------------------------------------------------------------
   2. Mobile menu — full-screen ink overlay
   ---------------------------------------------------------------------- */
const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function initMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !menu) return;

  const closeButton = menu.querySelector<HTMLButtonElement>('[data-menu-close]');
  let isOpen = false;
  let hideTimer: number | undefined;

  const focusables = (): HTMLElement[] =>
    Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement,
    );

  const open = (): void => {
    if (isOpen) return;
    isOpen = true;
    window.clearTimeout(hideTimer);
    menu.hidden = false;
    // Force a style flush so the opening transition has a "from" state.
    void menu.offsetHeight;
    menu.setAttribute('data-open', '');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.setAttribute('data-menu-open', 'true');
    (closeButton ?? focusables()[0])?.focus();
  };

  const close = (options: { restoreFocus?: boolean } = {}): void => {
    if (!isOpen) return;
    isOpen = false;
    menu.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.removeAttribute('data-menu-open');
    if (options.restoreFocus !== false) toggle.focus();
    hideTimer = window.setTimeout(
      () => {
        menu.hidden = true;
      },
      prefersReducedMotion() ? 0 : MENU_TRANSITION_MS,
    );
  };

  toggle.addEventListener('click', () => (isOpen ? close() : open()));
  closeButton?.addEventListener('click', () => close());

  // Any navigation inside the overlay closes it (same-page anchors included).
  menu.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement | null)?.closest('a[href]');
    if (link) close({ restoreFocus: false });
  });

  document.addEventListener('keydown', (event) => {
    if (!isOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== 'Tab') return;

    // Focus trap. This one IS a dialog (aria-modal), unlike the contact strip.
    const items = focusables();
    if (items.length === 0) return;
    const first = items[0]!;
    const last = items[items.length - 1]!;
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey && (active === first || !menu.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !menu.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  });

  // Crossing into desktop layout must not leave an orphaned overlay behind.
  const desktop = window.matchMedia(NAV_BREAKPOINT);
  const onBreakpoint = (event: MediaQueryList | MediaQueryListEvent) => {
    if (event.matches) close({ restoreFocus: false });
  };
  if (typeof desktop.addEventListener === 'function') {
    desktop.addEventListener('change', onBreakpoint);
  }
}

/* -------------------------------------------------------------------------
   3. Scroll reveals — opacity/translateY, 20% visibility, once
   ---------------------------------------------------------------------- */
function initReveals(): void {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (targets.length === 0) return;

  // Siblings inside a [data-stagger] group cascade 60ms apart. An explicit
  // value on the attribute overrides the default: <div data-stagger="90">.
  for (const group of document.querySelectorAll<HTMLElement>('[data-stagger]')) {
    const step = Number(group.dataset.stagger) || REVEAL_STAGGER_MS;
    group.querySelectorAll<HTMLElement>('.reveal').forEach((el, index) => {
      el.style.setProperty('--reveal-delay', `${index * step}ms`);
    });
  }

  const revealAll = () => targets.forEach((el) => el.classList.add('is-visible'));

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // 20% is the rule, but a block taller than the viewport can never reach
        // it — those reveal as soon as they are on screen at all.
        const tall = entry.boundingClientRect.height > window.innerHeight * 0.8;
        if (entry.intersectionRatio >= 0.2 || (tall && entry.isIntersecting)) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: [0, 0.2], rootMargin: '0px 0px -4% 0px' },
  );

  targets.forEach((el) => observer.observe(el));

  // If the user turns reduced motion on mid-session, stop hiding things.
  const onMotionChange = () => {
    if (prefersReducedMotion()) {
      observer.disconnect();
      revealAll();
    }
  };
  if (typeof reducedMotion.addEventListener === 'function') {
    reducedMotion.addEventListener('change', onMotionChange);
  }
}

/* -------------------------------------------------------------------------
   4. Legal notes — progressive enhancement ONLY
   The disclaimers are always in the DOM and <details> is keyboard-operable
   without any of this. Two courtesies are added: a superscript marker link
   opens the accordion it points into, and printing never loses legal text
   behind a collapsed disclosure.
   ---------------------------------------------------------------------- */
function initLegalNotes(): void {
  const panels = Array.from(document.querySelectorAll<HTMLDetailsElement>('[data-legal-notes]'));
  if (panels.length === 0) return;

  const openForHash = () => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    let target: Element | null = null;
    try {
      target = document.querySelector(hash);
    } catch {
      return; // not a valid selector — nothing to do
    }
    if (!target) return;
    const panel = panels.find((p) => p.contains(target));
    if (!panel || panel.open) return;
    panel.open = true;
    target.scrollIntoView({
      block: 'center',
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  openForHash();
  window.addEventListener('hashchange', openForHash);

  // Print: force open, then restore exactly what the reader had.
  let wasOpen: boolean[] = [];
  window.addEventListener('beforeprint', () => {
    wasOpen = panels.map((panel) => panel.open);
    panels.forEach((panel) => {
      panel.open = true;
    });
  });
  window.addEventListener('afterprint', () => {
    panels.forEach((panel, index) => {
      panel.open = wasOpen[index] ?? false;
    });
  });
}

/* -------------------------------------------------------------------------
   5. Sticky contact strip
   Progressive enhancement around <ContactStrip>: the mobile bar's tel:/mailto:
   links work with no JS at all, and the desktop tab is a plain <button> that
   simply does nothing until this runs. What this adds:
     · aria-expanded toggle on the tab, with the card as its aria-controls
     · Esc and click-outside close; Esc returns focus to the tab
     · leaving the strip by keyboard closes it (disclosure, not modal — no trap)
     · the whole strip tucks away while the footer's legal region is on screen,
       so it can never float over the regulatory block
   ---------------------------------------------------------------------- */
const CSTRIP_TRANSITION_MS = 240;

function initContactStrip(): void {
  const root = document.querySelector<HTMLElement>('[data-contact-strip]');
  if (!root) return;

  const toggle = root.querySelector<HTMLButtonElement>('[data-cstrip-toggle]');
  const panel = root.querySelector<HTMLElement>('[data-cstrip-panel]');
  if (!toggle || !panel) return;

  const closeButton = root.querySelector<HTMLButtonElement>('[data-cstrip-close]');
  let isOpen = false;
  let hideTimer: number | undefined;

  const open = (): void => {
    if (isOpen) return;
    isOpen = true;
    window.clearTimeout(hideTimer);
    panel.hidden = false;
    void panel.offsetHeight;
    panel.setAttribute('data-open', '');
    toggle.setAttribute('aria-expanded', 'true');
  };

  const close = (options: { restoreFocus?: boolean } = {}): void => {
    if (!isOpen) return;
    isOpen = false;
    panel.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (options.restoreFocus) toggle.focus();
    hideTimer = window.setTimeout(
      () => {
        panel.hidden = true;
      },
      prefersReducedMotion() ? 0 : CSTRIP_TRANSITION_MS,
    );
  };

  toggle.addEventListener('click', () => (isOpen ? close({ restoreFocus: true }) : open()));
  closeButton?.addEventListener('click', () => close({ restoreFocus: true }));

  document.addEventListener('keydown', (event) => {
    if (!isOpen || event.key !== 'Escape') return;
    event.preventDefault();
    close({ restoreFocus: true });
  });

  // Click outside the tab/card cluster dismisses it — without stealing focus,
  // because the pointer has already gone somewhere the user chose.
  document.addEventListener(
    'pointerdown',
    (event) => {
      if (!isOpen) return;
      const target = event.target as Node | null;
      if (target && root.contains(target)) return;
      close();
    },
    true,
  );

  // Tabbing out of the card closes it. This is a disclosure, not a dialog:
  // trapping focus in a persistent chrome element would be a keyboard trap.
  root.addEventListener('focusout', (event) => {
    if (!isOpen) return;
    const next = event.relatedTarget as Node | null;
    if (next && root.contains(next)) return;
    close();
  });

  /* --- tuck while the footer's legal region is on screen ---------------- */
  const legalRegion = document.querySelector<HTMLElement>('[data-footer-legal]');
  if (!legalRegion || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // Never yank the strip out from under a keyboard user mid-interaction.
          if (root.contains(document.activeElement)) return;
          close();
          root.setAttribute('data-tucked', '');
        } else {
          root.removeAttribute('data-tucked');
        }
      }
    },
    { threshold: 0 },
  );

  observer.observe(legalRegion);
}

/* ---------------------------------------------------------------------- */
function init(): void {
  initHeader();
  initMenu();
  initReveals();
  initLegalNotes();
  initContactStrip();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
