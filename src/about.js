// import { createApp } from 'vue';
import './style.scss';
// import App from './App.vue';

// createApp(App).mount('#app');

import './scss/main.scss';

import 'swiper/css';
import 'swiper/css/scrollbar';

import Swiper from 'swiper/bundle';
import Lenis from '@studio-freight/lenis';
import Accordion from 'accordion-js';

import './clamp.js';

//lenis init

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

const handleTopBar = () => {
  lenis.on('scroll', (e) => {
    const topBar = document.querySelector('.top-bar');
    const desktopMenu = document.querySelector('.desktop-menu');
    const desktopMenuRight = document.querySelector('.desktop-menu__right');
    const scroll = e.animatedScroll;
    const direction = e.direction === -1 ? 'up' : 'down';

    if (scroll > 10 && direction === 'down') {
      desktopMenu.classList.add('on-scroll-down');
      desktopMenuRight.classList.add('on-scroll-down');
      topBar.classList.add('top-bar--transparent');
    } else {
      desktopMenu.classList.remove('on-scroll-down');
      desktopMenuRight.classList.remove('on-scroll-down');
      topBar.classList.remove('top-bar--transparent');
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  handleHamburger();
  handleMobileMenuClick();
  handleTopBar();

  const swiper = new Swiper('.swiper--notification', {
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

  const swiper2 = new Swiper('.slider-row__persons', {
    spaceBetween: 24,
    speed: 300,
    loop: true,
    centeredSlides: false,
    slidesPerView: 'auto',

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: true,
    // },
    navigation: {
      nextEl: '.swiper--portfolio--next',
    },
  });

  const swiperProject = new Swiper('.slider-row__swiper-projects', {
    spaceBetween: 24,
    speed: 300,
    loop: true,
    centeredSlides: false,
    slidesPerView: 'auto',

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: true,
    // },
    navigation: {
      nextEl: '.swiper--portfolio--next',
    },
  });

  const swiper3 = new Swiper('.slider-row__swiper--testimonials', {
    spaceBetween: 24,
    // speed: 9400,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      720: {
        slidesPerView: 'auto',
      },
    },
    navigation: {
      nextEl: '.swiper--testimonials--next',
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: true,
    // },
  });

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
