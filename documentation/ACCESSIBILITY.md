# Accessibility

**Target:** WCAG 2.2 AA · **Status:** current as of v5.0.4

---

## 1. Contrast — measured, not assumed

**Zero AA failures on every page.** This is verified against *rendered* surfaces rather than reasoned about, because reasoning missed three real failures:

| Token / element | Was | Now |
|---|---|---|
| `--vm-ink-muted` | `#6B7A90` — 4.01:1 | `#5A6675` — 5.37:1 |
| Gold as body text | `#B4893C` — 2.93:1 | `--vm-accent-text` `#7E6029` — 5.37:1 |
| Gold text on navy | 2.83:1 | `#D0A857` on inverse surfaces |

Gold splits into two tokens deliberately: `--vm-accent` for rules, borders and decoration where contrast rules do not apply, and `--vm-accent-text` wherever gold carries words.

### Re-running the check

```js
function lum(c){const m=c.match(/[\d.]+/g).map(Number);const f=m.slice(0,3).map(v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)});return 0.2126*f[0]+0.7152*f[1]+0.0722*f[2];}
function ratio(a,b){const l1=lum(a),l2=lum(b);return (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05);}
function bgOf(el){let e=el;while(e){const b=getComputedStyle(e).backgroundColor;if(b&&!/rgba\(0, 0, 0, 0\)|transparent/.test(b)){const m=b.match(/[\d.]+/g);if(!m[3]||parseFloat(m[3])>0.5)return b;}e=e.parentElement;}return getComputedStyle(document.body).backgroundColor;}

[...document.querySelectorAll('body *')].filter(e => {
  if (![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return false;
  const cs = getComputedStyle(e);
  if (cs.visibility === 'hidden' || cs.display === 'none') return false;
  const px = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight) >= 700;
  const need = (px >= 24 || (px >= 18.66 && bold)) ? 3 : 4.5;
  return ratio(cs.color, bgOf(e)) < need;
});
```

Walk to the nearest **opaque** ancestor. A translucent header background produces a nonsense ratio if treated as the backdrop.

---

## 2. Structure

- One `<h1>` per page; **no skipped heading levels**.
- `projectFeature` takes a heading level, because the same component sits under an `h2` on the homepage and directly under the `h1` on the projects index.
- Landmarks: `header`, `nav`, `main`, `footer`. Skip link to `#main-content` on every page.
- Image titles in the gallery are `<p>`, not headings — a caption is not a document heading.

---

## 3. Navigation and the drawer

| Requirement | Implementation |
|---|---|
| Toggle is a real `<button>` | keyboard-activatable by default |
| `aria-expanded` | synced on open/close |
| `aria-controls` | points to `#nav-drawer` |
| `aria-label` | "Open menu" / "Close menu" |
| Drawer `aria-hidden` | synced |
| Escape closes | `handleNavKeydown` |
| Focus trap | cycles `[toggle, ...focusables]` |
| Focus in | first focusable, else the drawer (`tabindex="-1"`) |
| Focus out | opener, else the toggle — never `document.body` |
| Active item | `aria-current="page"`, desktop **and** mobile |

### Two failures worth remembering

**Focus was stranded behind the open menu.** `visibility` was being transitioned, and hidden elements silently reject `.focus()`. Fixed by transitioning `transform` only.

**The entire navbar was unclickable** while looking correct — inherited `pointer-events: none`. Synthetic `.click()` bypasses pointer-events, so scripted tests passed. Only a hit test caught it:

```js
const r = el.getBoundingClientRect();
document.elementFromPoint(r.left + r.width/2, r.top + r.height/2);
```

**Test interactive elements with a hit test, not a synthetic click.**

---

## 4. Targets

All interactive elements meet 44×44px. See `RESPONSIVE_GUIDE.md` §4 for the two components that needed deliberate handling.

---

## 5. Focus visibility

```css
:where(a, button, [tabindex], input, select, textarea):focus-visible {
  outline: 2px solid var(--vm-accent);
  outline-offset: 2px;
}
```

Focus is never removed. Gallery cards carry their own `:focus-visible` ring since they act as buttons.

---

## 6. Motion

`prefers-reduced-motion: reduce` collapses all animation and transition durations, and disables smooth scrolling. Enforced globally, treated as a requirement rather than an enhancement.

Removed outright: autoplay carousels, count-up counters, scroll-triggered section reveals. Content is never gated behind an animation that may not run.

---

## 7. Colour independence

Colour is never the sole carrier of meaning. The active nav item is bold **and** underlined **and** marked `aria-current`. Filters expose `aria-pressed`, and results are announced through a polite live region.

---

## 8. Known gaps

- `executive.css` retains rules for components no longer rendered; inert but unaudited.
- Screen-reader testing has been programmatic (roles, ARIA state, focus order). No manual pass with NVDA/JAWS/VoiceOver has been done.
