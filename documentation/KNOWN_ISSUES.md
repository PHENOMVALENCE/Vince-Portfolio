# Known Issues

**Version:** 1.2.0  
Documented from repository inspection on 2026-07-24.

---

## Table of contents

1. [Content / assets](#content--assets)
2. [SEO gaps](#seo-gaps)
3. [Tooling](#tooling)
4. [UX considerations](#ux-considerations)
5. [Browser considerations](#browser-considerations)
6. [Technical debt](#technical-debt)

---

## Content / assets

| Issue | Impact | Mitigation |
|-------|--------|------------|
| `assets/cv/vicent-manila-cv.pdf` missing on disk | CV buttons 404 | Add PDF or update path |
| Root `README.md` still describes ThemeWagon Folio / Alpine | Confusing for newcomers | Use `documentation/README.md` as entry; replace root README |
| `includes/partials/` empty | Noise | Safe to ignore or delete |

---

## SEO gaps

- `robots.txt` / `sitemap.xml` exist but still use `example.com` placeholders
- Limited Open Graph / Twitter cards across pages
- No canonical URLs
- Project detail URLs use query strings (`?slug=`) — decide crawl strategy

---

## Tooling

- No `package.json` / lint / test scripts
- Tailwind & Lucide loaded from CDN — require network; pin Lucide version for production stability (`@latest` can change)

---

## UX considerations

- Gallery filter row may scroll horizontally on small phones (intentional)
- Testimonials autoplay pauses on hover but not always on touch focus (swipe supported)
- Speaking page not in primary header nav (footer only)

---

## Browser considerations

- `100dvh` unsupported on very old browsers — `100vh` fallback present
- `backdrop-filter` varies by browser; solid navy overlays remain readable
- Safari address-bar resizing: prefer `dvh` panels (already used for nav/lightbox)

---

## Technical debt

- Footer nav links duplicated vs `VM.site.nav` (manual sync)
- Tailwind config duplicated in every HTML head
- No automated visual regression tests
