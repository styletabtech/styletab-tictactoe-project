'use strict';

const app = require('../app');


const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data.user);
  console.log("hi");
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
  console.log('password successfully changed');

};

const signOutSuccess = () => {
  app.user = null;
  $('.board').hide();

};

module.exports = {
  signInSuccess,
  failure,
  success,
  changePasswordSuccess,
  signOutSuccess,
};
