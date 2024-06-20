import react from 'react';
import './Box.css'
import React from 'react';

const Box = ({color, width, height, deleteBox}) => {
    return (
        <React.Fragment>
            <div className='Box' style={{backgroundColor: color, width: `${width}vw`, height: `${height}vh`}}>
            </div>
            <button className='Box-button' onClick={deleteBox}>X</button>
        </React.Fragment>
        
    )
}

export default Box;
