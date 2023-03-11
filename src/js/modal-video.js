// Настройки модалки для видео
const modalVideo = document.querySelector(".modal-video");
const modalVideoContent = modalVideo.querySelector("video");
const modalVideoCLoseButton = modalVideo.querySelector(
  ".modal-video__close-button"
);
modalVideoContent.volume = 0.3;

function hideModalVideo() {
  modalVideo.classList.remove("modal-video--opened");
  modalVideoContent.pause();
}

modalVideoCLoseButton.addEventListener("click", hideModalVideo);

const onModalVideoEscKeydown = (evt) => {
  if (document.querySelector(".modal-video--opened") && isEscapeKey(evt)) {
    evt.preventDefault();
    hideModalVideo();
  }
};

const onOutOfVideoModalClick = (evt) => {
  if (evt.target.classList.contains("modal-video")) {
    hideModalVideo();
  }
};

document.addEventListener("keydown", onModalVideoEscKeydown);
document.addEventListener("click", onOutOfVideoModalClick);

const playVideoButtons = document.querySelectorAll("[data-play-video-button]");

playVideoButtons.forEach((element) => {
  element.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalVideoContent.querySelector("source").src = element.href;
    modalVideoContent.load();

    modalVideo.classList.add("modal-video--opened");
  });
});
