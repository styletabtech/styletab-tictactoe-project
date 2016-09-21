"use strict";


 const api = require('./gameApi');
 const ui = require('./gameUi.js');
 const logic = require('./logic.js');



const onSquareClick = function (event) {
  event.preventDefault();
  let squareClicked = event.target.id;
  logic.validMove(squareClicked);
  logic.winCheck(squareClicked);
  let index = $('#' + squareClicked).data("id");
  let value = $('#' + squareClicked).html();
  api.updateGame(index, value, logic.gameOver)
     .done(ui.onUpdateSuccess)
     .fail(ui.onError);
};

const createNewGame = function (event) {
  event.preventDefault();
  ui.onMinimize();
  logic.newGameBoard();
  let data = {};
  api.newGame(data)
    .done(ui.onSuccess)
    .fail(ui.onError);

};

const onGetGames = function (event) {
  event.preventDefault();
  api.getTotalGames(event)
      .done(ui.onShowGamesTotal)
      .fail(ui.onError);
};

const addHandlers = () => {
  $('#new-game').on('click', createNewGame);
  $('.square').on('click', onSquareClick);
  $('#total-games-nav').on('click', onGetGames);

  $(document).on('ready', function(){
  $('.board').hide();
  $('.total-games-msg').hide();


  });

};


module.exports = {
  addHandlers,
  onSquareClick,
  createNewGame,

};
