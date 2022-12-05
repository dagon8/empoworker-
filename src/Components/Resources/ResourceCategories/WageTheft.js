import React from "react";
import "../ResourceCategories/ResourcesCSS/WageTheft.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid } from '@mui/material'


const WageTheft = () => {
  return (
    <div className="page-container">
        
        <div className="learn-box">
          <div className="learn-title"> Wage Theft </div>
        </div>
        
        <div className="wage-box">
          <div className="wage-subheader1">What is Wage Theft?</div>
          <br></br>
          <div className="wage-description">
           { Descriptions.wage_theft.category_description}
          </div>

          <br></br>
          <div className="wage-subheader"> Violations under wage theft:</div>

          <div className="line-div">-</div>


          <div className="the-container">
            <div className="row1">
              <div className="column"> 
                <div className="name1"> {Descriptions.wage_theft.violations.sca_violtn_cnt.expanded_name}: 
                  <div className="name1-des">
                  {Descriptions.wage_theft.violations.sca_violtn_cnt.violation_description}
                  </div>
                </div>
              </div>
              <div className="column"> 
                <div className="name2"> {Descriptions.wage_theft.violations.fmla_violtn_cnt.expanded_name}: 
                <br></br>
                {Descriptions.wage_theft.violations.fmla_violtn_cnt.violation_description}
                </div>
              </div>
            </div>
          </div>


          <div className="wage-links">
          Helpful Links
            <div className="wage-report">
                <a href="https://www.mass.gov/how-to/file-a-workplace-complaint" target="_blank" rel="noopener noreferrer">
                    Report Wage Theft
                  </a>
            </div>

            <div className="wage-laws">
                <a href="https://www.mass.gov/guides/pay-and-recordkeeping" target="_blank" rel="noopener noreferrer">
                  Fair Labor Division Multilingual Resources
                </a>

                  <br></br>

                <a href="https://www.mass.gov/guides/pay-and-recordkeeping" target="_blank" rel="noopener noreferrer">
                  Massachusetts Wage Laws
                </a>

                  <br></br>

                <a href="https://www.mass.gov/guides/breaks-and-time-off" target="_blank" rel="noopener noreferrer">
                  Breaks and Time Off
                </a>
            </div>
          </div>

          
        </div>
    </div>
   
  )
  };
  
  export default WageTheft;