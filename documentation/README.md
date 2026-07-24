# Vincent Manila Portfolio

**Professional executive portfolio website for Vicent Manila**  
**Version:** `1.2.0`  
**Status:** Production-ready static site  
**Documentation suite:** [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)

---

## Table of contents

1. [Project description](#project-description)
2. [Features](#features)
3. [Technology](#technology)
4. [Quick start](#quick-start)
5. [Folder structure](#folder-structure)
6. [Documentation map](#documentation-map)
7. [Contact & brand](#contact--brand)
8. [Project metadata](#project-metadata)
9. [Screenshots](#screenshots)
10. [License & acknowledgements](#license--acknowledgements)

---

## Project description

This repository contains a multi-page, static executive portfolio for **Vicent Manila** — Country Director and international business development leader. The site presents leadership experience, projects, photography, media, speaking, and direct contact channels (WhatsApp, phone, email).

The implementation is **vanilla HTML, CSS, and JavaScript** with Tailwind CSS (CDN) and Lucide icons. Content is data-driven from JavaScript modules under `assets/js/`. There is **no build step** and **no Node.js dependency** for local serving or Apache/XAMPP hosting.

---

## Features

- Responsive executive design (navy / gold / white)
- Shared header, mobile drawer navigation, Connect section, footer
- Homepage hero, profile, timeline, featured projects, competencies, testimonials, insights
- Full projects listing + case-study detail pages with galleries and lightbox
- Leadership, Gallery, Insights (Media), and Speaking pages
- Theme toggle (light / dark) persisted in `localStorage`
- Direct WhatsApp, Call, and Email CTAs
- CV download link (PDF path configured in `config.js`)
- Web-optimized photography with configurable `object-position`
- Accessibility patterns (focus, ARIA, reduced motion, skip link)

---

## Technology

| Layer | Choice |
|-------|--------|
| Markup | Static HTML shells (`data-page`) |
| Styling | `assets/css/executive.css` + Tailwind CDN utilities |
| Logic | Vanilla JS on `window.VM` |
| Icons | Lucide (CDN) |
| Fonts | Plus Jakarta Sans, Source Serif 4 (Google Fonts) |
| Hosting | Any static host / Apache (XAMPP compatible) |

Full detail: [TECHNOLOGY_STACK.md](./TECHNOLOGY_STACK.md)

---

## Quick start

### Requirements

- A static file server (Apache/XAMPP, `npx serve`, VS Code Live Server, Netlify, Vercel, etc.)
- Modern evergreen browser

### Local development (XAMPP)

1. Place the project under your web root (example: `C:\xampp\htdocs\Vince-Portfolio`).
2. Start Apache.
3. Open `http://localhost/Vince-Portfolio/` (adjust path to match `RewriteBase` in `.htaccess` if used).

### Local development (any static server)

```bash
# From the project root (example using Node serve — optional)
npx --yes serve .
```

Open the printed local URL. No `npm install` is required for the site itself.

### Production

Upload the repository (excluding local tooling if desired) to static hosting.  
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

---

## Folder structure

```text
Vince-Portfolio/
├── index.html, leadership.html, projects.html, …
├── assets/
│   ├── css/executive.css
│   ├── js/          # config, data, layout, pages, site, gallery-data
│   ├── images/      # logo, favicons, Vince photos
│   └── cv/          # CV PDF (place vicent-manila-cv.pdf here)
├── documentation/   # This documentation suite
├── site.webmanifest
└── .htaccess
```

Full tree: [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)

---

## Documentation map

| Document | Purpose |
|----------|---------|
| [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) | Full index of all docs |
| [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) | Goals and brand |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | System design |
| [FEATURES.md](./FEATURES.md) | Feature catalogue |
| [COMPONENT_DOCUMENTATION.md](./COMPONENT_DOCUMENTATION.md) | Modules & UI pieces |
| [PAGE_DOCUMENTATION.md](./PAGE_DOCUMENTATION.md) | Page-by-page |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Visual system |
| [RESPONSIVE_GUIDE.md](./RESPONSIVE_GUIDE.md) | Breakpoints & layouts |
| [IMAGE_ASSETS.md](./IMAGE_ASSETS.md) | Photography & icons |
| [SEO_DOCUMENTATION.md](./SEO_DOCUMENTATION.md) | Meta & discovery |
| [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) | Ship to production |
| [MAINTENANCE_GUIDE.md](./MAINTENANCE_GUIDE.md) | Content updates |
| [CHANGELOG.md](./CHANGELOG.md) | Version history |
| [VERSIONING.md](./VERSIONING.md) | SemVer policy |
| [FUTURE_ROADMAP.md](./FUTURE_ROADMAP.md) | Next steps |
| [KNOWN_ISSUES.md](./KNOWN_ISSUES.md) | Gaps & risks |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Contributor rules |
| [API_AND_EXTERNAL_SERVICES.md](./API_AND_EXTERNAL_SERVICES.md) | Integrations |
| [ACCESSIBILITY.md](./ACCESSIBILITY.md) | A11y |
| [PERFORMANCE.md](./PERFORMANCE.md) | Perf |
| [SECURITY.md](./SECURITY.md) | Security notes |
| [LICENSE.md](./LICENSE.md) | Licensing |

---

## Contact & brand

| Channel | Value |
|---------|-------|
| Phone / WhatsApp | `+255 713 582 606` |
| WhatsApp link | `https://wa.me/255713582606` |
| Email | `manilavicent@gmail.com` |
| Location | Dar es Salaam, Tanzania |
| LinkedIn | `https://www.linkedin.com/in/vicentmanila` |

Brand palette: deep navy (`#0B1F3A`), gold (`#C8A03B`), white / soft canvas.  
See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

---

## Project metadata

| Field | Value |
|-------|-------|
| Project name | Vincent Manila Portfolio |
| Subject | Vicent Manila |
| Current version | **1.2.0** (`VM.version` in `assets/js/config.js`) |
| Status | Active / production-ready |
| Type | Static multi-page portfolio |
| Repository | Local git repository (`Vince-Portfolio`) |
| Primary docs | `/documentation` |

---

## Screenshots

Add representative captures to [`screenshots/`](./screenshots/):

- `desktop-home.png`
- `desktop-project.png`
- `desktop-gallery.png`
- `mobile-home.png`
- `mobile-nav.png`
- `mobile-connect.png`

Reference them in this README once available:

```markdown
![Homepage desktop](./screenshots/desktop-home.png)
```

---

## License & acknowledgements

Licensing notes: [LICENSE.md](./LICENSE.md).

The repository evolved from a ThemeWagon Folio-style HTML shell into a custom Vicent Manila executive portfolio. Custom content, photography, branding, CSS (`executive.css`), and JS modules (`VM.*`) constitute the primary application layer.

---

## Acknowledgements

- Vicent Manila — content and photography
- Lucide Icons
- Tailwind CSS
- Google Fonts (Plus Jakarta Sans, Source Serif 4)
- ThemeWagon / Folio template heritage (base HTML distribution)

---

**Maintainer note:** Keep documentation updated whenever behaviour or public contact details change. Prefer editing `assets/js/config.js` and `assets/js/data.js` over hard-coding values in HTML.
