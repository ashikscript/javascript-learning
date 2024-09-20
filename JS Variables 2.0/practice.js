const birthDate = '17th May';
const birthYear = 2000;
const birthDay = birthDate + birthYear;

console.log(birthDay);

const memoryDate = '19th April 2018';

console.log(memoryDate);

var birthYearDate = 1984;
var futureYear = 2012;
var age = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

//

var currentAge = 24;
var maximumAge = 60;
const amountForFoodPerDay = '500Taka';

console.log(currentAge - maximumAge);

var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = numPerDay * 365 * (maxAge - age);
var message =
  'You will need ' +
  totalNeeded +
  ' cups of tea to last you until the ripe old age of ' +
  maxAge;
console.log(message);

//

// Using let to declare a variable
let myName = 'John';
console.log(myName); // Output: John

// Reassigning the variable
myName = 'Alice';
console.log(myName); // Output: Alice

// Using const to declare a constant variable
const age = 25;
console.log(age); // Output: 25

// Trying to reassign a const variable will cause an error
// age = 30; // This will give an error

// Using var (old way, not recommended)
var city = 'New York';
console.log(city); // Output: New York
