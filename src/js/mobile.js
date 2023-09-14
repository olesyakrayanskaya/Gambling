const burgerBtn = document.querySelector('.mobile__burger');
const mobileMenu = document.querySelector('.mobile__menu');
const mobileFooter = document.querySelector('.mobile__footer');
const burgerIcon = document.querySelector('.burger__icon');
import close from '../assets/images/Close.svg';
import menu from '../assets/images/menu.svg';

burgerBtn.addEventListener('click', () => {
  if (burgerIcon.src == menu) {
    burgerIcon.src = close;
    mobileMenu.style.display = 'flex';
    mobileFooter.style.display = 'block';
  } else {
    burgerIcon.src = menu;
    mobileMenu.style.display = 'none';
    mobileFooter.style.display = 'none';
  }
});
