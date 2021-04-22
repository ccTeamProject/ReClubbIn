import React from "react";
// let technoButton = "Techno";
// let classicButton = "Classic";
// let jazzButton = "Jazz";

// create a variable with an array that has the genre

//function that is about the genre button, make a division with a props parameter

function GenreButton(props) {
  // let musicButtons = ["Techno", "Classic", "Jazz"];
  return <button onClick={() => props.action()}>{props.musicButtonsTitle}</button>;

  // function WelcomeMessage(props) {
  //   return (
  //   <div>
  //   <h1>Hello {props.name}!</h1>
  //   </div>
  //   );
  //   }

  //   <div className="App">
  // <WelcomeMessage name="John" />
  // <WelcomeMessage name="Peter" />
  // </div>

  // <div>
  //   <button className="genre-button">{technoButton}</button>
  //   <button className="genre-button">{jazzButton}</button>
  // </div>
}

export default GenreButton;
