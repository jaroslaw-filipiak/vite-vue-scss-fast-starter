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

// lenis init

const lenis = new Lenis({
  smoothWheel: false,
});

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

const handleBackToTop = () => {
  const btn = document.querySelector('.back-to-top');
  btn.addEventListener('click', () => {
    lenis.scrollTo(0);
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
      topBar.classList.add('on-scroll-down');
      // desktopMenu.classList.add('on-scroll-down');
      // desktopMenuRight.classList.add('on-scroll-down');
    } else {
      topBar.classList.remove('on-scroll-down');
      // desktopMenu.classList.remove('on-scroll-down');
      // desktopMenuRight.classList.remove('on-scroll-down');
    }
  });
};

class Testimonials {
  constructor(options) {
    this.options = options;
    this.testimonials = document.querySelectorAll('.testimonials .testimonial');
    this.testimonialsArray = Array.from(this.testimonials);
    this.content = this.testimonialsArray.map((testimonial) => {
      return testimonial.querySelector('.testimonial__content').innerText;
    });
  }

  init() {
    this.handleExcerpt();
    // this.handleBtn();
    this.handleBtnToAll();
  }

  handleBtn() {
    const btn = document.querySelector('.testimonials__more-btn');

    btn.addEventListener('click', () => {
      const active = document.querySelector(
        '.testimonials .swiper-slide-active'
      );
      const more = active.querySelector('.testimonials__more');
      const dots = active.querySelector('.testimonial__dots');

      more.classList.toggle('hidden');
      dots.classList.toggle('hidden');

      more.classList.contains('hidden')
        ? (btn.innerText = 'Rozwiń opis')
        : (btn.innerText = 'Schowaj opis');
    });
  }

  handleBtnToAll() {
    const btn = document.querySelector('.testimonials__more-btn');

    btn.addEventListener('click', () => {
      const mores = document.querySelectorAll(
        '.testimonials .testimonials__more'
      );
      const dotses = document.querySelectorAll(
        '.testimonials .testimonial__dots'
      );

      mores.forEach((more) => {
        more.classList.toggle('hidden');
      });
      dotses.forEach((dots) => {
        dots.classList.toggle('hidden');
      });

      mores.forEach((more) => {
        more.classList.contains('hidden')
          ? (btn.innerText = 'Rozwiń opis')
          : (btn.innerText = 'Schowaj opis');
      });
    });
  }

  handleExcerpt() {
    const excerpts = this.content.map((item) => {
      return item.substring(0, this.options.excerpt);
    });

    // console.log(excerpts);
    // console.log(excerpts.length);

    const rest = this.content.map((item) => {
      return item.substring(this.options.excerpt, item.length);
    });

    // console.log(rest);

    this.testimonialsArray.map((testimonial, index) => {
      testimonial.querySelector('.testimonial__content').innerHTML =
        `<span class=' inline'>${excerpts[index]}</span>` +
        `<span class='text-red inline testimonial__dots'>(...)</span>` +
        `<span class="testimonials__more hidden">${rest[index]}</span>`;
    });
  }
}

const testimonialsMobileNavigation = () => {
  if (window.innerWidth < 1024) {
    const next = document.querySelector('.testimonial__next--mobile');
    const prev = document.querySelector('.testimonial__prev--mobile');

    const swiper = document.querySelector(
      '.slider-row__swiper--testimonials'
    ).swiper;

    next.addEventListener('click', () => {
      swiper.slideNext();
    });

    prev.addEventListener('click', () => {
      swiper.slidePrev();
    });
  } else return;
};

const initSwipers = () => {
  const swiper = new Swiper('.swiper--notification', {
    speed: 9400,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  // portfolio
  const swiper2 = new Swiper('.slider-row__swiper', {
    slidesPerView: 1,
    spaceBetween: 12,
    centeredSlides: true,
    speed: 300,
    loop: true,

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

    breakpoints: {
      // when window width is >= 640px
      720: {
        centeredSlides: false,
        spaceBetween: 24,
        slidesPerView: 'auto',
      },
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
      1024: {
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
};

window.addEventListener('DOMContentLoaded', () => {
  initSwipers();
  handleHamburger();
  handleMobileMenuClick();
  handleTopBar();
  handleBackToTop();
  testimonialsMobileNavigation();

  if (window.innerWidth < 1024) {
    const testimonials = new Testimonials({
      excerpt: 276,
    });

    testimonials.init();
  }

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
