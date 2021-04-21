import React, {useState} from "react";
import GenreButton from "./GenreButton";


const GenreControl = (props) => {

    const [genreSelection, setGenreSelection] = useState('Jazz');


    const myAmazingButton = [
        { Title: "Jazz", onclick: () => console.log({genreSelection})  },
        { Title: "Classic", onclick: () => console.log("Classic") },
        { Title: "Techno", onclick: () => console.log("techno") },
      ];
  return (
    <div className="genre-control">

      {myAmazingButton.map((button, index) => (
        <GenreButton
          key={index}
          musicButtonTitle={button.Title}
          action={() => button.onclick()}
        />
      ))}
    </div>
  );
};

export default GenreControl;
