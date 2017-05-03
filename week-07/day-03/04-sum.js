'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(numbers) {
    var summa = 0;
    for (var i = 0; i <= numbers ; i++) {
        summa += i;
    }
    return summa
}

console.log(sum(5));