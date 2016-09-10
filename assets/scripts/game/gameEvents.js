"use strict";

// notes from last night -- currently the second game is not firing off the winCheck
// conditions. need to create a 'new game' button that refreshes the board and
// and posts a new game to the server. then on each click of a cell a PATCH
// request needs to be sent. finally, need to GET total games won by a user


 const api = require('./gameApi');
 const ui = require('./gameUi.js');
 const logic = require('./logic.js');

//Player interactivity

const onSquareClick = function (event) {
  console.log('onSquareClick runs');
  let squareClicked = event.target.id;
  console.log('SC' + event.target.id);
  logic.validMove(squareClicked);
  logic.winCheck(squareClicked);
//  api.updateGame();

  // now need to add in game logic for winning conditions
  // ui.updateSquare(squareClicked);
};

const createNewGame = function (event) {
  console.log('createNewGame');
  ui.onMinimize();
  logic.newGameBoard(event);
  api.newGame(event)
    .done(ui.onSuccess)
    .fail(ui.onError);


};

const addHandlers = () => {
  $('#new-game').on('click', createNewGame); //add in new game function//);
  $('.square').on('click', onSquareClick);

};


module.exports = {
  addHandlers,
  onSquareClick,
  createNewGame,

};
