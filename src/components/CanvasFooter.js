import React from 'react';
import BeerButton from './BeerButton';
import TeaButton from './TeaButton';
import SmileyButton from './SmileyButton';
import {useState} from 'react';



const CanvasFooter = () => {

    const beer = false;

const [state, setstate] = useState(false)

    const haveBeer  = () => {
        
        setstate(!state)
        };  
return (
        <div className='canvas-footer'>
            <div>{state ? 'True' : 'False'}</div>
            
            <BeerButton beerButton='Beer' haveBeer={haveBeer}/>
            <SmileyButton smileyName='Smiley' haveBeer={haveBeer}/>
           <TeaButton teaName='Tea' haveBeer={beer}/>
           
        </div>
    );
};

export default CanvasFooter