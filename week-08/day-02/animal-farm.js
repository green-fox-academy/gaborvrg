// Animal Farm

// Create an Animal constructor
// Every animal has a hunger value, which is a number
// Every animal has a thirst value, which is a number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one
// Create a Farm constructor
// Every farm has list of Animals
// Every farm has slots which defines the number of free places for animal
// Every farm can breed() which creates a new animal if there's place for it
// Every farm can slaughter() which removes the least hungry animal

function Animal() {
    this.hunger = 50;
    this.thirst = 50;
    this.eat = function() {
        this.hunger -= 1; //ha ki akarnam konzolozni, akkor return-nel 
    };
    this.drink = function() {
        this.thirst -= 1;
    };
    this.play = function () {
        this.thirst -= 1;
        this.hunger -= 1; 
    };
}

function Farm(kind) {
    this.listOfAnimals = [];
    this.maxPlaces = 10;
    this.breed = function() {
        if (this.listOfAnimals.length < this.maxPlaces) {
            var newAnimal = new Animal();
            this.listOfAnimals.push(newAnimal);
        }
    };
    this.slaughter = function() {
        var minIdx = 0;
        var min = new Animal().hunger; // peldanyositva az Animal fugveny(contructor) es meghivva a hunger 
        this.listOfAnimals.forEach(function(elem,idx) {
            if (elem.hunger < min) {
                min = elem.hunger;
                minIdx = idx;
            }
        });
        this.listOfAnimals.splice(minIdx,1);
        console.log(this.listOfAnimals);
    };
}

var newFarm = new Farm();

newFarm.breed();
newFarm.breed();
newFarm.breed();


newFarm.listOfAnimals[1].eat();
newFarm.listOfAnimals[2].eat();
newFarm.listOfAnimals[1].eat();
newFarm.listOfAnimals[1].drink();

newFarm.slaughter();

// 