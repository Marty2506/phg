const gridGallerylSwiperItem = document.querySelector('#grid-gallery-swiper');

if (gridGallerylSwiperItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#grid-gallery-swiper-btn-next`,
      prevEl: `#grid-gallery-swiper-btn-prev`,
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
      }
    },
    on: {
      afterInit: (swiper) => {
        if (swiper.currentBreakpoint !== "320" && swiper.currentBreakpoint !== "748") {
          swiper.disable();
        }
      },
      breakpoint: (swiper) => {
        if (swiper.currentBreakpoint === "320" || swiper.currentBreakpoint === "748") {
          swiper.enable();
        } else {
          swiper.disable();
        }
      }
    }
  }

  const swiper = new Swiper(gridGallerylSwiperItem, swiperOptions);
}

