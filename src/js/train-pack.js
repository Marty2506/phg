const trainPackItems = document.querySelectorAll('[data-train-pack-swiper]');

trainPackItems.forEach((trainPackItem, index) => {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#train-pack-swiper-${index + 1}-btn-next`,
      prevEl: `#train-pack-swiper-${index + 1}-btn-prev`,
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
});
