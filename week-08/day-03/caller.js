'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

function selectLastEvenNumber(param, callback) {
    var lastEvenNumber = 0;
    param.forEach(function(elem) {
        if (elem % 2 === 0) {
            lastEvenNumber = elem;
        }
    });
    callback(lastEvenNumber);

}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8

