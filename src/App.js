import { React, useState } from "react";
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
    <div className="main">
      <CompanySearch input ={inputText}/>
    </div>
  );
}

export default App;
