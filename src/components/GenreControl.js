import React, {useState} from "react";
import GenreButton from "./GenreButton";

const myAmazingButton = [
    { Title: "Jazz"},
    { Title: "Classical"},
    { Title: "Techno"},
];

const GenreControl = (props) => {
    

    return (
        <div>
            <GenreButton musicButtonTitle='Jazz' onClick={props.handleGenreSelection} />
            <GenreButton musicButtonTitle='Classical' onClick={props.handleGenreSelection} />
            <GenreButton musicButtonTitle='Techno' onClick={props.handleGenreSelection} />


        </div>
    );
};

export default GenreControl;
