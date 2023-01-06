// go go gadget pseudocode

// DONE prompt for playerSelection (case insensitive!)
// DONE getComputerChoice() will randomly return a string 'Rock' 'Paper' or 'Scissors 
// playRound(playerSelection, computerSelection) returns a string showing result like so: 'You Lose! Paper beats Rock'
// game() loops playRound() 5 times, then declares the winner

const DEFAULT_PROMPT = "It's Rock/Paper/Scissors, baby!\nYou know the rules. Choose your weapon."
const OOPS_PROMPT = "Hmm, the hand you reach out is empty.\nLuckily, I am merciful. Now pick a proper weapon."


function playRound(playerSelection, cpuSelection) {
    let result = '';




}

// work in progress
function determineWinner(pick1, pick2) {
    let winner = '';

    if (pick1 == pick2) {
        winner = 'Tie';
    }
    
    if (pick1 == 'Rock') {
        if (pick2 == 'Paper') {
            winner = pick1;
        } else if (pick2 == 'Scissors') {
            winner = pick1;
        }
    }

    return winner;
}

function askPlayerSelection() {
    let input = prompt(DEFAULT_PROMPT);
    input = capitalizeString( input.trim() );

    if (input != 'Rock' && input != 'Paper' && input != 'Scissors') {
        alert(OOPS_PROMPT);
        return askPlayerSelection();
    }
    
    return input;
}

function getComputerChoice() {
    let choice = '';
    let rng = Math.floor( ( Math.random() * 3 ) ); // returns 0, 1, or 2

    if (rng < 1) {
        choice = 'Rock';
    } else if (rng < 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }

    return choice;
}

function capitalizeString(text) {
    let first_letter = text[0].toUpperCase();
    let the_rest = text.slice(-1).toLowerCase();
    return first_letter + the_rest;
}