const SCROLL_SIZE = 200;
const scrollUpButton = document.querySelector('.scroll-up-button');

window.addEventListener('scroll', (evt) => {
  if (document.body.scrollTop > SCROLL_SIZE || document.documentElement.scrollTop > SCROLL_SIZE) {
    scrollUpButton.classList.add('scroll-up-button--active');
  } else {
    scrollUpButton.classList.remove('scroll-up-button--active');
  }
})

scrollUpButton.addEventListener('click', (evt) => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})
