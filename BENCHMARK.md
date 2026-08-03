# Benchmark — measured, not guessed

Measured live at **1440×900**. The build must match or beat these before anyone
sees it. Re-measure our own pages at 375 / 768 / 1280 / 1440 / 1900.

Reference site: **entourageconseils.ca** — the NBF-advisor site Leadlord's first
client rated best for feel. No client-named reference exists for Wolf Achard, so
this is the standing competitive bar. Logged as a default.

| Metric | Entourage (1440) | Our target | Why |
|---|---|---|---|
| Header height | **95px** | 95–110px | Client asked for a bigger bar on the last build |
| Logo height in bar | **80px** (square mark, 84% of bar) | 58–72px | Ours are ~3:1 wordmarks, not square marks — a different constraint. Every 1px of lockup height costs ~6.4px of bar width with two lockups. |
| First logo from viewport edge | **26–30px** | ≤48px | "The logos are further to the left of the viewport" |
| Nav link size / weight | **16px / 700** | ≥16px | "The nav bar is bigger, easier to read" |
| **Hero message size** | **65px / 700** | ≥56px | "The message is bold" |
| `<h1>` size | **22px** | may stay small — see below | |
| Scripts | **4** | 0–2 | Our zero-third-party story |
| Stylesheets | **1** | 1 | |
| Body background | **#F6F1ED** (warm paper) | #F7F4EF | Independent confirmation of the warm-paper direction |
| Media above the fold | **7** | ≥1, real people | "Not many images at the tops of the pages" |

## The finding that matters most

**Entourage's hero message is not their `<h1>`.** Their `<h1>` is
`Gestion d'investissement` — a 22px category label. The 65px line
*"Être bien conseillé, c'est d'abord être bien entouré"* is a **styled `<p>`**.

This resolves a tension the reference build never got past. It was recorded there
that "their H1 *is* the message, yours is the firm name, and fixing that needs
client sign-off because it changes verbatim live copy." That is not what the page
does.

So: **keep the client's verbatim live `<h1>` exactly as captured**, at whatever
size the hierarchy wants, and carry the large visual message in a non-heading
element beside it. Visual hierarchy and heading hierarchy are separate problems.

No verbatim copy is replaced. The message line is still new copy and still needs
an `NC-` row — but it is additive, not a substitution, which is a far easier
approval.

## Measurement snippet

Run against any URL in the browser pane:

```js
const hdr = document.querySelector('header');
({
  header: Math.round(hdr.getBoundingClientRect().height),
  logos: [...hdr.querySelectorAll('img')].map(i => {
    const r = i.getBoundingClientRect();
    return { h: Math.round(r.height), left: Math.round(r.left) };
  }),
  nav: [...hdr.querySelectorAll('a')].slice(0, 5)
        .map(a => getComputedStyle(a).fontSize),
  biggestAboveFold: [...document.querySelectorAll('body *')]
    .filter(e => e.getBoundingClientRect().top < 950 && !e.children.length)
    .map(e => ({ px: parseFloat(getComputedStyle(e).fontSize),
                 t: e.textContent.trim().slice(0, 60) }))
    .sort((a, b) => b.px - a.px)[0],
  scripts: document.querySelectorAll('script[src]').length,
})
```
