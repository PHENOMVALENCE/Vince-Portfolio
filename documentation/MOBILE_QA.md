# Mobile QA Matrix

**Release target:** v5.4.0  
**Scope:** every public route and every shared interactive component.

This checklist is the merge gate for responsive changes. The static CI catches structural regressions; this matrix covers browser behaviour that still requires visual or interactive verification.

---

## Viewports

Use these widths as the standard regression set:

| Class | Viewport |
|---|---|
| Small phone | 320×568 |
| Compact phone | 360×800 |
| iPhone baseline | 375×812 |
| Modern phone | 390×844 |
| Large phone | 430×932 |
| Tablet portrait | 768×1024 |
| Navigation boundary | 899×900 and 900×900 |
| Laptop | 1280×800 |
| Desktop | 1440×900 |
| Wide | 1920×1080 |

The 899/900 pair is mandatory because navigation changes mode at 900px.

---

## Global checks

For every route:

- No horizontal scrollbar.
- Page padding remains visible on both sides.
- Headings wrap without clipping or orphaned single characters.
- Images preserve useful focal points and never stretch.
- Buttons and interactive controls are at least 44px high.
- Long resource titles and metadata wrap rather than widening the page.
- Fixed header does not cover the first heading or hash targets.
- Mobile drawer opens, traps focus, closes with Escape and restores focus.
- Body scroll is restored after closing the drawer.
- Footer navigation remains readable and tappable.
- Back-to-top control does not cover primary content.
- Reduced-motion mode removes nonessential transitions.

Quick overflow check:

```js
document.documentElement.scrollWidth <= document.documentElement.clientWidth
```

---

## Route matrix

### Home — `index.html`

- Portrait leads on mobile; copy follows.
- Hero CTAs become full-width on narrow phones.
- Selected-work features stay image-first.
- External resource cards become one column.
- Executive profile facts remain readable.
- Expertise index keeps the number rail without compressing copy.
- Metrics collapse to one column.
- Career chronology uses the mobile rail.
- Photography becomes one column.
- Contact actions become full-width controls below 640px.

### Leadership — `leadership.html`

- Philosophy quote does not exceed viewport width.
- Metrics collapse cleanly.
- All chronology entries wrap organization/location text.
- Current-status chip drops below the role on very small phones.
- International footprint rows become single-column.
- CTA actions stack on narrow phones.

### Selected Work — `projects.html`

- Filters use two columns below 640px and one below 420px.
- No filter label clips.
- Case studies are image-first and single-column below 900px.
- Long case-study titles wrap.
- CTA band stacks cleanly.

### Case Study — `project.html?slug=...`

Verify at least two different slugs.

- Hero becomes image + content instead of overlay on narrow screens.
- Hero title and summary remain legible.
- Prose uses page padding and readable measure.
- Evidence links wrap without overflow.
- Project gallery becomes one column.
- Impact list becomes one column.
- Related projects become one column below tablet widths.
- Lightbox uses the full dynamic viewport height on mobile.
- Previous/next/close buttons remain reachable without overlapping the system UI.
- Swipe left/right still changes gallery image.

### Gallery — `gallery.html`

- Filters use responsive grid.
- Masonry is one column on phones, two at 640px, three at 1024px.
- Captions wrap.
- Keyboard activation still opens items.
- Lightbox image fits within the dynamic viewport.
- Close and navigation controls remain 44px minimum.

### Speaking — `speaking.html`

- Hero portrait leads on mobile.
- Featured Men's Circle artwork displays without clipping important text.
- Event metadata becomes one column.
- Speaking topics keep usable number/title/content alignment.
- Engagement external links wrap.
- Photography becomes one column on phones.
- Booking actions stack.

### Appendix — `appendix.html`

- Document title, metadata and summary wrap.
- Open PDF button becomes full-width on mobile.
- File size remains visible in the button.
- Available-on-request rows collapse to one column.
- Final contact actions stack.

---

## Orientation and device chrome

Also check:

- 667×375 landscape phone.
- Safari/Chrome dynamic browser bars do not hide lightbox controls.
- Safe-area padding does not put navigation against a notch or screen edge.
- Zoom to 200% does not produce horizontal scrolling for body content.

---

## CI vs manual responsibility

`.github/workflows/quality.yml` runs automatically when a PR is opened, synchronized or reopened.

The CI validates:

- all page shells exist,
- viewport metadata exists,
- JavaScript parses,
- cache versions match `VM.version`,
- required responsive CSS invariants remain,
- common local asset references resolve.

CI does **not** replace the visual matrix above. A PR changing layout should complete both.
