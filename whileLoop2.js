console.log('Print all numbers between -10 and 19')

count = -10;

while (count <= 19) {
    console.log(count);
    count++;
}

console.log('Print all even numbers between 10 and 40')

count2 = 10;

while (count2 <= 40) {
    if (count2 % 2 === 0) {
        console.log(count2);
    }
    count2++;
}

console.log('Print all odd numbers 300 and 333')

count3 = 300;

while (count3 <= 333) {
    if (count3 % 2 !== 0) {
        console.log(count3);
    }
    count3++;
}

console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');

count4 = 5;

while (count4 <= 50) {
    if (count4 % 5 === 0 && count4 % 3 === 0) {
        console.log(count4);
    }
    count4++;
}