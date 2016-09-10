"use strict";

// notes from last night -- currently the second game is not firing off the winCheck
// conditions. need to create a 'new game' button that refreshes the board and
// and posts a new game to the server. then on each click of a cell a PATCH
// request needs to be sent. finally, need to GET total games won by a user


 // const api = require('./gameApi');
// const ui = require('./gameUi.js');
 const logic = require('./logic.js');

//Player interactivity

const onSquareClick = function (event) {
  let squareClicked = event.target.id;
  logic.validMove(squareClicked);
  logic.winCheck(squareClicked);
  // createNewGame();
  // api.updateGame();

  // now need to add in game logic for winning conditions
  // ui.updateSquare(squareClicked);
};

const createNewGame = function (event) {
  logic.newGameBoard(event);
  //onSquareClick();
  // api.newGame();

};

const addHandlers = () => {
  $('.square').on('click', onSquareClick);
  $('.overlay').on('click', createNewGame);
  $('#new-game').on('click'); //add in new game function//);

};


module.exports = {
  addHandlers,
  onSquareClick,
  createNewGame,

};
