// Настройки модалки для отображения картинок
const modalImage = document.querySelector('.modal-image');
const modalImageContent = modalImage.querySelector('.modal-image__content');
const modalImageCLoseButton = modalImage.querySelector('.modal-image__close-button');

function hideModalImage() {
  modalImage.classList.remove('modal-image--opened');
}

modalImageCLoseButton.addEventListener('click', hideModalImage);

const onModalImageEscKeydown = (evt) => {
  if (document.querySelector('.modal-image--opened') && isEscapeKey(evt)) {
    evt.preventDefault();
    hideModalImage();
  }
};

const onOutOfImageModalClick = (evt) => {
  if (evt.target.classList.contains('modal-image')) {
    hideModalImage();
  }
};

document.addEventListener('keydown', onModalImageEscKeydown);
document.addEventListener('click', onOutOfImageModalClick);

const gridGalleryLinks = document.querySelectorAll('[data-grid-gallery-link]');

gridGalleryLinks.forEach(element => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalImageContent.src = element.href;

    modalImage.classList.add('modal-image--opened');
  })
});
