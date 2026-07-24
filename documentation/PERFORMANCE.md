# Performance

**Version:** 1.2.0

---

## Table of contents

1. [Strategy](#strategy)
2. [Images](#images)
3. [CSS and JS](#css-and-js)
4. [Caching](#caching)
5. [Animations](#animations)
6. [Lighthouse goals](#lighthouse-goals)
7. [Known costs](#known-costs)

---

## Strategy

Keep the site static, minimize third-party JS, optimize photographs, and avoid layout shift with dimensions / aspect ratios.

---

## Images

- Web-optimized copies under `Vince/web/`
- Gallery thumbs for grids; full `src` in lightbox
- `loading="lazy"` on below-the-fold images
- Heroes / LCP candidates: not lazy; some use `fetchpriority="high"`
- `decoding="async"` widely used
- Cover containers use `aspect-ratio` to reserve space

---

## CSS and JS

- One primary stylesheet: `executive.css`
- Small vanilla JS modules (no SPA runtime)
- Lucide icons created on demand after DOM injection
- No heavy animation libraries

---

## Caching

Apache `.htaccess` sets long-lived Expires for static assets when hosted under Apache with `mod_expires`.

CDN hosts (Netlify/Cloudflare) should enable standard asset caching.

---

## Animations

CSS transitions + IntersectionObserver reveals. Autoplay carousels respect reduced motion.

---

## Lighthouse goals

| Category | Target |
|----------|--------|
| Performance | ≥ 85 mobile / ≥ 90 desktop (network dependent) |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 90 (after robots/sitemap/OG added) |

Validate on production URLs with cache warmed.

---

## Known costs

- Tailwind CDN compiles in-browser (dev convenience; consider built CSS later)
- Lucide `@latest` + Google Fonts are network round-trips
- Large hero photographs dominate LCP — keep web exports lean
