import React from 'react'

const Counter = () => {
const [ count, setCount ] = React.useState(0);

const handleClick = () =>{
   setCount(prev=>prev+1);
   setCount(prev=>prev+1);
   setCount(prev=>prev+1);
   setCount(prev=>prev+1);
   setCount(prev=>prev+1);
}

  return (
    <div>
        <button onClick={handleClick}>Count : {count}</button>
    </div>
  )
}

export default Counter