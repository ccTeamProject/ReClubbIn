import React from 'react';
import GenreButton from './GenreButton';

const GenreControl = () => {
    return (
        <div className='genre-control'>
            <GenreButton />
            <GenreButton />
            <GenreButton />
        </div>
    );
};

export default GenreControl;