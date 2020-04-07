var array = [];

var firstAnswer = prompt('What do you want to do?');

// firstAnswer = firstAnswer.charAt(0).toUpperCase();

while (firstAnswer !== 'Quit') {
    console.log('Resposta do user: ' + firstAnswer);

    if (firstAnswer === 'New' || firstAnswer === 'Delete' || firstAnswer === 'List') {
        if (firstAnswer === 'New') {
            newValue();
        } else if (firstAnswer === 'Delete') {
            deleteValue();
        } else if (firstAnswer === 'List') {
            listValues();
        }

        var firstAnswer = prompt('What do you want to do?');
    }
    else {
        var firstAnswer = prompt('The value you inserted is not valid. What do you want to do?');
    }
}

function listValues() {
    alert(array);                                           // Show all the values in an alert

    array.forEach(function (value, index) {                 // "index" is the index of each value
        console.log(index + ": " + value);                  // Show all the values, together with their indexes, in the console
    });
}

function newValue() {
    var secondAnswer = prompt('What value do you want to give to it?');

    array.push(secondAnswer);

    alert(secondAnswer + ' was added!');
}

function deleteValue() {
    var secondAnswer = prompt('What value do you want to remove from it?');

    var removeIndex = array.indexOf(secondAnswer);          // See what's the index of that value

    if (removeIndex === -1) {
        alert('That value does not exist!');
    } else {
        array.splice(removeIndex, 1);                       // Remove the value, using the index that was verified previously

        alert(secondAnswer + ' was deleted!');
    }
}