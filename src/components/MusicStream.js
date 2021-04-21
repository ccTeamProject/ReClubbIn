import React, { useState, useEffect} from 'react';
import axios from 'axios';

const MusicStream = props => {
const apiRoot = 'https://freesound.org/apiv2/'
const apiKey = 'P4oNXak4GuVnmaP4XIdFa7NYpDmNugG5LmC0zFPK';
let genre = props.genre;
const soundID1 ='456797';
const soundID2 ='377540';
const soundID3 ='365378';

const [getMusic, setGetMusic] = React.useState([]);
let audioSource = getMusic;

React.useEffect(()=>{
    let soundID = soundID3;
    if (genre == 'Classic') {
        soundID = soundID3;
    };
    if (genre == 'Jazz') {
        soundID = soundID1;
    };
    if (genre == 'Techno') {
        soundID = soundID2;
    };

    axios
        .get(`${apiRoot}sounds/${soundID}/?&format=json&fields=id,name,previews&token=${apiKey}`)
        .then((response)=>response.data)
        .then((data) => data.previews)
        .then((previews) => setGetMusic(previews["preview-hq-mp3"]))

}, [genre]);


    return (
        <div>
            <audio controls autoPlay={true} loop src={audioSource} >
            <p>Your browser does not support the <code>audio</code> element.</p>            
        </audio>
            
        </div>
    )
}


export default MusicStream
