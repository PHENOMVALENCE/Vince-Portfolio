# Components

**Status:** current as of v5.0.4 · Defined in `assets/css/design-system.css`, rendered from `assets/js/pages.js` and `layout.js`

Full visual rules live in [`../DESIGN.md`](../DESIGN.md). This file covers what each component *is* and the constraints that are easy to break.

---

## Layout primitives

| Class | Purpose |
|---|---|
| `.vm-container` | 1320px max, page padding |
| `.vm-container--wide` | 1440px, for wide media |
| `.vm-section` | Standard vertical rhythm |
| `.vm-section--expansive` | Hero, selected work, photography |
| `.vm-section--compact` | Credibility strip, contact |
| `.vm-section--subtle` | Alternate surface — **the section divider** |
| `.vm-section--navy` | Inverse surface |

Sections are separated by a **surface change**, not a border. Adding a rule between sections is redundant.

Rhythm is uneven **on purpose**. Uniform padding is what makes a page feel templated.

---

## Typography

| Class | Family | Use |
|---|---|---|
| `.vm-display` / `-lg` / `-md` | Serif 400 | Authored thought only |
| `.vm-heading` | **Sans** 600 | Section headings |
| `.vm-eyebrow` | Sans 600, tracked | Category labels |
| `.vm-lead` / `.vm-prose` | Sans | Body, capped at `68ch` |
| `.vm-caption` | Sans | Metadata |

**The hard rule:** serif for narrative, sans for structure. Section headings are sans *by default* so that when the serif appears it signifies. A serif never labels a control.

`.vm-eyebrow--ruled` adds the gold rule above — one of gold's few sanctioned uses.

---

## Buttons

| Variant | Treatment |
|---|---|
| `--primary` | Navy fill |
| `--secondary` | Transparent, 1px border |
| `--tertiary` | Text with gold underline via `::after` |
| `--on-navy` | Modifier for inverse surfaces |

All meet 44×44px. **No gold-filled buttons** — solid gold reads as a discount badge.

`--tertiary` puts its underline on `::after` rather than `border-bottom` so the anchor can be padded to 44px without the rule drifting away from the text.

---

## Content components

| Component | Shape | Constraint |
|---|---|---|
| `.vm-metrics` / `.vm-metric` | Hairline-separated row | Never boxed, never a dark band, never count-up animated. Every metric needs a label saying what it measures. |
| `.vm-index` / `.vm-index__item` | Numbered `01`–`06` | Not cards, not pills, not a carousel |
| `.vm-chrono` / `.vm-chrono__item` | One continuous rule, period on a left rail | No cards, no nested boxes, max three outcomes |
| `.vm-feature` | Full-bleed image, then text | Alternates for rhythm, not mechanically |
| `.vm-quote` | Serif 400, gold opening mark | The philosophy's signature moment |
| `.vm-proof` | Hairline-marked list | Verifiable role facts, not counters |
| `.vm-docs` / `.vm-doc` | Hairline rows | States file weight on the control — a 12MB download should never surprise anyone on mobile data |
| `.vm-filter` | Pill, `aria-pressed` | The one sanctioned pill: a genuine control |

`chronoItem` renders `mandate` and `outcomes` conditionally — some roles legitimately have neither, and empty markup would leave stray bullets.

---

## Navigation

Documented in full in [`NAVIGATION.md`](./NAVIGATION.md). Two constraints worth repeating:

- **Never** control navigation visibility with utility classes. One media query owns it.
- The header is styled entirely in `design-system.css` and must not rely on `executive.css`, which assumes the old floating-pill design.

---

## Behaviour (`site.js`)

| Function | Role |
|---|---|
| `openNav` / `closeNav` / `toggleNav` | Drawer state, focus, scroll lock |
| `handleNavKeydown` | Escape + focus trap |
| `initHeader` | Scrolled state; closes drawer at ≥900px |
| `initNav` | Toggle, overlay and link listeners |
| `initReveal` | Single intersection-based fade; skipped under reduced motion |
| `initBackToTop` | Back-to-top control |

**Removed deliberately:** `setTheme` / `toggleTheme` / `initTheme` (single light theme), `initCounters` (count-up is spectacle), `initTestimonials` (autoplay carousel), `initTimeline`.

---

## Adding a component

1. Check whether layout, typography and whitespace already do the job. Most "components" are a grid and a hairline.
2. Use existing tokens. **Never a raw hex value.**
3. Radius ≤ 8px. Shadows only on photographs.
4. Verify contrast against the rendered surface, and touch targets at 320px.
5. Confirm real clickability with `document.elementFromPoint`, not a synthetic `.click()`.
