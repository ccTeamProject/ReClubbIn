import React from "react";


function GenreButton(props) {
  return <button onClick={props.onClick}>{props.musicButtonTitle}</button>;

}

export default GenreButton;