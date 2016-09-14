'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {

  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);
};

const onSignOut =  function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};


const addHandlers = () => {
  //sign up
$('#sign-up-nav').on('click', function () {
  $('#signUpModal').modal('show');
});
$('#sign-up').on('submit', onSignUp);

// sign in
$('#sign-in-nav').on('click', function () {
  $('#signInModal').modal('show');
});
$('#sign-in').on('submit', onSignIn);

//change pw
$('#change-pw-nav').on('click', function () {
  $('#changePwModal').modal('show');
});
$('#change-pw').on('submit', onChangePassword);

// sign out
$('#sign-out-nav').on('submit', onSignOut);

$(document).on('ready', function(){
// $('#sign-out-nav').hide();
// $('#change-pw-nav').hide();
});

};

module.exports = {
  addHandlers,
  onSignIn,
  onChangePassword,
  onSignOut,
};
