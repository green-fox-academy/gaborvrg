'use strict';

var lineCount = 8;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var space = ' ';

for (var i = 1; i < lineCount + 1 ; i++) {
    if (i <= lineCount / 2) {
        console.log(space.repeat(lineCount - (i) ) + '*'.repeat( i + i - 1 ));
    } else {
        console.log(space.repeat(i - 1) + '*'.repeat((lineCount - i) * 2 + 1));
    }
}