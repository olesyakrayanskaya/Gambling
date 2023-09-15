const burgerBtn = document.querySelector('.mobile__burger');
const mobileMenu = document.querySelector('.mobile__menu');
const mobileFooter = document.querySelector('.mobile__footer');
const burgerIcon = document.querySelector('.burger__icon');
import close from '../assets/images/Close.svg';
import menu from '../assets/images/menu.svg';
const mobile = document.querySelector('.mobile');
const mobileHeader = document.querySelector('.mobile__header');

burgerBtn.addEventListener('click', () => {
  if (burgerIcon.src == menu) {
    burgerIcon.src = close;
    mobileMenu.style.display = 'flex';
    mobileFooter.style.display = 'block';
    mobile.style.paddingBottom = '92px';
    mobileHeader.style.marginBottom = '40px';
  } else {
    burgerIcon.src = menu;
    mobileMenu.style.display = 'none';
    mobileFooter.style.display = 'none';
    mobile.style.paddingBottom = '10px';
    mobileHeader.style.marginBottom = '0';
  }
});
