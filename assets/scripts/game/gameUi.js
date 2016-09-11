'use strict';

const app = require('../app');

const onMinimize = function () {
  $('.win-msg-x').hide();
  $('.win-msg-o').hide();
  $('.draw-msg').hide();

};

 const onSuccess = function (data) {
  app.game = data.game;
  console.log(app);
};


const onError = function (response) {
  console.error(response);
};



module.exports = {
  onMinimize,
  onSuccess,
  onError,

};
