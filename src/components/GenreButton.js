import React from "react";
import "../GenreButton.css";

function Toggle(e){
  e.target.classList.toggle("active")
}

function GenreButton(props) {
  return <button
   className="genre-button"
   onClick={props.onClick && Toggle}
   >{props.musicButtonTitle}
   </button>;

}

export default GenreButton;