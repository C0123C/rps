let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection) {
    let result = "";
    const computerSelection = computerPlay();
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection + "<br>Player score: " + playerScore + '<br>Computer score: ' + computerScore);
        if (playerScore == 5) {
            result += '<br>You won the game! Reload the page to play again';
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection + "<br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

    }
    else {
        computerScore++;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection + '<br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore);
        if (computerScore == 5) {
            result += '<br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }
    document.getElementById('result').innerHTML = result

}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    });
});



