const gallerySwipers = document.querySelectorAll('.gallery__swiper--main');

gallerySwipers.forEach((gallerySwiper, index) => {
  const thumbsSwiperItem = gallerySwiper.nextSibling;
  const thumbsSwiperOptions = {
    loop: false,
    spaceBetween: 0,
    freeMode: true,
    watchSlidesProgress: true,
    simulateTouch: true,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      748: {
        slidesPerView: 5,
      },
      1020: {
        slidesPerView: 6,
      },
      1707: {
        slidesPerView: 7,
      },
    }
  }
  const thumbsSwiper = new Swiper(thumbsSwiperItem, thumbsSwiperOptions);

  const mainSwiperOptions = {
    loop: true,
    slidesPerView: 1,
    speed: 700,
    simulateTouch: true,
    grabCursor: true,
    navigation: {
      nextEl: `#gallery-swiper-${index + 1}-next`,
      prevEl: `#gallery-swiper-${index + 1}-prev`,
      lockClass: "gallery__swiper-button--lock",
      disabledClass: "gallery__swiper-button--disabled",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  }
  const mainSwiper = new Swiper(gallerySwiper, mainSwiperOptions);
});

const trainerSwipers = document.querySelectorAll('.trainers__swiper');

trainerSwipers.forEach((trainerSwiper, index) => {
  const swiperOptions = {
    loop: false,
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 50,
    simulateTouch: true,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50
      },
      748: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1020: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1030: {
        slidesPerView: 2,
        spaceBetween: 78
      }
    },
    navigation: {
      nextEl: `#trainers-swiper-next`,
      prevEl: `#trainers-swiper-prev`,
      lockClass: "swiper-button--lock",
      disabledClass: "swiper-button--disabled",
    },
  }
  const swiper = new Swiper(trainerSwiper, swiperOptions);
});
