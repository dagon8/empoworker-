import { React, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from "./Components/Profile";
import Resources from "./Components/Resources/Resources";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import './App.css'; 
import CompanySearch from "./Components/CompanySearch";

function App() {
  return ( 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CompanySearch/>}/>
        <Route path="/company/:name" element={<Profile/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
