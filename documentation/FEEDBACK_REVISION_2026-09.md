# Portfolio Feedback Revision — September 2026

**Release:** v5.1.0  
**Branch:** `portfolio-feedback-revision`  
**Date:** 2026-09-22

This revision converts the September feedback into a concrete implementation plan and records how each item was handled.

---

## Feedback → implementation

| Feedback | Implementation |
|---|---|
| Profile images show too much of the hands/wrist area | Portrait frames now use tighter square crops and higher focal positions. Source images are untouched. |
| Selected Work has filters/categories without concrete examples | Empty categories were removed. Every visible category now maps to an actual case study. |
| Skills need proof, not just labels | Expertise now bridges directly to Selected Work, and case studies expose an **Evidence & Resources** section. |
| Experience entries are inconsistent or missing descriptions | Career chronology was rebuilt from the updated CV. Each published role has a factual mandate and outcomes where the source provides them. |
| Copy uses too many commas and dashes | Core hero, profile, career and case-study copy was rewritten into shorter, more direct sentences. |
| Expertise content is squeezed to the left on mobile | The expertise grid now explicitly places title and body content in a usable second column on small screens, with a three-column editorial layout on desktop. |
| Add external links for articles/newsletters | A reusable external-resource renderer was added. It only renders verified URLs and uses safe external-link attributes. |
| Add the latest event | **The Men's Circle**, 17 Sep 2026, is featured on Speaking and added to the speaking gallery. |
| Use the updated CV | Career content, education, training, languages and current assignment now follow the consultant CV dated 04/09/2026. A public web CV derived from it replaces the previous site asset. |

---

## Content architecture changes

### Current professional positioning

The site now positions Vicent around four connected areas:

1. Management consulting
2. Research and evaluation
3. Strategic partnerships
4. Organizational and programme leadership

This is reflected consistently across the hero, profile, expertise, metadata and current-role proof.

### Evidence-first case studies

The case-study schema now supports:

- overview,
- challenge,
- objectives,
- role,
- strategy,
- execution,
- evidence/resources,
- outcomes,
- related case studies.

This makes professional claims inspectable rather than leaving them as skill labels.

### External resources

`VM.data.externalResources` is intentionally empty until real article/newsletter URLs are supplied. The component is already implemented and will render automatically when valid entries are added.

---

## Responsive and visual changes

- Portrait crops prioritize face and upper torso.
- Expertise layout no longer collapses content against the left edge.
- Resource rows use large, keyboard-focusable targets.
- Featured event layout collapses cleanly to one column on smaller screens.
- No existing source portrait is destructively edited.

---

## New and updated assets

- `assets/images/Vince/web/gallery/mens-circle-2026.jpg`
- `assets/cv/vicent-manila-cv.pdf`

The event image is web-optimized. The public CV is a concise web presentation derived from the supplied updated consultant CV.

---

## Source integrity

See:

- [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md)
- [CONTENT_NEEDS_VERIFICATION.md](./CONTENT_NEEDS_VERIFICATION.md)

The updated consultant CV now supersedes older source conflicts for career facts.

---

## Acceptance checks

Before merging:

- JavaScript files parse without syntax errors.
- All referenced local assets resolve.
- No stale `?v=5.0.4` references remain.
- No stale current-role metadata remains.
- 320px viewport has no horizontal overflow.
- Desktop and mobile navigation remain functional.
- Case-study filters only expose categories with cases.
- External links use safe new-tab attributes.
- The Men's Circle event image and link resolve.
- The public CV opens successfully.
