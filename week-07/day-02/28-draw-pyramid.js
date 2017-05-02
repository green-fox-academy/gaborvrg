'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
// console.log('*'.repeat(i));

var space = ' ';

for (var i = 1; i < lineCount + 1 ; i++) {
    console.log(space.repeat( lineCount - i ) + '*'.repeat( i + i - 1 ));
}