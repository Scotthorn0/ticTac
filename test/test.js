const expect = require('chai').expect;
const Board = require('../board.js');
const helpers = require('../helpers.js');
const index = require('../index.js');

describe('Board', () => {
  let ticTac;
  beforeEach(() => {
    ticTac = new Board()
  });

  it('should export a function', () => {
    expect(Board).to.be.a('function');
  });

  it('should build a board when called', () => {

    expect(ticTac).to.be.a('object');
    expect(ticTac).to.be.an.instanceof(Board)
  });

  describe('printBoard', () => {

    it('should have a printBoard method', () => {
      let expected = [
        ['_','_','_'],
        ['_','_','_'],
        ['_','_','_']
      ]

      expect(ticTac.printBoard()).to.deep.equal(expected);
    });
  });

  describe('toggleSpot', () => {

    it('should have a toggle spot method', () => {

      expect(ticTac.toggleSpot).to.be.a('function');
    });

    it('should throw an error if called with wrong arguments', () => {

      expect(() => ticTac.toggleSpot('r', 1)).to.throw(/invalid player/);
      expect(() => ticTac.toggleSpot('x', 10)).to.throw(/invalid location/);
      expect(() => ticTac.toggleSpot('x', '10')).to.throw(/invalid location/);
    });

    it('toggleSpot should accept a player, and location argument', () => {
      let expected = [
        ['x','_','_'],
        ['_','_','_'],
        ['_','_','_']
      ];

      ticTac.toggleSpot('x', 1);

      expect(ticTac.printBoard()).to.deep.equal(expected);
    });

  });

  describe('checkRows', () => {

    it('should have a check rows function', () => {
      expect(ticTac.checkRows).to.be.a('function')
    });

    it('should accept a board and return the winner if a player has three on any row', () => {
      ticTac.toggleSpot('x', 1);
      ticTac.toggleSpot('x', 2);
      ticTac.toggleSpot('x', 3);

      expect(ticTac.checkRows()).to.be(true);

      ticTac.toggleSpot('x', 4);
      ticTac.toggleSpot('x', 5);
      ticTac.toggleSpot('x', 6);

      expect(ticTac.checkRows()).to.be(true);
    });

  });

  describe('checkCols', () => {
    it('should have a check cols function', () => {
      expect(ticTac.checkCols).to.be.a('function')
    });

  });


  describe('checkDiagonals', () => {

    it('should have a check diagonals function', () => {
      expect(ticTac.checkDiagonals).to.be.a('function')
    });
  });

  describe('resetBoard', () => {

    it('should reset the whole board', () => {
      let finishedBoard = [
        ['x', 'x', 'x'],
        ['_', '_', '_'],
        ['_', '_', '_']
      ];

      let cleanBoard = [
        ['_','_','_'],
        ['_','_','_'],
        ['_','_','_']
      ];

      ticTac.toggleSpot('x', 1);
      ticTac.toggleSpot('x', 2);
      ticTac.toggleSpot('x', 3);
      expect(ticTac.printBoard()).to.deep.equal(finishedBoard);

      ticTac.resetBoard()
      expect(ticTac.printBoard()).not.to.deep.equal(finishedBoard);
      expect(ticTac.printBoard()).to.deep.equal(cleanBoard);
    });

  });
});

describe('helpers', () => {

  describe('rebuild', () => {

    it('should have a rebuild function', () => {
      expect(helpers.rebuild).to.be.a('function');
    });

    it('should rebuild from a flattened board', () => {
      let flat = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
      let newBoard = [
        ['_','_','_'],
        ['_','_','_'],
        ['_','_','_']
      ];

      expect(helpers.rebuild(flat)).to.deep.equal(newBoard);
    });
  });



});
