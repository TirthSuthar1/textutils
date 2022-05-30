import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title = 'TextUtils' about = "About TextUtils"/>
      <div className="container my-3" >
      <TextForm heading = "Enter your text here to analyze"/>
      </div>
    </>
  );  
}

export default App;
