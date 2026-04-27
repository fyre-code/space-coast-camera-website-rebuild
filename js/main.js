/* ============================================================
   MOBILE NAV
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ============================================================
   AREAS DROPDOWN (desktop click / keyboard)
   ============================================================ */
const areasBtn  = document.getElementById('areas-btn');
const areasDropdown = areasBtn && areasBtn.closest('.dropdown');

if (areasBtn && areasDropdown) {
  areasBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    areasDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    areasDropdown.classList.remove('open');
  });

  areasDropdown.addEventListener('click', (e) => e.stopPropagation());
}

/* ============================================================
   MOBILE AREAS ACCORDION
   ============================================================ */
const mobileAreasBtn  = document.getElementById('mobile-areas-btn');
const mobileAreasList = document.getElementById('mobile-areas-list');

if (mobileAreasBtn && mobileAreasList) {
  mobileAreasBtn.addEventListener('click', () => {
    mobileAreasList.classList.toggle('open');
    const chevron = mobileAreasBtn.querySelector('.chevron');
    if (chevron) chevron.style.transform =
      mobileAreasList.classList.contains('open') ? 'rotate(180deg)' : '';
  });
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.faq-item').classList.toggle('open');
  });
});

/* ============================================================
   POPUP MODAL (5-second delay, once per session)
   ============================================================ */
const popupOverlay = document.getElementById('popup-overlay');
const popupClose   = document.getElementById('popup-close');

if (popupOverlay) {
  setTimeout(() => {
    popupOverlay.classList.remove('hidden');
  }, 5000);

  if (popupClose) {
    popupClose.addEventListener('click', () => {
      popupOverlay.classList.add('hidden');
    });
  }

  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) popupOverlay.classList.add('hidden');
  });
}
