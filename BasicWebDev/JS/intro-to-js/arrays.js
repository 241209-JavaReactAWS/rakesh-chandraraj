/*
Arrays are most similar to Lists in Java 
- In Java
    - Fixed size
    - Ordered/indexable 
    - Allow duplicates 
- In JavaScript:
    - Dynamically sized
    - Ordered/indexable 
    - Allow duplicates 
*/
let simpleArray = [1, "two", false, {property: "value"}, 1]; 

// We saw earlier that we can iterate over this structure with a for-of loop 
// To add new items to the array, use the push methods 
simpleArray.push('2'); 

// To insert at a specific index let's splice 
// Splice takes 3 arguments: index, number of elements to delete, and what to replace it with 
simpleArray.splice(1, 0, "Spliced in!");

/*
Next, let's look at the forEach function 
NOTE: The foreach takes something in called a callback function
- The callback function is a function that is passed to another function 
*/
simpleArray.forEach(function(x) {
    console.log(x);
});

console.log("--------------------------------------------------")

/*
Removal of elements 
To remove from the beginning of the array, you'll need to use shift 
To remove from the end, you'll need to use pop
*/
let x = simpleArray.shift();
let y = simpleArray.pop();
console.log(x); // Returns 1
console.log(y); // Returns 2


// Other functions that are useful 
// map 
// filter 