// **Introduction to Javascript**
console.log(5);//returns 5 in the console

// Comments
// single line comment
/*This is for a multiple line comment*/
console.log(/*ignored*/5); // This still prints 5

// Data types
// Number
console.log(5);
// String
console.log('Javascript');
console.log("Javascript");
// Boolean
// Null
// Undefined
// Symbol
// Object

// Arithmetic Operators
// Add +
console.log(3 + 4);
// Subtract -
console.log(4 - 1);
// Multiply *
console.log(3 * 7);
// Divide /
console.log(8 / 2);
// Remainder %
console.log(6 % 4);

// String Concatenation
console.log('hi' + 'ya'); //prints 'hiya'

// Properties
console.log('Hello'.length); //prints 5

// Methods
console.log('hello'.toUpperCase()); //prints 'HELLO'
console.log('Hey'.startsWith()); //prints true

// Built-in Objects
console.log(Math.random()); // prints a random number between 0 and 1
Math.floor(Math.random() * 50); // A random number between 0 and 1 is generated, multiplied by 50, and rounded down to the nearest whole number

// #########################################################################

// **Variables**
// can be declared with 'let', 'const', or 'var'
//      'let' variable can reassigned a different value
//      'const' variable cannot be reassigned. Must be assigned a value when declared.

var myName = 'Arya';
console.log(myName); // Output: Arya

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output 350

const myName = 'Jonathan';
console.log(myName); // Output: Jonathan

// rules
// Variable names cannot start with numbers
// Variable names are case sensitive
// Variable names cannot be the same as keywords

// Mathematical Assignment Operators
let w = 4;
w = w + 1;
console.log(w); // Output: 5

let x = 20;
x -= 5; // x = x - 5
console.log(x); // Output: 15
// +=, *=, and /= are similar

// Increment and Decrement Operator
let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

// String Concatenation with Variables
let myPet = 'armadillo';
console.log('I own a pet' + myPet + '.'); // Output: 'I own a pet armadillo'

// String Interpolation
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);

// typeof operator
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

// *Project* Kelvin Weather
// declare Kelvin
const kelvin = 0;

// convert Kelvin to Celsius
let celsius = kelvin - 273;

// convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Fahrenheit round down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} in degrees Fahrenheit`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} in degrees Newton`);

// *Project* Dog Years
let myAge = 27; // my current age
let earlyYears = 2; // dog to human age differs the first two years
earlyYears *= 10.5;
let laterYears = myAge - 2; // for calculating the remaining years
laterYears *= 4; // calculating the remaining years

// console.log(`earlyYears:${earlyYears}`);
// console.log(`laterYears:${laterYears}`);
let myAgeInDogYears = earlyYears + laterYears; // full age in dog years

let myName = 'Jonathan Grazer'.toLowerCase(); // lowercase version of my name

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`); // Outputting info in a sentence

// **Conditional Statements**
// if statement
if (true){
  console.log('This message will print!');
}
// Prints "This message will print!"

if (false){
  console.log('The code in this block will not run.');
}else{
  console.log('But the code in this block will!');
}
// Prints "But the code in this block will!"

let sale = true;
sale = false;
if (sale){
console.log('Time to buy!');
}else{
  console.log('Time to wait for a sale.');
}
// Prints "Time to wait for a sale."

/* Comparison Operators
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is NOT equal to: !==*/

let hungerLevel = 7;
if (hungerLevel > 7){
console.log('Time to eat!');
}else{
console.log('We can eat later!');
}

// Logical Operators
// 1. and (&&)
if (stoplight === 'green' && pedestrians === 0){
  console.log('Go!');
}else{
  console.log('Stop');
}

// 2. or (||)
if (day === 'Saturday' || day === 'Sunday'){
  console.log('Enjoy the weekend!');
}else{
  console.log('Do some work.');
}

// 3. not/bang (!)
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

// Example:
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8){
console.log('time to sleep');
} else{
console.log('not bed time yet');
}
// Prints "not bed time yet"

// Truthy and Falsy
// Truthy: evaluates to 'true when used in a boolean or conditional context
let myVariable = 'I Exist!';
if (myVariable){
  console.log(myVariable);
}else{
  console.log('The varaible does not exist.');
}

// Falsy: evaluates to false
/* 1. 0
2. Empty strings like "" or ''
3. null
4. undefined
5. NaN*/

let numberOfApples = 0;

if (numberOfApples){
  console.log('Let us eat apples!');
}else{
  console.log('No apples left!');
}
// Prints 'No apples left!

// Example
let wordCount = 1;

if (wordCount) {
console.log("Great! You've started your work!");
} else {
console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
console.log("This string doesn't seem to be empty.");
} else {
console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment
let defaultName;
if (username) {
defaultName = username;
} else {
defaultName = 'Stranger';
}

let defaultName = username || 'Stranger'; // truthy --> username. falsy --> 'Stranger'

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator
// This statement:
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// Is the same as this statement
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// Another example
let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Else If Statements
let season = 'summer';

if (season === 'spring') {
console.log('It\'s spring! The trees are budding!');
}else if (season === 'winter'){
console.log('It\'s winter! Everything is covered in snow.');
}else if (season === 'fall'){
console.log('It\'s fall! Leaves are falling!');
}else if (season === 'summer'){
console.log('It\'s sunny and warm because it\'s summer!');
} else {
console.log('Invalid season.');
}
// The switch keyword
let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// Same as
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// 'You get the golf medal!'

// ** Functions
//  A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
// A function declaration consists of:
//   The function keyword.
//    The name of the function, or its identifier, followed by parentheses.
//    A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
function getReminder(){
    console.log('Water the plants.');
  }
  
  function greetInSpanish(){
    console.log('Buenas Tardes.')
  }

  // Function parameters and Arguments
  function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');

  // Default prarameters
  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  // Block and Scope
const city = 'New York City';

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());

// Gobal Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());

// Testing Git upload