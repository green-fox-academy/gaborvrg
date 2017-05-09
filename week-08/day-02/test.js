function Aircraft(type){
  this.type = type;
  this.ammo = 0;
  this.maxAmmo = 8;
  this.baseDamage = 30;
  this.printMaxAmmo = function() {
    console.log(this.maxAmmo);
  };
}

var plane = new Aircraft('F16');
console.log(plane.type); // prints 'F16'
plane.printMaxAmmo(); // prints 8