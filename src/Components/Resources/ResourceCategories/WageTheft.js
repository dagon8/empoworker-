import React from "react";
import "../ResourceCategories/ResourcesCSS/WageTheft.css";

const WageTheft = () => {
  return (
    <div className="container">
        <div className="wage-box">
          <div className= "header">Wage Theft</div>
          {/* <div className="wage-title">Wage Theft Violation</div> */}
          <div className="wage-description">
            Wage theft occurs any time an employer does not pay an employee everything the employee is owed by law.
          </div>

          <div className="wage-links">
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