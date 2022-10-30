import React, { useState, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import CompanyCard from './CompanyCard';

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
                            return [...prevResult, [key, responseData[key]] ]
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
        <div className="main">
            <h1>Company Search</h1>
            <div className="SearchBar">
            <TextField
            id="outlined-basic"
            onChange={(event) => setValue(event.target.value)}
            value={value}
            variant="outlined"
            fullWidth
            label="Enter Company Name"
            />

            </div>
            
            <div className='searchBack'>
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