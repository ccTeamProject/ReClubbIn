import React, {useState} from "react";
import GenreButton from "./GenreButton";

const myAmazingButton = [
    { Title: "Jazz"},
    { Title: "Classical"},
    { Title: "Techno"},
];

const GenreControl = (props) => {
    return (
        <div className="genre-control">

        {myAmazingButton.map((button, index) => (
            <GenreButton
                key={index}
                 musicButtonTitle={button.Title}
                onClick={props.handleGenreSelection}
            />
        ))}
        </div>
    );
};

export default GenreControl;
