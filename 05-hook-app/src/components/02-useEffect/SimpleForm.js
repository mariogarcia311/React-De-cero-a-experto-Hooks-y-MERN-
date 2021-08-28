import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:'',
        })

    const {name,email}=formState;
    useEffect(()=>{
        // console.log('holi')
    },[]);
    
    useEffect(()=>{
    //    console.log('form cambia')
    },[formState]);
    useEffect(()=>{
        //  console.log('email cambia')
    },[email]);


    const handleInputChange=({target})=>{
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }

    return (
        <>
            <h1>useEffec</h1> 
            <hr/>  

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name==='123') && <Message key={name} name={name} />}
        </>
    )
}
