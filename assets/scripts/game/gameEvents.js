"use strict";

// const api = require('./gameApi');
// const ui = require('./gameUi.js');
 const logic = require('./logic.js');

//Player interactivity


const onSquareClick = function (event) {
  event.preventDefault();
  let squareClicked = event.target.id;
  logic.validMove(squareClicked);
  logic.winCheck(squareClicked);

  // now need to add in game logic for winning conditions
  // ui.updateSquare(squareClicked);
};

const createNewGame = function (event) {
  event.preventDefault();
  logic.newGameBoard(event);

};


const addHandlers = () => {
  $('.square').on('click', onSquareClick);
  $('.overlay').on('click', createNewGame);

};


module.exports = {
  addHandlers,
  onSquareClick,
  createNewGame,

};
