import { ChildProps } from "../ChlidProps"
import Grandchild from "../grandchild/Grandchild"
import "./Child.css"

function Child(props: ChildProps) {
  return (
    <div className="child">
      <h2>Hello from the Child Component!</h2>
      <h2>I don't care about having the name</h2>
      <Grandchild name={props.name} setName={props.setName}/>
    </div>
  )
}

export default Child
