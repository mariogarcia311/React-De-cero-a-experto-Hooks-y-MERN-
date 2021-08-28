import React, { useEffect, useState } from 'react'

export const Message = ({name}) => {

    const [coords, setCoords] = useState({x:0,y:0})
    const{x,y}=coords;

    useEffect(() => {

        const mouseMove=(e)=>{
            // console.log(e)
            const coords={x:e.x, y:e.y};
            setCoords(coords);
            // console.log(coords);
        }

        window.addEventListener('mousemove',mouseMove)

        console.log('componente montado')
        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }

       

    }, [])
    return (
        <div>
            <h3>eres genial {name} </h3>
            <p>
                x:{x},y:{y}
            </p>
        </div>
    )
}
