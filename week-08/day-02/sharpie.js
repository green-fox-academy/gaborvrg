// Create a Sharpie constructor

// We should know about each sharpie their color (which should be a string),
//  width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects which decreases inkAmount by the width

function Sharpie(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100.0;
    this.use = function (amount) {
        return this.inkAmount - this.width;
    };
}


var yellowSharpie = new Sharpie('yellow', 5);
console.log(yellowSharpie.color);
console.log(yellowSharpie.width);
console.log(yellowSharpie.use());

var redSharpie = new Sharpie('red', 10);
console.log(redSharpie.color);
console.log(redSharpie.width);
console.log(redSharpie.use());
