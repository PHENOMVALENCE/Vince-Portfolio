# Component Documentation

**Version:** 1.2.0

This project does not use a React/Vue component framework. “Components” are **reusable JS render functions and CSS patterns**.

---

## Table of contents

1. [Module components](#module-components)
2. [UI patterns](#ui-patterns)
3. [Page modules](#page-modules)

---

## Module components

### `VM.layout.renderHeader(currentPage)`

| | |
|--|--|
| **Purpose** | Fixed site header + mobile overlay/drawer markup |
| **Inputs** | `currentPage` string (`body.dataset.page`) |
| **Outputs** | HTML string (header + overlay + drawer) |
| **Dependencies** | `VM.site`, logo path, Lucide |
| **Responsive** | Desktop nav `lg+`; drawer `<1024px` |
| **Interactions** | Toggle wired in `VM.ui.initNav` |

### `VM.layout.renderFooter()`

| | |
|--|--|
| **Purpose** | Connect section + site footer + back-to-top |
| **Inputs** | `VM.site`, `VM.images`, `VM.version` |
| **Outputs** | HTML string injected into `#site-footer` |
| **Dependencies** | Contact URLs, portrait image |

### `VM.layout.contactCTAs(compact)`

| | |
|--|--|
| **Purpose** | Compact WhatsApp / Call / Email button grid |
| **Inputs** | `compact` boolean (CSS density) |
| **Used by** | Speaking booking area via `.contact-ctas-slot` |

### `VM.pages.projectCard(p, i)`

| | |
|--|--|
| **Purpose** | Project teaser card |
| **Inputs** | Project object, index (animation delay) |
| **Outputs** | Article HTML with `--img-pos` |
| **Styling** | `.project-card*` |

### Gallery / project lightbox controllers

| | |
|--|--|
| **Purpose** | Full-screen image viewer |
| **Inputs** | Image list `{src, alt, …}` |
| **Behaviours** | Prev/next, Escape, backdrop, swipe, focus return |
| **Files** | `initGallery`, `initProjectGallery` |

### `VM.ui` methods

| Method | Role |
|--------|------|
| `refreshIcons` | `lucide.createIcons()` |
| `setTheme` / `toggleTheme` | Dark mode |
| `openNav` / `closeNav` / `toggleNav` | Mobile menu + scroll lock + focus trap |
| `initReveal` | Scroll fade-up |
| `initCounters` | Metric count-up |
| `initTimeline` | Timeline progress |
| `initTestimonials` | Carousel |
| `initBackToTop` | Floating control |

---

## UI patterns

| Pattern | CSS / markup | Notes |
|---------|--------------|-------|
| Section label | `.section-label` | Gold uppercase eyebrow |
| Section title | `.section-title` | Serif display |
| Executive card | `.card-executive` | White/navy card shell |
| Portrait frame | `.portrait-frame*` | Gold ring framing |
| Skill card | `.skills-card*` | Competency feature card |
| Connect card | `.connect-card*` | Contact channels |
| Stat card | `.stat-card` | Metric tile |
| Filter chip | `.filter-btn` / `.gallery-filter-btn` | Active gold state |
| Reveal | `.reveal` / `.reveal.in` | Entrance motion |

### Example usage (conceptual)

```js
const html = VM.pages.projectCard(VM.getProject('leading-aiesec-rwanda'), 0);
```

---

## Page modules

| Function | Page |
|----------|------|
| `renderHome` | Home |
| `renderLeadership` | Leadership |
| `renderProjects` | Projects list |
| `renderProject` + `initProjectRedirect` | Case study |
| `renderGallery` + `initGallery` | Gallery |
| `renderMedia` | Insights |
| `renderSpeaking` | Speaking |

Each returns an HTML string assigned to `#main-content` (except project detail, which fills `#project-root` after render).
