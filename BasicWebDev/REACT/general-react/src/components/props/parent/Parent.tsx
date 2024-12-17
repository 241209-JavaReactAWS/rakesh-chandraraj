import { createContext, useState } from "react"
import "./Parent.css"
import Child from "../child/Child"

export const valueContext = createContext(0)

/*
As mentioned before, to have the same state variable in multiple locations, we need to find the common 
ancestor between the components and define the state there. From there, the variable and sometimes setter 
functions are passed down through props to the desired component 
*/
function Parent() {

  const[nameValue, setNameValue] = useState("Me")

  let toggleName = () => {
    // if (nameValue === "Me") {
    //     setNameValue("John")
    // } else {
    //     setNameValue("Me")
    // }
    // // Is equivalent to
    setNameValue(nameValue === "Me" ? "John" : "Me")

    // Ideally, when we have the nameValue state variable change, we'll see updates in our 
    // rerender components 
  }

  return (
    <valueContext.Provider value={42}>
      <div className="parent">
        <h1>Hello from out Parent Component!</h1>
        <h1>The value stored in nameValue is {nameValue}</h1>
        <button onClick={toggleName}>Toggle Name!</button>
        <Child name={nameValue} setName={setNameValue}/>
      </div>
    </valueContext.Provider>
  )
}

export default Parent
