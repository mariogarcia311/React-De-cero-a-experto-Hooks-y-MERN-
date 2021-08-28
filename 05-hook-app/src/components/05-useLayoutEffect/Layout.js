import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';


import './Layout.css';
export const Layout = () => {
    
    const{counter, increment}=useCounter(1);

    const state=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
   
    const {error,data}=state;
    const {quote}=!!data && data[0];
    
    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect( () =>  {
        setBoxSize(pTag.current.getBoundingClientRect() )

    },[quote])
    

    return (
        <div>
            <h1>Layout effect</h1>
            <hr />
            
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-3"
                    ref={pTag}
                >
                    {quote}
                            
                </p>
                            
            </blockquote>
                    
            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>
            
            <button className="btn btn-success"
                onClick={()=>increment(1)}
            >
                Siguiente frase
            </button>
            
            
        </div>
    )
}
