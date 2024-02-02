// import { createApp } from 'vue';
import './style.scss';
// import App from './App.vue';

// createApp(App).mount('#app');

import './scss/main.scss';

import 'swiper/css';
import 'swiper/css/scrollbar';

import Swiper from 'swiper/bundle';
// import Lenis from '@studio-freight/lenis';
import Accordion from 'accordion-js';

import './clamp.js';

// lenis init

// const lenis = new Lenis();

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

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

window.addEventListener('DOMContentLoaded', () => {
  handleHamburger();
  handleMobileMenuClick();

  const swiper = new Swiper('.swiper', {
    speed: 9400,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  const swiper2 = new Swiper('.slider-row__swiper', {
    spaceBetween: 24,
    speed: 9400,
    loop: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
  });

  new Accordion('.accordion-container', {
    duration: 130,
  });
});

// clamp excerpt in testimonials
// const testimonial = document.querySelector('.clamp-js');
// $clamp(testimonial, {
//   clamp: 3,
//   useNativeClamp: false,
//   truncationChar: '&nbsp;',
//   truncationHTML: '<a class="text-red" href="#">(...)</a>',
// });
