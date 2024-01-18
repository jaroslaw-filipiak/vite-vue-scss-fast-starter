// import { createApp } from 'vue';
// import './style.scss';
// import App from './App.vue';

// createApp(App).mount('#app');

import './scss/main.scss';

const handleHamburger = () => {
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
  });
};

window.addEventListener('DOMContentLoaded', () => {
  handleHamburger();
});
