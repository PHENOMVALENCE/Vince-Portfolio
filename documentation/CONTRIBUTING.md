# Contributing

**Version:** 1.2.0

Thank you for contributing to the Vicent Manila portfolio.

---

## Table of contents

1. [Ground rules](#ground-rules)
2. [Branch naming](#branch-naming)
3. [Commit messages](#commit-messages)
4. [Coding standards](#coding-standards)
5. [Responsive testing](#responsive-testing)
6. [Images](#images)
7. [Pull requests](#pull-requests)
8. [Documentation](#documentation)

---

## Ground rules

- Do not redesign desktop without a clear need.
- Do not remove factual content without approval.
- Keep navy / gold / white branding.
- Prefer data-file edits for copy changes.
- Never commit secrets or private keys.

---

## Branch naming

```text
feature/short-description
fix/issue-description
chore/tooling-or-docs
content/update-area
```

Examples: `feature/og-tags`, `fix/mobile-menu-ios`, `content/add-project-gmw`.

---

## Commit messages

Use concise, imperative subjects:

```text
fix: prevent project hero clipping on short phones
feat: add sitemap and robots.txt
docs: document contact update workflow
chore(release): v1.2.1
```

---

## Coding standards

- Keep JS in IIFE modules on `window.VM`.
- Escape user-facing dynamic strings with the existing `esc()` helpers.
- Prefer CSS for motion; respect `prefers-reduced-motion`.
- Maintain accessible names on icon-only controls.
- Avoid introducing frameworks unless product direction changes.

---

## Responsive testing

Before merge, check at least:

- 375×667, 390×844, 768×1024, 1280×800
- One landscape phone width
- Mobile menu open/close + lightbox
- No horizontal scrollbar on home, project, gallery, connect

---

## Images

- Optimize before commit.
- Update paths in `config.js` / `data.js` / `gallery-data.js`.
- Provide alt text.
- Verify `object-position` for portraits.

---

## Pull requests

PR description should include:

- Summary of change
- Screenshots for UI work
- Test plan checklist
- Docs updates (if behaviour changed)

---

## Documentation

Update the relevant file under `/documentation` in the same PR. Bump [CHANGELOG.md](./CHANGELOG.md) for user-visible changes.
