const newsSwiperItem = document.querySelector("#news-swiper");

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
        slidesPerView: "auto",
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1370: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1707: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  };

  const swiper = new Swiper(newsSwiperItem, swiperOptions);
}

const newsFilterFormItem = document.querySelector("#news-filter-form");

if (newsFilterFormItem) {
  let newsCards = [];
  const MONTHS = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const dateFilterItem = newsFilterFormItem.querySelector("#news-date-filter");
  const currentDate = new Date();
  for (let i = dateFilterItem.options.length - 1; i >= 0; i--) {
    const month = MONTHS[(12 + currentDate.getMonth() - i) % 12];
    const year =
      currentDate.getMonth() - i >= 0
        ? currentDate.getFullYear()
        : currentDate.getFullYear() - 1;
    let text = `${month} ${year}`;
    dateFilterItem.options[i].value = text;
    dateFilterItem.options[i].text = text;
  }

  function filterNews() {
    const currentFilter = choice.getValue(true);

    newsCards.forEach((card) => {
      card.classList.remove("news__cards-item--hidden");
      if (currentFilter === card.date) {
        return;
      }
      card.classList.add("news__cards-item--hidden");
      return;
    });
  }
  const choice = new Choices(dateFilterItem, {
    placeholder: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: "",
    classNames: {
      containerOuter: "form-choices",
      containerInner: "form-choices__inner",
      input: "form-choices__input",
      inputCloned: "form-choices__input--cloned",
      list: "form-choices__list",
      listItems: "form-choices__list--multiple",
      listSingle: "form-choices__list--single",
      listDropdown: "form-choices__list--dropdown",
      item: "form-choices__item",
      itemSelectable: "form-choices__item--selectable",
      itemDisabled: "form-choices__item--disabled",
      itemOption: "form-choices__item--choice",
      group: "choices__group",
      groupHeading: "choices__heading",
      button: "choices__button",
      activeState: "is-active",
      focusState: "is-focused",
      openState: "is-open",
      disabledState: "is-disabled",
      highlightedState: "is-highlighted",
      selectedState: "is-selected",
      flippedState: "is-flipped",
    },
    allowHTML: true,
    // callbackOnInit: filterNews
  });

  window.addEventListener("load", () => {
    newsCards = document.querySelectorAll(".news__cards-item");
    newsCards.forEach((card) => {
      const arr = card.dataset.date.split(".");
      card.date = `${MONTHS[parseInt(arr[1]) - 1]} ${arr[2]}`;
    });
    filterNews();
    dateFilterItem.addEventListener("change", filterNews);
  });
}
