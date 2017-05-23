'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says


// function Animals(sound){
//     this.sound = sound;
//     this.say = function(){
//         console.log(this.sound);
//     };
// }

// var cow = new Animals('muuu');
// cow.say();

// var dog = new Animals('wuff');
// dog.say();

// ****************************
// with prototype

function Animals(sound) {
    this.sound = sound;
}

Animals.prototype.print = function () {
    console.log(this.sound);
};

var cow = new Animals("muuua");
cow.print();

var dog = new Animals('wuff');
dog.print();


// function Car(km) {
//  this.km = km;
// }

// Car.prototype.ride = function(km) {
//  this.km += km;
// }

// var volvo = new Car(80000);
// volvo.ride(120);
// console.log(volvo.km); // 80120







