const burger = document.querySelector('.burger');

burger.addEventListener('click', (evt) => {
  burger.classList.toggle('burger--opened');
  if (menu) {
    menu.classList.toggle('menu--opened');
    if (document.body.classList.contains('menu-opened')) {
      document.body.classList.remove('menu-opened');
    } else {
      setTimeout(() => {
        document.body.classList.add('menu-opened');
      }, 500) ; // Скрывает футер и мэйн
    }

  }
})

function toggleMenuOpened() {
  document.body.classList.toggle('menu-opened');
}

const menuSubs = menu.querySelectorAll('.menu__sub');


menuSubs.forEach(submenu => {
  const link = submenu.parentNode.querySelector('.menu__link');
  if (link) {
    link.addEventListener('click', (evt) => {
      if (link.classList.contains('menu__link--has-sub')) {
        evt.preventDefault();
        submenu.classList.add('menu__sub--active');
        const backButton = submenu.querySelector('.menu__back-button');
        backButton.addEventListener('click', () => {
          submenu.classList.remove('menu__sub--active');
        });
      }
    });
  }
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */
        } else {
          /* left swipe */
          const menuSub = evt.target.closest('.menu__sub');
          if (menuSub) {
            menuSub.querySelector('.menu__back-button').click();
          } else {
            const menu = evt.target.closest('.menu');
            if (menu) {
              burger.click();
            }
          }
        }
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */
        } else {
            /* up swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};



