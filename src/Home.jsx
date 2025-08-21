import React from 'react'
import { Link } from 'react-router-dom'

import { useContext, useEffect } from 'react'
import myContext from './Context/Context.jsx'

const Home = () => {
  const { count, setCount } = useContext(myContext);
useEffect(()=>{
  console.log("Count value:", count);
})
  return (

    <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>

         <>

      <h1>Welcome to the new poject</h1>
      <h1>React: What it does?</h1>
      <p>Single Page Applications</p>
      <p>Entire application loads once</p>
      <p>Javascript handles navigation between views</p>
      <p>URL changes without refreshes</p>
      <p>Better performace and user experience</p>

      <div className="another-one">
        <h1>Client-Side Routing</h1>
        <p>Browser URL should update without any server request</p>
        <p>History API : this manages backward and forward navigation</p>
        <p>Maintaining application state during navigation</p>
      </div>

      <div className="package">
        <h1> react-rouder-dom</h1>
      </div>

      <div>
        <a href="http://localhost:5173/dvfiofogbosbofbf" >Not Found</a>
        <br/>
        <Link to="about">About</Link>
        <br/>

        <Link to="login">Login</Link>
      </div>
    </>
    </div>

  )
}

export default Home