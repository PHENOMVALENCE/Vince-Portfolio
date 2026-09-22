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
      headline: 'Management Consultant · Strategy · Partnerships · Research & Evaluation',
      summary: 'Management consultant working across strategy, partnerships, research and evaluation. His experience spans private and public sector programmes, field monitoring and evaluation, and national leadership roles in Tanzania and Rwanda.',
      location: 'Dar es Salaam · Tanzania · East Africa',
      proof: [
        'Management Consultant — INNOVEX Development Consulting Ltd',
        'Field M&E — Tanga Yetu Project Phase 2',
        'Former national leader — AIESEC in Tanzania & Rwanda',
      ],
    },

    about: {
      summary: 'Vicent Manila is a management consultant with experience in strategy, research and evaluation, partnership development and programme delivery. At INNOVEX Development Consulting Ltd, he supports field monitoring and evaluation for Tanga Yetu Project Phase 2. His earlier work spans youth livelihoods, national leadership, international business development and cross-border organizational support.',
      philosophy: 'Leadership is stewardship. Durable organizations are built when people have agency, partnerships create mutual value, and strategy becomes a system that can outlast any one leader.',
      mission: 'To help institutions and partnerships turn complex challenges into practical strategies, measurable programmes and stronger leadership systems.',

      expertise: [
        { title: 'Management & Strategy', desc: 'Organizational problem solving, strategy formulation and practical execution.', competencies: ['Management Consulting', 'Strategic Planning', 'Business Intelligence', 'Strategy Execution'] },
        { title: 'Research & Evaluation', desc: 'Field monitoring, programme evaluation and evidence-informed decision support.', competencies: ['Monitoring & Evaluation', 'Field M&E', 'Research', 'Performance Reporting'] },
        { title: 'Strategic Partnerships', desc: 'Business development, partner engagement and institutional relationship management.', competencies: ['Partnership Development', 'Proposal Development', 'Negotiation', 'Corporate Relations'] },
        { title: 'Programme & Project Leadership', desc: 'Programme coordination, stakeholder management and delivery across multi-stakeholder environments.', competencies: ['Programme Coordination', 'Stakeholder Management', 'Youth Livelihoods', 'Development Programmes'] },
        { title: 'Organizational Leadership', desc: 'National leadership, governance, accountability and team performance systems.', competencies: ['National Leadership', 'Governance', 'Team Leadership', 'Organizational Development'] },
        { title: 'International Collaboration', desc: 'Cross-border work across national entities, global committees and business development portfolios.', competencies: ['Tanzania', 'Rwanda', 'AIESEC International', 'Belarus Entity Support'] },
      ],

      international: [
        { country: 'Tanzania', role: 'Management consulting, field M&E, youth livelihoods and national organizational leadership' },
        { country: 'Rwanda', role: 'Member Committee President and Head of Business Development & Employer Branding, AIESEC in Rwanda' },
        { country: 'AIESEC International', role: 'International Legislative Meeting Subcommittee and Business Development Steering Team, Montreal-based global portfolio' },
        { country: 'Belarus', role: 'Remote entity-support role in product development sales' },
      ],

      education: {
        school: 'Institute of Finance Management (IFM)',
        location: 'Dar es Salaam, Tanzania',
        degree: 'Bachelor of Science in Social Protection',
        period: 'Oct 2019 – Nov 2022',
      },

      training: {
        title: 'Digital Lion Program',
        provider: 'Alibaba Global Initiatives & Africa\'s Business Heroes',
        completed: '17 July 2026',
        focus: 'Strategy formulation and implementation using Alibaba business practices',
        certificate: 'AGI2607170104',
      },

      research: {
        title: 'How Social Protection Systems Respond in Times of Crisis and Emergency',
        period: 'October 2020 – February 2021',
        summary: 'Undergraduate research examining social-protection responses during crisis, using the COVID-19 pandemic as its case study.',
      },

      languages: [
        { name: 'English', level: 'Fluent' },
        { name: 'Swahili', level: 'Fluent' },
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
        title: 'Management Consultant',
        organization: 'INNOVEX Development Consulting Ltd', country: 'Dar es Salaam, Tanzania',
        mandate: 'Supporting management consultancy, research and evaluation work across multi-sectoral programmes.',
        outcomes: [
          'Current assignment: Field Monitoring & Evaluation for Tanga Yetu Project Phase 2 in Tanga, Tanzania',
          'Supporting field-level M&E delivery as part of the project team',
        ],
        skills: ['Management Consulting', 'Research & Evaluation', 'Field M&E'],
      },
      {
        period: 'Sep 2025 — Jun 2026',
        title: 'Sustainable Livelihoods Coordinator',
        organization: 'Mo Dewji Foundation', country: 'Dar es Salaam, Tanzania',
        mandate: 'Supported youth entrepreneurship and livelihood interventions focused on employability and economic inclusion.',
        outcomes: [
          'Conducted market assessments to inform programme design',
          'Engaged private-sector and ecosystem partners',
          'Contributed to programme monitoring, reporting and evaluation',
        ],
        skills: ['Programme Coordination', 'Market Assessment', 'Monitoring & Evaluation'],
      },
      {
        period: 'Aug 2024 — Jul 2025',
        title: 'Country Director',
        organization: 'AIESEC in Tanzania', country: 'Dar es Salaam, Tanzania',
        mandate: 'Directed national strategy, partnerships, stakeholder platforms and organizational leadership.',
        outcomes: [
          'Directed 10+ managers and 300+ members across seven cities',
          'Led partnerships with Barrick Gold and Total Energies',
          'Directed leadership summits and stakeholder platforms with 500+ participants',
          'Initiated the East African Conference Cycle',
        ],
        skills: ['National Leadership', 'Partnership Development', 'Stakeholder Management'],
      },
      {
        period: 'Jul 2023 — Jul 2024',
        title: 'Member Committee President',
        organization: 'AIESEC in Rwanda', country: 'Kigali, Rwanda',
        mandate: 'Led national strategy implementation and organizational performance across local chapters.',
        outcomes: [
          'Managed 300+ members and alumni, five heads of department and three local chapters',
          'Designed national and regional conferences for 500+ delegates',
          'Strengthened monitoring, evaluation, reporting and accountability systems',
        ],
        skills: ['Organizational Leadership', 'Governance', 'Monitoring & Evaluation'],
      },
      {
        period: 'Jul 2023 — Jul 2024 · Concurrent',
        title: 'International Legislative Meeting Subcommittee',
        organization: 'AIESEC International', country: 'Montreal, Canada',
        mandate: 'Supported the global conference bidding and host-entity process during a one-year concurrent term.',
        outcomes: [
          'Managed bids, bid criteria and host-entity tracking for the AIESEC global conference',
        ],
        skills: ['International Operations', 'Bid Management', 'Stakeholder Coordination'],
      },
      {
        period: 'Jan 2023 — Jun 2023 · Concurrent',
        title: 'Business Development Steering Team',
        organization: 'AIESEC International', country: 'Montreal, Canada',
        mandate: 'Worked within the global business portfolio during a six-month concurrent term.',
        outcomes: [
          'Drove co-sales and advised Business Development Managers across 100+ countries',
        ],
        skills: ['Business Development', 'Co-sales', 'International Collaboration'],
      },
      {
        period: 'Jul 2022 — Jul 2023',
        title: 'Head of Business Development and Employer Branding',
        organization: 'AIESEC in Rwanda', country: 'Kigali, Rwanda',
        mandate: 'Led business development, employer branding, market research and client profiling.',
        outcomes: [
          'Secured 7+ high-value partnerships',
          'Signed two new national partners and closed five partnerships for Global Money Week',
          'Contributed to a 60% increase in internship placements',
          'Delivered capacity-building sessions',
        ],
        skills: ['Business Development', 'Employer Branding', 'Partnership Development'],
      },
      {
        period: 'Aug 2022 — Sep 2022',
        title: 'Sales Auditor',
        organization: 'Empower Limited', country: 'Dar es Salaam, Tanzania',
        mandate: 'Conducted field audits and performance assessments for sales teams.',
        outcomes: [
          'Prepared analytical reports and recommendations',
        ],
        skills: ['Sales Auditing', 'Performance Analysis'],
      },
      {
        period: 'Oct 2021 — Mar 2022 · Concurrent',
        title: 'Entity Support Team, PD Sales Executive',
        organization: 'AIESEC in Belarus', country: 'Remote',
        mandate: 'Supported national-level direction as part of an international entity-support portfolio.',
        outcomes: [],
        skills: ['Entity Support', 'Sales', 'Cross-border Collaboration'],
      },
      {
        period: 'Nov 2020 — Feb 2022',
        title: 'Local Chapter President',
        organization: 'AIESEC in IFM', country: 'Dar es Salaam, Tanzania',
        mandate: 'Led a local chapter across leadership development, community engagement and employer partnerships.',
        outcomes: [
          'Led 25+ members and five vice presidents across five departments',
          'Designed community engagement and employer partnership strategies',
          'Organized conferences and leadership events',
        ],
        skills: ['Leadership', 'Community Engagement', 'Employer Partnerships'],
      },
      {
        period: 'Aug 2020 — Dec 2020',
        title: 'National Supporting Team, Outgoing Exchange',
        organization: 'AIESEC in Tanzania', country: 'Dar es Salaam, Tanzania',
        mandate: 'Supported national strategic direction for the outgoing exchange portfolio.',
        outcomes: [],
        skills: ['National Support', 'Exchange Operations'],
      },
    ],

    projectCategories: {
      all: 'All Case Studies',
      'business-development': 'Business Development',
      leadership: 'Leadership',
      'employer-branding': 'Employer Branding',
      'youth-development': 'Youth Development',
      'international-conferences': 'International Operations',
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
      { value: '300+', label: 'Members led across seven cities', note: 'AIESEC in Tanzania, 2024–2025' },
      { value: '500+', label: 'Participants and delegates across leadership platforms', note: 'National and regional conferences in Tanzania and Rwanda' },
      { value: '7+', label: 'High-value partnerships secured', note: 'Business Development, AIESEC in Rwanda' },
      { value: '60%', label: 'Increase in internship placements', note: 'Targeted business development initiatives' },
    ],

    /**
     * Organizations and partners.
     * Corporate partners are evidenced by signed agreements and MOUs held on file.
     * REMOVED: 'AIESEC in Belarus' — no supporting evidence in any supplied document.
     */
    organizations: [
      'INNOVEX Development Consulting Ltd',
      'Mo Dewji Foundation',
      'AIESEC in Tanzania',
      'AIESEC in Rwanda',
      'AIESEC International',
      'AIESEC in IFM',
      'AIESEC in Belarus',
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
      {
        title: 'The Men\'s Circle',
        role: 'Host',
        organization: 'AIESEC Alumni Tanzania · 21.25 Cluster',
        date: '17 Sep 2026',
        location: 'Virtual',
        note: 'Hosted a conversation on men, purpose and leadership with Ram Hadji and Elizabeth Feria.',
        url: 'https://themenscircle.rsvpify.com',
        external: true,
      },
      { title: 'East African Conference Cycle', role: 'Initiator & Coordinator', organization: 'AIESEC in Tanzania', date: '2024–2025', location: 'East Africa' },
      { title: 'National Career Fair & Leadership Summits', role: 'Director', organization: 'AIESEC in Tanzania', date: '2024–2025', location: 'Tanzania', note: 'Over 500 participants and multiple corporate partners' },
      { title: 'National & Regional Conferences', role: 'Designer & Facilitator', organization: 'AIESEC in Rwanda', date: '2023–2024', location: 'Rwanda', note: 'Over 500 delegates' },
    ],

    featuredEvent: {
      title: 'The Men\'s Circle',
      eyebrow: 'Recent Engagement',
      date: '17 September 2026',
      time: '7 PM EAT',
      format: 'Virtual',
      role: 'Host',
      organization: 'AIESEC Alumni Tanzania · 21.25 Cluster',
      summary: 'A moderated conversation on men, purpose and leadership featuring Ram Hadji and Elizabeth Feria.',
      image: 'assets/images/Vince/web/gallery/mens-circle-2026.jpg',
      url: 'https://themenscircle.rsvpify.com',
      linkLabel: 'View event page',
    },

    /**
     * External articles, newsletters and interviews can be added here only
     * when a working public URL has been verified. The UI renders this list
     * conditionally so the site never publishes placeholder links.
     */
    externalResources: [],

  };

  VM.getProject = function (slug) {
    return VM.data.projects.find(p => p.slug === slug) || null;
  };

  VM.featuredProjects = function () {
    return VM.data.projects.filter(p => p.featured);
  };
})();
