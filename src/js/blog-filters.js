const blogFiltersContainer = document.querySelector('.blog__filters');

if (blogFiltersContainer) {
  window.addEventListener('load', () => {
    const filterButtons = blogFiltersContainer.querySelectorAll('.filters__button');
    const cards = document.querySelectorAll('.blog__card');
    cards.forEach(card => {
      card.tags = card.dataset.filterTags.split(',');
      card.tags = card.tags.map(el => el.trim());
    });
    const filters = [];

    function filterBlogCards() {
      const currentFilterItem = blogFiltersContainer.querySelector('.filters__button.active');
      const currentFilterName = currentFilterItem.dataset.filterName.toString();

      cards.forEach(card => {
        card.parentElement.classList.remove('blog__cards-item--hidden');
        if (currentFilterName === '') return;
        if (card.tags.length === 0) return;
        for (let i = 0; i < card.tags.length; i++) {
          if (currentFilterName === card.tags[i].toString()) {
            return;
          }
        }
        card.parentElement.classList.add('blog__cards-item--hidden');
        return;
      });
    }
    filterButtons.forEach(el => {
      const filter = new Object;
      filter.el = el;
      filter.name = el.dataset.filterName;
      filters.push(filter);

      el.addEventListener('click', (evt) => {
        evt.preventDefault();
        filterButtons.forEach((element) => {
          element.classList.remove('active');
        });
        el.classList.add('active');

        filterBlogCards();
      });
    });
    filterBlogCards();
  });
}
