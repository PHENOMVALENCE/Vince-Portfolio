# SEO Documentation

**Version:** 1.2.0

---

## Table of contents

1. [Current implementation](#current-implementation)
2. [Per-page meta](#per-page-meta)
3. [Structured data](#structured-data)
4. [Social / PWA](#social--pwa)
5. [Missing pieces](#missing-pieces)
6. [Image SEO](#image-seo)
7. [Recommendations](#recommendations)

---

## Current implementation

| Capability | Status |
|------------|--------|
| Unique `<title>` per page | Yes |
| Meta description | Yes (per HTML shell) |
| `theme-color` | `#0B1F3A` |
| JSON-LD Person | Home only |
| Web manifest | `site.webmanifest` |
| Canonical URLs | Not set |
| `robots.txt` | Present (update Sitemap domain) |
| `sitemap.xml` | Present (replace `example.com`) |
| Open Graph / Twitter full set | Not comprehensively implemented on all pages |

---

## Per-page meta

Titles and descriptions are authored in each HTML `<head>`. Project detail updates `document.title` in JS to `{project.title} — {site.name}`.

---

## Structured data

`index.html` includes `@type: Person` with name, image, jobTitle, address (Dar es Salaam, TZ), email, telephone, LinkedIn `sameAs`, and brand logo.

---

## Social / PWA

Manifest: name/short_name `Vicent Manila`, `standalone`, theme/background navy, icons including logo and Android chrome PNGs.

---

## Missing pieces

Tracked in [KNOWN_ISSUES.md](./KNOWN_ISSUES.md):

1. Replace `example.com` placeholders in `robots.txt` / `sitemap.xml` with the live domain.
2. Add canonical link tags.
3. Expand Open Graph (`og:title`, `og:description`, `og:image` using `VM.images.og` / `web/og.jpg`) on all pages.

---

## Image SEO

- Meaningful `alt` on portraits, projects, gallery items.
- Filenames are partially descriptive (`alumni-summit.jpg`).
- Prefer descriptive alts when adding new assets in `gallery-data.js`.

---

## Recommendations

```txt
# robots.txt (proposed)
User-agent: *
Allow: /
Sitemap: https://YOUR-DOMAIN/sitemap.xml
```

Include: `index.html`, `leadership.html`, `projects.html`, `speaking.html`, `gallery.html`, `appendix.html`, and each `project.html?slug=`.

`media.html` was removed — every item on it lacked a source URL. Do not reinstate it in the sitemap.

The sitemap uses the real production origin. It previously shipped pointing at `example.com`, which made it useless.
