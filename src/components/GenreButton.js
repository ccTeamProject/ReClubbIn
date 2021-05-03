import React, {useState} from "react";
import "../GenreButton.css";
import {NavLink} from 'react-router-dom';




function GenreButton(props) {
  
  const link = `/genres/${props.musicButtonTitle}`

  return <button
   className="genre-button"

   >
    <NavLink to={link}>
       {props.musicButtonTitle}
    </NavLink>
   </button>;

}

export default GenreButton;