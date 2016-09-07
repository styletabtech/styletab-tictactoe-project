"use strict";

//establishes board
const board = ['','','','','','','','',''];

// need a function to check if there's a win horizontally, vertically or diagonally
//if none of the above then tie.

// winning combos
// horizontally - [0,1,2], [3,4,5], [6,7,8]
// vertically - [0,3,6], [1,4,7], [2,5,8]
// diagonally - [0,4,6], [2,4,6]

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

const tie = function(currentBoard) {
  // checks for tie
  for (let i = 0; i < board.length; i++) {
    if(currentBoard[i] !=== currentBoard[] &&
      currentBoard[i] === currentBoard[]) {
      return console.log('tie'); // add in tie statement function
    }
  }
};


module.exports = {
  board,
  winRow,
  winColumn,
  winDiagonal,

};
