import React, { useState } from 'react'
import CounterBtn from './component/CounterBtn'
import CounterDisplay from './component/CounterDisplay'
import { useCounterContext } from '../../contexts/CounterContext';

export default function Counter() {
//  const [counter , setCounter] = useState(0);
 const {Increment,Decrement,Clear, counter } = useCounterContext();
  //   // const Increment = () => {
  //   // console.log("Incremment" , setCounterValue(counterValue+1));
    
  // };
  // const handelDecrement = () => {
  //   console.log("Decremment" , setCounterValue(counterValue-1));
    
  // };
  // const handelClear = () => {
  //   console.log("Clear" , setCounterValue(0));
    
  // };
  
    return (
    <section
    className='text-center'
    >
     <CounterDisplay 
     counterValue={counter}
     />   
<CounterBtn 
name="Increment"
color="btn-success"
handelClick={Increment}
/>
<CounterBtn 
name="Decrement"
color="btn-danger"
handelClick={Decrement}
/>
<CounterBtn 
name="Clear"
color="btn-warning"
handelClick={Clear}
/>
    </section>
  )
}
  