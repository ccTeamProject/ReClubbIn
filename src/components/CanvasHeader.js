import React from 'react';
import VisitorsCounter from './VisitorsCounter';
import VolumeControl from './VolumeControl';

const CanvasHeader = () => {
    return (
        <div className='canvas-header'>
            <VolumeControl />
            <VisitorsCounter />
        </div>
    );
};

export default CanvasHeader;