# Known Issues

**Status:** current as of v5.4.0

---

## Open

### `executive.css` still ships (87KB)
Accreted override layers predating the redesign, heavy with `!important`. `design-system.css` loads afterwards and wins, but the legacy sheet keeps causing surprises. Two it has already caused, both now neutralised and commented:

- `pointer-events: none` on `.site-header` made the **entire navbar unclickable** after the header rebuild removed the pill child that used to re-enable pointers.
- `visibility` in the drawer transition made the drawer briefly unfocusable, stranding keyboard focus behind the open menu.

**When something behaves oddly, check whether `executive.css` has an opinion about it.**

### `lucide@latest` is unpinned
An upstream release ships straight to production. Pin the version.

### Appendix PDFs are ~29MB in git history
Permanent once merged. Fine for a portfolio; worth revisiting if the repository is cloned often.

### Content pending verification
Several published metrics rest on Vicent's own CV rather than third-party documentation, and some dates conflict between sources. Tracked in [`CONTENT_NEEDS_VERIFICATION.md`](./CONTENT_NEEDS_VERIFICATION.md).

### Full assistive-technology pass still pending
Keyboard, focus, ARIA and responsive checks are documented and partially automated. A full NVDA/JAWS/VoiceOver pass is still pending.

---

## Resolved

| Issue | Resolution |
|---|---|
| **Desktop navigation hidden at every width** | `.hidden !important` beat non-important `.lg:*` variants. Header rebuilt on semantic classes with one owning media query. |
| **Entire navbar unclickable** | Inherited `pointer-events: none`. Caught only by hit-testing — synthetic `.click()` bypasses it. |
| **Header not fixed** | Rebuild dropped the Tailwind `fixed inset-x-0 top-0`; `executive.css` never set `position` itself. |
| Focus stranded behind open drawer | `visibility` was transitioned; hidden elements reject `.focus()`. |
| Desktop nav and drawer both active 900–1023px | Three breakpoint definitions disagreed. |
| Tertiary buttons 32px, filters 41px | Raised to 44px; tertiary underline moved to `::after`. |
| Duplicate `id="contact"` | Footer injected a second one. |
| Hash links dead on load | `applyInitialHash`. |
| `Download CV` 404 sitewide | the owner-supplied consultant CV is published at the stable public path. |
| LinkedIn links pointed at a non-existent profile | `/in/vicentmanila` → `/in/vicent-manila`. |
| PDFs staged as text | `.gitattributes` — CRLF conversion would have corrupted them. |
| Unverifiable testimonials and media | Removed; see [`CONTENT_VERIFICATION.md`](./CONTENT_VERIFICATION.md). |
