# Changelog

Newest first. Versions track the asset `?v=` query.

---

## 5.2.1 — External evidence links — 2026-09-22

- Added the Full Shangwe article covering Barrick's sponsorship of the AIESEC university-student conference at UDOM.
- Added the owner-supplied Mzumbe University Career Fair Instagram post.
- Linked both resources from the Tanzania national-partnerships case study.
- Published both in the external resources section.
- Updated content-verification records and bumped static asset cache identifiers to 5.2.1.

---

## 5.2.0 — Final asset integration — 2026-09-22

### Assets
- Replaced the generated web CV with the owner-supplied September 2026 consultant CV at the stable public path.
- Added the complete Men's Circle campaign artwork set under a descriptive event directory.
- Removed the superseded single Men's Circle gallery image.

### Portfolio integration
- Updated the featured Speaking event to use the final lineup artwork.
- Added the lineup, host, Ram Hadji, Elizabeth Feria and cover artwork to the Gallery archive.
- Preserved the stable CV URL used by download actions and case-study evidence links.

### Maintenance
- Documented the event asset structure and current public CV behavior.
- Bumped static asset cache identifiers to 5.2.0.

---

## 5.1.1 — Portrait crop refinement — 2026-09-22

- Tightened the two primary profile portraits to a head-and-upper-torso crop.
- Removed visible wrist accessories, including bracelets or watches, from the primary portrait framing without modifying the source photography.
- Kept the crop responsive and consistent across desktop and mobile.
- Bumped static asset cache identifiers to 5.1.1.

---

## 5.1.0 — Portfolio feedback revision — 2026-09-22

### Content

- Rebuilt the current professional record from the consultant CV dated 04/09/2026.
- Current role is now **Management Consultant, INNOVEX Development Consulting Ltd**, including the Field Monitoring & Evaluation assignment for Tanga Yetu Project Phase 2.
- Closed the Mo Dewji Foundation role at Jun 2026.
- Restored CV-verified AIESEC International and Belarus assignments.
- Added the Digital Lion Program and aligned published languages with the current CV.
- Rewrote core copy into shorter, more direct professional language.

### Evidence & selected work

- Removed empty project filter categories.
- Reworked case-study claims to match primary evidence.
- Added **Evidence & Resources** links to case studies.
- Added a direct bridge from expertise to supporting case studies.
- Added infrastructure for verified external articles and newsletters without publishing placeholder links.

### Speaking & events

- Added **The Men's Circle** (17 Sep 2026) as a featured speaking engagement.
- Added event artwork to the speaking archive.
- Added safe external-link rendering for event and future article/newsletter URLs.

### UI / responsive

- Tightened portrait crops to keep attention on the face and upper torso.
- Fixed the mobile expertise layout that compressed content against the left side.
- Added responsive featured-event and evidence-resource components.

### Metadata & release

- Updated structured data to **Management Consultant** at **INNOVEX Development Consulting Ltd**.
- Removed stale Kinyarwanda structured-data metadata.
- Updated descriptions across site shells.
- Bumped the cache/version identifier to **5.1.0**.

### Documentation

- Added [FEEDBACK_REVISION_2026-09.md](./FEEDBACK_REVISION_2026-09.md).
- Rewrote content verification and open-verification records around the updated CV.

---

## 5.0.4 — Navigation revision, light-only theme, documentation

### Fixed — critical

- **The entire navbar was unclickable.** `executive.css` sets `pointer-events: none` on `.site-header`; the old floating-pill child re-enabled it. The rebuilt header has no such child, so every control — brand, links, CTA, toggle — was inert while looking correct. Synthetic `.click()` bypasses `pointer-events`, so scripted tests passed; only a hit test caught it.
- **The header was not fixed.** The rebuild dropped Tailwind's `fixed inset-x-0 top-0`, and `executive.css` never set `position` itself, so the bar scrolled away.

### Fixed

- Drawer focus no longer depends on frame timing.
- Focus restoration never lands on `document.body`.
- Tertiary buttons 32px → 44px.
- Filter pills 41px → 44px.

### Changed

- Dark theme removed. The site ships a single light theme.
- Navigation breakpoint 1024px → 900px.
- Brand name remains visible down to 320px.

### Documentation

- Added NAVIGATION.md.
- Rewrote architecture, technology, responsive, accessibility, performance, features, component, page and design-system documentation.

---

## 4.6.0 — Header rebuild and contact CTAs

- Rebuilt the header on semantic classes.
- Added WhatsApp and phone CTAs.
- Removed the orphaned contact renderer.
- Added active-navigation state with `aria-current="page"`.

---

## 4.0.0 — Redesign and content correction

### Design

- Introduced the warm editorial design system.
- De-carded profile, philosophy, expertise, metrics and chronology.
- Removed autoplay expertise and testimonial patterns.

### Content

- Repositioned the portfolio around management consulting and broader professional work.
- Introduced primary-source verification as a standing content rule.

### Performance

- Removed the runtime Tailwind CDN.
