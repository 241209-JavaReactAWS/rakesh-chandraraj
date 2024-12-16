/*
DOM Manipulation is the practice of using JS to dynamically manipulate the DOM 
What is the DOM?
- Document Object Modeling 
    - A tree structure that gets generated every time an HTML page is loaded and it contains all of the 
        elements, their child elements, and their associated attributes. 
- We can hook into the DOM and update it dynamically using JS 

GOAL: Target a specific HTML element and add child elements to it 
*/

let customers = [
    {
        customerId: 1,
        firstName: "John",
        lastName: "Smith",
        purchaseAmount: 123.45
    },
    {
        customerId: 2,
        firstName: "Terra",
        lastName: "Dactyl",
        purchaseAmount: 12.43
    },
    {
        customerId: 3,
        firstName: "Valerie",
        lastName: "Frizzle",
        purchaseAmount: 36.87
    }

]

// Normally, all this information would come from some API 
// How can we get this to show on the page?

// First, we need to target an element 
let customerContainer = document.getElementById('customer-container');
// Here, we looked up the customer container by using it's ID (you can also use class, tag, or any other CSS selector) 

function populateCustomers(customers) {
    // We want to iterate over the list of characters and add elements for each one 
    for (customer of customers) { 
        // Now that we're iterating over each object, let's create an HTML element to store the customer info 
        let cDiv = document.createElement('div'); 

        /*
        The next step is to fill the div 
        This is a basic way to do it 
        cDiv.innerHTML = "<h2>" + customer.firstName + "</h2>"; 

        Let's add the rest of the customer info using template literals 
        Template literals were introduced in ES6, and used to directly inject JS into strings (USES `` and ${})
        */
        cDiv.innerHTML = `
        <h2>${customer.firstName} ${customer.lastName}</h2>
        <p>Customer Id: ${customer.customerId}</p>
        <p>Purchase Amount: ${customer.purchaseAmount}</p>
        `

        // Before appending, since I want to update the styling using the customer class, it's necessary 
        // to add the customer class to the cDiv itself 
        cDiv.setAttribute("class", "customer");

        // Then, the div will be appended to the existing container 
        customerContainer.append(cDiv); 
    }
}

populateCustomers(customers);
// Later, this will be performed during an API call 


/*
PROMISES in JavaScript 

A promise in JS is a special kind of object that represents the promise of a future value 
- Since JS is single-threaded, it has certain operations that are performed asynchronously via the web API 
- So instead of waiting for a specific response, JS passes off the responsibility to the event loop and continues 
    working for now 

TLDR: HTTP calls take time, and JS doesn't want to wait 

Since promises are the promise of a future value, they need to be able to handle all possibilities 
- Success, or Failure 
*/

let promise = new Promise(function(resolve, reject) {
    // A promise takes in 2 functions, and once it receives a value, it will execute them
    let x = 5
    let y = 3

    if (x >= y) {
        resolve(x);
    } else {
        reject(x)
    }
})

// We can view the value of a promise through the use of consumer functions 
// The resolve function is handled with the .then syntax 
// The reject function is handled with the .catch syntax 

// promise 
//     .then((x) => x = x * 2)         /* Equivalent to: promise.then(function(c) {x = x * 2}) */
//     .then((x) => console.log(x));

promise 
    .then((x) => console.log("The promise resolved, this is like receiving a 200 status HTTP response"))
    .catch((err) => console.log("The promise rejected, which means there was an erorr (400 or 500 status code"))
    .finally(() => console.log("This happens regardless of the result"));

/*
Let's actually use this for something useful 
JS classifies the API calls via fetch as asynchronous, so they'll always implicitly return promises 

The Fetch API is built into JS and it is a simple way to send HTTP requests that are fully customizable and 
easier to work with rather than traditional AJAX requests 

The default fetch request is a GET request, so let's send one to our backend 
*/

let data = fetch("http://localhost:8080/customers");

// Once the response is retrieved, we need to execute the populate customers function 

data
    .then((data) => data.json()) // Converts to JSON object 
    .then((data) => populateCustomers(data))
    .catch((err) => console.log(err));

/*
We ran into two CORS issues: 
- The request was coming from a null origin, due to us running this as a file and not coming from an actual website 
    - Resolved by hosting the website with the Live Server extension 
- The backend is not ready to accept requests from the specified origins. 
    - Resolved by @CrossOrigin annotation on our controller class and marking the specific origin 
COR errors prevent cross-site scripting (third party applications interacting with each other) 

*/