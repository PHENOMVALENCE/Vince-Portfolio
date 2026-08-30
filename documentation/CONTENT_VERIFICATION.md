# Content Verification Record

**Date:** 2026-08-30
**Purpose:** Every professional claim on this site must be traceable to a primary source. This file records what was verified, what was corrected, and what was removed.

**Primary sources** — supplied by the site owner, 22 documents:
`CV_s/` (5 CVs) · `Contracts & MOUS/` (4 signed agreements) · `Audits/` (2 audit reports) · `Reports/` (3 annual reports) · `Business Proposal & Concept/` (8 proposals)

The authoritative record is **`CV_s/Vicent Manila.pdf`**.

---

## 1. Removed — testimonials

All three testimonials were removed. They were not verifiable, and one carried a literal placeholder in place of an organization name.

| Name | Claimed role | Reason removed |
|---|---|---|
| Sarah Nkusi | Regional Director, AIESEC East Africa | No corroboration in any supplied document |
| James Ochieng | Head of Corporate Partnerships, **"Leading Financial Institution"** | Organization field is a placeholder string, not an organization |
| Marie Uwase | LCVP, AIESEC in Rwanda | No corroboration in any supplied document |

The testimonials section and its autoplay carousel were removed entirely. **A smaller number of verified endorsements is more credible than several unverifiable ones, and none is more credible than invented ones.**

To reinstate: real name, real role, real organization, and documented approval of the quotation.

---

## 2. Removed — media coverage and the Media route

All five media items were removed, and `media.html` was deleted along with its navigation entry and sitemap URL.

| Title | Claimed source | Reason removed |
|---|---|---|
| Youth Leadership and National Impact | *Leadership Insights* | No URL; publication unverifiable |
| Partnerships Driving Social Impact | *Development Today* | No URL; publication unverifiable |
| Global Money Week Success Story | *Corporate CSR Review* | No URL; publication unverifiable |
| Leading AIESEC in Rwanda | *Youth Leaders Podcast* | No URL; publication unverifiable |
| International BD at Scale | AIESEC International | No URL |

**None of the five carried a link.** Unlinkable press coverage is the first thing a partner or recruiter tries to click, and the most damaging item to be caught publishing.

To reinstate: a working public URL per item. The data schema should make `url` a required field.

---

## 3. Removed — Belarus

`AIESEC in Belarus` appeared in the hero summary, the international-experience list, the organizations list, and as a full career entry ("Entity Support Team PD Sales Executive, 2021–2022").

**It appears in none of the 22 supplied documents, and in none of the five CVs.** Removed on the owner's instruction.

---

## 4. Corrected — the site was out of date

The most serious accuracy problem was not a fabrication but staleness. The site presented AIESEC in Rwanda as Vicent's *current* role ("2023–Present"). That role ended in July 2024, and two roles have followed it.

| Field | Was | Now (per CV) |
|---|---|---|
| Current role | Country Director, AIESEC in Rwanda ("2023–Present") | **Sustainable Livelihoods Coordinator, Mo Dewji Foundation** (Sep 2025 – present) |
| Missing entirely | — | **Country Director, AIESEC in Tanzania** (Aug 2024 – Jul 2025) |
| Rwanda directorship | 2023–Present | Jul 2023 – Jul 2024 |
| VP BD & iGT, Rwanda | Listed as "Head of Business Development & Employer Branding" | **Vice President, Business Development & Incoming Global Talent** (Jul 2022 – Jul 2023) |
| Kinyarwanda | listed flat | **Conversational** (English and Swahili fluent) |
| Education | no dates | BSc Social Protection, IFM, **2019 – 2022** |

The two-country directorship — Rwanda *and* Tanzania — was previously invisible. It is now the site's primary credibility claim, and it is fully documented.

---

## 5. Corrected — metrics

Reduced from six counters to four, each traceable to the CV.

**Removed:**

- **"100+ Countries Supported"** — no supporting evidence in any document. It derived from a "BD Steering Team" role absent from the CV.
- **"7+ Countries Collaborated"** — unsupported, and in tension with the item above.
- **"20+ Strategic Partnerships"** and **"6+ National Projects"** — not corroborated at those figures.

**Retained, each with a source:**

| Metric | Source |
|---|---|
| 300+ members led across seven cities | CV — Country Director, AIESEC in Tanzania |
| 500+ delegates at conferences delivered | CV — Country Director, AIESEC in Rwanda |
| 7+ high-value partnerships secured | CV — VP Business Development, Rwanda |
| 60% increase in internship placements | CV — VP Business Development, Rwanda |

Count-up animation was removed: the figures are evidence, not spectacle.

---

## 6. Removed — one case study

**"International Business Development Support"** was removed. It rested entirely on an AIESEC International "BD Steering Team" role that does not appear in the CV, and its headline result was the unverifiable "100+ country BD managers supported".

**Replaced with "National Corporate Partnerships — Tanzania"**, built only on documented facts: the Barrick Gold and Total Energies collaborations named in the CV, the 500+ participant platforms, and the 300+ members across seven cities.

---

## 7. Added — verifiable corporate partners

These replace the deleted placeholder social proof and are **evidenced by signed agreements held on file**:

| Partner | Evidence |
|---|---|
| Barrick Gold | Named in CV; `Business Proposal & Concept/Tanzania/BARRICK GOLD - AIESEC in TANZANIA PROGRAMS PROPOSAL.pdf` |
| Total Energies | Named in CV |
| I&M Bank | `Contracts & MOUS/I&M Bank & AIESEC MOU.pdf` |
| METL | `Contracts & MOUS/METL & AIESEC Agreement.pdf` |
| CRDB Bank | `Contracts & MOUS/CRDBTZ-PR-PRNT1_MIKOCHENI-BRANCH_0474_001.pdf` |
| INCO.org | `Contracts & MOUS/RWANDA INCO.org - AIESEC Green Digital Skills Partnership.pdf` |

Presented as a typographic index, never as logo lockups — reproducing corporate marks carries trademark considerations and would misrepresent the nature of the relationship.

---

## 8. Withheld deliberately — personal data

**Referee contact details were NOT published.** The CV lists three referees with personal mobile numbers (Barrick Gold, Challenge Rwanda, Empower Limited). These are third parties who have not consented to publication; their numbers appear nowhere on the site.

**Vicent's telephone number was removed from the `Person` structured data.** Machine-readable markup is trivially harvested. The number remains reachable through the deliberate contact actions (WhatsApp / call / email), which is a choice the visitor makes.

Date of birth, nationality and marital status appear on the CV and were **not** carried onto the site — they invite discrimination and serve no professional purpose.

---

## 9. Standing rule

> Never make the portfolio more impressive by making it less truthful.

Before adding any claim, metric, testimonial, partner or media item, record its source here. If a claim cannot be sourced, it does not ship.

---

## 10. Repositioning — 2026-08-30 (LinkedIn evidence)

LinkedIn profile screenshots supplied by the owner established current roles that neither the CV nor the live site carried. The portfolio was repositioned accordingly: **management consultant first, national executive second.** AIESEC is now a leadership chapter within a broader career rather than the frame of the whole site.

**Added from LinkedIn (verified):**

| Role | Organization | Dates | Notes |
|---|---|---|---|
| Associate Management Consultant | INNOVEX | Jul 2026 – present, full-time | Current primary role. Duties not published — none stated on the profile. |
| General Partner | MigLine | Sep 2025 – present, part-time | Three responsibilities published verbatim from the profile. |
| Founder | VMAN Enterprises | Aug 2025 – present, self-employed | Title and dates only; nothing else known. |
| Team Member → Team Leader → National Support Team → President, AIESEC in IFM | AIESEC in Tanzania | Dec 2019 – Feb 2022 | Progression preserved rather than flattened into one role. |

**Corrected:**

- **Headline** — from "Business Development & Strategic Partnerships Leader" to **"Management Consultant · Strategic Partnerships · Organizational Leadership"**.
- **Title of the AIESEC roles** — now **National President**, matching both the annual reports (which he authored as President/MCP) and the LinkedIn record.
- **Kinyarwanda** — "Conversational" (CV) corrected to **"Elementary"** (LinkedIn and brief agree).
- **`Person` schema** — `jobTitle` now *Associate Management Consultant*, `worksFor` now *INNOVEX*.
- **LinkedIn URL** — the site linked to `/in/vicentmanila`, which is **not his profile**. Corrected to `/in/vicent-manila`. This link was broken on every page.

**Added from the brief:** the undergraduate research project *"How Social Protection Systems Respond in Times of Crisis and Emergency"* (Oct 2020 – Feb 2021), described only at the level the brief states.

**Unresolved conflicts** are recorded in [CONTENT_NEEDS_VERIFICATION.md](./CONTENT_NEEDS_VERIFICATION.md), not silently resolved.

---

## 11. The published CV is redacted

`assets/cv/vicent-manila-cv.pdf` did not exist — the "Download CV" and "View my CV" links returned **404 sitewide**. A CV is now published, produced from `CV_s/Vicent Manila.pdf` with the following removed by true redaction (text deleted, not covered):

- Date of birth, nationality, marital status
- The entire **REFEREES** block — three third parties and their personal mobile numbers
- The contact header line (phone and email), since the site provides contact routes deliberately

Verified after redaction: none of those strings survive in the extracted text.
