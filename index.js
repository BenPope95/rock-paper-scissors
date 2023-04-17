let playerChoice;
let round = 0;
let playerWins = 0;
let computerWins = 0;
let playAgain = document.querySelector("#playagain");
let gameInfo = document.querySelector(".game-info");
gameInfo.textContent = "Select a move to begin";

function randomChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice;
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = randomChoice();
  let computerChoice = choices[choice];
  console.log("choice", choice, choices);
  return computerChoice;
}

function resetGame() {
  round = 0;
  document.querySelector("#round").textContent = String(round);
  playerWins = 0;
  document.querySelector("#playerwins").textContent = String(playerWins);
  computerWins = 0;
  document.querySelector("#cpuwins").textContent = String(computerWins);
  gameInfo.textContent = "Select a move to begin";
}

playAgain.addEventListener("click", () => {
  resetGame();
  playAgain.classList.add("invisible");
});

function playRound() {
  if (playerChoice) {
    let computerChoice = getComputerChoice();
    //this determines the winner
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      playerWins++;
      document.querySelector("#playerwins").textContent = String(playerWins);
      round++;
      document.querySelector("#round").textContent = String(round);
      if (playerWins === 5) {
        gameInfo.textContent = `computer chose ${computerChoice}. Congratulations! You won the game!`;
        playAgain.classList.remove("invisible");
      } else {
        gameInfo.textContent = `computer chose ${computerChoice}. You won round ${round}.`;
      }
    } else if (playerChoice === computerChoice) {
      round++;
      document.querySelector("#round").textContent = String(round);
      gameInfo.textContent = `computer chose ${computerChoice}. Round ${round} is a draw`;
    } else {
      computerWins++;
      document.querySelector("#cpuwins").textContent = String(computerWins);
      round++;
      document.querySelector("#round").textContent = String(round);
      if (computerWins === 5) {
        gameInfo.textContent = `computer chose ${computerChoice}. You lost the game.`;
        playAgain.classList.remove("invisible");
      } else {
        gameInfo.textContent = `computer chose ${computerChoice}. You lost round ${round}.`;
      }
    }
  }
}

function playGame() {
  document.querySelector("#rock").addEventListener("click", () => {
    playerChoice = "rock";
    playRound();
  });
  document.querySelector("#paper").addEventListener("click", () => {
    playerChoice = "paper";
    playRound();
  });
  document.querySelector("#scissors").addEventListener("click", () => {
    playerChoice = "scissors";
    playRound();
  });
}

playGame();
