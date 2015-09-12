var checkerboard = [[null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null]];

function setSquare(player, row, col) {
  // Your Code Here
  checkerboard[row][col] = player;
}

function getPieceAt(row, col) {
  // Your Code Here
  return checkerboard[row][col];
}

function clearBoard() {
  for (var i = 0; i < checkerboard.length; i++) {
    for (var j = 0; j < checkerboard[i].length; j++) {
      checkerboard[i][j] = "null";
    }
  }
}

function setUpRed() {
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j < checkerboard[i].length; j += 2) {
      if (i % 2 == 0) {
        checkerboard[i][j] = "R";
      }
      else if (i % 2 != 0) {
        checkerboard[i][j+1] = "R";
      }
    }
  }
}

function setUpBlack() {
  for (var i = 5; i <= 7; i++) {
    for (var j = 0; j < checkerboard[i].length; j += 2) {
      if (i % 2 == 0) {
        checkerboard[i][j] = "B";
      }
      else if (i % 2 != 0) {
        checkerboard[i][j+1] = "B";
      }
    }
  }
}

var pieces = {
  "red": [
  [0, 0], [0, 2], [0, 4], [0, 6],
  [1, 1], [1, 3], [1, 5], [1, 7],
  [2, 0], [2, 2], [2, 4], [2, 6],
  ]
  ,
  "black": [
  [5, 1], [5, 3], [5, 5], [5, 7],
  [6, 0], [6, 2], [6, 4], [6, 6],
  [7, 1], [7, 3], [7, 5], [7, 7],
  ]
}

// tests for pieces array
function testRed() {
  pieces['red'].map(function(piece){
    var row = piece[0];
    var col = piece[1];
    var test = checkerboard[row][col] === 'R';
    console.log(test);
    return test;
  });
}

function testBlack() {
  pieces['black'].map(function(piece){
    var row = piece[0];
    var col = piece[1];
    var test = checkerboard[row][col] === 'B';
    console.log(test);
    return test;
  });
}

function setUpBoard() {
  setUpRed();
  setUpBlack();
}

function testBoard() {
  testRed();
  testBlack();
}
