import React, {useState, useEffect} from 'react';
import GenreControl from './GenreControl';
import MusicStream from './MusicStream';

function CanvasContent() {
    
    return (
    <div className='content'>
        <GenreControl />
        <MusicStream />
    </div>
    );
};

export default CanvasContent;
