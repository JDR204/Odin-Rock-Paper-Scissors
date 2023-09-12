// function gets a random choice from computer
function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "Paper";
    }   else if (num == 1) {
        return "Rock";
    }   else {
        return "Scissors";
    }
}
// function plays a round of RPS and determines a winner
function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Draw";
    }   else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "You Win! Paper beats Rock";
            }   else if (computerSelection === "scissors") {
                    return "You Lose! Scissors beats Paper";
            }
    }   else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
            }   else if (computerSelection === "scissors") {
                    return "You Win! Rock beats Scissors";
            }
    }   else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                return "You Win! Scissors beats Paper";
            }   else if (computerSelection === "rock") {
                    return "You Lose! Rock beats Scissors";
            }
    }
}
// function plays 5 round games of RPS and prints results
function game() {   
    let wins = 0;
    let losses = 0;
    let rounds = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, Paper, or Scissors?");
        let computerInput = getComputerChoice();
        console.log("You chose " + userInput + ". Computer chose " + computerInput + ".");
        let results = round(userInput, computerInput);
        if (results == "Draw") {
            console.log(results);
            draws++;
        }   else if (results.indexOf("Win") !== -1) {
                console.log(results);
                wins++;
        }   else if (results.indexOf("Lose") !== -1) {
                console.log(results);
                losses++;
        }   
        rounds++;
        console.log("Round: " + rounds + "\n" + "User Wins: " + wins + "\nComputer Wins: " + losses + "\nDraws: " + draws + "\n\n");
    }
    if (wins > losses) {
        console.log("You win!")
    }   else if (losses > wins) {
            console.log("Computer Wins!");
    }   else {
            console.log("Draw Game")
    }
}

console.log(game());