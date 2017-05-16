// Sum

// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you
// test your method with an empyt list
// with a list with one element in it
// with multiple elements in it
// with a null
// with a string
// Run them
// Fix your code if needed


'use strict';

var object = {
    sum: function (list) {
        let sum = 0;
        list.forEach(function (num) {
            if (typeof num === 'number'){
                sum += num;
            }
        });
        return sum;
    }
};

console.log(object.sum([9,8,7]));

module.exports = object.sum;