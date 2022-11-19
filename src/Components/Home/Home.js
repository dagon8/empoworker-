import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
//import ViolationGlossary from '../Resources/ViolationGlossary/ViolationGlossary';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='home-container'>
      <div className='left-home'>
        <p className='left-title'>Empoworker</p>
        <p className='left-sub'>
          View violations. <br /> Prevent Harm.
        </p>
      </div>

      <div
        className='right-container'
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/search")}
      >
        <div className='right-home'></div>
        <p
          style={{
            margin: "0px",
            padding: "0px",
            top: "43%",
            left: "10%",
            color: "#101f2d",
          }}
          className='right-title'
        >
          Start searching <br /> your company
        </p>
      </div>
    </div>
  );
}
