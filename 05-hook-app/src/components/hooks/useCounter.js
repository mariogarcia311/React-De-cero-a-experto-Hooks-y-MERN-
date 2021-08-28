import { useState } from "react"


export const useCounter = (initialState=1) => {
    const [counter, setCounter] = useState(initialState);
    const increment=(factor=1)=>{
        setCounter(counter+factor);
    }
    const decremen=(factor=1)=>{
        setCounter(counter-factor);
    }
    const reset=()=>{
        setCounter(initialState);
    }
    return {
        counter,
        increment,
        decremen,
        reset
    };
}
