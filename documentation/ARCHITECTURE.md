# Architecture

**Status:** current as of v5.0.4

A static, data-driven site. No build step, no framework, no runtime dependencies beyond a font stylesheet and an icon script.

---

## 1. Shape

Each route is a thin HTML shell containing only `<head>` metadata and three mount points. All body content is rendered by JavaScript from a central data module.

```
index.html  leadership.html  projects.html  project.html
gallery.html  speaking.html  appendix.html
        │
        │  <div id="site-header">   <main id="main-content">   <div id="site-footer">
        ▼
assets/js/
  config.js        site identity, navigation, contact, image paths
  data.js          all professional content (single source of truth)
  gallery-data.js  gallery manifest
  layout.js        header, drawer, footer markup
  pages.js         one renderer per route + case-study lightbox
  site.js          navigation behaviour, reveal, back-to-top

assets/css/
  executive.css     legacy — predates the redesign, still loaded (see §5)
  utilities.css     reset + the small utility set the markup still uses
  design-system.css the design system; loads last and wins
```

## 2. Load order

Order is deliberate and load-bearing.

**Stylesheets** — `executive.css` → `utilities.css` → `design-system.css`

`design-system.css` is last so its tokens and components override the legacy sheet. Several rules in it exist specifically to neutralise `executive.css` assumptions; each is commented with the reason.

**Scripts** — `config.js` → `data.js` → `gallery-data.js` → `layout.js` → `pages.js` → `site.js`

Each attaches to the `window.VM` namespace and depends on the previous. On `DOMContentLoaded`, `layout.js` injects the header and footer, `pages.js` renders the route body from `document.body.dataset.page`, then `site.js` wires behaviour.

## 3. Rendering

`pages.js` maps `data-page` to a renderer:

| `data-page` | Renderer |
|---|---|
| `home` | `renderHome` |
| `leadership` | `renderLeadership` |
| `projects` | `renderProjects` |
| `project` | `renderProject` (reads `?slug=`) |
| `gallery` | `renderGallery` |
| `speaking` | `renderSpeaking` |
| `appendix` | `renderAppendix` |

After render, `afterRender` initialises page-specific behaviour and calls `applyInitialHash`.

### Why `applyInitialHash` exists

Content is rendered *after* `DOMContentLoaded`, so the browser's native hash scroll runs before the target element exists. Without re-applying it, every `#anchor` link into a page fails on first load.

## 4. Content model

All professional content lives in `VM.data` (`data.js`). Markup never hard-codes a claim.

This matters beyond tidiness: every claim must be traceable to a primary source. Centralising the content makes an audit possible. See `CONTENT_VERIFICATION.md` and `CONTENT_NEEDS_VERIFICATION.md`.

## 5. `executive.css` — legacy

87KB predating the redesign, structured as accreted override layers ("Premium editorial redesign", "Expertise editorial reversal", "Legacy alias") with `!important` throughout.

It still ships because deleting it wholesale is riskier than overriding it. `design-system.css` loads afterwards and wins. Retiring it is worthwhile follow-up work.

**Two traps it has already caused**, both now neutralised and commented in `design-system.css`:

- `pointer-events: none` on `.site-header` — made the entire navbar unclickable after the header rebuild removed the pill child that used to re-enable pointers.
- `visibility` included in the drawer transition — made the drawer briefly unfocusable, stranding keyboard focus behind the open menu.

When something behaves oddly, check whether `executive.css` has an opinion about it.

## 6. Theming

**A single light theme.** The dark theme and its toggle were removed at the owner's request; a half-maintained second theme is worse than none. All colour flows from semantic tokens on `:root` in `design-system.css`.

`executive.css` still contains `.dark` rules. They are inert — the class is never applied.

## 7. No build step

Serve the repository root over HTTP. There is nothing to compile.

The runtime Tailwind CDN was removed: it shipped the full engine and compiled classes in-browser on every load, blocking render. `utilities.css` (~7KB) implements the reset and the exact utilities the markup still uses.

## 8. Deployment

Static hosting; currently Vercel. `sitemap.xml` and `robots.txt` are maintained by hand — add new routes to both.

Asset URLs carry a `?v=` query bumped on release so returning visitors do not get stale CSS or JS.
