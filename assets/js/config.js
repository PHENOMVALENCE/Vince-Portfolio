/**
 * Vicent Manila — Site configuration
 * Portfolio version: see VM.version
 */
window.VM = window.VM || {};

/** Semantic version of this portfolio codebase */
VM.version = '1.2.0';

VM.site = {
  name: 'Vicent Manila',
  tagline: 'International Business Development Leader',
  brandLine: 'Leadership • Strategy • Partnerships',
  email: 'manilavicent@gmail.com',
  phone: '+255 713 582 606',
  phoneIntl: '+255713582606',
  location: 'Dar es Salaam, Tanzania',
  linkedin: 'https://www.linkedin.com/in/vicentmanila',
  cv: 'assets/cv/vicent-manila-cv.pdf',
  logo: 'assets/images/vincelogo.png',
  contact: {
    whatsapp: 'https://wa.me/255713582606',
    tel: 'tel:+255713582606',
    mailto: 'mailto:manilavicent@gmail.com',
    email: 'manilavicent@gmail.com',
    phone: '+255 713 582 606',
  },
  nav: [
    { href: 'index.html#about', label: 'About', page: 'home' },
    { href: 'leadership.html', label: 'Leadership', page: 'leadership' },
    { href: 'index.html#experience', label: 'Experience' },
    { href: 'projects.html', label: 'Projects', page: 'projects' },
    { href: 'gallery.html', label: 'Gallery', page: 'gallery' },
    { href: 'media.html', label: 'Insights', page: 'media' },
    { href: 'index.html#contact', label: 'Contact', page: 'contact', cta: true },
  ],
};

/** Centralized local image paths (web-optimized). Originals remain in assets/images/Vince/. */
VM.images = {
  logo: 'assets/images/vincelogo.png',
  hero: 'assets/images/Vince/web/3.jpg',
  profile: 'assets/images/Vince/web/9.jpg',
  contact: 'assets/images/Vince/web/8.jpg',
  og: 'assets/images/Vince/web/og.jpg',
  speakingSuit: 'assets/images/Vince/web/2.jpg',
  speakingForum: 'assets/images/Vince/web/1.jpg',
  speakingGala: 'assets/images/Vince/web/6.jpg',
  conference: 'assets/images/Vince/web/4.jpg',
  executive: 'assets/images/Vince/web/7.jpg',
  podium: 'assets/images/Vince/web/gallery/1.jpg',
  dynamicConference: 'assets/images/Vince/web/gallery/alumni-summit.jpg',
  speakingBarrick: 'assets/images/Vince/web/gallery/event-11.jpg',
  recognition: 'assets/images/Vince/web/gallery/team-3.jpg',
  partnership: 'assets/images/Vince/web/gallery/3.jpg',
  eventStage: 'assets/images/Vince/web/gallery/4.jpg',
  eventTeam: 'assets/images/Vince/web/gallery/event-9.jpg',
  eventNetwork: 'assets/images/Vince/web/gallery/event-10.jpg',
  eventForum: 'assets/images/Vince/web/gallery/event-12.jpg',
  eventWorkshop: 'assets/images/Vince/web/gallery/event-8.jpg',
};
