const searchbar = document.querySelector('.searchbar');
const showSearchBarButton = document.querySelector('#show-searchbar-button');

if (searchbar) {
  showSearchBarButton.addEventListener('click', () => {
    searchbar.classList.toggle('searchbar--hidden');
    pageHeader.classList.toggle('page-header--searchbar-opened');
  })
}

function hideSearchBar() {
  searchbar.classList.add('searchbar--hidden');
  pageHeader.classList.remove('page-header--searchbar-opened');
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
