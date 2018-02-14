'use strict';

class ElevatorModel {
  constructor() {
    this.maxFloor = 10;
    this.maxPeople = 20;
    this.peopleInElevator = 0;
    this.elevatorPosition = 0;
    this.elevatorDirection = '';
  }

  addPeople() {
    this.peopleInElevator += 1;
    this.checkPeopleAndFloorLimit();
    return this.peopleInElevator;
  }

  removePeople() {
    this.peopleInElevator -= 1;
    this.checkPeopleAndFloorLimit();
    return this.peopleInElevator;
  }

  movingUp() {
    this.elevatorDirection = 'up';
    this.elevatorPosition += 1;
    this.checkPeopleAndFloorLimit();
    return this.elevatorPosition;
  }

  movingDown() {
    this.elevatorDirection = 'down';
    this.elevatorPosition -= 1;
    this.checkPeopleAndFloorLimit();
    return this.elevatorPosition;
  }

  checkPeopleAndFloorLimit() {
    if (this.elevatorPosition > this.maxFloor) {
      this.elevatorPosition = this.maxFloor;
      this.elevatorDirection = 'ceil';
    } else if (this.elevatorPosition < 0) {
      this.elevatorPosition = 0;
      this.elevatorDirection = 'floor';
    }

    if (this.peopleInElevator > this.maxPeople) {
      this.peopleInElevator = this.maxPeople;
    } else if (this.peopleInElevator < 0) {
      this.peopleInElevator = 0;
    }
  }

  main() {
    this.buttonUp = document.querySelector('.up');
    this.buttonDown = document.querySelector('.down');
    this.buttonAdd = document.querySelector('.add');
    this.buttonRemove = document.querySelector('.remove');

    this.buttonUp.addEventListener('click', () => {
      this.movingUp();
      console.log(this.elevatorPosition, this.elevatorDirection);
    });

    this.buttonDown.addEventListener('click', () => {
      this.movingDown();
      console.log(this.elevatorPosition, this.elevatorDirection);
    });

    this.buttonAdd.addEventListener('click', () => {
      this.addPeople();
      console.log(this.peopleInElevator);
    });

    this.buttonRemove.addEventListener('click', () => {
      this.removePeople();
      console.log(this.peopleInElevator);
    });
  }
}

class ElevatorView {
}

class ElevatorController {
  handler() {
    this.eModel = new ElevatorModel();
    this.eView = new ElevatorView();
    this.eModel.main();
  }
}

const buidling = new ElevatorController();
buidling.handler();
