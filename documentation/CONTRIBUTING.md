# Contributing

**Status:** current as of v5.4.0

Contributions to this portfolio follow evidence-first content rules and mobile-first engineering standards.

---

## Ground rules

- Branch from the latest `main`.
- Use small, coherent commits.
- Keep authorship under the owner's configured Git identity.
- Do not add AI attribution or co-author trailers.
- Do not publish unsupported professional claims.
- Do not introduce a framework for a change the existing static stack can handle.
- Do not merge a PR automatically unless explicitly requested.

See [ENGINEERING_WORKFLOW.md](./ENGINEERING_WORKFLOW.md) for the complete workflow.

---

## Branch names

```text
feature/short-description
fix/issue-description
content/update-area
chore/tooling-or-docs
```

---

## Commit messages

Use concise imperative subjects:

```text
style: harden responsive layouts across all pages
fix: prevent project hero clipping on phones
feat: add external resource section
ci: validate responsive portfolio on pull requests
docs: document mobile QA matrix
```

---

## Coding standards

- Keep browser JS in the existing `window.VM` modules.
- Escape dynamic user-facing strings with the existing `esc()` helpers.
- Prefer semantic classes over utility-only page structure.
- Put shared responsive behaviour in `assets/css/design-system.css`.
- Respect `prefers-reduced-motion`.
- Maintain visible focus states and accessible names.
- Keep touch targets at least 44×44px.
- Use `min-width: 0` and safe wrapping for grid/flex children carrying long text.

---

## Responsive validation

Run:

```bash
node scripts/validate-site.mjs
```

Then complete [MOBILE_QA.md](./MOBILE_QA.md).

Minimum manual set:

- 320×568
- 390×844
- 768×1024
- 899px and 900px navigation boundary
- 1280×800
- landscape phone

Horizontal overflow at 320px is a release blocker.

---

## Images

- Optimize before commit.
- Use descriptive filenames.
- Keep explicit focal points for cropped photography.
- Verify portraits at phone and desktop sizes.
- Add meaningful alt text.
- Never publish event artwork outside the approved portfolio scope.

---

## Pull requests

A UI PR should include:

- summary,
- affected routes,
- responsive changes,
- accessibility considerations,
- validation results,
- documentation changes,
- release/cache version.

CI runs automatically on PR open, synchronize and reopen.

---

## Documentation

Update the relevant file under `documentation/` in the same PR as the behaviour change.

User-visible changes require a `CHANGELOG.md` entry.
