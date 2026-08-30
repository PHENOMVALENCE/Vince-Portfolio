# Technology Stack

**Status:** current as of v5.0.4

---

## 1. What this site is built from

| Layer | Choice |
|---|---|
| Markup | Hand-written HTML shells, one per route |
| Rendering | Vanilla JavaScript template literals |
| Styling | Hand-written CSS with custom properties |
| Fonts | Source Serif 4 + Plus Jakarta Sans (Google Fonts) |
| Icons | Lucide (CDN, deferred) |
| Hosting | Static — currently Vercel |
| Build | **None** |

No framework, no bundler, no package manager, no compile step. Serve the repository root over HTTP.

---

## 2. Removed: the Tailwind CDN

`cdn.tailwindcss.com` was previously loaded on every page. It was removed.

The CDN build ships the full Tailwind engine and compiles classes **in the browser on every page load**, blocking render. Tailwind's own documentation states it is not intended for production.

Replaced by `assets/css/utilities.css` (~7KB): a minimal reset plus the exact utilities the remaining markup uses. It is deliberately **not** a general utility framework — add a rule only when markup genuinely needs one, and prefer a semantic class in `design-system.css`.

Removing Tailwind also removed its Preflight reset, which the markup depended on. `utilities.css` restores that normalisation explicitly; without it, nav links render underlined and lists show bullets.

---

## 3. Stylesheets

Loaded in this order. The order is load-bearing.

| File | Size | Role |
|---|---|---|
| `executive.css` | 87KB | **Legacy.** Predates the redesign. Accreted override layers with heavy `!important`. |
| `utilities.css` | ~7KB | Reset + the small utility set still in use |
| `design-system.css` | ~38KB | The design system — tokens and components |

`design-system.css` loads last so it wins. Several of its rules exist specifically to neutralise `executive.css` assumptions; each carries a comment explaining what it counteracts and why.

---

## 4. Third-party requests

| Request | Why | Risk |
|---|---|---|
| `fonts.googleapis.com` / `fonts.gstatic.com` | Source Serif 4, Plus Jakarta Sans | Render-blocking stylesheet; `display=swap` set |
| `unpkg.com/lucide@latest` | Icons | **Unpinned.** `@latest` can change without warning |

**`lucide@latest` should be pinned** before this is treated as production-stable. Self-hosting the fonts would remove the remaining third-party dependency.

---

## 5. JavaScript

Six files on a shared `window.VM` namespace, loaded in dependency order:

`config.js` → `data.js` → `gallery-data.js` → `layout.js` → `pages.js` → `site.js`

Plain ES2020 — template literals, optional chaining, arrow functions. No transpilation, so anything used must be supported natively by target browsers.

All rendered content is escaped through `esc()` before interpolation.

---

## 6. Versioning

Asset URLs carry `?v=` bumped on release, so returning visitors do not receive stale CSS or JS against new markup. Every shell must be bumped together — a partial bump produces a half-updated page that is difficult to diagnose.

---

## 7. Why no framework

The site is a small number of content-driven routes with no application state, no authentication and no user input beyond navigation. A framework would add a build step, a dependency tree and a security-update burden without solving a problem this site has.

The centralised data module gives the one benefit that mattered — content separated from markup, so professional claims can be audited in one place.
