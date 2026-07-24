# API and External Services

**Version:** 1.2.0

This project has **no first-party HTTP API**. Integrations are client-side links and CDNs.

---

## Table of contents

1. [Contact channels](#contact-channels)
2. [Social](#social)
3. [CDN dependencies](#cdn-dependencies)
4. [Fonts](#fonts)
5. [Hosting](#hosting)
6. [Analytics](#analytics)
7. [Local storage](#local-storage)

---

## Contact channels

| Channel | Value / endpoint |
|---------|------------------|
| WhatsApp | `https://wa.me/255713582606` |
| Phone | `tel:+255713582606` |
| Email | `mailto:manilavicent@gmail.com` |
| Display phone | `+255 713 582 606` |
| Display email | `manilavicent@gmail.com` |

Configured in `assets/js/config.js` → `VM.site.contact`.

---

## Social

| Service | URL |
|---------|-----|
| LinkedIn | `https://www.linkedin.com/in/vicentmanila` |

---

## CDN dependencies

| Service | URL | Purpose |
|---------|-----|---------|
| Tailwind CSS | `https://cdn.tailwindcss.com` | Utility CSS |
| Lucide | `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js` | Icons |
| Google Fonts | `fonts.googleapis.com` / `fonts.gstatic.com` | Typography |

**Note:** Pin Lucide to a specific version in production to avoid surprise icon API changes from `@latest`.

---

## Fonts

- Plus Jakarta Sans (UI)
- Source Serif 4 (display)

---

## Hosting

Static hosting / Apache. No server-side API keys.

---

## Analytics

None installed. If added later, document the vendor, consent requirements, and script location here.

---

## Local storage

| Key | Purpose |
|-----|---------|
| `vm-theme` | `light` / `dark` preference |
