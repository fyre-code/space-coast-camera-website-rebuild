/* ============================================================
   MOBILE NAV
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
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
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ============================================================
   POPUP MODAL (5-second delay, once per session)
   ============================================================ */
const popupOverlay = document.getElementById('popup-overlay');
const popupClose   = document.getElementById('popup-close');

if (popupOverlay) {
  const popupCount = parseInt(sessionStorage.getItem('popup-count') || '0', 10);
  if (popupCount < 3) {
    setTimeout(() => {
      popupOverlay.classList.remove('hidden');
      sessionStorage.setItem('popup-count', String(popupCount + 1));
    }, 5000);
  }

  if (popupClose) {
    popupClose.addEventListener('click', () => {
      popupOverlay.classList.add('hidden');
    });
  }

  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) popupOverlay.classList.add('hidden');
  });
}
