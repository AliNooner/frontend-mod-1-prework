// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Cal the Calmer"
var specialAbility = "Chi Manipulation"
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "I am" + heroName + "and I'm here to bring you down a notch!";
var catchphrase = "$(specialAbility) for any situation!";
// Declare two variables - power AND energy - set to integers
var power = 1000;
var energy = 10;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (power * 500);
var energy = (energy + 150);
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Karen the Complicator", "Undies in a Bundle", "Steve the Stressman"];
var sidekicks = ["Chilled out Charlie", "Relaxing Rex", "Slow Down Sally"];
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemy[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Tense Travis");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var dangerLevel = 20;
var saveTheDay = "I am here to save the day!";
var badExcuse = "I just remembered I have cookies in the oven..."

function assessSituation (dangerLevel, saveTheDay, badExcuse){
  if (dangerLevel > 50){
    console.log(badExcuse);
  } else if (dangerLevel >=10 && dangerLevel <=50);
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.");
  }
]
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

assessSituation(99, announcement, excuse);
assessSituation(21, announcement, excuse);
assessSituation(3, announcement, excuse);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Claws McGraws",
  smell: "Old cheese",
  weight: 375,
  citiesDestroyed: ["Tuscon", "Madison", "Las Vegas", "Reno"],
  luckyNumbers: [13, 9, 6],
  address: {
    number: 1396,
    street: "Scary Street",
    state: "Reno",
    zip: 89433;
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
var SuperHero {
  constructor(name, superPower, age) {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemesis = "Tacky Thomas";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
}
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

sayName() {
  console.log(this.name);
}

maximizeEnergy() {
  this.energyLevel = 1000;
}

gainPower(number) {
  this.powerLevel = this.powerLevel + number;
}
// - Create 2 instances of your SuperHero class

var heroOne = new SuperHero ("Nicole", "Telekenesis"; 29);
var heroTwo = new SuperHero ("Lauren", "Teleporation"; 30);

// Reflection
// What parts were most difficult about this exerise?
This exercise was great because it included all, if not most, of what we've covered in our prework.
The most difficult part was just remembering everything and how each piece fits in and making sure
all of the syntax was being used correctly.
// What parts felt most comfortable to you?
I felt comfortable in that I really feel like I understsand these concepts. When I couldn't exactly
remember something off the top of my head, I knew where to look back in my prework exercises for help.
// What skills do you need to continue to practice before starting Mod 1?
I am going to go over EVERYTHING until Mod 1 starts; my notes from class, from our homeworks and from the prework.
I am going to re-do everything from scratch and make sure I have these concepts locked down before 11/29.
I could not be more excited to continue to feel more comfortable with everything I've learned and to continue
building on this knowledge.
