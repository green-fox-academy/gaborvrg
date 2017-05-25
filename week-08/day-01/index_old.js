var test = require('tape');
 
    // length should be 10!
    // [0,0,0,4,5,6,7,8,9] => ok
    // [9,0,0,4,5,6,7,8,9] => Should fail
    // [1,2,3,4,5,6,7,8,9] => ok
    // [2,1,3,4,5,6,7,8,9] => ok
    // [9,8,7,6,5,1,2,4,9] => Should fail
    // [9,8,7,6,5,1,2,4,'u'] => Shold fail (non integer)

var checkLength = [1,2,3,4,5,6,7,8];
var invalid = ['1',2,3,4,5,6,7,8,9];

test('Proper length test', function (t) {
    t.equals(checkLength.length, 9);
    t.end();
});










    // // t.plan(x) megmondani elore hany tesz lesz
    // t.equal(1, 1);
    // t.equal(2, 2);
    // t.deepEqual([1,2,3], [1,2,3])
    // t.end(); // ha nincs elore megmondva hany teszt lesz,le kell zarni a tesztet
