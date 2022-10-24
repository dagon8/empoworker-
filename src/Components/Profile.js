import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom"

const Profile = () => {
    let location = useLocation()
    let company = location.pathname.slice(9)
    const [companyInfo, setCompanyInfo] = useState(null)

    useEffect(() => {
        console.log('company', company)
        fetch(`https://empoworker475-default-rtdb.firebaseio.com/companies/${company}.json`)
        .then(response => response.json())
        .then(jsonRes => {setCompanyInfo(jsonRes)})
    }, [])
    

  return (
    <div>
        {
            companyInfo
            &&
            <div>
                <h1>{companyInfo['trade_nm']}</h1>
                <p>{`${companyInfo['street_addr_1_txt']}, ${companyInfo['cty_nm']}, ${companyInfo['st_cd']}`}</p>
                <p>{`${companyInfo['naic'].naics_code_description}`}</p>
                <p>Description</p>

            </div>
            
        }
    </div>
    
  )
}

export default Profile