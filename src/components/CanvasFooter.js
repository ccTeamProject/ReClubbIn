import React from 'react';
import SubstanceButton from './SubstanceButton';

const CanvasFooter = () => {
    return (
        <div className='canvas-footer'>
            <SubstanceButton substanceName='Beer'/>
            <SubstanceButton substanceName='Tea'/>
            <SubstanceButton substanceName='Smiley'/>
        </div>
    );
};

export default CanvasFooter;

