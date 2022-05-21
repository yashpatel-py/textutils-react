import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
      {/* Importing navbar component */}
      <Navbar title = "TU" aboutText= "About us" />

      {/*Importing TextForm component */}
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>

      {/* <AboutUs /> */}
    </>
  );
}

export default App;
