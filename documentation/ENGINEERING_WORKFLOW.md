# Engineering Workflow

**Status:** current as of v5.4.0

This repository uses a small-commit, pull-request-first workflow so visual, content and infrastructure changes stay independently reviewable.

---

## Branching

Start from the latest `main`.

Recommended names:

- `feature/<area>`
- `fix/<issue>`
- `content/<area>`
- `chore/<area>`

Do not implement substantial work directly on `main`.

---

## Commit discipline

Prefer one coherent concern per commit.

A typical UI revision sequence is:

1. `style:` responsive/layout foundation
2. `refactor:` semantic markup or shared wrappers
3. `fix:` page-specific behaviour
4. `ci:` validation or workflow changes
5. `docs:` documentation and QA record
6. `chore:` release/cache version

Commits use the owner's configured Git identity. Do not add AI attribution or co-author trailers.

---

## Validation

Before opening a PR:

```bash
node scripts/validate-site.mjs
```

For layout-facing work also complete [MOBILE_QA.md](./MOBILE_QA.md).

Minimum manual widths:

- 320px
- 390px
- 768px
- 899px and 900px
- 1280px
- one landscape phone viewport

---

## Pull-request CI

`.github/workflows/quality.yml` runs when a pull request is opened, synchronized or reopened. It also runs on pushes to `main`.

The workflow validates the static site and responsive invariants. It does not deploy or merge.

---

## Pull-request content

Every UI PR should state:

- what changed,
- routes affected,
- responsive behaviour,
- accessibility considerations,
- validation performed,
- documentation changed,
- release/cache version.

Do not merge automatically unless explicitly requested.

---

## Content changes

Professional claims remain evidence-first.

Before publishing:

1. update `assets/js/data.js`,
2. identify the source,
3. update `CONTENT_VERIFICATION.md`,
4. keep unsupported items in `CONTENT_NEEDS_VERIFICATION.md`.

Do not infer missing metrics, dates or URLs.

---

## Assets

- Use stable descriptive filenames.
- Keep event assets in named event directories.
- Keep the public CV at `assets/cv/vicent-manila-cv.pdf`.
- Optimize images before commit.
- Verify focal points on mobile and desktop.
- Prefer local portfolio imagery over third-party hotlinks.

---

## Versioning

`VM.version` in `assets/js/config.js` is the canonical browser-cache version.

For user-visible CSS or JS changes:

1. bump `VM.version`,
2. update every shell `?v=` reference,
3. update relevant documentation status,
4. add a changelog entry.

CI fails when shell cache versions drift from `VM.version`.
