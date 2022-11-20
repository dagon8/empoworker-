import React from "react";
import "./Circles.css";

const Circles = ({ profile }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "45vw",
        height: "54vh",
        marginTop: "5px",
      }}
    >
      <div
        className='circle'
        id='circle1'
        style={{
          backgroundColor: "#F3FF67",
        }}
      >
        <p className='circleText'> Wage Theft</p>
        <p style={{ alignText: "center", fontSize: "30px" }}>
          {profile[1]["violations"]["wage_theft"]["category_total"]}
        </p>
      </div>

      <div className='circle' id='circle2'>
        <p className='circleText'>Worker's Rights</p>
        <p style={{ alignText: "center", fontSize: "30px" }}>
          {profile[1]["violations"]["migrant"]["category_total"]}
        </p>
      </div>

      <div className='circle' id='circle3'>
        <p className='circleText'>Safety & Health</p>
        <p style={{ alignText: "center", fontSize: "30px" }}>
          {profile[1]["violations"]["workplace_accident"]["category_total"]}
        </p>
      </div>

      <div className='circle' id='circle4'>
        <p className='circleText'>Child Labor</p>
        <p style={{ alignText: "center", fontSize: "30px" }}>
          {profile[1]["violations"]["child_labor"]["category_total"]}
        </p>
      </div>
    </div>
  );
};

export default Circles;
