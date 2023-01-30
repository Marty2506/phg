const aboutZoneSwiperItem = document.querySelector('#about-zone-swiper');

if (aboutZoneSwiperItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#about-zone-swiper-btn-next`,
      prevEl: `#about-zone-swiper-btn-prev`,
      lockClass: "swiper-button--lock",
      disabledClass: "swiper-button--disabled",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      748: {
        slidesPerView: 2
      },
      1020: {
        slidesPerView: 2,
        spaceBetween: 45
      },
      1647: {
        slidesPerView: 2,
        spaceBetween: 35
      }
    }
  }

  const swiper = new Swiper(aboutZoneSwiperItem, swiperOptions);
}
