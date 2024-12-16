/*
Functions in JS are very similar to Java 
Bacially, just a block of repeatable code that can also be called with different parameters or arguments 
*/

function simpleFunction() {
    // Notice that, unlike Java, I don't have to declare anything other than the function and the parameters 
    console.log("I'm inside a function!");
}

// Just like any language, you need to call a function for it to be run
simpleFunction();

// Let's create a function to see if a number is even 
function isEven(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    return "Odd";
}

console.log(isEven(7)); // Should show odd 
console.log(isEven(4)); // Should show even 


// Default Values 
// Very similar to an overloaded method in Java, you can create methods with default parameters so you can call 
// the function with a different amount of arguments 

function multiply(x, y=2) {
    return x * y;
}
// y = 2 is the default value, so if there is only one parameter, the y value will be 2 by default

console.log(multiply(7, 4));
console.log(multiply(9));


/*
Fun Quirks of JS 
- Truthy / Falsy 
- Type Conversion 
*/

/* 
Truthy vs Falsy
What happens here? 
- JS is attempting to convert the value of string to true/false 
    - If the value is not falsy, it's truthy 

- Falsy Values: 
    - null 
    - undefined 
    - false 
    - empty string (as well as empty arrays and objects)
    - 0 
    - NaN (not a number)

*/
let str = "false"
if (str) {
    console.log("String is true!");
} else {
    console.log("String is false!"); 
}
// The string might say false, but it's not an empty string, so it's a truthy value 

/*
Why does this happen? 
- Because JS is weakly typed 
    - When we attempt to perform an operation, if the datatypes aren't compatible, JS will try to coerce a 
        variable into a different type for the operation to succeed 
*/

let x = "3" / 4;
let y = "3" + 4;
console.log(x);
console.log(y);
// This works due to Java converting the 3 to an int in order to complete the mathematical operation 
console.log(true + true + true);
// This prints out 3 since true converts to 1


/*
JavaScript has 2 equality operators: 
- == (loose equality) -> attempts to perform type coercion if needed and checks if the values are equal 
- === (strict equality) -> checks that both the values AND the types are the equal 
*/

console.log("5" == 5); // True since the string is converted to int 
console.log("5" === 5); // False since the 5 in string form is not equal to the 5 in int form 
// If you're not sure what to use, default to === 