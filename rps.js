/* Getter Functions */
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 1 / 3) {
    return "rock";
  } else if (randomNumber <= 2 / 3) {
    return "paper";
  }
  return "scissors";
}

// function getHumanChoice() {
//   let input = "";

//   while (
//     input.toLowerCase() != "rock" &&
//     input.toLowerCase() != "paper" &&
//     input.toLowerCase() != "scissors"
//   ) {
//     input = prompt("Rock, Paper, or Scissors?");
//   }
//   return input;
// }

// UI ELEMENTS
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
  if (gameOver) return;
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  if (gameOver) return;
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  if (gameOver) {
    return;
  }
  playRound("scissors", getComputerChoice());
});
/* End of Getters */

/* Initialize Scores at zero */
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function displayScore() {
  return `User Score: ${humanScore}\nCPU Score: ${computerScore}`;
}

/* GAME LOGIC */
function playRound(humanChoice, computerChoice) {
  const resultContainer = document.querySelector(".result");
  const gameScoreContainer = document.querySelector(".game-score");
  resultContainer.textContent = "";
  if (humanChoice === computerChoice) {
    const message = document.createElement("p");
    message.textContent = "It's a tie!";
    setTimeout(() => {resultContainer.appendChild(message)}, 50);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    const message = document.createElement("p");
    message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    setTimeout(() => {resultContainer.appendChild(message)}, 50);
  } else {
    computerScore += 1;
    const message = document.createElement("p");
    message.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    setTimeout(() => {resultContainer.appendChild(message)}, 50);
  }
  const currentScore = document.createElement("p");
  currentScore.textContent = displayScore();
  setTimeout(() => {resultContainer.appendChild(currentScore)}, 50);

  if (humanScore >= 5 || computerScore >= 5) {
    gameOver = true;
    const gameSummary = document.createElement("h2");
    gameSummary.textContent = result();
    gameScoreContainer.appendChild(gameSummary);
  }
}

/* END OF GAME LOGIC */

/* DISPLAY RESULTS OF GAME */
function result() {
  if (humanScore > computerScore) {
    return "You win the game!";
  } else if (humanScore === computerScore) {
    return "It's a tie!";
  } else {
    return "You lost the game.";
  }
}
