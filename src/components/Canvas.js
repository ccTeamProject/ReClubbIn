import React from 'react';
import CanvasContent from './CanvasContent';
import CanvasHeader from './CanvasHeader';
import CanvasFooter from './CanvasFooter';


const Canvas = (props) => {

    const params = props.match.params;  

    return (
    <div id="CanvasContainer">
        <CanvasHeader />
        <CanvasContent genreSelection={params}/>
        <CanvasFooter />
    </div>)    
}

export default Canvas;