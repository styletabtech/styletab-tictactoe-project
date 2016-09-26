'use strict';

const app = require('../app');


const signInSuccess = (data) => {
  app.user = data.user;
//  $('.welcome-page').hide();
  $('.board-page').show();
  $('.board').hide();
  $('.win-msg-x').hide();
  $('.win-msg-o').hide();
  $('.draw-msg').hide();
  $('.total-games-msg').hide();
};

//for signing up
const success = (data) => {
  app.user = data.user;

};

const failure = (error) => {
  console.log('error is', error);
};

const changePasswordSuccess = () => {
  // console.log(data.user);
  // app.user = data.user;
  // $('.pw-success-msg').show();

};

const signOutSuccess = () => {
  app.user = null;
  $('.welcome-page').show();
  $('#sign-up-nav').show();
  $('#sign-in-nav').show();
  $('.board-page').hide();

  // $('.welcome-page').show();
  // $('#sign-up-nav').show();
  // $('#sign-in-nav').show();
  // $('.win-msg-x').hide();
  // $('.win-msg-o').hide();
  // $('.draw-msg').hide();
  // $('.total-games-msg').hide();
  // $('.navbar').hide();

};

module.exports = {
  signInSuccess,
  failure,
  success,
  changePasswordSuccess,
  signOutSuccess,
};
