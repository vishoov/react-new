import React from "react";
import { createContext } from "react";


//create the context object
const myContext = createContext(null);
//null -> default value if no provider is used

//Create a provider component 
const MyContextProvider = ({children})=>{
    const [count, setCount] = React.useState(0);
    return (
        <myContext.Provider value={{ count, setCount }}>
            {/* children will be the components that use this context */}
            {children}
        </myContext.Provider>
    )
}


export { myContext, MyContextProvider };
export default myContext;



