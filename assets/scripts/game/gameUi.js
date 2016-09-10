'use strict';

//const app = require('../app');

const onMinimize = function () {
  $('.win-msg-x').hide();
  $('.win-msg-o').hide();
  $('.draw-msg').hide();

};



module.exports = {
  onMinimize,

};
