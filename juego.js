//pick a random move for the pc
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) return "rock";
    if (randomNumber == 2) return "paper";
    if (randomNumber == 3) return "scissors";
}
let computerSelection = "";
let computerCounter = 0;
let playerCounter = 0;

//SCORE ELEMENTS
const score = document.createElement('h1');
score.classList.add('score');
score.textContent = "The rules are simple: choose from the options above. Paper beats rock, rock beats scissors, scissors beat paper. FIRST TO 5 WINS";

const POINTS = document.createElement('h1');
POINTS.classList.add('POINTS');
POINTS.textContent = "YOU : " + playerCounter + " - PC : " + computerCounter;

const reStart = document.createElement('h1');
reStart.classList.add('reStart');
reStart.textContent = "RESET"

//compare & return winORloose
function playRound(playerSelect, computerSelect) {
    if (playerSelect == "rock" || playerSelect == "paper" || playerSelect == "scissors") {
        if (computerSelect == playerSelect) return "tie";
        else if (computerSelect == "rock") {
            if (playerSelect == "paper") return "win";
            else if (playerSelect == "scissors") return "loose";
        }
        else if (computerSelect == "paper") {
            if (playerSelect == "scissors") return "win";
            else if (playerSelect == "rock") return "loose";
        }
        else if (computerSelect == "scissors") {
            if (playerSelect == "rock") return "win";
            else if (playerSelect == "paper") return "loose";
        }
    }
}
//play 5 round game showing results
function game(playerSelection) {
    if (playerCounter < 5 && computerCounter < 5) {
        computerSelection = computerPlay();
        let winORloose = playRound(playerSelection, computerSelection);
        if (winORloose == "win") {
            playerCounter++;
            score.textContent = "You win this round, the computer chose " + computerSelection;
            POINTS.textContent = "YOU : " + playerCounter + " - PC : " + computerCounter
        }
        else if (winORloose == "loose") {
            computerCounter++;
            score.textContent = " :'( ...You loose this round, the computer chose " + computerSelection;
            POINTS.textContent = "YOU : " + playerCounter + " - PC : " + computerCounter
        }
        else if (winORloose == "tie") {
            score.textContent = "It's a tie! The score is still the same...";
            POINTS.textContent = "YOU : " + playerCounter + " - PC : " + computerCounter
        }
        //console.log(winORloose);
        //console.log(computerSelection);
    }

    //GAMEOVER
    if (playerCounter >= 5) {
        score.textContent = "Congratulations, You Won!";
        POINTS.textContent = "YOU : " + playerCounter + " - PC : " + computerCounter;
        container.appendChild(reStart);
        reStart.addEventListener('click', () => reset());
    }
    else if (computerCounter >= 5) {
        score.textContent = "I'm sorry but you lost!";
        POINTS.textContent = "YOU : " + playerCounter + " - PC : " + computerCounter
        container.appendChild(reStart);
        reStart.addEventListener('click', () => reset());
    }
}

//reset function to play again
function reset() {
    playerCounter = 0;
    computerCounter = 0;
    score.textContent = "HERE WE GO AGAIN!";
    POINTS.textContent = "YOU : " + playerCounter + " - PC : " + computerCounter;
    container.removeChild(reStart);
}

//new parts 4 UI

const container = document.querySelector('.container');

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

//button animation function
function byClick(e) {
    this.classList.add('playing');
}

const moves = document.querySelectorAll('.move');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

//button animation call
moves.forEach(move => move.addEventListener('transitionend', removeTransition));
moves.forEach(move => move.addEventListener('click', byClick));

//Start the game by clicking on the buttons
rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorsBtn.addEventListener('click', () => game('scissors'));



container.appendChild(score);
container.appendChild(POINTS);