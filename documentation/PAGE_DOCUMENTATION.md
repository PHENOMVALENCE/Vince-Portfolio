# Pages

**Status:** current as of v5.4.0 · Renderers in `assets/js/pages.js`

Every route is a lightweight HTML shell containing metadata and mount points. `data-page` on `<body>` selects the renderer.

---

## Shared shell

Every public shell includes:

- UTF-8 charset,
- `width=device-width` viewport,
- route-specific metadata,
- favicons and manifest,
- the shared CSS stack,
- shared JS modules,
- skip link,
- header mount,
- `#main-content`,
- footer mount.

`index.html` additionally contains Person structured data.

All shells use the same cache version as `VM.version`. CI fails when a shell drifts.

---

## `index.html` — Home

Order:

1. Hero
2. Professional standing
3. Selected work
4. **Articles & Events / External resources**
5. Executive profile
6. Leadership philosophy
7. Expertise
8. Selected impact
9. Career chronology preview
10. International footprint
11. Photography
12. Contact

Mobile behaviour: portrait first, stacked CTA groups, one-column external resources, one-column metrics and photography.

---

## `leadership.html` — Leadership

Leadership thesis, philosophy, measurable outcomes, full career chronology, international footprint and partnership CTA.

Mobile chronology uses a visible left rule and puts the date above each role. Long organization/location text must wrap naturally.

---

## `projects.html` — Selected Work

Evidence-led case-study index with category filters.

Filters expose `aria-pressed` and announce result counts via a polite live region. On phones the filters switch to a compact grid so long category names do not create overflow.

---

## `project.html?slug=...` — Case Study

Dynamic route driven by `VM.getProject(slug)`.

Structure:

hero → overview/challenge/objectives/role/strategy/execution → evidence → gallery → outcomes → related work

Below 900px the hero stops behaving as an overlay and becomes image + content in normal flow. Project wrappers use the shared `.vm-container` padding. Gallery, outcomes and related projects collapse progressively for mobile.

The route includes a lightbox with keyboard arrows, Escape, focus return and touch swipe.

---

## `gallery.html` — Gallery

Filterable visual archive from `gallery-data.js`.

- 1 column on phones
- 2 columns from 640px
- 3 columns from 1024px

Items open an accessible lightbox and can be activated by keyboard.

---

## `speaking.html` — Speaking

Speaking positioning, featured event, topics, selected engagements, external resources, photography and booking CTA.

The Men's Circle uses only Vicent Manila's host artwork. Event metadata collapses to one column on small screens.

---

## `appendix.html` — Appendix

Primary-source evidence and downloadable documents.

On mobile document rows stack vertically and PDF actions occupy the full available width. File weight remains visible in the action.

---

## Adding a page

1. Copy an existing shell and set a unique `data-page`.
2. Register a renderer in `pages.js`.
3. Add unique title, description, canonical and OG metadata.
4. Add the route to `sitemap.xml`.
5. Add it to top navigation only if it belongs among the primary destinations.
6. Add responsive behaviour to the shared design system rather than a one-off inline patch.
7. Run `node scripts/validate-site.mjs`.
8. Complete [MOBILE_QA.md](./MOBILE_QA.md) at phone, tablet and desktop widths.
