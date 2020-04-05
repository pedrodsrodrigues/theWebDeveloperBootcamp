// var answer = prompt('Are we there yet?');

// // Se a resposta do utilizador contiver APENAS a palavra "yes" ou a palavra "yeah"
// while (answer !== 'yes' && answer !== 'yeah') {
//     var answer = prompt('Are we there yet?');
// }

// alert('We finally made it!');

var answer = prompt('Are we there yet?');

// Se a resposta do utilizador contiver a palavra "yes" ou a palavra "yeah"
while ((answer.indexOf('yes') === -1) && (answer.indexOf('yeah') === -1)) {
    var answer = prompt('Are we there yet?');
}

alert('We finally made it!');
