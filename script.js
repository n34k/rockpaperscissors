// Var declaration

let userChoice;
let compChoice;
let wins = 0;
let losses = 0;

// Node declaration

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const result = document.getElementById("result");
const score = document.getElementById("score");

// Get computer choice function

function getCompChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch(num) {
        case 1:
            choice = "Rock"
            break;
        case 2:
            choice = "Paper"
            break;
        case 3:
            choice = "Scissors"
            break;
    }
    return choice;
}

// Play round function

function playRound(userChoice, compChoice) {
    if(userChoice == "rock" && compChoice == "Rock") {
        result.textContent = "The computer chose Rock. It's a tie!";
        return 0;
    }
    else if (userChoice == "rock" && compChoice == "Scissors") {
        result.textContent = "The computer chose Scissors. Rock beats Scissors. You win!";
        return 1;
    }
    else if (userChoice == "rock" && compChoice == "Paper") {
        result.textContent = "The computer chose Paper. Paper beats Rock. You lose.";
        return 2;
    }
    else if (userChoice == "paper" && compChoice == "Rock") {
        result.textContent = "The computer chose Rock. Paper beats Rock. You win!";
        return 1;
    }
    else if (userChoice == "paper" && compChoice == "Paper") {
        result.textContent = "The computer chose Paper. It's a tie.";
        return 0;
    }
    else if (userChoice == "paper" && compChoice == "Scissors") {
        result.textContent = "The computer chose Scissors. Scissors beats paper. You lose.";
        return 2;
    }
    else if (userChoice == "scissors" && compChoice == "Rock") {
        result.textContent = "The computer chose Rock. Rock beats Scissors. You lose.";
        return 2;
    }
    else if (userChoice == "scissors" && compChoice == "Paper") {
        result.textContent = "The computer chose Paper. Scissors beats Paper. You win!";
        return 1;
    }
    else if (userChoice == "scissors" && compChoice == "Scissors") {
        result.textContent = "The computer chose Scissors. It's a tie.";
        return 0;
    }
}

// Function to keep score

function playMatch() {
    switch(playRound(userChoice, compChoice)) {
        case 0:
            break;
        case 1:
            wins = wins + 1;
            score.textContent = wins + " wins - " + losses + " losses";
            break;
        case 2:
            losses = losses + 1;
            score.textContent = wins + " wins - " + losses + " losses";
            break;
    }
}

// Button functionality

rockBtn.addEventListener("click", function(e) {
    userChoice = "rock";
    compChoice = getCompChoice();
    playMatch();
});
paperBtn.addEventListener("click", function(e) {
    userChoice = "paper";
    compChoice = getCompChoice();
    playMatch();
});
scissorsBtn.addEventListener("click", function(e) {
    userChoice = "scissors";
    compChoice = getCompChoice();
    playMatch();
});
