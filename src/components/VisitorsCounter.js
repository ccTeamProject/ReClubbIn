import React, {useEffect, useState} from 'react';
import './VisitorsCounter.css'

const VisitorsCounter = () => {
    const [randomVisitors, setRandomVisitors] = useState('');
    useEffect(() => {
        setRandomVisitors(Math.floor(Math.random() * 250));
        return () => {
        }
    }, [])

    return (
        <div className='visitors-counter'>
                <div className='visitors-bg'></div>
                <div className='visitors-text'>{randomVisitors} 💃🕺 </div>
        </div>
    );
};

export default VisitorsCounter;