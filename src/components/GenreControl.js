import React, {useState} from "react";
import GenreButton from "./GenreButton";


const GenreControl = () => {
    

    return (
        <div>
            <GenreButton musicButtonTitle='Jazz' />
            <GenreButton musicButtonTitle='Alternative'/>
            <GenreButton musicButtonTitle='Techno' />
            <GenreButton musicButtonTitle='Metal' />

        </div>
    );
};

export default GenreControl;
