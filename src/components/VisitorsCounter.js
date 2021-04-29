import React from 'react';
import './VisitorsCounter.css'

const VisitorsCounter = () => {
    let randomVisitors = Math.floor(Math.random() * 250);
    return (
        <div className='visitors-counter'>
            <p>There are
                <div>{randomVisitors} </div>
                with you in this room
            </p>
        </div>
    );
};

export default VisitorsCounter;