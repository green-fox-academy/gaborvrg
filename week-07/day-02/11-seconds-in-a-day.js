'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var secondsInADay = 86400;

var remainingSeconds = secondsInADay - ((currentHours * 3600) + (currentMinutes * 60) + currentSeconds);

console.log('Remaining seconds in this day: ' + remainingSeconds + ' sec');