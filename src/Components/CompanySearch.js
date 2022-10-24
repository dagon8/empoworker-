import React, { useState, useEffect} from 'react';
import CompanyCard from './CompanyCard';

function CompanySearch(props){

    const[value, setValue] = useState('');
    const[result, setResult] = useState([]);

    useEffect(() => {
        if(value.length > 0){
            fetch('https://empoworker475-default-rtdb.firebaseio.com/companies.json').then(
                response => response.json()
               
            ).then(responseData => {
                setResult([]);
                let searchQuery = value.toLowerCase();
                for(const key in responseData){
                    let company = responseData[key].trade_nm.toLowerCase();
                    if(company.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
                        setResult(prevResult => {
                            return [...prevResult, [key, responseData[key]] ]
                        })
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            setResult([]);
        }


    }, [value])

   

    return (
        <div>
            <h1>Company Search</h1>
            <input type="text"
            className='searchBar'
            onChange={(event) => setValue(event.target.value)}
            value={value}
            />
            <div className='searchBack'>
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