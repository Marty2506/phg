const videoWidget = document.querySelector(".video-widget");

if (videoWidget) {
  const closeButton = videoWidget.querySelector(".video-widget__close-button");
  const video = videoWidget.querySelector("video");
  video.volume = 0.2;

  function toggleWidget() {
    videoWidget.classList.toggle("video-widget--opened");
    video.currentTime = 0;
    video.muted = !video.muted;
  }

  videoWidget.addEventListener("click", (evt) => {
    if (evt.target === closeButton) {
      videoWidget.style.display = "none";
      video.muted = 0;
      video.pause();
    } else {
      toggleWidget();
    }
  });

  document.addEventListener("click", (evt) => {
    if (
      evt.target.closest(".video-widget") === null &&
      videoWidget.classList.contains("video-widget--opened")
    ) {
      toggleWidget();
    }
  });
}
