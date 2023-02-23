const successStoriesSwiperItem = document.querySelector(
  "#success-stories-swiper"
);

if (successStoriesSwiperItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#success-stories-swiper-btn-next`,
      prevEl: `#success-stories-swiper-btn-prev`,
      lockClass: "swiper-button--lock",
      disabledClass: "swiper-button--disabled",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      748: {
        slidesPerView: 1,
      },
      1020: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1250: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1647: {
        slidesPerView: 2,
        spaceBetween: 85,
      },
    },
  };

  const swiper = new Swiper(successStoriesSwiperItem, swiperOptions);
}
