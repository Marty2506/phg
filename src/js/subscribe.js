const subscribeForm = document.querySelector("#subscribe-form");

if (subscribeForm) {
  const subscribePristine = new Pristine(
    subscribeForm,
    {
      classTo: "form__label", // Элемент, на который будут добавляться классы
      errorTextParent: "form__label", // Элемент, куда будет выводиться текст с ошибкой
      errorTextTag: "span", // Тег, который будет обрамлять текст ошибки
      errorTextClass: "form__error-message", // Класс для элемента с текстом ошибки
    },
    true
  );

  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = subscribeForm.querySelector("button");
    btn.disabled = true;
    var valid = subscribePristine.validate();
    if (valid) {
      const formData = new FormData(subscribeForm);
      const data = new URLSearchParams(formData);
      // TODO: прогеру поменять адрес
      fetch("https://reqres.in/api/users", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // Получен ответ с подтверждением можно подсветить кнопочку)
          btn.textContent = "Успешно!";
          btn.classList.add("button--form-submitted");
          // console.log(btn);
          // btn.disabled = true;
        })
        .catch((error) => {
          console.log(error);
          btn.textContent = "Ошибка!";
        });
    }
    btn.disabled = false;
  });
}
