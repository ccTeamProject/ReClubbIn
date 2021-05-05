import React, {useState} from "react";
import GenreButton from "./GenreButton";
import "../GenreButton.css";


const GenreControl = () => {
    
    /* let[rotate, setRotate] = useState(0); */

    return (
        <div  className="genres-bloc">
            <GenreButton musicButtonTitle='Jazz' musicButtonClass="genre-button rotate-button1"/>
            <GenreButton musicButtonTitle='Ambient' musicButtonClass="genre-button rotate-button2"/>
            <GenreButton musicButtonTitle='Techno' musicButtonClass="genre-button rotate-button3"/>
            <GenreButton musicButtonTitle='Metal' musicButtonClass="genre-button rotate-button4"/>
            <GenreButton musicButtonTitle='Punk' musicButtonClass="genre-button rotate-button5"/>
            <GenreButton musicButtonTitle='Reggae' musicButtonClass="genre-button rotate-button6"/>

        </div>
    );
};

export default GenreControl;
