import React, {useState} from "react";
import GenreButton from "./GenreButton";

const myAmazingButton = [
    { Title: "Jazz"},
    { Title: "Classical"},
    { Title: "Techno"},
];

const GenreControl = (props) => {
    const [isActive, setActive] = useState(false)

    return (
        <div>

        {myAmazingButton.map((button, index) => (
            <GenreButton
                isActive={isActive}
                key={index}
                 musicButtonTitle={button.Title}
                onClick={props.handleGenreSelection}
            
                
            />
        ))}
        </div>
    );
};

export default GenreControl;
