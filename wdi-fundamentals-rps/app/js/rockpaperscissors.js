////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move;
    return move || getInput();
    /* Your Expression */
}

function getComputerMove(move) {
    // Write an expression that operates   a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move;

    return move || randomPlay();
    /* Your Expression */
}

function getWinner(playerMove,computerMove) {
    var computerMove;
    var playerMove;
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    computerMove = getComputerMove();
    playerMove = getPlayerMove();

    if (computerMove == playerMove) {
        winner = "tie";
    }
    else if ((computerMove == "rock" && playerMove == "scissors") || (computerMove == "scissors" && playerMove == "paper") || (computerMove == "paper" && playerMove == "rock")) {
        winner = "computer";
    }
    else {
        winner = "player";
    }
    return winner;
}

function playToFive() {
    alert("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
      var result = getWinner();
      if (result == "player") {
        playerWins++;
        alert("You won that round!");
      }
      else if (result == "computer") {
        computerWins++;
        alert("I won that round, human!");
      }
      else alert("That was a tie. Need to play again!");
    }

    if (playerWins === 5) {
      alert("You win this time!!!\n" + playerWins + " to " + computerWins + "!");
    }
    if (computerWins === 5) {
      alert("Victory is mine, and sweet it is indeed!!!\n " + computerWins + " to " + playerWins + "!");
    }

    return [playerWins, computerWins];
  }
