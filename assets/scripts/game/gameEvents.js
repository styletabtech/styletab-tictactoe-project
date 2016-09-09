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


const addHandlers = () => {
  $('.square').on('click', onSquareClick);

};


module.exports = {
  addHandlers,
  onSquareClick,

};
