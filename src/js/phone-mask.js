const phoneFields = document.querySelectorAll('.form input[type="tel"]');
var phoneMaskOptions = {
  mask: '+{7} (000) 000-00-00',
};
console.log(phoneFields);
phoneFields.forEach(phoneField => {
  IMask(phoneField, phoneMaskOptions);
});

