import React, {useState, useEffect} from 'react';
import MusicStream from './MusicStream';
import Visuals from './Visuals';
import WaveVisual from './WaveVisual';


function CanvasContent({genreSelection}) {

    
    
    return (
    <div className='canvas-content'>
             
        <MusicStream genre={genreSelection}/>
        <Visuals genre = {genreSelection} />
       
        <canvas id="canvas"></canvas>
        <WaveVisual />
    </div>
    );
};

export default CanvasContent;
