// Secret number
var secretNumber = 4;

// User's number - Converte para "int"
var guessNumber = Number(prompt('What\'s the secret number?'));
/* Outra forma de converter
var guessString = prompt('What\'s the secret number?');
var guessNumber = Number(guessString);
*/

alert('You said: ' + guessNumber);

if (guessNumber === secretNumber) {
    alert('Omg! You did it!');
} if (guessNumber > secretNumber) {
    alert('Too high!');
} if (guessNumber < secretNumber) {
    alert('Too low!')
}