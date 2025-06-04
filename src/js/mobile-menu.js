const mobileBtn = document.querySelector('[data-id="mobile-btn"]');
const mobileMenu = document.querySelector('[data-id="mobile-menu"]');
const navLinks = document.querySelectorAll('[data-id="nav-link"]');
const navIcon = document.querySelector('[data-id="nav-icon"]');
const modalOverlay = document.querySelector('[data-id="modal-overlay"]');
const body = document.querySelector('body');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navIcon.classList.toggle('open');
  modalOverlay.classList.toggle('mobile-menu__overlay-active');
  body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navIcon.classList.remove('open');
    modalOverlay.classList.remove('mobile-menu__overlay-active');
    body.classList.remove('no-scroll');
  });
});
