import React from 'react';
import './backdrop.css';

const Backdrop = ({ show, click }) => {
    return (
        // show가 true라면 옆에 div
        show && <div className="backdrop" onClick={click}>

        </div>
    )
};

export default Backdrop;