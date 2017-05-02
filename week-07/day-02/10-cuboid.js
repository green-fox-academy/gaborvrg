'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000


var allSideLength = 10;

var quboidSurfaceArea = 6 * Math.pow(allSideLength,2)
var qubiodVolume = Math.pow(allSideLength,3)

console.log('A quboid surface with ' + allSideLength + ' side length is ' + quboidSurfaceArea);
console.log('A quboid volume with ' + allSideLength + ' side length is ' + qubiodVolume );