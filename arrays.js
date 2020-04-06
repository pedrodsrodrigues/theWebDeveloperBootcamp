var array = [];

var firstAnswer = prompt('What do you want to do?');

// firstAnswer = firstAnswer.charAt(0).toUpperCase();

while (firstAnswer !== 'Quit') {
    console.log('Resposta do user: ' + firstAnswer);

    if (firstAnswer === 'New' || firstAnswer === 'List') {
        if (firstAnswer === 'New') {
            var secondAnswer = prompt('What value do you want to give to it?');

            array.push(secondAnswer);
        } else if (firstAnswer === 'List') {
            alert(array);
        }

        var firstAnswer = prompt('What do you want to do?');
    }
    else {
        var firstAnswer = prompt('The value you inserted is not valid. What do you want to do?');
    }
}
