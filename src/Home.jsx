import React from 'react'
import { Link } from 'react-router-dom'
 

const Home = () => {
  return (
    <div>
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
        <Link to="about">About</Link>
        <Link to="login">Login</Link>
      </div>
    </>
    </div>
  )
}

export default Home