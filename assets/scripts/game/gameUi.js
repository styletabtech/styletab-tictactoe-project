'use strict';

//const app = require('../app');

const turnCounter = 0;

const playerTurn = function () {
  return turnCounter % 2 === 0 ? "x" : "o";
};

//  if (app.game = game.player_x) {
  //  $(.cells).show('X')
//  };
  // else {
  //   $(.cells).show('O')
  // }



module.exports = {
playerTurn,
};
