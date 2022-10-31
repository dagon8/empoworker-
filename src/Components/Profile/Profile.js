import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import ViolationsTable from "../ViolationsTable";
import "./Profile.css"

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
    <div className='profile-container'>
        {
            companyInfo
            &&
            <div>
                <div className='profile-location'>{`${companyInfo['cty_nm']}, ${companyInfo['st_cd']} | ${companyInfo['naic'].naics_code_description}`}</div>
                <br></br>
                
                <div className='profile-name-container'>
                    <div className='profile-name'>{companyInfo['trade_nm']}</div>
                    <div className='profile-total-violations'>Total Case Violations: {`${companyInfo['violations'].case_violtn_cnt.count}`}</div>
                </div>

                <div className='profile-description'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>This company has received:</p>
                </div>

                <div className='profile-violations-container'>
                    {/* <ViolationsTable companyData={companyInfo}></ViolationsTable> */}
                </div>

            </div>
            
        }
    </div>
    
  )
}

export default Profile