const tariffsItem = document.querySelector('#tariffs-swiper');

if (tariffsItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#tariffs-swiper-btn-next`,
      prevEl: `#tariffs-swiper-btn-prev`,
      lockClass: "swiper-button--lock",
      disabledClass: "swiper-button--disabled",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
      }
    },
    on: {
      afterInit: (swiper) => {
        if (swiper.currentBreakpoint !== "320") {
          swiper.disable();
        }
      },
      breakpoint: (swiper) => {
        if (swiper.currentBreakpoint === "320") {
          swiper.enable();
        } else {
          swiper.disable();
        }
      }
    }
  }

  const swiper = new Swiper(tariffsItem, swiperOptions);
}
