import React from "react";
import GenreButton from "./GenreButton";
const myAmazingButton = [
  { Title: "Hello", onclick: () => console.log("hello") },
  { Title: "Bye", onclick: () => console.log("Bye") },
  { Title: "Techno", onclick: () => console.log("techno") },
];

const GenreControl = () => {
  return (
    <div className="genre-control">
      {/* <GenreButton musicButtons="Techno" />
      <GenreButton musicButtons="Jazz" />
      // <GenreButton musicButtons="Classic" /> */}
      {myAmazingButton.map((button, index) => (
        <GenreButton
          key={index}
          musicButtons={button.Title}
          action={() => button.onclick()}
        />
      ))}
    </div>
  );
};

export default GenreControl;
