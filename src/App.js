import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs'

function App() {
  const [mode, setMode] = useState('dark')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* Importing navbar component */}
      <Navbar title = "TU" aboutText= "About us" mode={mode} toggleMode={toggleMode}/>

      {/*Importing TextForm component */}
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
      </div>

      {/* <AboutUs /> */}
    </>
  );
}

export default App;
