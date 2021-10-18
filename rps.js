
function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    console.log(choices[Math.floor(Math.random() * choices.length)]);
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerResult = 0;
let computerResult = 0;

function playRound(playerSelection,computerSelection){
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerResult++;
            return('You win! ' + playerSelection + ' beats ' + computerSelection)
    }
    else if (playerSelection == computerSelection) {
        return('It\'s a tie. You both chose ' + playerSelection)
    }
    else {
        computerResult++;
        return('You lose! ' + computerSelection + ' beats ' + playerSelection)
        }
     }

function game(){
    let rounds = 0;
    while(rounds<5){
        const playerSelection = prompt('choose "rock", "paper", "scissors"').toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("player:" + playerResult + "computer:" + computerResult);
        rounds++;
    }
    if (playerResult > computerResult) {
        console.log("Win");
    } else {
        console.log("Lose");
    }
}

game();
