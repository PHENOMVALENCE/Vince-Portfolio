# Performance

**Status:** current as of v5.0.4

---

## 1. What was removed

| Removed | Why it mattered |
|---|---|
| **Tailwind CDN** | Shipped the whole engine and compiled classes in-browser on every load, blocking render. Replaced by a ~7KB reset + utility layer. |
| Count-up counters | Animation on scroll, no user value |
| Testimonial autoplay carousel | Timer running for the page's lifetime |
| Expertise autoplay carousel | Same |
| Scroll-triggered section reveals | Every section animating on scroll |
| `contactCTAs` renderer | Orphaned after the redesign — rendered nowhere |

---

## 2. Current cost

| Asset | Size |
|---|---|
| `executive.css` | 87KB (legacy) |
| `design-system.css` | ~38KB |
| `utilities.css` | ~7KB |
| JS total | ~100KB across six files |
| Appendix PDFs | ~29MB, **downloads only** |

The PDFs are linked, never loaded with the page. Each control states its file weight so a 12MB download is never a surprise on mobile data.

They were compressed from 40MB by downsampling embedded images to screen resolution, then verified byte-identical after commit and still valid (page counts unchanged).

---

## 3. Images

- `fetchpriority="high"` on the hero portrait; `loading="lazy"` everywhere below the fold.
- Explicit `width`/`height` on every image to reserve space and avoid layout shift.
- `object-position` set per image so no face is cropped badly.
- Gallery grid uses small thumbnails; full-size images load only when the lightbox opens.

---

## 4. Render path

Content renders after `DOMContentLoaded` from `VM.data`. This is a deliberate trade: one source of truth for auditable content, at the cost of content not being in the initial HTML.

Two consequences worth knowing:

- Hash links need `applyInitialHash`, because the browser's native scroll runs before the target exists.
- Search engines must execute JavaScript to see the content. Acceptable for a portfolio; not acceptable for a content site competing on organic search.

---

## 5. Outstanding

- **`lucide@latest` is unpinned** — an upstream change ships to production without warning.
- Google Fonts remain render-blocking; self-hosting would remove the last third-party dependency.
- `executive.css` is 87KB of largely superseded rules. Retiring it is the single biggest remaining win.
