/* TODO: Add 'hit' animation on statusDiv change */

// selects elements from the HTML
// I hope there's a better way to do this
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
const statusDiv = document.querySelector("#status-div");
const buttonReset = document.querySelector("#button-reset");

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

// Next three event listeners are on the player choice buttons
// They change the image and text in the player halfcourt to their choice
// The button will highlight until another choice is clicked
buttonRock.addEventListener(
    "click",
    function () {
        choice = "rock";
        playerImg.setAttribute("src", "./assets/rock.png");
        // Refactor these next three somehow? 
        buttonRock.setAttribute("class", "highlight-button");
        buttonPaper.removeAttribute("class", "highlight-button");
        buttonScissors.removeAttribute("class", "highlight-button");
        playerDisplay.textContent = choice;
    }
)

buttonPaper.addEventListener(
    "click",
    function () {
        choice = "paper";
        playerImg.setAttribute("src", "./assets/paper.png");
        buttonRock.removeAttribute("class", "highlight-button");
        buttonPaper.setAttribute("class", "highlight-button");
        buttonScissors.removeAttribute("class", "highlight-button");
        playerDisplay.textContent = choice;
    }
)

buttonScissors.addEventListener(
    "click",
    function () {
        choice = "scissors";
        playerImg.setAttribute("src", "./assets/scissors.png");
        buttonRock.removeAttribute("class", "highlight-button");
        buttonPaper.removeAttribute("class", "highlight-button");
        buttonScissors.setAttribute("class", "highlight-button");
        playerDisplay.textContent = choice;
    }
)

// Gameloop, triggers once player hits "Shoot!" button
// Should be renamed?
const gameLoop = function() {
    let compChoice = options[randomNum(3)];

    // Resets image in comp halfcourt
    switch (compChoice) {
        case "rock":
            compImg.setAttribute("src", "./assets/rock.png");
            break;
        case "paper":
            compImg.setAttribute("src", "./assets/paper.png");
            break;
        case "scissors":
             compImg.setAttribute("src", "./assets/scissors.png");
            break;
    }

    // Updates text in halfcourts
    compDisplay.textContent = compChoice;
    playerDisplay.textContent = choice;
    
    // Updates stats and status. Status will display win, loss, or tie along with a color
    if (choice === compChoice) {
        stats.ties++;
        statusDiv.setAttribute("class", "status-tie");
        tieDisplay.textContent = `Ties: ${stats.ties}`;
        result.textContent = "Tie";
    } else if ((choice === "rock" && compChoice === "scissors") ||
        (choice === "paper" && compChoice === "rock") ||
        (choice === "scissors" && compChoice === "paper")) {
        stats.wins++;
        statusDiv.setAttribute("class", "status-win");
        winDisplay.textContent = `Wins: ${stats.wins}`;
        result.textContent = "Win";
    } else {
        stats.losses++;  
        statusDiv.setAttribute("class", "status-loss");
        lossDisplay.textContent = `Losses: ${stats.losses}`; 
        result.textContent = "Loss"; 
    }  
}

// Clicking "Shoot!" button will trigger the computer to choose
buttonShoot.addEventListener(
    'click',
    (e) => gameLoop()
) 

// Reset button
buttonReset.addEventListener(
    'click',
    function() {
        buttonRock.removeAttribute("class", "highlight-button");
        buttonPaper.removeAttribute("class", "highlight-button");
        buttonScissors.removeAttribute("class", "highlight-button");

        playerImg.setAttribute("src", "./assets/blank.png");
        compImg.setAttribute("src", "./assets/blank.png");

        playerDisplay.textContent = "";
        compDisplay.textContent = "";

        result.textContent = "";

        statusDiv.setAttribute("class", "status-reset");

        stats.wins = 0;
        stats.losses = 0;
        stats.ties = 0;
        winDisplay.textContent = `Wins: ${stats.wins}`;
        lossDisplay.textContent = `Losses: ${stats.losses}`;
        tieDisplay.textContent = `Ties: ${stats.ties}`;
    }
)