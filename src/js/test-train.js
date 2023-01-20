const testTrainForm = document.querySelector('#test-train-form');

if (testTrainForm) {
  const testTrainFormPristine = new Pristine(testTrainForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label-text', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);

  const formPhone = testTrainForm.querySelector('input[type="tel"]');

  testTrainFormPristine.addValidator(formPhone, (value) => {
    return (value.length === 18);
  }, "Номер неполный", 2, false);

  testTrainForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = testTrainFormPristine.validate();
  });


}
