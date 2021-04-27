import React, {useState, useEffect} from 'react';
import CanvasContent from './CanvasContent';
import CanvasHeader from './CanvasHeader';
import CanvasFooter from './CanvasFooter';
import GenreControl from './GenreControl';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Canvas = (props) => {

    const params = props.match.params;  

    

    return (
    <div id="CanvasContainer">
        <CanvasHeader />
        {/* <GenreControl handleGenreSelection={handleGenreSelection}/> */}
        <CanvasContent genreSelection={params}/>
        <CanvasFooter />
    </div>)    
}

export default Canvas;