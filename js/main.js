// First user to reach a score of 5 wins the round

let choices = ["rock", "paper", "scissors"]; //array of choices
let computerScore = 0; //global score tracker
let playerScore = 0; // global score tracker

function getComputerChoice() {
  let autoChoice = Math.floor(Math.random() * choices.length);
  return choices[autoChoice];
}
//func to get player choice
function getPlayerChoice() {
  let playerChoiceBtn = document.querySelectorAll(".choice");
  playerChoiceBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (computerScore < 5 && playerScore < 5) {
        game(e.currentTarget.id); //passes the id attribute of clicked btn to game()
      }
    });
  });
}

//game logic
function round(computerChoice, playerChoice) {
  if (playerChoice === computerChoice) {
    return "its a tie";
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return playerChoice;
    } else {
      return computerChoice;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return playerChoice;
    } else {
      return computerChoice;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return playerChoice;
    } else {
      return computerChoice;
    }
  }
}

//game function
function game(playerChoice) {
  const computerChoice = getComputerChoice();
  let winText = document.getElementById("result-final-stat");
  document.getElementById(
    "result-user-stat"
  ).innerText = `User: ${playerChoice}`;
  document.getElementById(
    "result-comp-stat"
  ).innerText = `Computer: ${computerChoice}`;
  let currentRound = round(computerChoice, playerChoice);
  if (currentRound === computerChoice) {
    winText.innerText = "Winner: Computer Wins";
    computerScore++;
  } else if (currentRound === playerChoice) {
    winText.innerText = "Winner: Player Wins";
    playerScore++;
  } else if (currentRound === "its a tie") {
    winText.innerText = "Winner: its a tie";
  }

  document.querySelector("#userScoreVal").innerText = playerScore;
  document.querySelector("#compScoreVal").innerText = computerScore;
  //checks if someone has won the round
  if (computerScore === 5 || playerScore === 5) {
    winner();
  }
}
function winner() {
  document.getElementById("result-final-stat").innerText =
    computerScore > playerScore
      ? "Computer Reached 5 wins"
      : "Player Reached 5 wins";
  reset.style.display = "inline-block";
}

window.addEventListener("load", getPlayerChoice());
//game reset
let reset = document.getElementById("reset-btn");
reset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.querySelector("#userScoreVal").innerText = 0;
  document.querySelector("#compScoreVal").innerText = 0;
  document.getElementById("result-final-stat").innerText = "Winner:";
  document.getElementById("result-user-stat").innerText = `User:`;
  document.getElementById("result-comp-stat").innerText = `Computer:`;
  reset.style.display = "none";
});
