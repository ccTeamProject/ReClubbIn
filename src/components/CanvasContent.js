import React from 'react';
import GenreControl from './GenreControl';

function CanvasContent() {
const audioSourceWeb = 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/viper.mp3';
const audioSourceLocal = 'src/music/testMusic.mp3';


    return (
    <div className='content'>
        <GenreControl />
        <audio controls autoPlay={true} preload="auto" loop src={audioSourceWeb} >
            <p>Your browser does not support the <code>audio</code> element.</p>            
        </audio>
    </div>
    );
};

export default CanvasContent;
