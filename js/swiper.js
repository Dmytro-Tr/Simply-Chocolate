const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 28,

  centeredSlides: true,

  mousewheel: {
    invert: true,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
