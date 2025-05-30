/* Getter Functions */
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= (1/3)) {
        return 'rock'
    } else if (randomNumber <= (2/3)) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let input = '';
    
    while (input.toLowerCase() != 'rock' && input.toLowerCase() != 'paper' && input.toLowerCase() != 'scissors') {
        input = prompt("Rock, Paper, or Scissors?");
    }
    return input;
}
/* End of Getters */

/* Initialize Scores at zero */
let humanScore = 0;
let computerScore = 0;

/* GAME LOGIC */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }   else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}
/* END OF GAME LOGIC */

/* DISPLAY RESULTS OF GAME */
function result() {
    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (
        humanScore === computerScore
    ){
        console.log('It\'s a tie!');
    } else {
        console.log('You lost the game.')
    }   console.log(
        `Score:\nHuman: ${humanScore}\nComputer: ${computerScore}`
    )
}

playGame()
result()