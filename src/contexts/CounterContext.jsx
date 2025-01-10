import { createContext, useContext, useState } from "react";

const CounterContext = createContext({
    counter:0,
    Increment:() => {},
    Decrement:() => {},
    Clear:() => {},
})  
 
export const CounterProvider =({children}) => {
    const [counter , setCounter] = useState(10);
    const Increment = () => {
        console.log("Incremment" , setCounter((prev) => prev + 1));
        
    };
    const Decrement=() => {
        console.log("Decremment" , setCounter((prev) => prev-1));
        
    };
    const Clear = () => {
        console.log("Clear" , setCounter(0));
        
    };
   

    return (
    <CounterContext.Provider value={{counter,Increment,Decrement,Clear}}>
    {children}
    </CounterContext.Provider>
    )
};

export const useCounterContext = () => useContext(CounterContext);
