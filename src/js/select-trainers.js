const formSelectOneItems = document.querySelectorAll('[data-form-select-one]');
const formSelectMultipleItems = document.querySelectorAll('[data-form-select-multiple]');
const programsSelectItem = document.querySelector('#select-trainers-program');
const pathSelectItem = document.querySelector('#select-trainers-path');
const trainersList = document.querySelector('#trainers-list');

formSelectMultipleItems.forEach(formSelectItem => {
  const formSelectChoice = new Choices(formSelectItem, {
    placeholder: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    removeItems: true,
    removeItemButton: true,
    noResultsText: 'Не найдено',
    noChoicesText: 'Нет вариантов',
    classNames: {
      containerOuter: 'form-choices',
      containerInner: 'form-choices__inner',
      input: 'form-choices__input',
      inputCloned: 'form-choices__input--cloned',
      list: 'form-choices__list',
      listItems: 'form-choices__list--multiple',
      listSingle: 'form-choices__list--single',
      listDropdown: 'form-choices__list--dropdown',
      item: 'form-choices__item',
      itemSelectable: 'form-choices__item--selectable',
      itemDisabled: 'form-choices__item--disabled',
      itemOption: 'form-choices__item--choice',
      group: 'choices__group',
      groupHeading : 'choices__heading',
      button: 'form-choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped'
    },
    allowHTML: true
  });
  formSelectItem.choice = formSelectChoice;
  const dropdownList = formSelectChoice.dropdown.element.childNodes[0];
  const applyBtn = document.createElement("button");
  applyBtn.textContent = "Применить";
  applyBtn.classList.add('button', 'button--reverse', 'form-choices__apply-button');
  applyBtn.type = "button";
  applyBtn.addEventListener('click', () => {
    formSelectChoice.hideDropdown();
  })
  formSelectItem.applyBtn = applyBtn;
  // formSelectItem.addEventListener('change', updatePrograms.bind(formSelectChoice));
  formSelectItem.addEventListener('showDropdown', () => {
    dropdownList.appendChild(applyBtn);
  });
  formSelectItem.addEventListener('change', () => {
    setTimeout(() => {
      filterTrainersCards();
      dropdownList.appendChild(applyBtn);
    })
  });
});

if (pathSelectItem) {
  const formSelectChoice = new Choices(pathSelectItem, {
    placeholder: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'form-choices',
      containerInner: 'form-choices__inner',
      input: 'form-choices__input',
      inputCloned: 'form-choices__input--cloned',
      list: 'form-choices__list',
      listItems: 'form-choices__list--multiple',
      listSingle: 'form-choices__list--single',
      listDropdown: 'form-choices__list--dropdown',
      item: 'form-choices__item',
      itemSelectable: 'form-choices__item--selectable',
      itemDisabled: 'form-choices__item--disabled',
      itemOption: 'form-choices__item--choice',
      group: 'choices__group',
      groupHeading : 'choices__heading',
      button: 'choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped'
    },
    allowHTML: true,
    callbackOnInit: updatePrograms
  });
  pathSelectItem.choice = formSelectChoice;
  pathSelectItem.addEventListener('change', updatePrograms.bind(formSelectChoice));
  pathSelectItem.addEventListener('change', () => {
    filterTrainersCards();
  });

  function updatePrograms() {
    let currentLabel = this._presetOptions[this.getValue().choiceId - 1].label;
    // Очищаем селект с программами
    programsSelectItem.choice.clearStore();
    // Получаем массив программ
    let choicesArray = programsSelectItem.choice.config.choices;
    // console.log(choicesArray);
    const newChoices = [];
    choicesArray.forEach((el, index) => {
      el.disabled = false;
      if (programsSelectItem.choice._presetOptions[index].label !== currentLabel) {
        el.disabled = true;

      }
      else {
        newChoices.push(el);
      }
    })
    programsSelectItem.choice.setChoices(newChoices);
  }
}


if (trainersList) {
  const cards = trainersList.childNodes;
  cards.forEach((card) => {
    card.trainerPath = card.dataset.path.split(',');
    card.trainerProgram = card.dataset.program.split(',');
    card.trainerProgram = card.trainerProgram.map(el => el.trim());
  })
}

function filterTrainersCards() {
  const cards = trainersList.childNodes;
  const pathFilter = pathSelectItem.choice.getValue(true);
  const programFilters = programsSelectItem.choice.getValue(true);
  cards.forEach(card => {
    card.classList.remove('select-trainer__list-item--hidden');
    if (pathFilter.toString() !== card.trainerPath.toString()) {
      card.classList.add('select-trainer__list-item--hidden');
      return;
    }
    if (programFilters.length === 0) {
      return;
    }
    for (let i = 0; i < programFilters.length; i++) {
      let same = false;
      for (let j = 0; j < card.trainerProgram.length; j++) {
        if (programFilters[i].toString() === card.trainerProgram[j].toString()) {
          same = true;
          break;
        }
      }
      if (!same) {
        card.classList.add('select-trainer__list-item--hidden');
        return;
      }
    }
  })
}
filterTrainersCards();
