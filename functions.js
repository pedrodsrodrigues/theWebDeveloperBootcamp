// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Outra forma:
function isEven(number) {
    return number % 2 === 0;                        // Retorna TRUE caso o que está a seguir de "return" for verdade. Caso contrário, retorna FALSE
}

isEven(5);

function factorial(number) {
    var result = 1;                                 // Começa a 1, pois é um valor que não vai alterar a multiplicação

    if (number > 0) {
        for (var i = 1; i <= number; i++) {
            result *= i;
        }
    }
    // O que está abaixo não é necessário porque "result" já fica a 1 de origem
    // else if (number === 0) {
    //     return 1;
    // }

    return result;
}

factorial(5);

// function kebabToSnake(string) {
//     var newString = string.replace("-", "_");

//     return newString;
// }

// Outra forma, com uma expressão regular:
function kebabToSnake(string) {
    var newString = string.replace(/-/g, "_");

    return newString;
}

kebabToSnake("Hello-world");