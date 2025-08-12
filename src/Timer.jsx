import React from 'react'
import { useRef, useState } from 'react';
const Timer = () => {

    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    const startTimer =()=>{

    // if(intervalRef.current) return;

      intervalRef.current =   setInterval(()=>{
            setCount(prev=>prev+1)
        }, 1000);

        
    }

    const stopTimer=()=>{
        if(intervalRef.current){
            clearInterval(intervalRef.current);
            // intervalRef.current=null;
        }
    }

    const fullStop=()=>{
        if(intervalRef.current){
            clearInterval(intervalRef.current);
            setCount(0);
        }
    }

  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Pause</button>
        <button onClick={fullStop}>Stop</button>

    </div>
  )
}

export default Timer