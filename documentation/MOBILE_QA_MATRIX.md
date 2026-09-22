# Mobile QA Matrix

**Status:** required before merge  
**Minimum viewport:** 320px  
**Navigation breakpoint:** 900px

## Viewport matrix

Test at:

`320 · 360 · 375 · 390 · 430 · 667×375 landscape · 768 · 899 · 900 · 1024 · 1280 · 1440 · 1920`

For phone QA, prioritize 320, 375 and 430. Automated CI now verifies the full matrix above, including the 899/900px navigation boundary and a landscape phone.

## Global acceptance checks

At every tested width:

- `document.documentElement.scrollWidth <= document.documentElement.clientWidth`
- no text is clipped,
- no CTA escapes its container,
- images stay within the page,
- focus rings remain visible,
- interactive controls are at least 44px high,
- the header does not cover anchor targets,
- the back-to-top control remains reachable,
- the footer does not create horizontal overflow.

Overflow diagnostic:

```js
const vw = document.documentElement.clientWidth;
[...document.querySelectorAll('body *')]
  .filter(el => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.right > vw + 1;
  })
  .map(el => ({ tag: el.tagName, className: el.className, right: el.getBoundingClientRect().right }));
```

## Route matrix

| Route | 320–430px phones | Landscape phone | 768px | 899/900 boundary | 1024–1920px |
|---|---|---|---|---|---|
| Home | portrait/text readable; CTAs stack; publications fit | no clipped hero/actions | tablet rhythm | nav mode switches once | desktop composition |
| Leadership | chronology single rail; badges wrap | no clipped rows | metrics readable | nav mode switches once | two-column chronology |
| Projects | filters scroll; cards stack | filter rail contained | long titles wrap | nav mode switches once | editorial two-column features |
| Project | hero/evidence/related work contained | hero copy remains readable | gallery one-column | nav mode switches once | full editorial hero |
| Gallery | one-column masonry; filters scroll | lightbox controls fit | two columns | nav mode switches once | three columns |
| Speaking | hero stacks; event metadata fits | booking/actions contained | image grid expands | nav mode switches once | desktop hero |
| Appendix | download actions stack; titles wrap | PDF controls stay visible | comfortable spacing | nav mode switches once | three-column document rows |

## Mobile navigation

Under 900px:
- brand and menu button remain visible,
- opening the drawer locks background scroll,
- first drawer item receives focus,
- Tab remains inside the drawer,
- Escape closes the drawer,
- closing restores focus,
- all drawer actions remain visible within `100dvh`.

At 900px and above:
- drawer and overlay are not displayed,
- inline navigation is visible,
- the mobile toggle is hidden.

## Lightboxes

Gallery and project lightboxes:
- fit inside `100dvh`,
- show close/previous/next controls without clipping,
- support Escape and arrow keys,
- support swipe,
- return focus to the trigger,
- use contained images rather than cropping full-resolution content.

## Pull-request evidence

Before merge, record:
- CI status,
- Vercel preview URL,
- any remaining layout exceptions,
- version bump.
