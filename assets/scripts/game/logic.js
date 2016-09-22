"use strict";

let turnCount = 0;
let currentBoard = ['','','','','','','','',''];
let gameOver = false;

const turnCounter = function () {
  turnCount++;
};

const whoseTurn = function (squareClicked) {
  if (turnCount % 2 === 0) {
       $('#' + squareClicked).html('x');
       let index = $('#' + squareClicked).data("id");
       turnCounter();
       currentBoard[index] = 'x';

  } else {
      $('#' + squareClicked).html('o');
      let index = $('#' + squareClicked).data("id");
      turnCounter();
      currentBoard[index] = 'o';
    }
};

const validMove = function (squareClicked) {
  if ($('#' + squareClicked).html() === '') {
    whoseTurn(squareClicked);
   } else {
    return null;
  }
};

const winMsg = function(){
  if (turnCount % 2 === 0) {
    $('.win-msg-o').show();
  } else {
    $('.win-msg-x').show();
}
  gameOver = true;
};

const catsGameMsg = function() {
    $('.draw-msg').show();
    gameOver = true;
};

const winRow = function () {
  if (
    currentBoard[0] === currentBoard[1] && currentBoard[0] === currentBoard[2] && currentBoard[0] !== '' ||
    currentBoard[3] === currentBoard[4] && currentBoard[3] === currentBoard[5] && currentBoard[3] !== '' ||
    currentBoard[6] === currentBoard[7] && currentBoard[6] === currentBoard[8] && currentBoard[6] !== '') {
    winMsg();

    } else {
      return false;
}
};

const winColumn = function (){
  if (
    currentBoard[0] === currentBoard[3] && currentBoard[0] === currentBoard[6] && currentBoard[0] !== '' ||
    currentBoard[1] === currentBoard[4] && currentBoard[1] === currentBoard[7] && currentBoard[1] !== '' ||
    currentBoard[2] === currentBoard[5] && currentBoard[2] === currentBoard[8] && currentBoard[2] !== '') {
    winMsg();

  } else {
    return false;
  }
};

const catsGame = function () {
  if (turnCount > 8 && $(this).val() !== '') {
    catsGameMsg();

  } else {
    return false;
  }
};

const winDiagonal = function (){
  if (
    currentBoard[0] === currentBoard[4] && currentBoard[0] === currentBoard[8] && currentBoard[0] !== '' ||
    currentBoard[2] === currentBoard[4] && currentBoard[2] === currentBoard[6] && currentBoard[2] !== '') {
    winMsg();

  } else {
    catsGame();
  }
};

let winCheck = function () {
  return winRow() || winColumn() || winDiagonal();
};

// let gameState = function () {
//   if (winMsg() === true) {
//     return true;
//   } else {
//     return false;
//   }
//
// };

const newGameBoard = function (){
  $('.square').html('');
  currentBoard = ['','','','','','','','',''];
  turnCount = 0;
  gameOver = 0;
};


module.exports = {
  currentBoard,
  turnCount,
  validMove,
  whoseTurn,
  winCheck,
  newGameBoard,
  gameOver,
  // gameState

};
