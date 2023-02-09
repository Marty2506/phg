const phoneFields = document.querySelectorAll('.form input[type="tel"]');
var phoneMaskOptions = {
  mask: '+{7} (000) 000-00-00',
};

phoneFields.forEach(phoneField => {
  IMask(phoneField, phoneMaskOptions);
});

const mailFields = document.querySelectorAll('.form input[type="email"]');
var mailMaskOptions = {
  mask: /^\S*@?\S*$/
};

mailFields.forEach(mailField => {
  IMask(mailField, mailMaskOptions);
});
