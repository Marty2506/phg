const mobileAppSwiperItem = document.querySelector("#mobile-app-swiper");

if (mobileAppSwiperItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#mobile-app-swiper-btn-next`,
      prevEl: `#mobile-app-swiper-btn-prev`,
      lockClass: "swiper-button--lock",
      disabledClass: "swiper-button--disabled",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      1020: {
        spaceBetween: 30,
      },
      1707: {
        slidesPerView: 5,
        spaceBetween: 36,
      },
    },
  };
  mobileAppSwiperItem.swiper = new Swiper(mobileAppSwiperItem, swiperOptions);
}
