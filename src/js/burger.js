const burger = document.querySelector('.burger');

burger.addEventListener('click', (evt) => {
  burger.classList.toggle('burger--opened');
  // if (menu) {
  //   menu.classList.toggle('menu--opened');
  //   document.body.classList.toggle('menu-opened'); // Скрывает футер и мэйн
  // }
})


