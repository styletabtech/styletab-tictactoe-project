"use strict";

// const api = require('./gameApi');
// const ui = require('./gameUi');
 const logic = require('./logic');

//establishes player



//Player interactivity

const onSquareClick = function (event) {
  event.preventDefault();
    logic.display_input(event);
};

const addHandlers = () => {
  $('.square').on('click', onSquareClick);

};

  //

//  console.log('click worked');
    //  logic.validMove(event)
    //   .done(ui.playerTurn)
    //   .fail(ui.fail);





module.exports = {
  onSquareClick,
  addHandlers,


};
