console.log('Print all numbers between -10 and 19')

for (var i = -10; i <= 19; i++) {
    console.log(i);
}

console.log('Print all even numbers between 10 and 40')

for (var i2 = 10; i2 <= 40; i2++) {
    if (i2 % 2 === 0) {
        console.log(i2);
    }
}

console.log('Print all odd numbers 300 and 333')

for (i3 = 300; i3 <= 333; i3++) {
    if (i3 % 2 !== 0) {
        console.log(i3);
    }
}

console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');

for (i4 = 5; i4 <= 50; i4++) {
    if (i4 % 5 === 0 && i4 % 3 === 0) {
        console.log(i4);
    }
}