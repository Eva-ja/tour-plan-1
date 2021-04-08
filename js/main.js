const swiper = new Swiper('.swiper-container', {
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--prev',
    prevEl: '.slider-button--next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});