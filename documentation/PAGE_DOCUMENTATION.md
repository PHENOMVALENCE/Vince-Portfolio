# Page Documentation

**Version:** 1.2.0

---

## Table of contents

1. [Shared shell](#shared-shell)
2. [Home](#home-indexhtml)
3. [Leadership](#leadership-leadershiphtml)
4. [Projects](#projects-projectshtml)
5. [Project detail](#project-detail-projecthtml)
6. [Gallery](#gallery-galleryhtml)
7. [Insights / Media](#insights--media-mediahtml)
8. [Speaking](#speaking-speakinghtml)

---

## Shared shell

Every page includes:

- Skip link → `#main-content`
- `#site-header` / `#main-content` / `#site-footer`
- Theme bootstrap, Tailwind, Lucide, fonts, favicons, `executive.css`
- Scripts: `config` → `data` → (`gallery-data`) → `layout` → `pages` → `site`

SEO: each page sets `<title>` and `<meta name="description">`. Theme color `#0B1F3A`.

---

## Home (`index.html`)

| | |
|--|--|
| **Purpose** | Primary landing / executive narrative |
| **URL** | `/` or `index.html` |
| **data-page** | `home` |
| **Scripts** | Includes `gallery-data.js` |

**Sections:** `#hero`, organizations strip, `#about`, `#experience`, `#projects`, `#leadership-action`, `#impact`, `#skills`, `#testimonials`, `#insights`, plus Connect in footer (`#contact`).

**SEO:** JSON-LD `Person` (name, image, jobTitle, address TZ, email, telephone, sameAs LinkedIn, brand logo).

**Responsive:** Dedicated mobile hero order and portrait; see Responsive Guide.

---

## Leadership (`leadership.html`)

| | |
|--|--|
| **Purpose** | Deep leadership journey |
| **data-page** | `leadership` |

**Sections:** Intro, impact stats, full timeline, organizations served, global contributions.

**Navigation:** Primary nav “Leadership”.

---

## Projects (`projects.html`)

| | |
|--|--|
| **Purpose** | Filterable project index |
| **data-page** | `projects` |

**Sections:** Header, `#project-filters`, `#projects-grid` of `projectCard`.

**Filters:** Keys from `projectCategories` (`all`, leadership, business-development, …).

---

## Project detail (`project.html`)

| | |
|--|--|
| **Purpose** | Case study |
| **URL** | `project.html?slug=<slug>` |
| **data-page** | `project` |

**Sections:** Full-bleed hero, overview→execution prose, Project Gallery + lightbox, Impact Metrics, Related Projects.

**Images:** `project.image` + `project.gallery[]` with `position`.

**Limitation:** Missing slug redirects to projects list.

---

## Gallery (`gallery.html`)

| | |
|--|--|
| **Purpose** | Photography collection |
| **data-page** | `gallery` |
| **Scripts** | Requires `gallery-data.js` |

**Sections:** Intro, horizontal/wrapping filters, masonry `#gallery-grid`, lightbox.

**Data:** 13 images in `VM.galleryImages` (categories: speaking, leadership, partnerships, events, recognition).

---

## Insights / Media (`media.html`)

| | |
|--|--|
| **Purpose** | Thought leadership / press-style cards |
| **data-page** | `media` |

**Sections:** Filters (`mediaFilters`), `#media-grid` editorial cards from `mediaItems`.

---

## Speaking (`speaking.html`)

| | |
|--|--|
| **Purpose** | Speaking topics, engagements, booking CTAs |
| **data-page** | `speaking` |
| **Nav** | Footer (not primary header nav) |

**Sections:** Topics, engagements, optional gallery strip, `#booking` with `contactCTAs`.

**CTA copy:** “Book a Speaking Engagement” (no calendly / Schedule a Meeting).
