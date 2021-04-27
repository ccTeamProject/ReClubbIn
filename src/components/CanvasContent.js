import React, {useState, useEffect} from 'react';
import GenreControl from './GenreControl';
import MusicStream from './MusicStream';
import Visuals from './Visuals';

function CanvasContent({genreSelection}) {

    
    
    return (
    <div className='content'>        
        <MusicStream genre={genreSelection}/>
        <Visuals genre = {genreSelection} />
    </div>
    );
};

export default CanvasContent;
