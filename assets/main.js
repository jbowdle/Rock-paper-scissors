function randomNum(max) {
    return Math.floor(Math.random() * max);
}

let stats = {
    wins: 0,
    losses: 0,
    ties: 0
}

const gameLoop = function() {
    let choice;
    let compChoice;
    let compNum = randomNum(3);  

    // Can be refactored by giving variable w/ the three options, which the player's choice and comp's number is used to pick from.
    // For player choice, allow lowercase, uppercase, and 'r' 'p' 's' as inputs.
    // Options can be left outside of the gameloop
    // Watch class recording for Brett's solution
    if (compNum === 0) {
            compChoice = "rock";
        } else if (compNum === 1) {
            compChoice = "paper";
        } else {
            compChoice = "scissors";    
        }

    choice = window.prompt("Please choose a value and enter exactly as written: rock, paper, scissors");
    
    // Can be refactored. The final else statement can be moved above this.
    // All win conditions for the player can be specified, but thrown into a super condition using || comparitors
    // Tie conditions remain the same.
    // All lose conditions can be thrown into an else statement
    if (choice === compChoice) {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You tie.`);
        stats.ties++;
    } else if (choice === "rock" && compChoice === "paper") {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You lose.`);
        stats.losses++;
    } else if (choice === "rock" && compChoice === "scissors") {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You win.`);
        stats.wins++;
    } else if (choice === "paper" && compChoice === "rock") {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You win.`);
        stats.wins++;
    } else if (choice === "paper" && compChoice === "scissors") {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You lose.`);
        stats.losses++;
    } else if (choice === "scissors" && compChoice === "paper") {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You win.`);
        stats.wins++;
    } else if (choice === "scissors" && compChoice === "rock") {
        window.alert(`You chose ${choice}. The computer chose ${compChoice}. You lose.`);
        stats.losses++; 
    } else {
        window.alert("You entered an incorrect value.");
        gameLoop();
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