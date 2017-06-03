function colorizeField(element, color) {
  let $elem = $(element);
  $elem.attr('style', $elem.attr('style') + '; ' + 'border: 3px solid '+color+' !important');
}

window.colorDetectFields = function() {
  let fields = window.detectFormFields();
  if (!fields.form) {
    alert('Could not detect form');
    return;
  }
  if (!fields.submitButton) {
    alert('Could not detect submitButton');
    return;
  }
  if (!fields.username) {
    alert('Could not detect username');
    return;
  }
  if (!fields.password) {
    alert('Could not detect password');
    return;
  }
  colorizeField(fields.form, 'blue');
  colorizeField(fields.submitButton, 'blue');
  colorizeField(fields.username, 'blue');
  colorizeField(fields.password, 'blue');
}

window.triggerObtainValues = function() {
  let result = window.obtainFieldsValues();
  console.log(result);
  if (!result.username) {
    alert('No Username retrieved');
    return;
  }
  if(!result.password) {
    alert('No password retrieved');
    return;
  }
  alert('Username: '+result.username+'; Password: '+result.password);
}