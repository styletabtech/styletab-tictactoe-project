'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();

  let signUpData = getFormFields(event.target);
    api.signUp(signUpData)
      .done(function(data, textStatus, jqXHR) {
      api.autoLogIn(data, textStatus, jqXHR, signUpData)
      .done(ui.signInSuccess)
      .fail(ui.failure);
    })
    .fail(ui.failure); // change to sign up failure

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

$('#sign-up').on('submit', function(){
  $('#signUpModal').modal('hide');

});


// sign in
$('#sign-in-nav').on('click', function () {
  $('#signInModal').modal('show');
});
$('#sign-in').on('submit', onSignIn);

$('#sign-in').on('submit', function(){
  $('#signInModal').modal('hide');
});

//change pw
$('#change-pw-nav').on('click', function () {
  $('#changePwModal').modal('show');
});
$('#change-pw').on('submit', onChangePassword);

$('#change-pw').on('submit', function(){
  $('#changePwModal').modal('hide');
});

// sign out
$('#sign-out-nav').on('click', onSignOut);

$(document).on('ready', function(){
  $('.board-page').hide();
//  $('.board').hide();
  $('.welcome-page').show();
  $('#sign-up-nav').show();
  $('#sign-in-nav').show();

});

};

module.exports = {
  addHandlers,
  onSignIn,
  onChangePassword,
  onSignOut,
};
