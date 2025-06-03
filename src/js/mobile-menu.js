const mobileBtn = document.querySelector('[data-id="mobile-btn"]');
const mobileMenu = document.querySelector('[data-id="mobile-menu"]');
const navLinks = document.querySelectorAll('[data-id="nav-link"]');
const navIcon = document.querySelector('[data-id="nav-icon"]');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navIcon.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navIcon.classList.remove('open');
  });
});
