function randomNum(max) {
    return Math.floor(Math.random() * max);
}

let stats = {
    wins: 0,
    losses: 0,
    ties: 0
}

let options = ["rock", "paper", "scissors"];

const gameLoop = function() {
    let compChoice = options[randomNum(3)];
    let choice; 
    
    choice = window.prompt("Please choose a value and enter exactly as written: rock, paper, scissors");

    if (choice != "rock" &&
        choice != "paper" &&
        choice != "scissors") {
        window.alert("You entered an incorrect value.");
        gameLoop();
    }
    
    if (choice === compChoice) {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You tie.`);
        stats.ties++;
    } else if ((choice === "rock" && compChoice === "scissors") ||
        (choice === "paper" && compChoice === "rock") ||
        (choice === "scissors" && compChoice === "paper")) {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You win.`);
        stats.wins++;
    } else {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You lose.`);
        stats.losses++;    
    }

    window.alert(`stats:
    wins: ${stats.wins}
    losses: ${stats.losses}
    ties: ${stats.ties}`);

    if (window.confirm("Play again?")) {
        gameLoop();
    } else {
        return;
    }

}

gameLoop();