const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  effect: 'fade',
  fadeEffect : {
    crossfade: true,
  },
  autoplay: {
    delay: 5000,
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
});
// presentation animation
var typed = new Typed(".text",{
  strings: [" ", "développeuse front-end", "curieuse et motivée", "disponible dès lundi !"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1800,
  loop: true
})

