"use strict";

let turnCount = 0;
let currentBoard = ['','','','','','','','',''];
let gameOver = false;
// let currentGame = {
//   game: {
//       id: '',
//       cells: ["","","","","","","","",""],
//       over: false,
//       player_x: {
//         id: '',
//         email: '',
//       },
//       player_o: {
//         id: '',
//         email: '',
//
//       }
// }
// };

const turnCounter = function () {
  console.log('turnCounter is running');
  turnCount++;
  console.log(turnCount);
};

const whoseTurn = function (squareClicked) {
  console.log('whoseturn is running');
  console.log('squareClicked is' + squareClicked);
  if (turnCount % 2 === 0) {
       $('#' + squareClicked).html('x');
       let index = $('#' + squareClicked).data("id");
       console.log('index is', index);
       turnCounter();
       currentBoard[index] = 'x';
       console.log(currentBoard);

  }
    else {
      $('#' + squareClicked).html('o');
      let index = $('#' + squareClicked).data("id");
      turnCounter();
      currentBoard[index] = 'o';
      console.log(currentBoard);
      console.log(index);

    }

};

const validMove = function (squareClicked) {
  console.log('validMove is running');
  if ($('#' + squareClicked).html() === '') {
    whoseTurn(squareClicked);
   } else {
    return null;
  }

};

const winMsg = function(){
  console.log('winmsg is running');
  if (turnCount % 2 === 0) {
  $('.win-msg-o').show();
  gameOver = true;
} else {
  $('.win-msg-x').show();
  gameOver = true;
  console.log(gameOver);
}

};

const catsGameMsg = function() {
  $('.draw-msg').show();
  gameOver = true;
};

const winRow = function () {
  console.log('winrow is running');
  if (
    currentBoard[0] === currentBoard[1] && currentBoard[0] === currentBoard[2] && currentBoard[0] !== '' ||
    currentBoard[3] === currentBoard[4] && currentBoard[3] === currentBoard[5] && currentBoard[3] !== '' ||
    currentBoard[6] === currentBoard[7] && currentBoard[6] === currentBoard[8] && currentBoard[6] !== '') {
      winMsg();
    } else {
      return null;
}
};

const winColumn = function (){
console.log('wincol is running');
  if (
  currentBoard[0] === currentBoard[3] && currentBoard[0] === currentBoard[6] && currentBoard[0] !== '' ||
  currentBoard[1] === currentBoard[4] && currentBoard[1] === currentBoard[7] && currentBoard[1] !== '' ||
  currentBoard[2] === currentBoard[5] && currentBoard[2] === currentBoard[8] && currentBoard[2] !== '') {
  winMsg();
  } else {
    return null;
  }
};

const catsGame = function () {
  if (turnCount > 8 && $(this).val() !== '') {
    catsGameMsg();
  } else {
    return null;
  }
};

const winDiagonal = function (){
console.log('windiag is running');
  if (
  currentBoard[0] === currentBoard[4] && currentBoard[0] === currentBoard[8] && currentBoard[0] !== '' ||
  currentBoard[2] === currentBoard[4] && currentBoard[2] === currentBoard[6] && currentBoard[2] !== '') {
  winMsg();

  } else {
    catsGame();
  }
};

let winCheck = function () {
  console.log('wincheck is running');
  return winRow() || winColumn() || winDiagonal();
};

const newGameBoard = function (){
  console.log("newGameBoard is running");
  $('.square').html('');
  currentBoard = ['','','','','','','','',''];
  turnCount = 0;
  gameOver = false;
};

module.exports = {
  currentBoard,
  turnCount,
  validMove,
  whoseTurn,
  winCheck,
  newGameBoard,
  gameOver

  // data

};
