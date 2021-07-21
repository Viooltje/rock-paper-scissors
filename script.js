// Select buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// Make buttons responsive
rock.addEventListener('click', play);
paper.addEventListener('click', play);
scissors.addEventListener('click', play);

// Select the html for scores
const results = document.querySelector('#end-result');
const playerChoice = document.querySelector('#player-choice');
const pScore = document.querySelector('#player-score');
const computerChoice = document.querySelector('#comp-choice');
const cScore = document.querySelector('#comp-score');

// Variables for playing
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let clicks = 0;

function play(){
    clicks++;
    // Computer choice
    computerSelection = computerPlay();
    computerChoice.innerHTML = computerSelection;

    // Player choice
    playerSelection = this.id;
    playerChoice.innerHTML = playerSelection;

    // Play game 
    let result = playRound(playerSelection, computerSelection);
    results.innerHTML = result
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;

    if (clicks == 5) {
        if (playerScore > computerScore){
            results.style["color"] = '#f5427b';
            results.style['font-size'] = '40px';
            results.innerHTML = "You've won from a computer!\n Congrats!!";
        }
        else if (playerScore < computerScore) {
            results.style["color"] = '#f5427b';
            results.style['font-size'] = '40px';
            results.innerHTML = "You've lost from a computer!";
        }
        else {
            results.style["color"] = '#f5427b';
            results.style['font-size'] = '40px';
            results.innerHTML = "No one won\nIt's a tie";
        }
    }




}

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
        playerScore++;
        return `You won!`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return `You lose`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return `You won!`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return `You lose`;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return `You lose`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return `You won!`;
    }
}

function disable(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);

}