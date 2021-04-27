import React, {useState, useEffect} from 'react';
import MusicStream from './MusicStream';
import Visuals from './Visuals';
import {NavLink} from 'react-router-dom';

function CanvasContent({genreSelection}) {

    
    
    return (
    <div className='content'>
        <button> 
            <NavLink to="/genres">back to genre-selection</NavLink>
        </button>       
        <MusicStream genre={genreSelection}/>
        <Visuals genre = {genreSelection} />
    </div>
    );
};

export default CanvasContent;
