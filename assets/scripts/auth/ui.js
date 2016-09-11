'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  app.user = data.user;
};

//for signing up
const success = (data) => {
  app.user = data.user;
};

const failure = () => {
//  console.log(error);
};

const changePasswordSuccess = function () {
//  console.log('password successfully changed');

};

const signOutSuccess = function () {
  app.user = null;
//  console.log('successfully signed out');
};

module.exports = {
  signInSuccess,
  failure,
  success,
  changePasswordSuccess,
  signOutSuccess,
};
