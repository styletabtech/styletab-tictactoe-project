"use strict";

// let currentGame = {
//   game: {
//       id: 0,
//       cells: ["","","","","","","","",""],
//       over: false,
//       player_x: {
//         id: '0',
//         email: 'a@gmail.com',
//       },
//       player_o: {
//         id: '0',
//         email: 'a@a.com',
//       }
// }

let currentBoard = ['','','','','','','','',''];

let turnCount = 0;

const turnCounter = function () {
  turnCount++;
//  console.log(turnCount);
};

const whoseTurn = function (squareClicked) {
  if (turnCount % 2 === 0) {
       $('#' + squareClicked).html('x');
       let index = $('#' + squareClicked).data("id");
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
    }
};

const validMove = function (squareClicked) {
  if ($('#' + squareClicked).html() === '') {
    whoseTurn(squareClicked);
   } else {
    return null;
  }

};

const winMsg = function() {
  $('.win-msg').show();
};

const catsGameMsg = function() {
  $('.draw-msg').show();
};

const winRow = function () {
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

const newGameBoard = function (){
  $('.square').html('');
  currentBoard = ['','','','','','','','','',];
  // console.log(currentBoard);
  turnCount = 0;
  winCheck = false;
  $('.overlay').hide();
};

// click handler to calll clear board and the button is in the menu

// reassigning currentboard to an empty array

module.exports = {
  currentBoard,
  turnCount,
  validMove,
  whoseTurn,
  winCheck,
  newGameBoard

};
