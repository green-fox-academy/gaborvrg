'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

var newArray = fruits.map(function(x) {
    return x.split("e").length - 1;
});

console.log(newArray);










// var newArray2 = fruits.filter("e"){

// }

