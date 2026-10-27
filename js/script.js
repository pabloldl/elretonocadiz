'use strict';
const menu = document.querySelector('.menu');
const nav = document.querySelector('#recorrido');
const smallScreen = window.matchMedia('(max-width: 600px)');
function setMenu(open, restoreFocus = false) {
  nav.hidden = smallScreen.matches && !open;
  menu.setAttribute('aria-expanded', String(open));
  menu.querySelector('span').textContent = open ? '−' : '＋';
  if (restoreFocus) menu.focus();
}
function adaptMenu() {
  menu.hidden = !smallScreen.matches;
  setMenu(false);
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (link && smallScreen.matches) {
    setMenu(false);
    const target = document.querySelector(link.hash);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && smallScreen.matches && !nav.hidden) setMenu(false, true);
});
if (smallScreen.addEventListener) smallScreen.addEventListener('change', adaptMenu);
else smallScreen.addListener(adaptMenu);
adaptMenu();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-seen');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.water-study, .patio-composition').forEach(el => observer.observe(el));
}
