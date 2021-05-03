import React, {useState, useEffect} from 'react';
import MusicStream from './MusicStream';
import Visuals from './Visuals';


function CanvasContent({genreSelection}) {

    
    
    return (
    <div className='canvas-content'>
             
        <MusicStream genre={genreSelection}/>
        <Visuals genre = {genreSelection} />
    </div>
    );
};

export default CanvasContent;
