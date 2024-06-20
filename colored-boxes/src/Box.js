import react from 'react';
import './Box.css'
import React from 'react';

const Box = ({color, width, height, deleteBox}) => {
    return (
        <React.Fragment>
            <div className='Box' style={{backgroundColor: color, width: `${width}vw`, height: `${height}vh`}} data-testid={`${color}${width}${height}`}>
            </div>
            <button className='Box-button' onClick={deleteBox} data-testid={`${color}${width}${height}button`}>X</button>
        </React.Fragment>
        
    )
}

export default Box;
