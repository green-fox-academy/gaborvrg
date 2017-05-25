'use strict';
var test = require('tape');

// [2,1,3,4,5,6,7,8,9] => ok
// [9,8,7,6,5,1,2,4,9] => Should fail

var okTest = [1,2,3,4,5,6,7,8,9];
var intWrong = [9,8,7,6,5,1,2,4,'u']; // => Should fail (non integer)
var lengthShort = [1,2,3];
var moreNum = [9,0,0,6,5,4,7,8,9];

function Validator (input) {
    if (input.length === 9){
      for (var i = 0; i < input.length; i++) {
          if (typeof input[i] !== "number") {
              return false;
          }
      }
      input.sort();
      for (var j = 0; j < input.length - 1; j++) {
        if (input[j] > 0) {
          if (input[j] === input[j+1]) {
            return false;
          }
        }
      }
      return true;
    } else {
        return false;
    }
}


test ('\nCheck proper length of the list: ', function (t) {
   t.equal(Validator(lengthShort), false);
   t.equal(Validator(okTest), true);
   t.end();
});
test ('\nCheck if every items are number: ', function (t){
    t.equal(Validator(intWrong), false);
    t.equal(Validator(okTest), true);
   t.end();
});
test ('\nCheck if there are same numbers in the list: ', function (t){
    t.equal(Validator(moreNum), false);
    t.equal(Validator(okTest), true);
    t.end();
});