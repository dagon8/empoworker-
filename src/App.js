import { React, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from "./Components/Profile";
import Error from "./Components/Error";
import './App.css'; 
import CompanySearch from "./Components/CompanySearch";

function App() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    // convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };



  return ( 
    <Router>
      <div className="main">
        <CompanySearch input ={inputText}/>
      </div>
      <Routes>
        <Route path="/" element={<CompanySearch input={inputText}/>}/>
        <Route path="/company/:name" element={<Profile/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
