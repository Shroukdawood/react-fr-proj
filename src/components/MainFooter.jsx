import React from 'react'
import { useCounterContext } from '../contexts/CounterContext'

export default function MainFooter() {
 const {counter , Increment } = useCounterContext();
 
  return (
   <footer><h2>footer {counter}</h2>
   <button onClick={Increment }>Increment</button>
   </footer>
  )
}
