/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */


// Vanilla JavaScript Function (without parameters)
function addTwoNumber() {
    // Code Block
}


// Vanilla JavaScript Function 
function addTwoNumbers(a, b) {
    // Code Block
    return a + b;
}
    // Call the Function

let sum = addTwoNumbers(3, 5);
console.log(sum);


// Arrow Function With Parameters (aka ES6 arrow function syntax)

const addTwoNumbers1 = (a, b) => {
    // Code Block
    return a + b;
}
    // Call the Function

let sum1 = addTwoNumbers1(1, 2);
console.log(sum1);


// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b);
const addTwoNumbers2 = (a, b) => a + b;

    // Call the Function

let sum2 = addTwoNumbers2(2, 4);
console.log(sum2);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!');

const sayHello = () => console.log('hello'); // Empty parenthesis to tell js you're declaring a function
sayHello();


// Returning Multiple Lines
const returnMultipleLines = () => (
    '<p>Whenever an arrow function needs to return multiple lines of code the parentheses mentioned in the imiplicit return function above are required. This goes for using an explicit return statement inside a set of curly braces, too. If you need to return multiple lines of code, you must wrap whatever comes after the return keyword in parentheses. Ensure everything is contained within the quotation marks & conjoined together as demonstrated.</p>'
);

console.log(returnMultipleLines());