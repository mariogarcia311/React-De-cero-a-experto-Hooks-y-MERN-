import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log('me volvi a generar xd')
    return (
        <button
            className="btn btn-primary"
            onClick={()=>{
                increment();
            }}
        >
           hola 
        </button>
    )
})
