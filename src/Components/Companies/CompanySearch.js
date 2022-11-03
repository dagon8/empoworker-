import React, { useState, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import './CompanySearch.css';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CompanyCard from './CompanyCard';
import { borderColor } from '@mui/system';

function CompanySearch(props){

    const[value, setValue] = useState('');
    const[result, setResult] = useState([]);

    const search = () => {
        if(value.length > 0){
            fetch('https://empoworker475-default-rtdb.firebaseio.com/companies.json').then(
                // when it's finished requesting the data 
                response => response.json()
                // to have access to the javascript object
            ).then(responseData => {
                console.log(responseData)
                // clear array results so the search will start from stratch
                setResult([]);
                let searchQuery = value.toLowerCase(); 
                // loop through response data so you can loop through the companies
                for(const key in responseData){
                    // get the trade name of each company
                    let company = responseData[key].trade_nm.toLowerCase();
                    // returns the first character of the search word
                    // e.g. if we type in "pear" it's not going to match with "apple" 
                    // because the 'p' is not at the start of "apple"
                    if(company.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
                        // if we type 'p', it will return "pineapple, pear, peach"
                        setResult(prevResult => {
                            return [...prevResult, [key, responseData[key]] ]
                        })
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            // once the user deletes their input or they don't type anything in
            console.log('no result')
            setResult([]);
        }
    }
   

    return (
<<<<<<< HEAD:src/Components/CompanySearch.js
        <div className='container'>
            <div className="bar-button-container">
                <div className="header">
                    Empoworker
                </div>
                <div className="SearchBar">
                    <TextField
                    id="outlined-basic"
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    size="small"
                    InputProps={{ startAdornment:<InputAdornment position="start"> 
                    <SearchIcon />
                    </InputAdornment>
                    }}
                    />
                </div>
=======
        <div className="main">
            <div className="SearchBar" style={{display: "flex"}}>
            
            <TextField
            id="outlined-basic"
            onChange={(event) => setValue(event.target.value)}
            value={value}
            variant="outlined"
            fullWidth
            label="Enter Company Name"
            onKeyPress= {(e) => {
                if (e.key === 'Enter') {
                  search()
                }
            }}
            
            />
            <button onClick={() => search()} style={{backgroundColor: "#FF7A40", border: "none", width: "100px", borderRadius: "4px", cursor: "pointer" }}><p style={{fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold"}}>Search</p></button>
>>>>>>> bc3036af77cfd57412d0694dcb0f4499b9ba537d:src/Components/Companies/CompanySearch.js

                <div className="searchButton">
                    <Button
                    variant="contained"
                    color="warning"
                    size="medium"
                    sx={{textTransform:"none",
                    color: "black"}}
                    > Search </Button>
                </div>

                <div className="nav-button">
                    <Button
                    size="small"
                    sx={{textTransform:"none",
                    color: "black"}}> Resources </Button>
                </div>

                <div className="nav-button contact-button">
                    <Button 
                    size="small"
                    variant="outlined"
                    sx={{textTransform:"none",
                    color: "black", 
                    borderColor:"black", 
                   }}> Contact Us </Button>
                </div>
            </div>
            
            {/* these are the search results */}
            <div className="searchBack">
                {/* loop through result and display all the values */}
                {result.map((company, index) => {
                    return (
                        <div className='searchEntry' key={index}>
                            <CompanyCard name={company[0]} info={company[1]}/>
                            <br/>
                        </div>
                )})}
            </div>
        </div>
    )
}
export default CompanySearch