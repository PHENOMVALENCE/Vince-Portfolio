# Accessibility

**Version:** 1.2.0

---

## Table of contents

1. [Standards intent](#standards-intent)
2. [Structure](#structure)
3. [Keyboard](#keyboard)
4. [ARIA](#aria)
5. [Focus](#focus)
6. [Images](#images)
7. [Colour and motion](#colour-and-motion)
8. [Touch targets](#touch-targets)
9. [Testing](#testing)

---

## Standards intent

Aim for WCAG 2.2 AA patterns where practical for a marketing/portfolio site.

---

## Structure

- Landmark regions: header, main, footer, nav labels
- Skip link to `#main-content`
- Heading hierarchy per page (H1 in hero / page title)
- Lists for nav and skill tags where marked up as `<ul>`

---

## Keyboard

| Control | Keys |
|---------|------|
| Mobile menu | Enter/Space on toggle; Escape closes; Tab cycles (focus trap) |
| Lightbox | Escape, ArrowLeft, ArrowRight |
| Filters / dots | Button focus + Enter/Space |

---

## ARIA

| Pattern | Attributes |
|---------|------------|
| Menu button | `aria-expanded`, `aria-controls="nav-drawer"`, `aria-label` |
| Drawer | `role="dialog"`, `aria-modal`, `aria-label="Mobile navigation"` |
| Lightbox | `role="dialog"`, `aria-modal`, live counter |
| Gallery cards | `role="button"`, `tabindex="0"`, descriptive `aria-label` |
| Theme toggle | `aria-label="Toggle dark mode"` |

---

## Focus

- Visible `:focus-visible` styles on interactive controls
- Focus moves into menu/lightbox on open
- Focus returns to trigger on close

---

## Images

Meaningful `alt` text on content images; decorative icons marked `aria-hidden="true"`.

---

## Colour and motion

- Do not rely on colour alone for active nav (underline / gold weight)
- `@media (prefers-reduced-motion: reduce)` disables or shortens transitions and autoplay

---

## Touch targets

Primary controls target ≥44×44px (nav toggle, CTAs, lightbox buttons, testimonial controls).

---

## Testing

- Keyboard-only pass on Home, Projects, Gallery, Connect
- Screen reader spot-check of menu and lightbox
- Contrast check for gold text on navy and body text on canvas
