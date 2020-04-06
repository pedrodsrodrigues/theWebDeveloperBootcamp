var array = ['Primeiro valor', 'Segundo valor', 'Terceiro valor', 'Quarto valor', 'Quinto valor']

// Pelo que percebi, forEach em Javascript funciona da seguinte forma:
// 1. Dás uma lista/array
// 2. Dás uma função
// O valor que essa função recebe quando é chamada, vai conter o valor do index que está atualmente a ser iterado
// Ex.:
// 1º loop -> function('Primeiro valor')
// 2º loop -> function('Segundo valor')
// 3º loop -> function('Terceiro valor')

// A função pode ser ou criada nesse mesmo momento/forEach, como mostrado abaixo:

array.forEach(function(value){                      // Não se dá nome à função
    console.log('Valor: ' + value);
});

// Ou pode ser criada anteriormente e simplesmente chamada no forEach, como mostrado abaixo:
function nomeFuncao(value) {
    console.log('Valor: ' + value);
}

array.forEach(nomeFuncao);
