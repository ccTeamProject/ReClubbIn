import React, { useState, useEffect} from 'react';
import axios from 'axios';

const MusicStream = props => {
    const audioSourceWeb = 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/viper.mp3';
const apiRoot = 'https://freesound.org/apiv2/'
const apiKey = 'P4oNXak4GuVnmaP4XIdFa7NYpDmNugG5LmC0zFPK';
const genre = 'jazz';
const soundID ='456797';
const soundID2 ='377540';
const soundID3 ='365378';

const [getMusic, setGetMusic] = React.useState([]);
let audioSource = getMusic;

React.useEffect(()=>{
    axios
        .get(`${apiRoot}sounds/${soundID3}/?&format=json&fields=id,name,previews&token=${apiKey}`)
        .then((response)=>response.data)
        .then((data) => data.previews)
        .then((previews) => setGetMusic(previews["preview-hq-mp3"]))

}, []);


    return (
        <div>
            <audio controls autoPlay={true} loop src={audioSource} >
            <p>Your browser does not support the <code>audio</code> element.</p>            
        </audio>
            
        </div>
    )
}


export default MusicStream
