import React, {useState} from "react";
import GenreButton from "./GenreButton";

const myAmazingButton = [
    { Title: "Jazz"},
    { Title: "Classical"},
    { Title: "Techno"},
];

const GenreControl = () => {
    

    return (
        <div>
            <GenreButton musicButtonTitle='Jazz' />
            <GenreButton musicButtonTitle='Classical'/>
            <GenreButton musicButtonTitle='Techno' />


        </div>
    );
};

export default GenreControl;
