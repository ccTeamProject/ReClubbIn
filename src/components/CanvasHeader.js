import React from 'react';
import VisitorsCounter from './VisitorsCounter';
import VolumeControl from './VolumeControl';
import {NavLink} from 'react-router-dom';

const CanvasHeader = () => {
    return (
        <div className='canvas-header'>
            <VolumeControl />
            <button style={{height:"40px"}}> 
                <NavLink to="/genres">back to genre-selection</NavLink>
            </button>  
            <VisitorsCounter />
        </div>
    );
};

export default CanvasHeader;