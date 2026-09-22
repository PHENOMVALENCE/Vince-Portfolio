# Responsive Guide

**Status:** current as of v5.4.0

---

## 1. Responsive contract

The portfolio is mobile-first and supports every public route from **320px upward**.

Primary regression widths:

**320 · 360 · 375 · 390 · 430 · 768 · 899 · 900 · 1024 · 1280 · 1440 · 1920**

The 899/900 pair is deliberate: the navigation changes mode at 900px.

**No horizontal overflow at 320px is a P0 requirement.**

```js
document.documentElement.scrollWidth > document.documentElement.clientWidth // must be false
```

For the full route-by-route manual matrix, see [MOBILE_QA.md](./MOBILE_QA.md).

---

## 2. Breakpoints

| Range | Behaviour |
|---|---|
| `< 420px` | Small-phone refinements: single-column filters, stacked metadata, compact index rail |
| `< 640px` | Full-width CTA groups, one-column resources/gallery, mobile footer |
| `640–899px` | Tablet/mobile navigation, wider single-column editorial layouts |
| `≥ 760px` | Related project cards may use two columns |
| `≥ 900px` | Desktop navigation and major two-column editorial layouts |
| `≥ 1024px` | Gallery masonry reaches three columns |

Do not create a second navigation breakpoint. **900px is authoritative.**

---

## 3. Shared mobile behaviour

| Component | Mobile | Desktop |
|---|---|---|
| Header | Brand + 44px menu button | Inline navigation + partnership CTA |
| Hero | Portrait first, text second | Two columns |
| CTA groups | Full-width stacked below 640px | Wrapped inline actions |
| Selected work | Image-first, one column | Two-column editorial feature |
| External resources | One column | Two columns |
| Expertise | Number rail + readable content | Number · title · description |
| Chronology | Left rule, period above content | Period rail + content |
| Metrics | One column | Responsive row |
| Filters | 1–2 column control grid | Wrapped inline controls |
| Gallery | One column | 2 columns at 640px, 3 at 1024px |
| Project gallery | One column | Multi-column legacy layout |
| Related projects | One column | Two columns from 760px |
| Event metadata | One column | Label/value rows |
| Appendix docs | Stacked; action full width | Number · content · action |
| Footer | Stacked navigation | Two-column footer |

---

## 4. Case-study mobile layout

The case-study route requires special treatment because the original template used a full image overlay hero.

Below 900px:

1. The hero becomes a normal document flow.
2. The image sits above the title/summary.
3. The content panel no longer uses viewport overlay positioning.
4. Gallery and impact sections become single-column.
5. Related projects become single-column below 760px.
6. Lightboxes use `100dvh` so mobile browser chrome does not hide controls.

Case-study wrappers use `.vm-container` instead of utility-only spacing so they share the same page padding as the rest of the portfolio.

---

## 5. Touch and text safety

Interactive targets are at least **44×44px**.

Long titles use `overflow-wrap:anywhere` on structural text elements. This is a safety net for long publication titles, organizations and evidence links; normal copy should still be edited for readability.

Buttons in hero/contact groups expand to full width below 640px. Appendix download buttons also expand to the available width so the file size never clips.

---

## 6. Safe areas and dynamic viewport units

The fixed header respects left/right safe-area insets where supported. The mobile drawer also preserves a safe right edge and bottom spacing.

Lightboxes use `100dvh` on mobile rather than `100vh`, reducing conflicts with browser address bars.

---

## 7. Automated validation

Run:

```bash
node scripts/validate-site.mjs
```

The same command runs in **Portfolio Quality** CI on pull requests.

It validates shell structure, viewport tags, JS syntax, cache-version consistency, selected responsive invariants and common local asset references.

---

## 8. Manual validation

Automation cannot confirm image composition, visual hierarchy or real touch ergonomics.

Use [MOBILE_QA.md](./MOBILE_QA.md) before merging any layout change.
