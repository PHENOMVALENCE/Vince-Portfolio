# Changelog

All notable changes to the Vincent Manila Portfolio are documented here.  
Format based on [Keep a Changelog](https://keepachangelog.com/). Versioning follows [SemVer](https://semver.org/).

---

## [1.2.0] — 2026-07-24

### Added

- Complete `/documentation` suite for handover and long-term maintenance
- `VM.version` constant (`1.2.0`) surfaced in the site footer
- `robots.txt`, `sitemap.xml` (domain placeholders), and `.gitignore`
- Project galleries with lightbox on case-study pages
- Configurable `imagePosition` / gallery `position` for smarter crops
- Premium Core Competencies navy section
- Mobile navigation drawer outside header (viewport-safe)
- Global mobile polish utilities (`--page-pad-x`, lightbox z-index scale)

### Changed

- Contact details → Tanzania numbers and `manilavicent@gmail.com`
- Featured project cards and project heroes for photography-first presentation
- Connect section order and responsive card layout
- Testimonials carousel (swipe + stable slide widths)
- Lightbox stacking above fixed header

### Fixed

- Mobile menu clipped by header `backdrop-filter` containing block
- Project hero text clipping on short phones
- Hero CTA overflow from `white-space: nowrap`
- Connect three-column density on mid-width tablets

---

## [1.1.0] — 2026-07

### Added

- Official logo integration across nav/footer
- Gallery page with filters, thumbs, and lightbox
- Homepage “Leadership in Action” strip
- Web-optimized image pipeline folders under `Vince/web/`
- Dark mode theme toggle with persistence

### Changed

- Location copy → Dar es Salaam, Tanzania
- CV label → “View my CV”
- Executive UI refinement across hero, about, projects, media, contact

### Removed

- “Schedule a Meeting” style booking CTAs (direct WhatsApp / Call / Email only)

---

## [1.0.0] — Initial portfolio

### Added

- Multi-page static portfolio foundation
- Home, Leadership, Projects, Project detail, Media, Speaking shells
- Data-driven content modules (`config.js`, `data.js`)
- Shared header/footer architecture
- Tailwind CDN + custom executive styling baseline

---

## Unreleased

- Replace `example.com` in `robots.txt` / `sitemap.xml` with the live domain
- Ensure CV PDF is committed under `assets/cv/`
- Capture screenshots into `documentation/screenshots/`
