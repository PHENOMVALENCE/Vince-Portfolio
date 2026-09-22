# Vicent Manila — Portfolio

**Status:** current as of v5.2.2

An executive editorial portfolio for Vicent Manila, focused on management consulting, research and evaluation, strategic partnerships and organizational leadership.

---

## Run locally

Serve the repository root over HTTP. There is no build step.

```bash
python -m http.server 8899
```

Then open `http://localhost:8899/index.html`. Do not open the files via `file://`; pages resolve their own assets by relative path.

---

## Stack

Vanilla HTML, CSS and JavaScript. No framework, bundler or package manager.

| Layer | Choice |
|---|---|
| Rendering | JS template literals from `assets/js/data.js` |
| Styling | Hand-written CSS with custom properties |
| Fonts | Source Serif 4 + Plus Jakarta Sans |
| Icons | Lucide (CDN) |
| Hosting | Static, currently Vercel |

---

## Routes

`index` · `leadership` · `projects` · `project?slug=` · `gallery` · `speaking` · `appendix`

Six top-level destinations plus a contact CTA. Appendix lives in the footer and mobile drawer.

---

## The two rules that matter most

**1. Never publish a professional claim that cannot be sourced.**

The updated consultant CV dated 04/09/2026 is the current source of truth for role titles, dates and core career facts. Supporting reports and proposals provide deeper evidence for selected case studies. External articles, newsletters and event links are published only when a working public URL is known.

Before adding anything, record its source in [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md). Open questions live in [CONTENT_NEEDS_VERIFICATION.md](./CONTENT_NEEDS_VERIFICATION.md).

> Never make the portfolio more impressive by making it less truthful.

**2. The design system is the source of truth.**

[`../DESIGN.md`](../DESIGN.md) governs visual decisions. It is not advisory.

---

## Before you commit

- No horizontal overflow at **320px**.
- Contrast measured against the **rendered surface**.
- Touch targets **44×44px** minimum.
- One `h1` per page and no skipped heading levels.
- Interactive elements verified with a hit test.
- Asset `?v=` bumped across **all** shells together.
- New external resources must have a real, verified URL.

---

## Where to look

| Question | File |
|---|---|
| What changed from the September feedback? | [FEEDBACK_REVISION_2026-09.md](./FEEDBACK_REVISION_2026-09.md) |
| How is this built? | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| How does the navbar work? | [NAVIGATION.md](./NAVIGATION.md) |
| What are the design rules? | [`../DESIGN.md`](../DESIGN.md) |
| How is content verified? | [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md) |
| What still needs source material? | [CONTENT_NEEDS_VERIFICATION.md](./CONTENT_NEEDS_VERIFICATION.md) |
| Full index | [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) |

---

## One warning

`assets/css/executive.css` predates the redesign and still ships. `design-system.css` loads after it and wins, but the legacy sheet has previously caused serious navigation bugs.

When something behaves unexpectedly, check whether `executive.css` is overriding the newer system.
