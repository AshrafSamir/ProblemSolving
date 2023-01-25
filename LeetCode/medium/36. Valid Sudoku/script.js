/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  let rowMap = new Map();
  let colMap = new Map();
  let smallBoxMap = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (rowMap.has(board[i][j])) {
          return false;
        } else {
          rowMap.set(board[i][j], 1);
        }
      }
    }
    rowMap.clear();
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        if (colMap.has(board[j][i])) {
          return false;
        } else {
          colMap.set(board[j][i], 1);
        }
      }
    }
    colMap.clear();
  }

  for (let k = 2; k >= 0; k--) {
    for (let i = 0; i < 9; i++) {
      for (let j = 3 * k; j < 3 * k + 3; j++) {
        if (board[i][j] !== ".") {
          if (smallBoxMap.has(board[i][j])) {
            return false;
          } else {
            smallBoxMap.set(board[i][j], 1);
          }
        }
      }
      if (i === 2 || i === 5 || i === 8) {
        smallBoxMap.clear();
      }
    }
  }

  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board)); // true
