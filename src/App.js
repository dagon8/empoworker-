import { React, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from "./Components/Companies/Profile";
import Resources from "./Components/Resources/Resources";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import './App.css'; 
import CompanySearch from "./Components/Companies/CompanySearch";

function App() {
  return ( 
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/search" element={<CompanySearch/>}/>
        <Route exact path="/company/:name" element={<Profile/>}/>
        <Route exact path="/resources" element={<Resources/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
