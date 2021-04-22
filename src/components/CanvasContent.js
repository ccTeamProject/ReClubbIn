import React, {useState, useEffect} from 'react';
import GenreControl from './GenreControl';
import MusicStream from './MusicStream';
import Visuals from './Visuals';

function CanvasContent() {

    const [genreSelection, setGenreSelection] = useState('Jazz');

    function handleGenreSelection(e) {        
        setGenreSelection(e.target.innerText);
    }

    useEffect(()=>{console.log(genreSelection)},[genreSelection]);
    
    return (
    <div className='content'>
        <GenreControl handleGenreSelection={handleGenreSelection}/>
        <MusicStream genre={genreSelection}/>
        <Visuals genre = {genreSelection} />
    </div>
    );
};

export default CanvasContent;
