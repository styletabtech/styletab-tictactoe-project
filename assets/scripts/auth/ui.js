'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  app.user = data.user; // < -- data.user includes id, email and token
};

//for signing up
const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const changePasswordSuccess = function () {
  console.log('password successfully changed');

};

const signOutSuccess = function () {
  app.user = null; // this will be null because you want to wipe the user object clean (this is a best practice)
  console.log('successfully signed out');
};

module.exports = {
  signInSuccess,
  failure,
  success,
  changePasswordSuccess,
  signOutSuccess,
};
