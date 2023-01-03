//  Включение автоматического воспроизведения видео
const videoLocation  = document.querySelector('.video-header__video');
window.onload = addAutoplay();
function addAutoplay() {
  if (videoLocation) {
    if(window.innerWidth > 1020){
      videoLocation.setAttribute("preload", "");
      videoLocation.setAttribute("autoplay","");
    };
  }
}
