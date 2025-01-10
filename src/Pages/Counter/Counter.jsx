import React, { useState } from 'react'
import CounterDisplay from './component/CounterDisplay'
import CounterBtn from './component/CounterBtn'

export default function Counter() {
   const [counterValue , setCounterValue] = useState(10);
   
    const handelIncremment = () => {console.log("Incremment", setCounterValue(counterValue+1) )};
    const handelDecrement = () => {console.log("Decremment" , setCounterValue(counterValue-1))};
    const handelClear= () => { console.log("Clear" , setCounterValue(0))};
 const btnActions = [{
 handelClick:handelIncremment, color:"btn-success", name:"Increment"
 },
 {
    handelClick:handelDecrement, color:"btn-danger", name:"Decrement"
    },{
        handelClick:handelClear, color:"btn-warning", name:"Clear"
        }]; 
    return (
    <section className='text-center'> 
<CounterDisplay counterValue={counterValue}/>
{btnActions.map((btnActions,i) => {
    return (<CounterBtn key={i} {...btnActions}/>)
})}
    </section>
  )
}
