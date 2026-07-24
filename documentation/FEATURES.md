# Features

**Version:** 1.2.0

---

## Table of contents

1. [Feature catalogue](#feature-catalogue)
2. [Feature details](#feature-details)

---

## Feature catalogue

| Feature | Primary files |
|---------|----------------|
| Responsive navigation | `layout.js`, `site.js`, `executive.css` |
| Theme toggle | `site.js`, inline head script |
| Homepage hero | `pages.js` `renderHome`, CSS hero rules |
| Executive profile / About | `pages.js`, `data.js` `about` |
| Leadership timeline | `pages.js`, `site.js` `initTimeline` |
| Impact metrics / counters | `data.js` `impactStats`, `site.js` `initCounters` |
| Featured & all projects | `pages.js` `projectCard`, `data.js` `projects` |
| Project case studies | `pages.js` `initProjectRedirect` |
| Project gallery + lightbox | `pages.js`, lightbox CSS |
| Main gallery + filters | `gallery-data.js`, `pages.js` `initGallery` |
| Core competencies | `pages.js` skills section, CSS `.skills-*` |
| Testimonials carousel | `pages.js`, `site.js` `initTestimonials` |
| Media / Insights | `pages.js` `renderMedia` |
| Speaking page | `pages.js` `renderSpeaking` |
| Connect / contact | `layout.js` `renderFooter` |
| WhatsApp / Call / Email | `config.js` contact URLs |
| CV download | `config.js` `cv` |
| Scroll reveal | `site.js` `initReveal` |
| Back to top | `site.js` `initBackToTop` |
| SEO Person schema | `index.html` JSON-LD |
| PWA manifest | `site.webmanifest` |

---

## Feature details

### Responsive navigation

- **Purpose:** Access all primary destinations on any viewport.
- **How:** Desktop `<ul>` (≥1024px); mobile fixed drawer below header with `100dvh` height, focus trap, scroll lock.
- **Files:** `layout.js`, `site.js`, CSS `.nav-drawer*`, `.site-header*`
- **Future:** Add Speaking to primary nav if desired.

### Theme toggle

- **Purpose:** Light/dark preference.
- **How:** `html.dark` class; `localStorage` key `vm-theme`; FOUC prevention in `<head>`.
- **Files:** HTML head snippet, `site.js` `setTheme`

### Homepage hero

- **Purpose:** Brand-first identity and CTAs.
- **How:** Ordered mobile stack with portrait; desktop two-column grid.
- **Files:** `pages.js` `#hero`, CSS mobile hero block

### Executive profile

- **Purpose:** Biography, expertise, education snapshot.
- **How:** Data from `VM.data.about`; cards and portrait frame.
- **Files:** `data.js`, `pages.js` `#about`

### Leadership timeline

- **Purpose:** Chronological career narrative.
- **How:** Vertical timeline; progress bar via scroll math.
- **Files:** `experience` array, `initTimeline`

### Impact metrics

- **Purpose:** Quantify leadership scale.
- **How:** `[data-count]` animated when in view.
- **Files:** `impactStats`, `initCounters`

### Projects showcase & case studies

- **Purpose:** Portfolio proof points.
- **How:** Cards from `projects`; detail page hydrates `#project-root` from `?slug=`.
- **Fields:** overview, challenge, objectives, role, strategy, execution, results, impact, gallery, related, `imagePosition`
- **Files:** `data.js`, `pages.js`

### Galleries & lightbox

- **Purpose:** Visual storytelling.
- **How:** Project gallery grid + site Gallery masonry; shared lightbox pattern (z-index above header).
- **Files:** `gallery-data.js`, `pages.js`, CSS `.lightbox`

### Core competencies

- **Purpose:** Skill taxonomy with premium navy section.
- **How:** Ten categories from `skillCategories`; Lucide icon map; tags.
- **Files:** `pages.js` `#skills`, CSS `.skills-section`

### Testimonials

- **Purpose:** Social proof.
- **How:** Flex track carousel; dots; swipe; autoplay with reduced-motion respect.
- **Files:** `testimonials`, `initTestimonials`

### Connect / contact integrations

- **Purpose:** Conversion.
- **How:** Cards link to `wa.me`, `tel:`, `mailto:` from config — no forms.
- **Files:** `config.js`, `layout.js`
- **Future:** Optional form backend if needed.

### CV download

- **Purpose:** Share full résumé.
- **How:** Anchor to `assets/cv/vicent-manila-cv.pdf`.
- **Note:** PDF must exist on disk (see Known Issues if missing).

### Accessibility & motion

- Skip link, ARIA on menu/lightbox, focus-visible, `prefers-reduced-motion`.
