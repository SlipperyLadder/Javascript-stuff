var myVar = "it's a variable";
let myLet = 42;
const myConst =[1, 2, 3, 4, 5];

//this function is a named function because it has a name, which is namedFunction. It can be called by its name to execute the code inside it.

function namedFunction() {
    console.log("This function is a named function");
}
namedFunction();

//so this function is an anonymous function because it does not have a name. It is assigned to a variable called anonymousFunction.

let anonymousFunction = function() {
    console.log("This function is an anonymous function");
}
anonymousFunction();

//built-in functions are functions that are already defined in JavaScript. For example, the alert() function is a built-in function that displays a message in a dialog box.

let numberString = "12345";
let parsedNumber = parseInt(numberString);
console.log("Parsed number using parseInt:", parsedNumber); // Output: 12345

//this is an if statement, which is a conditional statement that executes a block of code if a specified condition is true. If the condition is false, it can execute an alternative block of code using an else statement.

let condition = true;
if (condition) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}

//switch statements are used to perform different actions based on different conditions. It evaluates an expression and matches the value against case clauses.

let cleaningTask = 1;
switch (cleaningTask) {
    case 1: console.log("vacuum");
        break;
    case 2: console.log("dust");
        break;
    case 3: console.log("mop");
        break;
    case 4: console.log("laundry");
        break;
    default: console.log("all done");
}

//arrays are used to store multiple values in a single variable. They can hold values of different data types, including numbers, strings, and objects.

let stringArray = ["apple", "banana", "cherry"]; //array of strings
let numberArray = [1, 2, 3, 4, 5]; //array of numbers
let mixedArray = ["apple", 1, true]; //array of mixed data types

//loops through an array using a "for" loop to access each element in the array.
for (let i = 0; i < stringArray.length; i++) {
    console.log("Element at index " + i + ":", stringArray[i]);
}

//creating and using and object in JavaScript. Objects are collections of key-value pairs, where each key is a string and each value can be any data type.

let person = {
    firstName: "John",
    lastName: "Connor",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//accessing object properties using dot notation and calling a method of the object.

console.log("Person's first name:", person.firstName); // Output: John
console.log("Person's last name:", person.lastName); // Output: Connor
console.log("Person's full name:", person.fullName()); // Output: John Connor