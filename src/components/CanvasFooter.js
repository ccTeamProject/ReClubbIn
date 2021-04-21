import React from 'react';
import SubstanceButton from './SubstanceButton';
import {useState} from 'react';



const CanvasFooter = () => {

const [state, setstate] = useState(0)

    const addDrinks  = () => {
        
        setstate(state + 1)
    
    };


    return (
        <div className='canvas-footer'>
            {state}
            <SubstanceButton substanceName='Beer' addDrinks={addDrinks}/>
            <SubstanceButton substanceName='Tea'/>
            <SubstanceButton substanceName='Smiley'/>
        </div>
    );
};

export default CanvasFooter;

