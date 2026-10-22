const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const year = new Date().getFullYear();
document.querySelector('#year').textContent = year;
document.querySelector('#footer-year').textContent = year;

// Basic age notice. This is not a verified age-check system.
// Uncomment the next line if you need the notice to appear on every first visit.
// if (!sessionStorage.getItem('tripleSmokeAgeConfirmed')) document.querySelector('#age-notice').hidden = false;
const ageNotice = document.querySelector('#age-notice');
document.querySelector('#age-continue').addEventListener('click', () => {
  ageNotice.hidden = true;
  try { sessionStorage.setItem('tripleSmokeAgeConfirmed', 'true'); } catch (_) {}
});
document.querySelector('#age-leave').addEventListener('click', () => {
  window.location.href = 'about:blank';
});

// Prevent placeholder social/phone links from jumping to the top of the page.
document.querySelectorAll('[data-placeholder-link]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    alert('Please add your real social profile or phone link in index.html before publishing.');
  });
});
