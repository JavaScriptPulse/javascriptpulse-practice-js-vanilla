
export const taskData = [
  {
    category: "Basics",
    tasks: [
      {
        id: "variables",
        title: "Variables and Data Types",
        description: "Create variables using `let`, `const`, and `var`. Demonstrate understanding of scope and data types."
      },
      {
        id: "operators",
        title: "Operators and Expressions",
        description: "Use arithmetic, logical, and comparison operators to manipulate values and variables."
      },
      {
        id: "control-structures",
        title: "Control Structures",
        description: "Implement different control structures, such as `if-else` statements, `switch` cases, and loops (`for`, `while`)."
      }
    ]
  },
  {
    category: "Functions",
    tasks: [
      {
        id: "function-basics",
        title: "Function Basics",
        description: "Write functions with different parameters, return values, and explore the concept of hoisting."
      },
      {
        id: "higher-order-functions",
        title: "Higher-order Functions",
        description: "Create functions that take other functions as arguments or return them."
      },
      {
        id: "closures-scoping",
        title: "Closures and Scoping",
        description: "Demonstrate how closures work by using nested functions that access outer function scopes."
      }
    ]
  },
  {
    category: "Objects and Arrays",
    tasks: [
      {
        id: "object-manipulation",
        title: "Object Manipulation",
        description: "Create, modify, and delete properties of objects. Explore methods like Object.keys, Object.values, and Object.entries."
      },
      {
        id: "array-operations",
        title: "Array Operations",
        description: "Perform tasks using array methods such as map, filter, reduce, and forEach."
      }
    ]
  },
  {
    category: "Advanced Topics",
    tasks: [
      {
        id: "async-javascript",
        title: "Asynchronous JavaScript",
        description: "Write tasks that use setTimeout, setInterval, Promises, and async/await to handle asynchronous operations."
      },
      {
        id: "dom-manipulation",
        title: "DOM Manipulation",
        description: "Create a simple interactive web page that requires adding, removing, and modifying HTML elements dynamically."
      },
      {
        id: "event-handling",
        title: "Event Handling",
        description: "Attach event listeners to DOM elements and handle events like clicks, mouse movements, and keyboard input."
      },
      {
        id: "web-apis",
        title: "Web APIs",
        description: "Fetch data from an external API and display it on a webpage."
      },
      {
        id: "error-handling",
        title: "Error Handling",
        description: "Implement try-catch blocks to handle errors and perform error logging."
      },
      {
        id: "regex",
        title: "Regex (Regular Expressions)",
        description: "Create tasks that involve validating input using regex patterns."
      }
    ]
  },
  {
    category: "Modules and ES6+",
    tasks: [
      {
        id: "es6-modules",
        title: "Using ES6 Modules",
        description: "Split code into modules, import, and export functions and variables."
      },
      {
        id: "es6-features",
        title: "ES6 Features",
        description: "Use ES6 features such as template literals, destructuring, spread operator, default parameters, and arrow functions."
      }
    ]
  },
  {
    category: "Debugging and Performance",
    tasks: [
      {
        id: "debugging-techniques",
        title: "Debugging Techniques",
        description: "Use browser developer tools to debug issues in JavaScript code."
      },
      {
        id: "performance-improvements",
        title: "Performance Improvements",
        description: "Profile JavaScript code and implement optimizations."
      }
    ]
  }
];
const examples = {
  'variables': `// Example: Basic variable declarations and usage

  let age = 25;
  const firstName = 'Jane';
  var isActive = true;
  
  console.log(\`Name: \${firstName}, Age: \${age}, Active: \${isActive}\`);`,

  'operators': `// Example: Using arithmetic and ternary operators
  let x = 8 * 4;
  let result = x > 20 ? 'Large' : 'Small';
  console.log(result);`,

  'control-structures': `// Example: Check if a number is prime
  let num = 7;
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime ? \`\${num} is a prime number\` : \`\${num} is not prime\`);`,

  'function-basics': `// Example: A basic function that subtracts two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  console.log(subtract(10, 6));`,

  'higher-order-functions': `// Example: Simple higher-order function
  function operate(fn, value) {
    return fn(value);
  }
  
  function triple(x) {
    return x * 3;
  }
  
  console.log(operate(triple, 4));`,

  'closures-scoping': `// Example: A closure that increments a counter
  function createCounter() {
    let counter = 0;
    return function() {
      return ++counter;
    };
  }
  
  const countUp = createCounter();
  console.log(countUp());
  console.log(countUp());`,

  'object-manipulation': `// Example: Basic object manipulation
  let house = { type: 'Apartment', rooms: 3, location: 'City' };
  
  // Add a property and update an existing one
  house.rooms = 4;
  house.garden = true;
  console.log(house);`,

  'array-operations': `// Example: Capitalizing all strings in an array
  let fruits = ['apple', 'banana', 'cherry'];
  let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
  console.log(uppercasedFruits);`,

  'async-javascript': `// Example: A simple async function with Promise
  async function fetchMessage() {
    return new Promise(resolve => setTimeout(() => resolve('Data fetched!'), 1500));
  }
  
  fetchMessage().then(msg => console.log(msg));`,

  'dom-manipulation': `// Example: Change the color of an element using DOM
  document.querySelector('.title').style.color = 'green';`,

  'event-handling': `// Example: Event listener for mouse hover
  document.querySelector('#hoverBox').addEventListener('mouseenter', () => {
    console.log('Mouse entered the box');
  });`,

  'web-apis': `// Example: Fetch a post using async/await
  async function fetchPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    console.log(post);
  }
  
  fetchPost();`,

  'error-handling': `// Example: Basic JSON parsing with error handling
  function safeParse(jsonStr) {
    try {
      return JSON.parse(jsonStr);
    } catch (e) {
      console.error('Invalid JSON', e);
      return null;
    }
  }
  
  console.log(safeParse('{ "valid": true }'));
  console.log(safeParse('invalid json'));`,

  'regex': `// Example: Basic regex to validate a phone number
  const phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;
  console.log(phonePattern.test('123-456-7890'));`,

  'es6-modules': `// Example: Simple ES6 module
  // utils.js
  export function square(num) {
    return num * num;
  }
  
  // main.js
  import { square } from './utils.js';
  console.log(square(5));`,

  'es6-features': `// Example: Using destructuring and spread
  const user = { name: 'Alice', age: 30 };
  const { name, ...rest } = user;
  console.log(name, rest);`,

  'debugging-techniques': `// Example: Using debugger to pause execution
  function calculateSum(a, b) {
    console.log('Calculating sum...');
    debugger;
    return a + b;
  }
  
  calculateSum(3, 4);`,

  'performance-improvements': `// Example: Timing a loop execution
  console.time('Loop Execution');
  for (let i = 0; i < 100000; i++) {}
  console.timeEnd('Loop Execution');`
};




const requirements = {
  'variables': ` Create a function that accepts a person’s name, age, and isStudent status.
    The function should return an object with these properties, and a calculated yearOfBirth property.
  function createPerson(name, age, isStudent) {
  
  }`,

  'operators': `  Use arithmetic, logical, and comparison operators to perform a calculation.
  Check if a value meets a condition and log whether the result is "Large" bigger than 50 or "Small" smaller than 50.
  function performCalculation(value) {
  
  }`,

  'control-structures': `  Given a number, determine if it’s divisible by both 3 and 5, calculate the sum of all numbers up to that number, and return the square of the result if it’s divisible by another number.
  function processNumber(num, divisor) {
  
  }`,

  'function-basics': `  Write a function that calculates the factorial of a number.
    The factorial of n is the product of all positive integers less than or equal to n.
  function factorial(n) {
  
  }`,

  'higher-order-functions': `  Write a higher-order function that takes two functions and a value.
   It should apply the first function to the value, then apply the second function to the result.
  function applyTwoFunctions(fn1, fn2, value) {
  
  }`,

  'closures-scoping': `  Write a function that returns a counter closure.
    The counter should increment by 2 every time it's called, and log the counter value.
  function createIncrementalCounter() {
  
  }`,

  'object-manipulation': `  Create a house object and add a garden property. 
    Modify the number of rooms and log the modified object.
  let house = { type: 'Villa', rooms: 4 };
  function modifyHouse(house) {
  
  }`,

  'array-operations': `  Write a function that filters out words longer than 5 characters.
    Then return a new array with only the filtered words.
  function filterLongWords(words) {
  
  }`,

  'async-javascript': `  Write a function that returns a Promise resolving with a message after a delay.
    The delay should be at least 1 second.
  function delayMessage() {
  
  }`,

  'dom-manipulation': `  Modify the style of an HTML element by ID.
    Change its font size and background color. Ensure the changes are logged.
  function changeElementStyle() {
  
  }`,

  'event-handling': `  Attach an event listener to a button element.
    When clicked, log a message indicating that the button was clicked.
  function addButtonListener() {
  
  }`,

  'web-apis': `  Fetch data from a public API using async/await.
    Parse the response and log the result. Handle errors with try-catch.
  async function fetchData() {
  
  }`,

  'error-handling': `  Write a function that safely parses JSON data.
    Use try-catch to handle invalid input and log both success and error cases.
  function safeJsonParse(jsonString) {
  
  }`,

  'regex': `  Create a regular expression to validate a postal code (5 digits).
    Test the regex with different inputs and log the results.
  function validatePostalCode(code) {
  
  }`,

  'es6-modules': `  Create an ES6 module with a function that calculates the cube of a number.
     Import this function into another file and use it to log the result.
  function cube(num) {
  
  }`,

  'es6-features': `  Use destructuring and the spread operator in your code.
    Destructure an object and use the spread operator to clone or merge objects.
  const user = { name: 'John', age: 25 };
  function manipulateObject(user) {
  
  }`,

  'debugging-techniques': `  Write a function that performs a calculation.
    Include console.log statements and a debugger statement to inspect the code.
  function debugCalculation(a, b) {
  
  }`,

  'performance-improvements': `  Write a loop that runs 200,000 times and measure the execution time.
    Optimize the loop and verify the performance improvement.
  function measurePerformance() {
  
  }  //Open dev tolls`
};


const solutions = {
  'variables': `// Solution for the variable-related requirement
  function createPerson(name, age, isStudent) {
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - age;
    return {
      name: name,
      age: age,
      isStudent: isStudent,
      yearOfBirth: yearOfBirth
    };
  }
  
  console.log(createPerson('John', 25, true));`,

  'operators': `// Solution for the operator-related requirement
  function performCalculation(value) {
    
    if (value > 50) {
      console.log('Large');
    } else {
      console.log('Small');
    }
  }
  
  performCalculation(15);`,

  'control-structures': `// Solution for the prime number checking  
  function processNumber(num, divisor) {
  // Check if the number is divisible by both 3 and 5
  if (num % 3 === 0 && num % 5 === 0) {
    // Calculate the sum of all numbers up to 'num'
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    
    // Check if the sum is divisible by the given divisor
    if (sum % divisor === 0) {
      // Return the square of the sum
      return sum * sum;
    } else {
      return sum;
    }
  } else {
    return "The number is not divisible by both 3 and 5.";
  }
}

// Example of calling the function
let result = processNumber(15, 10);
console.log(result); // This will print the result to the console
 `
  ,

  'function-basics': `// Solution for calculating the factorial of a number
  function factorial(n) {
    let result = 1;
  
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }
  
  console.log(factorial(5));  // Output: 120`,

  'higher-order-functions': `// Solution for higher-order function
  function applyTwoFunctions(fn1, fn2, value) {
    const intermediate = fn1(value);
    return fn2(intermediate);
  }
  
  function double(x) {
    return x * 2;
  }
  
  function addFive(x) {
    return x + 5;
  }
  
  console.log(applyTwoFunctions(double, addFive, 4));  // Output: 13`,

  'closures-scoping': `// Solution for closure requirement
  function createIncrementalCounter() {
    let count = 0;
    return function() {
      count+=2;
      console.log(\`Counter value: \${count}\`);
      return count;
    };
  }
  
  const counter = createIncrementalCounter();
  counter();  // Counter value: 2
  counter();  // Counter value: 4`,

  'object-manipulation': `// Solution for object manipulation requirement
  let house = { type: 'Villa', rooms: 4 };
  function modifyHouse(house) {
    house.rooms = 6;
    house.garden = true;
    console.log(house);
  }
  
  modifyHouse(house);  // { type: 'Villa', rooms: 6, garden: true }`,

  'array-operations': `// Solution for array operations
  function filterLongWords(words) {
    return words.filter(word => word.length > 5);
  }
  
  const words = ['apple', 'banana', 'cherry', 'kiwi'];
  console.log(filterLongWords(words));  // ['banana', 'cherry']`,

  'async-javascript': `// Solution for async function
  function delayMessage() {
    return new Promise(resolve => setTimeout(() => resolve('Hello after 1 second'), 1000));
  }
  
  delayMessage().then(msg => console.log(msg));`,

  'dom-manipulation': `// Solution for DOM manipulation
  function changeElementStyle() {
    const element = document.getElementById('header');
    element.style.fontSize = '24px';
    element.style.backgroundColor = 'lightblue';
    console.log('Element style updated.');
  }
  
  changeElementStyle();`,

  'event-handling': `// Solution for event handling
  function addButtonListener() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
      console.log('Button clicked!');
    });
  }
  
  addButtonListener();`,

  'web-apis': `// Solution for API fetching
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();`,

  'error-handling': `// Solution for error handling with JSON parsing
  function safeJsonParse(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      console.error('Invalid JSON:', e.message);
      return null;
    }
  }
  
  console.log(safeJsonParse('{ "key": "value" }'));
  console.log(safeJsonParse('invalid json'));`,

  'regex': `// Solution for regex postal code validation
  function validatePostalCode(code) {
    const postalCodePattern = /^\\d{5}$/;
    return postalCodePattern.test(code);
  }
  
  console.log(validatePostalCode('12345'));  // true
  console.log(validatePostalCode('1234A'));  // false`,

  'es6-modules': `// Solution for ES6 module requirement
  // utils.js
  export function cube(num) {
    return num * num * num;
  }
  
  // main.js
  import { cube } from './utils.js';
  console.log(cube(3));  // Output: 27`,

  'es6-features': `// Solution for using destructuring and spread
  const user = { name: 'John', age: 25 };
  function manipulateObject(user) {
    const { name, ...rest } = user;
    const clonedUser = { ...user, country: 'USA' };
    console.log(name, rest, clonedUser);
  }
  
  manipulateObject(user);`,

  'debugging-techniques': `// Solution for debugging technique
  function debugCalculation(a, b) {
    console.log('Adding', a, 'and', b);
    debugger;
    return a + b;
  }
  
  console.log(debugCalculation(5, 10));`,

  'performance-improvements': `// Solution for performance measurement
  function measurePerformance() {
    console.time('Loop Execution');
    for (let i = 0; i < 200000; i++) {}
    console.timeEnd('Loop Execution');
  }
  
  measurePerformance();`
};





// Get the task id from the URL
const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get('id');

// Find the task in the taskData array based on the id
const task = taskData.flatMap(section => section.tasks).find(task => task.id === taskId);

if (task) {
  // Dynamically set the task title and description
  document.getElementById('taskTitle').textContent = task.title;
  document.getElementById('taskDescription').textContent = task.description;

  // Load example code from the examples object
  document.getElementById('exampleCode').textContent = examples[taskId];

  // Load task requirements
  document.getElementById('taskRequirements').textContent = requirements[taskId];

  // Show solution on button click
  function showSolution() {
    document.getElementById('solutionCode').textContent = solutions[taskId];
    document.getElementById('solution').style.display = 'block';
  }

  // Attach showSolution to the global window object so it can be triggered by the button
  window.showSolution = showSolution;
}

// Function to execute the code from the textarea
// Function to execute the code from the textarea and provide feedback
function runCode() {
  const code = document.getElementById('codeArea').value;
  const outputArea = document.getElementById('outputArea');
  const feedback = document.getElementById('feedback');
  const feedbackMessage = document.getElementById('feedbackMessage');

  // Reset output and feedback areas
  outputArea.textContent = "";
  feedback.style.display = "none";

  try {
    // Capture console.log output
    let logOutput = [];
    const originalConsoleLog = console.log;
    console.log = function (...args) {
      logOutput.push(...args);
      outputArea.textContent = logOutput.join(' ');  // Display output in the output area
    };

    new Function(code)();  // Dynamically create and execute the user's code

    // Provide success feedback
    feedback.style.display = "block";
    feedbackMessage.innerHTML = `<span style="color:green;" >✔️ Code executed successfully!</span> `;

    // Restore the original console.log behavior
    console.log = originalConsoleLog;
  } catch (e) {
    // Provide error feedback
    feedback.style.display = "block";
    feedbackMessage.innerHTML = `<span style = "color:red;">❌ Error in your code: ${e.message}</span > `;
  }
}

// Attach runCode to the global window object
window.runCode = runCode;
function goBack() {
  window.history.back();
}
window.goBack = goBack;

function copyCode() {
  const exampleCode = document.getElementById('exampleCode').innerText; // Get the text inside the <pre> tag
  navigator.clipboard.writeText(exampleCode).then(() => {
    showToast();
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 500); // Hide the toast after 3 seconds
}
function copySolution() {
  const solutionCode = document.getElementById('solutionCode').innerText; // Get the text inside the <pre> tag
  navigator.clipboard.writeText(solutionCode).then(() => {
    showToast();  // Reuse the existing showToast function
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}


window.copyCode = copyCode;
window.copySolution = copySolution;



