// Настройки модалки
// Общие настройки
const modalItems = document.querySelectorAll(".modal");

function hideModal() {
  document.querySelector(".modal--opened").classList.remove("modal--opened");
  // document.body.classList.remove("modal-opened");
}

const onModalEscKeydown = (evt) => {
  if (document.querySelector(".modal--opened") && isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
};

const onOutOfModalClick = (evt) => {
  if (evt.target.classList.contains("modal")) {
    hideModal();
  }
};

document.addEventListener("keydown", onModalEscKeydown);
document.addEventListener("click", onOutOfModalClick);

modalItems.forEach((modalItem) => {
  const closeButton = modalItem.querySelector(".modal__close-button");
  closeButton.addEventListener("click", hideModal);
});

// Настройки модалки фитнес тестирования
const fitTestModalItem = document.querySelector("#modal-fit-test");

if (fitTestModalItem) {
  const form = fitTestModalItem.querySelector("form");
  const fitTestModalPristine = new Pristine(
    form,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label-text", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  const formPhone = form.querySelector('input[type="tel"]');

  fitTestModalPristine.addValidator(
    formPhone,
    (value) => {
      return value.length === 18;
    },
    "Номер неполный",
    2,
    false
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = fitTestModalPristine.validate();
  });
}

// Навесим открывашки модалок фитнес тестирования
const openFitTestModalButtons = document.querySelectorAll(
  "[data-fit-test-modal]"
);
openFitTestModalButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault(); // Запрет перехода по ссылке
    fitTestModalItem.classList.add("modal--opened");
    // document.body.classList.add("modal-opened");
  });
});

// Настройки модалки обратного звонка
const backcallModalItem = document.querySelector("#modal-backcall");

if (backcallModalItem) {
  const form = backcallModalItem.querySelector("form");
  const backcallModalPristine = new Pristine(
    form,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label-text", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  const formPhone = form.querySelector('input[type="tel"]');

  backcallModalPristine.addValidator(
    formPhone,
    (value) => {
      return value.length === 18;
    },
    "Номер неполный",
    2,
    false
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = backcallModalPristine.validate();
  });
}

// Навесим открывашки модалок обратного звонка
const openBackcallModalButtons = document.querySelectorAll(
  "[data-backcall-modal]"
);
openBackcallModalButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault(); // Запрет перехода по ссылке
    backcallModalItem.classList.add("modal--opened");
    // document.body.classList.add("modal-opened");
  });
});

// Настройки модалки клубной карты
const clubCardModalItem = document.querySelector("#modal-club-card");

if (clubCardModalItem) {
  const form = clubCardModalItem.querySelector("form");
  const clubCardModalPristine = new Pristine(
    form,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label-text", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  const formPhone = form.querySelector('input[type="tel"]');

  clubCardModalPristine.addValidator(
    formPhone,
    (value) => {
      return value.length === 18;
    },
    "Номер неполный",
    2,
    false
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = clubCardModalPristine.validate();
  });
}

// Навесим открывашки модалок клубной карты
const openClubCardModalButtons = document.querySelectorAll(
  "[data-club-card-modal]"
);
openClubCardModalButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault(); // Запрет перехода по ссылке
    clubCardModalItem.classList.add("modal--opened");
    // document.body.classList.add("modal-opened");
  });
});

// Настройки модалки пакетов тренировок
const trainPacketModalItem = document.querySelector("#modal-train-packet");

if (trainPacketModalItem) {
  const form = trainPacketModalItem.querySelector("form");
  const trainPacketModalPristine = new Pristine(
    form,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label-text", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  const formPhone = form.querySelector('input[type="tel"]');

  trainPacketModalPristine.addValidator(
    formPhone,
    (value) => {
      return value.length === 18;
    },
    "Номер неполный",
    2,
    false
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = trainPacketModalPristine.validate();
  });
}

// Навесим открывашки модалок клубной карты
const openTrainPacketModalButtons = document.querySelectorAll(
  "[data-train-packet-modal]"
);
openTrainPacketModalButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault(); // Запрет перехода по ссылке
    trainPacketModalItem.classList.add("modal--opened");
    // document.body.classList.add("modal-opened");
  });
});
