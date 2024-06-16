// App.js
import React, { useState, useEffect } from 'react';
import { MdLightMode } from "react-icons/md";
import "./Modes.css"
import { MdDarkMode } from "react-icons/md";
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <button onClick={toggleTheme}> 
      
         {theme === 'light' ? <MdLightMode/> : <MdDarkMode/>} 
      </button>
     
    </div>
  );
}

export default App;
