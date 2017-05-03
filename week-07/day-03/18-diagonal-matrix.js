'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var sizeOfMatrix = 5;
var matrix = [];

for (var x = 0; x < sizeOfMatrix; x++) {
    for (var y = 0; y < sizeOfMatrix; y++) {
        if (x === y) {
            matrix[x,y] = 1;
        } else {
            matrix[x,y] = 0;
        }
    }
    console.log(matrix.join(' '));
}



















// size = 5
// matrix = []


// for y in range(0,size):
//     col = []
//     for x in range(0,size):
//         col.append(0)
//     col[y] = 1

//     matrix.append(col)
// print(matrix)