import React from "react";
import { useState, useEffect } from "react";
import {  getDatabase, ref, onValue } from 'firebase/database';
import { db } from "../Util/fire-config";

function CompanyList(){

    const [companyList, setCompanyList] = useState();

    useEffect(() => {
      const database = getDatabase();
      const companyRef = ref(database, '/companies');
      onValue(companyRef, (snapshot) => {
        const data = snapshot.val();
        const companyList = []
        for (let id in data){
          companyList.push(data[id])
        }
        console.log(companyList);
        setCompanyList(companyList);
      });
    }, []);

    return(
        <div> 
          {companyList ? companyList.map((company, index) => <li key ={index}>{company.trade_nm}</li>) : ''}    
        </div>
    );
}

export default CompanyList