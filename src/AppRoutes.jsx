import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default AppRoutes