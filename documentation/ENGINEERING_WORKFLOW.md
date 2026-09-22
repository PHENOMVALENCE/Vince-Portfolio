# Engineering Workflow

**Status:** current for v5.5.0

This repository follows a small-commit, pull-request-first workflow so content, layout, testing and documentation changes remain independently reviewable.

## Branching

Start from the latest `main`.

Use focused names:

- `feature/<area>`
- `fix/<issue>`
- `content/<area>`
- `chore/<area>`

Do not implement substantial work directly on `main`.

## Commit discipline

Prefer one coherent concern per commit.

A typical frontend revision sequence is:

1. `refactor:` semantic structure
2. `style:` shared responsive/layout rules
3. `fix:` page-specific defects
4. `test:` browser regression coverage
5. `ci:` workflow changes
6. `docs:` documentation and QA records
7. `chore:` release/cache version

Commits use the owner's configured Git identity. Do not add AI attribution or co-author trailers.

## Validation

Before opening a PR:

```bash
npm install
npm run validate
npm run test:responsive
```

For layout-facing work, also complete [MOBILE_QA_MATRIX.md](./MOBILE_QA_MATRIX.md).

The automated responsive suite covers every public route and includes:

- 320, 360, 375, 390 and 430px phones,
- landscape phone,
- 768px tablet,
- 899/900px navigation boundary,
- 1024, 1280 and 1440px desktop,
- 1920px wide viewport.

## Pull-request CI

`.github/workflows/ci.yml` runs on:

- pull request opened,
- synchronize,
- reopened,
- ready for review,
- pushes to `main`,
- manual dispatch.

The workflow validates static structure, JavaScript syntax and browser-level responsive behavior.

## Pull-request content

UI PR descriptions should state:

- implementation summary,
- affected routes,
- responsive impact,
- accessibility considerations,
- validation results,
- documentation changes,
- release/cache version,
- preview URL when available.

Do not auto-merge unless explicitly requested.

## Content integrity

Professional claims remain evidence-first.

Before publishing a role, metric, testimonial, article or case-study claim:

1. update the central data source,
2. identify the source,
3. update `CONTENT_VERIFICATION.md`,
4. keep unsupported material in `CONTENT_NEEDS_VERIFICATION.md`.

Do not infer missing metrics, dates or URLs.

## Versioning

`VM.version` in `assets/js/config.js` is the browser-cache source of truth.

When CSS or JavaScript changes:

1. bump `VM.version`,
2. update every page-shell `?v=` reference,
3. align `package.json`,
4. update the changelog and relevant documentation.

The static validator fails when versions drift.
