import * as React from 'react';
import {useState, useEffect} from 'react';
import ViolationAccordion from './ViolationAccordion'

export default function ViolationsTable({companyData}) {
  const [viols, setViols] = useState(null)

  async function getData(key) {
    fetch(`https://empoworker475-default-rtdb.firebaseio.com/violations/${key}.json`)
    .then(response => response.json())
    .then(jsonRes => {
        if(jsonRes == null){
            window.location.assign("../error");
        }else{
            setViols(jsonRes)
            return jsonRes
        }
    })
  }



  function createData(nm, cnt, des, exnm) {
    return {nm, cnt, des, exnm};
  }
  
  const rows = [];

  async function fillRows() {
    let violations = companyData.violations
    for(const key in violations){
      if (key === "flsa_repeat_violator" || key === "flsa_violtn_cnt" || key === "case_violtn_cnt" || violations[key].count == 0) {
        continue
      }
      let name = violations[key].violation_name
      let count = violations[key].count
      getData(key)
      let violationsData = viols
      console.log(violationsData)
      rows.push(createData(name, count, violationsData.description, violationsData.expanded_name))
    }
  }

  fillRows()


  return (
    <>
        {rows.map((v) => (
          <div>
              <ViolationAccordion name={v.nm} count={v.cnt} description={v.des} expanded={v.exnm}></ViolationAccordion>
              <br></br>
          </div>
        ))}
    </>
  );
}
