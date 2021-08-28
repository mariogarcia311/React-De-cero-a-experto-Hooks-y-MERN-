import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {
    const [counter, setCounter] = useState(10);

    // const increment=()=>{
    //     setCounter(counter+1)
    // };
    const increment=useCallback(
        () => {
            setCounter(c=>c+1);
        },
        [setCounter],
    )
    useEffect( () => {
        
    }, [increment] )
    
    return (
        <div>
            <h1>useCallback Hook:  {counter}  </h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
