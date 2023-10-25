
//Score
let playerScore = 0;
let computerScore = 0;

//Function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() { 
    let randomNumber = Math.floor((Math.random() * 3) + 1); //returns a random number between 1 - 3

    if (randomNumber === 1) {
        return "rock"
    } else if (randomNumber === 2) {
        return "paper"
    } else {
        return "scissors"
    } 
}

//A function that plays a single round of Rock Paper Scissors. 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore +=1
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw";
    } else {
        return "Refresh page to enter a valid move"
    }
}

//Function that plays multiple rounds of the game
function game() {
    while (playerScore <= 5 && computerScore <= 5) {
        let playerSelection = prompt("Do you want to play 'rock', 'paper' or scissors'?").toLowerCase();
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
    alert(winCondition())
}

//function that declares the winner
function winCondition() {
    if (playerScore === 5) {
        return "Player Wins!"
    } else {
        return "Computer Wins!"
    }
} 

console.log(game())