# Responsive Guide

**Status:** current as of v5.0.4

---

## 1. Verified breakpoints

Every page is checked at **320 · 360 · 375 · 390 · 430 · 768 · 900 · 1024 · 1280 · 1440 · 1920**.

**No horizontal overflow at any width is a P0 requirement.** 320px is the floor — it is the narrowest viewport in common use, and layouts that survive it survive everything above.

Verify with a measurement, not by eye:

```js
document.documentElement.scrollWidth > document.documentElement.clientWidth  // must be false
```

To find the offender when it is true:

```js
const vw = document.documentElement.clientWidth;
[...document.querySelectorAll('main *')]
  .filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.right > vw + 1; })
  .map(e => e.tagName + '.' + e.className);
```

Ignore matches inside `#nav-drawer` — it is intentionally translated off-canvas and clipped by `overflow-x: clip` on `html, body`.

---

## 2. The one navigation breakpoint

**900px.** See `NAVIGATION.md` for the full rationale and the three places that must agree on it.

| Width | Navigation |
|---|---|
| `< 900px` | Brand + 44×44 hamburger; drawer slides from the right |
| `≥ 900px` | Brand + inline links + "Discuss a Partnership" |

The brand name is visible at **every** width including 320px, where the lockup and controls leave 95px of slack. An earlier rule hid it below 380px, which covers common devices such as the iPhone SE — that was removed as an unnecessary loss of identity.

---

## 3. Component behaviour

| Component | Mobile | Desktop |
|---|---|---|
| Hero | Portrait **leads**, then text (`order: -1`) | Two columns, text left |
| Selected work | Stacked, image first | Two columns, alternating for rhythm |
| Executive profile | Single column | Text + portrait |
| Chronology | Period above role | Period on a left rail |
| Expertise index | Number + title stacked | Number · title · description |
| Metrics | Stacked, hairline between | Row, hairlines between |
| Gallery | 1 column | 2 at 640px, 3 at 1024px |
| Appendix documents | Stacked | Number · body · action |
| Contact actions | Wrapped buttons | Row beside the heading |

Mobile is **designed, not stacked**. The hero portrait leading on mobile is a deliberate inversion, not a side effect of source order.

---

## 4. Touch targets

Everything interactive meets **44×44px**. Verify:

```js
[...document.querySelectorAll('a.vm-btn, button, .vm-nav__link, .vm-filter, .nav-mobile-link')]
  .filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height < 44; });
```

Two cases needed deliberate handling:

- **`.vm-btn--tertiary`** is a text link with a gold underline, originally `min-height: 0` to keep the rule tight to the text — a 32px target. It is now padded to 44px with the underline moved to `::after` pinned under the *text*, so the target grows without the rule drifting away from the words.
- **`.vm-filter`** was 40px plus borders (41px rendered). Raised to a 44px minimum.

---

## 5. Fluid sizing

Type and spacing scale with `clamp()` rather than stepping at breakpoints, so there are no awkward intermediate widths:

```css
--vm-display-xl:  clamp(2.75rem, 6vw, 4.5rem);
--vm-page-pad-x:  clamp(1.25rem, 4vw, 4rem);
--vm-section-expansive: clamp(5rem, 10vw, 9rem);
```

Long headings use `text-wrap: balance`. Prose is capped at `68ch` regardless of viewport — a full-width line on a 1440px screen is unreadable.

---

## 6. Testing note

The development browser pane pauses the animation timeline while hidden, so `requestAnimationFrame` never fires and CSS transitions freeze. Post-scroll screenshots come back blank and the drawer looks stuck.

Prefer DOM measurement over screenshots, and see `NAVIGATION.md` §7 for the transition-neutralising snippet.
