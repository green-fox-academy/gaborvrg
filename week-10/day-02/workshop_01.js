'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says


function Animals(sound){
    this.sound = sound;
    this.say = function(){
        console.log(this.sound);
    };
}

var cow = new Animals('muuu');
cow.say();

var dog = new Animals('wuff');
dog.say();