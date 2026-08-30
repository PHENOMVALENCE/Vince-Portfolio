# Pages

**Status:** current as of v5.0.4 · Renderers in `assets/js/pages.js`

Every route is a shell containing `<head>` metadata plus three mount points. `data-page` on `<body>` selects the renderer.

---

## Shared head

Every shell carries: charset, viewport, description, Open Graph (absolute image URL), Twitter card, canonical, favicons, manifest, three stylesheets, then six scripts.

Only `index.html` carries the `Person` structured data. Titles and descriptions are **unique per page** — reusing the homepage title across routes is an SEO defect.

There is no inline theme bootstrap; the site has a single light theme.

---

## `index.html` — `home`

The homepage answers, in about ten seconds: who he is, what he does, at what level, what he achieved, and where to go next.

| Section | Pacing |
|---|---|
| Hero — name, headline, summary, CTAs | Expansive |
| Credibility strip — verifiable role facts | Compact |
| Selected work — three case studies | Expansive |
| Executive profile — prose + facts | Standard |
| Leadership philosophy — pull quote | Standard |
| Expertise index `01`–`06` | Standard |
| Selected impact — four metrics | Standard |
| Career chronology — first four roles | Standard |
| International footprint + partners | Standard |
| Photography | Expansive |
| Contact — email, WhatsApp, call, LinkedIn | Compact, inverse |

`#profile`, `#work`, `#expertise`, `#experience` and `#contact` are anchor targets. They work on first load only because of `applyInitialHash`.

---

## `leadership.html` — `leadership`

Thesis → philosophy → metrics → **full** chronology → footprint → CTA. The homepage shows the first four roles; this page shows all nine.

---

## `projects.html` — `projects`

Case-study index with category filters. Filters expose `aria-pressed` and announce results through a polite live region.

`projectFeature` is called with heading level **2** here — there is no intermediate `h2`, so level 3 would skip a level.

---

## `project.html` — `project`

Reads `?slug=`, looks up `VM.getProject`, and redirects to the index if the slug is unknown. Sets `document.title` dynamically.

Structure: hero → context/challenge/objectives/role/strategy/execution → results → impact → gallery → related. Section headings are `h2`; the case-study title is the `h1`.

Includes its own lightbox with focus trap and Escape handling.

---

## `gallery.html` — `gallery`

Masonry archive from `VM.galleryImages` (`gallery-data.js`) — 1 / 2 / 3 columns. Category filters, and a lightbox with focus trap, Escape and focus return.

The grid renders `thumb`; `src` (full size) loads only when the lightbox opens. Image titles are `<p>`, not headings — a caption is not a document heading.

---

## `speaking.html` — `speaking`

Positioning → topics `01`–`04` → engagements → photography → booking. Booking carries email, WhatsApp, call and CV.

---

## `appendix.html` — `appendix`

Primary-source evidence. Five published documents, each with page count and **file weight stated on the control**. Then "available on request": signed agreements and audit reports, deliberately not published.

Linked from the footer and mobile drawer, not the top bar — that keeps the top level at six items.

---

## Adding a page

1. Copy an existing shell; set `data-page`.
2. Add a renderer in `pages.js` and register it in `init`.
3. Add unique title, description, canonical and OG tags.
4. Add to `sitemap.xml`.
5. Add to `VM.site.nav` **only** if it belongs in the top six — otherwise footer and drawer.
6. Verify: one `h1`, no skipped levels, no overflow at 320px, contrast, and 44px targets.
