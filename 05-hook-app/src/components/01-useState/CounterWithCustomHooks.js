import React from 'react'
import { useCounter } from '../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHooks = () => {

    const {state:counter, increment, decremen, reset}=useCounter();
    return (
        <>
         <h1>Counter With Hook {counter}</h1> 
         <hr/>

         <button onClick={()=>increment(2)} className="btn">+1</button>
         <button onClick={reset} className="btn">-1</button>  
         <button onClick={()=>decremen(2)} className="btn">reset</button>  
        </>
    )
}
