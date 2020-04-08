var player1 = document.querySelector('#playerOne');
var player2 = document.querySelector('#playerTwo');

var resetButton = document.querySelector('#reset');

var input = document.querySelector('input');

var player1_scoreSpan = document.querySelector('#player1_score');
var player2_scoreSpan = document.querySelector('#player2_score');

var maxScoreSpan = document.querySelector('#maxScoreSpan');

var player1_score = 0;
var player2_score = 0;

var maxScore = 5;
var gameOver = false;

player1.addEventListener('click', function () {
    if (gameOver === false) {
        player1_score++;
        console.log(player1_score);

        player1_scoreSpan.textContent = player1_score;

        if (player1_score === maxScore) {
            gameOver = true;

            // player1_scoreSpan.style.color = 'green';
            player1_scoreSpan.classList.add('winnerScore');
        }
    }
});

player2.addEventListener('click', function () {
    if (gameOver === false) {
        player2_score++;
        console.log(player2_score);

        player2_scoreSpan.textContent = player2_score;

        if (player2_score === maxScore) {
            gameOver = true;

            // player2_scoreSpan.style.color = 'green';
            player2_scoreSpan.classList.add('winnerScore');
        }
    }
});

resetButton.addEventListener('click', function () {
    reset();
});

// The event occurs EVERYTIME something about it (the value) changes
input.addEventListener('change', function () {
    maxScoreSpan.textContent = this.value;

    maxScore = Number(this.value);                     // É necessário converter para um número, pois o valor vem como string

    reset();
});

function reset () {
    player1_score = 0;
    player2_score = 0;

    player1_scoreSpan.textContent = 0;
    player2_scoreSpan.textContent = 0;

    // player1_scoreSpan.style.color = 'black';
    // player2_scoreSpan.style.color = 'black';
    player1_scoreSpan.classList.remove('winnerScore');
    player2_scoreSpan.classList.remove('winnerScore');

    gameOver = false;
}