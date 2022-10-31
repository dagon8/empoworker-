import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import ViolationsTable from "./ViolationsTable";

const Profile = () => {
    let location = useLocation()
    let company = location.pathname.slice(9)
    const [companyInfo, setCompanyInfo] = useState(null)

    useEffect(() => {
        fetch(`https://empoworker475-default-rtdb.firebaseio.com/companies/${company}.json`)
        .then(response => response.json())
        .then(jsonRes => {
            if(jsonRes == null){
                window.location.assign("../error");
            }else{
                setCompanyInfo(jsonRes)
            }
            
        })

    }, [])

  return (
    <div>
        {
            companyInfo
            &&
            <div>
                <h1>{companyInfo['trade_nm']}</h1>
                <p>Location: {`${companyInfo['street_addr_1_txt']}, ${companyInfo['cty_nm']}, ${companyInfo['st_cd']}`}</p>
                <p>Industry: {`${companyInfo['naic'].naics_code_description}`}</p>
                <p>Description not available.</p>
                <p>
                    Total Case Violations: {`${companyInfo['violations'].case_violtn_cnt.count}`} | 
                    Total Fair Labor Standard Act (FLSA) Violations: {`${companyInfo['violations'].flsa_violtn_cnt.count}`} | 
                    FLSA Repeat Violator: {`${companyInfo['violations'].flsa_repeat_violator}`}
                </p>
                <br></br>
                <div>
                    <ViolationsTable companyData={companyInfo}></ViolationsTable>
                </div>

            </div>
            
        }
    </div>
    
  )
}

export default Profile