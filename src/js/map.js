const mapWrapper = document.querySelector('.contacts__map');
const map = mapWrapper.querySelector('iframe');
let mapTooltip = document.createElement('div');
mapTooltip.textContent = 'Для активации карты нажмите по ней';
mapTooltip.classList.add('contacts__map-tooltip');
mapTooltip.classList.add('contacts__map-tooltip--hidden');

if (mapWrapper) {
  mapWrapper.appendChild(mapTooltip);
  mapWrapper.addEventListener('click', () => {
    map.style = '';
    mapWrapper.removeChild(mapTooltip);
  })
  mapWrapper.addEventListener('mousemove', (event) => {
    if (!event.target.closest('.contacts__map-parking')) {
      mapTooltip.classList.remove('contacts__map-tooltip--hidden');
      if (event.offsetY > 10) mapTooltip.style.top = event.offsetY + 20 + 'px';
      if (event.offsetX > 10) mapTooltip.style.left = event.offsetX + 20 + 'px';
    }
    else {
      mapTooltip.classList.add('contacts__map-tooltip--hidden');
    }
  })
  mapWrapper.addEventListener('mouseleave', () => {
    mapTooltip.classList.add('contacts__map-tooltip--hidden');
  })
}


