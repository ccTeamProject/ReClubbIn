import React from 'react';
import SubstanceButton from './SubstanceButton';
import {useState} from 'react';



const CanvasFooter = () => {

const [state, setstate] = useState(false)

    const haveBeer  = () => {
        
        setstate(!state)
    
    };


    return (
        <div className='canvas-footer'>
            <div>{state ? 'True' : 'False'}</div>
            
            <SubstanceButton substanceName='Beer' haveBeer={haveBeer}/>
            <SubstanceButton substanceName='Tea'/>
            <SubstanceButton substanceName='Smiley'/>
        </div>
    );
};

export default CanvasFooter;

