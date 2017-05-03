'use strict';
// - Create a variable named `nimals`
//   with the following content: `["kuty", "macs", "cic"]`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops


var nimals = ["kuty", "macs", "cic"];

var animals = nimals.map(function(elements){
    return elements + 'a'
})

console.log(animals);