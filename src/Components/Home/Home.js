import * as React from 'react';
import './Home.css'
//import ViolationGlossary from '../Resources/ViolationGlossary/ViolationGlossary';



export default function Home() {
  return (
    <div className='home-container'>
      <div className='left-home'>       
        <p className='left-title'>Empoworker</p>
        <p className='left-sub'>View violations <br/> & prevent working in bad ones.</p>
      </div>

      <div className='right-home'>
        <p className='right-title'>Start searching <br/> your company</p>
      </div>
    </div>
  );
}
