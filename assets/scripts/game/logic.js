"use strict";

const game = {
      id: 0,
      cells: ["","","","","","","","",""],
      over: null,
      player_x: {
        id: '0',
        email: 'a@gmail.com',
      },
      player_o: {
        id: '0',
        email: 'a@a.com',
      }
};

const board = ['','','','','','','','',''];

let turnCount = 0;

const turnCounter = function () {
  turnCount++;
  console.log(turnCount);
};

const validMove = function (squareClicked) {
  if ($('#' + squareClicked).html() === '') {
    whoseTurn(squareClicked);
  // if (value === 'o' || value === 'x') {
    // true       |   |  true
    // console.log('this is not a valid square', value);
   } else {
      // turnCounter();
    // console.log('this is a valid square and value is', value);
    alert('You need to make a valid move');
  }

};

const whoseTurn = function (squareClicked) {
  if (turnCount % 2 === 0) {
       $('#' + squareClicked).html('x');
       let index = $('#' + squareClicked).data("id");
       turnCounter();
       board[index] = 'x';
       console.log(board);
  }
    else {
      $('#' + squareClicked).html('o');
      let index = $('#' + squareClicked).data("id");
      turnCounter();
      board[index] = 'o';
      console.log(board);
    }
};

const gameOver = function () {
  if ($('.board').find('#cell').html() !== '') {

  }
};

const winRow = function(currentBoard) {
  // checks for winning row combo
    for (let i = 0; i < board.length; i += 3) {
      if(currentBoard[i] === currentBoard[i + 1] &&
        currentBoard[i] === currentBoard[i + 2]) {
        return console.log('win'); // add in winning statement function
      }
  }
};

const winColumn = function(currentBoard) {
  // checks for winning column combo
    for (let i = 0; i < board.length; i += 3) {
      if(currentBoard[i] === currentBoard[i + 3] &&
        currentBoard[i] === currentBoard[i + 6]) {
        return console.log('win'); // add in winning statement function
    }
  }
};

const winDiagonal = function(currentBoard) {
  // checks for winning diagonal combo
    for (let i = 0; i < board.length; i += 3) {
      if(currentBoard[i] === currentBoard[i + 4] &&
        currentBoard[i] === currentBoard[i + 8]) {
        return console.log('win'); // add in winning function
    }
      else if (currentBoard[2] === currentBoard[4] &&
        currentBoard[2] === currentBoard[6]) {
        return console.log('win'); // add in winning statement function
    }
  }
};

// need to figure this out

// const tie = function(currentBoard) {
//   // checks for tie
//   for (let i = 0; i < board.length; i++) {
//     if(currentBoard[i] === currentBoard[1] &&
//       currentBoard[i] === currentBoard[]) {
//       return console.log('tie'); // add in tie statement function
//     }
//   }
// };

module.exports = {
  board,
  turnCount,
  validMove,
  winRow,
  winColumn,
  winDiagonal,
  whoseTurn,

};
