const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 28,

  centeredSlides: false,
  loop: true,
  keyboard: true,

  pagination: {
    el: '.swiper-pagination',
  },

  mousewheel: {
    invert: true,
  },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  breakpoints: {
    375: {
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
  allowTouchMove: true,
});

const cards = document.querySelectorAll('.chocolateisloved-item');
let maxHeight = 0;

// Знайти максимальну висоту
cards.forEach(card => {
  const cardHeight = card.offsetHeight;
  if (cardHeight > maxHeight) maxHeight = cardHeight;
});

// Встановити однакову висоту для всіх карток
cards.forEach(card => {
  card.style.height = `${maxHeight}px`;
});
