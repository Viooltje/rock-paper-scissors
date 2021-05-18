// Returning rock, paper, scissors randomly 
function computerPlay() {
    let choices = ['Rock', 'Paper','Scissor'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice; 
}


function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return `It's a draw, ${computerSelection} is the same as ${playerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You won!{playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `You lose ${playerSelection} is defeated ${computerSelection}`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You won!{playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return `You lose ${playerSelection} is defeated ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `You lose ${playerSelection} is defeated ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You won ${playerSelection} beats ${computerSelection}`;
    }
}

determineWinner('rock', 'paper');
determineWinner('paper', 'rock');
determineWinner('scissors', 'rock')
determineWinner('scissors', 'scissors');
determineWinner('scissors', 'paper' );