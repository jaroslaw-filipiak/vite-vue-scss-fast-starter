// import { createApp } from 'vue';
import './style.scss';
// import App from './App.vue';

// createApp(App).mount('#app');

import './scss/main.scss';

import 'swiper/css';
import Swiper from 'swiper/bundle';

const handleHamburger = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('#side-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('hidden');
  });
};

window.addEventListener('DOMContentLoaded', () => {
  handleHamburger();

  const swiper = new Swiper('.swiper', {
    speed: 9400,
    loop: true,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
});
