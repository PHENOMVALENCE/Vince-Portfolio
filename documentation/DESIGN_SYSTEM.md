# Design System

**Version:** 1.2.0  
**Source of truth:** `assets/css/executive.css` `:root` + inline Tailwind theme

---

## Table of contents

1. [Brand colours](#brand-colours)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Layout](#layout)
5. [Radii and shadows](#radii-and-shadows)
6. [Buttons](#buttons)
7. [Cards](#cards)
8. [Icons](#icons)
9. [Motion](#motion)
10. [Breakpoints](#breakpoints)
11. [Z-index scale](#z-index-scale)
12. [Accessibility colours](#accessibility-colours)

---

## Brand colours

| Token | Hex | Role |
|-------|-----|------|
| `--navy` | `#0B1F3A` | Primary brand / dark surfaces |
| `--navy-secondary` | `#1C3557` | Elevated dark panels |
| `--navy-950` | `#071A33` | Deepest overlays |
| `--gold` | `#C8A03B` | Accent, labels, CTAs |
| `--gold-400` / `--gold-500` | lighter golds | Highlights |
| `--canvas` / `--surface` | `#F8FAFC` / `#F6F8FB` | Page background |
| `--white` | `#FFFFFF` | Cards |
| `--ink` / `--muted` | `#162033` / `#667085` | Text |

Tailwind mirrors: `navy`, `navy-secondary`, `gold`, `canvas`, `ink`, `muted`.

---

## Typography

| Role | Family | Notes |
|------|--------|-------|
| UI / body | Plus Jakarta Sans | 400–700 |
| Display | Source Serif 4 | Hero & section titles |

Utilities:

- `.section-label` — ~12px, uppercase, gold, tracked
- `.section-title` — `clamp(1.7rem, 5.5vw, 2.6rem)`
- `.hero-title` — `clamp(2.35rem, 9vw, 3.85rem)`

Long emails use `overflow-wrap: anywhere` on Connect CTAs.

---

## Spacing

| Token / pattern | Value |
|-----------------|-------|
| `--page-pad-x` | `clamp(1rem, 4.2vw, 1.5rem)` |
| `--section-pad-y` | `clamp(3rem, 7vw, 6rem)` |
| `.section-pad` | Vertical section rhythm |
| Card padding | ~1.15–2rem depending on component |

---

## Layout

| Token | Value |
|-------|-------|
| `--max-w` / Tailwind `max-w-8xl` | 1280px |
| Page columns | CSS Grid / Flex with `gap` |
| Project cards | 1 / 2 / 3 columns by breakpoint |

---

## Radii and shadows

| Token | Approx |
|-------|--------|
| `--radius` | 14px |
| `--radius-lg` | 20px |
| `--shadow-soft` | Soft navy-tinted elevation |
| `--shadow-lift` | Stronger lift |

---

## Buttons

| Style | Appearance |
|-------|------------|
| Gold primary | `bg-gold text-navy` |
| Navy primary | `bg-navy text-white` |
| Secondary outline | Border + hover gold |
| Connect channel buttons | WhatsApp green / gold / blue treatments |
| Min touch | ≥44×44px on interactive controls |

`.btn-lift` adds hover translate + shadow (disabled under reduced motion where overridden).

---

## Cards

- `.card-executive` — default content card
- `.project-card` — image + body + CTA
- `.skills-card` — competency on navy section
- `.connect-card` — contact channel
- `.stat-card` — metric
- `.gallery-card` — masonry item

---

## Icons

Lucide line icons, typically gold or muted. Regenerated after DOM injection via `VM.ui.refreshIcons()`.

---

## Motion

| Pattern | Behaviour |
|---------|-----------|
| `.reveal` | Fade/slide up on intersect |
| Card hover | `translateY(-3px…-6px)` |
| Image hover | Scale ~1.03 |
| Nav drawer | `translateX` 0.3s |
| Reduced motion | Transitions shortened / transforms removed |

---

## Breakpoints

See [RESPONSIVE_GUIDE.md](./RESPONSIVE_GUIDE.md). Key cuts: 360, 480, 640, 768, 1024, 1440.

---

## Z-index scale

| Token | Value | Use |
|-------|-------|-----|
| `--z-nav-backdrop` | 9998 | Menu backdrop |
| `--z-nav-drawer` | 9999 | Menu panel |
| `--z-header` | 10000 | Site header |
| `--z-lightbox` | 10050 | Image lightbox |

---

## Accessibility colours

Gold on navy and white on navy meet executive UI contrast for primary text. Muted text (`--muted`) is for secondary copy — keep body text on `--ink` / white for long reading.
