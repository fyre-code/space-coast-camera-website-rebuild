const fs = require('fs');
const path = require('path');

const BANNER = `<!-- ===== PROMO BANNER ===== -->
<div class="promo-banner">
  SAVE <span class="pct">15%</span> ON WEEKEND RENTALS
</div>

`;

const MARKER = '<!-- ===== CONTACT FORM ===== -->';

const areasDir = path.join(__dirname, 'areas');
const files = fs.readdirSync(areasDir).filter(f => f.endsWith('.html'));

let updated = 0;
files.forEach(file => {
  const filePath = path.join(areasDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(BANNER.trim())) {
    console.log(`Skipped (already has banner): ${file}`);
    return;
  }
  if (!content.includes(MARKER)) {
    console.log(`WARNING: marker not found in ${file}`);
    return;
  }
  const updated_content = content.replace(MARKER, BANNER + MARKER);
  fs.writeFileSync(filePath, updated_content, 'utf8');
  console.log(`Updated: ${file}`);
  updated++;
});

console.log(`\nDone — ${updated} area pages updated.`);
