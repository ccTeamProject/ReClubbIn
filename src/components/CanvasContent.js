import React from 'react';
import GenreControl from './GenreControl';
import axios from 'axios';
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
