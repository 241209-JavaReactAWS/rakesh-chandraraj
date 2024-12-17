import { useState } from "react";
import SharedCounter from "../shared-counter/SharedCounter";
import Counter from "../counter/Counter";

/*
This class will be a container class to showcare off lifting state and how each compnent manages its
own state 
*/
function CounterContainer() {
  // When lifting state, define the state variable inside of the common ancestor component and pass both
  // the value and update function to the child

  const [sharedCounterValue, setSharedCounterValue] = useState(0)

  return (
    <div>
      {/* In this intial implementation, the counters keep track of their own state individually
          This means they can separate values for individual counter. 

          What if we want to change that?
          What if I wanted to hold the current value inside of this container class and anytime either 
          button is clicked, we'll update the value 

          Recall that data flows one-way in React: from parent component to child component 
          How do I tell a parent component to update its state when the data only flows downward?

          SOLUTION: Lifting state 

          If you have multiple components sharing the same state variable, you need to "lift" the state
          to their common ancestor component (in this case, it's the CounterContainer for the Counter)
      */}
      <h1>Non-Shared State</h1>
      <Counter />
      <Counter />

      <h1>Shared State via Lifted State in Parent Component:</h1>
      <SharedCounter counterValue={sharedCounterValue} setCounterValue={setSharedCounterValue}/>
      <SharedCounter counterValue={sharedCounterValue} setCounterValue={setSharedCounterValue}/>
    </div>
  );
}

export default CounterContainer;
