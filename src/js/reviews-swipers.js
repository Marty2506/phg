const reviewsVideoSwiperItems = document.querySelectorAll('[data-reviews-video-swiper]');

reviewsVideoSwiperItems.forEach((item, index) => {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#reviews-video-swiper-${index + 1}-btn-next`,
      prevEl: `#reviews-video-swiper-${index + 1}-btn-prev`,
      lockClass: "swiper-button--lock",
      disabledClass: "swiper-button--disabled",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      748: {
        slidesPerView: 1
      },
      1020: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  }
  item.swiper = new Swiper(item, swiperOptions);
});

const reviewsInMessengersSwiperItems = document.querySelectorAll('[data-reviews-in-messengers-swiper]');

reviewsInMessengersSwiperItems.forEach((item, index) => {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#reviews-video-swiper-${index + 1}-btn-next`,
      prevEl: `#reviews-video-swiper-${index + 1}-btn-prev`,
      lockClass: "swiper-button--lock",
      disabledClass: "swiper-button--disabled",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      1450: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1707: {
        slidesPerView: 4,
        spaceBetween: 53
      }
    }
  }
  item.swiper = new Swiper(item, swiperOptions);
});

