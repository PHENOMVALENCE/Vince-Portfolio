# Versioning

**Current version:** `1.2.0` (`VM.version` in `assets/js/config.js`)

---

## Semantic Versioning

This project uses **SemVer**: `MAJOR.MINOR.PATCH`

| Increment | When |
|-----------|------|
| **MAJOR** | Breaking IA changes, full redesign, incompatible content model |
| **MINOR** | New pages/features, significant UX upgrades, additive data fields |
| **PATCH** | Copy edits, bug fixes, asset swaps, small CSS fixes |

### Examples

- `1.2.1` — Fix broken image path; update testimonial typo
- `1.3.0` — Add blog page; add sitemap generation
- `2.0.0` — Move to CMS-driven architecture

---

## Release workflow

1. Merge work to main branch.
2. Update `VM.version` in `config.js`.
3. Update [CHANGELOG.md](./CHANGELOG.md).
4. Commit: `chore(release): v1.2.1`
5. Tag: `git tag v1.2.1`
6. Push branch + tag: `git push && git push --tags`

`.github/workflows/release.yml` creates a GitHub Release when tags matching `v*` are pushed (`generate_release_notes: true`).

---

## Documentation versions

Documentation headers should match `VM.version` after each minor/major release.
