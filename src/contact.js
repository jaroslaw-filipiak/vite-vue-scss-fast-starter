import './style.scss';
import './scss/main.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';

import Swiper from 'swiper/bundle';

// lenis init

const handleHamburger = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('#side-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('hidden');
  });
};

const handleMobileMenuClick = () => {
  const items = document.querySelectorAll('.parent');
  const itemsArray = Array.from(items);
  itemsArray.map((item) => {
    item.addEventListener('click', () => {
      const submenu = item.nextElementSibling;
      submenu.classList.toggle('h-0');
    });
  });
};

const logosSwiper = new Swiper('.logos-slider', {
  speed: 9400,
  loop: true,
  centeredSlides: false,
  spaceBetween: 17,
  // slidesPerView: 'auto',
  slidesPerView: 2,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 17,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 640px

    1024: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
});

window.addEventListener('DOMContentLoaded', () => {
  handleHamburger();
  handleMobileMenuClick();
});
