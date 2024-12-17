/*
So before we had to perform PROP DRILLING (generally bad), which involved passing props down through 
related components (that may or may not need the required value) 

To resolve this, we can use the useContext hook to declare a value that can be shared amongst different 
componetns without prop drilling 
*/

import { createContext } from "react";
import ContextConsumer1 from "./ContextConsumer1";
import ContextConsumer2 from "./ContextConsumer2";

// This context object behaves a lot like a shared variable
export const stringContext = createContext("Default String");

function ContextProvider() {
  return (
    <div>
      <stringContext.Provider value={"Initial String"}>
        {/* Inside of this provider tag, we'll have ALL of the components that we want to receive this
        value, and it'll also be accessible by child components */}
        <ContextConsumer1 />
        <ContextConsumer2 />
        {/* NOTICE: The value is NOT being passed as props */}
      </stringContext.Provider>
    </div>
  );
}

export default ContextProvider;
