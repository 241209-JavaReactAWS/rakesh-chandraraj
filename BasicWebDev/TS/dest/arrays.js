"use strict";
// Arrays in TS are almost identical to arrays in JS (ordered, indexible, dynamic length, allow duplicates)
// The major difference is that you need to specify the type for the array contents 
let numArray = [1, 2, 3, 4, 5];
// let numArray: number[] = [1, 2, 3, 4, 5, "String"]; // doesn't work since "String" isnt a number 
// All of the same data types from before do follow here 
let stringOrBoolArray = [true, "Hello World", false, "b"];
// (string | boolean)[] IS NOT THE SAME THING AS string | boolean[] 
// We also have access to generics in TS like those in Java, <>
let genericArray = [1, 2, true, 3, 4, false, 5];
/*
Tuples
Will LOOK similar to arrays, but are NOT the same thing
Tuples are fixed length, where we specify the type of data returned at EVERY INDEX

Let's use HTTP response as an example
HTTP responses have 3 primary components
- Status code (success, unsuccessful, client error, server error)
- HTTP headers (string values describing the metadata of the response)
- Payload (actual body, and usually as a JSON string)
*/
let httpResponse;
// This creates a data structure with ONLY 3 elements, and they MUST adhere to these types 
httpResponse = [201, ["Content Type=application/json", "Authorization=uername"], "{username: 'JaneDoe'}"];
// Very useful for returning out of functions, especially when you have multiple values to return at once 
// Tuples are VERY SPECIFIC about the order and type since they don't have keys like objects 
console.log(httpResponse[2]);
