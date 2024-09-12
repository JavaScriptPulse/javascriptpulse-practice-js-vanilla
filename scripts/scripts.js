

// Dynamically generate task list with categories and links
document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');

    taskData.forEach(section => {
        // Create a div for each category
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `<h2>${section.category}</h2>`; // Category title

        // Loop through each task in the category
        section.tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task-item'; // Assign a class for each task item

            // Create a link to the task.html page with the task id in the URL
            taskDiv.innerHTML = `<a href="task.html?id=${task.id}">${task.title}</a>`;

            // Add the task to the category
            categoryDiv.appendChild(taskDiv);
        });

        // Append the category (with tasks) to the task list
        taskList.appendChild(categoryDiv);
    });
});
const taskData = [
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
