# SEO Documentation

**Status:** current for v5.4.0

## Current implementation

| Capability | Status |
|---|---|
| Unique page titles | yes |
| Meta descriptions | yes |
| Canonical links | yes on route shells |
| JSON-LD Person | homepage |
| Web manifest | yes |
| robots.txt | yes |
| sitemap.xml | yes |
| Open Graph / Twitter | complete on homepage/gallery; partial elsewhere |

The current production base URL is `https://vince-portfolio-xi.vercel.app/`.

## Project detail route

`project.html` updates the document title from the selected case study. The canonical shell remains generic; richer slug-specific canonical/social metadata is a future enhancement.

## robots.txt and sitemap

`robots.txt` points crawlers to the production sitemap.

`sitemap.xml` includes:

- all top-level public routes,
- all currently published case-study slug URLs.

When adding/removing a case study, update the sitemap or move to generated sitemap tooling.

## Structured data

The homepage includes a `Person` JSON-LD record with current role, employer, location, education and LinkedIn.

Do not add unsupported awards, credentials or organization relationships.

## Images

- meaningful alt text is required,
- OG image uses a dedicated local asset,
- portfolio images should use descriptive alt text tied to visible context,
- thumbnails are preferred for gallery grids.

## Next SEO improvements

- normalize Open Graph/Twitter metadata across every route,
- add slug-specific project canonical/OG metadata,
- self-host fonts if performance warrants it.
