# Responsive Guide

**Version:** 1.2.0

---

## Table of contents

1. [Breakpoints](#breakpoints)
2. [Global behaviour](#global-behaviour)
3. [Navigation](#navigation)
4. [Homepage hero](#homepage-hero)
5. [Grids](#grids)
6. [Project detail](#project-detail)
7. [Gallery](#gallery)
8. [Competencies](#competencies)
9. [Timeline](#timeline)
10. [Connect & footer](#connect--footer)
11. [Lightbox](#lightbox)
12. [Landscape phones](#landscape-phones)
13. [Testing checklist](#testing-checklist)

---

## Breakpoints

| Width | Intent |
|-------|--------|
| ≤360px | Extra-small phones |
| ≤480px | Small phones (hero CTAs stack) |
| ≥640px | Large phones / small tablets (2-col grids) |
| ≥768px | Tablets |
| ≤1023px / ≥1024px | Mobile chrome vs desktop nav |
| ≥1440px | Gallery 4-column masonry |

CSS also uses `orientation: landscape` with `max-width: 1023px`, `hover: none`, and `prefers-reduced-motion`.

Prefer **`100dvh`** (with `100vh` fallback) for full-viewport panels.

---

## Global behaviour

- Horizontal padding via `--page-pad-x` on major containers under 1024px.
- Section vertical padding compresses on mobile.
- Images in cover containers use `object-fit: cover` + configurable `object-position`.
- Avoid relying on `overflow-x: hidden` as the only overflow fix.

---

## Navigation

| Viewport | Behaviour |
|----------|-----------|
| ≥1024px | Inline nav links + Contact + theme |
| <1024px | Hamburger; drawer from right; full remaining height under header |

Safe-area padding on drawer actions. Body scroll locked while open.

---

## Homepage hero

**Desktop (≥1024):** Multi-column shell preserved.

**Mobile:** Single column order — logo/eyebrow → title → roles → portrait → summary → CTAs → metrics.

Portrait: ~78–90% width, max ~340px, `object-position: top center`.

---

## Grids

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Projects | 1 | 2 | 3 |
| Skills | 1 | 2 | 3 |
| Media | 1 | 2 | 3 |
| Connect cards | 1 | 1 | 3 |
| Impact stats | 2 | 3 | 6 |
| Action gallery | 2 | 3 | 6 |
| Project gallery | 1 | 2 | 3 |

---

## Project detail

Mobile hero uses **auto height** with readable overlay content (no clipped titles). Gallery becomes single column under 640px.

---

## Gallery

Masonry columns 1→2→3→4. Filters may scroll horizontally on small screens. Overlays visible on touch devices (`hover: none`).

---

## Competencies

Single column cards; tags wrap with flex + gap. Featured Business Development card retains stronger gold border.

---

## Timeline

Always vertical; line on the left. Thumbs hide below `sm` where marked `hidden sm:block`.

---

## Connect & footer

Mobile order: copy → contact cards → location → LinkedIn/CV → quote → portrait. Footer stacks; back-to-top respects safe-area.

---

## Lightbox

Fits `100dvh`; controls bottom-aligned on small screens; z-index above header.

---

## Landscape phones

Drawer link padding tightened; project hero min-height adjusted; hero top padding reduced.

---

## Testing checklist

Verify at 320, 360, 375, 390, 412, 430, 768, 1024, 1440 and at least one landscape size:

- [ ] No horizontal page scroll
- [ ] Menu fully usable
- [ ] Heroes readable
- [ ] Cards/tap targets ≥44px
- [ ] Lightbox closable
- [ ] Contact links work
