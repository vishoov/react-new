import React, { useEffect, useState } from 'react'
import { useRef } from 'react'


const Mycomp = () => {
    const [input, setInput]  = useState("")
    const inputRef = useRef(null)

    useEffect(()=>{
        console.log(inputRef);
        inputRef.current.focus();

    }, [])


    const handleClick = () =>{
        inputRef.current.value="Aur bhai kya haal"
        console.log("Clicked")
    }

  return (
    <div>
        <input 
        type='text'
        placeholder='I will be focused'
        ref={inputRef}
        onChange={(e)=>setInput(e.target.value)}
        />

        <button
        onClick={handleClick}
        >
            Focus Input
        </button>
    </div>
  )
}

export default Mycomp