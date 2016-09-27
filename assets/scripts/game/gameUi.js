'use strict';

const app = require('../app');

const onMinimize = function () {
  $('.win-msg-x').hide();
  $('.win-msg-o').hide();
  $('.draw-msg').hide();
  $('.total-games-msg').hide();
  $('.board').show();
};

 const onSuccess = function (data) {
  app.game = data.game;
};


const onError = function (response) {
  console.error(response);
};

const onUpdateSuccess = function (data) {
  app.game = data.game;
};

const onShowGamesTotal = function (data) {
  $('.total-games-msg').show();
  setTimeout(function() {
   $('.total-games-msg').fadeOut();
 }, 1300);
  let totalGames = data.games.length;
  $('#games-total').html(totalGames);

};


module.exports = {
  onMinimize,
  onSuccess,
  onError,
  onUpdateSuccess,
  onShowGamesTotal

};
