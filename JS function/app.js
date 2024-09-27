// Javascript function

function myFunction() {
  console.log('Hello Functions');
}

myFunction();
myFunction();

// Code-Drive Invocation functions
function myFirstFunction(fullName, age, dateOfBirth = 1991) {
  console.log(
    ' Hello ' + fullName + ' I am ' + age + ' My Date of birth ' + dateOfBirth
  );
}

myFirstFunction('Ashik', 25);
myFirstFunction('Rohan', 15);

//

//event drive inovaction functions
function textMe() {
  console.log('I send You message');
}

document.getElementById('fast_button').addEventListener('click', textMe);

//

(function (message) {
  console.log('I am self Invoking Function', message);
})('Hey!!!');

//

// Function Expression
let maths = function (x, y) {
  return x * y;
};

console.log(maths(3, 4));
console.log(maths(400, 71));

//

function newFunc() {
  let firstName = 'Ashik';
  console.log(firstName);
}

newFunc();

function newFuncs() {
  let firstName = 'Rahman';
  console.log(firstName);
}

newFuncs();

//

let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(sqNumbers);

//

//Short Function
let add = function (x, y) {
  return x + y;
};
console.log(add(5, 17));

//

//Nested function
function greet(firstName) {
  function sayHello() {
    alert('Hello ' + firstName);
  }
  return sayHello();
}
greet('Ashik');
