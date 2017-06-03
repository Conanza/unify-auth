/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
function determineSite() {
  let host = window.location.hostname;
  let ids = {};

  if (host.match('paypal.com')) {
    ids.password = "#password";
    ids.username = "#email";
  } else if (host.match('instagram.com')) {
  } else if (host.match('bankofamerica.com')) {
    ids.button = "#hp-sign-in-btn";
    ids.password = "#passcode1";
    ids.username = "#onlineId1";
  } else if (host.match('citi.com')) {
    ids.button = "#signInBtn";
    ids.password = "#password";
    ids.username = "#usernameMasked";
  } else if (host.match('yahoo.com')) {
  } else if (host.match('facebook.com')) {
    ids.button = "#loginbutton";
    ids.password = "#pass";
    ids.username = "#email";
  }

  return $.when(ids);
}

function getUsernameField() {
  return determineSite().then(ids => {
    return $(ids.username);
  });
}

function getPasswordField() {
  return determineSite().then(ids => {
    return $(ids.password);
  });
}

function getFormField() {
  return getUsernameField().then(usernameField => usernameField.closest('form'));
}

function getSubmitButton() {
  return determineSite().then(ids => {
    return $(ids.button);
  });
}

function redirectSite() {

}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites:
  // https://www.paypal.com - password field id = #password
  // https://www.instagram.com
  // https://www.bankofamerica.com
  // https://www.citi.com
  // https://www.yahoo.com
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  $.when(usernameField, passwordField).then((user, pw) => {
    user.val(username);
    pw.val(password);

    setTimeout(() => {
      getSubmitButton().then(btn => btn.click());
    }, 1000);
  });
};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return $.when(
    getFormField(),
    getSubmitButton(),
    getUsernameField(),
    getPasswordField()
  ).then((form, btn, user, pw) => {
    return {
      form: form,
      submitButton: btn,
      username: user,
      password: pw
    };
  });
};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return $.when(getUsernameField(), getPasswordField()).then((user, pw) => {

    return {
      username: user.val(),
      password: pw.val()
    };
  });
};
