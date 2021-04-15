import React from 'react';
import GenreControl from './GenreControl';
import axios from 'axios';

function CanvasContent() {
const audioSourceWeb = 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/viper.mp3';
const apiRoot = 'http://ws.audioscrobbler.com/2.0/'
//const audioSourceLocal = 'src/music/testMusic.mp3';
const apiKey = '9e28bb08c62299629031788c32bd7c10';
const tagName = 'jazz';
const limit ='5';
const apiMethod = 'tag.gettoptracks'

const [getMusic, setGetMusic] = React.useState([]);

React.useEffect(()=>{
    axios
        .get(`${apiRoot}?method=${apiMethod}&tag=${tagName}&limit=${limit}&api_key=${apiKey}&format=json`)
        .then((response)=>response.data)
        .then((data) => setGetMusic(data.tracks.track));
    

}, []);

    return (
    <div className='content'>
        <GenreControl />
        <audio controls autoPlay={true} loop src={audioSourceWeb} >
            <p>Your browser does not support the <code>audio</code> element.</p>            
        </audio>
        {console.log(getMusic)};
    </div>
    );
};

export default CanvasContent;
