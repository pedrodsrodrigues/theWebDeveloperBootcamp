console.log('Print the values inserted, reversed');

// Sem necessitar de loops
// function printReverse (array) {
//     var reversedArray = array.reverse()

//     console.log(reversedArray);
// }

// Através de um loop
function printReverse(array) {
    var reversedArray = [];

    var arrayLength = array.length;

    for (var i = (arrayLength - 1); i >= 0; i--) {
        reversedArray.push(array[i])
    }
    console.log(reversedArray);
}

printReverse([1, 2, 3, 4, 5])

console.log('See if all numbers are equal');

function isUniform(array) {
    var firstValue = array[0];

    for (var i = 1; i < array.length; i++) {            // "i = 1" pois já se está a usar o index 0 (firstValue = array[0])
        if (firstValue !== array[i]) {
            return false;
        }
    }

    return true;
}

isUniform([1,1,1,1,1]);

console.log('Sum of the numbers');

function sumArray(array) {
    var sumArray = 0;

    array.forEach(function (value) {
        sumArray += value;
    });

    console.log(sumArray);
}

sumArray([1,2,3]);

console.log('Maximum number');

function max(array) {
    var maxNumber = 0;

    array.forEach(function (value) {
        if (maxNumber < value) {
            maxNumber = value;
        }
    });

    console.log(maxNumber);
}

max([1,4,2]);

