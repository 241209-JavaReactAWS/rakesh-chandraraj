/* 
GOAL: when we click the recordCustomer button, we should send a request to our backend, which will save 
the user in the database and then returns the appropriate result 
*/ 

let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let purchaseAmountInput = document.getElementById("purchaseAmountInput");
let createCustomerButton = document.getElementById("recordCustomerButton");

// Process 
// Create the function 

/* 
One of the other changes added in ES6 was the use of async and await 
- Using async on a function marks it as asynchronous 
    - Meaning that anytime it's called, it's passed off to the web API and handled/resolved in the background 
        and JavaScript will continue until it finds the time to finish the call 
- Using await is a fun keyword that can only be used inside of an async function 
    - It tells JS to halt the operation of that function until a promise is resolved or rejected 
*/ 

async function submitNewCustomer() {
    let firstNameValue = firstNameInput.value;
    let lastNameValue = lastNameInput.value;
    let purchaseAmountValue = purchaseAmountInput.value;

    // Create a customer object 
    let customer = {
        // It's important that the PROPERTY name match with the JAVA VARIABLES 
        firstName: firstNameValue, 
        lastName: lastNameValue,
        purchaseAmount: purchaseAmountValue
    }

    // The customer object is now packaged and ready to ship in a POST request to our backend 
    let data = await fetch("http://localhost:8080/customers", {
        // Inside of here, we need to add any additional information required for my request to work 
        method: "POST", 
        // Headers provide contextual information 
        headers: {
            "Content-type": "application/json"
        }, 
        // Stringify takes a JS object and turns it into a JSON String 
        body: JSON.stringify(customer) 
    }) 

    // Let's try something really quick 
    // Let's convert the whole response from the hTTP request to a JS object so we can print it 
    let response = await data.json;

    console.log(data.body);
    console.log("Method finished");

    // If we need to wait for the body 
    // What about the unknown media issue 
} 

// Add an event listener 
createCustomerButton.addEventListener("click", submitNewCustomer);