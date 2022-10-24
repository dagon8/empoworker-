import { React, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TextField from "@mui/material/TextField";
import List from "./Components/DummyList";
import CompanyList from "./Components/CompanyListData";
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
      {/* <h1>Company Search</h1> */}
      {/* <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> */}
      {/* <List input ={inputText}/> */}
      {/* <CompanyList /> */} 
      {/* ^ will show list of companies */}
      <Routes>
        <Route path="/" element={<CompanySearch input={inputText}/>}/>
        <Route path="/company/:name" element={<Profile/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
      
  
  );
}

export default App;
