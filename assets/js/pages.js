/**
 * Vicent Manila — Page rendering & interactions
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM) return;

  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str ?? '';
    return d.innerHTML;
  }

  function delay(i, step) {
    return (i * (step || 0.05)).toFixed(2) + 's';
  }

  const S = () => VM.site;
  const D = () => VM.data;

  VM.pages = {
    init() {
      const page = document.body.dataset.page;
      const main = document.getElementById('main-content');
      if (!main) return;

      const renderers = {
        home: this.renderHome,
        leadership: this.renderLeadership,
        projects: this.renderProjects,
        project: this.renderProject,
        gallery: this.renderGallery,
        speaking: this.renderSpeaking,
        media: this.renderMedia,
      };

      if (renderers[page]) {
        main.innerHTML = renderers[page].call(this);
        this.afterRender(page);
      }
    },

    afterRender(page) {
      if (page === 'projects') this.initProjectFilters();
      if (page === 'media') this.initMediaFilters();
      if (page === 'gallery') this.initGallery();
      if (page === 'project') this.initProjectRedirect();
      this.fillContactCTAs();
      VM.ui?.refreshIcons?.();
      VM.ui?.initReveal?.();
      VM.ui?.initCounters?.();
      VM.ui?.initTimeline?.();
      VM.ui?.initTestimonials?.();
    },

    fillContactCTAs() {
      document.querySelectorAll('#contact-ctas, .contact-ctas-slot').forEach(el => {
        const compact = el.dataset.compact === 'true';
        el.innerHTML = VM.layout.contactCTAs(compact);
      });
    },

    renderHome() {
      const s = S();
      const d = D();
      const img = VM.images || {};
      const featured = VM.featuredProjects();
      const moments = [];
      const journeyThumbs = [
        img.executive,
        img.speakingBarrick,
        img.speakingSuit,
        img.conference,
      ];

      return `
        <section id="hero" class="relative min-h-[92vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-navy">
          <div class="absolute top-1/4 right-0 w-[28rem] h-[28rem] bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div class="absolute bottom-0 left-0 w-72 h-72 bg-navy/5 dark:bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div class="max-w-8xl mx-auto px-6 py-14 md:py-20 w-full relative z-10 hero-shell">
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div class="lg:col-span-6 hero-intro">
                <img src="${esc(s.logo || img.logo || 'assets/images/vincelogo.png')}" alt="" class="reveal brand-logo brand-logo--hero hero-logo" width="1254" height="1254" decoding="async" aria-hidden="true">
                <p class="reveal section-label mb-4 hero-eyebrow">${esc(d.hero.eyebrow)}</p>
                <h1 class="reveal hero-title text-navy dark:text-white mb-4" style="--d:.05s">${esc(s.name)}</h1>
                <p class="reveal hero-role text-lg md:text-xl text-navy/80 dark:text-zinc-200 mb-1 font-semibold" style="--d:.08s">${esc(d.hero.roles[0])}</p>
                <p class="reveal hero-subtitle text-sm md:text-base text-muted dark:text-zinc-400 mb-5" style="--d:.1s">${esc(d.hero.roles[1])} · ${esc(d.hero.roles[2])}</p>
                <p class="reveal hero-summary text-base md:text-lg text-muted dark:text-zinc-400 leading-relaxed max-w-xl mb-6 lg:mb-8" style="--d:.14s">${esc(d.hero.summary)}</p>

                <div class="reveal hero-portrait-mobile flex justify-center mb-8 lg:hidden" style="--d:.12s">
                  <div class="portrait-frame portrait-frame--mobile">
                    <div class="portrait-frame__accent" aria-hidden="true"></div>
                    <div class="portrait-frame__ring" aria-hidden="true"></div>
                    <div class="portrait-frame__media">
                      <img src="${esc(img.hero)}" alt="Professional portrait of Vicent Manila" width="960" height="1200" fetchpriority="high" decoding="async">
                    </div>
                  </div>
                </div>

                <div class="reveal hero-actions mb-10" style="--d:.18s">
                  <a href="${s.cv}" target="_blank" rel="noopener noreferrer" class="hero-btn hero-btn--primary btn-lift inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-5 py-3 rounded-lg text-sm"><i data-lucide="file-text" class="w-4 h-4"></i> View my CV</a>
                  <div class="hero-btn-row">
                    <a href="leadership.html" class="hero-btn hero-btn--secondary btn-lift inline-flex items-center justify-center gap-2 border border-black/[0.08] dark:border-white/10 text-ink dark:text-white font-semibold px-5 py-3 rounded-lg text-sm hover:border-gold transition-colors">View Experience</a>
                    <a href="projects.html" class="hero-btn hero-btn--secondary btn-lift inline-flex items-center justify-center gap-2 border border-black/[0.08] dark:border-white/10 text-ink dark:text-white font-semibold px-5 py-3 rounded-lg text-sm hover:border-gold transition-colors">View Projects</a>
                  </div>
                  <a href="#contact" class="hero-btn hero-btn--link btn-lift inline-flex items-center gap-2 text-muted hover:text-gold font-medium px-1 py-2 text-sm transition-colors">Contact Vincent <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                </div>
                <div class="reveal hero-metrics pt-7 border-t border-black/[0.06] dark:border-white/10" style="--d:.22s">
                  ${d.hero.stats.map(st => `<div class="hero-metric"><p class="hero-metric__value text-2xl md:text-3xl font-bold text-navy dark:text-gold">${esc(st.value)}</p><p class="hero-metric__label text-xs text-muted mt-1 leading-snug">${esc(st.label)}</p></div>`).join('')}
                </div>
              </div>
              <div class="hidden lg:block lg:col-span-6 hero-portrait-desktop">
                <div class="reveal flex justify-end" style="--d:.12s">
                  <div class="portrait-frame">
                    <div class="portrait-frame__accent" aria-hidden="true"></div>
                    <div class="portrait-frame__ring" aria-hidden="true"></div>
                    <div class="portrait-frame__media">
                      <img src="${esc(img.hero)}" alt="Professional portrait of Vicent Manila" width="960" height="1200" decoding="async">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-7 border-y border-black/[0.06] dark:border-white/10 bg-canvas dark:bg-navy-secondary/30">
          <div class="max-w-8xl mx-auto px-6">
            <p class="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-5">Organizations Served</p>
            <div class="flex flex-wrap justify-center gap-x-8 gap-y-3">
              ${d.organizations.map(o => `<span class="text-sm font-medium text-muted dark:text-zinc-500">${esc(o)}</span>`).join('')}
            </div>
          </div>
        </section>

        <section id="about" class="section-pad bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
              <div class="lg:col-span-5 order-1">
                <div class="reveal portrait-frame portrait-frame--profile max-w-sm mx-auto lg:mx-0">
                  <div class="portrait-frame__ring" aria-hidden="true"></div>
                  <div class="portrait-frame__media">
                    <img src="${esc(img.profile)}" alt="Vicent Manila professional portrait" width="834" height="1080" loading="lazy" decoding="async">
                  </div>
                </div>
              </div>
              <div class="lg:col-span-7 order-2">
                <p class="reveal section-label mb-3">About</p>
                <h2 class="reveal section-title text-navy dark:text-white mb-4" style="--d:.05s">Executive Profile</h2>
                <p class="reveal text-lg text-muted dark:text-zinc-400 leading-relaxed max-w-2xl" style="--d:.1s">${esc(d.about.summary)}</p>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6 mb-12">
              <div class="reveal card-executive p-7 md:p-8 h-full" style="--d:.05s">
                <div class="flex items-center gap-3 mb-4"><span class="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg text-gold"><i data-lucide="compass" class="w-5 h-5"></i></span><h3 class="text-xl font-semibold text-navy dark:text-white">Leadership Philosophy</h3></div>
                <p class="text-muted dark:text-zinc-400 leading-relaxed">${esc(d.about.philosophy)}</p>
              </div>
              <div class="reveal card-executive p-7 md:p-8 h-full" style="--d:.1s">
                <div class="flex items-center gap-3 mb-4"><span class="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg text-gold"><i data-lucide="target" class="w-5 h-5"></i></span><h3 class="text-xl font-semibold text-navy dark:text-white">Professional Mission</h3></div>
                <p class="text-muted dark:text-zinc-400 leading-relaxed">${esc(d.about.mission)}</p>
              </div>
            </div>
            <div class="mb-12">
              <h3 class="reveal text-xl font-semibold text-navy dark:text-white mb-6">Core Expertise</h3>
              <div class="grid sm:grid-cols-2 gap-4">
                ${d.about.expertise.map((e, i) => `<div class="reveal card-executive expertise-card" style="--d:${delay(i)}"><h4 class="font-semibold text-navy dark:text-white mb-2">${esc(e.title)}</h4><p class="text-sm text-muted dark:text-zinc-400 leading-relaxed">${esc(e.desc)}</p></div>`).join('')}
              </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-6">
              <div class="reveal card-executive p-7 md:p-8">
                <h3 class="text-xl font-semibold text-navy dark:text-white mb-6">International Experience</h3>
                <ul class="space-y-4">
                  ${d.about.international.map(intl => `<li class="flex items-start gap-3 pb-4 border-b border-black/[0.06] dark:border-white/10 last:border-0 last:pb-0"><i data-lucide="map-pin" class="w-4 h-4 text-gold mt-1 shrink-0"></i><div><p class="font-semibold text-navy dark:text-white">${esc(intl.country)}</p><p class="text-sm text-muted">${esc(intl.role)}</p></div></li>`).join('')}
                </ul>
              </div>
              <div class="reveal card-executive p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 class="text-xl font-semibold text-navy dark:text-white mb-4">Education</h3>
                  <p class="font-semibold text-navy dark:text-white text-lg">${esc(d.about.education.school)}</p>
                  <p class="text-sm text-gold font-medium mb-2">${esc(d.about.education.location)}</p>
                  <p class="text-muted leading-relaxed">${esc(d.about.education.degree)}</p>
                </div>
                <div class="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/10">
                  <p class="text-sm text-muted flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-gold"></i> Based in ${esc(s.location)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" class="section-pad bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div><p class="reveal section-label mb-3">Career</p><h2 class="reveal section-title text-navy dark:text-white">Leadership Journey</h2></div>
              <a href="leadership.html" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">Full timeline <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
            <div class="relative max-w-3xl mx-auto" id="timeline">
              <div class="timeline-line"></div>
              <div class="timeline-progress" id="timeline-progress" style="height:0"></div>
              ${d.experience.slice(0, 4).map((job, i) => `
                <article class="reveal relative pl-10 pb-8 last:pb-0" style="--d:${delay(i, 0.08)}">
                  <div class="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-gold bg-white dark:bg-navy z-10"></div>
                  <div class="card-executive p-5 sm:p-6">
                    <div class="flex gap-4">
                      ${journeyThumbs[i] ? `<div class="timeline-thumb hidden sm:block"><img src="${esc(journeyThumbs[i])}" alt="" width="72" height="72" loading="lazy" decoding="async"></div>` : ''}
                      <div class="min-w-0 flex-1">
                        <span class="text-xs font-semibold text-gold uppercase tracking-wider">${esc(job.period)}</span>
                        <h3 class="text-lg font-semibold text-navy dark:text-white mt-1 mb-1">${esc(job.title)}</h3>
                        <p class="text-sm font-medium text-muted mb-3">${esc(job.organization)} · ${esc(job.country)}</p>
                        <p class="text-sm text-muted dark:text-zinc-400 leading-relaxed">${esc(job.overview)}</p>
                      </div>
                    </div>
                  </div>
                </article>`).join('')}
            </div>
          </div>
        </section>

        <section id="projects" class="section-pad bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div><p class="reveal section-label mb-3">Portfolio</p><h2 class="reveal section-title text-navy dark:text-white">Featured Projects</h2></div>
              <a href="projects.html" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">All projects <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${featured.map((p, i) => this.projectCard(p, i)).join('')}
            </div>
          </div>
        </section>

        <section id="leadership-action" class="section-pad bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p class="reveal section-label mb-3">Presence</p>
                <h2 class="reveal section-title text-navy dark:text-white">Leadership in Action</h2>
                <p class="reveal text-muted mt-3 max-w-xl">Moments from Vicent’s professional engagements, speaking sessions, partnerships, and leadership journey.</p>
              </div>
              <a href="gallery.html" class="reveal btn-lift inline-flex items-center gap-2 bg-navy dark:bg-gold text-white dark:text-navy text-sm font-semibold px-4 py-2.5 rounded-lg">View Full Gallery <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
            <div class="action-gallery">
              ${(VM.galleryFeatured ? VM.galleryFeatured(6) : moments).map((m, i) => {
                const src = m.thumb || m.src;
                const alt = m.alt || m.caption || 'Vicent Manila';
                const caption = m.title || m.caption || '';
                return `
                <figure class="reveal action-gallery__item" style="--d:${delay(i, 0.05)}">
                  <a href="gallery.html" class="block w-full h-full" aria-label="${esc(alt)}">
                    <img src="${esc(src)}" alt="${esc(alt)}" width="${m.width || 800}" height="${m.height || 1000}" loading="lazy" decoding="async">
                    ${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}
                  </a>
                </figure>`;
              }).join('')}
            </div>
          </div>
        </section>

        <section id="impact" class="section-pad bg-navy text-white">
          <div class="max-w-8xl mx-auto px-6">
            <div class="text-center max-w-2xl mx-auto mb-14">
              <p class="reveal section-label mb-3">Impact</p>
              <h2 class="reveal section-title text-white mb-4">Leadership Metrics</h2>
              <p class="reveal text-white/60 text-lg">Measurable outcomes across organizations, partnerships, and communities.</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              ${d.impactStats.map((st, i) => `<div class="reveal stat-card text-center p-5 md:p-6" style="--d:${delay(i, 0.06)}"><i data-lucide="${st.icon}" class="w-5 h-5 text-gold mx-auto mb-3"></i><p class="text-3xl font-bold text-gold mb-1" data-count="${st.value}" data-suffix="${esc(st.suffix)}">0${esc(st.suffix)}</p><p class="text-xs text-white/50 leading-snug">${esc(st.label)}</p></div>`).join('')}
            </div>
          </div>
        </section>

        <section id="skills" class="skills-section" aria-labelledby="skills-heading">
          <div class="skills-bg" aria-hidden="true">
            <div class="skills-bg__glow skills-bg__glow--a"></div>
            <div class="skills-bg__glow skills-bg__glow--b"></div>
            <div class="skills-bg__dots"></div>
          </div>
          <div class="skills-inner max-w-8xl mx-auto px-6">
            <div class="skills-header reveal text-center mx-auto">
              <p class="section-label mb-4">Expertise</p>
              <h2 id="skills-heading" class="section-title text-white mb-4">Core Competencies</h2>
              <p class="skills-lead">A comprehensive blend of leadership, strategic thinking, business development, and operational excellence delivering measurable impact across Africa and beyond.</p>
              <div class="skills-divider" aria-hidden="true"></div>
            </div>
            <div class="skills-grid">
              ${(() => {
                const icons = {
                  'Leadership': 'users',
                  'Business Development': 'trending-up',
                  'Sales': 'shopping-cart',
                  'Operations': 'cog',
                  'CRM': 'share-2',
                  'Management': 'briefcase',
                  'International Relations': 'globe',
                  'Strategy': 'target',
                  'Communication': 'message-circle',
                  'Languages': 'languages',
                };
                return Object.entries(d.skillCategories).map(([cat, skills], i) => {
                  const featured = cat === 'Business Development';
                  const icon = icons[cat] || 'sparkles';
                  return `
                  <article class="reveal skills-card${featured ? ' skills-card--featured' : ''}" style="--d:${delay(i, 0.04)}">
                    <div class="skills-card__icon" aria-hidden="true"><i data-lucide="${icon}"></i></div>
                    <h3 class="skills-card__title">${esc(cat)}</h3>
                    <div class="skills-card__rule" aria-hidden="true"></div>
                    <ul class="skills-card__tags">
                      ${skills.map(sk => `<li><span class="skills-tag">${esc(sk)}</span></li>`).join('')}
                    </ul>
                  </article>`;
                }).join('');
              })()}
            </div>
            <p class="skills-closing reveal">Strategic expertise. <span>Measurable impact.</span> Lasting change.</p>
          </div>
        </section>

        <section id="testimonials" class="section-pad bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <div class="text-center mb-12">
              <p class="reveal section-label mb-3">Endorsements</p>
              <h2 class="reveal section-title text-navy dark:text-white">What Leaders Say</h2>
            </div>
            <div id="testimonial-carousel" class="max-w-3xl mx-auto relative overflow-hidden">
              <div id="testimonial-track" class="flex transition-transform duration-500 ease-out">
                ${d.testimonials.map(t => `
                  <blockquote class="w-full shrink-0 card-executive p-8 md:p-10">
                    <i data-lucide="quote" class="w-8 h-8 text-gold/60 mb-4"></i>
                    <p class="text-lg text-muted dark:text-zinc-300 leading-relaxed mb-8">"${esc(t.quote)}"</p>
                    <footer class="flex items-center gap-4">
                      <span class="avatar-initials" aria-hidden="true">${esc(t.initials)}</span>
                      <div><cite class="font-semibold text-navy dark:text-white not-italic">${esc(t.name)}</cite><p class="text-sm text-muted">${esc(t.position)}, ${esc(t.organization)}</p></div>
                    </footer>
                  </blockquote>`).join('')}
              </div>
              <div class="flex items-center justify-center gap-4 mt-6">
                <button type="button" id="testimonial-prev" class="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" aria-label="Previous testimonial"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
                <div id="testimonial-dots" class="flex gap-2" role="tablist" aria-label="Testimonial slides"></div>
                <button type="button" id="testimonial-next" class="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" aria-label="Next testimonial"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
              </div>
            </div>
          </div>
        </section>

        <section id="insights" class="section-pad bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div><p class="reveal section-label mb-3">Insights</p><h2 class="reveal section-title text-navy dark:text-white">Media & Thought Leadership</h2></div>
              <a href="media.html" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">View all <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              ${d.mediaItems.slice(0, 3).map((m, i) => `
                <article class="reveal card-executive media-editorial" style="--d:${delay(i, 0.08)}">
                  ${m.image ? `<div class="media-editorial__img"><img src="${esc(m.image)}" alt="${esc(m.title)}" width="800" height="500" loading="lazy" decoding="async"></div>` : ''}
                  <div class="p-6 flex flex-col flex-1">
                    <span class="text-xs font-semibold text-gold uppercase">${esc(m.type)}</span>
                    <h3 class="text-lg font-semibold text-navy dark:text-white mt-2 mb-2">${esc(m.title)}</h3>
                    <p class="text-sm text-muted leading-relaxed mb-3 flex-1">${esc(m.excerpt)}</p>
                    <p class="text-xs text-muted">${esc(m.source)} · ${esc(m.date)}</p>
                  </div>
                </article>`).join('')}
            </div>
          </div>
        </section>`;
    },

    projectCard(p, i) {
      return `
        <article class="reveal card-executive overflow-hidden group h-full flex flex-col" style="--d:${delay(i, 0.08)}">
          <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="block project-card-media">
            <img src="${esc(p.image)}" alt="${esc(p.title)}" width="900" height="562" loading="lazy" decoding="async">
          </a>
          <div class="p-6 flex flex-col flex-1">
            <span class="text-xs font-semibold text-gold uppercase tracking-wider">${esc(p.category_label)}</span>
            <h3 class="text-xl font-semibold text-navy dark:text-white mt-2 mb-2">
              <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="hover:text-gold transition-colors">${esc(p.title)}</a>
            </h3>
            <p class="text-sm text-muted leading-relaxed mb-4 flex-1">${esc(p.summary)}</p>
            <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="inline-flex items-center gap-1 text-sm font-semibold text-navy dark:text-white hover:text-gold transition-colors">View case study <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
          </div>
        </article>`;
    },

    renderLeadership() {
      const d = D();
      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Leadership</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">Leadership Journey</h1>
            <p class="reveal text-lg text-muted max-w-2xl">${esc(d.about.philosophy)}</p>
          </div>
        </section>
        <section class="py-16 bg-navy">
          <div class="max-w-8xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            ${d.impactStats.map(st => `<div class="stat-card text-center p-5"><p class="text-2xl font-bold text-gold" data-count="${st.value}" data-suffix="${esc(st.suffix)}">0${esc(st.suffix)}</p><p class="text-xs text-white/50 mt-1">${esc(st.label)}</p></div>`).join('')}
          </div>
        </section>
        <section class="py-24 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-12">Complete Timeline</h2>
            <div class="relative max-w-3xl mx-auto" id="timeline">
              <div class="timeline-line"></div>
              <div class="timeline-progress" id="timeline-progress"></div>
              ${d.experience.map((job, i) => `
                <article class="reveal relative pl-10 pb-10 last:pb-0" style="--d:${delay(i)}">
                  <div class="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-gold bg-canvas dark:bg-navy z-10"></div>
                  <div class="card-executive p-8">
                    <div class="flex flex-wrap items-center gap-3 mb-3">
                      <span class="text-xs font-semibold text-gold uppercase tracking-wider px-2 py-1 bg-gold/10 rounded">${esc(job.period)}</span>
                      <span class="text-xs text-muted flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${esc(job.country)}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-navy dark:text-white mb-1">${esc(job.title)}</h3>
                    <p class="text-sm font-medium text-muted mb-4">${esc(job.organization)}</p>
                    <p class="text-sm text-muted leading-relaxed mb-6">${esc(job.overview)}</p>
                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                      <div><h4 class="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Responsibilities</h4><ul class="space-y-2">${job.responsibilities.map(r => `<li class="text-sm text-muted flex gap-2"><span class="text-gold">·</span> ${esc(r)}</li>`).join('')}</ul></div>
                      <div><h4 class="text-xs font-semibold uppercase tracking-wider text-gold mb-3">Achievements</h4><ul class="space-y-2">${job.achievements.map(a => `<li class="text-sm text-muted flex gap-2"><span class="text-gold">·</span> ${esc(a)}</li>`).join('')}</ul></div>
                    </div>
                    <div class="pt-4 border-t border-black/[0.06] dark:border-white/10">
                      <p class="text-sm text-muted mb-3"><strong class="text-navy dark:text-white">Impact:</strong> ${esc(job.impact)}</p>
                      <div class="flex flex-wrap gap-2">${job.skills.map(sk => `<span class="text-xs px-2.5 py-1 rounded-full bg-canvas dark:bg-navy border border-black/[0.06] dark:border-white/10 text-muted">${esc(sk)}</span>`).join('')}</div>
                    </div>
                  </div>
                </article>`).join('')}
            </div>
          </div>
        </section>
        <section class="py-24 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Organizations Served</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${d.organizations.map(org => `<div class="card-executive p-6 text-center"><i data-lucide="building-2" class="w-6 h-6 text-gold mx-auto mb-3"></i><p class="font-semibold text-navy dark:text-white text-sm">${esc(org)}</p></div>`).join('')}
            </div>
          </div>
        </section>
        <section class="py-24 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Global Contributions</h2>
            <div class="grid md:grid-cols-2 gap-6">
              ${d.about.international.map(intl => `<div class="card-executive p-8"><h3 class="text-xl font-semibold text-navy dark:text-white mb-2">${esc(intl.country)}</h3><p class="text-muted">${esc(intl.role)}</p></div>`).join('')}
            </div>
          </div>
        </section>`;
    },

    renderProjects() {
      const d = D();
      const filters = Object.entries(d.projectCategories).map(([key, label]) =>
        `<button type="button" data-filter="${esc(key)}" class="filter-btn text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${key === 'all' ? 'is-active' : ''}">${esc(label)}</button>`
      ).join('');

      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Portfolio</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">All Projects</h1>
            <p class="reveal text-lg text-muted max-w-2xl leading-relaxed">Strategic initiatives across business development, international partnerships, leadership, and organizational growth.</p>
          </div>
        </section>
        <section class="pb-24">
          <div class="max-w-8xl mx-auto px-6">
            <div class="reveal flex flex-wrap gap-2 mb-10" id="project-filters">${filters}</div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
              ${d.projects.map((p, i) => `<div class="project-item" data-category="${esc(p.category)}">${this.projectCard(p, i)}</div>`).join('')}
            </div>
          </div>
        </section>`;
    },

    renderProject() {
      return `<div id="project-root"></div>`;
    },

    initProjectRedirect() {
      const root = document.getElementById('project-root');
      const slug = new URLSearchParams(location.search).get('slug');
      const project = VM.getProject(slug);
      const d = D();

      if (!project) {
        location.href = 'projects.html';
        return;
      }

      document.title = `${project.title} — ${S().name}`;

      const gallery = project.gallery?.length ? `
        <section class="py-16 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Project Gallery</h2>
            <div class="grid md:grid-cols-2 gap-4">${project.gallery.map(img => `<img src="${esc(img)}" alt="Project gallery image" class="rounded-xl w-full aspect-video object-cover" loading="lazy">`).join('')}</div>
          </div>
        </section>` : '';

      const related = project.related?.length ? `
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Related Projects</h2>
            <div class="grid md:grid-cols-2 gap-6">
              ${project.related.map(sl => {
                const rel = VM.getProject(sl);
                if (!rel) return '';
                return `<a href="project.html?slug=${encodeURIComponent(rel.slug)}" class="card-executive p-6 flex items-center gap-4 group"><img src="${esc(rel.image)}" alt="" class="w-20 h-20 rounded-lg object-cover shrink-0" loading="lazy"><div><p class="text-xs text-gold font-semibold uppercase">${esc(rel.category_label)}</p><p class="font-semibold text-navy dark:text-white group-hover:text-gold transition-colors">${esc(rel.title)}</p></div></a>`;
              }).join('')}
            </div>
          </div>
        </section>` : '';

      root.innerHTML = `
        <section class="pt-28 pb-0 relative overflow-hidden">
          <div class="relative aspect-[21/9] max-h-[480px] overflow-hidden">
            <img src="${esc(project.image)}" alt="${esc(project.title)}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
          </div>
          <div class="max-w-8xl mx-auto px-6 -mt-32 relative z-10 pb-12">
            <span class="inline-block text-xs font-semibold text-gold uppercase tracking-wider bg-navy/80 backdrop-blur px-3 py-1 rounded-lg mb-4">${esc(project.category_label)} · ${esc(project.year)}</span>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">${esc(project.title)}</h1>
            <p class="text-lg text-white/70 max-w-2xl">${esc(project.summary)}</p>
          </div>
        </section>
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-3xl mx-auto px-6 prose-cs">
            <h3>Overview</h3><p>${esc(project.overview)}</p>
            <h3>Challenge</h3><p>${esc(project.challenge)}</p>
            <h3>Objectives</h3><ul>${project.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul>
            <h3>Role</h3><p>${esc(project.role)}</p>
            <h3>Strategy</h3><p>${esc(project.strategy)}</p>
            <h3>Execution</h3><p>${esc(project.execution)}</p>
            <h3>Results</h3><ul>${project.results.map(r => `<li>${esc(r)}</li>`).join('')}</ul>
            <h3>Impact</h3><p>${esc(project.impact)}</p>
          </div>
        </section>
        ${gallery}
        ${related}`;
    },

    renderGallery() {
      const filters = Object.entries(VM.galleryFilters || { all: 'All' }).map(([key, label]) =>
        `<button type="button" data-gallery-filter="${esc(key)}" class="gallery-filter-btn text-sm font-medium px-4 py-2 rounded-lg border transition-colors whitespace-nowrap ${key === 'all' ? 'is-active' : ''}" aria-pressed="${key === 'all' ? 'true' : 'false'}">${esc(label)}</button>`
      ).join('');

      return `
        <section class="pt-28 pb-10 bg-white dark:bg-navy" id="gallery-page">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Leadership in Action</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">Gallery</h1>
            <p class="reveal text-base md:text-lg text-muted max-w-2xl leading-relaxed">A visual collection of Vicent Manila’s leadership engagements, partnerships, speaking sessions, professional milestones, and international collaborations.</p>
          </div>
        </section>
        <section class="pb-20 md:pb-24 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <div class="reveal gallery-filters mb-8" id="gallery-filters" role="toolbar" aria-label="Gallery categories">${filters}</div>
            <p id="gallery-count" class="text-sm text-muted mb-6" aria-live="polite"></p>
            <div class="gallery-masonry" id="gallery-grid"></div>
            <p id="gallery-empty" class="hidden text-center text-muted py-16">No images in this category.</p>
          </div>
        </section>
        <div id="gallery-lightbox" class="lightbox hidden" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Image viewer">
          <div class="lightbox__shell">
            <button type="button" class="lightbox__btn lightbox__close" id="lightbox-close" aria-label="Close gallery viewer"><i data-lucide="x" class="w-5 h-5"></i></button>
            <button type="button" class="lightbox__btn lightbox__prev" id="lightbox-prev" aria-label="Previous image"><i data-lucide="chevron-left" class="w-5 h-5"></i></button>
            <button type="button" class="lightbox__btn lightbox__next" id="lightbox-next" aria-label="Next image"><i data-lucide="chevron-right" class="w-5 h-5"></i></button>
            <figure class="lightbox__figure">
              <img id="lightbox-image" src="" alt="">
              <figcaption class="lightbox__caption">
                <h3 id="lightbox-title"></h3>
                <p id="lightbox-caption"></p>
              </figcaption>
              <p class="lightbox__counter" id="lightbox-counter" aria-live="polite"></p>
            </figure>
          </div>
        </div>`;
    },

    initGallery() {
      const items = VM.galleryImages || [];
      const grid = document.getElementById('gallery-grid');
      const lightbox = document.getElementById('gallery-lightbox');
      const empty = document.getElementById('gallery-empty');
      const countEl = document.getElementById('gallery-count');
      if (!grid || !lightbox) return;

      let category = 'all';
      let filtered = items.slice();
      let current = 0;
      let lastTrigger = null;
      let touchX = null;

      const imgEl = document.getElementById('lightbox-image');
      const titleEl = document.getElementById('lightbox-title');
      const captionEl = document.getElementById('lightbox-caption');
      const counterEl = document.getElementById('lightbox-counter');

      const render = () => {
        filtered = items.filter(i => category === 'all' || i.category === category);
        if (countEl) {
          countEl.textContent = filtered.length
            ? `${filtered.length} image${filtered.length === 1 ? '' : 's'}`
            : '';
        }
        empty?.classList.toggle('hidden', filtered.length > 0);
        grid.innerHTML = filtered.map((item, idx) => {
          const thumb = item.thumb || item.src;
          const eager = idx < 4;
          return `
            <figure class="gallery-card" data-gallery-index="${idx}" tabindex="0" role="button" aria-label="View ${esc(item.alt)}">
              <div class="gallery-card__media">
                <img src="${esc(thumb)}" alt="${esc(item.alt)}" width="${item.width || ''}" height="${item.height || ''}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
                <div class="gallery-card__overlay" aria-hidden="true"><span>${esc((VM.galleryFilters && VM.galleryFilters[item.category]) || item.category)}</span></div>
              </div>
              <figcaption class="gallery-card__meta">
                <span class="text-xs font-semibold text-gold uppercase tracking-wider">${esc((VM.galleryFilters && VM.galleryFilters[item.category]) || item.category)}</span>
                <h3>${esc(item.title)}</h3>
                <p>${esc(item.caption)}</p>
              </figcaption>
            </figure>`;
        }).join('');

        grid.querySelectorAll('.gallery-card').forEach(el => {
          const open = () => {
            lastTrigger = el;
            openLightbox(parseInt(el.dataset.galleryIndex, 10));
          };
          el.addEventListener('click', open);
          el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              open();
            }
          });
        });

        VM.ui?.refreshIcons?.();
        VM.ui?.initReveal?.();
      };

      const showSlide = (index) => {
        if (!filtered.length) return;
        current = ((index % filtered.length) + filtered.length) % filtered.length;
        const item = filtered[current];
        if (imgEl) {
          imgEl.src = item.src;
          imgEl.alt = item.alt;
        }
        if (titleEl) titleEl.textContent = item.title || '';
        if (captionEl) captionEl.textContent = item.caption || '';
        if (counterEl) counterEl.textContent = `${current + 1} / ${filtered.length}`;
      };

      const openLightbox = (index) => {
        showSlide(index);
        lightbox.classList.remove('hidden');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
        document.getElementById('lightbox-close')?.focus();
        VM.ui?.refreshIcons?.();
      };

      const closeLightbox = () => {
        lightbox.classList.add('hidden');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        if (imgEl) imgEl.removeAttribute('src');
        lastTrigger?.focus?.();
      };

      document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
      document.getElementById('lightbox-prev')?.addEventListener('click', () => showSlide(current - 1));
      document.getElementById('lightbox-next')?.addEventListener('click', () => showSlide(current + 1));

      lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
      });

      const onKey = (e) => {
        if (lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showSlide(current - 1);
        if (e.key === 'ArrowRight') showSlide(current + 1);
      };
      document.addEventListener('keydown', onKey);

      lightbox.addEventListener('touchstart', e => {
        touchX = e.changedTouches[0]?.screenX ?? null;
      }, { passive: true });
      lightbox.addEventListener('touchend', e => {
        if (touchX == null) return;
        const dx = (e.changedTouches[0]?.screenX ?? touchX) - touchX;
        if (Math.abs(dx) > 50) showSlide(current + (dx < 0 ? 1 : -1));
        touchX = null;
      }, { passive: true });

      document.querySelectorAll('[data-gallery-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          category = btn.dataset.galleryFilter;
          document.querySelectorAll('.gallery-filter-btn').forEach(b => {
            const active = b === btn;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-pressed', active ? 'true' : 'false');
          });
          render();
        });
      });

      render();
    },

    renderSpeaking() {
      const s = S();
      const d = D();
      const speakingGallery = (VM.galleryImages || []).filter(g => g.category === 'speaking');
      const galleryItems = speakingGallery.length ? speakingGallery.slice(0, 3) : (VM.galleryFeatured ? VM.galleryFeatured(3) : []);

      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Speaking</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">Speaking & Engagements</h1>
            <p class="reveal text-lg text-muted max-w-2xl">Keynotes, panel discussions, and workshops on youth leadership, strategic partnerships, and international development.</p>
          </div>
        </section>
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Speaking Topics</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${d.speakingTopics.map((topic, i) => `<div class="reveal card-executive p-6 flex items-start gap-3" style="--d:${delay(i)}"><i data-lucide="mic" class="w-5 h-5 text-gold shrink-0 mt-0.5"></i><p class="font-medium text-navy dark:text-white">${esc(topic)}</p></div>`).join('')}
            </div>
          </div>
        </section>
        <section class="py-16 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Past Engagements</h2>
            <div class="space-y-4">
              ${d.speakingEngagements.map(eng => `
                <div class="reveal card-executive p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div><span class="text-xs font-semibold text-gold uppercase">${esc(eng.type)}</span><h3 class="text-lg font-semibold text-navy dark:text-white mt-1">${esc(eng.title)}</h3><p class="text-sm text-muted">${esc(eng.event)}</p></div>
                  <div class="text-sm text-muted shrink-0 flex items-center gap-4"><span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${esc(eng.location)}</span><span>${esc(eng.date)}</span></div>
                </div>`).join('')}
            </div>
          </div>
        </section>
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
            <div class="card-executive p-8">
              <h2 class="text-xl font-bold text-navy dark:text-white mb-4">Media Kit</h2>
              <p class="text-muted leading-relaxed mb-6">Download professional biography, headshots, speaking topics, and brand assets for event organizers and media inquiries.</p>
              <a href="${s.cv}" target="_blank" rel="noopener noreferrer" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2.5 rounded-lg text-sm"><i data-lucide="file-text" class="w-4 h-4"></i> View my CV</a>
            </div>
            <div class="card-executive p-8" id="booking">
              <h2 class="text-xl font-bold text-navy dark:text-white mb-4">Book a Speaking Engagement</h2>
              <p class="text-muted leading-relaxed mb-6">Reach out directly to discuss keynotes, panels, or workshops for your event.</p>
              <div class="contact-ctas-slot" data-compact="true"></div>
            </div>
          </div>
        </section>
        <section class="py-16 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-2xl font-bold text-navy dark:text-white">Speaking Gallery</h2>
              <a href="gallery.html" class="text-sm font-semibold text-gold hover:underline">Full gallery →</a>
            </div>
            <div class="grid md:grid-cols-3 gap-4">
              ${galleryItems.map(item => `<figure class="card-executive overflow-hidden"><img src="${esc(item.thumb || item.src)}" alt="${esc(item.alt || item.title)}" class="w-full aspect-[4/5] object-cover" width="${item.width || ''}" height="${item.height || ''}" loading="lazy" decoding="async"><figcaption class="p-4"><p class="font-semibold text-navy dark:text-white text-sm">${esc(item.title)}</p><p class="text-xs text-muted">${esc(item.caption || '')}</p></figcaption></figure>`).join('')}
            </div>
          </div>
        </section>`;
    },

    renderMedia() {
      const s = S();
      const d = D();
      const icons = { Video: 'play-circle', Podcast: 'headphones', Interview: 'mic' };
      const filters = Object.entries(d.mediaFilters).map(([key, label]) =>
        `<button type="button" data-media-filter="${esc(key)}" class="media-filter-btn text-sm px-4 py-2 rounded-lg transition-colors ${key === 'all' ? 'is-active' : ''}">${esc(label)}</button>`
      ).join('');

      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Media</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">Press & Media</h1>
            <p class="reveal text-lg text-muted max-w-2xl">Articles, interviews, press features, and thought leadership on youth development and strategic partnerships.</p>
          </div>
        </section>
        <section class="pb-24">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-wrap gap-2 mb-10" id="media-filters">${filters}</div>
            <div class="grid md:grid-cols-2 gap-6" id="media-grid">
              ${d.mediaItems.map(m => {
                const icon = icons[m.type] || 'file-text';
                return `<article class="media-item reveal card-executive overflow-hidden" data-type="${esc(m.type)}">
                  ${m.image ? `<div class="media-editorial__img"><img src="${esc(m.image)}" alt="${esc(m.title)}" width="800" height="500" loading="lazy" decoding="async"></div>` : ''}
                  <div class="p-6 md:p-8">
                    <div class="flex items-center gap-3 mb-4"><i data-lucide="${icon}" class="w-5 h-5 text-gold"></i><span class="text-xs font-semibold text-gold uppercase">${esc(m.type)}</span><span class="text-xs text-muted ml-auto">${esc(m.date)}</span></div>
                    <h2 class="text-xl font-semibold text-navy dark:text-white mb-2">${esc(m.title)}</h2>
                    <p class="text-sm text-muted mb-3">${esc(m.source)}</p>
                    <p class="text-muted leading-relaxed">${esc(m.excerpt)}</p>
                  </div>
                </article>`;
              }).join('')}
            </div>
          </div>
        </section>
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6 text-center">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-4">Media Downloads</h2>
            <p class="text-muted mb-8 max-w-lg mx-auto">Press materials, biography, and brand assets for media inquiries.</p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="${s.cv}" target="_blank" rel="noopener noreferrer" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-lg text-sm"><i data-lucide="file-text" class="w-4 h-4"></i> View my CV</a>
              <a href="speaking.html" class="btn-lift inline-flex items-center gap-2 border border-black/[0.08] dark:border-white/10 font-semibold px-6 py-3 rounded-lg text-sm hover:border-gold transition-colors"><i data-lucide="mic" class="w-4 h-4"></i> Speaking Profile</a>
            </div>
          </div>
        </section>`;
    },

    initProjectFilters() {
      const items = document.querySelectorAll('.project-item');
      document.querySelectorAll('#project-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;
          document.querySelectorAll('#project-filters .filter-btn').forEach(b => b.classList.toggle('is-active', b === btn));
          items.forEach(el => {
            const show = filter === 'all' || el.dataset.category === filter;
            el.style.display = show ? '' : 'none';
          });
        });
      });
    },

    initMediaFilters() {
      const items = document.querySelectorAll('.media-item');
      document.querySelectorAll('[data-media-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.mediaFilter;
          document.querySelectorAll('.media-filter-btn').forEach(b => b.classList.toggle('is-active', b === btn));
          items.forEach(el => {
            const show = filter === 'all' || el.dataset.type === filter;
            el.style.display = show ? '' : 'none';
          });
        });
      });
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    VM.pages.init();
  });
})();
