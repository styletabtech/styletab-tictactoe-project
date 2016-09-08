"use strict";

// const api = require('./gameApi');
// const ui = require('./gameUi');
 const logic = require('./logic');

//Player interactivity

// const onSquareClick = function (event) {
//   event.preventDefault();
//     logic.player(event);
// };

let turnCounter = 0;

const player = function (event) {
  event.preventDefault();
  if (turnCounter % 2 === 0) {
    $(this).text('X');
  } else {
    $(this).text('O');
  }
  turnCounter++;
};

const addHandlers = () => {
  $('.square').on('click', player);

};

  //

//  console.log('click worked');
    //  logic.validMove(event)
    //   .done(ui.playerTurn)
    //   .fail(ui.fail);





module.exports = {
  // onSquareClick,
  addHandlers,
  player

};
