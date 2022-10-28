import React, { useState, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import './CompanySearch.css';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


function CompanySearch(props){


    const[value, setValue] = useState('');
    const[result, setResult] = useState([]);

    useEffect(() => {
        // if user input is greater than 0
        if(value.length > 0){
            fetch('https://empoworker475-default-rtdb.firebaseio.com/companies.json').then(
                // when it's finished requesting the data 
                response => response.json()

                // to have access to the javascript object
            ).then(responseData => {
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
                            return [...prevResult, responseData[key].trade_nm]
                        })
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            // once the user deletes their input or they don't type anything in
            setResult([]);
        }


    }, [value])


    return (
        <div className='container'>
            <div className="bar-button-container">
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

                <div className="searchButton">
                    <Button
                    variant="contained"
                    color="warning"
                    size="medium"
                    sx={{textTransform:"none",
                    color: "black"}}
                    > Search </Button>
                </div>
            </div>
            
            {/* these are the search results */}
            <div className="searchBack">
                {/* loop through result and display all the values */}
                {result.map((result, index) => (
                        <div className="searchResults" key={index}>
                            {result}
                        </div>
                    
                ))}
            </div>
        </div>
    )
}
export default CompanySearch