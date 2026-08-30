# Changelog

Newest first. Versions track the asset `?v=` query.

---

## 5.0.4 — Navigation revision, light-only theme, documentation

### Fixed — critical

- **The entire navbar was unclickable.** `executive.css` sets `pointer-events: none` on `.site-header`; the old floating-pill child re-enabled it. The rebuilt header has no such child, so every control — brand, links, CTA, toggle — was inert while looking correct. Synthetic `.click()` bypasses `pointer-events`, so scripted tests passed; only a hit test caught it.
- **The header was not fixed.** The rebuild dropped Tailwind's `fixed inset-x-0 top-0`, and `executive.css` never set `position` itself, so the bar scrolled away.

### Fixed

- Drawer focus no longer depends on frame timing. `visibility` was being transitioned, and hidden elements silently reject `.focus()`, stranding focus behind the open menu. Now `transform` only.
- Focus restoration never lands on `document.body` — falls back to the toggle.
- Tertiary buttons 32px → 44px; the gold underline moved to `::after` pinned under the text so the target grows without the rule drifting.
- Filter pills 41px → 44px.

### Changed

- **Dark theme removed.** The site ships a single light theme. Toggle, stored preference, inline bootstrap script and all `.dark` token overrides are gone. `executive.css` retains inert `.dark` rules.
- Navigation breakpoint 1024px → **900px** — measured, the content occupies 801px of 895px at 900px, so tablets get real navigation.
- Brand name now visible at every width including 320px (95px of slack). The previous 380px cutoff hid it on common devices.

### Documentation

- New [NAVIGATION.md](./NAVIGATION.md).
- Rewritten: ARCHITECTURE, TECHNOLOGY_STACK, RESPONSIVE_GUIDE, ACCESSIBILITY, PERFORMANCE, FEATURES, COMPONENT_DOCUMENTATION, PAGE_DOCUMENTATION, DESIGN_SYSTEM, KNOWN_ISSUES, README, DOCUMENTATION_INDEX — all described the pre-redesign site.
- `DESIGN.md` synced to the shipped tokens.

---

## 4.6.0 — Header rebuild and contact CTAs

- Rebuilt the header on semantic classes after `.hidden { !important }` beat the non-important `.lg:*` variants and hid the desktop nav at **every** width.
- Added WhatsApp and phone CTAs on +255 713 582 606 across contact, speaking, appendix, leadership and the drawer.
- Removed the orphaned `contactCTAs` renderer — nothing emitted its mount point.
- Active nav item: ink text with a gold underline, plus `aria-current="page"` on desktop.

---

## 4.0.0 — Redesign and content correction

### Design

- New design system from the `awesome-design-md` reference library. Warm paper canvas replacing the cool `#F8FAFC` SaaS tint; radius capped at 8px (was 18/26px); one shadow, photographs only; serif reserved for editorial voice.
- De-carded the profile, philosophy, expertise, metrics and chronology into hairline-separated editorial layouts.
- Removed the autoplay expertise carousel, count-up counters and testimonial carousel. `prefers-reduced-motion` enforced.

### Content

- Repositioned as management consultant; AIESEC became a chapter of a broader career.
- Added roles absent from the site entirely: INNOVEX, MigLine, VMAN Enterprises, and the 2019–2022 AIESEC progression.
- Removed 3 unverifiable testimonials, 5 media items with no source URLs, the media route, "AIESEC in Belarus", and unsupported metrics.

### Fixed

- LinkedIn links pointed at `/in/vicentmanila` — not the profile.
- "Download CV" returned 404 sitewide; a redacted CV is now published with date of birth, marital status and the referees block removed.
- Duplicate `id="contact"`; hash links dead on load; telephone removed from `Person` schema.
- `.gitattributes` added — git sniffed the PDFs as text and would have corrupted them via CRLF conversion.

### Performance

- Removed the runtime Tailwind CDN for a ~7KB reset + utility layer.
