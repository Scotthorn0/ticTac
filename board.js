const helpers = require('./helpers.js');

const Board = function() {
  this.board = [
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_']
  ];

}

Board.prototype.constructor = Board;

Board.prototype.printBoard = function () {
  return this.board
}

Board.prototype.toggleSpot = function (player, location) {
  let validPlayers = ['x', 'o', 'X', 'O']
  if (validPlayers.indexOf(player) === -1) {
    throw new Error('invalid player');
  }
  //
  if (location > 9 || typeof location !== 'number') {
    throw new Error('invalid location');
  }
  // Flatten our board for easy access
  let flattened = this.board.reduce((flat, row) => flat.concat(row), []);

  // set the player piece on the board
  flattened[location - 1] = player;

  // rebuild the board based on the flattened one.
  this.board = helpers.rebuild(flattened);
}

Board.prototype.resetBoard = function () {
  this.board = [
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_']
  ];
}

Board.prototype.checkRows = function () {
  return this.board.reduce((winner, row) => {

  }, '')
}

module.exports = Board;
