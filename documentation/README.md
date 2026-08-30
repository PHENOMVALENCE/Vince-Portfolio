# Vicent Manila — Portfolio

**Status:** current as of v5.0.4

An executive editorial portfolio for Vicent Manila — management consultant, strategic partnerships, organizational leadership.

---

## Run locally

Serve the repository root over HTTP. There is no build step.

```bash
python -m http.server 8899
```

Then open `http://localhost:8899/index.html`. Do not open the files via `file://` — the pages fetch their own assets by relative path.

---

## Stack

Vanilla HTML, CSS and JavaScript. No framework, no bundler, no package manager.

| Layer | Choice |
|---|---|
| Rendering | JS template literals from `assets/js/data.js` |
| Styling | Hand-written CSS with custom properties |
| Fonts | Source Serif 4 + Plus Jakarta Sans |
| Icons | Lucide (CDN) |
| Hosting | Static — currently Vercel |

The Tailwind CDN was removed: it compiled in-browser on every page load, blocking render. See [TECHNOLOGY_STACK.md](./TECHNOLOGY_STACK.md).

---

## Routes

`index` · `leadership` · `projects` · `project?slug=` · `gallery` · `speaking` · `appendix`

Six top-level destinations plus a CTA. Appendix lives in the footer and mobile drawer.

---

## The two rules that matter most

**1. Never publish a claim you cannot source.**

Every metric, role, date, partner and document on this site traces to a primary source. Testimonials and media items were removed wholesale because they could not be verified.

Before adding anything, record its source in [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md). Open questions live in [CONTENT_NEEDS_VERIFICATION.md](./CONTENT_NEEDS_VERIFICATION.md).

> Never make the portfolio more impressive by making it less truthful.

**2. The design system is the source of truth.**

[`../DESIGN.md`](../DESIGN.md) governs every visual decision. It is not advisory.

---

## Before you commit

- No horizontal overflow at **320px**.
- Contrast measured against the **rendered surface**, not assumed.
- Touch targets **44×44px**.
- One `h1` per page, no skipped heading levels.
- Interactive elements verified with a **hit test**, not a synthetic `.click()`.
- Asset `?v=` bumped across **all** shells together.

---

## Where to look

| Question | File |
|---|---|
| How is this built? | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| How does the navbar work? | [NAVIGATION.md](./NAVIGATION.md) |
| What are the design rules? | [`../DESIGN.md`](../DESIGN.md) |
| Why does it look like this? | [DESIGN_REFERENCE_ANALYSIS.md](./DESIGN_REFERENCE_ANALYSIS.md) |
| What breaks easily? | [KNOWN_ISSUES.md](./KNOWN_ISSUES.md) |
| How do I edit content? | [MAINTENANCE_GUIDE.md](./MAINTENANCE_GUIDE.md) |
| Full index | [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) |

---

## One warning

`assets/css/executive.css` (87KB) predates the redesign and still ships. `design-system.css` loads after it and wins, but the legacy sheet has already caused two serious bugs — an unclickable navbar and a drawer that stranded keyboard focus.

**When something behaves oddly, check whether `executive.css` has an opinion about it.**
