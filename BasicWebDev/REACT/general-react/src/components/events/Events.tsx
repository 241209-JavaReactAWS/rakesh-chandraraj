
/*
We've already looked at a couple of basic functions (mainly just onClick). Let's talk about receiving 
user input 
*/

import { SyntheticEvent, useState } from "react"

function Events() {

  const [stringState, setStringState] = useState("")

  // Let's create a function that will handle the changing of the string 
  let changeString = (e: SyntheticEvent) => {
    /*
    What is a SyntheticEvent?
    - React uses these as a wrapper around real DOM effects to control how you interact with the 
      application 
    - Benefits 
      - Reliability across browsers 
      - Pooling of multiple events 
    - Normally in JS, we took the value of the targetted element (we've targetted an input field)
    */
    // Let's store the target element as an HTML element 
    let inputField = e.target as HTMLInputElement
    let storedString = inputField.value
    setStringState(storedString)
  }

  return (
    <div>
      <button onClick={() => {console.log("Button Clicked")}}>Click me to do something!</button>
      <br />
      <br />
      <br />
      <label>
        Text Field: <input type="text" id="text-field" onChange={changeString} name="text-field"/>
      </label>
      <h2>The stored value of the text field is {stringState}</h2>
    </div>
  )
}

export default Events
