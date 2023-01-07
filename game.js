// go go gadget pseudocode [1.01: I'm leaving this here to show my work and the original spec]

// prompt for playerSelection (case insensitive!)
// getComputerChoice() will randomly return a string 'Rock' 'Paper' or 'Scissors 
// playRound(playerSelection, computerSelection) returns a string showing result like so: 'You Lose! Paper beats Rock'
// game() loops playRound() 5 times, then declares the winner

const DEFAULT_PROMPT = "It's Rock/Paper/Scissors, baby!\nYou know the rules. Choose your weapon."
const OOPS_PROMPT = "Hmm, the hand you reach out is empty.\nLuckily, I am merciful. Now pick a proper weapon."
const TIE_TEXT = "Tie! Let's go again."
const RESTART_TEXT = "Refresh to play again."

let playerWins = 0;


function game(roundsToPlay) {
    if (roundsToPlay % 2 == 0) {
        console.error("ERROR: Programmer is an idiot");
        return;
    }

    let roundsToWin = Math.ceil(roundsToPlay / 2);

    for (let i = 0; i < roundsToPlay; i++) {
        playRound();
    }

    let cpuWins = roundsToPlay - playerWins;

    if (playerWins > cpuWins) {
        console.log(`You won ${playerWins} to ${cpuWins}. Well played.`);
        console.log()
    } else {
        console.log(`You lost ${cpuWins} to ${playerWins}. Try being less predictable. 😏`);
    }
}


function playRound() {
    let player = askPlayerSelection();
    let cpu = getComputerChoice();
    let winner = determineWinner(player, cpu);

    if (winner == 'Tie') {
        console.log(TIE_TEXT);
        playRound();
        return;
    } else if (winner == player) {
        playerWins++;
        console.log(`You Win! ${player} beats ${cpu}.`);
    } else {
        console.log (`You Lose! ${cpu} beats ${player}.`);
    }
}


function determineWinner(pick1, pick2) {
    if (pick1 == pick2) {
        return 'Tie';
    }

    switch (pick1) {
        case 'Rock':
            if (pick2 == 'Scissors') {
                return pick1;
            } else {
                return pick2;
            }
        case 'Paper':
            if (pick2 == 'Rock') {
                return pick1;
            } else {
                return pick2;
            }
        case 'Scissors':
            if (pick2 == 'Paper') {
                return pick1;
            } else {
                return pick2;
            }
        default:
            console.error("ERROR");
            return;
    }
}

function askPlayerSelection() {
    let input = prompt(DEFAULT_PROMPT);

    if (input == '') {
        alert(OOPS_PROMPT);
        return askPlayerSelection();
    }

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
    let the_rest = text.slice(1).toLowerCase();
    return first_letter + the_rest;
}