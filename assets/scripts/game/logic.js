"use strict";

// let currentGame = {
//   game: {
//       id: 0,
//       cells: ["","","","","","","","",""],
//       over: null,
//       player_x: {
//         id: '0',
//         email: 'a@gmail.com',
//       },
//       player_o: {
//         id: '0',
//         email: 'a@a.com',
//       }
// }
// };

let currentBoard = ['','','','','','','','',''];

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

const winRow = function () {
  if (
    currentBoard[0] === currentBoard[1] && currentBoard[0] === currentBoard[2] && currentBoard[0] !== '' ||
    currentBoard[3] === currentBoard[4] && currentBoard[3] === currentBoard[5] && currentBoard[3] !== '' ||
    currentBoard[6] === currentBoard[7] && currentBoard[6] === currentBoard[8] && currentBoard[6] !== '') {
      console.log('winner!');
    } else {
      return false;
}
};

const winColumn = function (){
  if (
  currentBoard[0] === currentBoard[3] && currentBoard[0] === currentBoard[6] && currentBoard[0] !== '' ||
  currentBoard[1] === currentBoard[4] && currentBoard[1] === currentBoard[7] && currentBoard[1] !== '' ||
  currentBoard[2] === currentBoard[5] && currentBoard[2] === currentBoard[8] && currentBoard[2] !== '') {
    console.log('winner!');
  } else {
    return false;
  }
};

const catsGame = function () {
  if (turnCount > 8 && $(this).val() !== '') {
    console.log('draw!');
  } else {
    return false;
  }
};

const winDiagonal = function (){
  if (
  currentBoard[0] === currentBoard[4] && currentBoard[0] === currentBoard[8] && currentBoard[0] !== '' ||
  currentBoard[2] === currentBoard[4] && currentBoard[2] === currentBoard[6] && currentBoard[2] !== '') {
    console.log('winner');
  } else {
    catsGame();
  }
};

const gameOver = function () {
  return winRow() || winColumn() || winDiagonal();
};



module.exports = {
  currentBoard,
  turnCount,
  validMove,
  whoseTurn,
  gameOver

};
