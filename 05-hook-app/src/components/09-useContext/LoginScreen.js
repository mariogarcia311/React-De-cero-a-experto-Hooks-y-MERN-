import React, { useContext } from 'react'
import { UserContext } from './UserContex'

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext)
    return (

        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={()=>setUser({
                    nombre:'mario',
                    id:6413,
                    email:'cholao@gmail.es',
                })}
            >
                Add
            </button> 
        </div>
    )
}
