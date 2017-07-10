// Create a function that reverses a string

'use strict';

let reversedString = '';

let reverseAString = function(str) {
  for (let i = str.length - 1; i>=0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

console.log(reverseAString('string for reverse'));