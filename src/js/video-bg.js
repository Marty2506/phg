const videoBgContainers = document.querySelectorAll(".video-bg");

function addAutoplayToVideoBg(location) {
  if (window.innerWidth > 1018) {
    location.setAttribute("preload", "");
    location.setAttribute("autoplay", "");
  }
}

window.addEventListener("load", () => {
  videoBgContainers.forEach((container) => {
    const video = container.querySelector(".video-bg__video");
    addAutoplayToVideoBg(video);
  });
});
