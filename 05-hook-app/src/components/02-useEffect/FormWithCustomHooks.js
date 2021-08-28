import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import './effects.css'
import { Message } from './Message';

export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
    })

    const {name,email, password}=formValues;
    useEffect(()=>{
        // console.log('holi')
    },[]);
    
    useEffect(()=>{
    //    console.log('form cambia')
    },[formValues]);
    useEffect(()=>{
        //  console.log('email cambia')
    },[email]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hooks</h1> 
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
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            {(name==='123') && <Message key={name} name={name} />}

           
        </form>
    )
}