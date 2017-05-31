'use strict';
// The program should have three objects: elevatorController, elevatorModel and elevatorView.


let controlButtons = document.querySelectorAll('button');
console.log(controlButtons);

let elevatorController = {
  //  The object should have a method which handling the events. 
  //  It invokes the elevatorModel's correct method to moving the elevator, add or remove people.
  start: function () {
    controlButtons[0].addEventListener('click', function() {console.log(controlButtons[0].className);});
    controlButtons[1].addEventListener('click', function() {console.log(controlButtons[1].className);});
    controlButtons[2].addEventListener('click', function() {console.log(controlButtons[2].className);});
    controlButtons[3].addEventListener('click', function() {console.log(controlButtons[3].className);});
  }
};




let elevatorModel = {
  // the object takes two parameters, the maximum floor and the maximum people.

  // The object should track the following things:
  // - elevator position
  // - elevator direction
  // - people in the elevator
  // - add people
  // - remove people

  // It should have a method that check if the numbers of people or the floor are beyond the limits.
  // The object invokes the elevatorView.

};



let elevatorView = {
  //  The object draw the elevator's state to the browser.

};


elevatorController.start();



