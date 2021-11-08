let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const btn = document.querySelector('#btn');

const playerScoreP = document.querySelector('#playerScore');
const computerScoreP = document.querySelector('#computerScore');

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

let result = "";

function playRound(playerSelection) {

    const computerSelection = computerPlay();
    showChoice(playerSelection, computerSelection);
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore++;
        playerScoreP.textContent = `Player: ${playerScore}`;
        result = 'You win! ';

    } else if (playerSelection == computerSelection) {
        result = 'It\'s a tie. You both chose ';

    } else {
        computerScore++;
        computerScoreP.textContent = `Computer: ${computerScore}`;
        result = 'You lose! ';
    }
    document.getElementById('result').textContent = result;
    gameOver(playerScore, computerScore);


}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    });
});

const $playerSelection = document.querySelector('#playerSign');
const $computerSelection = document.querySelector('#computerSign')

function showChoice(playerSelection, computerSelection) {
    $playerSelection.className = '';
    $computerSelection.className = '';

    const playerSignClassName = `fa-hand-${playerSelection.toLowerCase()}`
    const computerSignClassName = `fa-hand-${computerSelection.toLowerCase()}`
    playerSign.classList = `fas ${playerSignClassName} active`
    computerSign.classList = `fas ${computerSignClassName} active`
}

const modal = document.querySelector('modal');
const endgameModal = document.querySelector('#endgameModal');

function reloadPage() {
    window.location.reload()
}

function gameOver(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        disableButtons();
       
        const restartBtn = document.querySelector('#restartBtn');
        restartBtn.disabled = false;
        /* modal.classList.toggle('hidden'); */
        endgameModal.classList.toggle('hidden');
        if (playerScore == 5) {
            result = '<br>You won the game!';
        } else {
            result = '<br>I won the game!';
        }
    }
    document.getElementById('endgameMsg').innerHTML = result;

}