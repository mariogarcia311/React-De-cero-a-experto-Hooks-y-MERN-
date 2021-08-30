import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContex'

export const MainApp = () => {

    const [user, setUser] = useState({})
    // const user={
    //     nombre:'mario',
    //     id:6413,
    //     email:'cholao@gmail.es',
    // }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
        
            <AppRouter />
        </UserContext.Provider>
    )
}
