import React from 'react'
import { useState } from 'react'
const User = () => {

    const [user, setUser ] = useState({
        name:"",
        email:"",
        password:""

    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        setUser({
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value
        })

        console.log(user);
    }
  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input label="Name" type='text' placeholder='Enter your name'></input>
            <input label="Email" type='email' placeholder='Enter your email'></input>
            <input label="Password" type='password' placeholder='Enter your password'></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default User