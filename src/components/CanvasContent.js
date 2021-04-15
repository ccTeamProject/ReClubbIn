import React from 'react';
import GenreControl from './GenreControl';
import axios from 'axios';

function CanvasContent() {
const audioSourceWeb = 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/viper.mp3';
//const audioSourceTest = 'https://www.last.fm/music/Amy+Winehouse';
//const audioSourceLocal = 'src/music/testMusic.mp3';
const apiRoot = 'https://freesound.org/apiv2/'
const apiKey = 'P4oNXak4GuVnmaP4XIdFa7NYpDmNugG5LmC0zFPK';
const genre = 'jazz';
const limit ='5';
const soundID ='456797';
//const apiMethod = 'tag.gettoptracks'

const [getMusic, setGetMusic] = React.useState([]);
let audioSource = getMusic;

React.useEffect(()=>{
    axios
        .get(`${apiRoot}sounds/${soundID}/?&format=json&fields=id,name,previews&token=${apiKey}`)
        .then((response)=>response.data)
        .then((data) => data.previews)
        .then((previews) => setGetMusic(previews["preview-hq-mp3"]))

}, []);

    return (
    <div className='content'>
        <GenreControl />
        <audio controls autoPlay={true} loop src={audioSource} >
            <p>Your browser does not support the <code>audio</code> element.</p>            
        </audio>
        {console.log(getMusic)};
    </div>
    );
};

export default CanvasContent;
