/**
 * Vicent Manila — Site interactions (vanilla JS)
 * Theme, mobile navigation, reveal, counters, timeline, testimonials, back-to-top.
 * @see documentation/COMPONENT_DOCUMENTATION.md
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM) return;

  VM.ui = {
    refreshIcons() {
      if (window.lucide) lucide.createIcons();
    },

    setTheme(dark) {
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem('vm-theme', dark ? 'dark' : 'light');
      document.querySelectorAll('.icon-theme-dark').forEach(el => el.classList.toggle('hidden', dark));
      document.querySelectorAll('.icon-theme-light').forEach(el => el.classList.toggle('hidden', !dark));
    },

    toggleTheme() {
      const dark = !document.documentElement.classList.contains('dark');
      this.setTheme(dark);
      this.refreshIcons();
    },

    _navScrollY: 0,
    _navLastFocus: null,
    _navKeyHandler: null,

    isNavOpen() {
      return document.getElementById('nav-drawer')?.classList.contains('is-open');
    },

    syncMobileHeaderHeight() {
      const header = document.getElementById('site-header');
      if (!header) return;
      const h = Math.ceil(header.getBoundingClientRect().height) || 64;
      document.documentElement.style.setProperty('--mobile-header-height', `${h}px`);
    },

    getNavFocusable() {
      const drawer = document.getElementById('nav-drawer');
      if (!drawer) return [];
      return Array.from(
        drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ).filter(el => !el.hasAttribute('disabled') && el.getClientRects().length > 0);
    },

    openNav() {
      const drawer = document.getElementById('nav-drawer');
      const overlay = document.getElementById('nav-overlay');
      const toggle = document.getElementById('nav-toggle');
      if (!drawer || this.isNavOpen()) return;

      document.querySelectorAll('.lightbox:not(.hidden)').forEach(lb => {
        lb.classList.add('hidden');
        lb.setAttribute('aria-hidden', 'true');
      });
      document.body.classList.remove('lightbox-open');

      this.syncMobileHeaderHeight();
      this._navLastFocus = document.activeElement;
      this._navScrollY = window.scrollY || window.pageYOffset || 0;

      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay?.classList.add('is-open');
      overlay?.removeAttribute('hidden');
      overlay?.setAttribute('aria-hidden', 'false');

      toggle?.setAttribute('aria-expanded', 'true');
      toggle?.setAttribute('aria-label', 'Close menu');
      document.querySelector('#nav-toggle .icon-menu')?.classList.add('hidden');
      document.querySelector('#nav-toggle .icon-close')?.classList.remove('hidden');

      document.body.classList.add('nav-open');
      document.body.style.top = `-${this._navScrollY}px`;

      this._navKeyHandler = (e) => this.handleNavKeydown(e);
      document.addEventListener('keydown', this._navKeyHandler);

      this.refreshIcons();

      const focusables = this.getNavFocusable();
      (focusables[0] || drawer).focus?.();
    },

    closeNav() {
      const drawer = document.getElementById('nav-drawer');
      const overlay = document.getElementById('nav-overlay');
      const toggle = document.getElementById('nav-toggle');
      if (!drawer || !this.isNavOpen()) return;

      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay?.classList.remove('is-open');
      overlay?.setAttribute('hidden', '');
      overlay?.setAttribute('aria-hidden', 'true');

      toggle?.setAttribute('aria-expanded', 'false');
      toggle?.setAttribute('aria-label', 'Open menu');
      document.querySelector('#nav-toggle .icon-menu')?.classList.remove('hidden');
      document.querySelector('#nav-toggle .icon-close')?.classList.add('hidden');

      document.body.classList.remove('nav-open');
      document.body.style.top = '';
      window.scrollTo(0, this._navScrollY || 0);

      if (this._navKeyHandler) {
        document.removeEventListener('keydown', this._navKeyHandler);
        this._navKeyHandler = null;
      }

      (this._navLastFocus || toggle)?.focus?.();
      this._navLastFocus = null;
    },

    toggleNav() {
      this.isNavOpen() ? this.closeNav() : this.openNav();
    },

    handleNavKeydown(e) {
      if (!this.isNavOpen()) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        this.closeNav();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusables = this.getNavFocusable();
      if (!focusables.length) return;

      const toggle = document.getElementById('nav-toggle');
      const cycle = toggle ? [toggle, ...focusables] : focusables;
      const first = cycle[0];
      const last = cycle[cycle.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === toggle)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    },

    initHeader() {
      const header = document.getElementById('site-header');
      if (!header) return;
      const onScroll = () => {
        if (this.isNavOpen()) return;
        const overProjectHero = document.body.dataset.page === 'project';
        const scrolled = window.scrollY > 24 || overProjectHero;
        header.classList.toggle('site-header--scrolled', scrolled);
        this.syncMobileHeaderHeight();
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', () => {
        this.syncMobileHeaderHeight();
        if (window.matchMedia('(min-width: 1024px)').matches && this.isNavOpen()) {
          this.closeNav();
        }
      });
      onScroll();
    },

    initTheme() {
      const stored = localStorage.getItem('vm-theme');
      const dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.setTheme(dark);
      document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggleTheme());
      document.getElementById('theme-toggle-mobile')?.addEventListener('click', () => this.toggleTheme());
    },

    initNav() {
      document.getElementById('nav-toggle')?.addEventListener('click', () => this.toggleNav());
      document.getElementById('nav-overlay')?.addEventListener('click', () => this.closeNav());

      document.querySelectorAll('.nav-mobile-link').forEach(link => {
        link.addEventListener('click', () => this.closeNav());
      });

      this.syncMobileHeaderHeight();
    },

    initReveal() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
        return;
      }
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
      document.querySelectorAll('.reveal:not(.in):not([data-reveal])').forEach(el => {
        el.dataset.reveal = '1';
        io.observe(el);
      });
    },

    initCounters() {
      const els = document.querySelectorAll('[data-count]:not([data-counted])');
      if (!els.length) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.dataset.counted) return;
          el.dataset.counted = '1';
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          if (isNaN(target)) return;
          const dur = 1400;
          const start = performance.now();
          const tick = now => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      }, { threshold: 0.4 });
      els.forEach(el => io.observe(el));
    },

    initTimeline() {
      const timeline = document.getElementById('timeline');
      const progress = document.getElementById('timeline-progress');
      if (!timeline || !progress) return;
      const update = () => {
        const rect = timeline.getBoundingClientRect();
        const start = rect.top + window.scrollY;
        const end = start + rect.height;
        const mid = window.scrollY + window.innerHeight * 0.45;
        const pct = Math.min(Math.max((mid - start) / (end - start), 0), 1);
        progress.style.height = (pct * 100) + '%';
      };
      window.addEventListener('scroll', update, { passive: true });
      update();
    },

    initBackToTop() {
      const btn = document.getElementById('back-to-top');
      if (!btn) return;
      window.addEventListener('scroll', () => {
        const show = window.scrollY > 500;
        btn.hidden = !show;
        btn.classList.toggle('is-visible', show);
      }, { passive: true });
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    },

    initTestimonials() {
      const track = document.getElementById('testimonial-track');
      if (!track) return;
      const slides = track.children;
      const dots = document.getElementById('testimonial-dots');
      let current = 0;
      let timer;

      if (dots) {
        for (let i = 0; i < slides.length; i++) {
          const d = document.createElement('button');
          d.type = 'button';
          d.className = 'h-2 rounded-full transition-all ' + (i === 0 ? 'bg-gold w-6' : 'bg-black/20 dark:bg-white/20 w-2');
          d.setAttribute('aria-label', 'Testimonial ' + (i + 1));
          d.addEventListener('click', () => go(i));
          dots.appendChild(d);
        }
      }

      const dotEls = dots ? dots.children : [];

      function go(i) {
        current = ((i % slides.length) + slides.length) % slides.length;
        track.style.transform = 'translateX(-' + (current * 100) + '%)';
        Array.from(dotEls).forEach((d, idx) => {
          d.className = 'h-2 rounded-full transition-all ' + (idx === current ? 'bg-gold w-6' : 'bg-black/20 dark:bg-white/20 w-2');
        });
      }

      function start() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        clearInterval(timer);
        timer = setInterval(() => go(current + 1), 6000);
      }

      document.getElementById('testimonial-prev')?.addEventListener('click', () => { go(current - 1); start(); });
      document.getElementById('testimonial-next')?.addEventListener('click', () => { go(current + 1); start(); });

      const carousel = document.getElementById('testimonial-carousel');
      carousel?.addEventListener('mouseenter', () => clearInterval(timer));
      carousel?.addEventListener('mouseleave', start);

      let touchX = null;
      carousel?.addEventListener('touchstart', e => {
        touchX = e.changedTouches[0]?.screenX ?? null;
        clearInterval(timer);
      }, { passive: true });
      carousel?.addEventListener('touchend', e => {
        if (touchX == null) return;
        const dx = (e.changedTouches[0]?.screenX ?? touchX) - touchX;
        if (Math.abs(dx) > 40) {
          go(current + (dx < 0 ? 1 : -1));
        }
        touchX = null;
        start();
      }, { passive: true });

      start();
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    VM.ui.initTheme();
    VM.ui.initNav();
    VM.ui.initHeader();
    VM.ui.initBackToTop();
    VM.ui.refreshIcons();
  });
})();
