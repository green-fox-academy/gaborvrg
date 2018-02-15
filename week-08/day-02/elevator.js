'use strict';

class ElevatorModel {
  constructor(maxfloor, maxpeople) {
    this.eView = new ElevatorView();
    this.maxFloor = maxfloor;
    this.maxPeople = maxpeople;
    this.peopleInElevator = 0;
    this.elevatorPosition = 0;
    this.elevatorDirection = '';
  }

  addPeople() {
    this.peopleInElevator += 1;
    this.checkPeopleAndFloorLimit();
    this.eView.drawElevator(this.maxFloor, this.elevatorPosition, this.peopleInElevator);
    return this.peopleInElevator;
  }

  removePeople() {
    this.peopleInElevator -= 1;
    this.checkPeopleAndFloorLimit();
    this.eView.drawElevator(this.maxFloor, this.elevatorPosition, this.peopleInElevator);
    return this.peopleInElevator;
  }

  movingUp() {
    this.elevatorDirection = 'up';
    this.elevatorPosition += 1;
    this.checkPeopleAndFloorLimit();
    this.eView.drawElevator(this.maxFloor, this.elevatorPosition, this.peopleInElevator);
    return this.elevatorPosition;
  }

  movingDown() {
    this.elevatorDirection = 'down';
    this.elevatorPosition -= 1;
    this.checkPeopleAndFloorLimit();
    this.eView.drawElevator(this.maxFloor, this.elevatorPosition, this.peopleInElevator);
    return this.elevatorPosition;
  }

  checkPeopleAndFloorLimit() {
    if (this.elevatorPosition >= this.maxFloor) {
      this.elevatorPosition = this.maxFloor;
      this.elevatorDirection = 'ceil';
    } else if (this.elevatorPosition <= 0) {
      this.elevatorDirection = 'floor';
      this.elevatorPosition = 0;
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
    });

    this.buttonDown.addEventListener('click', () => {
      this.movingDown();
    });

    this.buttonAdd.addEventListener('click', () => {
      this.addPeople();
    });

    this.buttonRemove.addEventListener('click', () => {
      this.removePeople();
    });
    this.eView.drawElevator(this.maxFloor);
  }
}

class ElevatorView {
  drawElevator(maxfloor, elevatorPosition = 0, peopleInElevator = 0) {
    const elevator = document.querySelector('.panel_right');
    elevator.innerHTML = '';
    for (let index = maxfloor; index >= 0; index--) {
      const div = document.createElement('div');
      div.className = `floor floor${index}`;
      elevator.appendChild(div);
    }
    document.querySelector('.floor' + elevatorPosition).textContent = peopleInElevator;
    document.querySelector('.floor' + elevatorPosition).style.backgroundColor = 'green';

  }
}

class ElevatorController {
  handler(maxfloor, maxpeople) {
    this.eModel = new ElevatorModel(maxfloor, maxpeople);
    this.eModel.main();
  }
}

const building = new ElevatorController();
building.handler(20, 10);
