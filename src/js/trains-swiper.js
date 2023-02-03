const trainsSwiperItem = document.querySelector('#trains-swiper');

if (trainsSwiperItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#trains-swiper-btn-next`,
      prevEl: `#trains-swiper-btn-prev`,
      lockClass: "swiper-button--lock",
      disabledClass: "swiper-button--disabled",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      748: {
        slidesPerView: "auto"
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 27
      }
    }
  }

  const swiper = new Swiper(trainsSwiperItem, swiperOptions);
}
