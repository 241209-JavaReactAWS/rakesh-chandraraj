/*
This is a multiline comment in JavaScript

What is JS?
- If HTML is the structure of our webpage, and CSS is our styling, JS is in charge of the functionality 
    - Click a button 
    - Type something in 
    - Dragging items across the screen 
- Most common use case in JS is in front end functionality, through some use it in conjunction with other 
    environments for server-side coding 

Notes about JS 
- High leveled language 
    - Means that JS  has automatic memory management and garbage collection
    - Farther away from machine code and more human readable 
- Dynamically typed and weakly typed 
    - Java, in comparison, is statiscally and strongly typed 
    - Dynamic typing vs Static typing 
        - In a statically typed language (ex. Java), data types are determined at compile time 
        - In a dynamically typed language, the assignment of a data type happens at runtime
    - Strong typing vs Weak typing 
        - In a strongly typed language, you'd expect the data type of a variable to not change during 
            operations unless explicitly told to
- Single-threaded
    - Can only have one execution state at a time. 
        - So it can't achieve true multithreading like other languages (ex. Java) 
- Multiparadigm 
    - JS can be used for OOP, functional programing, or procedural programming  
- Interpreted Language
    - In an interpreted language, the code gets compiled one line at a time as needed
        - In comparison, in a compiled language, all of the code is compiled before the execution starts 
*/

// Whenever you start with a new language, usually you want to check the tools you already have access to 
var x = 10;
// Notice how no data type was provided
x = "Ten";
x = false;
x = true;
x = { name: "bryan" };
x = 10;
// All of these statements are valud since the datatype is determined at runtime

// How do I go about seeing this in any capacity?
console.log(x);
console.log("Hello World!");

/*
Let and Const 

What are let and const 
- Let and Const are different ways to declare variables beyond just var 
    - Let operates almost the exact same as var 
    - Const allows for the creation of constant variables 
- Why are there different ways to declare variables 
    - Var is globally scoped
        - This can cause various namespace issues, especially when declaring variables in 
            block / method scope
        - So in ES6, let and const were introduced to help 
            - What is ES6? 
                - This is from ECMAScript, which is the standard for JS and other scripting languages 
                    and they introduce new iddues 
*/

let y = 5;
y = "Five";
const z = 6;
// z = "Six";
console.log(y); // Prints out "Five"
console.log(z); // Prints out 6 since the reassignment is commented out 

/*
Datatypes 
Just because we're not defining the datatype on each variable, doesn't mean that they don't exist 

Primitives: number, boolean, string, undefined, null, BigInt, and Symbol
- Number 
    - Any number that's positive, negative, or a decimal 
- Boolean 
    - True / False 
- Strings 
    - Collection of text (defined by "", '', or ``) 
- Undefined 
    - Declaring a variable but not assigning a value 
- Null 
    0 Is the intentional absense of a value 

Objects 
- Objects in JS are created by using key-value pairs 
- Looks just like JSON when we use HTTP 
    - JSON stands for JavaScript Object Notation 
*/

let sampleObject = {
    username: "firstname",
    password: "password",
    empId: "50",
    isMarried: false
};

/*
Control Flow
- A collection of coding structure that control the flow of the code
*/

// If-Else statements 
let a = -1;
if (a > 0) { 
    console.log("A is positive!"); 
} else if (a == 0) { 
    console.log("A is 0!") 
} else { 
    console.log("A is negative!"); 
}

// For loops 
for (let i = 3; i < 5; i++) {
    console.log("The nunber is " + i);
}
// There are other types of for loops in JS 

// While loops 
let day = "Friday";
while(day != "Friday") {
    console.log("The current day is " + day);
    if (day == "Monday") {
        day = "Tuesday";
    } else if (day == "Tuesday") {
        day = "Wednesday"
    } else if (day == "Wednesday") {
        day = "Thursday"
    } else if (day == "Thursday") {
        day = "Friday"
    } else if (day == "Friday") {
        day = "Saturday"
    } else if (day == "Saturday") {
        day = "Sunday"
    } else {
        day = "Monday"
    }
}
console.log("The day is " + day + ". Enjoy your weekend!");

console.log("--------------------------------------------------------------------------")

// There are other niche pieces of controls 

// Do-while loops 
do {
    console.log("The current day is not friday!");
} while(day != "Friday");
// Always runs at least once, so there will be some sort of output 

// For-of loops - Loops through the items in the array 
let simpleArray = [1, 2, 3, 4, 5];
for (let num of simpleArray) {
    console.log(num);
}

// For-in loops - Iterates over OBJECTS and can access the key and the value in the array 
let person = {
    name: "Helga",
    age: 25, 
    isMarried: false
};

for (let prop in person) {
    console.log(prop + " : " + person[prop]);
}
