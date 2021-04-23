import React from 'react';
import CanvasContent from './CanvasContent';
import CanvasHeader from './CanvasHeader';
import CanvasFooter from './CanvasFooter';

const Canvas = () => {
    return (
    <div id="CanvasContainer">
        <CanvasHeader />
        <CanvasContent />
        <CanvasFooter />
    </div>)    
}

export default Canvas;