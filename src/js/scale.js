class TrainingScale {
  constructor(scaleNumber, parentEl) {
    this.scaleNumber = scaleNumber;
    this.parent = parentEl;

    this.createScale();
  }

  createScale() {
    const container = document.createElement('div');
    container.classList.add('trainingScale');
    const item = document.createElement('div');
    item.classList.add('trainingScale__item');

    for (let i = 0; i < this.scaleNumber; i++) {
      const cloneItem = item.cloneNode(true);
      cloneItem.style.transitionDelay = `${i * (0.3 / this.scaleNumber)}s`;
      container.appendChild(cloneItem);
    }
    this.parent.appendChild(container);
    this.scale = container;
  }
}

const trainCards = document.querySelectorAll('.train-pack__card');
trainCards.forEach(trainCard => {
  const trainingScaleParent = trainCard.querySelector('.train-pack__card-scale-wrapper');
  const barNum = parseInt(trainCard.querySelector('.train-pack__card-number').textContent, 10);
  const trainigScale = new TrainingScale(barNum, trainingScaleParent);
  const btn = trainCard.querySelector('.train-pack__card-button');
  trainCard.addEventListener('mouseover', () => {
    trainigScale.scale.classList.add('trainingScale--hovered');
  })
  trainCard.addEventListener('focusin', () => {
    trainigScale.scale.classList.add('trainingScale--hovered');
  })
  trainCard.addEventListener('mouseleave', () => {
    trainigScale.scale.classList.remove('trainingScale--hovered');
  })
  trainCard.addEventListener('focusout', () => {
    trainigScale.scale.classList.remove('trainingScale--hovered');
  })
});
