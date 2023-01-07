const searchbar = document.querySelector('.searchbar');
const showSearchBarButton = document.querySelector('#show-searchbar-button');

if (searchbar) {
  showSearchBarButton.addEventListener('click', () => {
    searchbar.classList.toggle('searchbar--hidden');
  })
}

function hideSearchBar() {
  searchbar.classList.add('searchbar--hidden');
}

const onSearchBarEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideSearchBar();
  }
};

const onOutOfSearchBarClick = (evt) => {
  if (!searchbar.classList.contains('searchbar--hidden') && !evt.target.closest('.searchbar') && !evt.target.closest('#show-searchbar-button')) {
    hideSearchBar();
  }
};

document.addEventListener('keydown', onSearchBarEscKeydown);
document.addEventListener('click', onOutOfSearchBarClick);
