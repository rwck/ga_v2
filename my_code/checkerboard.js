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




