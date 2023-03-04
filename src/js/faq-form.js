const faqFormItem = document.querySelector("#faq-form");

if (faqFormItem) {
  const faqFormPristine = new Pristine(
    faqFormItem,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label-text", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  const formPhone = faqFormItem.querySelector('input[type="tel"]');

  faqFormPristine.addValidator(
    formPhone,
    (value) => {
      return value.length === 18;
    },
    "Номер неполный",
    2,
    false
  );

  faqFormItem.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = faqFormPristine.validate();
  });
}
