const gallerySwipers = document.querySelectorAll('.gallery__swiper--main');

gallerySwipers.forEach((gallerySwiper, index) => {
  const thumbsSwiperItem = gallerySwiper.nextSibling;
  const thumbsSwiperOptions = {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: false,
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
