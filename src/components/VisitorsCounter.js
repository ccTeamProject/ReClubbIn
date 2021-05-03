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
            <p>There are
                <div>{randomVisitors} </div>
                with you in this room
            </p>
        </div>
    );
};

export default VisitorsCounter;