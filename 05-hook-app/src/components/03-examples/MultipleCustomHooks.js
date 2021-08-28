import React from 'react'
import '../02-useEffect/effects.css'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
export const MultipleCustomHooks = () => {
    
    const{counter, increment}=useCounter(1);

    const state=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {loading,error,data}=state;

    
    const {author, quote}=!!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                        Loadign...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-3">{quote}</p>
                            <footer className="blockquote-footer">
                                {author}
                            </footer>
                        </blockquote>
                    )
            }
            
            <button className="btn btn-success"
                onClick={()=>increment(1)}
            >
                Siguiente frase
            </button>
            
            
        </div>
    )
}
