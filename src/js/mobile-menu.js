const mobileBtn = document.querySelector('[data-id="mobile-btn"]');
const mobileMenu = document.querySelector('[data-id="mobile-menu"]');
const navLinks = document.querySelectorAll('[data-id="nav-link"]');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
