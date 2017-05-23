'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangles(aSide, bSide) {
    this.getArea = function () {
        console.log(aSide * bSide);     
    };
    this.getCircumference = function () {
        console.log(2 * (aSide + bSide));
    };
}

var square = new Rectangles(5,5);
square.getArea();
square.getCircumference();

var smallrectangle = new Rectangles(10,20);

smallrectangle.getArea();
smallrectangle.getCircumference();

