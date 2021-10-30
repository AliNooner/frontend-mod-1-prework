// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  // define the greeting variable which will return "Hey partner! My name is (name varilable) - will you be my friend?"
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //define the demographics variable that will include the name and age
  var demographics = [name, age];
  // define the powerSaying variable that will concatenate with specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // definte the builtBear Object
  var builtBear = {
  // defines key:pair basic information as demographics
    basicInfo: demographics,
  // defines key:pair clthes as clothes
    clothes: clothes,
  // defines key:pair exterior as fur
    exterior: fur,
  // defines key:pair cost as 49.99
    cost: 49.99,
  // defines key:pair sayings as greeting, powerSaying and "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
  // defines key:pair as true
    isCuddly: true,
  };
 // will return the information stored in the builtBear object
  return builtBear
}
 // this will build a bear named Fluffy who is 4 years old with brown fur. They will be wearing pants, jorts and a tanktop
 // their special power will be to give you nightmares
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// this will build a bear named Sleepy who is 2 years old with purple fur. They will be wearing pajamas and a sleeping caption
// their special power will be sleeping in
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
function fizzBuzz(num1, num2, range) {
// each item stored in fizz buzz will be returned, starting at index 0, moving on to index 1
// this process will repeat with each item until it reaches range and fizz buzz will stop
  for (var i = 0; i <= range; i++) {
// if num1 and num2 are not even it will log "fizz buzz"
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// will return "fizz" if the above argument is true, if not it will continue running the code
    } else if (i % num1 === 0) {
      console.log('fizz');
// will return "buzz" if the above argument is true, if not it will continue running the code
    } else if (i % num2 === 0) {
      console.log('buzz');
// if all three above are false, it will return the value of i
    } else {
      console.log(i);
    }
  }
}

// this will return "fizz"
fizzBuzz(3, 5, 100);
// this will return "buzz"
fizzbuzz(5, 8, 400);
