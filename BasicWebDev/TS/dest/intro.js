"use strict";
/*
Welcome to our first TypeScript file, note the .ts extension and not the .js

Recall, we mentioned that TS is a TYPED SUPERSCRIPT of JS
- It can do everything JS can do and more
- It supports strong and static typing for compile time type safety
- It's an OOP language developed by Microsoft
*/
let sampleVariable = "Hello, World!";
// At this point, sample Variable is ONLY a string, and cannot be changed to another type 
// sampleVariable = 6;
// sampleVariable = false;
sampleVariable = "Who?";
/*
Data Types in TypeScript

Main ones
- boolean (true / false)
- string (collection of characters )
- number (any number)
- null (absense of a value)
- undefined (declaring a variable without assignment)

Keep these in mind anyway
- any
- void
- enums
- tuples
- union Types
- arrays
- never

Other
- bigint
- symbol
*/
// Explicit Type Declaration 
let x = 5;
// Implicit type declaration 
let bool = true;
// bool = "Something"; // Doesn't work 
console.log(x);
console.log(bool);
/*
Why do we care about type safety?

The main idea of TS is to preserve the functionality of JS but give you the strong / static type checking
- Reduces the amount of quirks JS has due to implicit type coersion
- Better for larger groups working together or larger codebases that can't be kept track of by one person
- Better Intellisense, since it can help you more by providing correct fill in's since it knows the type
*/
// Any is used for when you want a variable to behave like a JS one, so anything can happen 
let y = true;
y = "String";
y = 6;
// Unknown type behaves similarly to Any, but this is used when the variable type is not known 
let z = true;
z = "String";
z = 6;
// The differnece between Unknown and Any is that Any will allow any operation to occur, while Unknown 
// is a bit more safe and prevents unknown operations from executing 
// y.someFunction();
// z.someFunction(); // Doesn't work since z is an Unknown and not Any 
// z would have to be cast to some datatype before trying to call a function on it 
// COME BACK TO ME LATER: Can we have a data structure that accepts any type? 
// Union Types - Live in the middle of regular data types and any. So you can provide a list of various 
// types that a variable is allowed to be 
let boolOrString = true;
boolOrString = "A String";
// We may use this for arrays of different types 
// Void is a return type for a function that doesn't return 
function myFirstFunction(message) {
    console.log(message);
}
// Hovering over this function will show that the return type is void since nothing's being returned
myFirstFunction("Hello, from inside a function!");
// myFirstFunction(16); // Doesn't work, since 16 isn't a String 
// Different shapes of data 
// Let's create a function that takes in a parameter that's more complex than what we've done so far 
function sendOfferLetter(emailObject) {
    console.log(`Hello ${emailObject.email}, "we'd like to offer you the position of ${emailObject.position}.
        We're placing a tentative offer with a starting salary of $${emailObject.salary}`);
}
// To utilize the function above, I need to pass an object with certain fields into the function 
let sampleEmailObject = {
    email: "email@gmail.com",
    salary: 50000,
    position: "Java Full Stack Engineer"
};
sendOfferLetter(sampleEmailObject);
// Order doess't matter, BUT the fields and types matter. 
// Let's look at an object with the wrong shape 
let wrongEmailObject = {
    email: "revature@gmail.com",
    oppurtunity: "Jave Full Stack Trainer",
    compensation: 10
};
// We can leverage this EmailType to create objects with the right shape 
let emailTypeAlias = {
    email: "example@gmail.com",
    salary: 1000,
    position: "Professional Janitor"
};
// Better intellisense since it knows the types of missing fields and quick fix actually fixes it 
function sendBetterOfferLetter(emailObject) {
}
let p1 = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    isMarried: false
};
// It's rude to ask someone's age, so let's remove that as a REQUIRED field (by adding ? in front of :)
let p2 = {
    firstName: "Jane",
    lastName: "Doe",
    isMarried: false
};
/*
Never
This data type is used to represent a value that should never exist of a function return type that never returns
*/
function neverFunction() {
    throw new DOMException();
    // let string = "Unreachable code"
}
let numberOrString = "1";
if (typeof numberOrString === "number") {
    console.log(numberOrString);
}
else if (typeof numberOrString === "string") {
    console.log(numberOrString);
}
else {
    numberOrString;
}
