document.addEventListener('DOMContentLoaded', () => {
  const btnAccept = document.querySelector('[data-action="accept"]');
  const btnDecline = document.querySelector('[data-action="decline"]');
  const containerPopap = document.querySelector('[data-action="cookie"]');

  const getCookie = localStorage.getItem('cookie-policy');

  btnAccept.addEventListener('click', handleAccept);
  btnDecline.addEventListener('click', handleDecline);

  if (getCookie === null) {
    setTimeout(() => {
      containerPopap.classList.add('is-open');
    });
  }

  function handleAccept() {
    localStorage.setItem('cookie-policy', 'true');
    containerPopap.classList.remove('is-open');
    containerPopap.classList.add('is-hiding');
  }

  function handleDecline() {
    localStorage.setItem('cookie-policy', 'false');
    containerPopap.classList.remove('is-open');
    containerPopap.classList.add('is-hiding');
  }
});
