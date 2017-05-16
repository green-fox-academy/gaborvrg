'use strict';

var test = require('tape');
var getApple = require('./apples.js');

test('other args', function (t){
    var actual = getApple('melon');
    var expected = 'apple';
    t.equal(actual, expected);
    t.end();
});

test('add more args', function (t){
    var actual = getApple('coconut', 'blueberry');
    var expected = 'apple';
    t.equal(actual, expected);
    t.end();
});