// go go gadget pseudocode

// prompt for playerSelection (case insensitive!)
// getComputerChoice() will randomly return a string 'Rock' 'Paper' or 'Scissors 
// playRound(playerSelection, computerSelection) returns a string showing the result
// game() loops playRound() 5 times, then declares the winner

let playerSelection = askPlayerSelection();

// I still can't believe this dumb language doesn't do return types 
function askPlayerSelection() {
    let input = prompt("It's Rock/Paper/Scissors. You know the rules. Choose your weapon!");
    input = input.toLowerCase();


    return 'a string' // TODO PLACEHOLDER

}