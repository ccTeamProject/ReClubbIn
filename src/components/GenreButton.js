import React, {useState} from "react";
import "../GenreButton.css";
import {NavLink} from 'react-router-dom';




function GenreButton(props) {
  
  function Toggle(e){
    props.onClick(e);
    e.target.classList.toggle("active");
  }

  const link = `/genres/${props.musicButtonTitle}`

  return <button
   className="genre-button"
   onClick={Toggle}
   >
    <NavLink to={link}>
       {props.musicButtonTitle}
    </NavLink>
   </button>;

}

export default GenreButton;