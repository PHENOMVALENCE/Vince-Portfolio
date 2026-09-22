import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const shells = [
  'index.html',
  'leadership.html',
  'projects.html',
  'project.html',
  'gallery.html',
  'speaking.html',
  'appendix.html',
];
const jsFiles = [
  'assets/js/config.js',
  'assets/js/data.js',
  'assets/js/gallery-data.js',
  'assets/js/layout.js',
  'assets/js/pages.js',
  'assets/js/site.js',
];

const errors = [];
const warnings = [];

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));

if (!exists('assets/js/config.js')) errors.push('Missing assets/js/config.js');

const config = exists('assets/js/config.js') ? read('assets/js/config.js') : '';
const versionMatch = config.match(/VM\.version\s*=\s*['"]([^'"]+)['"]/);
const version = versionMatch?.[1];

if (!version) errors.push('Could not resolve VM.version from assets/js/config.js');

for (const file of jsFiles) {
  if (!exists(file)) {
    errors.push(`Missing JavaScript file: ${file}`);
    continue;
  }
  try {
    new Function(read(file));
  } catch (error) {
    errors.push(`${file} does not parse: ${error.message}`);
  }
}

const pageIds = new Set();
for (const file of shells) {
  if (!exists(file)) {
    errors.push(`Missing page shell: ${file}`);
    continue;
  }

  const html = read(file);

  if (!/<meta\s+name=["']viewport["'][^>]*width=device-width/i.test(html)) {
    errors.push(`${file}: missing mobile viewport meta tag`);
  }

  const pageMatch = html.match(/<body[^>]*data-page=["']([^"']+)["']/i);
  if (!pageMatch) {
    errors.push(`${file}: missing body[data-page]`);
  } else {
    if (pageIds.has(pageMatch[1])) warnings.push(`${file}: duplicate data-page "${pageMatch[1]}"`);
    pageIds.add(pageMatch[1]);
  }

  if (!/<main\s+id=["']main-content["']/i.test(html)) {
    errors.push(`${file}: missing #main-content landmark`);
  }

  if (!/<a[^>]+href=["']#main-content["'][^>]*class=["'][^"']*skip-link/i.test(html)) {
    errors.push(`${file}: missing skip link`);
  }

  if (version) {
    const stale = [...html.matchAll(/[?&]v=([0-9]+\.[0-9]+\.[0-9]+)/g)]
      .map(m => m[1])
      .filter(v => v !== version);
    if (stale.length) {
      errors.push(`${file}: stale cache version(s): ${[...new Set(stale)].join(', ')}; expected ${version}`);
    }
  }
}

const css = exists('assets/css/design-system.css') ? read('assets/css/design-system.css') : '';
for (const rule of [
  '@media (max-width: 899px)',
  '@media (max-width: 639px)',
  '@media (max-width: 419px)',
  'overflow-x: clip',
  '.vm-nav__toggle',
  '.gallery-masonry',
  '.vm-project-related-grid',
]) {
  if (!css.includes(rule)) errors.push(`Responsive CSS invariant missing: ${rule}`);
}

const sourceFiles = [
  ...shells,
  ...jsFiles,
  'assets/css/design-system.css',
];

const localRefPattern = /(?:src|href)\s*=\s*["'](assets\/[^"'?#]+)|['"](assets\/[^"'?#]+)['"]/g;
for (const file of sourceFiles) {
  if (!exists(file)) continue;
  const content = read(file);
  let match;
  while ((match = localRefPattern.exec(content))) {
    const ref = match[1] || match[2];
    if (!ref || /\$\{|\+/.test(ref)) continue;
    if (!exists(ref)) errors.push(`${file}: missing local asset ${ref}`);
  }
}

console.log(`Portfolio validation — v${version || 'unknown'}`);
console.log(`Checked ${shells.length} page shells and ${jsFiles.length} JavaScript files.`);

for (const warning of warnings) console.warn(`WARN: ${warning}`);

if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}

console.log('All static, versioning and responsive invariants passed.');
