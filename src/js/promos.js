const promoSwiperItem = document.querySelector('#promos-swiper');

if (promoSwiperItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#promos-swiper-btn-next`,
      prevEl: `#promos-swiper-btn-prev`,
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
      },
      1707: {
        slidesPerView: 3,
        spaceBetween: 37
      }
    }
  }

  const swiper = new Swiper(promoSwiperItem, swiperOptions);
}
