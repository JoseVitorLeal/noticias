// script.js

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('header > button');
  const closeBtn = document.querySelector('nav.mobile > button');
  const mobileNav = document.querySelector('nav.mobile');

  openBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});
