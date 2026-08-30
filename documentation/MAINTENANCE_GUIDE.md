# Maintenance Guide

**Version:** 1.2.0

---

## Table of contents

1. [Principles](#principles)
2. [Contact details](#contact-details)
3. [Curriculum vitae](#curriculum-vitae)
4. [Biography and hero](#biography-and-hero)
5. [Leadership metrics](#leadership-metrics)
6. [Experience timeline](#experience-timeline)
7. [Projects](#projects)
8. [Gallery](#gallery)
9. [Testimonials](#testimonials) — *none published; see below*
10. [Media / Insights](#media--insights)
11. [Speaking](#speaking)
12. [Navigation](#navigation)
13. [Branding](#branding)
14. [Version bump](#version-bump)
15. [Deploy](#deploy)

---

## Principles

1. Prefer editing **data modules** over HTML shells.
2. Keep documentation in sync when behaviour changes.
3. Test mobile + desktop after visual changes.
4. Do not commit secrets (none expected today).

---

## Contact details

Edit `assets/js/config.js`:

- `VM.site.email`, `phone`, `phoneIntl`
- `VM.site.contact.whatsapp`, `tel`, `mailto`, `email`, `phone`
- LinkedIn, location, CV path

Display format for phone: `+255 713 582 606`.  
WhatsApp: `https://wa.me/255713582606`.

Also update JSON-LD in `index.html` if email/telephone change.

---

## Curriculum vitae

1. Export PDF.
2. Save as `assets/cv/vicent-manila-cv.pdf` (or update `VM.site.cv`).
3. Hard-refresh and click CV in header / Connect.

---

## Biography and hero

Edit `VM.data.hero` and `VM.data.about` in `assets/js/data.js`.  
Portrait paths: `VM.images` in `config.js`.

---

## Leadership metrics

Edit `VM.data.impactStats` and `VM.data.hero.stats`.

---

## Experience timeline

Edit `VM.data.experience` array (period, title, organization, country, overview, responsibilities, achievements, impact, skills).

---

## Projects

1. Add/update object in `VM.data.projects`.
2. Required: `slug`, content fields, `image`, `imagePosition`, `gallery`, `related`.
3. Set `featured: true` for homepage.
4. Register category in `projectCategories` if new.
5. Open `project.html?slug=your-slug`.

---

## Gallery

1. Add image files under `Vince/gallery/` (+ thumb).
2. Append entry to `VM.galleryImages` in `gallery-data.js`.
3. Use existing `category` keys or extend `galleryFilters`.

---

## Testimonials

**There are no published testimonials.** All three previously on the site were unverifiable — one cited the placeholder string "Leading Financial Institution" as an organization — and were removed.

Before adding one, you need: the real name, real role, real organization, the verbatim quotation, and documented approval to publish it. Record the source in `CONTENT_VERIFICATION.md`. A smaller number of verified endorsements is more credible than several unverifiable ones.

---

## Media / Insights

Edit `VM.data.mediaItems` and `mediaFilters`.

---

## Speaking

Edit `speakingTopics`, `speakingEngagements` in `data.js`. Page: `speaking.html`.

---

## Navigation

Edit `VM.site.nav` in `config.js`. Footer links are duplicated in `layout.js` `renderFooter` — update both if adding pages.

---

## Branding

| Asset | Location |
|-------|----------|
| Logo | `assets/images/vincelogo.png` |
| Colours | `:root` in `assets/css/design-system.css` (see `../DESIGN.md`) |
| Fonts | Google Fonts link in HTML heads |

---

## Version bump

1. Update `VM.version` in `config.js`.
2. Update [CHANGELOG.md](./CHANGELOG.md).
3. Tag release `vX.Y.Z` (see [VERSIONING.md](./VERSIONING.md)).

---

## Deploy

Follow [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).
