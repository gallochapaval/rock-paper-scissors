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

//compare & return winORloose
function playRound(computerSelect) {
    let playerSelect = window.prompt("What's gonna be your pick? Rock, paper or scissors?");
    playerSelect.toLowerCase();
    switch (playerSelect) {
        case "rock":
        case "paper":
        case "scissors":
            break;
        default:
            playerSelect = window.prompt("Sorry but " + playerSelect + " is not a valid pick...pick again");
            playerSelect.toLowerCase();
    }
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
    else {
        computerCounter = 5;
        playerCounter = 0;
        return ("lost");
    }
}
//play 5 round game showing results
function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        let winORloose = playRound(computerSelection);
        if (winORloose == "win") {
            playerCounter++;
            window.alert("You win this round, the computer chose " + computerSelection + " so the score is:\r\n YOU : " + playerCounter + " - PC : " + computerCounter);
        }
        else if (winORloose == "loose") {
            computerCounter++;
            window.alert(" :'( ...You loose this round, the computer chose " + computerSelection + " so the score is:\r\n YOU : " + playerCounter + " - PC : " + computerCounter);
        }
        else if (winORloose == "tie"){
            window.alert("It's a tie! The score is still the same...")
            i--;
        }
        else if (winORloose == "lost"){
            window.alert("Ok rudeboy, you kept choosing wrongly...");
            i=5;
        }
        console.log(winORloose);
        console.log(computerSelection);
    }
    let playAgain;
    if (playerCounter > computerCounter) {
        playAgain = confirm("Congratulations, You Won! Wanna play again?");
    }
    else if (playerCounter < computerCounter) {
        playAgain = confirm("I'm sorry but you lost! Wanna play again?");
    }
    if (playAgain) {
        reset();
    }
    else if (!playAgain) {
        window.alert("Thank you very mucho for playing my juego!");
    }
}
//welcome message
if (confirm("Hallo darling, wanna play a 5-round-game of Rock, Paper, Scissors?")){
    game();
}
//reset function to play again
function reset() {
    playerCounter = 0;
    computerCounter = 0;
    game();
}
//security check...justin case
if (playerCounter+computerCounter>5){
    reset();
}