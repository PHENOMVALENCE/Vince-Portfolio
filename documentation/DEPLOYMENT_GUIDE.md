# Deployment Guide

**Version:** 1.2.0

---

## Table of contents

1. [Requirements](#requirements)
2. [Run locally](#run-locally)
3. [Production checklist](#production-checklist)
4. [Apache / XAMPP](#apache--xampp)
5. [Static hosts (Vercel, Netlify, etc.)](#static-hosts-vercel-netlify-etc)
6. [Domain and HTTPS](#domain-and-https)
7. [Environment variables](#environment-variables)
8. [Troubleshooting](#troubleshooting)

---

## Requirements

- Any static HTTP server
- Modern browsers
- Optional: Apache with `mod_rewrite` / `mod_expires` / `mod_deflate` for `.htaccess`

**Node.js is not required** to run the site. No build command exists.

---

## Run locally

### XAMPP

1. Copy project to `htdocs/Vince-Portfolio` (or update `.htaccess` `RewriteBase`).
2. Start Apache.
3. Visit `http://localhost/Vince-Portfolio/`.

### Simple static server

```bash
cd Vince-Portfolio
npx --yes serve .
```

---

## Production checklist

- [ ] `assets/cv/vicent-manila-cv.pdf` present
- [ ] Contact details verified in `config.js`
- [ ] All images 200 OK
- [ ] Favicons and manifest resolve
- [ ] Mobile menu + lightbox smoke-tested
- [ ] HTTPS enabled on domain
- [ ] Update `.htaccess` `RewriteBase` if not hosted in `/Vince-Portfolio/`
- [ ] Consider adding `robots.txt` + `sitemap.xml`

---

## Apache / XAMPP

`.htaccess` currently assumes:

```apache
RewriteBase /Vince-Portfolio/
```

For domain root hosting, change to:

```apache
RewriteBase /
```

Features: `DirectoryIndex index.html`, extensionless → `.html`, compression, cache headers.

---

## Static hosts (Vercel, Netlify, etc.)

1. Import the git repository or drag-and-drop the folder.
2. **Build command:** leave empty / `exit 0`.
3. **Publish directory:** repository root (`.`).
4. Disable framework preset (this is not Next/React).
5. Add custom domain + HTTPS in the host dashboard.

Clean URLs may need host-specific redirects if `.htaccess` is ignored (Netlify `_redirects`, Vercel `vercel.json`).

---

## Domain and HTTPS

Terminate TLS at the host or reverse proxy. No app-level HTTPS logic.

---

## Environment variables

None required for core functionality. Theme preference is client-only (`localStorage`).

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| CSS/JS 404 | Check relative paths; open via HTTP not `file://` |
| Clean URLs 404 | Adjust `RewriteBase` or host redirects |
| CV 404 | Add PDF under `assets/cv/` |
| Icons missing | Ensure Lucide CDN reachable; call `refreshIcons` after DOM inject |
| Menu clipped | Confirm drawer is sibling of header (current architecture) |
