# Features

**Status:** current as of v5.0.4

---

## Routes

| Route | Purpose |
|---|---|
| `index.html` | Positioning, credibility, selected work, profile, philosophy, expertise, impact, chronology, footprint, photography, contact |
| `leadership.html` | Leadership thesis, metrics, full chronology, international footprint |
| `projects.html` | Case-study index with category filters |
| `project.html?slug=` | Individual case study + gallery + related |
| `gallery.html` | Visual archive with filters and lightbox |
| `speaking.html` | Speaker positioning, topics, engagements, booking |
| `appendix.html` | Primary-source evidence — published documents and available-on-request |

---

## Navigation

Six top-level destinations plus a CTA. Desktop inline from 900px; drawer below. Fully documented in [`NAVIGATION.md`](./NAVIGATION.md).

Appendix sits in the footer and mobile drawer rather than the top bar, keeping the top level at six.

---

## Contact

WhatsApp and phone actions on **+255 713 582 606**, present in the contact band, speaking booking, appendix and leadership sections, and the mobile drawer. Both carry accessible labels naming the number.

WhatsApp and phone are the primary channels in this market, so they are buttons rather than text buried in a paragraph.

---

## Case studies

Full-bleed image, index number, category, serif title, **one measurable outcome**, then a tertiary link. Filters expose `aria-pressed` and announce results through a polite live region.

---

## Gallery

Masonry archive (1 / 2 / 3 columns), category filters, and a lightbox with focus trap, Escape-to-close and focus return. Grid uses thumbnails; full-size images load only on open.

---

## Appendix

Five published documents with page counts and file weights stated. Signed agreements and audit reports are **listed but not published** — they carry counterparty signatures and organisational financials, and are not one party's to release.

---

## Theming

**A single light theme.** The dark theme and its toggle were removed at the owner's request — a half-maintained second theme is worse than none.

---

## Deliberately absent

| Not present | Why |
|---|---|
| Testimonials | None verifiable. See `CONTENT_VERIFICATION.md`. |
| Media / press page | All five items lacked source URLs. |
| Autoplay carousels | Motion without user value |
| Count-up counters | Figures are evidence, not spectacle |
| Contact form | No backend; direct channels are better here |
| Analytics | None. No cookie banner needed as a result. |
