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
// function plays a round of RPS and determins a winner
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