import React, { useEffect } from 'react'
import { useRef } from "react"
import "./theme.css"
import myContext from './Context/Context.jsx'
const Theme = () => {
    //useRef to directly access and manipulate DOM element for theme switchting
    const themeRef = useRef(null);
    const buttonRef = useRef(null);
    const { count, setCount } = React.useContext(myContext);

    const toggleTheme = ()=>{
        const currentTheme = themeRef.current.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark':'light';

        themeRef.current.setAttribute('data-theme', newTheme);

        buttonRef.current.textContent= newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';

        localStorage.setItem('theme', newTheme);
    }

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme') || 'light';
        themeRef.current.setAttribute('data-theme', savedTheme);
        buttonRef.current.textContent = savedTheme==="light"? '🌙 Dark Mode' : '☀️ Light Mode';

    }, [])

  return (
    <div ref={themeRef} data-theme="light" className="theme-container">
      <h1>{count}</h1>
        <div className="content">
        <h1>React Theme Switcher</h1>
        <p>This is a simple theme switcher using useRef hook.</p>
        
        <div className="card">
          <h3>Sample Card</h3>
          <p>This card demonstrates how the theme changes affect different elements.</p>
          <ul>
            <li>Background colors change</li>
            <li>Text colors adapt</li>
            <li>Border colors update</li>
          </ul>
    </div>
    </div>
    <button 
    ref={buttonRef}
    onClick={toggleTheme}
    className="theme-toggle-btn"
    >
        🌙 Dark Mode
    </button>

    <div className="feature-showcase">
          <h3>Features Demonstrated:</h3>
          <div className="feature-grid">
            <div className="feature-item">
              <strong>useRef for DOM manipulation</strong>
              <p>Direct theme attribute updates</p>
            </div>
            <div className="feature-item">
              <strong>localStorage persistence</strong>
              <p>Theme preference saved</p>
            </div>
            <div className="feature-item">
              <strong>CSS variables</strong>
              <p>Dynamic color switching</p>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Theme