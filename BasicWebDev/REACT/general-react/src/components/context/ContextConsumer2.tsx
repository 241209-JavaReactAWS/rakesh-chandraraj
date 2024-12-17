import { useContext } from "react"
import { stringContext } from "./ContextProvider"

function ContextConsumer2() {

  const stringContextReference2 = useContext(stringContext)

  return (
    <div>
      <h1>2: String value is {stringContextReference2}</h1>
    </div>
  )
}

export default ContextConsumer2
