
/*
This function needs to receive values from its parnet component that contain the stateful variable 
AND the update function to update it 
*/

interface SharedCounterProps {
  counterValue: number,
  setCounterValue: (counterValue: number) => void
}

function sharedCounter(props: SharedCounterProps) {
  return (
    <div>
      <p>Shared Value for Counter is {props.counterValue}</p>
      <button onClick={() => props.setCounterValue(props.counterValue + 1)}>Increment shared counter</button>
    </div>
  )
}

export default sharedCounter
