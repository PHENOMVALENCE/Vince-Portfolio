# Technology Stack

**Version:** 1.2.0

---

## Table of contents

1. [Summary](#summary)
2. [Frontend](#frontend)
3. [Styling](#styling)
4. [JavaScript](#javascript)
5. [Fonts and icons](#fonts-and-icons)
6. [Hosting and deployment](#hosting-and-deployment)
7. [Images](#images)
8. [SEO](#seo)
9. [What is not used](#what-is-not-used)
10. [Rationale](#rationale)

---

## Summary

Static HTML/CSS/JS portfolio. No bundler, no React/Vue/Alpine runtime, no `package.json`.

---

## Frontend

| Technology | Usage |
|------------|--------|
| HTML5 | Page shells, semantic landmarks |
| CSS3 | Custom properties, Grid, Flexbox, media queries |
| ES5+/vanilla JS | IIFEs attaching to `window.VM` |

---

## Styling

| Layer | Why |
|-------|-----|
| **Tailwind CDN** (`cdn.tailwindcss.com`) | Rapid utility layout in templates without a build |
| **`executive.css`** | Brand tokens, complex sections, mobile nav, case studies |
| **Inline `tailwind.config`** | Extends colours (`navy`, `gold`, `canvas`) and `maxWidth.8xl` (1280px) |

Methodology: utility-first for spacing/structure + curated CSS for brand-critical UI.

---

## JavaScript

| Library | Role |
|---------|------|
| None (app code) | Custom modules only |
| Lucide UMD | Icon set via `data-lucide` |

No animation libraries (GSAP, AOS, etc.). Motion uses CSS transitions + IntersectionObserver reveals.

---

## Fonts and icons

| Asset | Source |
|-------|--------|
| Plus Jakarta Sans | Google Fonts |
| Source Serif 4 | Google Fonts |
| Lucide | `unpkg.com/lucide@latest` |

---

## Hosting and deployment

| Option | Fit |
|--------|-----|
| Apache / XAMPP | Matches current `.htaccess` |
| Netlify / Vercel / Cloudflare Pages / S3+CDN | Static upload |
| GitHub Pages | Static |

No environment variables required for core site behaviour.

---

## Images

Manual web optimization into `Vince/web/` and gallery thumbs. Formats primarily JPEG/PNG. No automated WebP pipeline in-repo.

---

## SEO

- Per-page `<meta name="description">`, theme-color
- Open Graph / Twitter tags: limited / page-dependent (see SEO doc)
- JSON-LD `Person` on `index.html`
- `site.webmanifest`
- No `robots.txt` / `sitemap.xml` yet (tracked in Known Issues)

---

## What is not used

- Node / npm / Vite / Webpack
- React, Next.js, Alpine.js (root README mention is outdated)
- PHP (despite XAMPP path)
- Forms backends
- Analytics SDKs
- CMS

---

## Rationale

| Decision | Reason |
|----------|--------|
| Static multi-page | Simple hosting, fast TTFB, easy client edits |
| CDN Tailwind | Zero build friction for iteration |
| Central `VM.data` | Single place to update biography/projects |
| Custom CSS for executive UI | Brand precision beyond utilities |
| Lucide | Consistent line icons matching gold/navy UI |
