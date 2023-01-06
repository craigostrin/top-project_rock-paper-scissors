// go go gadget pseudocode

// prompt for playerSelection (case insensitive!)
// getComputerChoice() will randomly return a string 'Rock' 'Paper' or 'Scissors 
// playRound(playerSelection, computerSelection) returns a string showing the result
// game() loops playRound() 5 times, then declares the winner

const DEFAULT_PROMPT = "It's Rock/Paper/Scissors, baby!\nYou know the rules. Choose your weapon."
const OOPS_PROMPT = "Hmm, the hand you reach out is empty.\nLuckily, I am merciful. Now pick a proper weapon."


function askPlayerSelection() {
    let input = prompt(DEFAULT_PROMPT);
    input = input.toLowerCase().trim();

    if (input != 'rock' && input != 'paper' && input != 'scissors') {
        alert(OOPS_PROMPT);
        return askPlayerSelection();
    }
    
    return input;
}

function getComputerChoice() {
    let choice = '';
    let rng = Math.floor( ( Math.random() * 3 ) ); // returns 0, 1, or 2

    if (rng < 1) {
        choice = 'rock';
    } else if (rng < 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return choice;
}