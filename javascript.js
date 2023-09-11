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
let choice = getComputerChoice();
console.log(choice);