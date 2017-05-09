'use strict';

var elevator = document.querySelector('.elevator');

for (var i = 0; i < 10; i++) {
    var newDIv = document.createElement('div');
    newDIv.className = 'level' + ' ' + 1;
    elevator.appendChild(newDIv);
}

console.log(elevator);