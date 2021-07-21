// make gui responsive
const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener('click', playRound('rock'));
paper.addEventListener('click', playRound('paper'));
scissors.addEventListener('click', playRound('scissors'));

// Returning rock, paper, scissors randomly 
function computerPlay() {
    let choices = ['rock', 'paper','scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice; 
}

// Determine winner of 1 round
function playRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return `It's a draw`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You won!`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `You lose`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You won!`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return `You lose`;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `You lose`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You won!`;
    }
}

// Determine the end winner
function endWinner(playerScore, computerScore){
    if (playerScore == computerScore) {
        return `It's a draw your end score is ${playerScore} your opponents is ${computerScore}`;
    } else if (playerScore > computerScore) {
        return `You won! your end score is ${playerScore} your opponents score is ${computerScore}`
    } else {
        return  `You lose your end score is ${playerScore} your opponents score is ${computerScore} `
    }
}

// variables for the program
let computerScore = 0;
let playerScore= 0;

// Start of game
for(let i=0; i<5; i++) {
    const playerSelection = prompt("Type rock paper or scissors");
    const computerSelection =computerPlay();
    if (playRound(playerSelection, computerSelection) == 'You won!') {
        playerScore++;
    } else if (playRound(playerSelection, computerSelection) == 'You lose') {
        computerScore++;
    }    
}

function returnWinner() {
    return endWinner(playerScore, computerScore);
}

returnWinner();

