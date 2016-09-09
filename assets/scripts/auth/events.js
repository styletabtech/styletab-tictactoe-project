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
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};


const addHandlers = () => {
//   $('#sign-up').on('submit', onSignUp);
//   $('#sign-in').on('submit', onSignIn);
//   $('#change-password').on('submit', onChangePassword);
//   $('#sign-out').on('submit', onSignOut);
//
//MODAL EVENT
$('#sign-up-nav').on('click', function () {
  $('#signUpModal').modal('show');
});
$('#sign-up').on('submit', onSignUp);

$('#sign-in-nav').on('click', function () {
  $('#signInModal').modal('show');
});

$('#sign-in').on('submit', onSignIn);

$(document).on('ready', function(){
$('#sign-out').hide();
$('#change-pw').hide();
});

};

module.exports = {
  addHandlers,
  onSignIn,
  onChangePassword,
  onSignOut,
};
