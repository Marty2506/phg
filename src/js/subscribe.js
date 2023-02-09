const subscribeForm = document.querySelector('#subscribe-form');

if (subscribeForm) {
  const subscribePristine = new Pristine(subscribeForm, {
    classTo: 'form__label', // Элемент, на который будут добавляться классы
    errorTextParent: 'form__label', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
    errorTextClass: 'form__error-message' // Класс для элемента с текстом ошибки
  }, true);

  subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = subscribePristine.validate();
  });


}

