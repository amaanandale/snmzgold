/**
 * One-time setup script — copies generated images into public/
 * Run from the project root: node scripts/copy-assets.mjs
 */
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ARTIFACTS = 'C:\\Users\\moham\\.gemini\\antigravity-ide\\brain\\e7b29696-8002-41c7-a465-f80daf84488f';

const copies = [
  // Blog images
  { src: join(ARTIFACTS, 'dubai_gold_souk_1792823262408.jpg'),  dest: 'public/images/blog/dubai-gold-souk.jpg' },
  { src: join(ARTIFACTS, 'dubai_gold_souk_1792823262408.jpg'),  dest: 'public/images/blog/gold-souk-interior.jpg' },
  { src: join(ARTIFACTS, 'dubai_gold_souk_1792823262408.jpg'),  dest: 'public/images/blog/gold-souk-modern.jpg' },
  { src: join(ARTIFACTS, 'dubai_gold_souk_1792823262408.jpg'),  dest: 'public/images/blog/dubai-shopping.jpg' },
  { src: join(ARTIFACTS, 'dubai_skyline_1792823288502.jpg'),    dest: 'public/images/blog/dubai-skyline.jpg' },
  { src: join(ARTIFACTS, 'dubai_skyline_1792823288502.jpg'),    dest: 'public/images/blog/dubai-development.jpg' },
  { src: join(ARTIFACTS, 'dubai_skyline_1792823288502.jpg'),    dest: 'public/images/blog/global-gold-trade.jpg' },
  { src: join(ARTIFACTS, 'gold_bars_purity_1792823313821.jpg'), dest: 'public/images/blog/gold-purity.jpg' },
  { src: join(ARTIFACTS, 'gold_bars_purity_1792823313821.jpg'), dest: 'public/images/blog/gold-price-chart.jpg' },
  { src: join(ARTIFACTS, 'gold_bars_purity_1792823313821.jpg'), dest: 'public/images/blog/dubai-jewellery.jpg' },
];

// Ensure directories exist
mkdirSync('public/images/blog',  { recursive: true });
mkdirSync('public/images/brand', { recursive: true });

let ok = 0, fail = 0;

for (const { src, dest } of copies) {
  try {
    if (!existsSync(src)) {
      console.warn(`⚠  Source not found: ${src}`);
      fail++;
      continue;
    }
    copyFileSync(src, dest);
    console.log(`✓  ${dest}`);
    ok++;
  } catch (e) {
    console.error(`✗  ${dest}  —  ${e.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} copied, ${fail} failed.`);
if (fail > 0) {
  console.log('\nFor any failures, manually copy the file from the src path listed above.');
}

// Remind about logo
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('LOGO: Still needs to be placed manually.');
console.log('Save your SNMZ logo PNG to:');
console.log('  public\\images\\brand\\snmz-logo.png');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
