const fs = require('fs');
const path = require('path');

const newFaqInner = `
      <div class="faq-item">
        <button class="faq-question">Why would a lawyer own a camera company? <span class="faq-icon">+</span></button>
        <div class="faq-answer">Because visual storytelling and attention to detail are critical in both law and photography. Joe Mitchell has spent years around professional photography and running his law firm. He built Space Coast Camera to support creators with dependable gear, real guidance, and a smooth rental experience.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Is Space Coast Camera part of The Mitchell Law Firm? <span class="faq-icon">+</span></button>
        <div class="faq-answer">No. They are separate businesses with the same owner.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Who is Space Coast Camera for? <span class="faq-icon">+</span></button>
        <div class="faq-answer">Anyone who wants better results—beginners, hobbyists, and working photographers/videographers.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">What makes you different from a big retail store? <span class="faq-icon">+</span></button>
        <div class="faq-answer">We focus on rentals, support, and education—less sales pressure, more help getting the right outcome.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Do you offer help beyond rentals? <span class="faq-icon">+</span></button>
        <div class="faq-answer">Yes! We also offer troubleshooting, lens cleaning, and photography classes.</div>
      </div>
    `;

const pages = ['index.html', 'about.html', 'services.html', 'calendar.html'];

pages.forEach(page => {
  const filePath = path.join(__dirname, page);
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace everything between <div class="faq-list"> and its closing </div>
  const updated = html.replace(
    /(<div class="faq-list">)([\s\S]*?)(<\/div>\s*\n\s*<\/div>\s*\n<\/section>)/,
    (match, open, inner, close) => open + newFaqInner + close
  );

  if (updated === html) {
    console.log(`WARNING: No replacement made in ${page}`);
  } else {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Updated: ${page}`);
  }
});
