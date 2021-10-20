let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const btn = document.querySelector('#btn');
const input = document.querySelector('input');

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
    showChoice(playerSelection, computerSelection);
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection + "<br>Player score: " + playerScore + '<br>Computer score: ' + computerScore);

    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection + "<br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

    }
    else {
        computerScore++;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection + '<br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore);
    }
    gameOver(playerScore, computerScore);
    document.getElementById('result').innerHTML = result

}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value);
    });
});

const $playerSelection = document.querySelector('#human-selection');
const $computerSelection = document.querySelector('#computer-selection')

function showChoice(playerSelection, computerSelection) {
    $playerSelection.className = '';
    $computerSelection.className = '';
    $playerSelection.classList.add(playerSelection);
    $computerSelection.classList.add(computerSelection);
}

function reloadPage() {
    window.location.reload()
}

function gameOver(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        disableButtons()
        btn.classList.toggle('btn');
        input.classList.toggle('hidden');
        if (playerScore == 5) {
            result += '<br>You won the game! Reload the page to play again';
        }
        else {
            result += '<br>I won the game! Reload the page to play again';
        }
    }
}



