# Security

**Version:** 1.2.0

---

## Table of contents

1. [Threat model](#threat-model)
2. [External links](#external-links)
3. [XSS posture](#xss-posture)
4. [Dependencies](#dependencies)
5. [Secrets](#secrets)
6. [Deployment](#deployment)
7. [Recommendations](#recommendations)

---

## Threat model

Static brochure site with no forms, auth, or databases. Primary risks: XSS via unsafe HTML injection, malicious third-party CDNs, and open redirects (not currently used).

---

## External links

Outbound links (WhatsApp, LinkedIn, CV) use `rel="noopener noreferrer"` with `target="_blank"` where applicable.

---

## XSS posture

Dynamic HTML is built with template strings. User-controlled data should always pass through `esc()` (layout/pages). Content is currently author-controlled in repo files — still escape consistently when adding CMS input later.

---

## Dependencies

CDN scripts (Tailwind, Lucide) are third parties. Prefer:

- Pinning versions
- Subresource Integrity (SRI) if self-hosting or locking URLs
- Periodic review of CDN availability

---

## Secrets

No server secrets. Do not commit private analytics keys or SMTP credentials if added later. Use host env vars for any future backend.

---

## Deployment

- Serve over HTTPS
- Keep software on the host patched
- Restrict directory listing
- Do not expose `.git` on public hosts

---

## Recommendations

1. Replace Lucide `@latest` with a pinned version.
2. Add Content-Security-Policy at the host layer when CDNs are finalized.
3. Add `.gitignore` excluding OS junk and local env files.
