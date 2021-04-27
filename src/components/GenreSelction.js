import React, {useState, useEffect} from 'react'
import GenreControl from './GenreControl'

const GenreSelction = () => {


    const [genreSelection, setGenreSelection] = useState('Jazz');

    function handleGenreSelection(e) {        
        setGenreSelection(e.target.innerText);
    }
    useEffect(()=>{console.log(genreSelection)},[genreSelection]);
    
    return (
        <div>
            <GenreControl handleGenreSelection={handleGenreSelection}/>
            
        </div>
    )
}

export default GenreSelction;
