import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "../MusicStream.css";

const MusicStream = (props) => {

const {genre}= props.genre;

const newApiRoot ='https://discovery-us-01.audius.openplayer.org/v1/'

const [getStream, setGetStream] = useState([]);
let songIDs = getStream.map((song)=>song.id);
let randomSong = Math.floor(Math.random() * 99);;
let newAudioSource = `${newApiRoot}tracks/${songIDs[randomSong]}/stream`;


useEffect(()=>{

    axios
        .get(`${newApiRoot}tracks/trending?genre=${genre}`)
        .then((response)=>response.data)
        .then((data)=> setGetStream(data.data));
    
       


}, [genre]);


    return (
        <div>
            <audio className="audio-player" controls autoPlay={true} loop src={newAudioSource} >
                <p>Your browser does not support the <code>audio</code> element.</p>            
            </audio>
            
        </div>
    )
}


export default MusicStream
