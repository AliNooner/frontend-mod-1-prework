/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog{

}
var husky = new Dog();
console.log(name);
var germanShepard = new Dog();
console.log(breed);

// Prompt 2: Snack
class Snack{

}
var candy = new Snack();
console.log(candy);
var chips = new Snack();
console.log(chips);

// Prompt 3: Shirt
class Shirt{

}

var shortSleeve = new Shirt();
console.log(shortSleeve);
var longSleeve = new Shirt();
console.log(longSleeve);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog {
  constructor() {
    this.age = 2;
    this.name = "Chippy";
    this.color = "brown";
  }
}

console.log(Dog);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.type = "chocolate";
    this.color = "brown";
    this.taste = "sweet";
  }
}

var candy = new Snack();
console.log(candy);
// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.type = "short sleeve";
    this.color = "red";
    this.material = "cotton";
  }
}

var shortSleeve = new Shirt();
console.log(shortSleeve);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
}

var chip = new Dog("Chippy", "chocolate lab", "brown");
console.log(chip);
// Prompt 2: Snack
class Snack {
  constructor(flavor, color, brand) {
    this.flavor = flavor;
    this.color = color;
    this.brand = brand;
  }
}

var reeses = new Snack("sweet", "brown", "hersheys");
console.log(reeses);
// Prompt 3: Shirt
class Shirt {
  constructor(size, color, material) {
    this.size = size;
    this.color = color;
    this.material = material;
  }
}

var jersey = new Shirt("medium", "blue", "cotton");
console.log(jersey);
