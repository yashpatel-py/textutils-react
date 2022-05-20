import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* Importing navbar component */}
      <Navbar title = "TU" aboutText= "About us" />

      {/*Importing TextForm component */}
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
