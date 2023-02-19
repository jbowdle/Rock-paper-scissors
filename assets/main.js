const playerDisplay = document.querySelector("#player-choice");
const compDisplay = document.querySelector("#computer-choice");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const buttonShoot = document.querySelector("#shoot");
const winDisplay = document.querySelector("#win-display");
const lossDisplay = document.querySelector("#loss-display");
const tieDisplay = document.querySelector("#tie-display");
const result = document.querySelector("#status");
const playerImg = document.querySelector("#player-img");
const compImg = document.querySelector("#comp-img");

function randomNum(max) {
    return Math.floor(Math.random() * max);
}

let stats = {
    wins: 0,
    losses: 0,
    ties: 0
}

let options = ["rock", "paper", "scissors"];

let choice;

buttonRock.addEventListener(
    "click",
    function () {
        choice = "rock";
        playerImg.setAttribute("src", "./assets/rock.png");
    }
)

buttonPaper.addEventListener(
    "click",
    function () {
        choice = "paper";
        playerImg.setAttribute("src", "./assets/paper.png");
    }
)

buttonScissors.addEventListener(
    "click",
    function () {
        choice = "scissors";
        playerImg.setAttribute("src", "./assets/scissors.png");
    }
)

const gameLoop = function() {
    let compChoice = options[randomNum(3)];

    compDisplay.textContent = `Chose: ${compChoice}`;
    playerDisplay.textContent = `Chose: ${choice}`;
    
    if (choice === compChoice) {
        stats.ties++;
        tieDisplay.textContent = `Ties: ${stats.ties}`;
        result.textContent = "Tie";
    } else if ((choice === "rock" && compChoice === "scissors") ||
        (choice === "paper" && compChoice === "rock") ||
        (choice === "scissors" && compChoice === "paper")) {
        stats.wins++;
        winDisplay.textContent = `Wins: ${stats.wins}`;
        result.textContent = "Win";
    } else {
        stats.losses++;  
        lossDisplay.textContent = `Losses: ${stats.losses}`; 
        result.textContent = "Loss"; 
    }

    
    
    

}

buttonShoot.addEventListener(
    'click',
    (e) => (gameLoop())
) 
