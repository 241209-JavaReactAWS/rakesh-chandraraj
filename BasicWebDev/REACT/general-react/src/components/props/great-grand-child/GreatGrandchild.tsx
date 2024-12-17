import { useContext } from "react"
import { ChildProps } from "../ChlidProps"
import "./GreatGrandchild.css"
import { valueContext } from "../parent/Parent"

function GreatGrandchild(props: ChildProps) {

  // They will consume the context through useContext 
  let valueContextReference = useContext(valueContext)

  return (
    <div className="great-grandchild">
      <h4>Hello from the Great Grandchild Component!</h4>
      <h4>I care about having the name value</h4>
      <h4>The name that I've received is {props.name}</h4>
      <button onClick={() => {props.setName(props.name === "Me" ? "John" : "Me")}}>Toggle Name!</button>
      <h4>The value I have received is {valueContextReference}</h4>
    </div>
  )
}

export default GreatGrandchild
