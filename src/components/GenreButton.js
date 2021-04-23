import React, {useState} from "react";
import "../GenreButton.css";



function GenreButton(props) {
  
  function Toggle(e){
    props.onClick(e);
    e.target.classList.toggle("active");
  }

  return <button
   className="genre-button"
   onClick={Toggle}
   >{props.musicButtonTitle}
   </button>;

}

export default GenreButton;