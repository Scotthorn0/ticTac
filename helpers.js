
exports.rebuild = function(flatBoard) {
  let newBoard = [];
  let temp;
  let rowLength = 3;
  for(let i = 0; i < flatBoard.length; i += rowLength) {
    newBoard.push(flatBoard.slice(i, i + rowLength));
  }
  return newBoard
}
