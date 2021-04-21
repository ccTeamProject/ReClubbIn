import React from "react";


function GenreButton(props) {
  return <button onClick={() => props.action()}>{props.musicButtonTitle}</button>;

}

export default GenreButton;