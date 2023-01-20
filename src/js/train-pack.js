const trainPackItem = document.querySelector('#train-pack-swiper');

if (trainPackItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#train-pack-swiper-btn-next`,
      prevEl: `#train-pack-swiper-btn-prev`,
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

  const swiper = new Swiper(trainPackItem, swiperOptions);
}
