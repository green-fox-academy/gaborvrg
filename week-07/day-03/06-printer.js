'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer() {
    var str = '';
    for (var key in arguments) {
        str += arguments[key] + ',';
    }
    return str
}
console.log(printer(5,6,7,8,true,'string'));