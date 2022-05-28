import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs'
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  // Stat for light and dark mode
  const [mode, setMode] = useState('light');

  // State for alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return(
    <>
      <Router>
          
        {/* Importing navbar component */}
        <Navbar title="TU" aboutText="About us" mode={mode} toggleMode={toggleMode} />

        {/* Alert */}
        <Alerts alert={alert} />

        {/*Importing TextForm component */}
          <div className="container">
        <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
            <Route path='/about' element={<AboutUs />} />
        </Routes>
            
          </div>
      </Router>
    </>
  );
}

export default App;
