import React, {useState} from "react";
import GenreButton from "./GenreButton";


const GenreControl = () => {
    

    return (
        <div>
            <GenreButton musicButtonTitle='Jazz' />
            <GenreButton musicButtonTitle='Ambient'/>
            <GenreButton musicButtonTitle='Techno' />
            <GenreButton musicButtonTitle='Metal' />
            <GenreButton musicButtonTitle='Punk' />
            <GenreButton musicButtonTitle='Reggae' />

        </div>
    );
};

export default GenreControl;
