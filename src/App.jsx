import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Home from './Home'
import Notfound from './notfound'
import Login from './Login'
import About from './About'
import Mycomp from './Mycomp'

function App() {

  return (
    <>
<nav>
  Hello
</nav>
    <BrowserRouter>
      <div className="App">
      <AppRoutes />
       
      </div>
    </BrowserRouter>


    {/* <Mycomp /> */}
    </>
  )
}

export default App
