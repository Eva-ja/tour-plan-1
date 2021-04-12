const swiper = new Swiper('.hotel-slider', {
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--prev',
    prevEl: '.hotel-slider__button--next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});