import React from 'react'

const Home = () => {
  return (
    <div style={{margin: "auto",display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "orange", width: "50vw", height: "50vh", }}>
        <div style={{ overflow:"hidden"}}>

            <div style={{position: "relative"}}>


                <div style={{height: "10px", width: "10px"}}>
                    <p style={{color: "yellow", float: "left"}}>Empoworker</p>
                </div>

                <div style={{ overflow: "hidden", position: "absolute", top: "0", left: "0"}}>
                    <div>View violations &amp; </div>
                    <div> identify harmful employers</div>
                </div>
                
            </div>

            <div >
                right
            </div>
        </div>
    </div>
  )
}

export default Home