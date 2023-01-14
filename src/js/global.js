const menu = document.querySelector('.menu');
const pageHeader = document.querySelector('.page-header');

/**
 * Проверяет, что нажатая клавиша соответствует клавише Escape
 * @param {object} evt
 * @returns {boolean} true, если Escape
 */
const isEscapeKey = (evt) => evt.key === 'Escape';
