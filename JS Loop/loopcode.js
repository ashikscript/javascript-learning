// 1. User Authentication System (500 lines)

// Simulate a database using localStorage
const usersDB = JSON.parse(localStorage.getItem('usersDB')) || {};

// Register a new user
function registerUser(username, password) {
  if (usersDB[username]) {
    console.log('User already exists!');
    return false;
  }
  if (validatePassword(password)) {
    usersDB[username] = { password };
    localStorage.setItem('usersDB', JSON.stringify(usersDB));
    console.log('Registration successful!');
    return true;
  } else {
    console.log('Password is invalid!');
    return false;
  }
}

// Password validation (must be 8 characters with at least one number)
function validatePassword(password) {
  const passwordPattern = /^(?=.*\d).{8,}$/;
  return passwordPattern.test(password);
}

// User login
function loginUser(username, password) {
  if (!usersDB[username]) {
    console.log('User does not exist!');
    return false;
  }
  if (usersDB[username].password === password) {
    console.log('Login successful!');
    sessionStorage.setItem('currentUser', username);
    return true;
  } else {
    console.log('Incorrect password!');
    return false;
  }
}

// User logout
function logoutUser() {
  sessionStorage.removeItem('currentUser');
  console.log('Logged out successfully!');
}

// Check if user is logged in
function isLoggedIn() {
  return sessionStorage.getItem('currentUser') !== null;
}

// Change user password
function changePassword(username, oldPassword, newPassword) {
  if (loginUser(username, oldPassword)) {
    if (validatePassword(newPassword)) {
      usersDB[username].password = newPassword;
      localStorage.setItem('usersDB', JSON.stringify(usersDB));
      console.log('Password changed successfully!');
      return true;
    } else {
      console.log('New password is invalid!');
      return false;
    }
  } else {
    console.log('Old password is incorrect!');
    return false;
  }
}

// Delete user account
function deleteUser(username, password) {
  if (loginUser(username, password)) {
    delete usersDB[username];
    localStorage.setItem('usersDB', JSON.stringify(usersDB));
    sessionStorage.removeItem('currentUser');
    console.log('User deleted successfully!');
    return true;
  } else {
    console.log('Failed to delete user!');
    return false;
  }
}

// Example Usage
registerUser('john_doe', 'password123');
loginUser('john_doe', 'password123');
changePassword('john_doe', 'password123', 'newpassword456');
logoutUser();

//

// Global User Database & Task Storage
let usersDB = JSON.parse(localStorage.getItem('usersDB')) || {}; // User storage in localStorage
let currentUserTasks =
  JSON.parse(localStorage.getItem('currentUserTasks')) || {}; // Tasks storage

// ------------------ USER AUTHENTICATION SECTION ------------------

/**
 * Registers a new user.
 * @param {string} username
 * @param {string} password
 * @returns {boolean}
 */
function registerUser(username, password) {
  if (usersDB[username]) {
    alert('User already exists!');
    return false;
  }
  if (!validatePassword(password)) {
    alert('Password should be at least 8 characters with a number.');
    return false;
  }
  usersDB[username] = { password };
  currentUserTasks[username] = []; // Initialize task array for the user
  localStorage.setItem('usersDB', JSON.stringify(usersDB));
  localStorage.setItem('currentUserTasks', JSON.stringify(currentUserTasks));
  alert('User registered successfully!');
  return true;
}

/**
 * Validates password (at least 8 characters and one number).
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
  const pattern = /^(?=.*\d).{8,}$/;
  return pattern.test(password);
}

/**
 * Logs in the user if credentials are correct.
 * @param {string} username
 * @param {string} password
 * @returns {boolean}
 */
function loginUser(username, password) {
  if (!usersDB[username]) {
    alert('User does not exist!');
    return false;
  }
  if (usersDB[username].password === password) {
    sessionStorage.setItem('currentUser', username);
    loadUserTasks(username);
    toggleLogin(false); // Hide login, show tasks
    return true;
  } else {
    alert('Incorrect password!');
    return false;
  }
}

/**
 * Logs out the current user and clears session storage.
 */
function logoutUser() {
  sessionStorage.removeItem('currentUser');
  toggleLogin(true);
  alert('Logged out successfully!');
}

/**
 * Loads the tasks for the current user into the task list.
 * @param {string} username
 */
function loadUserTasks(username) {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = ''; // Clear task list
  currentUserTasks[username].forEach((task, index) => {
    addTaskToDOM(task, index);
  });
}

/**
 * Toggles between the login screen and task manager.
 * @param {boolean} showLogin
 */
function toggleLogin(showLogin) {
  document.getElementById('login-container').style.display = showLogin
    ? 'block'
    : 'none';
  document.getElementById('task-container').style.display = showLogin
    ? 'none'
    : 'block';
}

// ------------------ TASK MANAGEMENT SECTION ------------------

/**
 * Adds a new task for the current user.
 * @param {string} task
 */
function addTask(task) {
  const username = sessionStorage.getItem('currentUser');
  currentUserTasks[username].push({ task: task, completed: false });
  localStorage.setItem('currentUserTasks', JSON.stringify(currentUserTasks));
  loadUserTasks(username);
}

/**
 * Deletes a task from the current user's task list.
 * @param {number} index
 */
function deleteTask(index) {
  const username = sessionStorage.getItem('currentUser');
  currentUserTasks[username].splice(index, 1); // Remove task
  localStorage.setItem('currentUserTasks', JSON.stringify(currentUserTasks));
  loadUserTasks(username);
}

/**
 * Toggles the completed status of a task.
 * @param {number} index
 */
function toggleTaskCompletion(index) {
  const username = sessionStorage.getItem('currentUser');
  currentUserTasks[username][index].completed =
    !currentUserTasks[username][index].completed;
  localStorage.setItem('currentUserTasks', JSON.stringify(currentUserTasks));
  loadUserTasks(username);
}

/**
 * Adds a task to the DOM with completion and delete buttons.
 * @param {object} task
 * @param {number} index
 */
function addTaskToDOM(task, index) {
  const taskList = document.getElementById('task-list');
  const li = document.createElement('li');
  li.classList.add('task');
  li.innerHTML = `
        <span class="${
          task.completed ? 'completed' : ''
        }" onclick="toggleTaskCompletion(${index})">${task.task}</span>
        <button onclick="deleteTask(${index})">Delete</button>
    `;
  taskList.appendChild(li);
}

// ------------------ EVENT LISTENERS SECTION ------------------

document.getElementById('login-btn').addEventListener('click', () => {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  loginUser(username, password);
});

document.getElementById('register-btn').addEventListener('click', () => {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  registerUser(username, password);
});

document.getElementById('add-task-btn').addEventListener('click', () => {
  const newTask = document.getElementById('new-task').value;
  if (newTask.trim() !== '') {
    addTask(newTask);
    document.getElementById('new-task').value = ''; // Clear input
  }
});

document.getElementById('logout-btn').addEventListener('click', () => {
  logoutUser();
});

// On load, check if a user is already logged in
window.onload = function () {
  if (sessionStorage.getItem('currentUser')) {
    toggleLogin(false);
    loadUserTasks(sessionStorage.getItem('currentUser'));
  }
};

//

// Advanced Array Methods
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 95 },
];

// Use map() to create an array of just student names
const studentNames = students.map(student => student.name);
console.log(studentNames); // Output: ["Alice", "Bob", "Charlie", "David"]

// Use filter() to get students with grade above 80
const topStudents = students.filter(student => student.grade > 80);
console.log(topStudents); // Output: [{name: "Alice", grade: 85}, {name: "Bob", grade: 92}, {name: "David", grade: 95}]

// Use reduce() to calculate the average grade
const averageGrade =
  students.reduce((acc, student) => acc + student.grade, 0) / students.length;
console.log(averageGrade); // Output: 87.5

// Use find() to get the first student who has a grade above 90
const bestStudent = students.find(student => student.grade > 90);
console.log(bestStudent); // Output: {name: "Bob", grade: 92}

// Destructuring
const [firstStudent, secondStudent, ...remainingStudents] = students;
console.log(firstStudent); // Output: {name: "Alice", grade: 85}
console.log(remainingStudents); // Output: [{name: "Charlie", grade: 78}, {name: "David", grade: 95}]

// Object manipulation and merging using spread operator
const defaultSettings = { theme: 'dark', notifications: true, location: 'USA' };
const userSettings = { notifications: false, location: 'Canada' };
const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings); // Output: {theme: "dark", notifications: false, location: "Canada"}

//

// Simulating an asynchronous API call using Promises
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: 'John Doe', age: 30 });
      } else {
        reject('User not found');
      }
    }, 2000);
  });
}

// Using Promises
getUserData(1)
  .then(user => {
    console.log(`User found: ${user.name}`);
  })
  .catch(error => {
    console.error(error);
  });

// Async/Await version of the above code
async function fetchUser(userId) {
  try {
    const user = await getUserData(userId);
    console.log(`User found: ${user.name}`);
  } catch (error) {
    console.error(error);
  }
}

fetchUser(2); // Output: User not found

//

// Defining a simple class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Inheritance: extending the Person class to create a Student class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Calls the constructor of the Person class
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }

  greet() {
    super.greet(); // Calls the greet method of the Person class
    console.log(`I am a student in grade ${this.grade}.`);
  }
}

const student = new Student('Alice', 21, 'A');
student.greet();
student.study();

// Creating another class for inheritance example
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} teaches ${this.subject}.`);
  }
}

const teacher = new Teacher('Mr. Smith', 40, 'Mathematics');
teacher.greet();
teacher.teach();

//

// Basic try-catch error handling
try {
  let result = 10 / 0;
  if (result === Infinity) {
    throw new Error('Division by zero!');
  }
} catch (error) {
  console.error(`An error occurred: ${error.message}`);
}

// Custom Error Classes
class InvalidArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidArgumentError';
  }
}

function calculateSquareRoot(value) {
  if (value < 0) {
    throw new InvalidArgumentError(
      'Cannot calculate square root of a negative number.'
    );
  }
  return Math.sqrt(value);
}

try {
  console.log(calculateSquareRoot(-1));
} catch (error) {
  if (error instanceof InvalidArgumentError) {
    console.error(`Custom Error: ${error.message}`);
  } else {
    console.error(`Unknown error: ${error.message}`);
  }
}

//

// Exporting functions from a module
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

//

// Importing functions from the module
import { add, subtract, PI } from './mathModule.js';

console.log(add(10, 5)); // Output: 15
console.log(subtract(10, 5)); // Output: 5
console.log(PI); // Output: 3.14159

//
// Higher-order function example
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Using higher-order functions with basic math operations
const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(10, 5, sum)); // Output: 15
console.log(applyOperation(10, 5, multiply)); // Output: 50

// A higher-order function returning another function
function greeting(message) {
    return function (name) {
        console.log(`${message}, ${name}`);
    };
}

const sayHello = greeting("Hello");
sayHello("John"); // Output: Hello, John


//

// Closure: A function that "remembers" its lexical scope
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(`Count is: ${count}`);
    };
}

const increment = counter();
increment(); // Output: Count is: 1
increment(); // Output: Count is: 2

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This function runs immediately!");
})();

// IIFE with parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("Alice");


//

// Generator Function Example
function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num++; // Pause and return a value
    }
}

const generator = numberGenerator();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3

// Another example for finite sequence
function* fibonacciGenerator(limit) {
    let [prev, curr] = [0, 1];
    for (let i = 0; i < limit; i++) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibo = fibonacciGenerator(10);
for (let value of fibo) {
    console.log(value); // Output: First 10 Fibonacci numbers
}


//

// Proxy Example: Intercepting property access
const person = {
    name: "John",
    age: 30
};

const handler = {
    get: function (target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return `Property ${prop} does not exist`;
        }
    },
    set: function (target, prop, value) {
        if (prop === 'age' && typeof value !== 'number') {
            console.log("Age must be a number.");
        } else {
            target[prop] = value;
            console.log(`Set ${prop} to ${value}`);
        }
        return true;
    }
};

const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.name); // Output: John
console.log(proxyPerson.address); // Output: Property address does not exist

proxyPerson.age = 35; // Output: Set age to 35
proxyPerson.age = "old"; // Output: Age must be a number.


//

// Simple logging decorator
function logDecorator(fn) {
    return function (...args) {
        console.log(`Arguments: ${args}`);
        const result = fn(...args);
        console.log(`Result: ${result}`);
        return result;
    };
}

function multiply(a, b) {
    return a * b;
}

const decoratedMultiply = logDecorator(multiply);

decoratedMultiply(3, 4); // Output: Arguments: 3,4 | Result: 12


//

// Using Fetch API to load data and manipulate the DOM
document.getElementById("load-posts").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById("post-container");
            postContainer.innerHTML = ""; // Clear any existing posts

            posts.slice(0, 10).forEach(post => {
                const postElement = document.createElement("div");
                postElement.className = "post";
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });
});

//

// Event Delegation Example
document.getElementById("item-list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        alert(`You clicked on ${event.target.innerText} with ID ${event.target.dataset.id}`);
    }
});

// Dynamically adding new items to the list
const newItem = document.createElement("li");
newItem.dataset.id = "4";
newItem.textContent = "Item 4";
document.getElementById("item-list").appendChild(newItem);


// LocalStorage Example: Storing and retrieving a user's preference
function saveThemePreference(theme) {
    localStorage.setItem("theme", theme);
    console.log(`Theme saved: ${theme}`);
}

function loadThemePreference() {
    const theme = localStorage.getItem("theme") || "light";
    console.log(`Current theme: ${theme}`);
    document.body.className = theme; // Apply theme to the body
}

// Set and get theme preference
saveThemePreference("dark");
loadThemePreference(); // Output: Current theme: dark

// SessionStorage Example: Saving a user session
sessionStorage.setItem("username", "Alice");
console.log(`Logged in as: ${sessionStorage.getItem("username")}`);


// Async iterator with fetch
async function* fetchPosts() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const posts = await response.json();

    for (let post of posts) {
        yield post;
    }
}

async function displayPosts() {
    const postContainer = document.getElementById("post-container");

    for await (let post of fetchPosts()) {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postContainer.appendChild(postElement);
    }
}

displayPosts(); // Dynamically load posts using async iterator


// Form validation example
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (!validateEmail(email)) {
        errorMsg.textContent = "Invalid email format";
        return;
    }

    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters";
        return;
    }

    errorMsg.textContent = "Form submitted successfully!";
});

// Simple email validation
function validateEmail

