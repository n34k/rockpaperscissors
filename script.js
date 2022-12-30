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

function play(userChoice, compChoice) {
    userChoice.toLowerCase();
    if(userChoice == "rock" && compChoice == "Rock") {
        console.log("Tie.");
        return 0;
    }
    else if (userChoice == "rock" && compChoice == "Scissors") {
        console.log("Rock beats Scissors. You win!");
        return 1;
    }
    else if (userChoice == "rock" && compChoice == "Paper") {
        console.log("Paper beats Rock. You lose.");
        return 2;
    }
    else if (userChoice == "paper" && compChoice == "Rock") {
        console.log("Paper beats Rock. You win!");
        return 1;
    }
    else if (userChoice == "paper" && compChoice == "Paper") {
        console.log("Tie.");
        return 0;
    }
    else if (userChoice == "paper" && compChoice == "Scissors") {
        console.log("Scissors beats Paper. You lose.");
        return 2;
    }
    else if (userChoice == "scissors" && compChoice == "Rock") {
        console.log("Rock beats Scissors. You lose.");
        return 2;
    }
    else if (userChoice == "scissors" && compChoice == "Paper") {
        console.log("Scissors beats Paper. You win!");
        return 1;
    }
    else if (userChoice == "scissors" && compChoice == "Scissors") {
        console.log("Tie.");
        return 0;
    }
}

function playRound() {
    let wins = 0;
    let losses = 0;
    for(let i = 0; i < 5; i++) {
        let userChoice = prompt("What's your choice?")
        let compChoice = getCompChoice();
        switch(play(userChoice, compChoice)) {
            case 0:
                i = i - 1;
                break;
            case 1:
                wins = wins + 1;
                break;
            case 2:
                losses = losses + 1;
                break;
        }
        console.log(wins + " wins - " + losses + " losses")
        }
    if (wins > losses) {
        console.log("You won the match!");
    }
    else if (losses > wins) {
        console.log("You lost the match.");
    }
}

playRound();
