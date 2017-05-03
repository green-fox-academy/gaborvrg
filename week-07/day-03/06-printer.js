'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer() {

    for (var key in arguments) {
        console.log(arguments[key]);
    }
}
printer(5,6,7,8,true,'string')