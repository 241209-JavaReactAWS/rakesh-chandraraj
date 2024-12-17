import { useState } from "react";

function counter() {
  /*
  To achieve state in our functional component, we'll use the useState Hook. 
  What is a hook?
  - Hooks are special methods that start with "use" and are leveraged by functional components to 
    "hook" into various life cycle methods for the component 
  */

  // We'll get started by using useState to add in a variable to control the state of the component
  const [counterValue, setCounterValue] = useState(0);
  /*
  First, the right side of this statement leverages useState to decalre a new state variable and give it 
  a base value 
  Second, the right side also gives a setter function. We'll leverage the setCounterValue function to 
  manipulate the state 
  What is []=useState()? Since useState returns 2 things, we can destructure them into 2 separate 
  variables using this syntax 
  */

  /*
  Inside of this component, I want to do several things: 
  - Create a button that increments the value of a counter 
    - Event Handle is needed 
    - Keep track of the value itself 
  */
    
  // The component will rerender, calling this statement again
  // That means that this variable will be reinitialized to 0
//   let counter = 0;

  let doSomething = () => {
    // console.log("Did something!")
    // counter++;
    // console.log(counter);

    // use the state setter to update the state 
    setCounterValue(counterValue + 1)
  };

  /*
  counter is being incremented, but it's not updating in the page (button is clicked 0 times), 
  So how can we get this to render on the page 
  SOLUTION: Use STATE 

  What is State?
  - State is a representation of the data held inside a component 
    - It can be used to dynamically rerender things as the value changes 
    - To do this, we need to use a HOOK 
  */

  return (
    <div>
      {/* <p>Button has been clicked {counter} times</p> */}
      <p>(StateFul) Button has been clicked {counterValue} times</p>
      {/* Basic event handling can be done by using the "on..." notation and adding in the function 
      to be executed */}
      <button onClick={doSomething}>Click me to do something!</button>
    </div>
  );
}

export default counter;
