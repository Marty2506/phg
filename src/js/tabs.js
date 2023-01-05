const tabs = document.querySelectorAll('.tabs');

tabs.forEach(tabsElement => {
  let panels = tabsElement.querySelectorAll('.tabs__panel');
  let tabButtons = tabsElement.querySelectorAll('.tabs__button');
  tabButtons.forEach((tabButton, i) => {
    tabButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      tabButtons.forEach((element, j) => {
        panels[j].classList.remove('active');
        element.classList.remove('active');
      });
      tabButton.classList.add('active');
      panels[i].classList.add('active');
    })
  });
});
