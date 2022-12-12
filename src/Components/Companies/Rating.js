import React, { useState, useEffect } from "react";

const Rating = ({score}) => {
    let myStyle = '#bbb'

    if (score <= 0.33) {
        myStyle = 'green'
    }else if (score <= 0.67 && score >= 0.33) {
        myStyle = 'yellow'
    }else if (score <= 1 && score >= 0.67) {
        myStyle = 'red'
    }      
    return(
        <>
            <div style={{
                height: '1vw',
                width: '1vw',
                backgroundColor: myStyle,
                borderRadius: '50%',
            }}>
            </div>
        </>
    )
}

export default Rating;
