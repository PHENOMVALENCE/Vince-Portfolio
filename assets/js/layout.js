/**
 * Shared layout — header, footer, contact CTAs
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM?.site) return;

  const S = () => VM.site;

  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  VM.layout = {
    contactCTAs(compact) {
      const c = S().contact;
      const cls = compact
        ? 'grid sm:grid-cols-3 gap-3'
        : 'grid sm:grid-cols-3 gap-4';
      return `
        <div class="${cls}">
          <a href="${c.whatsapp}" target="_blank" rel="noopener noreferrer" class="contact-cta contact-cta--whatsapp btn-lift">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span class="contact-cta__title">WhatsApp</span>
            <span class="contact-cta__sub">Chat instantly</span>
          </a>
          <a href="${c.tel}" class="contact-cta contact-cta--phone btn-lift">
            <i data-lucide="phone" class="w-4 h-4"></i>
            <span class="contact-cta__title">Call</span>
            <span class="contact-cta__sub">${esc(c.phone)}</span>
          </a>
          <a href="${c.mailto}" class="contact-cta contact-cta--email btn-lift">
            <i data-lucide="mail" class="w-4 h-4"></i>
            <span class="contact-cta__title">Email</span>
            <span class="contact-cta__sub">${esc(c.email)}</span>
          </a>
        </div>`;
    },

    renderHeader(currentPage) {
      const s = S();
      const logo = s.logo || (VM.images && VM.images.logo) || 'assets/images/vincelogo.png';
      const navLinks = s.nav.filter(n => !n.cta).map(n => `
        <li><a href="${n.href}" class="nav-link px-3 py-2 text-sm font-medium rounded-lg transition-colors ${n.page === currentPage ? 'text-gold is-active' : 'text-muted dark:text-zinc-400 hover:text-navy dark:hover:text-white'}">${esc(n.label)}</a></li>
      `).join('');

      const mobileLinks = s.nav.map(n => `
        <li><a href="${n.href}" class="nav-mobile-link block px-3 py-3 text-base font-medium rounded-lg transition-colors ${n.cta ? 'mt-4 bg-navy text-white text-center' : 'text-ink dark:text-zinc-300 hover:bg-canvas dark:hover:bg-navy-secondary'}">${esc(n.label)}</a></li>
      `).join('');

      return `
        <header class="site-header fixed inset-x-0 top-0 z-50 transition-all duration-300" id="site-header">
          <nav class="max-w-8xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 transition-all duration-300 site-header__nav" aria-label="Main navigation">
            <a href="index.html" class="brand-lockup z-10 group min-w-0" aria-label="${esc(s.name)} — Home">
              <img src="${esc(logo)}" alt="${esc(s.name)} logo" class="brand-logo brand-logo--nav" width="1254" height="1254" decoding="async">
              <span class="brand-name font-semibold text-sm text-navy dark:text-white truncate">${esc(s.name)}</span>
            </a>
            <ul class="hidden lg:flex items-center gap-0.5 ml-4" role="list">${navLinks}</ul>
            <div class="flex items-center gap-2 shrink-0">
              <button type="button" id="theme-toggle" class="theme-toggle-desktop hidden lg:inline-flex w-9 h-9 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10 hover:bg-white dark:hover:bg-navy-secondary transition-colors" aria-label="Toggle dark mode">
                <i data-lucide="moon" class="w-4 h-4 icon-theme-dark"></i>
                <i data-lucide="sun" class="w-4 h-4 icon-theme-light hidden"></i>
              </button>
              <a href="${s.cv}" target="_blank" rel="noopener noreferrer" class="header-cv-btn inline-flex items-center justify-center gap-1.5 bg-gold text-navy text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg btn-lift min-h-[44px]" aria-label="View CV"><i data-lucide="file-text" class="w-4 h-4"></i> <span>CV</span></a>
              <a href="index.html#contact" class="hidden lg:inline-flex items-center gap-1.5 bg-navy dark:bg-white text-white dark:text-navy text-sm font-semibold px-4 py-2 rounded-lg btn-lift min-h-[44px]">Contact</a>
              <button type="button" id="nav-toggle" class="lg:hidden inline-flex w-11 h-11 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10" aria-expanded="false" aria-controls="nav-drawer" aria-label="Open menu">
                <i data-lucide="menu" class="w-5 h-5 icon-menu"></i>
                <i data-lucide="x" class="w-5 h-5 icon-close hidden"></i>
              </button>
            </div>
          </nav>
          <div id="nav-overlay" class="nav-overlay hidden lg:hidden" aria-hidden="true"></div>
          <div id="nav-drawer" class="nav-drawer lg:hidden" aria-hidden="true" role="dialog" aria-label="Mobile navigation">
            <div class="px-6 pt-6 pb-2 flex items-center justify-between gap-3">
              <a href="index.html" class="brand-lockup nav-mobile-link" aria-label="${esc(s.name)} — Home">
                <img src="${esc(logo)}" alt="${esc(s.name)} logo" class="brand-logo brand-logo--nav" width="1254" height="1254" decoding="async">
                <span class="font-semibold text-sm text-navy dark:text-white">${esc(s.name)}</span>
              </a>
              <button type="button" id="theme-toggle-mobile" class="w-11 h-11 inline-flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10" aria-label="Toggle dark mode">
                <i data-lucide="moon" class="w-4 h-4 icon-theme-dark"></i>
                <i data-lucide="sun" class="w-4 h-4 icon-theme-light hidden"></i>
              </button>
            </div>
            <ul class="flex flex-col gap-1 px-6 pt-4 pb-6" role="list">${mobileLinks}</ul>
            <div class="px-6 pb-8">
              <a href="${s.cv}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-gold text-navy font-semibold py-3 rounded-lg min-h-[48px]"><i data-lucide="file-text" class="w-4 h-4"></i> View my CV</a>
            </div>
          </div>
        </header>`;
    },

    renderFooter() {
      const s = S();
      const img = VM.images || {};
      const logo = s.logo || img.logo || 'assets/images/vincelogo.png';
      const c = s.contact;
      const phoneDisplay = '0713 582 606';
      const year = new Date().getFullYear();
      const portrait = img.contact || img.profile || img.hero || '';

      return `
        <section id="contact" class="connect-section" aria-labelledby="connect-heading">
          <div class="connect-bg" aria-hidden="true">
            <div class="connect-bg__glow connect-bg__glow--left"></div>
            <div class="connect-bg__glow connect-bg__glow--right"></div>
            <div class="connect-bg__dots"></div>
          </div>
          <div class="connect-inner max-w-8xl mx-auto px-6">
            <div class="connect-grid">
              <div class="connect-content reveal">
                <p class="section-label mb-4">Connect</p>
                <h2 id="connect-heading" class="connect-heading font-display text-white">Let's Build Meaningful<br>Impact Together</h2>
                <p class="connect-lead">Open to conversations on leadership, strategic partnerships, business development, organisational growth, youth development and international collaboration.</p>
                <div class="connect-divider" aria-hidden="true"></div>

                <div class="connect-cards" role="list">
                  <article class="connect-card connect-card--whatsapp" role="listitem">
                    <div class="connect-card__icon" aria-hidden="true"><i data-lucide="message-circle"></i></div>
                    <div class="connect-card__body">
                      <h3 class="connect-card__title">WhatsApp</h3>
                      <p class="connect-card__sub">Chat instantly</p>
                    </div>
                    <a href="${c.whatsapp}" target="_blank" rel="noopener noreferrer" class="connect-card__btn" aria-label="Chat on WhatsApp">
                      Chat on WhatsApp <span class="connect-card__arrow" aria-hidden="true">→</span>
                    </a>
                  </article>

                  <article class="connect-card connect-card--call" role="listitem">
                    <div class="connect-card__icon" aria-hidden="true"><i data-lucide="phone"></i></div>
                    <div class="connect-card__body">
                      <h3 class="connect-card__title">Call</h3>
                      <p class="connect-card__sub">Speak directly</p>
                    </div>
                    <a href="${c.tel}" class="connect-card__btn" aria-label="Call ${esc(phoneDisplay)}">
                      ${esc(phoneDisplay)} <span class="connect-card__arrow" aria-hidden="true">→</span>
                    </a>
                  </article>

                  <article class="connect-card connect-card--email" role="listitem">
                    <div class="connect-card__icon" aria-hidden="true"><i data-lucide="mail"></i></div>
                    <div class="connect-card__body">
                      <h3 class="connect-card__title">Email</h3>
                      <p class="connect-card__sub">Send me an email</p>
                    </div>
                    <a href="${c.mailto}" class="connect-card__btn" aria-label="Email ${esc(c.email)}">
                      ${esc(c.email)} <span class="connect-card__arrow" aria-hidden="true">→</span>
                    </a>
                  </article>
                </div>

                <div class="connect-secondary">
                  <a href="${s.linkedin}" target="_blank" rel="noopener noreferrer" class="connect-secondary__btn">
                    <i data-lucide="linkedin" class="w-4 h-4"></i> LinkedIn
                  </a>
                  <a href="${s.cv}" target="_blank" rel="noopener noreferrer" class="connect-secondary__btn connect-secondary__btn--gold">
                    <i data-lucide="file-text" class="w-4 h-4"></i> View my CV
                  </a>
                </div>

                <div class="connect-location">
                  <div class="connect-location__icon" aria-hidden="true"><i data-lucide="map-pin"></i></div>
                  <div>
                    <p class="connect-location__title">Based in ${esc(s.location)}</p>
                    <p class="connect-location__sub">Open to local and international engagements.</p>
                  </div>
                </div>

                <blockquote class="connect-quote">
                  <span class="connect-quote__mark" aria-hidden="true">❝</span>
                  <p>Great partnerships begin with a <span>conversation</span>.</p>
                  <p class="connect-quote__line2">Let's create impact that lasts.</p>
                </blockquote>
              </div>

              <div class="connect-portrait reveal" style="--d:.12s">
                <div class="connect-portrait__stage">
                  <div class="connect-portrait__glow" aria-hidden="true"></div>
                  <div class="connect-portrait__map" aria-hidden="true"></div>
                  <div class="connect-portrait__ring" aria-hidden="true"></div>
                  <div class="connect-portrait__frame">
                    <img src="${esc(portrait)}" alt="Professional portrait of Vicent Manila" width="1050" height="1400" loading="lazy" decoding="async">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="site-footer bg-navy text-white/70 border-t border-white/10">
          <div class="max-w-8xl mx-auto px-6 py-8 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div class="max-w-sm">
              <a href="index.html" class="brand-lockup brand-lockup--footer mb-3" aria-label="${esc(s.name)} — Home">
                <img src="${esc(logo)}" alt="${esc(s.name)} logo" class="brand-logo brand-logo--footer" width="1254" height="1254" loading="lazy" decoding="async">
              </a>
              <p class="font-semibold text-white text-sm mb-1">${esc(s.name)}</p>
              <p class="text-xs text-gold/90 font-medium mb-3">${esc(s.brandLine || 'Leadership • Strategy • Partnerships')}</p>
              <p class="text-sm text-white/45 leading-relaxed">International business development leader building partnerships and empowering youth across Africa.</p>
            </div>
            <nav class="footer-nav" aria-label="Footer navigation">
              <h3 class="footer-nav__label">Navigation</h3>
              <ul class="footer-nav__list">
                <li><a href="index.html#about">About</a></li>
                <li><a href="leadership.html">Leadership</a></li>
                <li><a href="index.html#experience">Experience</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="media.html">Insights</a></li>
                <li><a href="speaking.html">Speaking</a></li>
                <li><a href="index.html#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="max-w-8xl mx-auto px-6 pb-8 text-center sm:text-left text-xs text-white/40">
            <p>&copy; ${year} ${esc(s.name)}. All rights reserved.</p>
          </div>
        </footer>
        <button type="button" id="back-to-top" class="back-to-top" aria-label="Back to top" hidden>
          <i data-lucide="arrow-up" class="w-5 h-5"></i>
        </button>`;
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');
    const current = document.body.dataset.page || 'home';

    if (headerEl) headerEl.outerHTML = VM.layout.renderHeader(current);
    if (footerEl) footerEl.innerHTML = VM.layout.renderFooter();

    document.querySelectorAll('.nav-mobile-link').forEach(link => {
      link.addEventListener('click', () => window.VM?.ui?.closeNav?.());
    });

    window.VM?.ui?.refreshIcons?.();
    window.VM?.ui?.initReveal?.();
  });
})();
