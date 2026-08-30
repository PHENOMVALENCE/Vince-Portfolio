/**
 * Shared layout — header, footer, contact CTAs
 * Injects site chrome; mobile drawer is a sibling of the header (not nested).
 * @see documentation/ARCHITECTURE.md
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
          <a href="${c.whatsapp}" target="_blank" rel="noopener noreferrer" class="contact-cta contact-cta--whatsapp btn-lift" aria-label="Chat on WhatsApp at ${esc(c.phone)}">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span class="contact-cta__title">WhatsApp</span>
            <span class="contact-cta__sub">${esc(c.phone)}</span>
          </a>
          <a href="${c.tel}" class="contact-cta contact-cta--phone btn-lift" aria-label="Call ${esc(c.phone)}">
            <i data-lucide="phone" class="w-4 h-4"></i>
            <span class="contact-cta__title">Call</span>
            <span class="contact-cta__sub">${esc(c.phone)}</span>
          </a>
          <a href="${c.mailto}" class="contact-cta contact-cta--email btn-lift" aria-label="Email ${esc(c.email)}">
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

      const mobileLinks = s.nav.filter(n => !n.cta).map(n => `
        <li>
          <a href="${n.href}" class="nav-mobile-link${n.page === currentPage ? ' is-active' : ''}" ${n.page === currentPage ? 'aria-current="page"' : ''}>${esc(n.label)}</a>
        </li>
      `).join('');

      return `
        <header class="site-header fixed inset-x-0 top-0 transition-colors duration-300" id="site-header">
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
              <a href="index.html#contact" class="header-contact-btn hidden lg:inline-flex items-center gap-2 vm-btn vm-btn--primary">Discuss a Partnership</a>
              <button type="button" id="nav-toggle" class="lg:hidden inline-flex w-11 h-11 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10" aria-expanded="false" aria-controls="nav-drawer" aria-label="Open menu">
                <i data-lucide="menu" class="w-5 h-5 icon-menu"></i>
                <i data-lucide="x" class="w-5 h-5 icon-close hidden"></i>
              </button>
            </div>
          </nav>
        </header>
        <div id="nav-overlay" class="nav-overlay lg:hidden" hidden aria-hidden="true"></div>
        <div id="nav-drawer" class="nav-drawer lg:hidden" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Mobile navigation">
          <div class="nav-drawer__panel">
            <nav class="nav-drawer__nav" aria-label="Mobile navigation">
              <ul class="nav-drawer__list" role="list">${mobileLinks}</ul>
            </nav>
            <div class="nav-drawer__actions">
              <button type="button" id="theme-toggle-mobile" class="nav-drawer__theme" aria-label="Toggle dark mode">
                <i data-lucide="moon" class="w-4 h-4 icon-theme-dark"></i>
                <i data-lucide="sun" class="w-4 h-4 icon-theme-light hidden"></i>
                <span>Theme</span>
              </button>
              <a href="${s.cv}" target="_blank" rel="noopener noreferrer" class="nav-drawer__cv nav-mobile-link">
                <i data-lucide="file-text" class="w-4 h-4" aria-hidden="true"></i>
                View my CV
              </a>
              <a href="index.html#contact" class="nav-drawer__contact nav-mobile-link">Discuss a Partnership</a>
            </div>
          </div>
        </div>`;
    },

    renderFooter() {
      const s = S();
      const img = VM.images || {};
      const logo = s.logo || img.logo || 'assets/images/vincelogo.png';
      const c = s.contact;
      const phoneDisplay = c.phone || s.phone || '+255 713 582 606';
      const year = new Date().getFullYear();
      const portrait = img.hero || img.profile || img.contact || '';

      return `
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
                <li><a href="index.html#profile">Profile</a></li>
                <li><a href="leadership.html">Leadership</a></li>
                <li><a href="projects.html">Selected Work</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="speaking.html">Speaking</a></li>
                <li><a href="appendix.html">Appendix</a></li>
                <li><a href="index.html#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="max-w-8xl mx-auto px-6 pb-8 text-center sm:text-left text-xs text-white/40">
            <p>&copy; ${year} ${esc(s.name)}. All rights reserved.${typeof VM.version === 'string' ? ` <span class="text-white/25">v${esc(VM.version)}</span>` : ''}</p>
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
