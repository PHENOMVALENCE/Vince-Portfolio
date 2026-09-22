import { test, expect } from '@playwright/test';

const routes = [
  ['Home', '/index.html'],
  ['Leadership', '/leadership.html'],
  ['Selected Work', '/projects.html'],
  ['Case Study', '/project.html?slug=leading-aiesec-rwanda'],
  ['Gallery', '/gallery.html'],
  ['Speaking', '/speaking.html'],
  ['Appendix', '/appendix.html'],
];

const viewports = [
  { name: 'phone-320', width: 320, height: 720 },
  { name: 'phone-360', width: 360, height: 800 },
  { name: 'phone-375', width: 375, height: 812 },
  { name: 'phone-390', width: 390, height: 844 },
  { name: 'phone-430', width: 430, height: 932 },
  { name: 'phone-landscape-667', width: 667, height: 375 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'nav-mobile-edge-899', width: 899, height: 900 },
  { name: 'nav-desktop-edge-900', width: 900, height: 900 },
  { name: 'desktop-1024', width: 1024, height: 768 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'wide-1920', width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const [label, route] of routes) {
      test(`${label} has no horizontal overflow`, async ({ page }) => {
        const pageErrors = [];
        page.on('pageerror', error => pageErrors.push(error.message));

        await page.goto(`http://127.0.0.1:4173${route}`, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#main-content > section, #project-root > section', { timeout: 10000 });

        const metrics = await page.evaluate(() => ({
          viewport: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
        }));

        expect(metrics.scrollWidth, `${label}: document overflow`).toBeLessThanOrEqual(metrics.viewport + 1);
        expect(metrics.bodyScrollWidth, `${label}: body overflow`).toBeLessThanOrEqual(metrics.viewport + 1);
        expect(pageErrors, `${label}: runtime page errors`).toEqual([]);

        const toggle = page.locator('#nav-toggle');
        const desktopLinks = page.locator('.vm-nav__links');

        if (viewport.width < 900) {
          await expect(toggle).toBeVisible();
          await expect(desktopLinks).toBeHidden();
        } else {
          await expect(toggle).toBeHidden();
          await expect(desktopLinks).toBeVisible();
        }

        const undersized = await page.evaluate(() => {
          const selectors = [
            'button:not([hidden])',
            'a.vm-btn',
            '.vm-filter',
            '.nav-mobile-link',
            '.vm-nav__link',
          ];
          return [...document.querySelectorAll(selectors.join(','))]
            .filter(el => {
              const style = getComputedStyle(el);
              if (style.display === 'none' || style.visibility === 'hidden') return false;
              const r = el.getBoundingClientRect();
              return r.width > 0 && r.height > 0 && r.height < 43.5;
            })
            .map(el => ({
              tag: el.tagName,
              className: el.className,
              height: Math.round(el.getBoundingClientRect().height * 10) / 10,
              text: (el.textContent || '').trim().slice(0, 80),
            }));
        });

        expect(undersized, `${label}: controls below 44px target\n${JSON.stringify(undersized, null, 2)}`).toEqual([]);
      });
    }
  });
}


test.describe('mobile interaction regression', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile drawer fits viewport and restores focus', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'domcontentloaded' });
    const toggle = page.locator('#nav-toggle');
    await expect(toggle).toBeVisible();

    await toggle.click();
    const drawer = page.locator('#nav-drawer');
    await expect(drawer).toHaveClass(/is-open/);
    await expect(drawer).toHaveAttribute('aria-hidden', 'false');

    const bounds = await drawer.boundingBox();
    expect(bounds).not.toBeNull();
    expect(bounds.x).toBeGreaterThanOrEqual(-1);
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(391);

    await page.keyboard.press('Escape');
    await expect(drawer).not.toHaveClass(/is-open/);
    await expect(toggle).toBeFocused();
  });

  test('gallery lightbox remains inside mobile viewport', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/gallery.html', { waitUntil: 'domcontentloaded' });
    const first = page.locator('.gallery-card').first();
    await expect(first).toBeVisible();
    await first.click();

    const lightbox = page.locator('#gallery-lightbox');
    await expect(lightbox).not.toHaveClass(/hidden/);

    const box = await lightbox.locator('.lightbox__shell').boundingBox();
    expect(box).not.toBeNull();
    expect(box.width).toBeLessThanOrEqual(390);
    expect(box.height).toBeLessThanOrEqual(844);

    await page.keyboard.press('Escape');
    await expect(lightbox).toHaveClass(/hidden/);
  });

  test('project evidence links and related work stay contained', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/project.html?slug=leading-aiesec-rwanda', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.project-overview-section');

    const overflow = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      return [...document.querySelectorAll('.project-overview-section *, .project-related-section *')]
        .filter(el => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && (r.left < -1 || r.right > vw + 1);
        })
        .map(el => ({ tag: el.tagName, className: el.className }));
    });

    expect(overflow).toEqual([]);
  });
});
