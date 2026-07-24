# Folder Structure

**Version:** 1.2.0

---

## Table of contents

1. [Tree](#tree)
2. [Root files](#root-files)
3. [assets/](#assets)
4. [documentation/](#documentation)
5. [Other paths](#other-paths)

---

## Tree

```text
Vince-Portfolio/
├── index.html
├── leadership.html
├── projects.html
├── project.html
├── gallery.html
├── media.html
├── speaking.html
├── site.webmanifest
├── .htaccess
├── README.md                 # Legacy root note — prefer documentation/README.md
├── .github/workflows/release.yml
├── .vscode/launch.json
├── includes/partials/        # Empty placeholder from template heritage
├── assets/
│   ├── css/
│   │   └── executive.css
│   ├── js/
│   │   ├── config.js
│   │   ├── data.js
│   │   ├── gallery-data.js
│   │   ├── layout.js
│   │   ├── pages.js
│   │   └── site.js
│   ├── cv/                   # Place vicent-manila-cv.pdf here
│   └── images/
│       ├── vincelogo.png
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       ├── android-chrome-192x192.png
│       ├── android-chrome-512x512.png
│       └── Vince/
│           ├── (original portraits)
│           ├── gallery/
│           │   ├── (full gallery sources)
│           │   └── thumbs/
│           └── web/
│               ├── (site-optimized portraits)
│               └── gallery/
└── documentation/
    ├── README.md
    ├── DOCUMENTATION_INDEX.md
    ├── screenshots/
    └── *.md
```

---

## Root files

| File | Purpose |
|------|---------|
| `*.html` | Page shells with `data-page` |
| `site.webmanifest` | PWA manifest (name, icons, theme `#0B1F3A`) |
| `.htaccess` | Apache `DirectoryIndex`, rewrite base `/Vince-Portfolio/`, caching, compression |
| `README.md` | Older template README; use `documentation/README.md` as the product entry |

---

## assets/

### `assets/css/executive.css`

Brand tokens, executive components, mobile nav, project/gallery/connect styles, responsive polish.

### `assets/js/`

| File | Role |
|------|------|
| `config.js` | Site + contact + images + `VM.version` |
| `data.js` | Portfolio content |
| `gallery-data.js` | Gallery catalogue |
| `layout.js` | Header/footer/Connect |
| `pages.js` | Page rendering |
| `site.js` | UI behaviours |

### `assets/images/`

Brand marks, favicons, and `Vince/` photography tree. See [IMAGE_ASSETS.md](./IMAGE_ASSETS.md).

### `assets/cv/`

Expected file: `vicent-manila-cv.pdf` (referenced by config). Directory may be empty until the PDF is added.

---

## documentation/

Complete documentation suite. Start at [README.md](./README.md) or [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md).

---

## Other paths

| Path | Notes |
|------|-------|
| `.github/workflows/release.yml` | Creates GitHub Releases for tags `v*` |
| `.vscode/launch.json` | Editor launch config |
| `includes/partials/` | Unused empty template leftover |
