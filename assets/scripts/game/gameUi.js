'use strict';

const app = require('../app');

const onMinimize = function () {
  $('.win-msg-x').hide();
  $('.win-msg-o').hide();
  $('.draw-msg').hide();
  $('.board').show();

};

 const onSuccess = function (data) {
  app.game = data.game;
//  console.log('app is', app);
};


const onError = function (response) {
  console.error(response);
};

const onUpdateSuccess = function (data) {
  console.log(data);

 app.game = data.game;

};

const onShowGamesTotal = function (data) {
  console.log('onShowGamesTotal is ', data);
  let totalGames = data.games.length;
  $('#games-total').html(totalGames);
  //.show on the div that will be hiding
};



// const getGameSuccess = (data) => {
//   $('.games-popup').show();
//   setTimeout(function() {
//        $('.games-popup').fadeOut();
//         }, 2000);
//   let totalGames = data.games.length;
//   $('#games-played').text(totalGames);
// };

module.exports = {
  onMinimize,
  onSuccess,
  onError,
  onUpdateSuccess,
  onShowGamesTotal

};
