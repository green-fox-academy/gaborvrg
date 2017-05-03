'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

// result = 1
//     for x in range(1,fac):
//         result *= x
//     print(result)


function factorio(number) {
    var fact_num = (number-number+1);
    for (var i = (number-number+1); i <= number; i++) {
        fact_num *= i;
    }
    return fact_num;
}

console.log(factorio(5));