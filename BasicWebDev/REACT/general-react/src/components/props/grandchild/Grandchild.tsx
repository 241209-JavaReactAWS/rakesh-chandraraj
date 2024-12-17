import { ChildProps } from "../ChlidProps"
import GreatGrandchild from "../great-grand-child/GreatGrandchild"
import "./Grandchild.css"

function Grandchild(props: ChildProps) {
  return (
    <div className="grandchild">
      <h3>Hello from the Grandchild Component!</h3>
      <h3>I don't care about having the name value</h3>
      <GreatGrandchild name={props.name} setName={props.setName}/>
    </div>
  )
}

export default Grandchild
