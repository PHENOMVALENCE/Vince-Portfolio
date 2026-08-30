/**
 * Vicent Manila — Site content
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM) return;

  VM.data = {
    hero: {
      eyebrow: 'Management Consulting',
      /**
       * Positioning: consultant first, national executive second.
       * AIESEC is a leadership chapter within a broader career, not the frame.
       */
      headline: 'Management Consultant · Strategic Partnerships · Organizational Leadership',
      summary: 'Management consultant working across strategy, partnerships and organizational development — after leading two national organizations, in Rwanda and Tanzania, as President.',
      location: 'Dar es Salaam · Tanzania · East Africa',
      /** Verifiable role facts. Current work first. */
      proof: [
        'Associate Management Consultant — INNOVEX',
        'General Partner — MigLine',
        'Former National President — AIESEC in Tanzania & Rwanda',
      ],
    },

    about: {
      summary: 'Vicent Manila is a management consultant working across strategy, partnerships and organizational development in East Africa. He advises on market entry, partnership structuring and stakeholder engagement, and leads the Tanzanian deployment of a regional delivery platform. Before consulting, he served as national President of AIESEC in two countries — Rwanda and then Tanzania — running national teams, negotiating corporate partnerships, and building leadership systems designed to outlast any single term of office.',
      philosophy: 'Leadership is not authority — it is stewardship. The most durable organizations are built when people are equipped with agency, when partnerships are rooted in mutual value, and when strategy is translated into systems that outlast any single leader.',
      mission: 'To strengthen the institutions and partnerships that develop the next generation of African leaders, and to translate complex organizational challenges into strategies that hold up in execution.',

      /** Six capability groups. Replaces the former carousel and tag cloud. */
      expertise: [
        { title: 'Management & Strategy', desc: 'Organizational problem solving, strategy design and execution.', competencies: ['Management Consulting', 'Strategic Planning', 'Market Entry', 'Business Intelligence'] },
        { title: 'Strategic Partnerships', desc: 'Business development, institutional relations and corporate partnership structuring.', competencies: ['Partnership Development', 'Proposal Development', 'Negotiation', 'Corporate Relations'] },
        { title: 'Organizational Leadership', desc: 'National leadership, governance and the design of leadership pipelines.', competencies: ['National Leadership', 'Governance', 'Team Leadership', 'Organizational Development'] },
        { title: 'Programme & Project Leadership', desc: 'Programme coordination, stakeholder management and delivery.', competencies: ['Programme Coordination', 'Monitoring & Evaluation', 'Youth Employability', 'Development Programmes'] },
        { title: 'Cross-Cultural Leadership', desc: 'Leading organizations and teams across national and cultural borders.', competencies: ['Tanzania', 'Rwanda', 'International Networks'] },
        { title: 'Youth & Human Capital Development', desc: 'Leadership development, mentorship and professional readiness.', competencies: ['Leadership Development', 'Mentorship', 'Career Development', 'Facilitation & Training'] },
      ],

      international: [
        { country: 'Tanzania', role: 'National President, AIESEC in Tanzania · Consulting and partnerships practice, Dar es Salaam' },
        { country: 'Rwanda', role: 'National President and Vice President, Business Development, AIESEC in Rwanda' },
        { country: 'East Africa', role: 'Initiated and coordinated the East African Conference Cycle' },
      ],

      education: {
        school: 'Institute of Finance Management (IFM)',
        location: 'Dar es Salaam, Tanzania',
        degree: 'Bachelor of Science in Social Protection',
        period: '2019 – 2022',
      },

      /**
       * Undergraduate research. Supplied via the revision brief.
       * Described only at the level the brief states — no findings invented.
       */
      research: {
        title: 'How Social Protection Systems Respond in Times of Crisis and Emergency',
        period: 'October 2020 – February 2021',
        summary: 'Undergraduate research examining social-protection responses during crisis, using the COVID-19 pandemic as its case study. Covered Tanzania’s social-protection system, the pandemic’s effects on health and education, its impact on elderly people, women and children, and recommendations for strengthening social-protection systems in Africa.',
      },

      languages: [
        { name: 'Swahili', level: 'Native or bilingual' },
        { name: 'English', level: 'Full professional' },
        { name: 'Kinyarwanda', level: 'Elementary' },
      ],
    },

    /**
     * Career chronology — reverse-chronological.
     * Sources: LinkedIn profile (2026-08-30) and CV. Where the two disagree,
     * the conflict is recorded in documentation/CONTENT_NEEDS_VERIFICATION.md
     * and the entry is published at the coarser precision both support.
     */
    experience: [
      {
        period: 'Jul 2026 — Present', current: true,
        title: 'Associate Management Consultant',
        organization: 'INNOVEX', country: 'Dar es Salaam, Tanzania',
        mandate: 'Management consulting practice covering organizational strategy, partner relationship management and execution.',
        outcomes: [],
        skills: ['Management Consulting', 'Partner Relationship Management'],
      },
      {
        period: 'Sep 2025 — Present', current: true,
        title: 'General Partner',
        organization: 'MigLine', country: 'Dar es Salaam, Tanzania',
        mandate: 'Leading the deployment of MigLine in Tanzania, a regional delivery platform operating across Africa and the Middle East.',
        outcomes: [
          'Spearheading market entry strategy, partnership development and operations in Tanzania',
          'Driving growth through stakeholder engagement and alignment with national regulatory frameworks',
        ],
        skills: ['Market Entry', 'Partnership Development', 'Operations'],
      },
      {
        period: 'Aug 2025 — Present', current: true,
        title: 'Founder',
        organization: 'VMAN Enterprises', country: 'Dar es Salaam, Tanzania',
        mandate: '',
        outcomes: [],
        skills: [],
      },
      {
        period: '2025',
        title: 'Sustainable Livelihoods Coordinator',
        organization: 'Mo Dewji Foundation', country: 'Dar es Salaam, Tanzania',
        mandate: 'Supporting entrepreneurship and livelihood programmes aimed at youth employability and economic inclusion.',
        outcomes: [
          'Market assessment and opportunity analysis to inform programme design',
          'Private sector and ecosystem partner engagement to strengthen enterprise support',
          'Business growth pathways for youth-led enterprises',
        ],
        skills: ['Programme Support', 'Stakeholder Engagement', 'Monitoring & Evaluation'],
      },
      {
        period: '2024 — 2025',
        title: 'National President',
        organization: 'AIESEC in Tanzania', country: 'Dar es Salaam, Tanzania',
        mandate: 'Full national accountability for strategy, operations, partnerships and external representation.',
        outcomes: [
          'Directed a national leadership team of 10+ managers and over 300 members across seven cities',
          'Secured strategic corporate collaborations including Barrick Gold and Total Energies',
          'Initiated and coordinated the East African Conference Cycle',
        ],
        skills: ['National Leadership', 'Partnership Development', 'Governance'],
      },
      {
        period: '2023 — 2024',
        title: 'National President',
        organization: 'AIESEC in Rwanda', country: 'Kigali, Rwanda',
        mandate: 'Led national strategy, stakeholder engagement and organizational performance across local chapters.',
        outcomes: [
          'Designed and delivered national and regional conferences with over 500 delegates',
          'Strengthened monitoring, evaluation, reporting and accountability systems nationally',
          'Coordinated strategic partnerships across private and public sector stakeholders',
        ],
        skills: ['Organizational Development', 'Governance', 'Stakeholder Management'],
      },
      {
        period: '2022 — 2023',
        title: 'Vice President, Business Development & Incoming Global Talent',
        organization: 'AIESEC in Rwanda', country: 'Kigali, Rwanda',
        mandate: 'Owned the national partnership pipeline, from opportunity identification through negotiation and close.',
        outcomes: [
          'Secured 7+ high-value partnerships, expanding organizational revenue streams',
          'Contributed to a 60% increase in internship placements through targeted BD initiatives',
        ],
        skills: ['Business Development', 'Negotiation', 'Proposal Development'],
      },
      {
        period: 'Aug 2022 — Sep 2022',
        title: 'Sales Auditor',
        organization: 'Empower Limited', country: 'Dar es Salaam, Tanzania',
        mandate: 'Field audits and performance assessment for commercial sales teams.',
        outcomes: [
          'Analytical reporting to improve sales effectiveness and operational performance',
        ],
        skills: ['Auditing', 'Performance Analysis'],
      },
      {
        period: 'Dec 2019 — Feb 2022',
        title: 'Team Member → Team Leader → National Support Team → President, AIESEC in IFM',
        organization: 'AIESEC in Tanzania', country: 'Dar es Salaam, Tanzania',
        mandate: 'Progressive leadership responsibility over two years, from team member to chapter president.',
        outcomes: [
          'Led a chapter team of 25+ members across leadership development and exchange programmes',
          'Served on the National Support Team supporting entity-wide operations',
          'Designed community engagement projects and employer partnership strategies',
        ],
        skills: ['Team Leadership', 'Youth Development', 'Partnership Acquisition'],
      },
    ],

    projectCategories: {
      all: 'All Projects',
      'business-development': 'Business Development',
      'international-partnerships': 'International Partnerships',
      leadership: 'Leadership',
      'employer-branding': 'Employer Branding',
      operations: 'Operations',
      'youth-development': 'Youth Development',
      'strategic-planning': 'Strategic Planning',
      'international-conferences': 'International Conferences',
    },

    projects: [
      {
        slug: 'leading-aiesec-rwanda',
        title: 'Leading AIESEC in Rwanda',
        category: 'leadership',
        category_label: 'Leadership',
        badge: 'National Operations',
        year: '2023–2024',
        featured: true,
        summary: 'Directed national operations managing 300+ members, national teams, local chapters, and strategic partnerships.',
        description: 'A comprehensive national leadership initiative scaling organizational impact across Rwanda.',
        image: 'assets/images/Vince/web/7.jpg',
        imagePosition: 'top',
        overview: 'As Country Director, Vicent Manila led the full national operations of AIESEC in Rwanda — one of the organization\'s most dynamic entities in East Africa. The role encompasses membership management, partnership strategy, national project delivery, and international representation.',
        challenge: 'Scale national operations while maintaining leadership quality, stakeholder alignment, and sustainable organizational growth across multiple concurrent initiatives.',
        objectives: ['Strengthen national team structure and local chapter performance', 'Align board advisors and partners under a unified growth framework', 'Deliver measurable impact across national projects and membership engagement'],
        role: 'Country Director — full accountability for national strategy, operations, and stakeholder relationships.',
        strategy: 'Restructured national teams, introduced performance systems, and aligned local chapters under centralized governance with decentralized execution.',
        execution: 'Led cross-department coordination, managed board relationships, oversaw partnership portfolios, and directed multiple national projects simultaneously.',
        results: ['300+ members and alumni under active management', 'Strengthened partner engagement and national project delivery', 'Improved organizational governance and team performance metrics'],
        impact: 'Established AIESEC in Rwanda as a nationally credible youth leadership institution with stronger corporate and institutional partnerships.',
        gallery: [
          { src: 'assets/images/Vince/web/gallery/alumni-summit.jpg', alt: 'Vicent Manila at Dynamite Conference', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/team-3.jpg', alt: 'Leadership team recognition ceremony', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/team-1.jpg', alt: 'National leadership team collaboration', position: 'center' },
          { src: 'assets/images/Vince/web/3.jpg', alt: 'Executive portrait — Country Director', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/event-8.jpg', alt: 'National leadership event', position: 'center' },
        ],
        related: ['global-money-week-partnerships', 'tanzania-national-partnerships'],
      },
      {
        slug: 'global-money-week-partnerships',
        title: 'Global Money Week Partnerships',
        category: 'business-development',
        category_label: 'Business Development',
        badge: 'National Campaign',
        year: '2023',
        featured: true,
        summary: 'Secured two national partners and five campaign partnerships for Global Money Week 2023.',
        description: 'Strategic partnership acquisition for a nationally significant financial literacy campaign.',
        image: 'assets/images/Vince/web/gallery/event-11.jpg',
        imagePosition: 'top',
        overview: 'Global Money Week required rapid partnership acquisition with corporate and institutional stakeholders aligned to financial literacy and youth empowerment objectives.',
        challenge: 'Deliver high-value partnerships within a compressed timeline for a nationally visible campaign with multiple stakeholder expectations.',
        objectives: ['Secure national-level partners for campaign credibility', 'Close five supporting partnerships for campaign execution', 'Align corporate CSR goals with campaign impact metrics'],
        role: 'Head of Business Development — end-to-end partnership strategy, negotiation, and campaign integration.',
        strategy: 'Developed targeted outreach, tailored value propositions for corporate CSR objectives, and structured tiered partnership packages.',
        execution: 'Led stakeholder presentations, negotiated terms, coordinated campaign integration, and managed partner relationship handoffs.',
        results: ['Two national partners signed', 'Five campaign partnerships closed', 'Successful Global Money Week delivery enabled'],
        impact: 'Demonstrated capacity to deliver corporate partnerships under pressure — a model replicated in subsequent national campaigns.',
        gallery: [
          { src: 'assets/images/Vince/web/gallery/1.jpg', alt: 'Global Money Week partnership engagement', position: 'center' },
          { src: 'assets/images/Vince/web/gallery/3.jpg', alt: 'Corporate partnership event', position: 'center' },
          { src: 'assets/images/Vince/web/gallery/event-9.jpg', alt: 'Campaign stakeholder convening', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/event-10.jpg', alt: 'Partnership presentation moment', position: 'center' },
          { src: 'assets/images/Vince/web/gallery/event-12.jpg', alt: 'National campaign delivery', position: 'center' },
        ],
        related: ['leading-aiesec-rwanda', 'employer-branding-rwanda'],
      },
      {
        slug: 'tanzania-national-partnerships',
        title: 'National Corporate Partnerships — Tanzania',
        category: 'business-development',
        category_label: 'Business Development',
        badge: 'National Partnerships',
        year: '2024–2025',
        featured: true,
        summary: 'Secured strategic corporate collaborations with Barrick Gold and Total Energies while directing national operations across seven cities.',
        description: 'Corporate partnership development at national scale, evidenced by signed agreements and MOUs.',
        image: 'assets/images/Vince/web/2.jpg',
        imagePosition: 'top',
        overview: 'As Country Director of AIESEC in Tanzania, Vicent led partnership development, proposal preparation and stakeholder negotiation, converting corporate interest into signed national agreements while running a leadership team of 10+ managers and over 300 members.',
        challenge: 'Build a credible national partnership portfolio with major corporate institutions while simultaneously directing operations across seven cities.',
        objectives: [
          'Establish partnerships with major corporate institutions',
          'Build proposal and negotiation capability across the national team',
          'Convert corporate CSR and talent objectives into structured agreements',
        ],
        role: 'Country Director — full accountability for national partnership strategy and stakeholder negotiation.',
        strategy: 'Positioned the organization around employer branding and youth talent pipelines, aligning partner CSR and recruitment objectives with measurable programme outcomes.',
        execution: 'Led proposal preparation, senior stakeholder negotiation, and delivery of large-scale engagement platforms including career fairs and leadership summits.',
        results: [
          'Strategic collaborations secured with Barrick Gold and Total Energies',
          'Stakeholder platforms delivered to 500+ participants and multiple corporate partners',
          'National leadership team of 10+ managers and 300+ members directed across seven cities',
        ],
        impact: 'Established a corporate partnership base anchored in signed agreements rather than informal association.',
        gallery: [
          { src: 'assets/images/Vince/web/6.jpg', alt: 'Speaking at a national partnership event', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/4.jpg', alt: 'Corporate stakeholder engagement session', position: 'center' },
          { src: 'assets/images/Vince/web/5.jpg', alt: 'National leadership engagement', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/event-13.jpg', alt: 'National network engagement', position: 'center' },
        ],
        related: ['leading-aiesec-rwanda', 'employer-branding-rwanda'],
      },
      {
        slug: 'employer-branding-rwanda',
        title: 'Employer Branding Strategy — Rwanda',
        category: 'employer-branding',
        category_label: 'Employer Branding',
        badge: 'Corporate Relations',
        year: '2022–2023',
        featured: false,
        summary: 'Strengthened employer branding and corporate positioning for national partnership growth.',
        description: 'National employer branding initiative connecting corporate partners with youth talent pipelines.',
        image: 'assets/images/Vince/web/8.jpg',
        imagePosition: 'top',
        overview: 'Developed and executed employer branding strategy positioning AIESEC in Rwanda as a premier youth talent partner for corporate organizations.',
        challenge: 'Differentiate AIESEC\'s employer value proposition in a competitive corporate partnership landscape.',
        objectives: ['Strengthen corporate brand positioning', 'Increase sponsorship conversion rates', 'Build long-term employer relationships'],
        role: 'Head of Business Development & Employer Branding.',
        strategy: 'Created employer branding materials, partnership value frameworks, and corporate engagement playbooks.',
        execution: 'Led corporate presentations, managed relationship pipelines, and coordinated branding across national touchpoints.',
        results: ['Improved corporate engagement metrics', 'Stronger national partner retention'],
        impact: 'Positioned AIESEC in Rwanda as a credible employer branding partner for national corporations.',
        gallery: [
          { src: 'assets/images/Vince/web/gallery/team-2.jpg', alt: 'Corporate partnership and employer branding engagement', position: 'center' },
          { src: 'assets/images/Vince/web/gallery/2.jpg', alt: 'Employer branding activation', position: 'center' },
          { src: 'assets/images/Vince/web/4.jpg', alt: 'Stakeholder workshop participation', position: 'left' },
        ],
        related: ['global-money-week-partnerships'],
      },
      {
        slug: 'ifm-chapter-growth',
        title: 'IFM Local Chapter Growth',
        category: 'youth-development',
        category_label: 'Youth Development',
        badge: 'Chapter Leadership',
        year: '2020–2022',
        featured: false,
        summary: 'Led 25+ members and delivered measurable organizational growth at AIESEC in IFM.',
        description: 'Local chapter leadership and growth initiative at the Institute of Finance Management, Tanzania.',
        image: 'assets/images/Vince/web/9.jpg',
        imagePosition: 'top',
        overview: 'As Local Committee President, built foundational leadership systems and drove chapter growth at IFM.',
        challenge: 'Build a high-performing local chapter with limited resources and developing institutional partnerships.',
        objectives: ['Grow membership and engagement', 'Develop executive board capabilities', 'Establish local partnerships'],
        role: 'Local Committee President.',
        strategy: 'Implemented structured leadership development, clear role accountability, and partnership outreach.',
        execution: 'Managed executive board, led 25+ members, and built local institutional relationships.',
        results: ['Measurable chapter growth achieved', 'Executive team development programs established'],
        impact: 'Created leadership foundation that enabled national and international career trajectory.',
        gallery: [
          { src: 'assets/images/Vince/web/4.jpg', alt: 'Chapter leadership workshop at IFM', position: 'left' },
          { src: 'assets/images/Vince/web/gallery/team-1.jpg', alt: 'Youth leadership team collaboration', position: 'center' },
          { src: 'assets/images/Vince/web/3.jpg', alt: 'Emerging leadership portrait', position: 'top' },
        ],
        related: ['leading-aiesec-rwanda'],
      },
      {
        slug: 'international-conference-bids',
        title: 'International Conference Bid Management',
        category: 'international-conferences',
        category_label: 'International Conferences',
        badge: 'Global Operations',
        year: '2022–2023',
        featured: false,
        summary: 'Managed bid evaluation and host coordination for international conferences within AIESEC.',
        description: 'Cross-border conference bid management and host coordination for international events.',
        image: 'assets/images/Vince/web/1.jpg',
        imagePosition: 'top',
        overview: 'Coordinated multi-country bid processes for international conferences with structured evaluation and stakeholder alignment.',
        challenge: 'Manage complex bid evaluation across multiple countries with competing priorities and stakeholder expectations.',
        objectives: ['Ensure fair and structured bid evaluation', 'Align host coordination with international standards', 'Deliver successful conference outcomes'],
        role: 'Operations & International Relations Lead.',
        strategy: 'Developed evaluation criteria, stakeholder communication protocols, and host coordination frameworks.',
        execution: 'Managed bid processes, coordinated with international teams, and oversaw host preparation.',
        results: ['Successful bid evaluations completed', 'International conference delivery supported'],
        impact: 'Strengthened AIESEC\'s international conference operations and cross-border coordination.',
        gallery: [
          { src: 'assets/images/Vince/web/gallery/event-13.jpg', alt: 'International conference engagement', position: 'center' },
          { src: 'assets/images/Vince/web/6.jpg', alt: 'Conference stage address', position: 'top' },
          { src: 'assets/images/Vince/web/gallery/4.jpg', alt: 'Cross-border conference coordination', position: 'center' },
        ],
        related: ['tanzania-national-partnerships'],
      },
    ],

    /**
     * Impact metrics — every figure traceable to the CV or supplied reports.
     * Four only. No count-up animation, no dark band, no cards. See DESIGN.md §8.
     * REMOVED: '100+ Countries Supported' and '7+ Countries Collaborated' — no
     * supporting evidence in any supplied document. See CONTENT_VERIFICATION.md.
     */
    impactStats: [
      { value: '300+', label: 'Members led across seven cities', note: 'AIESEC in Tanzania, as Country Director' },
      { value: '7+', label: 'High-value partnerships secured', note: 'As VP Business Development, Rwanda' },
      { value: '60%', label: 'Increase in internship placements', note: 'Through targeted BD initiatives' },
      { value: '16,663', label: 'Students reached by Career Fair', note: 'Across seven regions of Tanzania, over two years' },
    ],

    /**
     * Organizations and partners.
     * Corporate partners are evidenced by signed agreements and MOUs held on file.
     * REMOVED: 'AIESEC in Belarus' — no supporting evidence in any supplied document.
     */
    organizations: [
      'AIESEC in Tanzania',
      'AIESEC in Rwanda',
      'AIESEC in IFM',
      'Mo Dewji Foundation',
      'Empower Limited',
    ],

    corporatePartners: [
      { name: 'Barrick Gold', context: 'Corporate partnership, AIESEC in Tanzania' },
      { name: 'Total Energies', context: 'Corporate partnership, AIESEC in Tanzania' },
      { name: 'I&M Bank', context: 'Memorandum of understanding' },
      { name: 'METL', context: 'Partnership agreement' },
      { name: 'CRDB Bank', context: 'Corporate engagement' },
      { name: 'INCO.org', context: 'Green Digital Skills Partnership, Rwanda' },
    ],

    /**
     * Appendix — primary-source evidence.
     *
     * `documents` are published as downloadable files. Every description is
     * drawn from the document's own contents, not inferred.
     *
     * `onRequest` records evidence that exists but is deliberately NOT
     * published: signed bilateral agreements carry counterparty signatures and
     * are not one party's to publish, and the audit reports are the AIESEC
     * entities' financial records rather than personal credentials.
     * See documentation/CONTENT_VERIFICATION.md.
     */
    appendix: {
      intro: 'The claims made throughout this portfolio are drawn from primary sources. The documents below are published in full. Further evidence — including signed partnership agreements and independently audited financial reports — is available on request.',

      documents: [
        {
          title: 'AIESEC in Tanzania — Annual Report 2024/25',
          role: 'Authored the foreword as President (Country Director)',
          summary: 'The full national report for Vicent’s term leading AIESEC in Tanzania, covering operations, national projects, local chapter performance, the financial report and partner relationships. Published in the entity’s 25th anniversary year.',
          meta: ['22 pages', '2025', 'Annual Report'],
          file: 'assets/documents/aiesec-tanzania-annual-report-2024-25.pdf',
          size: '12 MB',
        },
        {
          title: 'AIESEC in Rwanda — Annual Report 2023/24',
          role: 'Authored the foreword as President (Country Director)',
          summary: 'The "MC Craft" national report for Vicent’s term leading AIESEC in Rwanda: operations, global volunteer and talent programmes, organisational development, national events and the financial report.',
          meta: ['31 pages', '2024', 'Annual Report'],
          file: 'assets/documents/aiesec-rwanda-annual-report-2023-24.pdf',
          size: '11 MB',
        },
        {
          title: 'AIESEC in Rwanda — Annual Report 2022/23',
          role: 'Term served as Vice President, Business Development & Incoming Global Talent',
          summary: 'The national report for the term in which Vicent led the business development portfolio, covering operations, organisational development and national social projects.',
          meta: ['27 pages', '2023', 'Annual Report'],
          file: 'assets/documents/aiesec-rwanda-annual-report-2022-23.pdf',
          size: '2.3 MB',
        },
        {
          title: 'Barrick Gold — Programmes Partnership Proposal',
          role: 'Partnership proposal prepared under his direction as Country Director',
          summary: 'The full corporate partnership proposal presented to Barrick Gold, setting out AIESEC in Tanzania’s programmes, national activities and the partnership structure. An example of the proposal development and corporate negotiation work described in the case studies.',
          meta: ['48 pages', '2024', 'Partnership Proposal'],
          file: 'assets/documents/barrick-gold-partnership-proposal.pdf',
          size: '3.5 MB',
        },
        {
          title: 'Career Fair 2025 — Programme Overview',
          role: 'National programme directed as Country Director',
          summary: 'Overview of AIESEC in Tanzania’s longest-running national programme, which began at the University of Dar es Salaam in 2000 and now runs across seven regions. Records a reach of 16,663 students over two years.',
          meta: ['1 page', '2025', 'Programme Overview'],
          file: 'assets/documents/career-fair-2025-overview.pdf',
          size: '0.4 MB',
        },
      ],

      onRequest: [
        {
          title: 'Signed partnership agreements and memoranda of understanding',
          detail: 'Executed agreements with I&M Bank, METL, CRDB Bank and INCO.org. Not published here: these are bilateral documents carrying counterparty signatures, and are not one party’s to release unilaterally.',
        },
        {
          title: 'Independently audited financial reports',
          detail: 'Audit reports covering AIESEC in Rwanda (Dec 2022 – Nov 2023) and the 2025 audited report. Not published here: these are the organisations’ financial records rather than personal credentials.',
        },
        {
          title: 'Further proposals and concept notes',
          detail: 'Including the Global Money Week concept note, the SDG Innovation concept note, and incoming global talent proposals prepared for AIESEC in Rwanda.',
        },
      ],
    },

    speakingTopics: [
      { title: 'Strategic Partnerships for Sustainable Organizational Impact', desc: 'How partnership frameworks built on mutual value outlast individual relationships.' },
      { title: 'Leading Across Cultures and Borders', desc: 'Lessons from directing national organizations in two countries.' },
      { title: 'Building Youth Leadership Systems Across Africa', desc: 'Designing leadership pipelines that survive annual leadership turnover.' },
      { title: 'What Nonprofit Leaders Can Learn from Business Development', desc: 'Applying commercial pipeline discipline to mission-driven organizations.' },
    ],

    /**
     * Speaking engagements — conference and summit leadership evidenced by the CV
     * and the annual reports held on file.
     */
    speakingEngagements: [
      { title: 'East African Conference Cycle', role: 'Initiator & Coordinator', organization: 'AIESEC in Tanzania', date: '2024–2025', location: 'East Africa' },
      { title: 'National Career Fair & Leadership Summits', role: 'Director', organization: 'AIESEC in Tanzania', date: '2024–2025', location: 'Tanzania', note: 'Over 500 participants and multiple corporate partners' },
      { title: 'National & Regional Conferences', role: 'Designer & Facilitator', organization: 'AIESEC in Rwanda', date: '2023–2024', location: 'Rwanda', note: 'Over 500 delegates' },
    ],

  };

  VM.getProject = function (slug) {
    return VM.data.projects.find(p => p.slug === slug) || null;
  };

  VM.featuredProjects = function () {
    return VM.data.projects.filter(p => p.featured);
  };
})();
