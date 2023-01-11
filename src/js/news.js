const newsSwiperItem = document.querySelector('#news-swiper');

if (newsSwiperItem) {
  const swiperOptions = {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 700,
    simulateTouch: false,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `#news-swiper-btn-next`,
      prevEl: `#news-swiper-btn-prev`,
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
        spaceBetween: 24
      },
      1370: {
        slidesPerView: 4,
        spaceBetween: 24
      },
      1707: {
        slidesPerView: 5,
        spaceBetween: 24
      }
    }
  }

  const swiper = new Swiper(newsSwiperItem, swiperOptions);
}
